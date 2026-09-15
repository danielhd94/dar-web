import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultTab from "@/components/ConsultTab";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DAR Comunicaciones — Ecosistema de soluciones para tu negocio",
    template: "%s | DAR Comunicaciones",
  },
  description:
    "DAR conecta tu negocio con soluciones de conectividad, financiamiento, pagos y recargas. Más de 20 años creciendo junto a los negocios.",
  keywords: [
    "DAR Comunicaciones",
    "chips telefonía",
    "portabilidades",
    "Dar Credi",
    "PagaFast",
    "raDAR",
    "distribuidores telefonía México",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "DAR Comunicaciones",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className="bg-white text-zinc-950 font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <ConsultTab />
        <Footer />
      </body>
    </html>
  );
}
