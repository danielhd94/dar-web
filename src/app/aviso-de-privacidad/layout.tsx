import { pageMeta } from "@/lib/seo";
import { seo } from "@/content/site";

export const metadata = pageMeta(seo.aviso.title, seo.aviso.description, "/aviso-de-privacidad");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
