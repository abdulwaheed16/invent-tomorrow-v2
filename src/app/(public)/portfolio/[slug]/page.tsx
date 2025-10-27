import { PortfolioDetailContent } from "@/components/pages/portfolio/portfolio-details";
import { getPortfolioBySlug } from "@/lib/data/portfolio-data";
import { notFound } from "next/navigation";

interface PortfolioDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailProps) {
  const { slug } = await params;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    notFound();
  }

  return <PortfolioDetailContent portfolio={portfolio} />;
}
