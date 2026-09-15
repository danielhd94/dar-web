import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { StatsBand, StepRow } from "@/components/visual";

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1B2A4A]">
      <PageBanner
        title="Más de 20 años junto a los negocios"
        subtitle="Nacimos en telecomunicaciones y hoy somos un ecosistema para vender, cobrar y crecer con acompañamiento."
        bullets={["Nacimos en telecomunicaciones", "Hoy somos un ecosistema"]}
        scene="team"
        actions={
          <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
            Quiero ser socio
          </Link>
        }
      />

      <section className="py-14">
        <div className="section-container">
          <StepRow
            items={[
              { title: "Cerca del punto de venta", desc: "Escuchamos necesidades reales de cada negocio." },
              { title: "Conectividad con respaldo", desc: "Distribuir no bastaba: hacía falta acompañamiento." },
              { title: "Más soluciones", desc: "Se sumaron financiamiento, pagos y recargas." },
              { title: "Un ecosistema DAR", desc: "Misma promesa: herramientas útiles para el negocio." },
            ]}
          />
        </div>
      </section>

      <StatsBand
        items={[
          { value: "20+", label: "años" },
          { value: "3", label: "soluciones" },
          { value: "Campo", label: "presencia" },
          { value: "raDAR", label: "comunidad" },
        ]}
      />

      <section className="py-12 bg-white">
        <div className="section-container">
          <Link href="/conoce-dar/equipo-y-cobertura" className="btn-primary !text-xs !rounded">
            Ver equipo y cobertura
          </Link>
        </div>
      </section>
    </div>
  );
}
