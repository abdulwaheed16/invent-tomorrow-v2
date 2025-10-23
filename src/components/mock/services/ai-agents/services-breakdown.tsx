import { motion } from "framer-motion";
import {
  Brain,
  Check,
  GitBranch,
  MessageSquare,
  Settings,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const ServiceBreakdown = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Conversational AI Agents",
      description:
        "Intelligent chatbots and virtual assistants that handle customer inquiries, support tickets, and lead qualification with natural language processing.",
      features: [
        "Natural Language Understanding",
        "Multi-language Support",
        "Context-aware Responses",
        "Integration with CRM Systems",
      ],
      benefits: [
        "24/7 Customer Support",
        "Reduced Response Time",
        "Improved Customer Satisfaction",
        "Cost Reduction up to 60%",
      ],
    },
    {
      icon: GitBranch,
      title: "Process Automation Agents",
      description:
        "Smart agents that automate repetitive business processes, data entry, document processing, and workflow management across departments.",
      features: [
        "Robotic Process Automation",
        "Document Intelligence",
        "Workflow Orchestration",
        "Exception Handling",
      ],
      benefits: [
        "Increased Productivity",
        "Error Reduction by 95%",
        "Faster Processing Times",
        "Employee Focus on Strategic Tasks",
      ],
    },
    {
      icon: Brain,
      title: "Predictive Analytics Agents",
      description:
        "AI-powered agents that analyze data patterns, predict trends, and provide actionable insights for strategic business decisions.",
      features: [
        "Machine Learning Models",
        "Real-time Data Analysis",
        "Predictive Modeling",
        "Custom Dashboards",
      ],
      benefits: [
        "Data-driven Decisions",
        "Risk Mitigation",
        "Revenue Optimization",
        "Competitive Advantage",
      ],
    },
    {
      icon: Users,
      title: "Sales & Marketing Agents",
      description:
        "Intelligent agents that qualify leads, personalize marketing campaigns, and optimize sales processes for maximum conversion rates.",
      features: [
        "Lead Scoring & Qualification",
        "Personalized Recommendations",
        "Campaign Optimization",
        "Sales Pipeline Management",
      ],
      benefits: [
        "Higher Conversion Rates",
        "Improved Lead Quality",
        "Personalized Customer Experience",
        "Increased Sales Revenue",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Comprehensive AI Agent Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI agents are designed to integrate seamlessly with your
              existing systems and deliver measurable business outcomes across
              all departments.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {services?.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="morphic-card p-8 group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  {/* Use the icon component directly from the service object */}
                  <service.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-text-primary">
                  {service?.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service?.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                    <Settings size={16} className="mr-2 text-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service?.features?.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <Check
                          size={14}
                          className="mr-2 text-success flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                    <TrendingUp size={16} className="mr-2 text-primary" />
                    Business Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service?.benefits?.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <Star
                          size={14}
                          className="mr-2 text-warning flex-shrink-0"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBreakdown;
