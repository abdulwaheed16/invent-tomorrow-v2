import { motion } from "framer-motion";
import Link from "next/link";

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


interface CallToActionProps {
    
}
export default function CallToAction() {
  return (
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
              Schedule a call today and start building a product ready for users
              and investors.
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
  );
}
