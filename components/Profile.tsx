"use client";

import Image from "next/image";
import { ImageZoom } from "./ui/shadcn-io/image-zoom";

export function Profile() {
  const items = [
    { type: "image", src: "cesar.jpg", title: "Cesar Adilson Lopes Gomes" },
    { type: "image", src: "aislan.jpg", title: "Aislan César Alves Gomes" },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-12 scren">
          Profissionais
        </h2>
        <div className="flex justify-around gap-2 md:flex-row flex-col">
          <span className="flex gap-4 md:flex-row flex-col">
            <ImageZoom>
                    <Image
                      alt="Cesar Adilson Lopes Gomes"
                      className="h-max-[320px] w-max-[320px] object-cover rounded-2xl"
                      height={320}
                      src="cesar.jpg"
                      unoptimized
                      width={320}
                    />
              </ImageZoom>
              <span className="text-xl text-left text-white leading-8">
                <h2 className="text-2xl text-left text-white font-bold">Cesar Adilson Lopes Gomes</h2>
                <p>Técnico em Agrimensura</p>
                <p>cesaradilsonlg@gmail.com</p>
                <p>CR: 42334234</p>
              </span>
            </span>
            <span className="flex gap-4 md:flex-row flex-col">
              <ImageZoom>
                    <Image
                      alt="Aislan César Alves Gomes"
                      className="h-max-[320px] w-max-[320px] object-cover  rounded-2xl"
                      height={320}
                      src="aislan.jpg"
                      unoptimized
                      width={320}
                    />
              </ImageZoom>
              <span className="text-xl text-left text-white leading-8">
                <h2 className="text-2xl text-left text-white font-bold ">Aislan César Alves Gomes</h2>
                <p>Operador e Programador</p>
                <p>aislancesarag@gmail.com</p>
              </span>
            </span>
        </div>
      </div>
    </section>
  );
}
