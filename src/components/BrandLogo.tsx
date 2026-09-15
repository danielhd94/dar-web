import Link from "next/link";

export default function BrandLogo({
  className = "h-12 sm:h-[3.35rem]",
}: {
  className?: string;
}) {
  return (
    <Link href="/" className="inline-flex items-center shrink-0">
      <img
        src="/dar-logo-lockup.png"
        alt="DAR Comunicaciones"
        className={`w-auto object-contain object-left ${className}`}
      />
    </Link>
  );
}
