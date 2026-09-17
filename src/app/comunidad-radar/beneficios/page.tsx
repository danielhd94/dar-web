import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { PillarCard } from "@/components/visual";
import { Gift, GraduationCap, Headphones, Megaphone, Store } from "lucide-react";

export default function BeneficiosPage() {
  return (
    <div className="page-shell">
      <PageBanner
        title="Beneficios para socios"
        subtitle="Ser parte de raDAR te conecta con herramientas, información y apoyos para fortalecer tu actividad."
        bullets={["Información", "Capacitación", "Acompañamiento"]}
        scene="radar"
        actions={
          <Link href="/contacto" className="cta-on-dark">
            Quiero formar parte
          </Link>
        }
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <PillarCard title="Información oportuna" desc="Promociones, novedades y oportunidades para tu punto de venta." icon={Megaphone} />
          <PillarCard title="Capacitación y materiales" desc="Contenidos para comprender y comunicar cada solución." icon={GraduationCap} />
          <PillarCard title="Acompañamiento" desc="Contacto con tu ejecutivo y orientación para resolver dudas." icon={Headphones} />
          <PillarCard title="Beneficios para socios" desc="Convenios y ventajas de la comunidad, según elegibilidad." icon={Gift} />
          <PillarCard title="Imagen y activación" desc="Apoyos para dar visibilidad, sujetos a zona y disponibilidad." icon={Store} />
        </div>
      </section>
    </div>
  );
}
