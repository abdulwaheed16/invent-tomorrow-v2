import { motion } from "framer-motion";
import {
    Bell,
    Boxes,
    Brain,
    Cloud,
    Code2,
    GitBranch,
    Layers,
    MessageSquare,
    Package,
    Server,
    Share2,
    Shield,
    Wifi,
    Zap,
} from "lucide-react";

const TechnologyStack = () => {
  const technologies = [
    {
      category: "AI Frameworks",
      items: [
        {
          name: "TensorFlow",
          description: "Machine learning and neural networks",
          icon: Brain,
        },
        {
          name: "PyTorch",
          description: "Deep learning research and production",
          icon: Zap,
        },
        {
          name: "OpenAI GPT",
          description: "Large language models and NLP",
          icon: MessageSquare,
        },
        {
          name: "Hugging Face",
          description: "Transformers and model hub",
          icon: Brain,
        },
      ],
    },
    {
      category: "Cloud Platforms",
      items: [
        {
          name: "AWS AI Services",
          description: "Comprehensive AI cloud solutions",
          icon: Cloud,
        },
        {
          name: "Google Cloud AI",
          description: "Scalable machine learning platform",
          icon: Brain,
        },
        {
          name: "Azure Cognitive",
          description: "Enterprise AI and cognitive services",
          icon: Server,
        },
        {
          name: "IBM Watson",
          description: "Business AI and automation tools",
          icon: Server, // Using Server as a generic AI service icon
        },
      ],
    },
    {
      category: "Development Tools",
      items: [
        {
          name: "Python",
          description: "Primary AI development language",
          icon: Code2,
        },
        {
          name: "Docker",
          description: "Containerization and deployment",
          icon: Package,
        },
        {
          name: "Kubernetes",
          description: "Orchestration and scaling",
          icon: Boxes,
        },
        {
          name: "MLflow",
          description: "ML lifecycle management",
          icon: GitBranch,
        },
      ],
    },
    {
      category: "Integration APIs",
      items: [
        {
          name: "REST APIs",
          description: "Standard web service integration",
          icon: Share2, // Using Share2 as a good representation for API links
        },
        {
          name: "GraphQL",
          description: "Flexible data query language",
          icon: GitBranch, // GitBranch can represent a query graph structure
        },
        {
          name: "WebSockets",
          description: "Real-time communication",
          icon: Wifi,
        },
        {
          name: "Webhooks",
          description: "Event-driven integrations",
          icon: Bell,
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage the most advanced AI frameworks and cloud platforms to
              build robust, scalable, and intelligent agent solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {technologies?.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="morphic-card p-8"
            >
              <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center">
                <Layers size={24} className="mr-3 text-primary" />
                {category?.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {category?.items?.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    variants={itemVariants}
                    className="group p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                        {/* Correctly render the icon component */}
                        <tech.icon className="text-primary size-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-text-primary group-hover:text-primary transition-colors duration-300">
                          {tech?.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {tech?.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
            <Shield size={16} />
            <span>Enterprise-grade security and compliance built-in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;