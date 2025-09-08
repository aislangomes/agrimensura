"use client";

import { MessageCircle, Phone } from "lucide-react";

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/55SEUNUMERO"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 text-white pt-1.5 pl-2 pb-2 pr-1.5 rounded-full shadow-lg hover:bg-green-700 transition"
    >
      <span className="relative">
        <MessageCircle className="w-12 h-12"/>
        <Phone fill="#fff" strokeWidth="0px"  className="absolute top-3 left-3 w-6 h-6" />
      </span>
    </a>
  );
}
