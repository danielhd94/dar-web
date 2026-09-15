"use client";

interface MarqueeBarProps {
  items: string[];
  speed?: number;
  className?: string;
  separator?: string;
}

export function MarqueeBar({ items, speed = 25, className = "", separator = "|" }: MarqueeBarProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden border-y border-zinc-200 py-3 bg-zinc-50 ${className}`}>
      <div
        className="flex gap-8 whitespace-nowrap w-max"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="label-mono text-zinc-600 tracking-widest">{item}</span>
            <span className="label-mono text-primary opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
