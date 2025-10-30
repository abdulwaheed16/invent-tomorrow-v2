// "use client";

// import HeroSectionPage from "@/components/hero-section-page";
// import { AnimatedSection } from "@/components/ui/animated-section";
// import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import BookCallButton from "@/components/ui/buttons/book-call-button";
// import { ArrowRight, ChevronDown, Play, Sparkles, Zap } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { HeroData } from "../../../../types/services";

// interface ServiceHeroProps {
//   heroData: HeroData;
// }

// export default function ServiceHero({ heroData }: ServiceHeroProps) {
//   const { title, description, bgImages } = heroData;
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [bgImages.length]);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* ------------------------------------------------ */}
//       {/* ------------------- HERO SECTION ---------------- */}
//       {/* ------------------------------------------------ */}
//       <HeroSectionPage>
//         <div className="container relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left: Content */}
//             <AnimatedWrapper animation="fadeUp" delay={0.2}>
//               <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-sm font-medium">
//                 {title.split(" ")[0]} Services
//               </Badge>
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//                 {title}
//               </h1>
//               <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
//                 {description}
//               </p>

//               {/* Key Features */}
//               <div className="mb-8 space-y-3">
//                 <div className="flex items-center gap-3 text-white/90">
//                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                     <Zap className="w-4 h-4 text-white" />
//                   </div>
//                   <span className="text-lg">
//                     Cutting-edge technology solutions
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-3 text-white/90">
//                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                     <Sparkles className="w-4 h-4 text-white" />
//                   </div>
//                   <span className="text-lg">Expert team of professionals</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-white/90">
//                   <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                     <Play className="w-4 h-4 text-white" />
//                   </div>
//                   <span className="text-lg">
//                     Proven track record of success
//                   </span>
//                 </div>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap gap-4">
//                 <AnimatedWrapper animation="bounceIn" delay={0.4}>
//                   <BookCallButton />
//                 </AnimatedWrapper>
//                 <AnimatedWrapper animation="bounceIn" delay={0.5}>
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="border-white text-white hover:bg-white hover:text-blue-600 transition-colors"
//                   >
//                     Learn More
//                     <ArrowRight className="w-5 h-5 ml-2" />
//                   </Button>
//                 </AnimatedWrapper>
//               </div>
//             </AnimatedWrapper>

//             {/* Right: Visual Showcase */}
//             <AnimatedWrapper
//               animation="fadeUp"
//               delay={0.3}
//               className="relative"
//             >
//               <div className="relative">
//                 {/* Main Image Display */}
//                 <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
//                   {bgImages.map((image, index) => (
//                     <div
//                       key={index}
//                       className={`absolute inset-0 transition-opacity duration-1000 ${
//                         currentImageIndex === index
//                           ? "opacity-100"
//                           : "opacity-0"
//                       }`}
//                     >
//                       <Image
//                         src={image ?? ""}
//                         alt={`Service image ${index + 1} | Invent Tomorrow | ${title}`}
//                         layout="fill"
//                         className="object-cover w-full h-full"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                     </div>
//                   ))}

//                   {/* Play Button Overlay */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <AnimatedWrapper animation="zoomIn" delay={0.6}>
//                       <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 cursor-pointer hover:bg-white/30 transition-colors">
//                         <Play className="w-8 h-8 text-white fill-white ml-1" />
//                       </div>
//                     </AnimatedWrapper>
//                   </div>
//                 </div>

//                 {/* Image Indicators */}
//                 <div className="flex justify-center gap-2 mt-6">
//                   {bgImages.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentImageIndex(index)}
//                       className={`w-2 h-2 rounded-full transition-all ${
//                         currentImageIndex === index
//                           ? "w-8 bg-white"
//                           : "bg-white/50"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 {/* Floating Elements */}
//                 <AnimatedWrapper
//                   animation="zoomIn"
//                   delay={0.7}
//                   className="absolute -top-6 -right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
//                 >
//                   <div className="text-white">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M12 2L2 7l10 5 10-5-10-5z" />
//                       <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
//                     </svg>
//                   </div>
//                 </AnimatedWrapper>

//                 <AnimatedWrapper
//                   animation="zoomIn"
//                   delay={0.8}
//                   className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
//                 >
//                   <div className="text-white">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//                       <line x1="9" y1="9" x2="15" y2="9" />
//                       <line x1="9" y1="15" x2="15" y2="15" />
//                     </svg>
//                   </div>
//                 </AnimatedWrapper>
//               </div>
//             </AnimatedWrapper>
//           </div>
//         </div>
//       </HeroSectionPage>

//       {/* ------------------------------------------------ */}
//       {/* --------------- SCROLL INDICATOR ------------- */}
//       {/* ------------------------------------------------ */}
//       <AnimatedSection animation="fadeUp" className="py-8">
//         <div className="container">
//           <div className="flex justify-center">
//             <AnimatedWrapper animation="bounceIn" delay={0.9}>
//               <div className="flex flex-col items-center text-slate-600">
//                 <span className="text-sm mb-2">Scroll to explore</span>
//                 <ChevronDown className="w-6 h-6 animate-bounce" />
//               </div>
//             </AnimatedWrapper>
//           </div>
//         </div>
//       </AnimatedSection>
//     </div>
//   );
// }
