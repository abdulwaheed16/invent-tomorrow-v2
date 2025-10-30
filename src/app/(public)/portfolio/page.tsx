import PortfolioPageClient from "@/components/pages/portfolio";
import { portfolioItems } from "@/lib/data/portfolio-data";

export default function PortfolioPage() {
  return <PortfolioPageClient portfolioItems={portfolioItems} />;
}
