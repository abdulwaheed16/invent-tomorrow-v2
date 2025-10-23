import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, Calendar, Play, Shield, TrendingUp, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bot size={16} />
              <span>AI-Powered Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Intelligent AI Agents for
              <span className="text-primary block">Business Automation</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with cutting-edge AI agents
              that automate complex workflows, enhance customer interactions,
              and drive intelligent decision-making across your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="default" size="lg" className="min-w-[200px]">
                <Calendar size={20} className="mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px]">
                <Play size={20} className="mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield size={20} className="text-success" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap size={20} className="text-warning" />
                <span>24/7 Automation</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp size={20} className="text-primary" />
                <span>ROI Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
