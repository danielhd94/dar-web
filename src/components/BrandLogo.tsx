import Link from "next/link";

export const BRAND_LOGO_SRC = "/Logo Dar Prov.webp";

export default function BrandLogo() {
  return (
    <Link href="/" className="brand-logo inline-flex items-center shrink-0 min-w-0">
      <img
        src={encodeURI(BRAND_LOGO_SRC)}
        alt="DAR Comunicaciones"
      />
    </Link>
  );
}
