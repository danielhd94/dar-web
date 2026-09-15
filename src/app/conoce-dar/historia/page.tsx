import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

const timeline = [
  { year: "2003", title: "Guadalajara", desc: "Nace DAR para acercar telefonía a puntos de venta." },
  { year: "2007", title: "Expansión", desc: "Rutas en Jalisco, Guanajuato, Nuevo León y Sinaloa." },
  { year: "2012", title: "Multimarca", desc: "Chips, portabilidades y recargas de las principales operadoras." },
  { year: "2017", title: "Dar Credi", desc: "Smartphones a crédito en cuotas semanales, sin riesgo para la tienda." },
  { year: "2020", title: "PagaFast y raDAR", desc: "Cobro de servicios y programa de socios." },
  { year: "Hoy", title: "15+ estados", desc: "Miles de puntos de venta y ejecutivos en cada ruta." },
];

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Más de 20 años con los comercios de México"
        subtitle="De Guadalajara a un ecosistema de conectividad, crédito y cobro de servicios."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
              Ser socio
            </Link>
            <Link href="/conoce-dar/equipo-y-cobertura" className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 rounded">
              Ver cobertura
            </Link>
          </div>
        }
      />

      <section className="py-14">
        <div className="section-container max-w-2xl">
          <ol className="divide-y divide-slate-100">
            {timeline.map((item) => (
              <li key={item.year} className="py-5 grid grid-cols-[4.5rem_1fr] gap-4">
                <p className="text-sm text-slate-400 pt-0.5">{item.year}</p>
                <div>
                  <h2 className="font-display font-bold text-base">{item.title}</h2>
                  <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 border-t border-slate-100">
        <div className="section-container">
          <SectionHeading
            title="La confianza se construye en ruta"
            subtitle="Visitas constantes, buen trato y cumplimiento cada semana."
          />
          <Link href="/conoce-dar/equipo-y-cobertura" className="btn-primary !text-xs !rounded">
            Ver equipo y cobertura
          </Link>
        </div>
      </section>
    </div>
  );
}
