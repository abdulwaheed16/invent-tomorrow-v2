import { ServicesData } from "../../../../types/services";
import { images, logos } from "../../../utils/assets";

const {
  webDevHero1,
  webDevHero2,
  cloudHero,
  aiAgentHero1,
  aiAgentHero2,
  mobileHero1,
  mobileHero2,
  techConsultationHero,
} = images;

export const servicesData: ServicesData = {
  // ---------------------------------------------------------------------------//
  // WEB APP DEVELOPMENT SERVICE
  // ---------------------------------------------------------------------------//
  webAppDevelopment: {
    id: "web-app-development",
    title: "Professional Web Development Services",
    description:
      "Transform your digital presence with cutting-edge web solutions. We build scalable, performant, and beautiful web applications tailored to your business needs.",
    heroImage: webDevHero1.src,
    bgImages: [webDevHero1.src, cloudHero.src, webDevHero2.src],
    icon: "Code2",

    techStack: [
      {
        title: "ReactJs",
        logo: logos.reactLogo.src,
      },
      {
        title: "NextJs",
        logo: logos.reactLogo.src,
      },
      {
        title: "TypeScript",
        logo: logos.reactLogo.src,
      },
      {
        title: "NodeJs",
        logo: logos.reactLogo.src,
      },

      {
        title: "PostgreSQL",
        logo: logos.reactLogo.src,
      },

      {
        title: "AWS",
        logo: logos.reactLogo.src,
      },
      {
        title: "Tailwind CSS",
        logo: logos.reactLogo.src,
      },
      {
        title: "GraphQL",
        logo: logos.reactLogo.src,
      },
    ],

    benefits: [
      {
        title: "Responsive Design",
        description:
          "Beautiful interfaces that work flawlessly across all devices, from desktop to mobile, ensuring optimal user experience.",
      },
      {
        title: "Lightning Fast Performance",
        description:
          "Optimized code and modern frameworks deliver exceptional speed and smooth interactions that keep users engaged.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built to grow with your business, handling increasing traffic and complexity without compromising performance.",
      },
      {
        title: "SEO Optimized",
        description:
          "Search engine friendly structure and optimization strategies that improve your online visibility and reach.",
      },
      {
        title: "Security First",
        description:
          "Enterprise-grade security measures protect your data and users, with regular updates and vulnerability assessments.",
      },
      {
        title: "Easy Maintenance",
        description:
          "Clean, well-documented code that makes updates and feature additions straightforward and cost-effective.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Requirements Analysis",
        description:
          "Deep dive into your business needs, target audience, and goals to define the perfect solution architecture.",
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description:
          "Create stunning UI/UX designs and interactive prototypes that bring your vision to life before development.",
      },
      {
        step: "03",
        title: "Agile Development",
        description:
          "Iterative development with regular demos and feedback loops, ensuring the product evolves with your needs.",
      },
      {
        step: "04",
        title: "Quality Assurance",
        description:
          "Comprehensive testing including automated tests, performance testing, and security audits.",
      },
      {
        step: "05",
        title: "Launch & Growth",
        description:
          "Strategic deployment with monitoring, analytics, and continuous optimization for ongoing success.",
      },
    ],
    processDetailed: [
      {
        title: "Discovery & Planning",
        duration: "Week 1-2",
        icon: "Search",
        description:
          "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
        deliverables: [
          "Requirements Document",
          "Market Research Report",
          "Technical Feasibility Study",
          "Project Plan & Timeline",
        ],
        keyActivities: [
          "Requirements gathering",
          "Market research",
          "Technical feasibility analysis",
          "Project timeline definition",
        ],
      },
      {
        title: "UI/UX Design",
        duration: "Week 3-5",
        icon: "Palette",
        description:
          "Our design team creates intuitive user interfaces and engaging user experiences optimized for mobile platforms.",
        deliverables: [
          "Wireframes & Mockups",
          "Interactive Prototype",
          "Design Assets",
          "User Feedback Report",
        ],
        keyActivities: [
          "Wireframe creation",
          "Visual design",
          "Prototype development",
          "User testing and validation",
        ],
      },
      {
        title: "Development",
        duration: "Week 6-12",
        icon: "Code",
        description:
          "Expert developers build your application using modern frameworks and best practices for optimal performance.",
        deliverables: [
          "Frontend Codebase",
          "Backend Integration",
          "API Documentation",
          "Database Schema",
        ],
        keyActivities: [
          "Frontend development",
          "Backend integration",
          "API development",
          "Database design and setup",
        ],
      },
      {
        title: "Testing & QA",
        duration: "Week 13-15",
        icon: "Shield",
        description:
          "Comprehensive testing ensures your app works flawlessly across different devices and operating systems.",
        deliverables: [
          "Test Cases & Reports",
          "Bug Fix Reports",
          "Performance Metrics",
          "Device Compatibility Report",
        ],
        keyActivities: [
          "Functional testing",
          "Performance testing",
          "Security testing",
          "Device compatibility testing",
        ],
      },
      {
        title: "Deployment",
        duration: "Week 16-17",
        icon: "Rocket",
        description:
          "We handle the complete app store submission process and ensure successful launch on target platforms.",
        deliverables: [
          "App Store Submission Package",
          "Review Reports",
          "Launch Checklist",
          "Marketing Assets",
        ],
        keyActivities: [
          "App store submission",
          "Review process",
          "Launch preparation",
          "Marketing material setup",
        ],
      },
      {
        title: "Support & Maintenance",
        duration: "Ongoing",
        icon: "Settings",
        description:
          "Continuous support, updates, and maintenance to keep your app running smoothly and up-to-date.",
        deliverables: [
          "Bug Fix Logs",
          "Feature Update Reports",
          "Performance Monitoring Dashboard",
          "Support Documentation",
        ],
        keyActivities: [
          "Bug fixes and patches",
          "Feature updates",
          "Performance monitoring",
          "Technical support",
        ],
      },
    ],

    caseStudies: [
      {
        title: "SEO Optimized Content Writer ",
        description:
          "How a leading online retailer reduced customer service costs by 45% while improving response times.",
        result: "45% Cost Reduction",
        videoUrl:
          "https://www.loom.com/share/dc512d539a004f4e903ab92d56d2e043?sid=30df7db3-af8b-480a-8f00-5af873650bfd",
        externalLink: "https://cleverseo.vercel.app",
      },
      {
        title: "Healthcare AI Assistant",
        description:
          "Implementation of AI agents for patient scheduling and follow-up, reducing no-shows by 30%.",
        result: "30% Fewer No-Shows",
      },
    ],

    projects: [
      {
        id: 1,
        title: "ECommerce Platform",
        category: "ecommerce",
        description:
          "Modern e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.",
        image: "https://images.unsplash.com/photo-1649424221016-58857288854e",
        imageAlt:
          "Modern e-commerce website interface showing product catalog with shopping cart and payment features on desktop screen",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        features: [
          "Multi-vendor Support",
          "Real-time Analytics",
          "Mobile App",
          "Payment Gateway",
        ],
        metrics: {
          users: "50K+",
          performance: "98%",
          uptime: "99.9%",
        },
        liveUrl: "https://demo-ecommerce.com",
        caseStudyUrl: "/case-study/ecommerce-platform",
      },
      {
        id: 2,
        title: "Healthcare Management System",
        category: "healthcare",
        description:
          "Comprehensive healthcare platform for patient management, appointment scheduling, and telemedicine consultations.",
        image: "https://images.unsplash.com/photo-1687168644714-3343aa9b5af8",
        imageAlt:
          "Healthcare management dashboard displaying patient records, appointment calendar, and medical analytics on modern interface",
        technologies: ["Next.js", "Express", "MongoDB", "Socket.io", "Docker"],
        features: [
          "Patient Portal",
          "Video Consultations",
          "Electronic Records",
          "Appointment System",
        ],
        metrics: {
          users: "25K+",
          performance: "96%",
          uptime: "99.8%",
        },
        liveUrl: "https://demo-healthcare.com",
        caseStudyUrl: "/case-study/healthcare-system",
      },
      {
        id: 3,
        title: "Financial Dashboard",
        category: "fintech",
        description:
          "Real-time financial analytics platform with portfolio tracking, market data, and automated trading features.",
        image: "https://images.unsplash.com/photo-1651129525259-a283dc1a66a6",
        imageAlt:
          "Financial dashboard showing stock market charts, portfolio performance graphs, and trading interface with real-time data visualization",
        technologies: ["React", "Python", "Redis", "WebSocket", "Kubernetes"],
        features: [
          "Real-time Data",
          "Portfolio Analytics",
          "Risk Management",
          "API Integration",
        ],
        metrics: {
          users: "15K+",
          performance: "99%",
          uptime: "99.9%",
        },
        liveUrl: "https://demo-fintech.com",
        caseStudyUrl: "/case-study/financial-dashboard",
      },
      {
        id: 4,
        title: "Learning Management System",
        category: "education",
        description:
          "Interactive e-learning platform with course management, progress tracking, and collaborative learning tools.",
        image: "https://images.unsplash.com/photo-1600642413339-d64b35bd2ca2",
        imageAlt:
          "Online learning platform interface showing course catalog, video player, progress tracking, and student collaboration features",
        technologies: ["Next.js", "GraphQL", "PostgreSQL", "AWS S3", "Vercel"],
        features: [
          "Course Builder",
          "Progress Tracking",
          "Interactive Quizzes",
          "Certification",
        ],
        metrics: {
          users: "100K+",
          performance: "97%",
          uptime: "99.7%",
        },
        liveUrl: "https://demo-lms.com",
        caseStudyUrl: "/case-study/learning-management",
      },
      {
        id: 5,
        title: "Project Management Tool",
        category: "productivity",
        description:
          "Collaborative project management platform with task tracking, team communication, and resource planning.",
        image: "https://images.unsplash.com/photo-1588511986632-592db3d6c81f",
        imageAlt:
          "Project management dashboard displaying kanban boards, task assignments, team collaboration tools, and project timeline visualization",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Docker"],
        features: [
          "Kanban Boards",
          "Time Tracking",
          "Team Chat",
          "Resource Planning",
        ],
        metrics: {
          users: "30K+",
          performance: "95%",
          uptime: "99.6%",
        },
        liveUrl: "https://demo-pm.com",
        caseStudyUrl: "/case-study/project-management",
      },
      {
        id: 6,
        title: "Real Estate Platform",
        category: "realestate",
        description:
          "Comprehensive real estate marketplace with property listings, virtual tours, and mortgage calculators.",
        image: "https://images.unsplash.com/photo-1657696489779-e9acbc0419a4",
        imageAlt:
          "Real estate website showing property listings with high-quality photos, search filters, virtual tour options, and mortgage calculator tools",
        technologies: ["Next.js", "Express", "PostgreSQL", "Mapbox", "AWS"],
        features: [
          "Property Search",
          "Virtual Tours",
          "Mortgage Calculator",
          "Agent Portal",
        ],
        metrics: {
          users: "75K+",
          performance: "94%",
          uptime: "99.5%",
        },
        liveUrl: "https://demo-realestate.com",
        caseStudyUrl: "/case-study/real-estate-platform",
      },
    ],

    testimonials: [
      {
        quote:
          "They transformed our outdated website into a modern, high-performing platform that increased our conversion rate by 250%. The team's expertise in React and attention to detail was exceptional.",
        author: "Michael Chen",
        role: "CEO",
        company: "TechVentures Inc",
        avatar: images.userAvatar1.src,
      },
      {
        quote:
          "The web application they built handles millions of users effortlessly. Their scalable architecture and clean code made future enhancements incredibly easy. Best development partner we've worked with.",
        author: "Sarah Martinez",
        role: "Head of Product",
        company: "InnovateCo",
        avatar: images.userAvatar2.src,
      },
      {
        quote:
          "From design to deployment, every phase was handled professionally. The custom CMS they built allows our team to update content easily without technical knowledge. Highly recommended!",
        author: "David Thompson",
        role: "Marketing Director",
        company: "FutureScale",
        avatar: images.userAvatar3.src,
      },
    ],
  },

  // ---------------------------------------------------------------------------//
  // MOBILE APP DEVELOPMENT SERVICE
  // ---------------------------------------------------------------------------//
  mobileAppDevelopment: {
    id: "mobile-app-development",
    title: "Mobile App Development Services",
    description:
      "Create stunning iOS and Android apps that users love. We build native and cross-platform mobile applications with exceptional performance and user experience.",
    heroImage: mobileHero1.src,
    bgImages: [mobileHero1.src, cloudHero.src, mobileHero2.src],
    icon: "Smartphone",
    techStack: [
      {
        title: "React Native",
        logo: logos.reactLogo.src,
      },
      {
        title: "Swift",
        logo: logos.reactLogo.src,
      },
      {
        title: "Kotlin",
        logo: logos.reactLogo.src,
      },
      {
        title: "Flutter",
        logo: logos.reactLogo.src,
      },
      {
        title: "Firebase",
        logo: logos.reactLogo.src,
      },
      {
        title: "AWS Amplify",
        logo: logos.reactLogo.src,
      },
      {
        title: "Redux",
        logo: logos.reactLogo.src,
      },
      {
        title: "REST APIs",
        logo: logos.reactLogo.src,
      },
    ],
    benefits: [
      {
        title: "Cross-Platform Excellence",
        description:
          "Single codebase for both iOS and Android, reducing development time and costs while maintaining native performance.",
      },
      {
        title: "Native Performance",
        description:
          "Smooth, responsive apps that feel natural on each platform, delivering the performance users expect.",
      },
      {
        title: "Offline Functionality",
        description:
          "Apps that work seamlessly even without internet connection, syncing data when connectivity is restored.",
      },
      {
        title: "Push Notifications",
        description:
          "Keep users engaged with timely, personalized notifications that drive retention and conversion.",
      },
      {
        title: "App Store Optimization",
        description:
          "Strategic optimization for maximum visibility and downloads in both App Store and Google Play.",
      },
      {
        title: "Analytics Integration",
        description:
          "Comprehensive tracking and insights to understand user behavior and optimize your app continuously.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Concept Validation",
        description:
          "Validate your app idea with market research, competitive analysis, and user persona development.",
      },
      {
        step: "02",
        title: "UX/UI Design",
        description:
          "Create intuitive, beautiful interfaces following platform-specific guidelines for iOS and Android.",
      },
      {
        step: "03",
        title: "Native Development",
        description:
          "Build your app using cutting-edge frameworks ensuring optimal performance and user experience.",
      },
      {
        step: "04",
        title: "Testing & Refinement",
        description:
          "Extensive testing on real devices, covering functionality, performance, and user experience.",
      },
      {
        step: "05",
        title: "Store Submission & Launch",
        description:
          "Handle the entire submission process for App Store and Google Play, including marketing assets.",
      },
    ],

    processDetailed: [
      {
        title: "Discovery & Planning",
        duration: "Week 1-2",
        icon: "Search",
        description:
          "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
        deliverables: [
          "Requirements Document",
          "Market Research Report",
          "Technical Feasibility Study",
          "Project Plan & Timeline",
        ],
        keyActivities: [
          "Requirements gathering",
          "Market research",
          "Technical feasibility analysis",
          "Project timeline definition",
        ],
      },
      {
        title: "UI/UX Design",
        duration: "Week 3-5",
        icon: "Palette",
        description:
          "Our design team creates intuitive user interfaces and engaging user experiences optimized for mobile platforms.",
        deliverables: [
          "Wireframes & Mockups",
          "Interactive Prototype",
          "Design Assets",
          "User Feedback Report",
        ],
        keyActivities: [
          "Wireframe creation",
          "Visual design",
          "Prototype development",
          "User testing and validation",
        ],
      },
      {
        title: "Development",
        duration: "Week 6-12",
        icon: "Code",
        description:
          "Expert developers build your application using modern frameworks and best practices for optimal performance.",
        deliverables: [
          "Frontend Codebase",
          "Backend Integration",
          "API Documentation",
          "Database Schema",
        ],
        keyActivities: [
          "Frontend development",
          "Backend integration",
          "API development",
          "Database design and setup",
        ],
      },
      {
        title: "Testing & QA",
        duration: "Week 13-15",
        icon: "Shield",
        description:
          "Comprehensive testing ensures your app works flawlessly across different devices and operating systems.",
        deliverables: [
          "Test Cases & Reports",
          "Bug Fix Reports",
          "Performance Metrics",
          "Device Compatibility Report",
        ],
        keyActivities: [
          "Functional testing",
          "Performance testing",
          "Security testing",
          "Device compatibility testing",
        ],
      },
      {
        title: "Deployment",
        duration: "Week 16-17",
        icon: "Rocket",
        description:
          "We handle the complete app store submission process and ensure successful launch on target platforms.",
        deliverables: [
          "App Store Submission Package",
          "Review Reports",
          "Launch Checklist",
          "Marketing Assets",
        ],
        keyActivities: [
          "App store submission",
          "Review process",
          "Launch preparation",
          "Marketing material setup",
        ],
      },
      {
        title: "Support & Maintenance",
        duration: "Ongoing",
        icon: "Settings",
        description:
          "Continuous support, updates, and maintenance to keep your app running smoothly and up-to-date.",
        deliverables: [
          "Bug Fix Logs",
          "Feature Update Reports",
          "Performance Monitoring Dashboard",
          "Support Documentation",
        ],
        keyActivities: [
          "Bug fixes and patches",
          "Feature updates",
          "Performance monitoring",
          "Technical support",
        ],
      },
    ],

    caseStudies: [
      {
        title: "E-commerce Automation",
        description:
          "How a leading online retailer reduced customer service costs by 45% while improving response times.",
        result: "45% Cost Reduction",
      },
      {
        title: "Healthcare AI Assistant",
        description:
          "Implementation of AI agents for patient scheduling and follow-up, reducing no-shows by 30%.",
        result: "30% Fewer No-Shows",
      },
    ],

    projects: [
      {
        id: 1,
        title: "FitTracker Pro",
        category: "health",
        platform: "iOS & Android",
        description:
          "Comprehensive fitness tracking app with AI-powered workout recommendations and social features.",
        image: "https://images.unsplash.com/photo-1663236752016-07d0b8f11207",
        imageAlt:
          "Smartphone displaying colorful fitness tracking app interface with workout metrics and progress charts",
        downloads: "500K+",
        rating: 4.8,
        appStoreUrl: "#",
        playStoreUrl: "#",
        technologies: ["React Native", "Firebase", "AI/ML"],
        features: [
          "Real-time workout tracking",
          "AI workout recommendations",
          "Social fitness challenges",
          "Nutrition planning",
        ],
      },
      {
        id: 2,
        title: "ShopEasy",
        category: "ecommerce",
        platform: "iOS & Android",
        description:
          "Modern e-commerce platform with AR try-on features and seamless payment integration.",
        image: "https://images.unsplash.com/photo-1732258357096-457077a92429",
        imageAlt:
          "Mobile phone showing modern e-commerce app with product listings and shopping cart interface",
        downloads: "1M+",
        rating: 4.9,
        appStoreUrl: "#",
        playStoreUrl: "#",
        technologies: ["Flutter", "Stripe", "ARKit"],
        features: [
          "AR product visualization",
          "One-click checkout",
          "Inventory management",
          "Push notifications",
        ],
      },
      {
        id: 3,
        title: "EduLearn",
        category: "education",
        platform: "iOS & Android",
        description:
          "Interactive learning platform with gamification elements and progress tracking for students.",
        image: "https://images.unsplash.com/photo-1639506059943-7b96b14f1b3e",
        imageAlt:
          "Tablet displaying educational app with colorful learning modules and student progress dashboard",
        downloads: "750K+",
        rating: 4.7,
        appStoreUrl: "#",
        playStoreUrl: "#",
        technologies: ["React Native", "GraphQL", "AWS"],
        features: [
          "Interactive lessons",
          "Progress tracking",
          "Gamification system",
          "Offline content",
        ],
      },
      {
        id: 4,
        title: "TaskMaster",
        category: "productivity",
        platform: "iOS & Android",
        description:
          "Advanced project management and team collaboration tool with real-time synchronization.",
        image: "https://images.unsplash.com/photo-1670082365491-ca8a39ee4b61",
        imageAlt:
          "Smartphone showing productivity app with task lists, calendar view, and team collaboration features",
        downloads: "300K+",
        rating: 4.6,
        appStoreUrl: "#",
        playStoreUrl: "#",
        technologies: ["Native iOS", "Native Android", "WebSocket"],
        features: [
          "Real-time collaboration",
          "Task automation",
          "Time tracking",
          "Analytics dashboard",
        ],
      },
      {
        id: 5,
        title: "FoodieDelight",
        category: "food",
        platform: "iOS & Android",
        description:
          "Food delivery app with AI-powered recommendations and real-time order tracking.",
        image: "https://images.unsplash.com/photo-1540597526190-9a0701828762",
        imageAlt:
          "Mobile device displaying food delivery app with restaurant listings and meal photos",
        downloads: "2M+",
        rating: 4.8,
        appStoreUrl: "#",
        playStoreUrl: "#",
        technologies: ["React Native", "Node.js", "MongoDB"],
        features: [
          "AI recommendations",
          "Real-time tracking",
          "Multiple payment options",
          "Restaurant management",
        ],
      },
      {
        id: 6,
        title: "WealthBuilder",
        category: "finance",
        platform: "iOS & Android",
        description:
          "Personal finance management app with investment tracking and financial planning tools.",
        image: "https://images.unsplash.com/photo-1727641514660-da94e8cd379b",
        imageAlt:
          "Smartphone displaying financial app with investment charts, portfolio overview, and market data",
        downloads: "400K+",
        rating: 4.9,
        appStoreUrl: "#",
        playStoreUrl: "#",
        technologies: ["Flutter", "Plaid API", "Chart.js"],
        features: [
          "Investment tracking",
          "Budget planning",
          "Market analysis",
          "Security features",
        ],
      },
    ],

    testimonials: [
      {
        quote:
          "Our iOS and Android apps have been downloaded over 500K times with 4.8-star ratings. The user experience they designed keeps people engaged and coming back daily.",
        author: "Sarah Martinez",
        role: "CEO",
        company: "FitLife App",
        avatar: images.userAvatar1.src,
      },
      {
        quote:
          "They built our React Native app in half the time it would have taken to build separate native apps. The performance is excellent and we're saving significantly on maintenance costs.",
        author: "Michael Chen",
        role: "CTO",
        company: "DeliverNow",
        avatar: images.userAvatar2.src,
      },
      {
        quote:
          "The enterprise mobile app they developed transformed our field operations. Technicians can now complete jobs 40% faster with offline-capable mobile tools.",
        author: "David Thompson",
        role: "VP of Operations",
        company: "FieldService Pro",
        avatar: images.userAvatar3.src,
      },
    ],
  },

  // ---------------------------------------------------------------------------//
  // TECH CONSULTATION SERVICE
  // ---------------------------------------------------------------------------//
  techConsultation: {
    id: "tech-consultation",
    title: "Technology Consultation Services",
    description:
      "Leverage our expertise to navigate the complex tech landscape. We provide strategic guidance to help you choose the right technologies and optimize your IT infrastructure.",
    heroImage: techConsultationHero.src,
    bgImages: [
      techConsultationHero.src,
      webDevHero1.src,
      mobileHero1.src,
      cloudHero.src,
      webDevHero2.src,
      mobileHero2.src,
    ],
    icon: "Lightbulb",
    techStack: [
      {
        title: "Cloud Architecture",
        logo: logos.reactLogo.src,
      },
      {
        title: "DevOps",
        logo: logos.reactLogo.src,
      },

      {
        title: "Security Audits",
        logo: logos.reactLogo.src,
      },
      {
        title: "Tech Stack Selection",
        logo: logos.reactLogo.src,
      },
      {
        title: "Digital Transformation",
        logo: logos.reactLogo.src,
      },
      {
        title: "AI Integration",
        logo: logos.reactLogo.src,
      },
      {
        title: "Scalability Planning",
        logo: logos.reactLogo.src,
      },
      {
        title: "Cost Optimization",
        logo: logos.reactLogo.src,
      },
    ],
    benefits: [
      {
        title: "Expert Guidance",
        description:
          "Access to experienced technology leaders who understand both technical and business perspectives.",
      },
      {
        title: "Cost Optimization",
        description:
          "Identify inefficiencies and opportunities to reduce technology costs while improving performance.",
      },
      {
        title: "Risk Mitigation",
        description:
          "Proactive identification of technical risks and vulnerabilities before they become critical issues.",
      },
      {
        title: "Strategic Roadmap",
        description:
          "Clear, actionable technology roadmap aligned with your business objectives and growth plans.",
      },
      {
        title: "Vendor Selection",
        description:
          "Unbiased recommendations for tools, platforms, and partners that best fit your needs.",
      },
      {
        title: "Knowledge Transfer",
        description:
          "Empower your team with the knowledge and skills needed to make informed technology decisions.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Current State Assessment",
        description:
          "Comprehensive audit of your existing technology infrastructure, processes, and challenges.",
      },
      {
        step: "02",
        title: "Gap Analysis",
        description:
          "Identify gaps between current capabilities and business objectives, prioritized by impact.",
      },
      {
        step: "03",
        title: "Strategy Development",
        description:
          "Create a detailed technology strategy with clear milestones, timelines, and success metrics.",
      },
      {
        step: "04",
        title: "Implementation Planning",
        description:
          "Develop actionable implementation plans with resource allocation and risk management.",
      },
      {
        step: "05",
        title: "Ongoing Advisory",
        description:
          "Continuous support and guidance as you execute your technology strategy and adapt to changes.",
      },
    ],

    processDetailed: [
      {
        title: "Discovery & Assessment",
        duration: "Week 1-2",
        icon: "Search",
        description:
          "Comprehensive assessment of your current technology landscape, business processes, and improvement opportunities.",
        deliverables: [
          "Current State Assessment Report",
          "Requirements Matrix",
          "Technology Inventory",
          "Gap Analysis Summary",
        ],
        keyActivities: [
          "Stakeholder interviews and requirement gathering",
          "Technology assessment",
          "Business process documentation",
          "Pain point identification",
        ],
      },
      {
        title: "Analysis & Strategy Development",
        duration: "Week 3-5",
        icon: "Target",
        description:
          "Strategic planning and roadmap creation for technology transformation and process optimization.",
        deliverables: [
          "Strategic Technology Roadmap",
          "Architecture Optimization Plan",
          "Risk Mitigation Framework",
          "Investment Priority Matrix",
        ],
        keyActivities: [
          "Architecture review and optimization",
          "Roadmap and priority planning",
          "Risk assessment and mitigation",
          "Cost-benefit analysis",
        ],
      },
      {
        title: "Solution Design & Planning",
        duration: "Week 6-7",
        icon: "PenTool",
        description:
          "Designing detailed technology solutions, selecting vendors, and defining success metrics for implementation.",
        deliverables: [
          "Solution Architecture Blueprint",
          "Implementation Guide",
          "Vendor Recommendation Report",
          "Change Management Plan",
        ],
        keyActivities: [
          "Solution architecture design",
          "Implementation methodology selection",
          "Vendor evaluation",
          "Success metrics definition",
        ],
      },
      {
        title: "Implementation Guidance",
        duration: "Week 8-20",
        icon: "Settings",
        description:
          "Providing technical oversight, progress monitoring, and quality assurance throughout the implementation phase.",
        deliverables: [
          "Progress Reports",
          "Technical Guidance Documentation",
          "Quality Checklists",
          "Training Materials",
        ],
        keyActivities: [
          "Project kickoff and alignment",
          "Technical guidance and QA",
          "Progress tracking",
          "Knowledge transfer and training",
        ],
      },
      {
        title: "Optimization & Support",
        duration: "Ongoing",
        icon: "TrendingUp",
        description:
          "Continuous optimization, monitoring, and strategic support to maximize ROI and system efficiency.",
        deliverables: [
          "Performance Reports",
          "Optimization Recommendations",
          "Update Guidelines",
          "Success Metrics Dashboard",
        ],
        keyActivities: [
          "Performance monitoring",
          "Continuous improvement recommendations",
          "Technology updates",
          "Strategic advisory support",
        ],
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Automation",
        description:
          "How a leading online retailer reduced customer service costs by 45% while improving response times.",
        result: "45% Cost Reduction",
        externalLink: "https://example.com/case-study/ecommerce-automation",
      },
      {
        title: "Healthcare AI Assistant",
        description:
          "Implementation of AI agents for patient scheduling and follow-up, reducing no-shows by 30%.",
        result: "30% Fewer No-Shows",
      },
    ],
    caseStudiesDetailed: [
      {
        id: "fintech-transformation",
        title: "FinTech Digital Transformation",
        client: "Regional Banking Institution",
        industry: "Financial Services",
        challenge:
          "Legacy system modernization and regulatory compliance for a regional bank with 2M+ customers",
        solution:
          "Comprehensive digital transformation strategy including cloud migration, API-first architecture, and compliance framework implementation",
        image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
        imageAlt:
          "Modern banking office with digital screens showing financial data and analytics dashboards",
        results: [
          { metric: "75%", description: "Reduction in processing time" },
          { metric: "$2.5M", description: "Annual cost savings" },
          { metric: "99.9%", description: "System uptime achieved" },
          { metric: "6 months", description: "Faster compliance reporting" },
        ],
        technologies: [
          "AWS",
          "Kubernetes",
          "API Gateway",
          "Microservices",
          "React",
        ],
        timeline: "8 months",
        teamSize: "12 consultants",
        keyOutcomes: [
          "Successfully migrated 15 legacy systems to cloud infrastructure",
          "Implemented real-time fraud detection reducing false positives by 60%",
          "Achieved SOC2 Type II and PCI DSS compliance",
          "Reduced customer onboarding time from 5 days to 2 hours",
        ],
      },
      {
        id: "healthcare-platform",
        title: "Healthcare Platform Modernization",
        client: "Multi-Hospital Healthcare Network",
        industry: "Healthcare",
        challenge:
          "Fragmented patient data systems and inefficient care coordination across 15 hospital locations",
        solution:
          "Unified patient data platform with AI-powered analytics and HIPAA-compliant architecture",
        image: "https://images.unsplash.com/photo-1713600025722-f17601622fb4",
        imageAlt:
          "Modern hospital corridor with digital patient monitoring systems and healthcare technology displays",
        results: [
          { metric: "40%", description: "Improvement in care coordination" },
          { metric: "60%", description: "Reduction in duplicate tests" },
          { metric: "25%", description: "Decrease in readmission rates" },
          { metric: "$5M", description: "Annual operational savings" },
        ],
        technologies: [
          "Azure",
          "FHIR",
          "Machine Learning",
          "Power BI",
          "Node.js",
        ],
        timeline: "12 months",
        teamSize: "18 consultants",
        keyOutcomes: [
          "Integrated patient records from 15 disparate systems",
          "Implemented predictive analytics for early intervention",
          "Achieved 100% HIPAA compliance across all touchpoints",
          "Reduced average patient wait times by 35%",
        ],
      },
      {
        id: "ecommerce-scale",
        title: "E-commerce Platform Scaling",
        client: "Global Retail Corporation",
        industry: "E-commerce & Retail",
        challenge:
          "Platform performance issues during peak traffic and inefficient inventory management across 50+ warehouses",
        solution:
          "Microservices architecture with auto-scaling capabilities and real-time inventory optimization system",
        image: "https://images.unsplash.com/photo-1684695747561-9372850cf165",
        imageAlt:
          "Modern e-commerce warehouse with automated sorting systems and digital inventory management displays",
        results: [
          { metric: "300%", description: "Increase in concurrent users" },
          { metric: "50%", description: "Reduction in page load times" },
          { metric: "85%", description: "Improvement in inventory accuracy" },
          { metric: "$12M", description: "Additional annual revenue" },
        ],
        technologies: [
          "Google Cloud",
          "Kubernetes",
          "Redis",
          "Elasticsearch",
          "React Native",
        ],
        timeline: "10 months",
        teamSize: "15 consultants",
        keyOutcomes: [
          "Successfully handled Black Friday traffic spike of 10x normal load",
          "Implemented real-time inventory synchronization across all channels",
          "Reduced cart abandonment rate by 25% through performance optimization",
          "Achieved 99.99% uptime during peak shopping seasons",
        ],
      },
    ],
    testimonials: null,
  },

  // ---------------------------------------------------------------------------//
  // AI AGENTS SERVICE
  // ---------------------------------------------------------------------------//
  aiAgents: {
    id: "ai-agents",
    title: "AI & Machine Learning Solutions",
    description:
      "Unlock the power of artificial intelligence to automate processes, gain insights, and make smarter decisions. We build custom ML models that drive real business value.",
    heroImage: aiAgentHero1.src,
    bgImages: [aiAgentHero1.src, cloudHero.src, aiAgentHero2.src],
    icon: "Sparkles",
    techStack: [
      {
        title: "OpenAI GPT-4",
        logo: logos.reactLogo.src,
      },
      {
        title: "LangChain",
        logo: logos.reactLogo.src,
      },
      {
        title: "Python",
        logo: logos.reactLogo.src,
      },
      {
        title: "TensorFlow",
        logo: logos.reactLogo.src,
      },
      {
        title: "RAG Systems",
        logo: logos.reactLogo.src,
      },
      {
        title: "Vector Databases",
        logo: logos.reactLogo.src,
      },
      {
        title: "Pinecone",
        logo: logos.reactLogo.src,
      },
      {
        title: "FastAPI",
        logo: logos.reactLogo.src,
      },
    ],
    benefits: [
      {
        title: "24/7 Automation",
        description:
          "AI agents that work around the clock, handling tasks without human intervention while maintaining consistency and accuracy.",
      },
      {
        title: "Intelligent Decision Making",
        description:
          "Advanced reasoning capabilities that analyze data, understand context, and make optimal decisions based on your business rules.",
      },
      {
        title: "Natural Language Interface",
        description:
          "Interact with your systems using plain language, making technology accessible to everyone in your organization.",
      },
      {
        title: "Seamless Integration",
        description:
          "Connect with your existing tools, databases, and APIs to create a unified intelligent ecosystem.",
      },
      {
        title: "Continuous Learning",
        description:
          "AI that improves over time, learning from interactions and adapting to your evolving business needs.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Solutions that grow with your business, handling increasing complexity without performance degradation.",
      },
    ],

    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description:
          "We analyze your workflows, identify automation opportunities, and design an AI strategy aligned with your business objectives.",
      },
      {
        step: "02",
        title: "Architecture Design",
        description:
          "Create a robust technical architecture that integrates with your existing systems while ensuring security and scalability.",
      },
      {
        step: "03",
        title: "Development & Training",
        description:
          "Build and train AI agents using advanced machine learning models, fine-tuned for your specific use cases.",
      },
      {
        step: "04",
        title: "Testing & Optimization",
        description:
          "Rigorous testing to ensure accuracy, reliability, and performance optimization before deployment.",
      },
      {
        step: "05",
        title: "Deployment & Monitoring",
        description:
          "Launch your AI agents with comprehensive monitoring, continuous optimization, and ongoing support.",
      },
    ],

    processDetailed: [
      {
        title: "Discovery & Analysis",
        duration: "Week 1-2",
        icon: "Search",
        description:
          "Comprehensive assessment of your business processes, data infrastructure, and automation opportunities.",
        deliverables: [
          "Business Process Audit",
          "Technical Requirements Analysis",
          "ROI Projections",
          "Implementation Roadmap",
        ],
        keyActivities: [
          "Stakeholder interviews and workshops",
          "Current system analysis and documentation",
          "Data quality assessment and mapping",
          "Use case prioritization and feasibility study",
        ],
      },
      {
        title: "Design & Architecture",
        duration: "Week 3-4",
        icon: "Layers",
        description:
          "Detailed system design and AI agent architecture planning with integration specifications and security protocols.",
        deliverables: [
          "System Architecture Design",
          "AI Agent Specifications",
          "Integration Blueprint",
          "Security Framework",
        ],
        keyActivities: [
          "AI model selection and customization planning",
          "API design and integration architecture",
          "User experience and interface design",
          "Security and compliance framework setup",
        ],
      },
      {
        title: "Development & Training",
        duration: "Week 5-8",
        icon: "Code",
        description:
          "AI agent development, model training, and system integration with rigorous testing and optimization.",
        deliverables: [
          "Trained AI Models",
          "Integrated Agent System",
          "Testing Documentation",
          "Performance Metrics",
        ],
        keyActivities: [
          "AI model development and training",
          "System integration and API development",
          "Comprehensive testing and quality assurance",
          "Performance optimization and fine-tuning",
        ],
      },
      {
        title: "Deployment & Launch",
        duration: "Week 9-10",
        icon: "Rocket",
        description:
          "Production deployment with monitoring setup, user training, and go-live support for seamless transition.",
        deliverables: [
          "Production Deployment",
          "Monitoring Dashboard",
          "User Training Materials",
          "Support Documentation",
        ],
        keyActivities: [
          "Production environment setup and deployment",
          "User training and change management",
          "Monitoring and alerting configuration",
          "Go-live support and issue resolution",
        ],
      },
      {
        title: "Optimization & Support",
        duration: "Ongoing",
        icon: "TrendingUp",
        description:
          "Continuous monitoring, performance optimization, and ongoing support to ensure maximum ROI and system evolution.",
        deliverables: [
          "Performance Reports",
          "Optimization Recommendations",
          "System Updates",
          "24/7 Support",
        ],
        keyActivities: [
          "Continuous performance monitoring and analysis",
          "Regular model retraining and optimization",
          "Feature enhancements and system updates",
          "Proactive support and maintenance",
        ],
      },
    ],

    caseStudies: [
      {
        title: "E-commerce Automation",
        description:
          "How a leading online retailer reduced customer service costs by 45% while improving response times.",
        result: "45% Cost Reduction",
      },
      {
        title: "Healthcare AI Assistant",
        description:
          "Implementation of AI agents for patient scheduling and follow-up, reducing no-shows by 30%.",
        result: "30% Fewer No-Shows",
      },
    ],

    caseStudiesDetailed: [
      {
        id: "ecommerce-customer-service",
        title: "E-commerce Customer Service Automation",
        client: "RetailMax Corporation",
        industry: "E-commerce",
        image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
        imageAlt:
          "Modern e-commerce office with multiple computer screens showing customer service dashboards and analytics",
        challenge:
          "RetailMax was struggling with high customer service costs and long response times, handling over 10,000 daily inquiries across multiple channels.",
        solution:
          "Implemented intelligent conversational AI agents with natural language processing, integrated with their existing CRM and order management systems.",
        results: [
          "85% reduction in response time",
          "60% decrease in support costs",
          "95% customer satisfaction rate",
          "24/7 multilingual support coverage",
        ],
        technologies: ["OpenAI GPT-4", "Python", "AWS Lambda", "Dialogflow"],
        metrics: {
          "Response Time": "< 30 seconds",
          "Resolution Rate": "78% first contact",
          "Cost Savings": "$2.4M annually",
          Languages: "12 supported",
        },
      },
      {
        id: "financial-document-automation",
        title: "Financial Document Processing Automation",
        client: "SecureBank Financial",
        industry: "Banking & Finance",
        image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
        imageAlt:
          "Professional banking office with financial analysts working on document processing systems and data analysis screens",
        challenge:
          "Manual processing of loan applications and financial documents was creating bottlenecks, taking 5-7 days per application with high error rates.",
        solution:
          "Deployed AI agents for document intelligence, automated data extraction, risk assessment, and compliance checking with human oversight for complex cases.",
        results: [
          "90% faster document processing",
          "95% reduction in manual errors",
          "70% improvement in approval times",
          "Enhanced regulatory compliance",
        ],
        technologies: [
          "Azure Cognitive Services",
          "TensorFlow",
          "Docker",
          "MongoDB",
        ],
        metrics: {
          "Processing Time": "2-4 hours",
          "Accuracy Rate": "99.2%",
          "Applications/Day": "500+",
          "Compliance Score": "100%",
        },
      },
      {
        id: "healthcare-triage",
        title: "Healthcare Patient Triage System",
        client: "MediCare Health Network",
        industry: "Healthcare",
        image: "https://images.unsplash.com/photo-1710562750592-3be59a9fde45",
        imageAlt:
          "Modern hospital reception area with digital triage kiosks and healthcare professionals using tablet devices",
        challenge:
          "Emergency department overcrowding and inefficient patient triage leading to longer wait times and suboptimal resource allocation.",
        solution:
          "Created AI-powered triage agents that assess patient symptoms, prioritize cases, and optimize resource allocation while maintaining HIPAA compliance.",
        results: [
          "40% reduction in wait times",
          "25% improvement in resource utilization",
          "Enhanced patient satisfaction",
          "Better clinical outcomes",
        ],
        technologies: [
          "IBM Watson Health",
          "FHIR APIs",
          "Kubernetes",
          "PostgreSQL",
        ],
        metrics: {
          "Triage Accuracy": "94%",
          "Wait Time": "15 min avg",
          "Patient Throughput": "+35%",
          Satisfaction: "4.8/5",
        },
      },
    ],

    pricingTiers: [
      {
        name: "Starter",
        description: "Perfect for small businesses starting their AI journey",
        monthlyPrice: 2499,
        annualPrice: 24990,
        setup: 5000,
        popular: false,
        features: [
          "Single AI agent deployment",
          "Basic natural language processing",
          "Standard integrations (5 systems)",
          "Email support",
          "Monthly performance reports",
          "Basic analytics dashboard",
          "Up to 1,000 interactions/month",
          "Standard security protocols",
        ],
        limitations: [
          "Limited customization options",
          "Basic training data included",
          "Standard response times",
        ],
        idealFor: "Small businesses, startups, proof of concept projects",
      },
      {
        name: "Professional",
        description: "Comprehensive AI solutions for growing enterprises",
        monthlyPrice: 7499,
        annualPrice: 74990,
        setup: 15000,
        popular: true,
        features: [
          "Multiple AI agents (up to 5)",
          "Advanced NLP and machine learning",
          "Custom integrations (15 systems)",
          "Priority phone & email support",
          "Weekly performance reports",
          "Advanced analytics & insights",
          "Up to 10,000 interactions/month",
          "Enhanced security & compliance",
          "Custom training & fine-tuning",
          "A/B testing capabilities",
          "Multi-language support",
          "API access for developers",
        ],
        limitations: ["Setup time: 6-8 weeks", "Requires technical liaison"],
        idealFor:
          "Mid-size companies, established businesses, multi-department use",
      },
      {
        name: "Enterprise",
        description: "Fully customized AI ecosystem for large organizations",
        monthlyPrice: "Custom",
        annualPrice: "Custom",
        setup: "Custom",
        popular: false,
        features: [
          "Unlimited AI agents",
          "Fully custom AI models",
          "Unlimited system integrations",
          "Dedicated account manager",
          "Real-time monitoring & alerts",
          "Custom analytics & reporting",
          "Unlimited interactions",
          "Enterprise-grade security",
          "White-label solutions",
          "On-premise deployment options",
          "24/7 technical support",
          "Custom SLA agreements",
          "Advanced compliance features",
          "Dedicated infrastructure",
          "Custom training programs",
        ],
        limitations: [],
        idealFor:
          "Large enterprises, complex requirements, mission-critical applications",
      },
    ],

    addOns: [
      {
        name: "Advanced Analytics Suite",
        description: "Deep insights and predictive analytics",
        price: 999,
        icon: "BarChart3",
      },
      {
        name: "Multi-language Pack",
        description: "Support for 25+ languages",
        price: 1499,
        icon: "Globe",
      },
      {
        name: "Priority Support",
        description: "24/7 dedicated support team",
        price: 2499,
        icon: "Headphones",
      },
      {
        name: "Custom Model Training",
        description: "Industry-specific AI model development",
        price: 4999,
        icon: "Brain",
      },
    ],

    testimonials: [
      {
        quote:
          "Their predictive analytics model improved our demand forecasting accuracy by 40%, reducing inventory costs significantly. The team's expertise in machine learning is world-class.",
        author: "Sarah Martinez",
        role: "VP of Operations",
        company: "RetailTech Corp",
        avatar: images.userAvatar1.src,
      },
      {
        quote:
          "The computer vision system they built automated our quality inspection process with 98% accuracy. What used to take hours now happens in seconds. Incredible ROI.",
        author: "Michael Chen",
        role: "Director of Manufacturing",
        company: "AutoParts Inc",
        avatar: images.userAvatar2.src,
      },
      {
        quote:
          "Their NLP chatbot handles 70% of our customer inquiries automatically, freeing our team to focus on complex issues. Customer satisfaction scores went up by 25%.",
        author: "David Thompson",
        role: "Head of Customer Service",
        company: "ServicePro",
        avatar: images.userAvatar3.src,
      },
    ],
  },
};
