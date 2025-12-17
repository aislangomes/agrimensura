"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Image src="/icon.svg" alt="Logo" width={40} height={40} className="fill-accent" />
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-primary uppercase font-bold">Serviços</a>
          <a href="#projects" className="hover:text-primary uppercase font-bold">Projetos</a>
          <a href="#contact" className="hover:text-primary uppercase font-bold">Contato</a>
        </nav>
      </div>
    </header>
  );
}
