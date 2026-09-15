import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultTab from "@/components/ConsultTab";
import { seo } from "@/content/site";

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
    default: seo.home.title,
    template: "%s",
  },
  description: seo.home.description,
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "DAR",
    title: seo.home.title,
    description: seo.home.description,
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
