export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="font-display font-black text-2xl sm:text-[1.75rem] text-[#1B2A4A] tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-sm text-slate-400 mt-2 max-w-xl">{subtitle}</p>}
    </div>
  );
}
