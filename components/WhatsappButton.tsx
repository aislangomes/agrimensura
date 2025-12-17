"use client";

import Image from "next/image";

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5515997260425"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 text-white rounded-full"
    >
      <Image src="/WhatsApp.svg" width={64} height={64}  alt="WhatsApp" className="hover:-rotate-12 hover:scale-125 transition"/>
    </a>
  );
}
