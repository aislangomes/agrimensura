"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface LightboxZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export function LightboxZoom({ src, alt, className }: LightboxZoomProps) {
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  // Fecha o lightbox e reseta o zoom
  const closeLightbox = useCallback(() => {
    setOpen(false);
    setZoomed(false);
  }, []);

  // Bloqueia o scroll do corpo da página quando aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox]);

  // Função para calcular a posição do zoom (Mouse ou Touch)
  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!zoomed) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let clientX, clientY;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setOrigin({ x, y });
  };

  const thumbnail = (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className={`cursor-zoom-in max-h-[260px] w-full object-cover rounded-lg ${className}`}
      unoptimized
      onClick={() => setOpen(true)}
    />
  );

  if (!open) return thumbnail;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-2 sm:p-4 touch-none"
      onClick={closeLightbox}
    >
      {/* Botão Fechar para Mobile/Desktop */}
      <button 
        className="absolute top-6 right-6 z-[110] text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
        onClick={closeLightbox}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <div 
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        onMouseMove={handlePointerMove}
        onTouchMove={handlePointerMove}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`transition-transform duration-200 ease-out object-contain ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
          unoptimized
          style={{
            transform: zoomed ? "scale(2.5)" : "scale(1)",
            transformOrigin: `${origin.x}% ${origin.y}%`,
          }}
          onClick={(e) => {
            e.stopPropagation();
            setZoomed(!zoomed);
          }}
        />
      </div>

      {/* Dica visual para o usuário mobile */}
      {!zoomed && (
        <p className="absolute bottom-10 text-white/50 text-sm pointer-events-none">
          Toque para dar zoom
        </p>
      )}
    </div>
  );
}