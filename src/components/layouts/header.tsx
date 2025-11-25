"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { images } from "../../lib/utils/assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Landing page sections
  const navSections = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "ROI", href: "#roi" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-blue-600 shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={images.inventTomorrowLogo?.src}
            alt="Invent Tomorrow Logo"
            height={80}
            width={150}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-8 text-white font-medium text-base">
          {navSections.map((section) => (
            <li key={section.label}>
              <button
                onClick={() => scrollToSection(section.href)}
                className="cursor-pointer hover:text-blue-200 transition-colors relative group"
              >
                {section.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="https://calendly.com/abdulhaadi-businesschat/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-semibold text-base py-2.5 px-7 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer"
            >
              Book Free Audit
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-blue-700 text-white"
        >
          <div className="container mx-auto px-6 py-4">
            <ul className="space-y-4">
              {navSections.map((section) => (
                <li key={section.label}>
                  <button
                    onClick={() => scrollToSection(section.href)}
                    className="block w-full text-left py-2 text-base hover:text-blue-200 transition-colors cursor-pointer"
                  >
                    {section.label}
                  </button>
                </li>
              ))}
              <li className="pt-4 border-t border-blue-500">
                <Link
                  href="https://calendly.com/abdulhaadi-businesschat/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer"
                >
                  <button className="w-full bg-white text-blue-600 font-semibold text-base py-3 px-6 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                    Book Free Audit
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
