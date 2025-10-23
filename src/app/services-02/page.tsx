// "use client";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowRight,
//   Code2,
//   Lightbulb,
//   LucideIcon,
//   Smartphone,
//   Sparkles,
// } from "lucide-react";
// import Link from "next/link";
// import { JSX, useMemo, useState } from "react";
// import { services } from "./data";
// import {
//   Service,
//   ServiceCardProps,
//   ServiceIconProps,
//   ServicesGridProps,
// } from "./types";

// // Icon mapping with more specific typing
// export const iconMap: Record<string, LucideIcon> = {
//   Sparkles,
//   Code2,
//   Smartphone,
//   Lightbulb,
// };

// // Loading skeleton component
// const ServiceCardSkeleton: React.FC = () => (
//   <div className="h-full">
//     <div className="relative overflow-hidden rounded-3xl glass-effect p-8 h-full">
//       <div className="space-y-4">
//         <div className="w-16 h-16 rounded-2xl bg-gray-800 animate-pulse" />
//         <div className="h-8 bg-gray-800 rounded-lg w-3/4 animate-pulse" />
//         <div className="space-y-2">
//           <div className="h-4 bg-gray-800 rounded w-full animate-pulse" />
//           <div className="h-4 bg-gray-800 rounded w-5/6 animate-pulse" />
//         </div>
//         <div className="flex flex-wrap gap-2">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className="h-6 bg-gray-800 rounded-full w-20 animate-pulse"
//             />
//           ))}
//         </div>
//         <div className="h-6 bg-gray-800 rounded-lg w-24 animate-pulse" />
//       </div>
//     </div>
//   </div>
// );

// // Empty state component
// const EmptyState: React.FC = () => (
//   <div className="col-span-full py-16 text-center">
//     <div className="max-w-md mx-auto">
//       <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
//         <Sparkles className="w-10 h-10 text-gray-600" />
//       </div>
//       <h3 className="text-2xl font-bold text-white mb-4">
//         No services available
//       </h3>
//       <p className="text-gray-400">
//         We're currently updating our services. Please check back later.
//       </p>
//     </div>
//   </div>
// );

// // Service Icon Component with improved error handling
// export const ServiceIcon: React.FC<ServiceIconProps> = ({
//   iconName,
//   color,
//   className = "",
// }) => {
//   const Icon = iconMap[iconName];

//   if (!Icon) {
//     console.warn(`Icon "${iconName}" not found, using fallback`);
//     return <Sparkles className={className} style={{ color }} />;
//   }

//   return <Icon className={className} style={{ color }} />;
// };

// // Service Card Component with improved animations
// const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1, duration: 0.6 }}
//       whileHover={{ y: -5 }}
//       className="h-full"
//     >
//       <Link
//         href={`/services/${service.slug}`}
//         className="block h-full"
//         aria-label={`Learn more about ${service.title}`}
//       >
//         <div className="group relative overflow-hidden rounded-3xl glass-effect p-8 h-full hover:border-[#0066FF]/50 transition-all duration-300">
//           {/* Gradient overlay on hover */}
//           <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/0 to-[#00D4FF]/0 group-hover:from-[#0066FF]/10 group-hover:to-[#00D4FF]/10 transition-all duration-500" />

//           <div className="relative">
//             {/* Icon */}
//             <motion.div
//               className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
//               style={{
//                 background: `linear-gradient(to bottom right, ${service.color}20, ${service.color}05)`,
//               }}
//               whileHover={{ rotate: 5 }}
//             >
//               <ServiceIcon
//                 iconName={service.icon}
//                 color={service.color}
//                 className="w-8 h-8"
//               />
//             </motion.div>

//             {/* Content */}
//             <h3 className="text-3xl font-bold mb-4 group-hover:text-[#00D4FF] transition-colors">
//               {service.title}
//             </h3>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               {service.tagline}
//             </p>

//             {/* Technologies */}
//             {service.technologies && service.technologies.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {service.technologies.slice(0, 4).map((tech, i) => (
//                   <motion.span
//                     key={i}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.1 + i * 0.05 }}
//                     className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10"
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//                 {service.technologies.length > 4 && (
//                   <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10">
//                     +{service.technologies.length - 4} more
//                   </span>
//                 )}
//               </div>
//             )}

//             {/* CTA */}
//             <div className="flex items-center gap-2 text-[#00D4FF] font-medium group-hover:gap-4 transition-all">
//               Learn More
//               <motion.div
//                 animate={{ x: 0 }}
//                 whileHover={{ x: 3 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 <ArrowRight className="w-5 h-5" aria-hidden="true" />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// };

// // Hero Section Component with improved animations
// const HeroSection: React.FC = () => {
//   return (
//     <section
//       className="relative overflow-hidden py-32"
//       aria-labelledby="hero-heading"
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0066FF]/10 to-transparent" />
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           <motion.h1
//             id="hero-heading"
//             className="text-5xl md:text-7xl font-bold mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Our <span className="gradient-text">Technologies</span>
//           </motion.h1>
//           <motion.p
//             className="text-xl text-gray-400 mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             Cutting-edge solutions tailored to transform your business and drive
//             innovation
//           </motion.p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Services Grid Component with improved loading state
// const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
//   const [visibleCount, setVisibleCount] = useState<number>(6);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const visibleServices = services.slice(0, visibleCount);
//   const hasMore = services.length > visibleCount;

//   const loadMore = (): void => {
//     setIsLoading(true);
//     // Simulate loading delay for better UX
//     setTimeout(() => {
//       setVisibleCount((prev) => Math.min(prev + 6, services.length));
//       setIsLoading(false);
//     }, 300);
//   };

//   return (
//     <section className="pb-32" aria-labelledby="services-heading">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <h2 id="services-heading" className="sr-only">
//           Our Technology Services
//         </h2>

//         {services.length === 0 ? (
//           <EmptyState />
//         ) : (
//           <>
//             <div className="grid md:grid-cols-2 gap-8">
//               <AnimatePresence>
//                 {visibleServices.map((service, index) => (
//                   <ServiceCard
//                     key={service.id}
//                     service={service}
//                     index={index}
//                   />
//                 ))}
//               </AnimatePresence>

//               {/* Show skeleton cards while loading more */}
//               {isLoading && (
//                 <>
//                   {[...Array(Math.min(6, services.length - visibleCount))].map(
//                     (_, i) => (
//                       <ServiceCardSkeleton key={`skeleton-${i}`} />
//                     )
//                   )}
//                 </>
//               )}
//             </div>

//             {hasMore && (
//               <div className="mt-12 text-center">
//                 <motion.button
//                   onClick={loadMore}
//                   disabled={isLoading}
//                   className="px-8 py-3 bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#0066FF]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {isLoading ? (
//                     <span className="flex items-center">
//                       <svg
//                         className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         ></path>
//                       </svg>
//                       Loading...
//                     </span>
//                   ) : (
//                     `Load More Services (${
//                       services.length - visibleCount
//                     } remaining)`
//                   )}
//                 </motion.button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// // Main Services Component with error handling
// export default function Services(): JSX.Element {
//   // Clean and deduplicate services data
//   const cleanedServices = useMemo<Service[]>(() => {
//     if (!services || services.length === 0) return [];

//     const seen = new Set<string>();
//     return services.filter((service: Service) => {
//       if (seen.has(service.slug)) {
//         return false;
//       }
//       seen.add(service.slug);
//       return true;
//     });
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <HeroSection />
//       <ServicesGrid services={cleanedServices} />
//     </div>
//   );
// }

export default function page() {
  return <div>page</div>;
}
