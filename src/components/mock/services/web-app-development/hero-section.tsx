import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  FileText,
  Globe,
  Shield,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-secondary/20 to-accent/5 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Globe size={24} />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Web Development Excellence
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight">
                Build Powerful
                <span className="text-primary block">Web Applications</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Transform your business with modern, scalable web applications
                built using cutting-edge technologies. From concept to
                deployment, we deliver exceptional digital experiences.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, text: "Lightning Fast" },
                { icon: Shield, text: "Secure & Reliable" },
                { icon: Smartphone, text: "Mobile Responsive" },
                { icon: TrendingUp, text: "Scalable Architecture" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <Calendar size={20} className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                <FileText size={20} className="mr-2 h-4 w-4" />
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="flex items-center space-x-8 pt-4 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Support Available
                </div>
              </div>
            </div> */}
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1566924534124-f009c8277a1c"
                alt="Modern web development workspace showing multiple monitors displaying code and web applications with developer working on React project"
                width={800}
                height={500}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-border"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle size={16} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      Deploy Success
                    </div>
                    <div className="text-xs text-muted-foreground">
                      99.9% Uptime
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-border"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">
                      Performance
                    </div>
                    <div className="text-xs text-muted-foreground">
                      95+ Lighthouse Score
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-secondary/20 to-primary/5 rounded-2xl transform -rotate-2 -z-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
