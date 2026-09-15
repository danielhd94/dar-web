import type { ReactNode } from "react";

interface PageBannerProps {
  title: ReactNode;
  subtitle?: string;
  actions?: ReactNode;
}

export default function PageBanner({ title, subtitle, actions }: PageBannerProps) {
  return (
    <section className="bg-gradient-to-r from-[#1EA7E0] via-[#1896D4] to-[#0E7FBE] text-white py-10 sm:py-12 md:py-14">
      <div className="section-container max-w-3xl">
        <h1 className="font-display font-black text-[1.75rem] sm:text-3xl md:text-4xl tracking-tight leading-[1.15] mb-3 break-words">
          {title}
        </h1>
        {subtitle && (
          <p className={`text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl${actions ? " mb-6" : ""}`}>
            {subtitle}
          </p>
        )}
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
