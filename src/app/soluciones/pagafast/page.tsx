import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { PillarCard, StepRow } from "@/components/visual";
import { Banknote, CreditCard, RefreshCw, Smartphone } from "lucide-react";

export default function PagaFastPage() {
  return (
    <div className="page-shell">
      <PageBanner
        title="Un centro de servicios en tu negocio"
        subtitle="Con PagaFast ofreces pagos, recargas y productos digitales de uso cotidiano, y generas ingresos adicionales."
        bullets={["Pagos", "Recargas", "Productos digitales"]}
        scene="pay"
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="cta-on-dark">
              Quiero activar PagaFast
            </Link>
            <Link href="#como-funciona" className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 rounded">
              Cómo funciona
            </Link>
          </div>
        }
      />

      <section className="py-14">
        <div className="section-container">
          <h2 className="font-display font-black text-2xl tracking-tight mb-2">Qué puedes ofrecer</h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl">
            El catálogo vigente se confirma al activar tu acceso.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <PillarCard title="Pago de servicios" desc="Luz, agua y otros pagos cotidianos." icon={Banknote} />
            <PillarCard title="Recargas" desc="Tiempo aire que atrae visitas frecuentes." icon={RefreshCw} />
            <PillarCard title="Pines y digitales" desc="Productos digitales desde el mismo punto." icon={Smartphone} />
            <PillarCard title="Una sola plataforma" desc="Operas distintos servicios sin cambiar de giro." icon={CreditCard} />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-14 bg-white">
        <div className="section-container">
          <h2 className="font-display font-black text-2xl tracking-tight mb-2">Cómo comenzar</h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl">
            Los requisitos dependen del tipo de negocio y del modelo vigente.
          </p>
          <StepRow
            items={[
              { title: "Registra tu negocio", desc: "Comparte tus datos y ubicación." },
              { title: "Activa tu acceso", desc: "Conoce requisitos y el proceso de alta." },
              { title: "Recibe orientación", desc: "Aprende a usar la plataforma con soporte." },
              { title: "Ofrece servicios", desc: "Atiende a tus clientes y genera ingresos extra." },
            ]}
          />
          <Link href="/contacto" className="btn-primary !text-xs !rounded mt-8 inline-flex">
            Quiero activar PagaFast
          </Link>
        </div>
      </section>
    </div>
  );
}
