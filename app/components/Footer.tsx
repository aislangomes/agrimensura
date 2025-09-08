"use client";

import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-10 mt-12">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Informações de Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <p className="flex items-center gap-2">
            <Phone size={18} /> (11) 99999-9999
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail size={18} /> contato@aceagrimensura.com
          </p>
        </div>

        {/* Endereço e Horário */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Endereço</h3>
          <p className="flex items-start gap-2">
            <MapPin size={18} /> Rua Exemplo, 123 - Centro, São Paulo - SP
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Clock size={18} /> Seg - Sex: 08h às 18h
          </p>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/seuinstagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://linkedin.com/in/seulinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://wa.me/55SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <MessageCircle size={22} />
            </a>
            <a
              href="https://youtube.com/seuyoutube"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Youtube size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-primary pt-4 text-sm text-gray-200">
        &copy; {new Date().getFullYear()} ACE Agrimensura. Todos os direitos reservados.
      </div>
    </footer>
  );
}
