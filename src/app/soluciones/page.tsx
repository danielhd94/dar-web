import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

const solutions = [
  {
    brand: "Conectividad",
    title: "Chips y portabilidades",
    description: "Telcel, AT&T y Movistar con activación en mostrador e inventario en ruta.",
    points: ["Hasta $150 por portabilidad", "Activación en tiempo real", "Visita semanal"],
    href: "/soluciones/conectividad",
    cta: "Afiliarme",
  },
  {
    brand: "Dar Credi",
    title: "Celulares a crédito",
    description: "Cuotas semanales. DAR absorbe la cartera; tú vendes y cobras al entregar.",
    points: ["0% riesgo para tu tienda", "Aprobación en 5 min con INE", "Samsung, Xiaomi, Apple"],
    href: "/soluciones/dar-credi",
    cta: "Afiliarme",
  },
  {
    brand: "PagaFast",
    title: "Cobro de servicios",
    description: "CFE, agua, peajes y recargas en una sola terminal.",
    points: ["+100 servicios", "Acreditación inmediata", "Sin anualidad"],
    href: "/soluciones/pagafast",
    cta: "Activar",
  },
];

export default function SolucionesPage() {
  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Soluciones para tu negocio"
        subtitle="Conectividad, financiamiento y pagos. Empieza con una e integra las demás cuando las necesites."
        actions={
          <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
            Afiliarme
          </Link>
        }
      />

      <section className="py-14">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <div key={sol.href} className="border border-slate-100 p-6">
                <p className="text-xs text-slate-400 mb-1">{sol.brand}</p>
                <h2 className="font-display font-bold text-lg text-[#1B2A4A] mb-2">{sol.title}</h2>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed">{sol.description}</p>
                <div className="divide-y divide-slate-100 text-sm mb-6">
                  {sol.points.map((p) => (
                    <div key={p} className="py-2 text-slate-600">
                      {p}
                    </div>
                  ))}
                </div>
                <Link href={sol.href} className="btn-primary !py-2 !px-5 !text-xs !rounded">
                  {sol.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-slate-100">
        <div className="section-container">
          <SectionHeading title="¿Por dónde empezar?" subtitle="Un ejecutivo de zona te propone la combinación más rentable para tu local." />
          <Link href="/contacto" className="btn-primary !text-xs !rounded">
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
}
