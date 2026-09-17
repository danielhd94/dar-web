import type { ReactNode } from "react";
import Link from "next/link";
import {
  CreditCard,
  Headphones,
  MapPin,
  Radio,
  Smartphone,
  Store,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export type SceneVariant = "growth" | "chip" | "phone" | "pay" | "radar" | "team";

const sceneIcon: Record<SceneVariant, LucideIcon> = {
  growth: Store,
  chip: Wifi,
  phone: Smartphone,
  pay: CreditCard,
  radar: Radio,
  team: Headphones,
};

export function HeroScene({ variant = "growth" }: { variant?: SceneVariant }) {
  const Icon = sceneIcon[variant];
  return (
    <div className="relative mx-auto w-full max-w-[14rem] sm:max-w-[18rem] lg:max-w-[22rem] aspect-square">
      <div className="absolute inset-[12%] rounded-full bg-primary" />
      <div className="absolute right-[6%] top-[18%] h-[58%] w-[42%] rounded-2xl bg-white shadow-lg border border-white/80 flex items-center justify-center">
        <Icon className="w-16 h-16 text-navy" strokeWidth={1.5} />
      </div>
      <div className="absolute left-[8%] bottom-[16%] h-16 w-16 rounded-xl bg-navy flex items-center justify-center">
        <MapPin className="w-7 h-7 text-primary" strokeWidth={2} />
      </div>
    </div>
  );
}

export function OfferCard({
  kicker,
  title,
  desc,
  href,
  cta,
}: {
  kicker: string;
  title: string;
  desc?: string;
  href: string;
  cta: string;
}) {
  return (
    <article className="bg-white border border-slate-100 rounded-md p-5 sm:p-6 flex flex-col min-h-0 sm:min-h-[16rem] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <p className="text-xs text-slate-400 mb-4">{kicker}</p>
      <p className="font-display font-black text-3xl sm:text-4xl tracking-tight mb-2 text-navy">
        {title}
      </p>
      {desc ? <p className="text-sm text-slate-500 leading-relaxed">{desc}</p> : null}
      <div className="mt-auto pt-8">
        <Link href={href} className="btn-primary !text-xs !rounded !px-5">
          {cta}
        </Link>
      </div>
    </article>
  );
}

export function IconTile({
  title,
  desc,
  href,
  icon: Icon,
}: {
  title: string;
  desc?: string;
  href: string;
  icon: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 bg-white border border-slate-100 rounded-md px-5 py-4 min-h-[4.5rem] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-primary/40"
    >
      <span className="w-10 h-10 rounded-full bg-primary-50 text-navy inline-flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" strokeWidth={1.75} />
      </span>
      <span className="min-w-0">
        <span className="font-display font-bold text-sm text-navy block">{title}</span>
        {desc ? <span className="text-xs text-slate-400 leading-snug block">{desc}</span> : null}
      </span>
    </Link>
  );
}

export function PillarCard({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc?: string;
  icon: LucideIcon;
}) {
  return (
    <div className="bg-white border border-slate-100 rounded-md p-5 min-h-[8.5rem] flex flex-col">
      <span className="w-10 h-10 rounded-full bg-primary-50 text-navy inline-flex items-center justify-center mb-4">
        <Icon className="w-5 h-5" strokeWidth={1.75} />
      </span>
      <p className="font-display font-bold text-sm leading-snug">{title}</p>
      {desc ? <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{desc}</p> : null}
    </div>
  );
}

export function StepRow({ items }: { items: { title: string; desc?: string }[] }) {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <li key={item.title} className="bg-white border border-slate-100 rounded-md p-5">
          <p className="font-display font-black text-2xl text-navy mb-2">{i + 1}</p>
          <p className="font-display font-bold text-sm leading-snug">{item.title}</p>
          {item.desc ? <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{item.desc}</p> : null}
        </li>
      ))}
    </ol>
  );
}

export function StatsBand({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <section className="band-brand text-white py-12 md:py-14">
      <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.map((item) => (
          <div key={item.label}>
            <p className="font-display font-black text-2xl sm:text-3xl md:text-4xl mb-1">{item.value}</p>
            <p className="text-white/80 text-xs sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SplitPanel({
  scene,
  title,
  children,
  href,
  cta,
}: {
  scene: SceneVariant;
  title: string;
  children?: ReactNode;
  href: string;
  cta: string;
}) {
  return (
    <section className="py-14 md:py-16">
      <div className="section-container grid grid-cols-1 lg:grid-cols-[minmax(0,18rem)_1fr] gap-8 md:gap-10 items-center min-w-0">
        <div className="hidden md:block">
          <HeroScene variant={scene} />
        </div>
        <div>
          <h2 className="font-display font-black text-2xl sm:text-[1.75rem] tracking-tight mb-3">{title}</h2>
          {children}
          <Link href={href} className="btn-primary !text-xs !rounded mt-6 inline-flex">
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
