import Link from "next/link";
import CoverageForm from "@/components/CoverageForm";
import { HeroScene, IconTile, OfferCard, SplitPanel, StatsBand } from "@/components/visual";
import { permanentActions } from "@/content/site";
import { CreditCard, Smartphone, Wifi } from "lucide-react";

export default function HomePage() {
  return (
    <div className="page-shell relative">
      <section className="relative band-brand text-white overflow-hidden pt-10 pb-20 sm:pt-12 sm:pb-24 md:pt-16 md:pb-28">
        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-display font-black tracking-tight mb-4 text-balance">
              Haz crecer tu negocio
            </h1>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-5 max-w-lg">
              Conectamos tu punto de venta con conectividad, financiamiento, pagos y el acompañamiento para aprovecharlos.
            </p>
            <ul className="space-y-2 mb-8 text-sm sm:text-base text-white/90">
              <li className="flex gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Chips, portabilidades y recargas
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Equipos a crédito para tus clientes
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Pagos de servicios desde tu punto de venta
              </li>
            </ul>
            <div className="stack-ctas max-sm:pr-20">
              <Link
                href="/soluciones"
                className="cta-on-dark"
              >
                Encuentra tu solución
              </Link>
              <Link
                href={permanentActions.socio.href}
                className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 min-h-11 inline-flex items-center justify-center rounded"
              >
                Quiero ser socio
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <HeroScene variant="growth" />
          </div>
        </div>
      </section>

      <section className="section-container -mt-10 relative z-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <IconTile href="/soluciones/conectividad" title="Conectividad" desc="Chips y recargas" icon={Wifi} />
          <IconTile href="/soluciones/dar-credi" title="Dar Credi" desc="Equipos a crédito" icon={Smartphone} />
          <IconTile href="/soluciones/pagafast" title="PagaFast" desc="Pagos y servicios" icon={CreditCard} />
        </div>
      </section>

      <section className="pb-14">
        <div className="section-container">
          <h2 className="font-display font-black text-2xl tracking-tight mb-2">Elige tu solución</h2>
          <p className="text-sm text-slate-500 mb-8 max-w-xl">
            Empieza por lo que tu negocio necesita. Puedes integrar más soluciones después.
          </p>
          <div className="offer-grid">
            <OfferCard
              kicker="DAR Comunicaciones"
              title="Chips"
              desc="Vende chips, portabilidades y recargas con inventario y acompañamiento comercial."
              href="/soluciones/conectividad"
              cta="Ser distribuidor"
            />
            <OfferCard
              kicker="Financiamiento"
              title="Crédito"
              desc="Acerca equipos a más personas y abre una nueva línea de venta en tu negocio."
              href="/soluciones/dar-credi"
              cta="Conocer Dar Credi"
            />
            <OfferCard
              kicker="PagaFast"
              title="Pagos"
              desc="Cobra servicios y recargas desde tu punto de venta y genera visitas recurrentes."
              href="/soluciones/pagafast"
              cta="Activar PagaFast"
            />
          </div>
        </div>
      </section>

      <SplitPanel scene="radar" title="Comunidad raDAR" href="/comunidad-radar" cta="Quiero unirme">
        <p className="text-sm text-slate-500 max-w-lg leading-relaxed">
          raDAR reúne beneficios, información, capacitación y soporte para que tu negocio se mantenga activo e informado.
        </p>
      </SplitPanel>

      <StatsBand
        items={[
          { value: "20+", label: "años" },
          { value: "3", label: "soluciones" },
          { value: "Campo", label: "acompañamiento" },
          { value: "raDAR", label: "comunidad" },
        ]}
      />

      <section className="py-14 bg-white">
        <div className="section-container max-w-3xl">
          <h2 className="font-display font-black text-2xl tracking-tight mb-2 text-center">
            Consulta cobertura
          </h2>
          <p className="text-sm text-slate-500 mb-8 text-center max-w-xl mx-auto">
            Comparte tu código postal, municipio y estado. El equipo confirmará qué soluciones hay en tu zona.
          </p>
          <CoverageForm />
        </div>
      </section>
    </div>
  );
}
