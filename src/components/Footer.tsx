import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const services = [
  { name: "Conectividad", href: "/soluciones/conectividad" },
  { name: "Dar Credi", href: "/soluciones/dar-credi" },
  { name: "PagaFast", href: "/soluciones/pagafast" },
  { name: "Comunidad raDAR", href: "/comunidad-radar" },
  { name: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
];

const account = [
  { name: "Centro raDAR", href: "/centro-radar" },
  { name: "Para puntos de venta", href: "/soluciones" },
  { name: "Para distribuidores", href: "/conoce-dar/equipo-y-cobertura" },
  { name: "Contacto", href: "/contacto" },
  { name: "Aviso de privacidad", href: "/aviso-de-privacidad" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 text-[#1B2A4A]">
      <div className="section-container py-10 sm:py-12 md:py-14 pb-[max(2.5rem,calc(5.5rem+env(safe-area-inset-bottom)))] lg:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <BrandLogo />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-[220px]">
              Ecosistema de conectividad, financiamiento y pagos para puntos de venta en México.
            </p>
            <p className="text-[0.68rem] text-slate-400 mt-4">
              © {new Date().getFullYear()} DAR Comunicaciones
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#1B2A4A] mb-4">Nuestras soluciones</h4>
            <ul className="space-y-2 text-[0.8rem] text-slate-500">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#1EA7E0] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#1B2A4A] mb-4">Socios</h4>
            <ul className="space-y-2 text-[0.8rem] text-slate-500">
              {account.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#1EA7E0] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[#1B2A4A] mb-4">Atención</h4>
            <p className="text-sm font-bold text-[#1B2A4A]">800-327-2668</p>
            <p className="text-[0.8rem] text-slate-500 mt-2">Lunes a sábado · 9:00 a 19:00</p>
            <p className="text-sm font-bold text-[#1B2A4A] mt-4">Cobertura nacional</p>
            <p className="text-[0.8rem] text-slate-500 mt-1">15 estados con ruta directa</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.7rem] text-slate-400">
          <span>© {new Date().getFullYear()} DAR Comunicaciones S.A. de C.V.</span>
          <div className="flex items-center gap-4">
            <Link href="/aviso-de-privacidad" className="hover:text-[#1EA7E0]">
              Aviso de privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-[#1EA7E0]">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
