"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

const team = [
  { title: "Ejecutivos en ruta", desc: "Abastecen chips, revisan exhibición y atienden el local en persona." },
  { title: "Mesa de operaciones", desc: "Altas, validación de líneas y aclaraciones." },
  { title: "Asesores de producto", desc: "Cotizador Dar Credi y terminal PagaFast." },
  { title: "Logística", desc: "Inventario y material de mostrador." },
];

const coverageStates = [
  { state: "Jalisco", cities: "Guadalajara, Zapopan, Tlaquepaque, Tonalá, Puerto Vallarta" },
  { state: "Guanajuato", cities: "León, Irapuato, Celaya, Salamanca" },
  { state: "Nuevo León", cities: "Monterrey, San Pedro, Escobedo, Apodaca, Guadalupe" },
  { state: "Sinaloa", cities: "Culiacán, Mazatlán, Los Mochis, Guasave" },
  { state: "Estado de México", cities: "Ecatepec, Toluca, Naucalpan, Tlalnepantla" },
  { state: "Ciudad de México", cities: "Iztapalapa, GAM, Cuauhtémoc, Venustiano Carranza" },
  { state: "Michoacán", cities: "Morelia, Uruapan, Zamora, Lázaro Cárdenas" },
  { state: "Sonora", cities: "Hermosillo, Ciudad Obregón, Nogales" },
  { state: "Aguascalientes", cities: "Aguascalientes, Jesús María" },
  { state: "Colima", cities: "Colima, Villa de Álvarez, Manzanillo" },
  { state: "Nayarit", cities: "Tepic, Bahía de Banderas, Xalisco" },
  { state: "Zacatecas", cities: "Zacatecas, Guadalupe, Fresnillo" },
  { state: "San Luis Potosí", cities: "San Luis Potosí, Soledad, Ciudad Valles" },
  { state: "Querétaro", cities: "Querétaro, San Juan del Río, Corregidora" },
  { state: "Tamaulipas", cities: "Reynosa, Matamoros, Nuevo Laredo, Tampico" },
];

export default function EquipoCoberturaPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStates = coverageStates.filter(
    (c) =>
      c.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.cities.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Un equipo que visita tu negocio"
        subtitle="Ruta semanal en más de 15 estados."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
              Solicitar visita
            </Link>
            <Link href="#cobertura" className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 rounded">
              Ver estados
            </Link>
          </div>
        }
      />

      <section className="py-14">
        <div className="section-container">
          <SectionHeading title="Quién te atiende" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((t) => (
              <div key={t.title} className="border border-slate-100 p-5">
                <h3 className="font-display font-bold text-sm mb-1">{t.title}</h3>
                <p className="text-sm text-slate-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cobertura" className="py-14 border-t border-slate-100">
        <div className="section-container">
          <SectionHeading title="Cobertura" />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar estado o ciudad"
            className="field-input max-w-sm mb-6"
          />
          {filteredStates.length === 0 ? (
            <p className="text-sm text-slate-500">
              Sin resultados para {searchTerm}.{" "}
              <Link href="/contacto" className="text-[#1EA7E0]">
                Preguntar por tu zona
              </Link>
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
              {filteredStates.map((c) => (
                <div key={c.state} className="py-3 border-b border-slate-100">
                  <h3 className="font-display font-bold text-sm">{c.state}</h3>
                  <p className="text-sm text-slate-500">{c.cities}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
