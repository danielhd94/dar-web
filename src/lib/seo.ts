import type { Metadata } from "next";

export const SITE_URL = "https://www.darcomunicaciones.com.mx";
export const SITE_NAME = "DAR Comunicaciones";

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
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
      images: [ogImage.url],
    },
  };
}
