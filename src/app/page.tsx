"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Plus,
  Store,
  Briefcase,
  Radio,
} from "lucide-react";

const solutions = [
  {
    id: "conectividad",
    brand: "Conectividad",
    title: "Chips y portabilidades",
    figure: "150",
    figureNote: "hasta $",
    description: "Abastecimiento de chips Telcel, AT&T y Movistar con activación digital en mostrador.",
    specs: [
      { label: "Comisión por portabilidad", val: "Hasta $150" },
      { label: "Activación", val: "En tiempo real" },
      { label: "Inventario", val: "Visita semanal" },
    ],
    href: "/soluciones/conectividad",
  },
  {
    id: "dar-credi",
    brand: "Dar Credi",
    title: "Celulares a crédito",
    figure: "0%",
    figureNote: "riesgo",
    description: "Vende smartphones en cuotas semanales. DAR absorbe cartera y cobranza.",
    specs: [
      { label: "Riesgo de cartera", val: "0% para tu tienda" },
      { label: "Aprobación", val: "5 min con INE" },
      { label: "Marcas", val: "Samsung, Xiaomi, Apple" },
    ],
    href: "/soluciones/dar-credi",
  },
  {
    id: "pagafast",
    brand: "PagaFast",
    title: "Cobro de servicios",
    figure: "100+",
    figureNote: "servicios",
    description: "CFE, agua, peajes y recargas en una sola terminal con saldo unificado.",
    specs: [
      { label: "Acreditación", val: "Tiempo real" },
      { label: "Tráfico en tienda", val: "+40% visitas" },
      { label: "Contratos", val: "Sin anualidad" },
    ],
    href: "/soluciones/pagafast",
  },
];

