import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center text-center"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg2.png"
          width={1920}
          height={1080}
          alt="Imagem de fundo ACE Agrimensura"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" /> {/* overlay escuro */}
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10 text-primary-foreground px-6 pb-60">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-primary">
          Topografia & Agrimensura
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Precisão, tecnologia e confiança para seus projetos de topografia e georreferenciamento
        </p>
        <a
          href="#contact"
          className="px-8 py-4 bg-accent hover:bg-accent/95 transition-colors font-semibold rounded-xl shadow-lg"
        >
          Entre em Contato
        </a>
      </div>
    </section>
  );
}
