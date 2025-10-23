import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  Settings, 
  DollarSign, 
  Code, 
  Users, 
  ChevronUp, 
  ChevronDown, 
  MessageCircle, 
  Calendar,
  LucideIcon
} from 'lucide-react';

// Type definitions
interface FAQCategory {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FAQs {
  [key: string]: FAQ[];
}

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqCategories: FAQCategory[] = [
    { id: 'general', label: 'General', icon: HelpCircle },
    { id: 'process', label: 'Process', icon: Settings },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'technical', label: 'Technical', icon: Code },
    { id: 'engagement', label: 'Engagement', icon: Users }
  ];

  const faqs: FAQs = {
    general: [
      {
        question: 'What makes your technology consultation different from other consulting firms?',
        answer: `Our approach combines deep technical expertise with strategic business acumen. Unlike traditional consulting firms that focus primarily on process, we provide hands-on technical guidance backed by 15+ years of implementation experience.\n\nWe don't just create recommendations - we stay engaged throughout implementation to ensure successful outcomes. Our team includes former CTOs, architects, and technology leaders who understand both the technical and business challenges you face.`
      },
      {
        question: 'How do you ensure confidentiality and data security during consultation?',
        answer: `We maintain the highest standards of confidentiality and security. All team members sign comprehensive NDAs, and we follow enterprise-grade security protocols including SOC2 Type II compliance.\n\nWe can work within your security frameworks, use your preferred communication channels, and provide additional security measures as needed for highly sensitive projects.`
      },
      {
        question: 'What industries do you specialize in?',
        answer: `We have extensive experience across multiple industries including Financial Services, Healthcare, E-commerce, Manufacturing, SaaS, and Education. Our team includes specialists with deep domain knowledge in regulated industries and complex technical environments.\n\nWhile we work across industries, we particularly excel in organizations undergoing digital transformation, scaling rapidly, or dealing with complex technical challenges.`
      },
      {
        question: 'Can you work with our existing technology team?',
        answer: `Absolutely. We believe in augmenting and empowering your existing team rather than replacing them. Our consultation approach includes knowledge transfer, mentoring, and collaborative planning to ensure your team can successfully execute the strategic recommendations.\n\nWe often work directly with CTOs, engineering managers, and technical leads to provide guidance while building internal capabilities.`
      }
    ],
    process: [
      {
        question: 'How long does a typical consultation engagement take?',
        answer: `Engagement duration varies based on scope and complexity:\n\n• Strategic Assessment: 4-6 weeks\n• Ongoing Advisory: Monthly retainer basis\n• Transformation Program: 6-18 months\n\nWe provide detailed timelines during our initial scoping discussions and maintain flexibility to adjust based on your priorities and constraints.`
      },
      {
        question: 'What is your consultation methodology?',
        answer: `We follow a structured 5-phase approach: Discovery & Assessment, Analysis & Strategy Development, Solution Design & Planning, Implementation Guidance, and Optimization & Support.\n\nEach phase includes specific deliverables, stakeholder reviews, and clear success criteria. We adapt our methodology based on your organization's culture, constraints, and objectives.`
      },
      {
        question: 'How do you handle remote vs. on-site consultation?',
        answer: `We offer flexible engagement models including fully remote, hybrid, and on-site consultation. Most strategic work can be done effectively remotely, with periodic on-site visits for stakeholder alignment and critical implementation phases.\n\nFor transformation programs, we typically recommend a hybrid approach with key milestones conducted on-site for maximum stakeholder engagement.`
      },
      {
        question: 'What happens if project requirements change during consultation?',
        answer: `We build flexibility into our engagement structure to accommodate changing requirements. Our agile consultation approach includes regular checkpoint reviews where we can adjust scope, priorities, and deliverables.\n\nFor significant scope changes, we provide transparent change management processes with clear impact assessment and approval workflows.`
      }
    ],
    pricing: [
      {
        question: 'How is consultation pricing structured?',
        answer: `We offer three main pricing models:\n\n• Fixed-fee packages for defined scope assessments\n• Monthly retainer for ongoing advisory relationships\n• Program-based pricing for comprehensive transformation initiatives\n\nAll pricing is transparent with no hidden fees. We provide detailed cost breakdowns and can accommodate various budget and payment preferences.`
      },
      {
        question: 'What is included in the consultation fee?',
        answer: `Our fees include all consultation activities, deliverables, and standard support. This covers stakeholder interviews, analysis, documentation, presentations, and follow-up sessions.\n\nTravel expenses for on-site work are typically separate, and any third-party tools or licenses required for implementation are discussed upfront.`
      },
      {
        question: 'Do you offer payment plans or flexible terms?',
        answer: `Yes, we offer flexible payment terms including milestone-based payments, monthly billing for retainer engagements, and extended payment schedules for larger programs.\n\nWe work with your procurement and finance teams to structure agreements that meet your organizational requirements.`
      },
      {
        question: 'Is there a minimum engagement size or duration?',
        answer: `Our Strategic Assessment package has a minimum engagement scope to ensure meaningful outcomes. For ongoing advisory, we typically recommend at least 3-month commitments to see substantial progress.\n\nWe're flexible on engagement size and can discuss options that fit your specific needs and budget constraints.`
      }
    ],
    technical: [
      {
        question: 'What technology stacks and platforms do you cover?',
        answer: `We have expertise across modern technology stacks including:\n\n• Cloud platforms: AWS, Azure, Google Cloud\n• Languages: JavaScript, Python, Java, .NET, Go\n• Frameworks: React, Node.js, Spring, .NET Core\n• Databases: PostgreSQL, MongoDB, Redis\n• DevOps: Kubernetes, Docker, CI/CD pipelines\n\nOur focus is on architecture and strategy rather than specific implementation, allowing us to provide guidance across diverse technology environments.`
      },
      {
        question: 'Can you help with legacy system modernization?',
        answer: `Legacy modernization is one of our core specialties. We help organizations develop pragmatic modernization strategies that balance risk, cost, and business value.\n\nOur approach includes assessment of current systems, identification of modernization patterns, risk mitigation strategies, and phased implementation roadmaps that minimize business disruption.`
      },
      {
        question: 'Do you provide hands-on implementation or just strategy?',
        answer: `Our primary focus is strategic consultation and architectural guidance. However, we can provide hands-on support during critical implementation phases, proof-of-concept development, and technical mentoring.\n\nFor full implementation, we often work with your team or recommend trusted implementation partners while maintaining oversight and quality assurance.`
      },
      {
        question: 'How do you stay current with emerging technologies?',
        answer: `Our team actively engages with the technology community through conferences, research, and continuous learning. We maintain partnerships with major technology vendors and participate in early access programs.\n\nWe focus on proven technologies with strong adoption trajectories rather than bleeding-edge experiments, ensuring our recommendations are both innovative and practical.`
      }
    ],
    engagement: [
      {
        question: 'Who will be working on our consultation project?',
        answer: `Each engagement is led by a senior consultant with relevant industry experience, supported by specialists based on your specific needs. You'll have a dedicated point of contact throughout the engagement.\n\nFor larger programs, we assemble cross-functional teams including architects, security specialists, and domain experts. We provide team profiles and ensure continuity throughout the engagement.`
      },
      {
        question: 'How do you ensure knowledge transfer to our team?',
        answer: `Knowledge transfer is built into our consultation process through collaborative workshops, documentation, training sessions, and mentoring. We believe in empowering your team to execute and maintain the strategic recommendations.\n\nWe provide comprehensive documentation, best practices guides, and can conduct formal training sessions for your technical and leadership teams.`
      },
      {
        question: 'What level of stakeholder involvement is required?',
        answer: `Successful consultation requires active participation from key stakeholders including technical leadership, business owners, and end users. We typically need 2-4 hours per week from core stakeholders during active phases.\n\nWe work with you to minimize disruption while ensuring adequate input and feedback. Our structured approach makes stakeholder time highly productive and focused.`
      },
      {
        question: 'How do you measure consultation success?',
        answer: `We establish clear success metrics at the beginning of each engagement, including both quantitative measures (performance improvements, cost savings) and qualitative outcomes (stakeholder satisfaction, capability building).\n\nWe provide regular progress reports and conduct post-engagement reviews to measure actual outcomes against projected benefits. Our goal is demonstrable business value from our strategic recommendations.`
      }
    ]
  };

  const toggleFAQ = (index: number): void => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our strategic technology consultation 
              services, process, and engagement models.
            </p>
          </motion.div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqCategories?.map((category: FAQCategory) => (
              <button
                key={category?.id}
                onClick={() => {
                  setActiveCategory(category?.id);
                  setOpenFAQ(null);
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category?.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface text-muted-foreground hover:bg-muted hover:text-text-primary'
                }`}
              >
                <category.icon 
                  size={16} 
                  color={activeCategory === category?.id ? 'white' : 'currentColor'} 
                />
                <span>{category?.label}</span>
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {faqs?.[activeCategory]?.map((faq: FAQ, index: number) => (
              <div key={index} className="morphic-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq?.question}
                  </h3>
                  {openFAQ === index ? 
                    <ChevronUp size={20} className="text-muted-foreground flex-shrink-0" /> : 
                    <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                  }
                </button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-border">
                        <div className="pt-4 text-muted-foreground leading-relaxed">
                          {faq?.answer?.split('\n')?.map((paragraph: string, pIndex: number) => (
                            <p key={pIndex} className={pIndex > 0 ? 'mt-3' : ''}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our consultation experts are ready to discuss your specific challenges and 
              help you understand how our strategic guidance can benefit your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center">
                <MessageCircle size={20} className="mr-2" />
                Ask a Question
              </button>
              <button className="px-8 py-3 border border-border text-text-primary rounded-lg font-medium hover:bg-muted transition-colors duration-300 flex items-center justify-center">
                <Calendar size={20} className="mr-2" />
                Schedule Q&A Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;