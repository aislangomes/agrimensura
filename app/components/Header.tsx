"use client";

import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-primary">ACE Agrimensura</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-primary">Serviços</a>
          <a href="#projects" className="hover:text-primary">Projetos</a>
          <a href="#contact" className="hover:text-primary">Contato</a>
        </nav>
      </div>
    </header>
  );
}
