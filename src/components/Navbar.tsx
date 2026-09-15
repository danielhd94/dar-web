"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const nav = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Conectividad", href: "/soluciones/conectividad" },
  { label: "Dar Credi", href: "/soluciones/dar-credi" },
  { label: "PagaFast", href: "/soluciones/pagafast" },
  { label: "Comunidad", href: "/comunidad-radar" },
  { label: "FAQ", href: "/preguntas-frecuentes" },
  { label: "Contacto", href: "/contacto" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/soluciones") return pathname === "/soluciones";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", mobile);
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [mobile]);

  return (
    <>
      <header
        className={`site-header sticky top-0 left-0 right-0 bg-white border-b border-slate-100 ${mobile ? "z-[70]" : "z-50"}`}
      >
        <div className="section-container">
          <div className="flex items-center gap-3 min-h-[4.25rem] py-2">
            <BrandLogo />

            <div className="hidden md:flex flex-col items-start lg:items-center text-[0.72rem] text-slate-500 leading-snug min-w-0">
              <a href="tel:8003272668" className="hover:text-[#1EA7E0]">
                Atención <strong className="text-slate-700 font-semibold">800-327-2668</strong>
              </a>
              <span className="hidden lg:inline">
                Cobertura <strong className="text-slate-700 font-semibold">15 estados</strong>
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-3 xl:gap-4 ml-auto shrink-0">
              <Link
                href="/centro-radar"
                className="flex items-center gap-1.5 text-[0.78rem] text-slate-500 hover:text-[#1EA7E0] transition-colors"
              >
                <User className="w-4 h-4" />
                Centro raDAR
              </Link>
              <Link href="/soluciones" className="btn-secondary !py-2 !px-4 !text-xs !rounded">
                Afiliarme
              </Link>
              <Link href="/contacto" className="btn-primary !py-2 !px-5 !text-xs !rounded">
                Contactar
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobile(!mobile)}
              className="lg:hidden ml-auto inline-flex items-center justify-center min-h-11 min-w-11 text-slate-700 hover:bg-slate-100 rounded-md"
              aria-expanded={mobile ? "true" : "false"}
              aria-label={mobile ? "Cerrar menú" : "Abrir menú"}
            >
              {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <nav className="hidden lg:block border-t border-slate-100">
          <div className="section-container site-nav flex items-center">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="site-nav-link"
                data-active={isActive(pathname, item.href) ? "true" : "false"}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {mobile ? (
          <div className="site-drawer fixed inset-0 z-[60] overflow-y-auto lg:hidden">
            <div className="section-container py-4 flex flex-col pb-[max(2rem,env(safe-area-inset-bottom))]">
              <a href="tel:8003272668" className="py-3 text-sm text-slate-500 border-b border-slate-100">
                Atención <strong className="text-slate-800">800-327-2668</strong>
              </a>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobile(false)}
                  className="min-h-11 flex items-center border-b border-slate-100 text-sm font-medium text-slate-800"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 flex flex-col gap-3">
                <Link
                  href="/centro-radar"
                  onClick={() => setMobile(false)}
                  className="btn-secondary w-full justify-center"
                >
                  Centro raDAR
                </Link>
                <Link
                  href="/soluciones"
                  onClick={() => setMobile(false)}
                  className="btn-secondary w-full justify-center"
                >
                  Afiliarme
                </Link>
                <Link
                  href="/contacto"
                  onClick={() => setMobile(false)}
                  className="btn-primary w-full justify-center"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </div>
      ) : null}
    </>
  );
}
