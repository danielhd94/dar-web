import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { OfferCard } from "@/components/visual";

export default function DarCrediPage() {
  return (
    <div className="page-shell">
      <PageBanner
        title="Tecnología más cerca"
        subtitle="Dar Credi facilita el acceso a equipos y ayuda a los negocios a convertir esa posibilidad en nuevas ventas."
        bullets={["Compra un equipo", "Ofrécelo en tu negocio"]}
        scene="phone"
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-5">
          <OfferCard
            kicker="Para clientes"
            title="Comprar"
            desc="Encuentra una opción de tecnología y conoce alternativas de pago claras, sujetas a evaluación."
            href="/soluciones/dar-credi/comprar"
            cta="Encontrar un punto de venta"
          />
          <OfferCard
            kicker="Para negocios"
            title="Vender"
            desc="Incorpora una herramienta de venta para llegar a más clientes e incrementar tu ticket."
            href="/soluciones/dar-credi/socios"
            cta="Ser socio comercial"
          />
        </div>
      </section>
    </div>
  );
}
