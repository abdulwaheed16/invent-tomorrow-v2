// About Page Mock Data

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Abdul Haadi",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in software development and AI integration. Passionate about transforming ideas into reality.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Expert in scalable architecture and cloud solutions. Led development teams at Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    linkedin: "https://linkedin.com",
  },
  {
    id: "3",
    name: "Michael Rodriguez",
    role: "Head of AI & Machine Learning",
    bio: "PhD in Computer Science. Specializes in NLP and computer vision applications for business solutions.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    linkedin: "https://linkedin.com",
  },
  {
    id: "4",
    name: "Emily Watson",
    role: "Lead Product Designer",
    bio: "Award-winning designer focused on creating intuitive and beautiful user experiences that delight users.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    linkedin: "https://linkedin.com",
  },
  {
    id: "5",
    name: "David Kim",
    role: "Senior Full-Stack Developer",
    bio: "Full-stack wizard with expertise in React, Node.js, and cloud infrastructure. Built 50+ production apps.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    linkedin: "https://linkedin.com",
  },
  {
    id: "6",
    name: "Lisa Anderson",
    role: "DevOps Engineer",
    bio: "Infrastructure expert ensuring 99.99% uptime. Kubernetes certified with passion for automation.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    linkedin: "https://linkedin.com",
  },
];

export const companyTimeline: TimelineItem[] = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Started with a vision to democratize AI and make cutting-edge technology accessible to all businesses.",
  },
  {
    year: "2021",
    title: "First Major Client",
    description:
      "Delivered our first enterprise AI solution, setting the foundation for future success.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description:
      "Grew from 3 to 15 talented professionals, establishing our core development team.",
  },
  {
    year: "2023",
    title: "50+ Projects Milestone",
    description:
      "Successfully completed 50 projects across healthcare, e-commerce, and fintech sectors.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description:
      "Named Top AI Development Agency. Expanded to 30+ team members serving clients globally.",
  },
  {
    year: "2025",
    title: "Future Vision",
    description:
      "Launching AI consulting services and expanding into emerging markets with innovative solutions.",
  },
];

export const companyValues: ValueItem[] = [
  {
    icon: "🎯",
    title: "Innovation First",
    description:
      "We constantly push boundaries, exploring cutting-edge technologies to deliver tomorrow's solutions today.",
  },
  {
    icon: "🤝",
    title: "Client Partnership",
    description:
      "Your success is our success. We work as an extension of your team, committed to your goals.",
  },
  {
    icon: "💎",
    title: "Quality Excellence",
    description:
      "We never compromise on quality. Every line of code, every design element is crafted with precision.",
  },
  {
    icon: "⚡",
    title: "Agile Execution",
    description:
      "Fast-paced development without sacrificing quality. We deliver MVPs in weeks, not months.",
  },
  {
    icon: "🌱",
    title: "Continuous Learning",
    description:
      "The tech landscape evolves rapidly. We invest in continuous learning to stay ahead of the curve.",
  },
  {
    icon: "🌍",
    title: "Global Impact",
    description:
      "Building solutions that make a difference. From local startups to global enterprises.",
  },
];

export const companyStats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "30+", label: "Team Members" },
  { value: "5", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

export const services = [
  {
    icon: "💻",
    title: "Web Application Development",
    description:
      "Custom web apps built with modern frameworks like React, Next.js, and Node.js.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by GPT-4, custom ML models, and computer vision.",
  },
  {
    icon: "🛒",
    title: "E-commerce Solutions",
    description:
      "Full-featured online stores with payment integration, inventory management, and analytics.",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud architecture on AWS, Google Cloud, and Azure with DevOps automation.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love, backed by research and best practices.",
  },
];

export const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional",
  "Microsoft Azure Expert",
  "Kubernetes Administrator",
  "Scrum Master Certified",
  "ISO 9001:2015 Quality Management",
];

export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "TensorFlow",
  "OpenAI",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "REST API",
];
