import { icons, logos } from "../../utils/assets";

export const homeData = {
  founderIssues: [
    {
      icon: icons.alertIcon,
      description: `You’ve been mapping out features and
                                  strategies for months, but the product still
                                  isn’t moving forward. Without a build, it’s
                                  impossible to test or validate.`,
      title: "Endless Planning, No Progress",
    },
    {
      icon: icons.dollarIcon,
      description: ` The idea is clear, but turning it into a
                                  functional product feels stuck. You need
                                  momentum to show something real to users and
                                  investors.`,
      title: "Struggling to Launch an MVP",
    },
    {
      icon: icons.userIcon,
      description: `You’ve tried working with freelancers or
                                  agencies before, but delays, misalignment, and
                                  lack of startup experience slowed everything
                                  down.`,
      title: "Outsourcing That Misses the Mark",
    },
  ],
  helpYouWin: [
    {
      icon: icons.electricIcon,
      title: "Rapid MVP Development",
      description: `We focus on the essentials to get your product built
                            and launched quickly.`,
    },
    {
      icon: icons.dollarIcon,
      title: "Expert Engineering Team",
      description: ` Our experienced developers and designers handle the
                            build end-to-end.`,
    },
    {
      icon: icons.heartIcon,
      title: "Done-for-You Execution",
      description: `We own the build process so you can concentrate on
                            growth.`,
    },
    {
      icon: icons.compassIcon,
      title: "Clear Shipping Guidelines",
      description:
        "We offer ready-to-execute plans with deliverables, deadlines & cost estimates upfront.",
    },
  ],
  technologies: [
    {
      icon: icons.aiAgentMessageIcon,
      title: "AI Agents",
      description: ` We create AI agents that bring clarity,
                                  efficiency, and usefulness to SaaS products.`,
    },
    {
      icon: icons.nlpHandshakeIcon,
      title: "Web App Development",
      description: `We create SaaS-ready web platforms that
                                  balance speed, usability, and long-term
                                  growth.`,
    },
    {
      icon: icons.computerVisionMessageIcon,
      title: "Mobile App Development",
      description: `We create mobile apps that balance smooth UX,
                                  clean UI, and reliable performance.`,
    },
    {
      icon: icons.llmMessage,
      title: "Tech Consultation",
      description: ` We make technical decisions straightforward,
                                  ensuring your build is fast, practical, and
                                  future-proof.`,
    },
  ],
  developmentStack: [
    {
      name: "Langchain",
      logo: logos.langChainLogo,
    },
    {
      name: "LlamaIndex",
      logo: logos.llamaIndexLogo,
    },
    {
      name: "TensorFlow",
      logo: logos.tensorFlowLogo,
    },
    {
      name: "PyTorch",
      logo: logos.pyTorchLogo,
    },
    {
      name: "OpenCV",
      logo: logos.openCvLogo,
    },
    {
      name: "React",
      logo: logos.reactLogo,
    },
    {
      name: "Node.js",
      logo: logos.nodeJsLogo,
    },
    {
      name: "Django",
      logo: logos.djangoLogo,
    },
  ],
  projects: [
    {
      title: "CleverSEO",
      description:
        "AI-powered SEO Content Writer with n8n automation for producing articles aligned with Google's EEAT policy. Originally an internal tool, now preparing for public launch with advanced content optimization.",
      videoUrl:
        "https://www.loom.com/share/dc512d539a004f4e903ab92d56d2e043?sid=30df7db3-af8b-480a-8f00-5af873650bfd",
      projectLink: "https://cleverseo.vercel.app",
      tags: ["AI", "SEO", "n8n", "Automation", "Content"],
    },
    {
      title: "UGC Content Automation",
      description:
        "Proof of concept for automated UGC content generation, converting images into user-generated content. Partnered with a designer to bring the vision to life.",
      videoUrl:
        "https://www.loom.com/share/0002ebfe8d7b437a8d43e037ad3947f7?sid=7aee270d-ee43-46e8-b4a7-b7e883e78cfe",
      tags: ["AI", "Automation", "Content Generation", "POC"],
    },
    {
      title: "CPDC Project Management",
      description:
        "Transformed team operations from Excel to a comprehensive project management solution. Features include project creation, task management, categorization, comments, analytics, and team collaboration tools.",
      projectLink: "https://13.239.235.185/",
      tags: ["Project Management", "Full-stack", "Analytics", "Collaboration"],
    },
    {
      title: "LinkedIn Post Generation",
      description:
        "AI agent automation tool for LinkedIn content creation. Currently in beta, it automatically generates high-quality LinkedIn posts, saving 30 minutes of daily effort.",
      projectLink:
        "https://www.figma.com/design/SzWEGbKjU2nSqO8ZknOZ7E/Autolink?node-id=0-1&t=g7ucocoHpNzRpY3G-1",
      tags: ["AI", "Automation", "LinkedIn", "Content", "Beta"],
    },
    {
      title: "LatexToPython Code Demo",
      description:
        "Fine-tuned multiple models including Salesforce/CodeT5p-770 on 35k samples, achieving 74% accuracy and 6th place ranking. Applied LoRA and post-quantization for enhanced efficiency, with custom post-processing to fix Python indentation issues.",
      videoUrl:
        "https://www.loom.com/share/d79ce7167b664b999505762e07f174b5?sid=81cfe0d9-a706-4e36-9251-82227ccbf545",
      githubLink: "https://github.com/AbdulHadi806/LLM_fune_tuning_Hackathon",
      tags: ["ML", "Fine-tuning", "LoRA", "CodeT5p", "Python"],
    },
  ],
  testimonials: [
    {
      quote:
        "Webologists transformed our ambitious AI concept into a working MVP in just 3 weeks. Their deep expertise in LLMs and lightning-fast prototyping is absolutely game-changing. We went from idea to paying customers faster than we ever imagined possible.",
      stars: 5,
      clientName: "Founder & CEO",
      clientTitle: "TechFlow AI",
      clientAvatar: "https://placehold.co/80x80/64748B/FFFFFF?text=TA",
    },
    {
      quote:
        "The strategic guidance from Webologists helped us sidestep costly mistakes and build exactly what our market demanded. ROI was evident from day one—we’re already scaling to our second product. These guys don’t just code, they architect success.",
      stars: 5,
      clientName: "CTO",
      clientTitle: "DataVision Pro",
      clientAvatar: "https://placehold.co/80x80/64748B/FFFFFF?text=DP",
    },
    {
      quote:
        "Their cutting-edge UI designs and seamless AI integrations blew our expectations out of the water. The final product doesn't just work—it feels like magic. Our users are obsessed, and so are we.",
      stars: 5,
      clientName: "Product Manager",
      clientTitle: "InnovateHub",
      clientAvatar: "https://placehold.co/80x80/64748B/FFFFFF?text=IH",
    },
    {
      quote:
        "From concept validation to live deployment, Webologists was our north star. They made complex AI accessible for our non-technical team and delivered results that speak for themselves. Pure excellence.",
      stars: 5,
      clientName: "Startup Founder",
      clientTitle: "NextGen Solutions",
      clientAvatar: "https://placehold.co/80x80/64748B/FFFFFF?text=NGS",
    },
  ],
  footer: {
    description: `We help ambitious startups and forward-thinking enterprises build cutting-edge AI solutions. From concept to deployment, we're your trusted AI development partner.`,
    logo: "InventTomorrow",
    companyLinks: [
      { name: "About Us", url: "#" },
      { name: "Our Team", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Blog", url: "#" },
      { name: "Case Studies", url: "#" },
    ],
    servicesLinks: [
      { name: "AI Development", url: "#" },
      { name: "MVP Building", url: "#" },
      { name: "Terms of Service", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Contact", url: "#" },
    ],
    socials: [
      // {
      //   icon: icons.githubIcon,
      //   url: "#",
      // },
      // {
      //   icon: icons.twitterIcon,
      //   url: "#",
      // },
      {
        icon: icons.linkedinIcon,
        url: "https://www.linkedin.com/company/108786507/admin/?lipi=urn%3Ali%3Apage%3Aorganization_admin_admin_index%3B5d6475b0-7d15-4b09-b9bd-9d9d60d27f53",
      },
    ],
  },
};
