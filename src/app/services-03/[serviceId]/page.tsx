// import { services } from "@/app/services-02/data";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   ArrowLeft,
//   CheckCircle2,
//   ChevronRight,
//   Star,
//   Target,
//   Zap,
// } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// type Params = {
//   serviceId: string;
// };
// const ServiceDetail = async (params: Promise<{ serviceId: string }>) => {
//   const serviceId = (await params).serviceId;
//   const router = useRouter();

//   const service = services.find((s) => s.id === serviceId);
//   const { scrollYProgress } = useScroll();
//   const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

//   if (!service) {
//     console.log("Service not found:", serviceId);
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <p className="text-2xl text-muted-foreground">Service not found.</p>
//       </div>
//     );
//     // return router.push("");
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <main>
//         {/* Back Button */}
//         <div className="container mx-auto px-6 pt-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <Link href="/">
//               <Button variant="ghost" className="mb-4 -ml-4 hover:bg-accent">
//                 <ArrowLeft className="mr-2 h-4 w-4" />
//                 Back to Services
//               </Button>
//             </Link>
//           </motion.div>
//         </div>

//         {/* Hero Section with Parallax */}
//         <motion.section
//           style={{ opacity, scale }}
//           className="relative overflow-hidden"
//         >
//           <div className="container mx-auto px-6 py-12">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="relative rounded-3xl overflow-hidden shadow-2xl"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
//               <img
//                 src={service.heroImage}
//                 alt={service.title}
//                 className="w-full h-[400px] object-cover opacity-20 mix-blend-overlay"
//               />
//               <div className="absolute inset-0 flex flex-col justify-center px-12 py-16">
//                 <motion.h1
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="text-6xl font-bold mb-6 text-primary-foreground"
//                 >
//                   {service.title}
//                 </motion.h1>
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="text-2xl text-primary-foreground/90 max-w-3xl"
//                 >
//                   {service.subtitle}
//                 </motion.p>
//               </div>
//             </motion.div>
//           </div>
//         </motion.section>

//         <div className="container mx-auto px-6">
//           {/* Description */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="py-16"
//           >
//             <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
//               {service.description}
//             </p>
//           </motion.section>

//           {/* Horizontal Process Timeline */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="py-16 -mx-6 px-6 bg-gradient-to-br from-card via-accent/20 to-card rounded-3xl"
//           >
//             <div className="mb-12 text-center">
//               <motion.span
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="text-primary font-semibold text-lg mb-2 block"
//               >
//                 DISCOVERY & ANALYSIS
//               </motion.span>
//               <h2 className="text-5xl font-bold mb-4">
//                 Guided Roadmap to{" "}
//                 <span className="text-primary">Digital Success</span>
//               </h2>
//             </div>

//             <div className="relative overflow-x-auto pb-8">
//               <div className="flex gap-6 min-w-max px-6">
//                 {service.process.map((step: any, index: number) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     whileHover={{ y: -10, scale: 1.02 }}
//                     className="relative group"
//                   >
//                     {/* Step Number */}
//                     <div className="text-6xl font-bold text-primary/20 mb-4 transition-colors group-hover:text-primary/40">
//                       {String(step.step).padStart(2, "0")}
//                     </div>

//                     {/* Vertical Card */}
//                     <Card className="w-80 h-[500px] bg-gradient-to-b from-card to-accent/30 border-2 border-border hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
//                       <div className="h-full p-8 flex flex-col">
//                         {/* Icon */}
//                         <div className="mb-6">
//                           <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                             {index === 0 && (
//                               <Zap className="h-8 w-8 text-primary" />
//                             )}
//                             {index === 1 && (
//                               <Target className="h-8 w-8 text-primary" />
//                             )}
//                             {index === 2 && (
//                               <CheckCircle2 className="h-8 w-8 text-primary" />
//                             )}
//                             {index === 3 && (
//                               <Star className="h-8 w-8 text-primary" />
//                             )}
//                             {index >= 4 && (
//                               <ChevronRight className="h-8 w-8 text-primary" />
//                             )}
//                           </div>
//                         </div>

