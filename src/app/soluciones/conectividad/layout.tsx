import { pageMeta } from "@/lib/seo";
import { seo } from "@/content/site";

export const metadata = pageMeta(
  seo.conectividad.title,
  seo.conectividad.description,
  "/soluciones/conectividad",
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
