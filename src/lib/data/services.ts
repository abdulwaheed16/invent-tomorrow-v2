export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  heroImage: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  caseStudies?: {
    title: string;
    description: string;
    metrics: string[];
  }[];
}

export const services: Service[] = [
  {
    id: "ai-agents",
    title: "AI Agents",
    subtitle:
      "We create AI agents that bring clarity, efficiency, and usefulness to SaaS products.",
    description:
      "Transform your SaaS platform with intelligent AI agents that automate workflows, provide instant insights, and enhance user experience. Our custom AI solutions integrate seamlessly with your existing infrastructure.",
    icon: "MessageSquare",
    heroImage: "/src/assets/ai-agents-hero.jpg",
    features: [
      "Custom AI agent development tailored to your business needs",
      "Natural language processing for intuitive user interactions",
      "Automated workflow orchestration and task management",
      "Real-time data analysis and predictive insights",
      "Seamless integration with existing SaaS platforms",
      "Multi-channel support (web, mobile, chat, voice)",
    ],
    benefits: [
      "Reduce operational costs by up to 60% through automation",
      "Improve customer satisfaction with 24/7 intelligent support",
      "Scale your operations without proportional increase in headcount",
      "Make data-driven decisions with AI-powered analytics",
      "Enhance user engagement with personalized experiences",
    ],
    technologies: [
      "OpenAI GPT-4",
      "LangChain",
      "Python",
      "TensorFlow",
      "PyTorch",
      "Vector Databases",
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description:
          "We analyze your workflows and identify automation opportunities",
      },
      {
        step: 2,
        title: "AI Model Selection",
        description:
          "Choose and fine-tune the right AI models for your use case",
      },
      {
        step: 3,
        title: "Integration & Testing",
        description:
          "Seamlessly integrate AI agents with your existing systems",
      },
      {
        step: 4,
        title: "Launch & Optimization",
        description:
          "Deploy and continuously improve based on real-world usage",
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "CTO",
        company: "TechFlow Inc",
        content:
          "The AI agent transformed our customer support. Response times dropped by 85% and satisfaction scores soared.",
        rating: 5,
      },
      {
        name: "Michael Chen",
        role: "VP Product",
        company: "DataSphere",
        content:
          "Incredible ROI. The AI handles routine tasks so our team can focus on strategic initiatives.",
        rating: 5,
      },
      {
        name: "Emily Rodriguez",
        role: "CEO",
        company: "CloudScale",
        content:
          "Best investment we made this year. The AI agent pays for itself many times over.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "How long does it take to implement an AI agent?",
        answer:
          "Typical implementation takes 6-8 weeks from discovery to launch, depending on complexity and integration requirements.",
      },
      {
        question: "Can the AI agent integrate with our existing systems?",
        answer:
          "Yes! Our AI agents are designed to integrate seamlessly with most modern SaaS platforms, CRMs, and databases through APIs and webhooks.",
      },
      {
        question: "What kind of training data do you need?",
        answer:
          "We work with your existing documentation, support tickets, and knowledge base. We can also help you structure new training data if needed.",
      },
      {
        question: "How do you ensure the AI responses are accurate?",
        answer:
          "We implement multiple validation layers, human-in-the-loop review processes, and continuous monitoring to ensure high accuracy and reliability.",
      },
      {
        question: "What's the ongoing maintenance like?",
        answer:
          "We provide ongoing monitoring, performance optimization, and model updates. Most clients need minimal hands-on maintenance after the initial setup.",
      },
    ],
    caseStudies: [
      {
        title: "Customer Support AI",
        description:
          "Automated 70% of customer inquiries while maintaining high satisfaction",
        metrics: [
          "85% faster response time",
          "40% higher CSAT",
          "$500K annual savings",
        ],
      },
      {
        title: "Sales Intelligence Agent",
        description: "AI-powered lead qualification and nurturing system",
        metrics: [
          "150% more qualified leads",
          "35% shorter sales cycle",
          "2x conversion rate",
        ],
      },
    ],
  },
  {
    id: "web-app-development",
    title: "Web App Development",
    subtitle:
      "We create SaaS-ready web platforms that balance speed, usability, and long-term growth.",
    description:
      "Build scalable, high-performance web applications that grow with your business. Our modern development approach ensures your platform is fast, secure, and ready for millions of users.",
    icon: "Globe",
    heroImage: "/src/assets/web-app-hero.jpg",
    features: [
      "Modern frontend with React, Next.js, or Vue.js",
      "Scalable backend architecture (Node.js, Python, Go)",
      "Cloud-native deployment (AWS, Google Cloud, Azure)",
      "Real-time features with WebSockets and server-sent events",
      "Progressive Web App (PWA) capabilities",
      "Comprehensive API development and documentation",
    ],
    benefits: [
      "Launch your MVP in 6-8 weeks with our proven process",
      "Scale from 100 to 1M users without performance degradation",
      "Reduce infrastructure costs with optimized cloud architecture",
      "Improve conversion rates with lightning-fast load times",
      "Future-proof your platform with modular, maintainable code",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
    process: [
      {
        step: 1,
        title: "Requirements & Design",
        description:
          "Define features, user flows, and create interactive prototypes",
      },
      {
        step: 2,
        title: "Architecture Planning",
        description: "Design scalable system architecture and tech stack",
      },
      {
        step: 3,
        title: "Agile Development",
        description: "Build in 2-week sprints with continuous feedback",
      },
      {
        step: 4,
        title: "Testing & Launch",
        description: "Comprehensive testing, deployment, and go-live support",
      },
    ],
    testimonials: [
      {
        name: "David Park",
        role: "Founder",
        company: "StartupHub",
        content:
          "They built our entire platform in 8 weeks. The code quality and performance exceeded our expectations.",
        rating: 5,
      },
      {
        name: "Lisa Martinez",
        role: "Product Manager",
        company: "FinTech Pro",
        content:
          "Best development team we've worked with. They handle 50K concurrent users without breaking a sweat.",
        rating: 5,
      },
      {
        name: "James Wilson",
        role: "CTO",
        company: "EduConnect",
        content:
          "Professional, efficient, and always available. Our platform has 99.9% uptime thanks to their solid architecture.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "What's included in your web app development service?",
        answer:
          "Full-stack development including frontend, backend, database design, API development, deployment, and 3 months of post-launch support.",
      },
      {
        question: "Do you provide hosting and maintenance?",
        answer:
          "Yes, we offer managed hosting on AWS/GCP/Azure and ongoing maintenance packages. We can also train your team to self-manage.",
      },
      {
        question: "Can you work with our existing codebase?",
        answer:
          "Absolutely! We can audit, refactor, or extend your existing application. We've successfully modernized legacy systems for many clients.",
      },
      {
        question: "How do you handle security and compliance?",
        answer:
          "We follow OWASP best practices, implement SOC 2 compliant infrastructure, and can help with GDPR, HIPAA, or PCI compliance.",
      },
      {
        question: "What's your typical project timeline?",
        answer:
          "MVPs take 6-8 weeks, full platforms 3-6 months. We use agile methodology with bi-weekly releases so you see progress constantly.",
      },
    ],
    caseStudies: [
      {
        title: "B2B SaaS Platform",
        description:
          "Built enterprise-grade project management tool from scratch",
        metrics: ["50K+ active users", "99.9% uptime", "$2M ARR in year one"],
      },
      {
        title: "E-commerce Marketplace",
        description:
          "High-performance marketplace handling millions in transactions",
        metrics: ["$10M processed", "Sub-second load times", "500K products"],
      },
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    subtitle:
      "We create mobile apps that balance smooth UX, clean UI, and reliable performance.",
    description:
      "Deliver exceptional mobile experiences that users love. Our mobile apps combine beautiful design with robust functionality, ensuring high engagement and retention rates.",
    icon: "Smartphone",
    heroImage: "/src/assets/mobile-app-hero.jpg",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions with React Native or Flutter",
      "Offline-first architecture for reliability",
      "Push notifications and real-time updates",
      "In-app purchases and subscription management",
      "Biometric authentication and security",
    ],
    benefits: [
      "Reach 90% of mobile users with cross-platform development",
      "Reduce development time by 40% compared to native-only approach",
      "Increase user retention with smooth, responsive interfaces",
      "Monetize effectively with proven payment integrations",
      "Stay compliant with App Store and Play Store requirements",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "GraphQL",
    ],
    process: [
      {
        step: 1,
        title: "UX Research & Design",
        description: "User research, wireframes, and high-fidelity prototypes",
      },
      {
        step: 2,
        title: "Native Development",
        description:
          "Build for iOS and Android with platform-specific optimizations",
      },
      {
        step: 3,
        title: "Testing & QA",
        description: "Rigorous testing on real devices and beta user feedback",
      },
      {
        step: 4,
        title: "App Store Launch",
        description: "Handle submission, approval, and app store optimization",
      },
    ],
    testimonials: [
      {
        name: "Amanda Foster",
        role: "Founder",
        company: "FitLife",
        content:
          "Our app has 4.8 stars with 500K+ downloads. Users love the smooth performance and beautiful design.",
        rating: 5,
      },
      {
        name: "Robert Kim",
        role: "CEO",
        company: "PayFlow",
        content:
          "They built a secure financial app that passed all security audits. Absolutely stellar work.",
        rating: 5,
      },
      {
        name: "Jennifer Adams",
        role: "VP Product",
        company: "SocialHub",
        content:
          "The app handles millions of real-time messages flawlessly. Performance is incredible.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "Should I build native or cross-platform?",
        answer:
          "Cross-platform (React Native/Flutter) covers 90% of use cases and saves 40% on costs. We recommend native only for apps with heavy AR, 3D, or platform-specific features.",
      },
      {
        question: "How much does mobile app development cost?",
        answer:
          "Simple apps start at $30K, complex apps $80K+. We provide detailed estimates after understanding your requirements.",
      },
      {
        question: "Do you handle App Store submissions?",
        answer:
          "Yes! We manage the entire submission process, app store optimization, and help you navigate Apple and Google's review processes.",
      },
      {
        question: "Can you integrate with our backend API?",
        answer:
          "Absolutely. We work with any REST or GraphQL API and can help optimize it for mobile use cases.",
      },
      {
        question: "What about post-launch support?",
        answer:
          "We provide 3 months of included support, plus optional maintenance packages for ongoing updates, bug fixes, and OS compatibility.",
      },
    ],
    caseStudies: [
      {
        title: "Fitness Tracking App",
        description: "Social fitness app with real-time activity tracking",
        metrics: ["500K+ downloads", "4.8★ rating", "60% retention rate"],
      },
      {
        title: "Financial Services App",
        description: "Secure banking app with biometric authentication",
        metrics: ["$50M processed", "Zero security incidents", "100K+ users"],
      },
    ],
  },
  {
    id: "tech-consultation",
    title: "Tech Consultation",
    subtitle:
      "We make technical decisions straightforward, ensuring your build is fast, practical, and future-proof.",
    description:
      "Navigate complex technical decisions with confidence. Our expert consultants help you choose the right technologies, architectures, and strategies to achieve your business goals efficiently.",
    icon: "Lightbulb",
    heroImage: "/src/assets/tech-consultation-hero.jpg",
    features: [
      "Technology stack selection and evaluation",
      "Architecture design and review",
      "Code audits and security assessments",
      "Performance optimization strategies",
      "Team training and knowledge transfer",
      "Roadmap planning and technical strategy",
    ],
    benefits: [
      "Avoid costly technical mistakes with expert guidance",
      "Accelerate development with proven best practices",
      "Reduce technical debt through proactive planning",
      "Scale your team with structured onboarding processes",
      "Stay current with emerging technologies and trends",
    ],
    technologies: [
      "System Design",
      "Cloud Architecture",
      "DevOps",
      "Security",
      "Performance Optimization",
    ],
    process: [
      {
        step: 1,
        title: "Technical Assessment",
        description: "Audit current systems and identify improvement areas",
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "Create actionable roadmap with priorities and timelines",
      },
      {
        step: 3,
        title: "Implementation Support",
        description: "Guide your team through execution of recommendations",
      },
      {
        step: 4,
        title: "Ongoing Advisory",
        description:
          "Continuous support as technical advisor or fractional CTO",
      },
    ],
    testimonials: [
      {
        name: "Thomas Anderson",
        role: "Founder",
        company: "StartupX",
        content:
          "Their consultation saved us 6 months of wrong decisions. Best ROI of any service we've used.",
        rating: 5,
      },
      {
        name: "Rachel Green",
        role: "VP Engineering",
        company: "ScaleUp Inc",
        content:
          "They helped us migrate to microservices smoothly. Zero downtime and our team learned so much.",
        rating: 5,
      },
      {
        name: "Mark Stevens",
        role: "CEO",
        company: "TechVentures",
        content:
          "Having them as our fractional CTO gave us the technical leadership we needed without the full-time cost.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "What's included in a tech consultation?",
        answer:
          "Comprehensive assessment, detailed recommendations document, architecture diagrams, technology evaluation, and implementation roadmap.",
      },
      {
        question: "How long does a typical consultation take?",
        answer:
          "Initial assessment takes 1-2 weeks. Ongoing advisory can be hourly, monthly retainer, or fractional CTO arrangement.",
      },
      {
        question: "Can you help with due diligence for investors?",
        answer:
          "Yes! We provide technical due diligence reports covering code quality, architecture, security, scalability, and team assessment.",
      },
      {
        question: "Do you provide hands-on implementation?",
        answer:
          "We can guide your team through implementation or provide hands-on development if needed. We're flexible to your needs.",
      },
      {
        question: "What if we need ongoing technical leadership?",
        answer:
          "We offer fractional CTO services where we act as your technical leader 1-3 days per week, much more cost-effective than hiring full-time.",
      },
    ],
    caseStudies: [
      {
        title: "Enterprise Migration",
        description:
          "Migrated monolith to microservices for Fortune 500 company",
        metrics: [
          "Zero downtime",
          "40% cost reduction",
          "3x faster deployments",
        ],
      },
      {
        title: "Startup Technical Due Diligence",
        description: "Pre-Series A technical assessment and optimization",
        metrics: ["Identified 15 issues", "Saved $500K", "Successful funding"],
      },
    ],
  },
];
