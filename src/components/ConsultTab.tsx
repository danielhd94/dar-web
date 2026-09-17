import Link from "next/link";

export default function ConsultTab() {
  return (
    <>
      <Link
        href="/contacto"
        className="fixed right-0 top-[42%] z-40 hidden lg:flex items-center justify-center bg-primary hover:bg-primary-600 text-navy w-9 h-44 rounded-l-sm shadow-md"
        aria-label="Consulta en línea"
      >
        <span className="font-display font-bold text-[0.62rem] tracking-[0.18em] uppercase [writing-mode:vertical-rl] rotate-180">
          Consulta en línea
        </span>
      </Link>
      <Link
        href="/contacto"
        className="lg:hidden fixed z-40 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] min-h-12 px-4 rounded-full bg-primary text-navy shadow-md font-display font-bold text-xs inline-flex items-center justify-center"
      >
        Consulta
      </Link>
    </>
  );
}
