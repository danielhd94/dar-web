import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { footerNav } from "@/content/site";

function NavColumn({ title, links }: { title: string; links: readonly { name: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-navy mb-4">{title}</h4>
      <ul className="space-y-2 text-[0.8rem] text-slate-500">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-navy transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 text-navy">
      <div className="section-container py-10 sm:py-12 md:py-14 pb-[max(2.5rem,calc(6.5rem+env(safe-area-inset-bottom)))] lg:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">
          <div className="sm:col-span-2">
            <div className="mb-4">
              <BrandLogo />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-[240px]">
              Un ecosistema de conectividad, financiamiento, pagos y acompañamiento para negocios.
            </p>
          </div>
          <NavColumn title="Soluciones" links={footerNav.soluciones} />
          <NavColumn title="Conoce DAR" links={footerNav.conoce} />
          <NavColumn title="Comunidad raDAR" links={footerNav.comunidad} />
          <div>
            <NavColumn title="Ayuda" links={footerNav.ayuda} />
            <div className="mt-6">
              <NavColumn title="Legal" links={footerNav.legal} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="section-container py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[0.7rem] text-slate-400">
          <span>© DAR</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {footerNav.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-navy">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
