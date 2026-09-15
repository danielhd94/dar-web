"use client";

import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      <PageBanner title="Términos y Condiciones" subtitle="Última actualización: septiembre de 2024" />
      <div className="section-container max-w-3xl mx-auto pt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass rounded-sm border border-zinc-200 overflow-hidden">
            {[
              {
                title: "1. Aceptación de los términos",
                content: "El acceso y uso del sitio web www.darcomunicaciones.com.mx (en adelante \"el Sitio\") implica la aceptación plena y sin reservas de los presentes Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le solicitamos que se abstenga de utilizar el Sitio. DAR Comunicaciones S.A. de C.V. (en adelante \"DAR\") se reserva el derecho de modificar estos términos en cualquier momento.",
              },
              {
                title: "2. Objeto y uso del sitio",
                content: "El Sitio tiene como objetivo informar sobre las soluciones, productos y servicios de DAR Comunicaciones, facilitar el contacto con el equipo comercial y permitir a los visitantes registrar su interés en convertirse en socios comerciales o distribuidores. El contenido del Sitio es de carácter exclusivamente informativo y no constituye una oferta vinculante, propuesta comercial definitiva ni contrato.",
              },
              {
                title: "3. Condiciones de las soluciones",
                content: "Las características, condiciones, requisitos, disponibilidad y alcance de las soluciones descritas en el Sitio (DAR Comunicaciones, Dar Credi, PagaFast y raDAR) están sujetos a evaluación interna, disponibilidad por zona geográfica y aprobación del equipo comercial. DAR no garantiza la disponibilidad de ninguna solución en zonas específicas. La información comercial definitiva será proporcionada durante el proceso de atención personalizada.",
              },
              {
                title: "4. Dar Credi — Leyenda de financiamiento",
                content: "Las opciones de financiamiento ofrecidas a través de Dar Credi están sujetas a evaluación crediticia, requisitos y condiciones vigentes al momento de la solicitud. El financiamiento no está garantizado. Los plazos, tasas, enganches y condiciones aplicables serán informados al solicitante durante el proceso de alta. DAR Comunicaciones actúa como intermediario comercial y no otorga crédito directamente.",
              },
              {
                title: "5. Propiedad intelectual",
                content: "Todos los contenidos del Sitio, incluyendo pero no limitado a textos, imágenes, logotipos, marcas, diseños, código fuente y estructura de navegación, son propiedad exclusiva de DAR Comunicaciones S.A. de C.V. o de sus licenciantes. Queda expresamente prohibida su reproducción, distribución, modificación o uso con fines comerciales sin autorización escrita previa.",
              },
              {
                title: "6. Limitación de responsabilidad",
                content: "DAR no será responsable por: (a) Errores u omisiones en el contenido del Sitio. (b) Interrupciones o fallas técnicas del Sitio o sus funcionalidades. (c) Decisiones comerciales tomadas por el usuario basadas exclusivamente en la información del Sitio. (d) Contenido de sitios web de terceros enlazados desde el Sitio. En ningún caso la responsabilidad de DAR excederá el monto de los servicios efectivamente contratados y pagados.",
              },
              {
                title: "7. Ley aplicable y jurisdicción",
                content: "Los presentes Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada del uso del Sitio, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Guadalajara, Jalisco, México, renunciando a cualquier otro fuero que pudiera corresponderles por razón de domicilio presente o futuro.",
              },
            ].map((section, i) => (
              <div key={i} className={`p-7 ${i < 6 ? "border-b border-zinc-200" : ""}`}>
                <h2 className="font-display font-bold text-zinc-950 mb-3">{section.title}</h2>
                <p className="text-zinc-600 text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 glass rounded-xl p-5 border border-accent/20">
            <p className="text-xs text-zinc-500 leading-relaxed">
              <span className="text-accent font-semibold">Nota para el equipo de desarrollo:</span> Estos términos son un modelo de referencia generado para fines de diseño y presentación. El texto definitivo debe ser revisado y validado por el equipo legal de DAR Comunicaciones antes de su publicación, en especial la sección de Dar Credi (financiamiento) y las condiciones específicas de cada solución.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
