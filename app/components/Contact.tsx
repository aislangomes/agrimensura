"use client";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
          Entre em Contato
        </h2>
        <form className="max-w-xl mx-auto grid gap-4 text-left">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full border rounded-md p-3"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full border rounded-md p-3"
          />
          <textarea
            placeholder="Sua mensagem"
            rows={5}
            className="w-full border rounded-md p-3"
          />
          <button
            type="submit"
            className="bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
