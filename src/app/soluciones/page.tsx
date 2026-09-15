import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { OfferCard } from "@/components/visual";

export default function SolucionesPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1B2A4A]">
      <PageBanner
        title="Una solución para cada negocio"
        subtitle="Conectividad, financiamiento, pagos y recargas: elige la opción que se adapta a tu operación. Puedes comenzar con una e integrar otras después."
        bullets={["Conectividad", "Financiamiento", "Pagos y recargas"]}
        scene="growth"
        actions={
          <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
            Quiero ser socio
          </Link>
        }
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-5">
            <OfferCard
              kicker="DAR Comunicaciones"
              title="Chips"
              desc="Accede a chips, portabilidades y recargas, con atención y acompañamiento para mantener tu oferta activa."
              href="/soluciones/conectividad"
              cta="Ser distribuidor"
            />
            <OfferCard
              kicker="Dar Credi"
              title="Crédito"
              desc="Conecta a compradores con opciones de acceso a equipos y ofrece financiamiento como herramienta de venta."
              href="/soluciones/dar-credi"
              cta="Conocer Dar Credi"
              accent="#FF5E6C"
            />
            <OfferCard
              kicker="PagaFast"
              title="Pagos"
              desc="Ofrece pagos de servicios, recargas y productos digitales para aumentar la frecuencia de visita."
              href="/soluciones/pagafast"
              cta="Activar PagaFast"
              accent="#0D9488"
            />
        </div>
      </section>
    </div>
  );
}