//                         {/* Title - Rotated */}
//                         <div className="mb-6">
//                           <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
//                             {step.title}
//                           </h3>
//                           <div className="h-1 w-12 bg-primary rounded-full" />
//                         </div>

//                         {/* Description */}
//                         <p className="text-muted-foreground leading-relaxed flex-grow">
//                           {step.description}
//                         </p>

//                         {/* Bottom Arrow */}
//                         <div className="mt-6 flex justify-end">
//                           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
//                             <ChevronRight className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
//                           </div>
//                         </div>
//                       </div>
//                     </Card>

//                     {/* Connector Line */}
//                     {index < service.process.length - 1 && (
//                       <div className="absolute top-20 -right-6 w-6 h-0.5 bg-gradient-to-r from-primary to-primary/20" />
//                     )}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Scroll Indicator */}
//             <div className="text-center mt-8">
//               <p className="text-sm text-muted-foreground">
//                 ← Scroll to explore all steps →
//               </p>
//             </div>
//           </motion.section>

//           {/* Features Grid - Modern Cards */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="py-16"
//           >
//             <div className="flex items-center justify-center gap-3 mb-12">
//               <Zap className="h-10 w-10 text-primary" />
//               <h2 className="text-4xl font-bold">Key Features</h2>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//               {service.features.map((feature: any, index: number) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   whileHover={{ y: -8, scale: 1.02 }}
//                   className="group"
//                 >
//                   <Card className="h-full p-8 bg-gradient-to-br from-card via-accent/10 to-primary/5 border-2 border-border hover:border-primary shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
//                     {/* Background Gradient Effect */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                     <div className="relative">
//                       {/* Icon */}
//                       <div className="mb-6">
//                         <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
//                           <CheckCircle2 className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
//                         </div>
//                       </div>

//                       {/* Feature Title */}
//                       <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
//                         {feature}
//                       </h3>

//                       {/* Feature Description */}
//                       <p className="text-muted-foreground leading-relaxed">
//                         Enterprise-grade implementation using modern frameworks
//                         and best practices for exceptional results.
//                       </p>
//                     </div>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           {/* Benefits - Modern Grid Layout */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="py-16 -mx-6 px-6 bg-gradient-to-br from-primary/5 via-accent/30 to-primary/5 rounded-3xl"
//           >
//             <div className="flex items-center justify-center gap-3 mb-12">
//               <Target className="h-10 w-10 text-primary" />
//               <h2 className="text-4xl font-bold">Business Benefits</h2>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//               {service.benefits.map((benefit: any, index: number) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.03 }}
//                   className="group"
//                 >
//                   <Card className="h-full p-8 bg-card border-2 border-border hover:border-primary shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
//                     {/* Number Badge */}
//                     <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
//                       <span className="text-lg font-bold text-primary group-hover:text-primary-foreground">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>
//                     </div>

//                     {/* Icon */}
//                     <div className="mb-6">
//                       <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                         <Target className="h-8 w-8 text-primary" />
//                       </div>
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-2xl font-bold mb-4 pr-12 group-hover:text-primary transition-colors">
//                       {benefit}
//                     </h3>

//                     {/* Description & Metrics */}
//                     <div className="space-y-4">
//                       <p className="text-muted-foreground leading-relaxed">
//                         This benefit directly impacts your bottom line by
//                         improving efficiency, reducing costs, and accelerating
//                         growth.
//                       </p>

