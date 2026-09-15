import { pageMeta } from "@/lib/seo";
import { seo } from "@/content/site";

export const metadata = pageMeta(seo.conoce.title, seo.conoce.description, "/conoce-dar");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
