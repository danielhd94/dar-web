import { pageMeta } from "@/lib/seo";
import { seo } from "@/content/site";

export const metadata = pageMeta(seo.comunidad.title, seo.comunidad.description);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
