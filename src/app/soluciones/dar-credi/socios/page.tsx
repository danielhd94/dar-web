import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { PillarCard, StepRow } from "@/components/visual";
import { GraduationCap, Package, TrendingUp, Users } from "lucide-react";

export default function DarCrediSociosPage() {
  return (
    <div className="page-shell">
      <PageBanner
        title="Financiamiento como herramienta de venta"
        subtitle="Ofrece equipos a más clientes, abre nuevas oportunidades de compra y fortalece la actividad de tu punto de venta."
        bullets={["Más clientes", "Más ticket", "Acompañamiento"]}
        scene="phone"
        actions={
          <Link href="/contacto" className="cta-on-dark">
            Quiero ser socio comercial
          </Link>
        }
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-2 lg:grid-cols-4 gap-4">
          <PillarCard title="Más compras" desc="Amplía las posibilidades de tus clientes." icon={Users} />
          <PillarCard title="Mejor rotación" desc="Aprovecha inventario y oportunidades de venta." icon={Package} />
          <PillarCard title="Capacitación" desc="Tu equipo explica la solución con claridad." icon={GraduationCap} />
          <PillarCard title="Más conversión" desc="Acompañamiento orientado a cerrar ventas." icon={TrendingUp} />
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="section-container">
          <h2 className="font-display font-black text-2xl tracking-tight mb-2">Cómo activarlo</h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl">
            El diferencial está en el acompañamiento: que tu equipo comprenda la solución y la convierta en forma de vender.
          </p>
          <StepRow
            items={[
              { title: "Registra tu negocio", desc: "Comparte tus datos y zona." },
              { title: "Conoce el modelo", desc: "Requisitos y proceso operativo." },
              { title: "Recibe capacitación", desc: "Prepara a tu equipo para vender." },
              { title: "Activa con tu ejecutivo", desc: "Da seguimiento a solicitudes y altas." },
            ]}
          />
          <Link href="/contacto" className="btn-primary !text-xs !rounded mt-8 inline-flex">
            Quiero ser socio comercial
          </Link>
        </div>
      </section>
    </div>
  );
}
