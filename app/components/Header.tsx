"use client";

import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-primary">ACE</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-primary uppercase">Serviços</a>
          <a href="#projects" className="hover:text-primary uppercase">Projetos</a>
          <a href="#contact" className="hover:text-primary uppercase">Contato</a>
        </nav>
      </div>
    </header>
  );
}
