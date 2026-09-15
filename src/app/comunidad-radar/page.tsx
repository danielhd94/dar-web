import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { PillarCard, SplitPanel, StepRow } from "@/components/visual";
import { Gift, GraduationCap, Headphones, Megaphone } from "lucide-react";

export default function ComunidadRadarPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1B2A4A]">
      <PageBanner
        title="Una comunidad para crecer acompañado"
        subtitle="raDAR conecta a los socios de DAR con beneficios, información, capacitación y soporte."
        bullets={["Beneficios", "Capacitación", "Soporte"]}
        scene="radar"
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
              Quiero unirme
            </Link>
            <Link href="/centro-radar" className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 rounded">
              Soy socio / Entrar
            </Link>
          </div>
        }
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-2 lg:grid-cols-4 gap-4">
          <PillarCard title="Comunicados" desc="Novedades relevantes para tu operación." icon={Megaphone} />
          <PillarCard title="Beneficios" desc="Promociones y ventajas según tu perfil." icon={Gift} />
          <PillarCard title="Capacitación" desc="Materiales para vender mejor cada solución." icon={GraduationCap} />
          <PillarCard title="Soporte" desc="Canal con tu ejecutivo y mesa de ayuda." icon={Headphones} />
        </div>
      </section>

      <SplitPanel scene="radar" title="Historias de socios" href="/comunidad-radar/historias" cta="Ver historias">
        <p className="text-sm text-slate-500 max-w-lg leading-relaxed">
          Publicaremos testimonios autorizados con nombre, localidad y solución utilizada.
        </p>
      </SplitPanel>

      <section className="py-14 bg-white">
        <div className="section-container">
          <h2 className="font-display font-black text-2xl tracking-tight mb-2">Cómo formar parte</h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl">
            El acceso a raDAR forma parte de tu relación como socio de DAR.
          </p>
          <StepRow
            items={[
              { title: "Cuéntanos tu negocio", desc: "Indica la solución que te interesa." },
              { title: "Conoce el modelo", desc: "Completa el proceso de alta." },
              { title: "Activa tu relación", desc: "Inicia operación con acompañamiento." },
              { title: "Entra a la comunidad", desc: "Recibe beneficios y canales de soporte." },
            ]}
          />
          <Link href="/contacto" className="btn-primary !text-xs !rounded mt-8 inline-flex">
            Quiero unirme
          </Link>
        </div>
      </section>
    </div>
  );
}
