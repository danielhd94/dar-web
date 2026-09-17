"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { mainNav, permanentActions } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", mobile);
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [mobile]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setMobile(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`site-header sticky top-0 left-0 right-0 bg-white border-b border-slate-100 ${mobile ? "z-[70]" : "z-50"}`}
      >
        <div className="section-container">
          <div className="flex items-center gap-3 min-h-[4.5rem] sm:min-h-[5rem] py-2">
            <BrandLogo />

            <div className="hidden lg:flex items-center gap-2 xl:gap-3 ml-auto shrink-0">
              <Link
                href={permanentActions.sesion.href}
                className="text-[0.78rem] text-slate-500 hover:text-navy whitespace-nowrap min-h-11 inline-flex items-center"
              >
                {permanentActions.sesion.label}
              </Link>
              <Link href={permanentActions.socio.href} className="btn-secondary !py-2 !px-4 !text-xs !rounded">
                {permanentActions.socio.label}
              </Link>
              <Link href={permanentActions.contacto.href} className="btn-primary !py-2 !px-5 !text-xs !rounded">
                {permanentActions.contacto.label}
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
            {mainNav.map((item) => (
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
        <div className="site-drawer fixed z-[60] overflow-y-auto lg:hidden">
          <div className="section-container py-4 flex flex-col pb-[max(2rem,env(safe-area-inset-bottom))]">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobile(false)}
                className="min-h-12 flex items-center border-b border-slate-100 text-sm font-medium text-slate-800"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 flex flex-col gap-3">
              <Link href={permanentActions.sesion.href} onClick={() => setMobile(false)} className="btn-secondary w-full justify-center">
                {permanentActions.sesion.label}
              </Link>
              <Link href={permanentActions.socio.href} onClick={() => setMobile(false)} className="btn-secondary w-full justify-center">
                {permanentActions.socio.label}
              </Link>
              <Link href={permanentActions.contacto.href} onClick={() => setMobile(false)} className="btn-primary w-full justify-center">
                {permanentActions.contacto.label}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
