import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

const companies = [
  { name: "Telcel", desc: "Cobertura nacional. Prepago y portabilidad." },
  { name: "AT&T", desc: "Planes con redes y navegación." },
  { name: "Movistar", desc: "Activación inmediata." },
  { name: "Unefon", desc: "Prepago diario." },
  { name: "Bait", desc: "Datos de alto volumen." },
  { name: "Virgin Mobile", desc: "Planes digitales." },
];

const offers = [
  "Chips Telcel, AT&T y Movistar listos para activar",
  "Comisión por cada portabilidad",
  "Recargas con acreditación inmediata",
  "Material de mostrador",
];

const receives = [
  { title: "Ejecutivo de ruta", desc: "Visitas para resurtir stock." },
  { title: "Mesa de ayuda", desc: "Teléfono y WhatsApp." },
  { title: "Guías de venta", desc: "Cómo colocar chips en mostrador." },
  { title: "Material POP", desc: "Exhibidores y lonas autorizadas." },
];

const steps = [
  { title: "Registra tu tienda", desc: "Nombre y ubicación." },
  { title: "Visita del asesor", desc: "Primer paquete de chips y material." },
  { title: "Empieza a vender", desc: "Activa líneas y cobra comisión." },
];

const requirements = [
  "Punto de venta activo",
  "INE o pasaporte del titular",
  "Comprobante de domicilio del local",
  "Celular con internet para activaciones",
];

export default function ConectividadPage() {
  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Chips y telefonía multimarca"
        subtitle="Telcel, AT&T y Movistar con inventario en ruta."
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" id="conectividad-cta-distribuidor" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
              Ser distribuidor
            </Link>
            <Link href="/contacto" className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 rounded">
              Solicitar visita
            </Link>
          </div>
        }
      />

      <section className="py-14">
        <div className="section-container">
          <SectionHeading title="Marcas" subtitle="Un solo proveedor para lo que tus clientes ya piden." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {companies.map((c) => (
              <div key={c.name} className="border border-slate-100 p-5">
                <h3 className="font-display font-bold text-base text-[#1B2A4A] mb-1">{c.name}</h3>
                <p className="text-sm text-slate-500">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-slate-100">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Qué ofreces en mostrador" />
            <ul className="divide-y divide-slate-100 text-sm text-slate-600">
              {offers.map((o) => (
                <li key={o} className="py-2.5">
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Requisitos de alta" />
            <ul className="divide-y divide-slate-100 text-sm text-slate-600 mb-6">
              {requirements.map((r) => (
                <li key={r} className="py-2.5">
                  {r}
                </li>
              ))}
            </ul>
            <Link href="/contacto" className="btn-primary !text-xs !rounded">
              Solicitar alta
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-slate-100">
        <div className="section-container">
          <SectionHeading title="Qué recibes" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {receives.map((r) => (
              <div key={r.title} className="border border-slate-100 p-5">
                <h3 className="font-display font-bold text-sm text-[#1B2A4A] mb-1">{r.title}</h3>
                <p className="text-sm text-slate-500">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-slate-100">
        <div className="section-container max-w-2xl">
          <SectionHeading title="Cómo empezar" />
          <ol className="divide-y divide-slate-100 mb-8">
            {steps.map((s, i) => (
              <li key={s.title} className="py-4">
                <p className="text-xs text-slate-400 mb-0.5">{i + 1}</p>
                <h3 className="font-display font-bold text-sm text-[#1B2A4A]">{s.title}</h3>
                <p className="text-sm text-slate-500">{s.desc}</p>
              </li>
            ))}
          </ol>
          <Link href="/contacto" className="btn-primary !text-xs !rounded">
            Iniciar alta
          </Link>
        </div>
      </section>
    </div>
  );
}
