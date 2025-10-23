import { motion } from "framer-motion";
import {
    CheckCircle,
    Code,
    Palette,
    Rocket,
    Search,
    Settings,
    Shield,
    Target,
    Users,
    Zap,
} from "lucide-react";

const DevelopmentProcess = () => {
  const processSteps = [
    {
      phase: "01",
      title: "Discovery & Planning",
      duration: "1-2 weeks",
      description:
        "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
      activities: [
        "Requirements gathering",
        "Market research",
        "Technical feasibility",
        "Project timeline",
      ],
      icon: Search,
      color: "from-blue-500 to-blue-600",
    },
    {
      phase: "02",
      title: "UI/UX Design",
      duration: "2-3 weeks",
      description:
        "Our design team creates intuitive user interfaces and engaging user experiences optimized for mobile platforms.",
      activities: [
        "Wireframe creation",
        "Visual design",
        "Prototype development",
        "User testing",
      ],
      icon: Palette,
      color: "from-purple-500 to-purple-600",
    },
    {
      phase: "03",
      title: "Development",
      duration: "6-12 weeks",
      description:
        "Expert developers build your application using modern frameworks and best practices for optimal performance.",
      activities: [
        "Frontend development",
        "Backend integration",
        "API development",
        "Database design",
      ],
      icon: Code,
      color: "from-green-500 to-green-600",
    },
    {
      phase: "04",
      title: "Testing & QA",
      duration: "2-3 weeks",
      description:
        "Comprehensive testing ensures your app works flawlessly across different devices and operating systems.",
      activities: [
        "Functional testing",
        "Performance testing",
        "Security testing",
        "Device compatibility",
      ],
      icon: Shield,
      color: "from-orange-500 to-orange-600",
    },
    {
      phase: "05",
      title: "Deployment",
      duration: "1-2 weeks",
      description:
        "We handle the complete app store submission process and ensure successful launch on target platforms.",
      activities: [
        "App store submission",
        "Review process",
        "Launch preparation",
        "Marketing assets",
      ],
      icon: Rocket,
      color: "from-red-500 to-red-600",
    },
    {
      phase: "06",
      title: "Support & Maintenance",
      duration: "Ongoing",
      description:
        "Continuous support, updates, and maintenance to keep your app running smoothly and up-to-date.",
      activities: [
        "Bug fixes",
        "Feature updates",
        "Performance monitoring",
        "Technical support",
      ],
      icon: Settings,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to app store launch, we follow a proven methodology
              that ensures your mobile application is delivered on time, within
              budget, and exceeds expectations.
            </p>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary rounded-full"></div>

          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-16">
            {processSteps?.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className="morphic-card p-8 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${step?.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          {/* Use the icon component directly from the step object */}
                          <step.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground">
                            Phase {step?.phase}
                          </div>
                          <h3 className="text-xl font-bold text-text-primary">
                            {step?.title}
                          </h3>
                          <div className="text-sm text-primary font-medium">
                            {step?.duration}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {step?.description}
                      </p>

                      {/* Activities */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-text-primary">
                          Key Activities:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {step?.activities?.map((activity, actIndex) => (
                            <div
                              key={actIndex}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle
                                size={14}
                                className="text-success flex-shrink-0"
                              />
                              <span className="text-sm text-muted-foreground">
                                {activity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-20 h-20 bg-background border-4 border-primary rounded-full items-center justify-center shadow-lg z-10">
                  <span className="text-lg font-bold text-primary">
                    {step?.phase}
                  </span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 max-w-lg hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Why Our Process Works
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our structured approach ensures transparency, quality, and
              successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Goal-Oriented",
                description:
                  "Every phase is aligned with your business objectives",
              },
              {
                icon: Users,
                title: "Collaborative",
                description:
                  "Regular communication and feedback throughout development",
              },
              {
                icon: Zap,
                title: "Agile Methodology",
                description:
                  "Flexible approach that adapts to changing requirements",
              },
            ]?.map((benefit, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  {/* Use the icon component directly from the benefit object */}
                  <benefit.icon size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary">
                  {benefit?.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit?.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