//                       {/* Success Metrics */}
//                       <div className="space-y-2 pt-4 border-t border-border/50">
//                         <div className="flex items-center gap-3">
//                           <div className="w-1.5 h-1.5 rounded-full bg-primary" />
//                           <span className="text-sm font-semibold text-foreground">
//                             Proven across 50+ projects
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           <div className="w-1.5 h-1.5 rounded-full bg-primary" />
//                           <span className="text-sm font-semibold text-foreground">
//                             Measurable ROI within 3-6 months
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           {/* Case Studies - Enhanced Carousel */}
//           {service.caseStudies && service.caseStudies.length > 0 && (
//             <motion.section
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="py-16"
//             >
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
//                 <p className="text-muted-foreground text-lg">
//                   Real results from real projects
//                 </p>
//               </div>
//               <Carousel className="max-w-6xl mx-auto">
//                 <CarouselContent>
//                   {service.caseStudies.map((study: any, index: number) => (
//                     <CarouselItem key={index} className="md:basis-1/2">
//                       <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         whileHover={{ scale: 1.02, y: -5 }}
//                         transition={{ duration: 0.3 }}
//                         className="h-full"
//                       >
//                         <Card className="p-10 h-full bg-gradient-to-br from-card via-primary/5 to-accent/20 border-2 border-border hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
//                           {/* Decorative Element */}
//                           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

//                           <div className="relative">
//                             {/* Badge */}
//                             <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
//                               Case Study #{index + 1}
//                             </div>

//                             {/* Title */}
//                             <h3 className="text-3xl font-bold mb-4 text-foreground">
//                               {study.title}
//                             </h3>

//                             {/* Description */}
//                             <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
//                               {study.description}
//                             </p>

//                             {/* Metrics Grid */}
//                             <div className="space-y-4 pt-6 border-t border-border">
//                               <h4 className="font-bold text-foreground mb-4">
//                                 Key Achievements:
//                               </h4>
//                               {study.metrics.map((metric: any, idx: number) => (
//                                 <div
//                                   key={idx}
//                                   className="flex items-start gap-3"
//                                 >
//                                   <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
//                                     <CheckCircle2 className="h-4 w-4 text-primary" />
//                                   </div>
//                                   <span className="font-semibold text-foreground">
//                                     {metric}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                         </Card>
//                       </motion.div>
//                     </CarouselItem>
//                   ))}
//                 </CarouselContent>
//                 <CarouselPrevious className="left-0" />
//                 <CarouselNext className="right-0" />
//               </Carousel>
//             </motion.section>
//           )}

//           {/* Testimonials - Premium Carousel */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="py-16 bg-gradient-to-br from-primary/5 via-accent/20 to-primary/5 -mx-6 px-6 rounded-3xl relative overflow-hidden"
//           >
//             {/* Background Decoration */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary-rgb,66,153,225),0.1),transparent)]" />

//             <div className="relative">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-4">
//                   What Our Clients Say
//                 </h2>
//                 <p className="text-muted-foreground text-lg">
//                   Trusted by industry leaders worldwide
//                 </p>
//               </div>

//               <Carousel className="max-w-5xl mx-auto">
//                 <CarouselContent>
//                   {service.testimonials.map(
//                     (testimonial: any, index: number) => (
//                       <CarouselItem key={index}>
//                         <motion.div
//                           initial={{ opacity: 0, scale: 0.95 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.5 }}
//                         >
//                           <Card className="p-12 bg-card border-2 border-border hover:border-primary shadow-2xl transition-all duration-500 relative overflow-hidden">
//                             {/* Quote Mark Decoration */}
//                             <div className="absolute top-8 right-8 text-8xl text-primary/10 font-serif leading-none">
//                               "
//                             </div>

//                             <div className="relative">
//                               {/* Star Rating */}
//                               <div className="flex gap-1 mb-8">
//                                 {[...Array(testimonial.rating)].map((_, i) => (
//                                   <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, scale: 0 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     transition={{
//                                       duration: 0.3,
//                                       delay: i * 0.1,
//                                     }}
//                                   >
//                                     <Star className="h-7 w-7 fill-primary text-primary" />
//                                   </motion.div>
//                                 ))}
//                               </div>

