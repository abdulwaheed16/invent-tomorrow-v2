import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface BookCallButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: React.ReactNode;
}
export default function BookCallButton({
  className,
  children,
  ...linkProps
}: BookCallButtonProps) {
  const { href, target, rel } = linkProps;
  return (
    <Link
      href={href || "https://calendly.com/inventtomorrow/20min"}
      target={target || "_blank"}
      rel={rel || "noopener noreferrer"}
      className={cn(className, "")}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "flex items-center h-11 gap-2 bg-white text-black/90 border-2  border-white  font-semibold py-1 px-3 rounded-md shadow-lg hover:bg-black/90 hover:text-white hover:border-black/90 transition-colors cursor-pointer",
          className
        )}
      >
        {children ? children : "Book a 20-minute call →"}
        {/* <ArrowRight className="w-5 h-5" /> */}
      </motion.button>
    </Link>
  );
}
