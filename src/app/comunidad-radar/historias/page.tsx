import PageBanner from "@/components/PageBanner";
import { SplitPanel } from "@/components/visual";

export default function HistoriasPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1B2A4A]">
      <PageBanner
        title="Historias de socios"
        subtitle="Detrás de cada negocio hay una historia. Aquí reuniremos testimonios autorizados, con resultados comprobables."
        bullets={["Sólo con autorización", "Resultados comprobables"]}
        scene="radar"
      />
      <SplitPanel scene="growth" title="Pronto, casos reales" href="/contacto" cta="Quiero ser socio">
        <p className="text-sm text-slate-500 max-w-lg leading-relaxed">
          Publicaremos nombre del negocio, localidad, solución utilizada y un resultado comprobable, sólo con autorización del socio.
        </p>
      </SplitPanel>
    </div>
  );
}
