"use client";

import { headerNavItems } from "@/lib/data/navigations";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { images } from "../../utils/assets";

// Animation variants
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

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut" as const,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn" as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

// Navigation data structure
const navigationData = {
  logo: {
    src: images.inventTomorrowLogo?.src,
    alt: "Invent Tomorrow Logo",
    height: 80,
    width: 150,
    className: "h-14 w-auto",
  },
  navItems: headerNavItems,
  cta: {
    href: "https://calendly.com/abdulhaadi-businesschat/30min",
    label: "Book a 20-minute call",
    className:
      "bg-white h-11 text-black/90 border-2 border-white font-semibold py-1 px-4 rounded-md shadow-lg hover:bg-black/90 hover:text-white hover:border-black/90 transition-all duration-300",
  },
};

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Check if we're on the home page and handle scroll
  useEffect(() => {
    setIsHomePage(pathname === "/");

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll to section function
  const scrollToSection = (page: string, sectionId: string) => {
    if (pathname === page) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(`${page}?scrollTo=${sectionId}`);
    }
  };

  // Determine header background
  const getHeaderBackground = () => {
    if (scrolled) return "bg-[#1644eb]/95 backdrop-blur-sm shadow-md";
    if (isHomePage)
      return "bg-gradient-to-b from-black/30 to-transparent backdrop-blur-[2px]";
    return "bg-[#1644eb]/80 backdrop-blur-sm";
  };

  // Render navigation item
  const renderNavItem = (
    item: (typeof navigationData.navItems)[0],
    index: number
  ) => {
    const isActive = activeDropdown === item.label;

    if (item.isDropdown && item.dropdownItems) {
      return (
        <li
          key={`${item.label}-${index}`}
          className="relative"
          ref={dropdownRef}
        >
          <button
            className={`text-sm font-medium transition-all duration-300 flex items-center gap-1 relative group outline-none ${
              !isHomePage && !scrolled ? "text-white drop-shadow-md" : ""
            } ${isActive ? "text-gray-200" : ""}`}
            onClick={() => setActiveDropdown(isActive ? null : item.label)}
            onMouseEnter={() => setActiveDropdown(item.label)}
            data-testid={`button-${item.label
              .toLowerCase()
              .replace(/\s+/g, "-")}-menu`}
          >
            {item.label}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isActive ? "rotate-180" : ""
              }`}
            />
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                className="absolute top-full left-0 mt-2 min-w-[280px] bg-[#1644eb]/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-2">
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => {
                    const Icon = dropdownItem.icon;
                    return (
                      <motion.div
                        key={dropdownItem.href}
                        variants={itemVariants}
                        transition={{ delay: dropdownIndex * 0.05 }}
                      >
                        <Link
                          href={dropdownItem.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm">
                              {dropdownItem.label}
                            </h4>
                            <p className="text-white/60 text-xs mt-0.5">
                              {dropdownItem.description}
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
        </li>
      );
    }

    return (
      <li key={`${item.label}-${index}`}>
        <Link
          href={item.href}
          className={`text-white/95 transition-colors hover:text-gray-200 relative group ${
            !isHomePage && !scrolled ? "text-white drop-shadow-md" : ""
          }`}
          onClick={() => scrollToSection(item.href, item.href.split("#")[1])}
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${getHeaderBackground()}`}
    >
      <nav className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={navigationData.logo.src}
            alt={navigationData.logo.alt}
            height={navigationData.logo.height}
            width={navigationData.logo.width}
            className={navigationData.logo.className}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-7 text-white font-medium">
          {navigationData.navItems.map(renderNavItem)}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href={navigationData.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={navigationData.cta.className}
            >
              {navigationData.cta.label}
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
              {navigationData.navItems.map((item, index) => {
                if (item.isDropdown && item.dropdownItems) {
                  return (
                    <li
                      key={`${item.label}-mobile-${index}`}
                      className="w-full px-4"
                    >
                      <div className="border-t border-white/20 pt-4">
                        <h4 className="text-sm font-medium mb-3 text-white/80">
                          {item.label}
                        </h4>
                        <div className="space-y-2">
                          {item.dropdownItems.map((dropdownItem) => {
                            const Icon = dropdownItem.icon;
                            return (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 py-2 text-white/80 hover:text-gray-200 transition-colors"
                              >
                                <Icon className="w-4 h-4" />
                                <span className="text-sm">
                                  {dropdownItem.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={`${item.label}-mobile-${index}`}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-white/80 hover:text-gray-200 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li>
                <Link
                  href={navigationData.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black/90 border-2 border-white font-semibold py-1 px-3 rounded-md shadow-lg hover:bg-black/90 hover:text-white hover:border-black/90 transition-all duration-300"
                  >
                    {navigationData.cta.label}
                  </motion.button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
