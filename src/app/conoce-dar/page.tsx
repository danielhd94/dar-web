import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

const ecosystem = [
  {
    brand: "Conectividad",
    desc: "Chips Telcel, AT&T y Movistar con abastecimiento en ruta.",
    href: "/soluciones/conectividad",
  },
  {
    brand: "Dar Credi",
    desc: "Smartphones a crédito en cuotas semanales, sin riesgo para la tienda.",
    href: "/soluciones/dar-credi",
  },
  {
    brand: "PagaFast",
    desc: "Cobro de CFE, agua, telefonía y recargas.",
    href: "/soluciones/pagafast",
  },
  {
    brand: "raDAR",
    desc: "Capacitación, bonos y soporte en campo.",
    href: "/comunidad-radar",
  },
];

const values = [
  { title: "Cercanía", desc: "Ejecutivos que visitan tu negocio en cada ruta." },
  { title: "Cumplimiento", desc: "Inventario, comisiones y entregas a tiempo." },
  { title: "Acompañamiento", desc: "Antes, durante y después de la activación." },
  { title: "Crecimiento compartido", desc: "Ganamos cuando tu mostrador vende más." },
];

export default function ConoceDarPage() {
  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Hecho para hacer crecer comercios"
        subtitle="Conectividad, financiamiento, pagos y respaldo en campo."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="/conoce-dar/historia" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
              Historia
            </Link>
            <Link href="/conoce-dar/equipo-y-cobertura" className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 rounded">
              Equipo y cobertura
            </Link>
          </div>
        }
      />

      <section className="py-14">
        <div className="section-container">
          <SectionHeading title="Tres soluciones, una red" subtitle="Empieza con una e integra las demás cuando tu tienda lo pida." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystem.map((e) => (
              <div key={e.brand} className="border border-slate-100 p-5">
                <h3 className="font-display font-bold text-base mb-2">{e.brand}</h3>
                <p className="text-sm text-slate-500 mb-4">{e.desc}</p>
                <Link href={e.href} className="text-sm text-[#1EA7E0] font-semibold">
                  Detalles
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-slate-100">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              title="Cómo trabajamos"
              subtitle="No reemplazamos tu identidad: te damos inventario y herramientas para competir en tu colonia."
            />
            <Link href="/contacto" className="btn-primary !text-xs !rounded">
              Ser socio
            </Link>
          </div>
          <div className="divide-y divide-slate-100">
            {values.map((v) => (
              <div key={v.title} className="py-4">
                <h3 className="font-display font-bold text-sm">{v.title}</h3>
                <p className="text-sm text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
