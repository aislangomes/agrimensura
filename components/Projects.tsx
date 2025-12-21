"use client";
import { LightboxZoom } from "./ui/LightboxZoom";

export function Projects() {
  const items = [
    { type: "image", src: "peixoto.png", title: "Levantamento Topográfico" },
    { type: "image", src: "desmembramento.png", title: "Desmembramento" },
    { type: "video", src: "ace.mp4", title: "Mapeamento Aéreo" },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-12">
          Projetos Recentes
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-lg shadow-md overflow-hidden">
              {item.type === "image" ? (
  <LightboxZoom src={item.src} alt={item.title} />
) : (
  <video controls className="w-full h-64 object-cover">
    <source src={item.src} type="video/mp4" />
  </video>
)}
              <p className="mt-2 text-gray-700 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
