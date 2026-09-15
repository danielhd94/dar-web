import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import CoverageForm from "@/components/CoverageForm";
import { PillarCard } from "@/components/visual";
import { GraduationCap, Headphones, PhoneCall, Store } from "lucide-react";

export default function EquipoCoberturaPage() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#1B2A4A]">
      <PageBanner
        title="Un equipo en territorio"
        subtitle="La experiencia DAR se construye en campo, en la atención cotidiana y en resolver junto con nuestros socios."
        bullets={["Ejecutivos", "Mesa de control", "Soporte"]}
        scene="team"
        actions={
          <Link href="#cobertura" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
            Consultar cobertura
          </Link>
        }
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <PillarCard title="Ejecutivos comerciales" desc="Conocen las necesidades de cada zona." icon={Store} />
          <PillarCard title="Mesa de control" desc="Acompaña procesos y activaciones." icon={Headphones} />
          <PillarCard title="Soporte" desc="Atiende incidencias y consultas." icon={PhoneCall} />
          <PillarCard title="Capacitación" desc="Fortalece la relación con los socios." icon={GraduationCap} />
        </div>
      </section>

      <section id="cobertura" className="py-14 bg-white">
        <div className="section-container max-w-3xl">
          <h2 className="font-display font-black text-2xl tracking-tight mb-2 text-center">Consulta cobertura</h2>
          <p className="text-sm text-slate-500 mb-8 text-center">
            Comparte tu ubicación y te diremos qué soluciones están disponibles en tu zona.
          </p>
          <CoverageForm />
        </div>
      </section>
    </div>
  );
}
