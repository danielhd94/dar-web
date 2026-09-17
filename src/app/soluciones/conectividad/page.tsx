import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { PillarCard, StepRow } from "@/components/visual";
import { Headphones, Package, Radio, Smartphone, Store, Wifi } from "lucide-react";

export default function ConectividadPage() {
  return (
    <div className="page-shell">
      <PageBanner
        title="Conectividad para tu punto de venta"
        subtitle="Vende chips, portabilidades y recargas con el respaldo de un equipo que te acompaña para activar, vender y crecer."
        bullets={["Chips", "Portabilidades", "Recargas"]}
        scene="chip"
        actions={
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="cta-on-dark">
              Quiero ser distribuidor
            </Link>
            <Link href="/contacto" className="border border-white/70 text-white font-display font-semibold text-sm px-6 py-2.5 rounded">
              Hablar con un asesor
            </Link>
          </div>
        }
      />

      <section className="py-14">
        <div className="section-container">
          <h2 className="font-display font-black text-2xl tracking-tight mb-2">Lo que ofreces</h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl">
            El portafolio de compañías se confirma con un ejecutivo según zona y vigencia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <PillarCard title="Chips" desc="Distintas compañías de telefonía, según disponibilidad." icon={Wifi} />
            <PillarCard title="Portabilidades" desc="Ayuda a tus clientes a cambiar de compañía desde tu negocio." icon={Smartphone} />
            <PillarCard title="Recargas" desc="Tiempo aire de uso cotidiano para generar visitas frecuentes." icon={Package} />
          </div>
          <h2 className="font-display font-black text-2xl tracking-tight mb-2">Lo que recibes</h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl">
            No se trata sólo de tener chips: se trata de hacerlos trabajar para tu negocio.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <PillarCard title="Ejecutivo comercial" desc="Acompañamiento personalizado en tu zona." icon={Store} />
            <PillarCard title="Mesa de control" desc="Soporte para procesos y activaciones." icon={Headphones} />
            <PillarCard title="Capacitación" desc="Herramientas para mejorar ventas y altas." icon={Package} />
            <PillarCard title="Comunidad raDAR" desc="Beneficios, materiales y canales de soporte." icon={Radio} />
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="section-container">
          <h2 className="font-display font-black text-2xl tracking-tight mb-2">Cómo comenzar</h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl">
            Ideal para tiendas, farmacias, accesorios, distribuidores y otros micronegocios.
          </p>
          <StepRow
            items={[
              { title: "Cuéntanos tu negocio", desc: "Completa el formulario con tus datos y ubicación." },
              { title: "Conoce la opción", desc: "Un ejecutivo revisa tu perfil y te explica el modelo." },
              { title: "Activa tu punto", desc: "Recibe orientación para iniciar la operación." },
              { title: "Acompañamiento", desc: "Capacitación, materiales y seguimiento comercial." },
            ]}
          />
          <Link href="/contacto" className="btn-primary !text-xs !rounded mt-8 inline-flex">
            Quiero ser distribuidor
          </Link>
        </div>
      </section>
    </div>
  );
}
