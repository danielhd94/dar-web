import { pageMeta } from "@/lib/seo";
import { seo } from "@/content/site";

export const metadata = pageMeta(seo.faq.title, seo.faq.description, "/preguntas-frecuentes");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
