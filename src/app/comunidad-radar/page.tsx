import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

const benefits = [
  { title: "Bonos trimestrales", desc: "Por chips, activaciones y colocación de equipos." },
  { title: "Capacitaciones", desc: "Venta en mostrador y uso de plataformas." },
  { title: "Ejecutivo asignado", desc: "Resurtido y dudas en tu ruta." },
  { title: "Material sin costo", desc: "Exhibidores, lonas y señalética." },
  { title: "Eventos", desc: "Encuentros de la red de socios." },
  { title: "Soporte", desc: "Línea dedicada para puntos afiliados." },
];

const steps = [
  { title: "Solicita tu afiliación", desc: "Formulario o 800-327-2668." },
  { title: "Visita de tu asesor", desc: "Kit de bienvenida y capacitación en tienda." },
  { title: "Acceso al portal", desc: "Comisiones, pedidos y promociones." },
];

export default function ComunidadRadarPage() {
  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Comunidad raDAR"
        subtitle="Incentivos, material y asesoría para puntos de venta afiliados."
        actions={
          <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
            Unirme
          </Link>
        }
      />

      <section className="py-14">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-slate-100 p-6">
            <h3 className="font-display font-bold text-lg mb-2">Conocer y afiliarme</h3>
            <p className="text-sm text-slate-500 mb-4">Incentivos, historias de socios y capacitaciones.</p>
            <Link href="/contacto" className="btn-primary !text-xs !rounded">
              Registrar mi negocio
            </Link>
          </div>
          <div className="border border-slate-100 p-6">
            <h3 className="font-display font-bold text-lg mb-2">Ya soy socio</h3>
            <p className="text-sm text-slate-500 mb-4">Comisiones, visitas y recursos de venta.</p>
            <Link href="/centro-radar" className="btn-secondary !text-xs !rounded">
              Entrar al portal
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-slate-100">
        <div className="section-container">
          <SectionHeading title="Beneficios" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="border border-slate-100 p-5">
                <h3 className="font-display font-bold text-sm mb-1">{b.title}</h3>
                <p className="text-sm text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-slate-100">
        <div className="section-container max-w-2xl">
          <SectionHeading title="Cómo integrarte" />
          <ol className="divide-y divide-slate-100 mb-8">
            {steps.map((s, i) => (
              <li key={s.title} className="py-4">
                <p className="text-xs text-slate-400">{i + 1}</p>
                <h3 className="font-display font-bold text-sm">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </li>
            ))}
          </ol>
          <Link href="/contacto" className="btn-primary !text-xs !rounded">
            Registrarme
          </Link>
        </div>
      </section>
    </div>
  );
}
