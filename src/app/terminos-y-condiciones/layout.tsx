import { pageMeta } from "@/lib/seo";
import { seo } from "@/content/site";

export const metadata = pageMeta(seo.terminos.title, seo.terminos.description, "/terminos-y-condiciones");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
