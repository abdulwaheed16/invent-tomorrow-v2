// import { motion } from "framer-motion";
// import {
//   Activity,
//   ArrowRight,
//   CheckCircle,
//   Clock,
//   Code,
//   Layers,
//   Package,
//   Rocket,
//   Search,
//   TrendingUp,
// } from "lucide-react";

// const ProcessTimeline = () => {
//   const phases = [
//     {
//       phase: "Discovery & Analysis",
//       duration: "Week 1-2",
//       icon: Search,
//       description:
//         "Comprehensive assessment of your business processes, data infrastructure, and automation opportunities.",
//       deliverables: [
//         "Business Process Audit",
//         "Technical Requirements Analysis",
//         "ROI Projections",
//         "Implementation Roadmap",
//       ],
//       keyActivities: [
//         "Stakeholder interviews and workshops",
//         "Current system analysis and documentation",
//         "Data quality assessment and mapping",
//         "Use case prioritization and feasibility study",
//       ],
//     },
//     {
//       phase: "Design & Architecture",
//       duration: "Week 3-4",
//       icon: Layers,
//       description:
//         "Detailed system design and AI agent architecture planning with integration specifications and security protocols.",
//       deliverables: [
//         "System Architecture Design",
//         "AI Agent Specifications",
//         "Integration Blueprint",
//         "Security Framework",
//       ],
//       keyActivities: [
//         "AI model selection and customization planning",
//         "API design and integration architecture",
//         "User experience and interface design",
//         "Security and compliance framework setup",
//       ],
//     },
//     {
//       phase: "Development & Training",
//       duration: "Week 5-8",
//       icon: Code,
//       description:
//         "AI agent development, model training, and system integration with rigorous testing and optimization.",
//       deliverables: [
//         "Trained AI Models",
//         "Integrated Agent System",
//         "Testing Documentation",
//         "Performance Metrics",
//       ],
//       keyActivities: [
//         "AI model development and training",
//         "System integration and API development",
//         "Comprehensive testing and quality assurance",
//         "Performance optimization and fine-tuning",
//       ],
//     },
//     {
//       phase: "Deployment & Launch",
//       duration: "Week 9-10",
//       icon: Rocket,
//       description:
//         "Production deployment with monitoring setup, user training, and go-live support for seamless transition.",
//       deliverables: [
//         "Production Deployment",
//         "Monitoring Dashboard",
//         "User Training Materials",
//         "Support Documentation",
//       ],
//       keyActivities: [
//         "Production environment setup and deployment",
//         "User training and change management",
//         "Monitoring and alerting configuration",
//         "Go-live support and issue resolution",
//       ],
//     },
//     {
//       phase: "Optimization & Support",
//       duration: "Ongoing",
//       icon: TrendingUp,
//       description:
//         "Continuous monitoring, performance optimization, and ongoing support to ensure maximum ROI and system evolution.",
//       deliverables: [
//         "Performance Reports",
//         "Optimization Recommendations",
//         "System Updates",
//         "24/7 Support",
//       ],
//       keyActivities: [
//         "Continuous performance monitoring and analysis",
//         "Regular model retraining and optimization",
//         "Feature enhancements and system updates",
//         "Proactive support and maintenance",
//       ],
//     },
//   ];

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
//               Our Proven Implementation Process
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               A structured approach to AI agent implementation that ensures
//               successful deployment, measurable outcomes, and long-term success
//               for your organization.
//             </p>
//           </motion.div>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           {phases?.map((phase, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={`flex flex-col lg:flex-row items-center mb-16 last:mb-0 ${
//                 index % 2 === 1 ? "lg:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Timeline Content */}
//               <div className="flex-1 lg:px-8">
//                 <div className="morphic-card p-8 group hover:shadow-lg transition-all duration-300">
//                   <div className="flex items-center space-x-4 mb-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
//                       {/* Use the icon component directly from the phase object */}
//                       <phase.icon size={24} className="text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-text-primary">
//                         {phase?.phase}
//                       </h3>
//                       <span className="text-sm text-primary font-medium">
//                         {phase?.duration}
//                       </span>
//                     </div>
//                   </div>

//                   <p className="text-muted-foreground mb-6 leading-relaxed">
//                     {phase?.description}
//                   </p>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <h4 className="font-semibold text-text-primary mb-3 flex items-center">
//                         <Package size={16} className="mr-2 text-primary" />
//                         Key Deliverables
//                       </h4>
//                       <ul className="space-y-2">
//                         {phase?.deliverables?.map((deliverable, idx) => (
//                           <li
//                             key={idx}
//                             className="flex items-center text-sm text-muted-foreground"
//                           >
//                             <CheckCircle
//                               size={14}
//                               className="mr-2 text-success flex-shrink-0"
//                             />
//                             {deliverable}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h4 className="font-semibold text-text-primary mb-3 flex items-center">
//                         <Activity size={16} className="mr-2 text-primary" />
//                         Key Activities
//                       </h4>
//                       <ul className="space-y-2">
//                         {phase?.keyActivities?.map((activity, idx) => (
//                           <li
//                             key={idx}
//                             className="flex items-start text-sm text-muted-foreground"
//                           >
//                             <ArrowRight
//                               size={14}
//                               className="mr-2 mt-0.5 text-primary flex-shrink-0"
//                             />
//                             <span>{activity}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Timeline Connector */}
//               <div className="flex flex-col items-center my-8 lg:my-0">
//                 <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
//                   {index + 1}
//                 </div>
//                 {index < phases?.length - 1 && (
//                   <div className="w-1 h-16 bg-gradient-to-b from-primary to-primary/30 mt-4 hidden lg:block"></div>
//                 )}
//               </div>

//               {/* Spacer for alternating layout */}
//               <div className="flex-1 lg:px-8 hidden lg:block"></div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="text-center mt-16"
//         >
//           <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-full text-sm font-medium">
//             <Clock size={16} />
//             <span>
//               Average implementation time: 8-10 weeks for full deployment
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProcessTimeline;
