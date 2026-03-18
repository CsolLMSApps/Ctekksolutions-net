"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/platforms", label: "Platforms" },
    { href: "/education", label: "Education" },
    { href: "/jobs", label: "Careers" },
    { href: "/insights", label: "Insights" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0D0D0D] border-b border-[#E5E7EB] dark:border-[#2D2D2D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="CSOL - C.Tekk Solutions Inc"
                width={120}
                height={48}
                className="h-10 w-auto dark:invert"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex px-4 py-2 bg-[#10A37F] text-white text-sm font-medium rounded-lg hover:bg-[#0D8A6A] transition-colors duration-150"
              >
                Book Consultation
              </Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#2D2D2D] text-[#6B7280] dark:text-[#9CA3AF] transition-colors duration-150"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#2D2D2D] text-[#6B7280] dark:text-[#9CA3AF] transition-colors duration-150"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-16 left-0 right-0 bg-white dark:bg-[#0D0D0D] border-b border-[#E5E7EB] dark:border-[#2D2D2D] z-40 lg:hidden"
          >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white hover:bg-[#F9FAFB] dark:hover:bg-[#2D2D2D] rounded-lg transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full mt-4 px-4 py-2 bg-[#10A37F] text-white text-sm font-medium rounded-lg hover:bg-[#0D8A6A] transition-colors duration-150 text-center"
              >
                Book Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Header;
