"use client";

import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";

export default function AvisoPrivacidadPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      <PageBanner title="Aviso de Privacidad" subtitle="Última actualización: septiembre de 2024" />
      <div className="section-container max-w-3xl mx-auto pt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass rounded-sm border border-zinc-200 overflow-hidden">
            {[
              {
                title: "I. Identidad y domicilio del Responsable",
                content: "DAR Comunicaciones S.A. de C.V. (en adelante \"DAR\"), con domicilio en Av. López Mateos Norte 1235, Col. Italia Providencia, Guadalajara, Jalisco, C.P. 44648, México, es el responsable del tratamiento de sus datos personales, en términos de lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en adelante \"la Ley\").",
              },
              {
                title: "II. Datos personales que recabamos",
                content: "Para llevar a cabo las finalidades descritas en el presente Aviso, DAR podrá recabar las siguientes categorías de datos personales: (a) Datos de identificación: nombre completo, RFC, CURP, copia de identificación oficial. (b) Datos de contacto: correo electrónico, número telefónico, domicilio del negocio, código postal, municipio y estado. (c) Datos del negocio: nombre comercial, giro, antigüedad, ubicación del punto de venta. (d) Datos financieros (solo para procesos de alta como socio comercial o evaluación de crédito): información bancaria básica y referencias comerciales.",
              },
              {
                title: "III. Finalidades del tratamiento",
                content: "Sus datos personales serán utilizados para las siguientes finalidades primarias: (1) Atender solicitudes de información sobre nuestras soluciones. (2) Evaluar y procesar altas de distribuidores, socios comerciales o usuarios de PagaFast. (3) Gestionar la relación comercial con socios activos. (4) Enviar comunicados, novedades y materiales de capacitación relevantes para el negocio. (5) Cumplir obligaciones legales y fiscales aplicables. Como finalidades secundarias: envío de información comercial sobre nuevas soluciones y promociones, encuestas de satisfacción y evaluación de servicio.",
              },
              {
                title: "IV. Opciones y medios para limitar el uso de sus datos",
                content: "Usted podrá limitar el uso o divulgación de sus datos personales para finalidades secundarias enviando un correo a privacidad@darcomunicaciones.com.mx con el asunto \"Limitación de uso\". DAR Comunicaciones no transferirá sus datos personales a terceros sin su consentimiento, salvo las excepciones previstas en el artículo 37 de la Ley.",
              },
              {
                title: "V. Derechos ARCO",
                content: "Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer estos derechos, deberá presentar su solicitud por escrito a través de: (a) Correo electrónico: privacidad@darcomunicaciones.com.mx, (b) Domicilio físico: Av. López Mateos Norte 1235, Col. Italia Providencia, Guadalajara, Jalisco. DAR Comunicaciones tendrá un plazo de 20 días hábiles para atender su solicitud.",
              },
              {
                title: "VI. Uso de cookies y tecnologías de rastreo",
                content: "Nuestro sitio web utiliza cookies de sesión para mejorar la experiencia de navegación. No se utilizan cookies de seguimiento de comportamiento ni se comparte información con terceros con fines publicitarios. Usted puede deshabilitar las cookies desde la configuración de su navegador, aunque esto podría afectar la funcionalidad del sitio.",
              },
              {
                title: "VII. Cambios al Aviso de Privacidad",
                content: "DAR Comunicaciones se reserva el derecho de actualizar el presente Aviso de Privacidad en cualquier momento. Los cambios serán notificados a través del sitio web www.darcomunicaciones.com.mx. Le recomendamos revisar periódicamente esta página para estar al tanto de cualquier modificación.",
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
              <span className="text-accent font-semibold">Nota para el equipo de desarrollo:</span> Este aviso de privacidad es un modelo de referencia generado para fines de diseño y presentación. El texto definitivo debe ser revisado y validado por el equipo legal de DAR Comunicaciones antes de su publicación.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
