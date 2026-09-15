import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { StepRow } from "@/components/visual";

export default function DarCrediComprarPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1B2A4A]">
      <PageBanner
        title="El equipo que quieres, más cerca"
        subtitle="Conoce opciones de tecnología y financiamiento con pagos accesibles y condiciones explicadas con claridad."
        bullets={["Asesoría clara", "Pagos accesibles", "Sujeto a evaluación"]}
        scene="phone"
        actions={
          <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
            Encontrar un punto de venta
          </Link>
        }
      />

      <section className="py-14 bg-white">
        <div className="section-container">
          <h2 className="font-display font-black text-2xl tracking-tight mb-2">Cómo funciona</h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl">
            Sujeto a evaluación, disponibilidad, requisitos, plazos y aviso de privacidad.
          </p>
          <StepRow
            items={[
              { title: "Elige un equipo", desc: "Conoce opciones y promociones disponibles." },
              { title: "Revisa requisitos", desc: "Entiende condiciones antes de decidir." },
              { title: "Solicita financiamiento", desc: "Completa el proceso con asesoría." },
              { title: "Concluye la compra", desc: "Recibe respuesta en un punto de venta autorizado." },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
