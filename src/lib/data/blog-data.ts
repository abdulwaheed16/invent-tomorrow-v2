// lib/data/blog-data.ts
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Changed from sections to single content field
  coverImage: string;
  images?: string[];
  category: string;
  tags?: string[];
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishDate: string;
  readTime: number;
  views: number;
  likes: number;
  comments: number;
  featured?: boolean;
}

// Sample data with single content field
const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ai-in-web-development",
    title: "The Future of AI in Web Development: Trends and Predictions",
    excerpt:
      "Explore how artificial intelligence is revolutionizing web development and what it means for developers in 2024 and beyond.",
    content: `
      <h1 id="introduction">Introduction</h1>
      <p>Artificial Intelligence has become one of the most transformative technologies in recent years, and its impact on web development is profound. From automated code generation to intelligent user experiences, AI is reshaping how we build and interact with web applications.</p>
      <p>In this comprehensive guide, we'll explore the current state of AI in web development, emerging trends, and predictions for the future that every developer should be aware of.</p>
      
      <h2 id="current-trends">Current Trends in AI-Powered Development</h2>
      <p>The integration of AI in web development is no longer a futuristic concept but a present reality. Here are the key trends shaping the industry:</p>
      
      <h3 id="ai-code-assistants">1. AI Code Assistants</h3>
      <p>Tools like GitHub Copilot, ChatGPT, and other AI-powered code assistants have become indispensable for developers. These tools can generate code snippets, suggest improvements, and even entire functions based on natural language descriptions.</p>
      
      <h3 id="automated-testing">2. Automated Testing</h3>
      <p>AI is revolutionizing quality assurance by automatically generating test cases, identifying potential bugs, and even predicting areas of code that are most likely to contain errors.</p>
      
      <h2 id="future-predictions">Future Predictions for 2025 and Beyond</h2>
      <p>As we look towards the future, several exciting developments are on the horizon:</p>
      
      <h3 id="no-code-revolution">1. No-Code/Low-Code Revolution</h3>
      <p>AI-powered platforms will make it possible for non-developers to create complex web applications through natural language interfaces and visual builders.</p>
      
      <h3 id="intelligent-optimization">2. Intelligent Performance Optimization</h3>
      <p>AI will automatically optimize web applications in real-time, adjusting resources, caching strategies, and even rewriting code for better performance.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>The integration of AI into web development is not just changing how we code—it's transforming the entire development lifecycle. As these technologies continue to evolve, developers who embrace AI tools will have a significant advantage in creating more efficient, intelligent, and user-friendly web applications.</p>
    `,
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    ],
    category: "AI & ML",
    tags: ["AI", "Web Development", "Future Tech", "Machine Learning"],
    author: {
      name: "Sarah Johnson",
      role: "Senior AI Engineer",
    },
    publishDate: "2024-01-15",
    readTime: 8,
    views: 15420,
    likes: 892,
    comments: 127,
    featured: true,
  },
  // Add more blog posts...
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(
  currentPostId: string,
  category: string,
  limit: number = 3
): BlogPost[] {
  return blogPosts
    .filter((post) => post.id !== currentPostId && post.category === category)
    .slice(0, limit);
}
