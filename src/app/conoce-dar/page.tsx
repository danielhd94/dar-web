import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { IconTile, PillarCard } from "@/components/visual";
import { CreditCard, Handshake, Heart, Radio, Smartphone, TrendingUp, Users, Wifi } from "lucide-react";

export default function ConoceDarPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1B2A4A]">
      <PageBanner
        title="Un ecosistema para hacer crecer negocios"
        subtitle="DAR reúne conectividad, financiamiento, pagos, recargas y acompañamiento para acercar oportunidades reales a los puntos de venta."
        bullets={["Conectividad", "Financiamiento", "Pagos", "Comunidad"]}
        scene="team"
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="/conoce-dar/historia" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
              Nuestra historia
            </Link>
            <Link href="/conoce-dar/equipo-y-cobertura" className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 rounded">
              Equipo y cobertura
            </Link>
          </div>
        }
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          <IconTile href="/soluciones/conectividad" title="DAR Comunicaciones" desc="Telefonía para tu negocio" icon={Wifi} />
          <IconTile href="/soluciones/dar-credi" title="Dar Credi" desc="Acceso y financiamiento" icon={Smartphone} />
          <IconTile href="/soluciones/pagafast" title="PagaFast" desc="Pagos y recargas" icon={CreditCard} />
          <IconTile href="/comunidad-radar" title="raDAR" desc="Comunidad de socios" icon={Radio} />
        </div>
        <div className="section-container grid grid-cols-2 lg:grid-cols-5 gap-4">
          <PillarCard title="Cercanía" desc="Conocemos el territorio y hablamos de persona a persona." icon={Users} />
          <PillarCard title="Confianza" desc="Respaldamos relaciones con experiencia y cumplimiento." icon={Handshake} />
          <PillarCard title="Servicio" desc="Acompañamos antes, durante y después de la activación." icon={Heart} />
          <PillarCard title="Oportunidad" desc="Cada solución busca valor real para el negocio." icon={TrendingUp} />
          <PillarCard title="Crecimiento compartido" desc="Avanzamos cuando nuestros socios avanzan." icon={Radio} />
        </div>
      </section>
    </div>
  );
}
