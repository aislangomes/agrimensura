"use client";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gr text-primary-foreground mb-8">
          Entre em Contato
        </h2>
        <form className="max-w-xl mx-auto grid gap-4 text-left">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full border rounded-md p-3 bg-primary-foreground"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full border rounded-md p-3 bg-primary-foreground"
          />
          <textarea
            placeholder="Sua mensagem"
            rows={5}
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
