import { motion, useInView } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { useRef } from "react";

interface RelatedService {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  heading?: string;
}

export default function RelatedServices({
  services,
  heading = "Related Services",
}: RelatedServicesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {heading && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-semibold mb-12 text-center"
          >
            {heading}
          </motion.h2>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-card border border-card-border rounded-md p-6 h-60 flex flex-col justify-between hover-elevate cursor-pointer group"
                data-testid={`related-service-${index}`}
                onClick={() => console.log(`Navigate to ${service.title}`)}
              >
                <div>
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