//                               {/* Testimonial Content */}
//                               <p className="text-2xl text-foreground mb-10 leading-relaxed">
//                                 "{testimonial.content}"
//                               </p>

//                               {/* Client Info */}
//                               <div className="flex items-center gap-6 pt-6 border-t border-border">
//                                 <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center ring-4 ring-primary/10">
//                                   <span className="text-primary font-bold text-2xl">
//                                     {testimonial.name.charAt(0)}
//                                   </span>
//                                 </div>
//                                 <div>
//                                   <div className="font-bold text-foreground text-xl">
//                                     {testimonial.name}
//                                   </div>
//                                   <div className="text-muted-foreground text-lg">
//                                     {testimonial.role}
//                                   </div>
//                                   <div className="text-primary font-semibold">
//                                     {testimonial.company}
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </Card>
//                         </motion.div>
//                       </CarouselItem>
//                     )
//                   )}
//                 </CarouselContent>
//                 <CarouselPrevious className="left-0" />
//                 <CarouselNext className="right-0" />
//               </Carousel>
//             </div>
//           </motion.section>

//           {/* Technologies - Enhanced Grid */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="py-16"
//           >
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
//               <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//                 Cutting-edge tools and frameworks to build robust, scalable
//                 solutions
//               </p>
//             </div>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//               {service.technologies.map((tech: any, index: number) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="group"
//                 >
//                   <Card className="p-6 bg-gradient-to-br from-card to-accent/20 border-2 border-border hover:border-primary shadow-md hover:shadow-xl transition-all duration-300 text-center">
//                     <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
//                       <Zap className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
//                     </div>
//                     <span className="font-bold text-lg group-hover:text-primary transition-colors">
//                       {tech}
//                     </span>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           {/* FAQs */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="py-16"
//           >
//             <h2 className="text-4xl font-bold text-center mb-12">
//               Frequently Asked Questions
//             </h2>
//             <Accordion
//               type="single"
//               collapsible
//               className="max-w-4xl mx-auto space-y-4"
//             >
//               {service.faqs.map((faq: any, index: number) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                 >
//                   <AccordionItem
//                     value={`faq-${index}`}
//                     className="border-2 border-border rounded-xl px-6 bg-card/50 backdrop-blur-sm shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300"
//                   >
//                     <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left hover:no-underline py-6">
//                       <div className="flex items-start gap-3 w-full">
//                         <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
//                           <span className="text-primary font-bold text-sm">
//                             Q
//                           </span>
//                         </div>
//                         <span className="pr-4">{faq.question}</span>
//                       </div>
//                     </AccordionTrigger>
//                     <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-6 pl-11">
//                       <div className="flex items-start gap-3">
//                         <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
//                           <span className="text-primary font-bold text-sm">
//                             A
//                           </span>
//                         </div>
//                         <p className="pt-1">{faq.answer}</p>
//                       </div>
//                     </AccordionContent>
//                   </AccordionItem>
//                 </motion.div>
//               ))}
//             </Accordion>
//           </motion.section>

//           {/* CTA */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="py-16 mb-16"
//           >
//             <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/85 text-primary-foreground rounded-3xl p-16 text-center shadow-2xl relative overflow-hidden">
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
//               <div className="relative">
//                 <motion.h2
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                   className="text-5xl font-bold mb-6"
//                 >
//                   Ready to Get Started?
//                 </motion.h2>
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                   className="text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto"
//                 >
//                   Let's discuss how we can help transform your business with{" "}
//                   {service.title.toLowerCase()}.
//                 </motion.p>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Button
//                     size="lg"
//                     variant="secondary"
//                     className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-xl px-12 py-8 shadow-2xl"
//                     asChild
//                   >
//                     <a href="#book-call">Schedule a Free Consultation</a>
//                   </Button>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.section>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ServiceDetail;

export default function page() {
  return <div>page</div>;
}
