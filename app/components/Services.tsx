"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Map, Camera, Drone } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12">
          Nossos Serviços
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="shadow-md">
            <CardHeader>
              <Ruler className="w-10 h-10 mx-auto text-green-700" />
              <CardTitle className="mt-4">Topografia</CardTitle>
            </CardHeader>
            <CardContent>
              Levantamentos topográficos de alta precisão para projetos de
              engenharia e construção.
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <Map className="w-10 h-10 mx-auto text-green-700" />
              <CardTitle className="mt-4">Georreferenciamento</CardTitle>
            </CardHeader>
            <CardContent>
              Regularização de imóveis rurais com base nas normas do INCRA.
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <Drone className="w-10 h-10 mx-auto text-green-700" />
              <CardTitle className="mt-4">Drone Mapping</CardTitle>
            </CardHeader>
            <CardContent>
              Mapeamento aéreo com drones para imagens e modelos 3D de terrenos.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
