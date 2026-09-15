import Link from "next/link";
import PageBanner from "@/components/PageBanner";

const benefits = [
  { title: "Promociones a tiempo", desc: "Comisiones y bonos vigentes de cada operadora." },
  { title: "Capacitaciones", desc: "Chips, crédito y cobro de recibos." },
  { title: "Ruta comercial", desc: "Resurtido, material y aclaraciones con tu ejecutivo." },
  { title: "Bonos por volumen", desc: "Metas mensuales y trimestrales." },
  { title: "Material de venta", desc: "Lonas, pósters y exhibidores oficiales." },
  { title: "Convenios", desc: "Descuentos para socios y su equipo." },
];

export default function BeneficiosPage() {
  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Beneficios raDAR"
        subtitle="Incentivos, material y acompañamiento en tu ruta."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
              Ser socio
            </Link>
            <Link href="/centro-radar" className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 rounded">
              Entrar al portal
            </Link>
          </div>
        }
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="border border-slate-100 p-5">
              <h2 className="font-display font-bold text-base mb-1">{b.title}</h2>
              <p className="text-sm text-slate-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-slate-100">
        <div className="section-container">
          <h2 className="font-display font-black text-2xl mb-3">¿Quieres estos beneficios?</h2>
          <Link href="/contacto" className="btn-primary !text-xs !rounded">
            Solicitar afiliación
          </Link>
        </div>
      </section>
    </div>
  );
}
