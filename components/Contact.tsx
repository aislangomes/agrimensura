"use client";

import { sendEmail } from "@/app/actions"; // Importe a action que criamos
import { useRef } from "react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    const result = await sendEmail(formData);
    if (result.success) {
      alert("E-mail enviado com sucesso!");
      formRef.current?.reset(); // Limpa o formulário
    } else {
      alert("Erro ao enviar e-mail.");
    }
  }
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
          Entre em Contato
        </h2>
        <form ref={formRef} action={handleAction} className="max-w-xl mx-auto grid gap-4 text-left">
          <input
            name="name"
            type="text"
            placeholder="Seu nome"
            required
            className="w-full border rounded-md p-3 bg-primary-foreground"
          />
          <input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            required
            className="w-full border rounded-md p-3 bg-primary-foreground"
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            rows={5}
            required
            className="w-full border rounded-md p-3 bg-primary-foreground"
          />
          <button
            type="submit"
            className="bg-accent text-white py-3 rounded-lg hover:bg-green-800 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
