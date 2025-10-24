import { BrainCircuit, Code, ShieldCheck, Smartphone } from "lucide-react";

// header navigation items
export const headerNavItems = [
  {
    label: "Services",
    href: "/services",
    isDropdown: true,
    dropdownItems: [
      {
        href: "/services/web-app-development",
        icon: Code,
        label: "Web Development",
        description: "Custom web applications",
      },
      {
        href: "/services/ai-agents",
        icon: BrainCircuit,
        label: "AI Agents",
        description: "Intelligent automation",
      },
      {
        href: "/services/mobile-app-development",
        icon: Smartphone,
        label: "Mobile Apps",
        description: "iOS & Android solutions",
      },
      {
        href: "/services/tech-consultation",
        icon: ShieldCheck,
        label: "Tech Consultation",
        description: "Expert guidance",
      },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Tech Stacks",
    href: "/#tech-stacks",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "About Us",
    href: "/about",
  },
  // {
  //   label: "Contact",
  //   href: "#contact",
  // },
];
