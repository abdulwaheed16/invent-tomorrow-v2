import { PortfolioDetailContent } from "@/components/pages/portfolio/portfolio-details";
import { getPortfolioBySlug, portfolioItems } from "@/lib/data/portfolio-data";
import { notFound } from "next/navigation";

interface PortfolioDetailProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true; // allow dynamic params

export async function generateStaticParams() {
  if (!portfolioItems || portfolioItems.length < 1) {
    notFound();
  }

  return portfolioItems.map((portfolio) => ({ slug: portfolio.slug }));
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
