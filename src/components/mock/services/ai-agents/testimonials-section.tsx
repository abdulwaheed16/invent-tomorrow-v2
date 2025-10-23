import { motion } from "framer-motion";
import { Award, Check, Clock, Star, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CTO",
      company: "RetailMax Corporation",
      avatar: "https://images.unsplash.com/photo-1668049221564-862149a48e10",
      avatarAlt:
        "Professional headshot of Asian woman with shoulder-length black hair in navy blazer smiling at camera",
      content: `The AI agents developed by TechServices Pro have revolutionized our customer service operations. We've seen an 85% reduction in response times and our customer satisfaction scores have never been higher. The implementation was seamless and the ongoing support has been exceptional.`,
      rating: 5,
      project: "E-commerce Customer Service Automation",
      metrics: "85% faster response times, 60% cost reduction",
    },
    {
      name: "Michael Rodriguez",
      position: "VP of Operations",
      company: "SecureBank Financial",
      avatar: "https://images.unsplash.com/photo-1724128195747-dd25cba7860f",
      avatarAlt:
        "Professional headshot of Hispanic man with short black hair in navy suit and tie",
      content: `The document processing automation has transformed our loan approval process. What used to take days now happens in hours with 99.2% accuracy. The ROI was evident within the first quarter, and we're now processing 3x more applications with the same team size.`,
      rating: 5,
      project: "Financial Document Processing Automation",
      metrics: "90% faster processing, 95% error reduction",
    },
    {
      name: "Dr. Emily Watson",
      position: "Chief Medical Officer",
      company: "MediCare Health Network",
      avatar: "https://images.unsplash.com/photo-1456553231995-8a30d04bfae5",
      avatarAlt:
        "Professional headshot of Caucasian woman with blonde hair in white medical coat with stethoscope",
      content: `The AI-powered triage system has significantly improved our emergency department efficiency. Patient wait times have decreased by 40%, and our staff can now focus on providing better care rather than administrative tasks. The system's accuracy in prioritizing cases has been remarkable.`,
      rating: 5,
      project: "Healthcare Patient Triage System",
      metrics: "40% reduced wait times, 94% triage accuracy",
    },
    {
      name: "James Thompson",
      position: "Director of Technology",
      company: "LogiFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1692610310099-97dd0b6f0d73",
      avatarAlt:
        "Professional headshot of Caucasian man with brown hair in dark suit jacket smiling confidently",
      content: `Working with TechServices Pro on our supply chain optimization AI agents was a game-changer. Their deep understanding of both AI technology and business processes resulted in a solution that exceeded our expectations. The predictive analytics have improved our inventory management by 45%.`,
      rating: 5,
      project: "Supply Chain Optimization",
      metrics: "45% inventory improvement, $1.2M savings",
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their operations
              with our AI agent solutions and achieved measurable business
              outcomes.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="morphic-card p-8 group hover:shadow-lg transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial?.rating)]?.map((_, i) => (
                  <Star
                    key={i}
                    name="Star"
                    size={16}
                    className="text-warning fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                {testimonial?.content}
              </blockquote>

              {/* Project Info */}
              <div className="mb-6 p-4 bg-surface/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">
                    {testimonial?.project}
                  </span>
                  <TrendingUp
                    name="TrendingUp"
                    size={16}
                    className="text-success"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {testimonial?.metrics}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.avatarAlt}
                    height={80}
                    width={80}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Check name="Check" size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">
                    {testimonial?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial?.position}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonial?.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Users name="Users" size={20} className="text-primary" />
              <span className="text-sm">50+ Enterprise Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star name="Star" size={20} className="text-warning" />
              <span className="text-sm">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award name="Award" size={20} className="text-success" />
              <span className="text-sm">98% Project Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock name="Clock" size={20} className="text-accent" />
              <span className="text-sm">24/7 Support Available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
