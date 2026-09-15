import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";
import { seo } from "@/content/site";

export const metadata = pageMeta(seo.soluciones.title, seo.soluciones.description, "/soluciones");

export default function SolucionesLayout({ children }: { children: ReactNode }) {
  return children;
}
