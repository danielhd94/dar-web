import { pageMeta } from "@/lib/seo";
import { seo } from "@/content/site";

export const metadata = pageMeta(seo.pagafast.title, seo.pagafast.description);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
