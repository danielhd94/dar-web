import Link from "next/link";
import PageBanner from "@/components/PageBanner";

const stories = [
  {
    business: "Abarrotes La Esquina",
    location: "Guadalajara, Jalisco",
    solution: "Conectividad",
    quote: "La gente viene a recargar o cambiar de chip, y de paso se lleva la canasta básica.",
    outcome: "En tres meses, chips y recargas pasaron a ser su ganancia principal.",
  },
  {
    business: "Farmacia San José",
    location: "León, Guanajuato",
    solution: "PagaFast",
    quote: "Los vecinos pagan su recibo de luz aquí, sin filas en sucursales lejanas.",
    outcome: "Más visitas semanales y vecinos que no conocían el local.",
  },
  {
    business: "Celulares Morales",
    location: "Monterrey, Nuevo León",
    solution: "Dar Credi",
    quote: "Se van con teléfono nuevo pagando poco a la semana, y yo cobro al momento.",
    outcome: "Más de 20 equipos por semana, comisión al entregar.",
  },
];

export default function HistoriasPage() {
  return (
    <div className="min-h-screen bg-white text-[#1B2A4A]">
      <PageBanner
        title="Historias de comercios"
        subtitle="Chips, crédito y cobro de servicios en distintos giros."
        actions={
          <Link href="/contacto" className="bg-white text-[#1EA7E0] font-display font-bold text-sm px-6 py-2.5 rounded">
            Quiero ser parte
          </Link>
        }
      />

      <section className="py-14">
        <div className="section-container max-w-3xl space-y-8">
          {stories.map((story) => (
            <article key={story.business} className="border-b border-slate-100 pb-8">
              <p className="text-xs text-slate-400 mb-1">
                {story.solution} · {story.location}
              </p>
              <h2 className="font-display font-bold text-lg mb-2">{story.business}</h2>
              <p className="text-sm text-slate-600 italic mb-3">{story.quote}</p>
              <p className="text-sm text-slate-500">{story.outcome}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
