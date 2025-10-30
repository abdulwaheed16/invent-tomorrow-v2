import { BlogDetailPageClient } from "@/components/pages/blogs/blog-details";
import { getBlogBySlug } from "@/lib/data/blog-data";
import { notFound } from "next/navigation";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailPageClient post={post} />;
}
