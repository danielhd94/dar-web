import type { ReactNode } from "react";
import { HeroScene, type SceneVariant } from "@/components/visual";

interface PageBannerProps {
  title: ReactNode;
  subtitle?: string;
  actions?: ReactNode;
  bullets?: string[];
  scene?: SceneVariant;
}

export default function PageBanner({
  title,
  subtitle,
  actions,
  bullets,
  scene = "growth",
}: PageBannerProps) {
  return (
    <section className="bg-gradient-to-r from-[#1EA7E0] via-[#1896D4] to-[#0E7FBE] text-white pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 overflow-hidden">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center">
        <div className="min-w-0">
          <h1 className="font-display font-black text-[1.85rem] sm:text-3xl md:text-[2.65rem] tracking-tight leading-[1.12] mb-4 text-balance">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-white/90 text-sm leading-relaxed max-w-lg mb-5">{subtitle}</p>
          ) : null}
          {bullets?.length ? (
            <ul className="space-y-1.5 mb-6 text-sm text-white/90">
              {bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FFD44D] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        <div className="hidden md:block justify-self-end w-full">
          <HeroScene variant={scene} />
        </div>
      </div>
    </section>
  );
}
