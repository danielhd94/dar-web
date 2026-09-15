import { pageMeta } from "@/lib/seo";
import { seo } from "@/content/site";

export const metadata = pageMeta(seo.centroRadar.title, seo.centroRadar.description, "/centro-radar");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
