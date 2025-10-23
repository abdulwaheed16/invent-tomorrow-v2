"use client";

import { headerNavItems } from "@/lib/data/navigations";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Code, Menu, Shield, Smartphone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { images } from "../../utils/assets";

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeInOut" as const },
  },
};

// const dropdownVariants = {
//   hidden: {
//     opacity: 0,
//     y: -10,
//     scale: 0.95,
//     transition: {
//       duration: 0.2,
//       ease: "easeOut" as const,
//     },
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.25,
//       ease: "easeOut" as const,
//       staggerChildren: 0.05,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -10,
//     scale: 0.95,
//     transition: {
//       duration: 0.2,
//       ease: "easeIn" as const,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: -10 },
//   visible: { opacity: 1, x: 0 },
// };

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  console.log({ isDropdownOpen });

  useEffect(() => {
    // Check if we're on the home page
    setIsHomePage(pathname === "/");

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (page: string, sectionId: string) => {
    if (pathname === page) {
      // same page — just scroll
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // navigate to other page with query param
      router.push(`${page}?scrollTo=${sectionId}`);
    }
  };

  const services = [
    {
      href: "/services/web-app-development",
      icon: Code,
      label: "Web Development",
      description: "Custom web applications",
    },
    {
      href: "/services/ai-agents",
      icon: Brain,
      label: "AI Agents",
      description: "Intelligent automation",
    },
    {
      href: "/services/mobile-app-development",
      icon: Smartphone,
      label: "Mobile Apps",
      description: "iOS & Android solutions",
    },
    {
      href: "/services/tech-consultation",
      icon: Shield,
      label: "Tech Consultation",
      description: "Expert guidance",
    },
  ];

  // Determine header background based on page and scroll position
  const getHeaderBackground = () => {
    if (scrolled) {
      return "bg-[#1644eb]/95 backdrop-blur-sm shadow-md";
    }
    if (isHomePage) {
      return "bg-gradient-to-b from-black/30 to-transparent backdrop-blur-[2px]";
    }
    return "bg-[#1644eb]/80 backdrop-blur-sm";
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${getHeaderBackground()}`}
    >
      <nav className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={images.inventTomorrowLogo?.src}
            alt="Invent Tomorrow Logo"
            height={80}
            width={150}
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-7 text-white font-medium">
          {headerNavItems.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              <Link
                href={item.href}
                className={`text-white/95 transition-colors hover:text-gray-200 relative group ${
                  !isHomePage && !scrolled ? "text-white drop-shadow-md" : ""
                }`}
                onClick={() =>
                  scrollToSection(item.href, item.href.split("#")[1])
                }
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          {/* <li className="relative" ref={dropdownRef}>
            <button
              className={`text-sm font-medium  transition-all duration-300 flex items-center gap-1 relative group outline-none ${
                !isHomePage && !scrolled ? "text-white drop-shadow-md" : ""
              } ${isDropdownOpen ? "text-gray-200" : ""}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setIsDropdownOpen(true)}
              data-testid="button-services-menu"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                  isDropdownOpen ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>

      
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 mt-2 min-w-[280px] bg-[#1644eb]/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="p-2">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <motion.div
                          key={service.href}
                          variants={itemVariants}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={service.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-medium text-sm">
                                {service.label}
                              </h4>
                              <p className="text-white/60 text-xs mt-0.5">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li> */}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="https://calendly.com/abdulhaadi-businesschat/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white h-11 text-black/90 border-2 border-white font-semibold py-1 px-4 rounded-md shadow-lg hover:bg-black/90 hover:text-white hover:border-black/90 transition-all duration-300"
            >
              Book a 20-minute call
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-[#1644eb]/90 backdrop-blur-sm text-white shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-3 py-4 text-lg font-medium">
              {headerNavItems.map((item, index) => (
                <li key={`${item.label}-mobile-${index}`}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-white/80 hover:text-gray-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Mobile Services */}
              <li className="w-full px-4">
                <div className="border-t border-white/20 pt-4">
                  <h4 className="text-sm font-medium mb-3 text-white/80">
                    Services
                  </h4>
                  <div className="space-y-2">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 py-2 text-white/80 hover:text-gray-200 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-sm">{service.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </li>

              {/* <li>
                <Link
                  href="https://calendly.com/abdulhaadi-businesschat/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black/90 border-2 border-white font-semibold py-1 px-3 rounded-md shadow-lg hover:bg-black/90 hover:text-white hover:border-black/90 transition-all duration-300"
                  >
                    Book a 20-minute call
                  </motion.button>
                </Link>
              </li> */}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
