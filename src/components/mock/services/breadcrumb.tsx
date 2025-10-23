import { ChevronRight, Home, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Type definitions
interface ServiceRoute {
  title: string;
  description: string;
}

interface ServiceRoutes {
  [key: string]: ServiceRoute;
}

interface BreadcrumbProps {
  className?: string;
}

// Icon component with proper typing
const Icon: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 16,
  className = "",
}) => {
  const iconMap: Record<string, LucideIcon> = {
    Home,
    ChevronRight,
  };

  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <div className={`w-${size} h-${size} ${className}`} />;
  }

  return <IconComponent size={size} className={className} />;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = "" }) => {
  const pathname = usePathname();

  const serviceRoutes: ServiceRoutes = {
    "/ai-agents-service-detail": {
      title: "AI Agents Service",
      description: "Advanced artificial intelligence integration solutions",
    },
    "/web-app-development-detail": {
      title: "Web Development Service",
      description: "Full-stack web application development",
    },
    "/mobile-app-development-detail": {
      title: "Mobile Development Service",
      description: "Native and cross-platform mobile solutions",
    },
    "/tech-consultation-detail": {
      title: "Tech Consultation Service",
      description: "Strategic technology advisory services",
    },
  };

  const currentService = serviceRoutes[pathname];

  if (!currentService) {
    return null;
  }

  return (
    <div className={`bg-surface/50 border-b border-border ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <nav
          className="flex items-center space-x-2 text-sm"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors duration-fast flex items-center space-x-1"
          >
            <Icon name="Home" size={16} />
            <span>Home</span>
          </Link>

          <Icon
            name="ChevronRight"
            size={16}
            className="text-muted-foreground"
          />

          <Link
            href="/services"
            className="text-muted-foreground hover:text-primary transition-colors duration-fast"
          >
            Services
          </Link>

          <Icon
            name="ChevronRight"
            size={16}
            className="text-muted-foreground"
          />

          <span className="text-foreground font-medium">
            {currentService.title}
          </span>
        </nav>

        <div className="mt-2">
          <h1 className="text-2xl font-semibold text-foreground mb-1">
            {currentService.title}
          </h1>
          <p className="text-muted-foreground">{currentService.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

// Export types for use in other components
export type { BreadcrumbProps, ServiceRoute, ServiceRoutes };
