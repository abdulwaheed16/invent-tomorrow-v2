import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Shield,
  RefreshCw,
  Clock,
  ArrowRight,
  Calendar,
  Calculator,
} from 'lucide-react';
import { Button } from "@/components/ui/button";

// --- Data Types ---
type PricingPlan = {
  name: string;
  description: string;
  price: string;
  duration: string;
  popular: boolean;
  features: string[];
  technologies: string[];
  deliveryTime: string;
  revisions: string;
  support: string;
};

type PricingPlans = {
  project: PricingPlan[];
  hourly: PricingPlan[];
};

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'project' | 'hourly'>('project');

  const pricingPlans: PricingPlans = {
    project: [
      {
        name: 'Startup Package',
        description: 'Perfect for small businesses and startups looking to establish their online presence',
        price: '$15,000',
        duration: '2-3 months',
        popular: false,
        features: [
          'Custom React Frontend (5-8 pages)',
          'Responsive Design & Mobile Optimization',
          // ... other features
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS/Vercel'],
        deliveryTime: '8-12 weeks',
        revisions: '3 rounds',
        support: '3 months'
      },
      // ... other plans
    ],
    hourly: [
      // ... hourly plans
    ]
  };

  const currentPlans = pricingPlans[billingCycle];

  return (
    <section className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect package for your web development needs. All packages include 
            source code, documentation, and post-launch support.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-white rounded-xl p-1 shadow-sm border border-border">
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === 'project' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-text-primary'
              }`}
            >
              Project-Based
            </button>
            <button
              onClick={() => setBillingCycle('hourly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === 'hourly' ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-text-primary'
              }`}
            >
              Hourly Rates
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentPlans?.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative morphic-card p-8 ${
                plan.popular
                  ? 'ring-2 ring-primary shadow-xl scale-105'
                  : 'hover:shadow-lg'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {billingCycle === 'project' ? '' : plan.duration}
                  </span>
                </div>
                {billingCycle === 'project' && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.duration} timeline
                  </p>
                )}
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle
                        size={16}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Plan Details */}
              <div className="mb-8 space-y-4">
                <div className="bg-surface/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery Time:</span>
                    <span className="font-medium text-text-primary">{plan.deliveryTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Revisions:</span>
                    <span className="font-medium text-text-primary">{plan.revisions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Support:</span>
                    <span className="font-medium text-text-primary">{plan.support}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium text-text-primary mb-2">
                    Technologies Included
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {plan.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? 'default' : 'outline'}
                className="w-full"
                size="lg"
              >
                {billingCycle === 'project' ? 'Start Project' : 'Get Started'}
                <ArrowRight size={16} className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project is unique. Contact us for a personalized quote based on your 
              specific requirements, timeline, and budget considerations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Calendar size={20} className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                <Calculator size={20} className="mr-2 h-5 w-5" />
                Get Custom Quote
              </Button>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-green-500" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw size={16} className="text-blue-500" />
              <span>Unlimited Revisions (Enterprise)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-orange-500" />
              <span>On-Time Delivery Promise</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;