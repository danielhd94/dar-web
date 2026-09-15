import { pageMeta } from "@/lib/seo";
import { seo } from "@/content/site";

export const metadata = pageMeta(seo.contacto.title, seo.contacto.description, "/contacto");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
