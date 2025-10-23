import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Calculator,
  Calendar,
  Check,
  CheckCircle,
  Info,
} from "lucide-react";
import { useState } from "react";

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number | string;
  annualPrice: number | string;
  setup?: number | string;
  features: string[];
  limitations?: string[];
  idealFor: string;
  popular?: boolean;
}

interface AddOn {
  name: string;
  description: string;
  price: number | string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface PricingSectionProps {
  pricingTiers?: PricingTier[];
  addOns?: AddOn[];
}
const PricingSection = ({ pricingTiers, addOns }: PricingSectionProps) => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const formatPrice = (price: number) => {
    if (typeof price === "string") return price;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    })?.format(price);
  };

  return (
    <section className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect AI agent solution for your business needs. All
              plans include implementation support, training, and ongoing
              maintenance.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-muted rounded-lg p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  billingCycle === "monthly"
                    ? "bg-background text-text-primary shadow-sm"
                    : "text-muted-foreground hover:text-text-primary"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  billingCycle === "annual"
                    ? "bg-background text-text-primary shadow-sm"
                    : "text-muted-foreground hover:text-text-primary"
                }`}
              >
                Annual
                <span className="ml-1 text-xs text-success">Save 17%</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingTiers?.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`morphic-card p-8 relative ${
                tier?.popular ? "ring-2 ring-primary shadow-lg scale-105" : ""
              }`}
            >
              {tier?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {tier?.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {tier?.description}
                </p>

                <div className="mb-4">
                  <div className="text-4xl font-bold text-text-primary">
                    {formatPrice(
                      billingCycle === "monthly"
                        ? (tier?.monthlyPrice as number)
                        : (tier?.annualPrice as number)
                    )}
                  </div>
                  {typeof tier?.monthlyPrice === "number" && (
                    <div className="text-sm text-muted-foreground">
                      per month,{" "}
                      {billingCycle === "annual"
                        ? "billed annually"
                        : "billed monthly"}
                    </div>
                  )}
                </div>

                {typeof tier?.setup === "number" && (
                  <div className="text-sm text-muted-foreground">
                    One-time setup: {formatPrice(tier?.setup)}
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-text-primary flex items-center">
                  <CheckCircle size={16} className="mr-2 text-success" />
                  {`What's Included`}
                </h4>
                <ul className="space-y-3">
                  {tier?.features?.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <Check
                        size={14}
                        className="mr-2 mt-0.5 text-success flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {(tier?.limitations?.length ?? 0) > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-text-primary flex items-center mb-3">
                      <Info size={16} className="mr-2 text-warning" />
                      Considerations
                    </h4>
                    <ul className="space-y-2">
                      {tier?.limitations?.map((limitation, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <AlertCircle
                            size={14}
                            className="mr-2 mt-0.5 text-warning flex-shrink-0"
                          />
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6 p-4 bg-surface/50 rounded-lg">
                  <h4 className="font-semibold text-text-primary text-sm mb-2">
                    Ideal For:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {tier?.idealFor}
                  </p>
                </div>
              </div>

              <Button
                variant={tier?.popular ? "default" : "outline"}
                className="w-full size-lg"
              >
                {tier?.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Optional Add-ons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns?.map((addon, index) => (
              <div
                key={index}
                className="morphic-card p-6 flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  {/* Use the icon component directly from the addon object */}
                  <addon.icon size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary">
                    {addon?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {addon?.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-text-primary">
                    {formatPrice(addon?.price as number)}
                  </div>
                  <div className="text-xs text-muted-foreground">per month</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {`Every business is unique. Let's discuss your specific requirements
              and create a tailored AI agent solution that fits your exact needs
              and budget.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                <Calendar size={20} className="mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                <Calculator size={20} className="mr-2" />
                Get Custom Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
