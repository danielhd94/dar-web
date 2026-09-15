import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

const partnerBenefits = [
  { title: "Más opciones para tus clientes", desc: "Cuotas semanales accesibles." },
  { title: "Sin riesgo de cartera", desc: "DAR asume cobranza." },
  { title: "Comisión al entregar", desc: "No esperas a que terminen de pagar." },
  { title: "Más rotación de equipos", desc: "Samsung, Motorola, Xiaomi y Apple." },
];

const partnerSteps = [
  { title: "Registra tu comercio", desc: "Formulario o visita de un ejecutivo." },
  { title: "Activa el panel", desc: "Cotiza e ingresa solicitudes en 5 minutos." },
  { title: "Capacita a tu equipo", desc: "Cómo presentar el crédito en mostrador." },
  { title: "Vende a crédito", desc: "Entrega el equipo y cobra tu comisión." },
];

const buyerSteps = [
  { title: "Elige el equipo", desc: "En un punto de venta autorizado." },
  { title: "Muestra tu INE", desc: "Evaluación digital en minutos." },
  { title: "Paga cada semana", desc: "Te llevas el teléfono el mismo día." },
];

export default function DarCrediPage() {
  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Smartphones a crédito"
        subtitle="Tus clientes pagan en cuotas. DAR absorbe la cartera; tú vendes y cobras al entregar."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="#socios" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
              Ofrecer crédito
            </Link>
            <Link href="#comprar" className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 rounded">
              Comprar un equipo
            </Link>
          </div>
        }
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-slate-100 p-6">
            <h3 className="font-display font-bold text-lg mb-2">Para negocios</h3>
            <p className="text-sm text-slate-500 mb-5">Vende equipos de mayor valor sin arriesgar capital.</p>
            <Link href="#socios" className="text-sm text-[#1EA7E0] font-semibold">
              Ver modelo para socios
            </Link>
          </div>
          <div className="border border-slate-100 p-6">
            <h3 className="font-display font-bold text-lg mb-2">Para compradores</h3>
            <p className="text-sm text-slate-500 mb-5">INE vigente y un enganche en tu tienda de confianza.</p>
            <Link href="#comprar" className="text-sm text-[#1EA7E0] font-semibold">
              Requisitos de compra
            </Link>
          </div>
        </div>
      </section>

      <section id="socios" className="py-14 border-t border-slate-100">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Para tu tienda" subtitle="Apruebas en 5 minutos, entregas y cobras de inmediato." />
            <div className="divide-y divide-slate-100">
              {partnerBenefits.map((b) => (
                <div key={b.title} className="py-3">
                  <h4 className="font-display font-bold text-sm">{b.title}</h4>
                  <p className="text-sm text-slate-500">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title="Cómo activarlo" />
            <ol className="divide-y divide-slate-100 mb-6">
              {partnerSteps.map((s, i) => (
                <li key={s.title} className="py-3">
                  <p className="text-xs text-slate-400">{i + 1}</p>
                  <h4 className="font-display font-bold text-sm">{s.title}</h4>
                  <p className="text-sm text-slate-500">{s.desc}</p>
                </li>
              ))}
            </ol>
            <Link href="/contacto" className="btn-primary !text-xs !rounded">
              Solicitar activación
            </Link>
          </div>
        </div>
      </section>

      <section id="comprar" className="py-14 border-t border-slate-100">
        <div className="section-container">
          <SectionHeading title="Para quien compra" subtitle="Acude a un punto de venta DAR con tu identificación." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {buyerSteps.map((s) => (
              <div key={s.title} className="border border-slate-100 p-5">
                <h4 className="font-display font-bold text-sm mb-1">{s.title}</h4>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contacto" className="text-sm text-[#1EA7E0] font-semibold">
            Ubicar un punto de venta
          </Link>
        </div>
      </section>
    </div>
  );
}
