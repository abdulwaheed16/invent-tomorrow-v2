import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      category: "Development Process",
      questions: [
        {
          question: "How long does it take to develop a mobile app?",
          answer: `Development timeline varies based on app complexity:\n\n• Simple apps (5-10 screens): 4-8 weeks\n• Medium complexity apps (10-20 screens): 8-16 weeks\n• Complex apps (20+ screens with advanced features): 16-24+ weeks\n\nFactors affecting timeline include platform choice (native vs cross-platform), number of features, third-party integrations, and design complexity. We provide detailed project timelines during the planning phase.`,
        },
        {
          question: "Should I choose native or cross-platform development?",
          answer: `The choice depends on your specific needs:\n\n**Native Development (iOS/Android separately):**\n• Best performance and user experience\n• Full access to platform-specific features\n• Optimal for complex apps with heavy graphics\n• Higher development cost and time\n\n**Cross-Platform Development (React Native/Flutter):**\n• Faster development and lower cost\n• Single codebase for both platforms\n• Good performance for most use cases\n• Easier maintenance and updates\n\nWe'll recommend the best approach based on your requirements, budget, and timeline.`,
        },
        {
          question: "What platforms do you develop for?",
          answer: `We develop for all major mobile platforms:\n\n**Native Development:**\n• iOS (iPhone, iPad, Apple Watch)\n• Android (phones, tablets, Wear OS)\n\n**Cross-Platform Frameworks:**\n• React Native\n• Flutter\n• Xamarin\n\n**Additional Platforms:**\n• Progressive Web Apps (PWA)\n• Hybrid apps using Ionic\n• Desktop apps using Electron\n\nWe help you choose the right platform mix based on your target audience and business goals.`,
        },
      ],
    },
    {
      category: "Technical Specifications",
      questions: [
        {
          question: "What technologies and frameworks do you use?",
          answer: `We use modern, industry-standard technologies:\n\n**Native iOS:**\n• Swift, SwiftUI, Objective-C\n• Xcode, Core Data, CloudKit\n• ARKit, Core ML, HealthKit\n\n**Native Android:**\n• Kotlin, Java, Jetpack Compose\n• Android Studio, Room, Firebase\n• ML Kit, ARCore, Android Jetpack\n\n**Cross-Platform:**\n• React Native, Flutter, Xamarin\n• TypeScript, Redux, MobX\n• Expo, CodePush for React Native\n\n**Backend & APIs:**\n• Node.js, Python, .NET Core\n• AWS, Google Cloud, Azure\n• MongoDB, PostgreSQL, Firebase`,
        },
        {
          question: "How do you ensure app security?",
          answer: `Security is integrated throughout our development process:\n\n**Data Protection:**\n• End-to-end encryption for sensitive data\n• Secure API communication (HTTPS/TLS)\n• Local data encryption using platform standards\n• Biometric authentication integration\n\n**Code Security:**\n• Code obfuscation and anti-tampering\n• Secure coding practices and reviews\n• Regular security audits and testing\n• OWASP mobile security guidelines compliance\n\n**Infrastructure Security:**\n• Secure cloud hosting and databases\n• Regular security updates and patches\n• Penetration testing before launch\n• Compliance with GDPR, HIPAA, SOC 2 standards`,
        },
        {
          question: "Can you integrate with existing systems and APIs?",
          answer: `Yes, we specialize in seamless integrations:\n\n**Common Integrations:**\n• CRM systems (Salesforce, HubSpot)\n• ERP systems (SAP, Oracle, Microsoft)\n• Payment gateways (Stripe, PayPal, Square)\n• Social media platforms (Facebook, Google, Twitter)\n\n**Custom API Development:**\n• RESTful API design and development\n• GraphQL implementation\n• Real-time APIs using WebSocket\n• Microservices architecture\n\n**Third-Party Services:**\n• Analytics (Google Analytics, Mixpanel)\n• Push notifications (Firebase, OneSignal)\n• Cloud storage (AWS S3, Google Cloud)\n• Authentication (Auth0, Firebase Auth)\n\nWe conduct thorough API analysis and create integration plans during the discovery phase.`,
        },
      ],
    },
    {
      category: "Project Management",
      questions: [
        {
          question: "How do you handle project communication and updates?",
          answer: `We maintain transparent communication throughout development:\n\n**Regular Updates:**\n• Weekly progress reports with screenshots\n• Bi-weekly video calls for major milestones\n• Real-time project dashboard access\n• Immediate notification of any blockers\n\n**Communication Channels:**\n• Dedicated Slack workspace or Teams channel\n• Project management tools (Jira, Asana, Trello)\n• Video conferencing for important discussions\n• Email summaries of key decisions\n\n**Development Transparency:**\n• Access to staging environments for testing\n• Regular demo sessions to review progress\n• Collaborative feedback and approval process\n• Version control access for technical stakeholders`,
        },
        {
          question: "What happens if requirements change during development?",
          answer: `We use agile methodology to accommodate changes:\n\n**Change Management Process:**\n• Formal change request evaluation\n• Impact assessment on timeline and budget\n• Client approval before implementation\n• Updated project documentation\n\n**Flexibility Measures:**\n• 20% buffer built into initial estimates\n• Sprint-based development for easy adjustments\n• Regular review and planning sessions\n• Transparent cost implications for changes\n\n**Best Practices:**\n• Detailed requirements gathering upfront\n• Prototyping to validate concepts early\n• Iterative feedback and approval cycles\n• Clear documentation of all changes\n\nMinor changes are often accommodated within the original scope, while major changes are handled through formal change orders.`,
        },
        {
          question: "Do you provide post-launch support and maintenance?",
          answer: `Yes, we offer comprehensive post-launch support:\n\n**Immediate Support (First 3 months included):**\n• Bug fixes and critical issues\n• App store submission support\n• Performance monitoring and optimization\n• User feedback analysis and response\n\n**Ongoing Maintenance Plans:**\n• Regular OS compatibility updates\n• Security patches and updates\n• Feature enhancements and improvements\n• Analytics and performance reporting\n\n**Additional Services:**\n• App store optimization (ASO)\n• User acquisition and marketing support\n• Scaling and performance optimization\n• New feature development\n\n**Support Levels:**\n• Basic: Essential maintenance and bug fixes\n• Premium: Proactive monitoring and enhancements\n• Enterprise: Dedicated support team and SLA\n\nAll maintenance plans include regular health checks and proactive recommendations for improvements.`,
        },
      ],
    },
    {
      category: "Costs & Timeline",
      questions: [
        {
          question: "How much does mobile app development cost?",
          answer: `App development costs vary based on complexity and features:\n\n**Simple Apps ($15,000 - $25,000):**\n• Basic functionality and UI\n• Single platform\n• Standard integrations\n• 4-8 weeks development\n\n**Medium Complexity ($25,000 - $50,000):**\n• Custom UI/UX design\n• Cross-platform development\n• API integrations and backend\n• 8-16 weeks development\n\n**Complex Apps ($50,000 - $150,000+):**\n• Advanced features (AI, AR, real-time)\n• Enterprise integrations\n• Custom backend development\n• 16+ weeks development\n\n**Factors Affecting Cost:**\n• Number of platforms (iOS, Android, Web)\n• Design complexity and custom animations\n• Third-party integrations and APIs\n• Backend development requirements\n• Advanced features (AI/ML, AR/VR, IoT)\n\nWe provide detailed quotes after understanding your specific requirements.`,
        },
        {
          question: "What payment terms and milestones do you offer?",
          answer: `We offer flexible payment structures aligned with project milestones:\n\n**Standard Payment Schedule:**\n• 30% - Project kickoff and design phase\n• 40% - Development milestone (50% completion)\n• 20% - Testing and pre-launch phase\n• 10% - Final delivery and app store submission\n\n**Alternative Options:**\n• Monthly payments for longer projects\n• Quarterly payments for enterprise clients\n• Custom milestone-based payments\n• Retainer agreements for ongoing work\n\n**Payment Methods:**\n• Bank transfers and ACH payments\n• Credit card payments (with processing fee)\n• International wire transfers\n• Cryptocurrency payments (Bitcoin, Ethereum)\n\n**Project Protection:**\n• Detailed contracts and scope documents\n• Escrow services for large projects\n• Money-back guarantee for first milestone\n• Transparent change order process\n\nAll payments are tied to specific deliverables and client approval milestones.`,
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const faqIndex = categoryIndex * 100 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? -1 : faqIndex);
  };

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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our mobile app development
              process, technologies, timelines, and support services.
            </p>
          </motion.div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs?.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {category?.category}
                </h3>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category?.questions?.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openFAQ === faqIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="morphic-card overflow-hidden hover:shadow-md transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
                      >
                        <h4 className="text-lg font-semibold text-text-primary pr-4">
                          {faq?.question}
                        </h4>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          {/* Use the lucide icon component directly */}
                          <ChevronDown
                            size={20}
                            className="text-muted-foreground"
                          />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <div className="prose prose-sm max-w-none">
                                {faq?.answer
                                  ?.split("\n")
                                  ?.map((line, lineIndex) => {
                                    if (line?.trim() === "") {
                                      return <br key={lineIndex} />;
                                    }

                                    if (
                                      line?.startsWith("**") &&
                                      line?.endsWith("**")
                                    ) {
                                      return (
                                        <h5
                                          key={lineIndex}
                                          className="font-semibold text-text-primary mt-4 mb-2"
                                        >
                                          {line?.replace(/\*\*/g, "")}
                                        </h5>
                                      );
                                    }

                                    if (line?.startsWith("•")) {
                                      return (
                                        <div
                                          key={lineIndex}
                                          className="flex items-start space-x-2 mb-1"
                                        >
                                          {/* Use the lucide icon component directly */}
                                          <ArrowRight
                                            size={14}
                                            className="text-primary flex-shrink-0 mt-1"
                                          />
                                          <span className="text-muted-foreground text-sm">
                                            {line?.substring(2)}
                                          </span>
                                        </div>
                                      );
                                    }

                                    return (
                                      <p
                                        key={lineIndex}
                                        className="text-muted-foreground leading-relaxed mb-2"
                                      >
                                        {line}
                                      </p>
                                    );
                                  })}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our mobile app development experts are here to help. Get
              personalized answers to your specific questions and project
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                {/* Use the lucide icon component directly */}
                <MessageCircle size={20} className="mr-2" />
                Ask Our Experts
              </Button>
              <Button variant="outline" size="lg">
                {/* Use the lucide icon component directly */}
                <Calendar size={20} className="mr-2" />
                Schedule Call
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
