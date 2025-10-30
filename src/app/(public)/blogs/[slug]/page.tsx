import { BlogDetailPageClient } from "@/components/pages/blogs/blog-details";
import { getAllBlogPosts, getBlogBySlug } from "@/lib/data/blog-data";
import { notFound } from "next/navigation";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const blogPosts = getAllBlogPosts();

  if (blogPosts?.length < 1) {
    notFound();
  }

  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailPageClient post={post} />;
}
