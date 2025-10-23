import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  MessageCircle,
  Play,
  Rocket,
  Zap,
} from "lucide-react";

const MobileHeroSection = () => {
  // const heroStats = [
  //   { number: "150+", label: "Apps Developed", icon: Smartphone },
  //   { number: "98%", label: "App Store Approval", icon: CheckCircle },
  //   { number: "4.8★", label: "Average Rating", icon: Star },
  //   { number: "2M+", label: "Total Downloads", icon: Download },
  // ];

  return (
    <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Zap size={16} />
                <span>Mobile Excellence</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight">
                Native & Cross-Platform
                <span className="text-primary block">Mobile Solutions</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Transform your ideas into powerful mobile applications with our
                expert development team. We create stunning iOS and Android apps
                that deliver exceptional user experiences and drive business
                growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="group">
                <MessageCircle size={20} className="mr-2" />
                Start Your Project
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button variant="outline" size="lg">
                <Play size={20} className="mr-2" />
                View Portfolio
              </Button>
            </div>

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {heroStats?.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-text-primary">
                    {stat?.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat?.label}
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>

              {/* Device Mockups */}
              <div className="relative z-10 flex items-center justify-center space-x-4">
                {/* iPhone Mockup */}
                <div className="relative">
                  <div className="w-48 h-96 bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full"></div>
                      <div className="pt-12 px-4 space-y-4">
                        <div className="h-8 bg-primary rounded-lg"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-16 bg-accent/20 rounded-lg"></div>
                          <div className="h-16 bg-secondary/30 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Android Mockup */}
                <div className="relative -ml-8">
                  <div className="w-44 h-80 bg-gray-800 rounded-[2rem] p-2 shadow-xl">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <div className="pt-8 px-3 space-y-3">
                        <div className="h-6 bg-accent rounded"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-12 bg-primary/10 rounded flex items-center px-2">
                            <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                          </div>
                          <div className="h-12 bg-secondary/10 rounded flex items-center px-2">
                            <div className="w-8 h-8 bg-secondary/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center"
              >
                <Code size={24} className="text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center"
              >
                <Rocket size={28} className="text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;
