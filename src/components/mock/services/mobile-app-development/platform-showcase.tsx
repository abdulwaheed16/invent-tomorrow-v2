import { motion } from "framer-motion";
import {
  Apple,
  CheckCircle,
  Layers,
  LucideIcon,
  Smartphone,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

// Type definitions
interface Platform {
  title: string;
  features: string[];
  description: string;

  technologies: string[];
  benefits: string[];
  icon: string;
  color: string;
}

interface TabButton {
  key: string;
  label: string;
  icon: string;
}

interface PlatformShowcaseProps {
  className?: string;
}

// Icon mapping for platforms
const iconMap: Record<string, LucideIcon> = {
  Apple,
  Smartphone,
  Layers,
  Zap,
  CheckCircle,
};

// Icon component with proper typing
const Icon: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 20,
  className = "",
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <div className={`w-${size} h-${size} ${className}`} />;
  }

  return <IconComponent size={size} className={className} />;
};

const PlatformShowcase: React.FC<PlatformShowcaseProps> = ({
  className = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>("ios");

  const platforms: Record<string, Platform> = {
    ios: {
      title: "iOS Development",
      description:
        "Native iOS applications built with Swift and SwiftUI for optimal performance and seamless integration with Apple ecosystem.",
      features: [
        "Native Swift Development",
        "SwiftUI Modern Interface",
        "Core Data Integration",
        "Apple Pay Integration",
        "Push Notifications",
        "App Store Optimization",
        "TestFlight Beta Testing",
        "Apple Watch Compatibility",
      ],
      technologies: [
        "Swift",
        "SwiftUI",
        "Xcode",
        "Core Data",
        "CloudKit",
        "ARKit",
      ],
      benefits: [
        "Superior Performance",
        "Native User Experience",
        "Apple Ecosystem Integration",
        "Enhanced Security",
      ],
      icon: "Apple",
      color: "from-gray-600 to-gray-800",
    },
    android: {
      title: "Android Development",
      description:
        "Robust Android applications using Kotlin and modern Android architecture components for scalable and maintainable solutions.",
      features: [
        "Kotlin Development",
        "Jetpack Compose UI",
        "Room Database",
        "Google Pay Integration",
        "Firebase Services",
        "Play Store Publishing",
        "Material Design 3",
        "Wear OS Support",
      ],
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Android Studio",
        "Room",
        "Firebase",
        "Retrofit",
      ],
      benefits: [
        "Wide Market Reach",
        "Flexible Customization",
        "Google Services Integration",
        "Cost-Effective Development",
      ],
      icon: "Smartphone",
      color: "from-green-500 to-green-700",
    },
    crossPlatform: {
      title: "Cross-Platform Development",
      description:
        "Efficient React Native and Flutter solutions that deliver native performance across both iOS and Android platforms.",
      features: [
        "React Native Framework",
        "Flutter Development",
        "Shared Codebase",
        "Native Module Integration",
        "Hot Reload Development",
        "Platform-Specific UI",
        "Third-Party Integrations",
        "Continuous Deployment",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Expo",
        "TypeScript",
        "Redux",
        "GraphQL",
      ],
      benefits: [
        "Faster Development",
        "Cost Efficiency",
        "Consistent User Experience",
        "Easier Maintenance",
      ],
      icon: "Layers",
      color: "from-blue-500 to-purple-600",
    },
  };

  const tabButtons: TabButton[] = [
    { key: "ios", label: "iOS Native", icon: "Apple" },
    { key: "android", label: "Android Native", icon: "Smartphone" },
    { key: "crossPlatform", label: "Cross-Platform", icon: "Layers" },
  ];

  const currentPlatform = platforms[activeTab];

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Platform Expertise & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect development approach for your mobile
              application. We specialize in native iOS, Android, and
              cross-platform solutions.
            </p>
          </motion.div>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-col lg:flex-row justify-center mb-12">
          <div className="flex flex-col sm:flex-row bg-muted rounded-lg p-2 max-w-2xl mx-auto">
            {tabButtons.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                <Icon name={tab.icon} size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Platform Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div
                className={`inline-flex items-center space-x-2 bg-gradient-to-r ${currentPlatform.color} text-white px-4 py-2 rounded-full text-sm font-medium`}
              >
                <Icon name={currentPlatform.icon} size={16} />
                <span>{currentPlatform.title}</span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                {currentPlatform.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {currentPlatform.description}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Key Benefits
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {currentPlatform.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-600 flex-shrink-0"
                    />
                    <span className="text-sm text-muted-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentPlatform.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary/30 text-secondary-foreground text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features Side */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">
              Platform Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentPlatform.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="morphic-card p-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {feature}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformShowcase;

// Export types for use in other components
export type { Platform, PlatformShowcaseProps, TabButton };
