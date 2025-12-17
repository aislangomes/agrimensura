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

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
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
      <div className="relative max-h-[85vh] max-w-[90vw] w-full h-full overflow-hidden flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          fill // Usa fill para ocupar o container do lightbox
          className="transition-transform duration-200 cursor-zoom-in object-contain"
          unoptimized // Evita erros de domínio externo no deploy
          style={{
            transform: zoomed ? "scale(2.5)" : "scale(1)", // Aumentei o scale para o zoom ficar mais visível
            transformOrigin: `${origin.x}% ${origin.y}%`,
          }}
          onClick={(e) => {
            e.stopPropagation();
            setZoomed((z) => !z);
          }}
        />
      </div>
    </div>
  );
}