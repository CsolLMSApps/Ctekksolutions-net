"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="CSOL - C.Tekk Solutions Inc"
                width={180}
                height={56}
                className="h-10 w-auto invert"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-[#10A37F] transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex px-6 py-2 bg-[#10A37F] text-white text-sm font-medium rounded-md hover:bg-[#0d8c6a] transition-colors duration-150"
              >
                Book Consultation
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-[#10A37F] transition-colors duration-150"
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
            className="fixed top-16 left-0 right-0 bg-[#0A0F1C] border-b border-white/10 z-40 lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#10A37F] hover:bg-white/5 rounded-lg transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full mt-4 px-6 py-2 bg-[#10A37F] text-white text-sm font-medium rounded-md hover:bg-[#0d8c6a] transition-colors duration-150 text-center"
              >
                Book Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Header;
