"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { homeData } from "@/lib/data/home-data";
import { motion } from "framer-motion";
import { ArrowRight, PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { icons, images } from "../../../utils/assets";
import { CustomCard } from "./custom-card";
import ProjectsSection from "./projects-section";
import { StackItem } from "./stack-item";
import { TechCard } from "./tech-card";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.6 },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// util
export const smoothScrollTo = (id: string) => {
  if (!id) return;
  const element = document.getElementById(id);
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  }
};

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("scrollTo");
    if (id) {
      smoothScrollTo(id);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${images.homeBanner?.src})` }}
      >
        {/* Animated overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-black/10"
        />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center py-16 sm:py-24 md:py-32">
            {/* Heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.2}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
            >
              Practical SaaS Development <br className="hidden sm:block" />
              That Gets You Moving.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.4}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mb-8 sm:mb-12"
            >
              Your concept matters. With our expert engineering team, we turn it
              into a product you can put in front of users and investors.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col items-center sm:flex-row gap-4 mt-4 sm:mt-8"
            >
              <motion.div variants={fadeUp}>
                <Link
                  href="https://calendly.com/abdulhaadi-businesschat/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center h-11 gap-2 bg-white text-black/90 border-2 border-white font-semibold py-1 px-3 rounded-md shadow-lg hover:bg-black/90 hover:text-white hover:border-black/90 transition-colors cursor-pointer"
                  >
                    Book a 20-minute call →
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Link href="#projects" className="scroll-smooth">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(255,255,255,0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center h-11 gap-2 bg-transparent text-white border-2 border-white font-semibold py-1 px-3 rounded-md shadow-lg hover:bg-white hover:text-black/90 hover:border-white transition-colors cursor-pointer"
                  >
                    <PlayIcon className="w-5 h-5" />
                    <span>View Projects</span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto space-y-6 px-4 py-12">
        {/* Key Metrics Section */}
        <section className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="lg:col-span-7"
            >
              <Card className="bg-[#1b1d28] rounded-3xl h-full text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
                <CardContent className="p-0 flex flex-col justify-start space-y-10 sm:space-y-12">
                  <div className="flex flex-col space-y-6 sm:space-y-8">
                    <Badge className="rounded-full min-w-28 ring ring-[#8AD5FF] py-2 px-6 text-md font-medium">
                      Fast-Track to Market
                    </Badge>
                    <h3 className="font-semibold mb-6 text-lg sm:text-2xl md:text-3xl leading-snug">
                      Get your SaaS into the hands of users and investors <br />{" "}
                      quickly with rapid prototyping.
                    </h3>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 tracking-wider">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="space-y-3"
                    >
                      <div className="text-3xl sm:text-4xl font-bold tracking-wider">
                        3–4 weeks
                      </div>
                      <div className="text-gray-400 text-sm sm:text-base">
                        Typical MVP timeline
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="space-y-3"
                    >
                      <div className="text-3xl sm:text-4xl font-bold">90%</div>
                      <div className="text-gray-400 text-sm sm:text-base">
                        Collaboration with Startup
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Top Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-[#1644eb] rounded-3xl text-white relative overflow-hidden flex flex-col justify-between p-0">
                  <CardContent className="p-0 relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold leading-snug max-w-96">
                        Completed 20 projects with 100% client satisfaction
                      </h3>
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <Image
                          src={icons.heartCircle}
                          alt="Heart Circle icon | Invent Tomorrow"
                          className="w-10 h-10 sm:w-12 sm:h-12 shrink-0"
                        />
                      </motion.div>
                    </div>
                    {/* Graph + Floating Badge */}
                    <div className="relative mt-2">
                      {/* Graph on the left */}
                      <div className="w-[85%] sm:w-[90%]">
                        <svg
                          viewBox="0 0 519 134"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-auto"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M92.3347 55.2798L-25 123V179H517V2H358.221L300.631 55.2798H92.3347Z"
                            fill="url(#paint0_linear_0_1)"
                          />
                          <path
                            d="M517 4C518.105 4 519 3.10457 519 2C519 0.89543 518.105 0 517 0V2V4ZM349.597 9.97859L348.239 8.51049L349.597 9.97859ZM309.255 47.3012L310.613 48.7693L309.255 47.3012ZM-25 123L-24.0003 124.732L86.3743 61.0291L85.3746 59.2969L84.3748 57.5647L-25.9997 121.268L-25 123ZM100.371 55.2798V57.2798H288.882V55.2798V53.2798H100.371V55.2798ZM309.255 47.3012L310.613 48.7693L350.956 11.4467L349.597 9.97859L348.239 8.51049L307.897 45.8331L309.255 47.3012ZM369.97 2V4H517V2V0H369.97V2ZM349.597 9.97859L350.956 11.4467C356.13 6.65924 362.921 4 369.97 4V2V0C361.913 0 354.153 3.03913 348.239 8.51049L349.597 9.97859ZM288.882 55.2798V57.2798C296.939 57.2798 304.699 54.2407 310.613 48.7693L309.255 47.3012L307.897 45.8331C302.722 50.6206 295.931 53.2798 288.882 53.2798V55.2798ZM85.3746 59.2969L86.3743 61.0291C90.63 58.5729 95.4571 57.2798 100.371 57.2798V55.2798V53.2798C94.7552 53.2798 89.2385 54.7576 84.3748 57.5647L85.3746 59.2969Z"
                            fill="white"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_0_1"
                              x1="320.5"
                              y1="136"
                              x2="320.5"
                              y2="2"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" stopOpacity="0" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0.3"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      {/* Floating Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="absolute top-[-10px] right-[4%] md:right-[3.3%] lg:right-[1.6%] flex flex-col items-center transform -translate-x-1/2"
                      >
                        <span className="size-5 bg-white rounded-full"></span>
                        <Image
                          src={icons.polygon}
                          alt="Polygon icon | Invent Tomorrow"
                          width={40}
                          height={40}
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 -my-1"
                        />
                        <span className="bg-white rounded-full text-[#FF8F6D] px-2 py-0.5 text-xs sm:text-sm">
                          100%
                        </span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Bottom Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-[#8AD5FF] rounded-3xl font-bold flex items-center justify-center p-6 sm:p-8">
                  <CardContent className="p-0 flex items-center justify-center gap-3 sm:gap-4 px-4 py-5">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
                    >
                      100+
                    </motion.span>
                    <p className="text-sm lg:text-lg font-medium text-gray-800">
                      AI integrations deployed
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Holding Most Founders Back Section */}
        <section className="py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-10"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900">
              {`What's Holding Most Founders Back`}
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-6">
            {homeData.founderIssues.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
              >
                <CustomCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Here's How We Help You Win Section */}
        <section className="py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-10"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900">
              {`Here's How We Help You Win`}
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeData.helpYouWin.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
              >
                <CustomCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Technologies Section */}
        <section
          className="max-w-6xl mx-auto py-12 flex flex-col items-center justify-center text-center scroll-mt-28"
          id="services"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center justify-center text-center md:text-left mb-10"
          >
            <h2 className="font-extrabold mb-4 text-3xl text-gray-900">
              Our Technologies
            </h2>
            <p className="text-gray-600 text-lg">
              Advanced AI technologies we specialize in
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {homeData.technologies.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
              >
                <TechCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Development Stack Section */}
        <section
          className="max-w-6xl mx-auto text-center py-12 overflow-hidden scroll-mt-24"
          id="tech-stacks"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-[#244695] text-2xl sm:text-3xl font-semibold mb-4">
              Development Stack
            </h3>
            <p className="text-gray-600 text-lg mb-10">
              Industry-leading frameworks and libraries
            </p>
          </motion.div>

          <div className="relative w-full">
            <Marquee
              gradient={false}
              speed={40}
              pauseOnHover={true}
              autoFill={true}
              className="flex items-center space-x-8"
            >
              {homeData.developmentStack.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex justify-center items-center mx-6 sm:mx-8"
                >
                  <StackItem name={item.name} logo={item.logo} />
                </motion.div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Projects Section */}
        <div className="scroll-mt-24" id="projects">
          <ProjectsSection />
        </div>

        {/* Section 9: Call to Action */}
        {/* --------------------------------------------------------------------------------------------------------------- */}
        <section className="relative scroll-mt-24" id="contact">
          <div className="relative bg-blue-600 text-white rounded-3xl p-6 md:p-12 lg:p-16 overflow-hidden">
            {/* Background circles for visual effect */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/10 rounded-full"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-6">
              <div className="text-center md:text-left py-8 md:mb-0">
                <h2 className=" mb-4 leading-tight">
                  {`Let’s Build an Extraordinary`} <br />
                  Product Together.
                </h2>
                <p className=" text-blue-100 max-w-2xl">
                  Your startup deserves momentum, not delays. <br />
                  Schedule a call today and start building a product ready for
                  users and investors.
                </p>
              </div>

              <div className="flex flex-col  justify-center items-center md:items-start space-y-6 ">
                <motion.div variants={fadeUp}>
                  <Link
                    href="https://calendly.com/abdulhaadi-businesschat/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-white text-blue-600 border-2  border-white   font-semibold py-1 px-5 rounded-md h-12 shadow-lg hover:bg-black/90 hover:text-white hover:border-black/90 transition-colors cursor-pointer"
                    >
                      Get in Touch with Our CEO →
                      {/* <ArrowRight className="w-5 h-5" /> */}
                    </motion.button>
                  </Link>
                </motion.div>
                <div className="flex flex-col md:flex-row items-center space-x-4 text-blue-100 text-md font-bold">
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-zap"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-md size-2 rounded-full bg-white"></span>
                    <span>20-min call</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-md size-2 rounded-full bg-white"></span>
                    <span>Instant insights</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-20 right-0 ">
              <svg
                width="596"
                height="438"
                viewBox="0 0 596 438"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M440 220.473C318.526 220.473 220.053 318.946 220.053 440.42C220.053 561.893 318.526 660.367 440 660.367C561.473 660.367 659.947 561.893 659.947 440.42C659.947 318.946 561.473 220.473 440 220.473ZM0.105469 440.42C0.105469 197.473 197.053 0.525391 440 0.525391C682.947 0.525391 879.894 197.473 879.894 440.42C879.894 683.367 682.947 880.314 440 880.314C197.053 880.314 0.105469 683.367 0.105469 440.42Z"
                  fill="url(#paint0_linear_0_568)"
                  fill-opacity="0.1"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_568"
                    x1="440"
                    y1="0.525391"
                    x2="440"
                    y2="880.314"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
