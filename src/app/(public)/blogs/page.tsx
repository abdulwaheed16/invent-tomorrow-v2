import BlogPageClient from "@/components/pages/blogs";
import { getAllBlogPosts } from "@/lib/data/blog-data";

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  return <BlogPageClient blogPosts={blogPosts} />;
}
