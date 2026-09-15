"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { faqs } from "@/content/site";

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
  const filtered = faqs.filter(
    (item) => !query || item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query)
  );

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1B2A4A]">
      <PageBanner
        title="¿Dónde resuelvo dudas?"
        subtitle="Respuestas sobre las soluciones de DAR, el proceso para ser socio y el acceso a raDAR."
        scene="team"
        actions={
          <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
            Contactar a DAR
          </Link>
        }
      />

      <section className="py-14">
        <div className="section-container max-w-3xl">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar"
            className="field-input w-full mb-6"
          />
          {filtered.length === 0 ? (
            <p className="text-sm text-slate-500">
              Sin resultados.{" "}
              <Link href="/contacto" className="text-[#1EA7E0]">
                Escríbenos
              </Link>
            </p>
          ) : (
            <div className="bg-white border border-slate-100 rounded-md px-5">
              {filtered.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
