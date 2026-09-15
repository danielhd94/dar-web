import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

const offers = [
  "CFE, agua y gas",
  "Telmex, Izzi y Totalplay",
  "Recargas de todas las compañías",
  "TAG Pase, Televía y pines",
];

const benefits = [
  { title: "+100 servicios", desc: "Gobierno y privados en un solo lugar." },
  { title: "Más visitas", desc: "Los recibos traen gente cada semana." },
  { title: "Comisión al instante", desc: "Por cada recibo y recarga." },
  { title: "24/7", desc: "Celular, tablet o computadora." },
];

const steps = [
  { title: "Registra tu comercio", desc: "Alta de cuenta en minutos." },
  { title: "Abona saldo", desc: "El monto que destines a operar." },
  { title: "Cobra servicios", desc: "Escanea o captura la referencia." },
  { title: "Retira comisiones", desc: "Desde tu panel." },
];

export default function PagaFastPage() {
  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Terminal PagaFast"
        subtitle="CFE, agua, telefonía y recargas. Comisión por cada ticket."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" id="pagafast-cta-activar" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
              Activar
            </Link>
            <Link href="#como-funciona" className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 rounded">
              Cómo funciona
            </Link>
          </div>
        }
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Qué puedes cobrar" />
            <ul className="divide-y divide-slate-100 text-sm text-slate-600">
              {offers.map((o) => (
                <li key={o} className="py-2.5">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="border border-slate-100 p-5">
                <h3 className="font-display font-bold text-sm mb-1">{b.title}</h3>
                <p className="text-sm text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-14 border-t border-slate-100">
        <div className="section-container max-w-2xl">
          <SectionHeading title="Cómo empezar" subtitle="Puedes operar el mismo día del registro." />
          <ol className="divide-y divide-slate-100 mb-8">
            {steps.map((s, i) => (
              <li key={s.title} className="py-4">
                <p className="text-xs text-slate-400">{i + 1}</p>
                <h3 className="font-display font-bold text-sm">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </li>
            ))}
          </ol>
          <Link href="/contacto" id="pagafast-cta-final" className="btn-primary !text-xs !rounded">
            Activar en mi tienda
          </Link>
        </div>
      </section>
    </div>
  );
}
