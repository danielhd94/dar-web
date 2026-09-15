export const mainNav = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Conoce DAR", href: "/conoce-dar" },
  { label: "Comunidad raDAR", href: "/comunidad-radar" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
] as const;

export const permanentActions = {
  socio: { label: "Quiero ser socio", href: "/soluciones" },
  sesion: { label: "Soy socio / Iniciar sesión", href: "/centro-radar" },
  contacto: { label: "Contacto", href: "/contacto" },
} as const;

export const footerNav = {
  soluciones: [
    { name: "Conectividad", href: "/soluciones/conectividad" },
    { name: "Dar Credi", href: "/soluciones/dar-credi" },
    { name: "PagaFast", href: "/soluciones/pagafast" },
  ],
  conoce: [
    { name: "Qué es DAR", href: "/conoce-dar" },
    { name: "Historia", href: "/conoce-dar/historia" },
    { name: "Equipo y cobertura", href: "/conoce-dar/equipo-y-cobertura" },
  ],
  comunidad: [
    { name: "Conoce la comunidad", href: "/comunidad-radar" },
    { name: "Beneficios", href: "/comunidad-radar/beneficios" },
    { name: "Centro raDAR", href: "/centro-radar" },
  ],
  ayuda: [
    { name: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { name: "Contacto", href: "/contacto" },
  ],
  legal: [
    { name: "Aviso de privacidad", href: "/aviso-de-privacidad" },
    { name: "Términos y condiciones", href: "/terminos-y-condiciones" },
  ],
} as const;

export const goals = [
  {
    title: "Quiero vender chips y portabilidades",
    desc: "Amplía la oferta de tu negocio con soluciones de conectividad, recargas y acompañamiento comercial.",
    href: "/soluciones/conectividad",
    cta: "Conocer DAR Comunicaciones",
  },
  {
    title: "Quiero ofrecer teléfonos a crédito",
    desc: "Ofréceles a más personas acceso a tecnología y abre una nueva oportunidad de venta para tu negocio.",
    href: "/soluciones/dar-credi",
    cta: "Conocer Dar Credi",
  },
  {
    title: "Quiero cobrar servicios y hacer recargas",
    desc: "Convierte tu punto de venta en un centro de servicios y genera ingresos adicionales con PagaFast.",
    href: "/soluciones/pagafast",
    cta: "Conocer PagaFast",
  },
  {
    title: "Quiero beneficios y acompañamiento",
    desc: "Forma parte de raDAR, la comunidad que conecta, informa y acompaña a los socios de DAR.",
    href: "/comunidad-radar",
    cta: "Conocer raDAR",
  },
] as const;

export const faqs = [
  {
    q: "¿Qué es DAR?",
    a: "DAR es un ecosistema que conecta a negocios con soluciones de conectividad, financiamiento, pagos, recargas y acompañamiento. DAR Comunicaciones, Dar Credi y PagaFast cumplen funciones distintas dentro de una misma promesa de crecimiento.",
  },
  {
    q: "¿Quién puede convertirse en socio de DAR?",
    a: "Micronegocios, tiendas, farmacias, distribuidores, negocios de telefonía y otros puntos de venta pueden solicitar información. La disponibilidad y los requisitos dependen de la solución y de la cobertura en cada zona.",
  },
  {
    q: "¿Cómo puedo vender chips, portabilidades y recargas?",
    a: "Completa el formulario de contacto eligiendo conectividad. Un ejecutivo revisará los datos de tu negocio, confirmará cobertura y te explicará el proceso de alta.",
  },
  {
    q: "¿Con qué compañías de telefonía trabaja DAR Comunicaciones?",
    a: "DAR trabaja con distintas compañías del mercado. El portafolio puede cambiar; consulta la disponibilidad actual con un ejecutivo.",
  },
  {
    q: "¿Qué es Dar Credi?",
    a: "Dar Credi facilita el acceso a equipos mediante opciones de financiamiento y ofrece a los socios comerciales una herramienta para activar nuevas ventas.",
  },
  {
    q: "¿El financiamiento está garantizado?",
    a: "No. Toda solicitud está sujeta a evaluación, requisitos, condiciones y disponibilidad. Antes de continuar, recibirás información sobre el proceso aplicable.",
  },
  {
    q: "¿Qué es PagaFast?",
    a: "PagaFast es una solución para negocios que permite ofrecer pagos de servicios, recargas y productos digitales desde un punto de venta.",
  },
  {
    q: "¿Qué necesito para activar PagaFast?",
    a: "Los requisitos dependen del tipo de negocio y del modelo vigente. Registra tus datos para que el equipo confirme disponibilidad y te indique los pasos.",
  },
  {
    q: "¿Qué es la comunidad raDAR?",
    a: "raDAR es la comunidad de socios de DAR. Reúne comunicados, beneficios, capacitación, materiales y canales de soporte.",
  },
  {
    q: "¿Cómo ingreso al Centro raDAR?",
    a: "Utiliza el usuario o correo y la contraseña asociados con tu cuenta. Si aún no tienes acceso, solicítalo a tu ejecutivo o comunícate con soporte.",
  },
  {
    q: "¿Cómo sé si DAR tiene cobertura en mi zona?",
    a: "Comparte tu código postal, municipio y estado en el formulario de cobertura. El equipo confirmará qué soluciones están disponibles.",
  },
  {
    q: "¿Cómo contacto a DAR?",
    a: "Puedes completar el formulario de contacto y seleccionar el motivo de tu consulta. Así tu mensaje llegará al equipo adecuado.",
  },
] as const;

export const seo = {
  home: {
    title: "DAR | Soluciones para hacer crecer tu negocio",
    description:
      "Conectividad, financiamiento, pagos, recargas y acompañamiento para impulsar nuevas oportunidades en tu negocio.",
  },
  soluciones: {
    title: "Soluciones DAR para negocios",
    description:
      "Conoce las soluciones de DAR Comunicaciones, Dar Credi y PagaFast para vender, diversificar ingresos y atender mejor a tus clientes.",
  },
  conectividad: {
    title: "DAR Comunicaciones | Chips, portabilidades y recargas",
    description:
      "Integra soluciones de conectividad a tu negocio con atención, soporte y acompañamiento comercial de DAR Comunicaciones.",
  },
  credi: {
    title: "Dar Credi | Financiamiento y oportunidades de venta",
    description:
      "Conoce opciones de acceso a equipos y descubre cómo ofrecer financiamiento como herramienta de venta en tu negocio.",
  },
  pagafast: {
    title: "PagaFast | Pagos, recargas y servicios para negocios",
    description:
      "Convierte tu punto de venta en un centro de servicios y genera ingresos adicionales con pagos, recargas y productos digitales.",
  },
  conoce: {
    title: "Conoce DAR | Un ecosistema para negocios",
    description:
      "Más de 20 años de experiencia conectando negocios con soluciones, acompañamiento y oportunidades de crecimiento.",
  },
  comunidad: {
    title: "Comunidad raDAR | Beneficios y acompañamiento",
    description:
      "Conoce la comunidad de socios de DAR y accede a información, beneficios, capacitación, materiales y soporte.",
  },
  faq: {
    title: "Preguntas frecuentes | DAR",
    description:
      "Resuelve dudas sobre las soluciones de DAR, los procesos para socios, cobertura, acceso a raDAR y canales de contacto.",
  },
  contacto: {
    title: "Contacto | DAR",
    description: "Cuéntanos qué necesita tu negocio y te conectaremos con el equipo de DAR correspondiente.",
  },
} as const;
