import type { Metadata } from "next";

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (host) return `https://${host.replace(/^https?:\/\//, "")}`;

  return "https://darcomunicaciones.vercel.app";
}

export const SITE_URL = resolveSiteUrl();
export const SITE_NAME = "DAR Comunicaciones";

export const ogImage = {
  url: `${SITE_URL}/og.png`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "DAR Comunicaciones: conectividad, Dar Credi, PagaFast y raDAR",
} as const;

export function pageMeta(title: string, description: string, path = "/"): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_MX",
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
