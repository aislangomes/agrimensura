"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface LightboxZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export function LightboxZoom({ src, alt, className }: LightboxZoomProps) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  // fechar com ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // miniatura (usa Next Image)
  const thumbnail = (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className={`cursor-zoom-in max-h-[260px] w-full object-cover ${className}`}
      unoptimized
      onClick={() => {
        setOpen(true);
        setZoomed(false);
      }}
    />
  );

  if (!open) return thumbnail;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onClick={() => setOpen(false)}
      onContextMenu={(e) => {
        e.preventDefault();
        setOpen(false);
      }}
      onMouseMove={(e) => {
        if (!zoomed) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        setOrigin({ x, y });
      }}
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[85vh] max-w-[90vw] transition-transform duration-200 cursor-zoom-in"
        style={{
          transform: zoomed ? "scale(1.6)" : "scale(1)",
          transformOrigin: `${origin.x}% ${origin.y}%`,
        }}
        onClick={(e) => {
          e.stopPropagation();
          setZoomed((z) => !z); // segundo clique ativa/desativa zoom
        }}
      />
    </div>
  );
}
