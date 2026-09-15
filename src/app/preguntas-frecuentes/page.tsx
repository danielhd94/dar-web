"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "¿Qué es DAR?",
        a: "Conectividad (chips Telcel, AT&T y Movistar), Dar Credi y PagaFast, con ejecutivos en más de 15 estados.",
      },
      {
        q: "¿Quién puede ser socio?",
        a: "Cualquier punto de venta físico. No hace falta experiencia previa; la capacitación va incluida.",
      },
    ],
  },
  {
    category: "Conectividad",
    items: [
      {
        q: "¿Cómo empiezo a vender chips?",
        a: "Regístrate en Contacto. Un ejecutivo te visita con el primer paquete, exhibidores y la app de activación.",
      },
      {
        q: "¿Qué operadoras hay?",
        a: "Telcel, AT&T, Movistar, Unefon, Bait y Virgin Mobile. El resurtido es por ruta semanal.",
      },
    ],
  },
  {
    category: "Dar Credi",
    items: [
      {
        q: "¿Quién asume el riesgo si el cliente no paga?",
        a: "DAR. Tu tienda cobra la comisión al entregar el equipo.",
      },
      {
        q: "¿Qué necesita el cliente?",
        a: "INE vigente y un celular activo. La evaluación es digital, en mostrador, en menos de 5 minutos.",
      },
    ],
  },
  {
    category: "PagaFast",
    items: [
      {
        q: "¿Qué servicios puedo cobrar?",
        a: "CFE, agua, gas, Telmex, Izzi, Totalplay, TAG Pase y recargas de todas las compañías.",
      },
      {
        q: "¿Qué equipo necesito?",
        a: "Un celular, tablet o computadora con internet.",
      },
    ],
  },
  {
    category: "raDAR",
    items: [
      {
        q: "¿Qué es raDAR?",
        a: "El programa de socios: bonos, material y capacitaciones. El portal se activa al darte de alta.",
      },
      {
        q: "¿Cómo hablo con mi ejecutivo?",
        a: "En el Centro raDAR o al 800-327-2668, con el día de visita de tu ruta.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 min-h-11 py-3 text-left"
      >
        <span className="font-display font-bold text-sm text-[#1B2A4A]">{q}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 mt-0.5 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="text-sm text-slate-500 pb-3">{a}</p>}
    </div>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const query = search.trim().toLowerCase();

  const filtered = faqs
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) => !query || item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query)
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Preguntas frecuentes"
        subtitle="Chips, Dar Credi, PagaFast y contacto con tu ejecutivo."
        actions={
          <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
            Contactar
          </Link>
        }
      />

      <section className="py-14">
        <div className="section-container">
          <SectionHeading title="Buscar" subtitle="Escribe una palabra: chips, crédito, CFE, comisiones." />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar"
            className="field-input w-full max-w-sm"
          />
        </div>
      </section>

      <section className="py-14 border-t border-slate-100">
        <div className="section-container max-w-3xl">
          {filtered.length === 0 ? (
            <p className="text-sm text-slate-500">
              Sin resultados para {search}.{" "}
              <Link href="/contacto" className="text-[#1EA7E0]">
                Escríbenos
              </Link>
            </p>
          ) : (
            <div className="space-y-10">
              {filtered.map((cat) => (
                <div key={cat.category}>
                  <h2 className="font-display font-bold text-base text-[#1B2A4A] mb-1">{cat.category}</h2>
                  <div>
                    {cat.items.map((item) => (
                      <FAQItem key={item.q} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-14 border-t border-slate-100">
        <div className="section-container">
          <SectionHeading title="¿No encontraste tu respuesta?" subtitle="Línea de atención 800-327-2668." />
          <Link href="/contacto" className="btn-primary !text-xs !rounded">
            Enviar consulta
          </Link>
        </div>
      </section>
    </div>
  );
}