const newsArticles = [
  {
    id: 1,
    title: "Incremento de comisiones en portabilidades Telcel y AT&T",
    desc: "Nuevos esquemas de incentivo directo por cada línea portada en puntos de venta afiliados.",
    date: "15.09.2026",
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Nuevos modelos Xiaomi y Samsung en Dar Credi",
    desc: "Smartphones de alta demanda con financiamiento semanal sin tarjeta para tu mostrador.",
    date: "12.09.2026",
    image: "https://images.pexels.com/photos/4042807/pexels-photo-4042807.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "PagaFast suma convenios municipales de cobro",
    desc: "Predial, agua y licencias locales desde tu mostrador con acreditación inmediata.",
    date: "08.09.2026",
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const stats = [
  { kicker: "Más de", number: "5000", label: "puntos de venta" },
  { kicker: "Más de", number: "15", label: "estados con ruta" },
  { kicker: "Más de", number: "300", label: "rutas comerciales" },
  { kicker: "Desde", number: "2003", label: "años de trayectoria" },
];

export default function HomePage() {
  const [audienceTab, setAudienceTab] = useState(1);

  return (
    <div className="relative bg-white text-[#1B2A4A] min-h-screen font-sans">
      <section className="relative bg-gradient-to-r from-[#1EA7E0] via-[#1896D4] to-[#0E7FBE] text-white overflow-hidden pt-10 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24">
        <button
          className="hidden xl:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white items-center justify-center"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white items-center justify-center"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            <div className="lg:col-span-6 min-w-0">
              <h1 className="font-display font-black text-[2rem] sm:text-[2.35rem] lg:text-[3.25rem] text-white tracking-tight leading-[1.12] mb-6 text-balance">
                Ecosistema para tu negocio
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-[0.9rem] text-white/95 mb-8">
                {[
                  "Chips Telcel, AT&T y Movistar",
                  "Dar Credi sin riesgo",
                  "Terminal PagaFast +100 servicios",
                  "Ruta semanal en tu local",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD44D] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 mb-8">
                <Link
                  href="/contacto"
                  className="bg-white text-[#1EA7E0] hover:bg-white/95 font-display font-bold text-sm px-6 py-2.5 min-h-11 inline-flex items-center justify-center rounded transition-colors"
                >
                  Afiliarme
                </Link>
                <Link
                  href="/soluciones"
                  className="bg-transparent text-white border border-white/70 hover:bg-white/10 font-display font-semibold text-sm px-6 py-2.5 min-h-11 inline-flex items-center justify-center rounded transition-colors"
                >
                  Ver detalles
                </Link>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
            </div>

            <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-w-0">
              <div className="relative w-full max-w-md overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Soluciones DAR para tu punto de venta"
                  className="w-full h-[200px] sm:h-[260px] md:h-[320px] object-cover object-center drop-shadow-2xl"
                />
                <div className="absolute right-3 bottom-3 sm:right-4 sm:bottom-8 text-right">
                  <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#FFD44D]">
                    Más de
                  </div>
                  <div className="font-display font-black text-4xl sm:text-6xl text-[#FFD44D] leading-none">
                    140
                  </div>
                  <div className="text-[0.65rem] sm:text-xs font-bold text-white uppercase tracking-wide">
                    servicios activos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-8 relative z-20 mb-4">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { id: 0, icon: Store, title: "Para el negocio", desc: "Tiendas, farmacias y mostradores" },
              { id: 1, icon: Briefcase, title: "Para distribuidores", desc: "Mayoristas y cadenas regionales" },
              { id: 2, icon: Radio, title: "Comunidad raDAR", desc: "Portal, recompensas y bonos" },
            ].map((card) => {
              const Icon = card.icon;
              const active = audienceTab === card.id;
              return (
                <button
                  key={card.id}
                  onClick={() => setAudienceTab(card.id)}
                  className={`bg-white px-4 sm:px-5 py-4 rounded-sm border text-left flex items-center justify-between gap-3 min-w-0 w-full shadow-sm transition-all ${
                    active ? "border-[#FFD44D] border-2" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-11 h-11 rounded-full bg-[#FFD44D] text-[#1B2A4A] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-sm text-[#1B2A4A]">{card.title}</div>
                      <div className="text-xs text-slate-400">{card.desc}</div>
                    </div>
                  </div>
                  {active && (
                    <span className="w-7 h-7 rounded-sm bg-[#FFD44D] text-[#1B2A4A] flex items-center justify-center shrink-0">
                      <Plus className="w-3.5 h-3.5" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3">
              <h2 className="font-display font-black text-2xl sm:text-[1.75rem] text-[#1B2A4A] tracking-tight mb-2">
                Novedades
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed mb-5 max-w-[220px]">
                Promociones, activaciones y servicios nuevos para tu mostrador.
              </p>
              <Link href="/comunidad-radar/historias" className="btn-primary !py-2 !px-5 !text-xs !rounded">
                Ver todas
              </Link>
              <div className="flex items-center gap-2 mt-8">
                <button className="w-7 h-7 rounded-sm border border-slate-200 flex items-center justify-center text-slate-500" aria-label="Anterior">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-7 h-7 rounded-sm border border-slate-200 flex items-center justify-center text-slate-500" aria-label="Siguiente">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-w-0">
              {newsArticles.map((article) => (
                <article key={article.id}>
                  <div className="h-32 rounded-sm overflow-hidden mb-3 bg-slate-100">
                    <img src={article.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-display font-bold text-[0.8rem] text-[#1B2A4A] leading-snug mb-1.5">
                    {article.title}
                  </h3>
                  <p className="text-[0.72rem] text-slate-400 leading-relaxed mb-2">{article.desc}</p>
                  <div className="text-[0.68rem] text-slate-400">{article.date}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
            <h2 className="font-display font-black text-2xl sm:text-[1.75rem] text-[#1B2A4A] tracking-tight">
              Elige tu modelo
            </h2>
            <Link href="/soluciones" className="text-xs text-slate-400 hover:text-[#1EA7E0] inline-flex items-center gap-1.5 self-start">
              Descargar catálogo
              <Download className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <div key={sol.id} className="bg-white rounded-sm border border-slate-100 p-5 sm:p-6 min-w-0 shadow-[0_8px_30px_rgba(27,42,74,0.04)]">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <span className="text-[0.7rem] text-slate-400">{sol.brand}</span>
                    <h3 className="font-display font-bold text-lg text-[#1B2A4A]">{sol.title}</h3>
                  </div>
                  <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#E8F7FC] text-[#1EA7E0] flex flex-col items-center justify-center shrink-0">
                    <span className="font-display font-black text-xl leading-none">{sol.figure}</span>
                    <span className="text-[0.55rem] font-semibold uppercase tracking-wide mt-0.5">{sol.figureNote}</span>
                  </div>
                </div>

                <div className="divide-y divide-slate-100 text-[0.8rem] mb-6">
                  {sol.specs.map((sp) => (
                    <div key={sp.label} className="py-2.5 flex items-center justify-between gap-3">
                      <span className="text-slate-400">{sp.label}</span>
                      <span className="font-semibold text-[#1B2A4A] text-right">{sp.val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href={sol.href} className="btn-primary !py-2 !px-5 !text-xs !rounded">
                    Afiliarme
                  </Link>
                  <Link href={sol.href} className="text-xs text-slate-400 hover:text-[#1EA7E0] min-h-11 inline-flex items-center">
                    Más información
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                <div className="absolute inset-0 rounded-full bg-[#FFD44D]" />
                <div className="absolute -right-2 -bottom-2 w-40 h-40 rounded-full bg-[#1EA7E0]" />
                <img
                  src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Terminal PagaFast"
                  className="relative z-10 w-full h-full object-contain drop-shadow-xl p-6"
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1B2A4A] mb-3">
                Terminal PagaFast
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-lg">
                Convierte tu negocio en el centro de pagos de tu colonia: CFE, agua, telefonía y recargas con saldo único, las 24 horas.
              </p>
              <div className="flex flex-wrap items-center gap-5 mb-6">
                <div>
                  <div className="text-[0.68rem] text-slate-400">Costo de afiliación</div>
                  <div className="font-display font-black text-2xl text-[#1B2A4A]">$0</div>
                </div>
                <Link href="/soluciones/pagafast" className="btn-primary !py-2 !px-5 !text-xs !rounded">
                  Solicitar
                </Link>
              </div>
              <div className="flex items-center justify-between max-w-lg">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1EA7E0]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 rounded-sm border border-slate-200 flex items-center justify-center text-slate-500" aria-label="Anterior">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-7 h-7 rounded-sm border border-slate-200 flex items-center justify-center text-slate-500" aria-label="Siguiente">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-gradient-to-r from-[#1EA7E0] via-[#1896D4] to-[#0E7FBE] text-white">
        <div className="section-container">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-center mb-10">DAR en cifras</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((st) => (
              <div key={st.label} className="min-w-0">
                <div className="text-[0.7rem] text-white/80 mb-1">{st.kicker}</div>
                <div className="font-display font-black text-[1.75rem] sm:text-4xl md:text-5xl tracking-tight leading-none mb-2">
                  {st.number}
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-white/95">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD44D] shrink-0" />
                  <span>{st.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="section-container max-w-4xl">
          <h2 className="font-display font-black text-2xl sm:text-[1.75rem] text-[#1B2A4A] tracking-tight mb-2">
            Verificar cobertura de ruta
          </h2>
          <p className="text-xs text-slate-400 mb-8">
            Completa el formulario y confirma si un ejecutivo DAR visita tu localidad.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Solicitud recibida. Un ejecutivo te contactará en menos de 24 horas.");
            }}
            className="space-y-3.5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="field-label">Estado</label>
                <input className="field-input" placeholder="Ej. Puebla" required />
              </div>
              <div>
                <label className="field-label">Municipio</label>
                <input className="field-input" placeholder="Ej. Tehuacán" required />
              </div>
              <div>
                <label className="field-label">Colonia</label>
                <input className="field-input" placeholder="Ej. Centro" required />
              </div>
              <div>
                <label className="field-label">Calle y número</label>
                <input className="field-input" placeholder="Ej. Av. Juárez 104" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label className="field-label">Nombre del comercio</label>
                <input className="field-input" placeholder="Ej. Abarrotes San José" required />
              </div>
              <div>
                <label className="field-label">Teléfono</label>
                <input className="field-input" type="tel" placeholder="10 dígitos" required />
              </div>
              <div>
                <label className="field-label">Giro</label>
                <input className="field-input" placeholder="Abarrotes, celulares..." required />
              </div>
              <div>
                <label className="field-label">Correo</label>
                <input className="field-input" type="email" placeholder="correo@negocio.com" />
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
              <button type="submit" className="btn-primary !py-2.5 !px-8 !text-xs !rounded w-full sm:w-auto">
                Verificar
              </button>
              <span className="text-[0.7rem] text-slate-400">
                Al enviar aceptas el{" "}
                <Link href="/aviso-de-privacidad" className="text-[#1EA7E0] hover:underline">
                  aviso de privacidad
                </Link>
                .
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
