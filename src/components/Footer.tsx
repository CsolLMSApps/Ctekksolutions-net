"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setTimeout(() => {
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-[#F9FAFB] dark:bg-[#111] border-t border-[#E5E7EB] dark:border-[#2D2D2D]">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Tagline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-[#111] dark:text-white">
              CTekk Solutions
            </h3>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              Transforming tech careers through talent, consulting, and innovation.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com/company/ctekk-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#10A37F] dark:hover:text-[#10A37F] transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/ctekksolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#10A37F] dark:hover:text-[#10A37F] transition-colors duration-150"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-[#111] dark:text-white text-sm">
              Services
            </h4>
            <nav className="space-y-2">
              <Link
                href="/services#ai-talent"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                AI Talent
              </Link>
              <Link
                href="/services#cloud-consulting"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                Cloud Consulting
              </Link>
              <Link
                href="/services#staffing"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                Staffing
              </Link>
              <Link
                href="/services#offshore-teams"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                Offshore Teams
              </Link>
            </nav>
          </motion.div>

          {/* Platforms */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-[#111] dark:text-white text-sm">
              Platforms
            </h4>
            <nav className="space-y-2">
              <a
                href="https://www.dfwitjobs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                DFWITJOBS
              </a>
              <a
                href="https://www.optplanet.net"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                OPTPlanet
              </a>
              <a
                href="https://www.ailearnhub.io"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                AI Learn Hub
              </a>
              <a
                href="https://benzaitenlms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                Benzaiten LMS
              </a>
            </nav>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-[#111] dark:text-white text-sm">
              Company
            </h4>
            <nav className="space-y-2">
              <Link
                href="/about"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                Careers
              </Link>
              <Link
                href="/insights"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] dark:border-[#2D2D2D] my-8" />

        {/* Contact & Newsletter */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          {/* Contact Info */}
          <div className="space-y-3">
            <a
              href="mailto:info@ctekksolutions.net"
              className="flex items-center gap-2 text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
            >
              <Mail size={18} className="flex-shrink-0" />
              info@ctekksolutions.net
            </a>
            <a
              href="tel:408-471-7753"
              className="flex items-center gap-2 text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150"
            >
              <Phone size={18} className="flex-shrink-0" />
              408-471-7753
            </a>
            <div className="flex items-start gap-2 text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              <MapPin size={18} className="flex-shrink-0 mt-0.5" />
              <span>
                14800 Quorum Drive, Suite 285
                <br />
                Dallas, TX 75254
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-[#111] dark:text-white">
              Newsletter
            </label>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 text-sm bg-white dark:bg-[#2D2D2D] text-[#111] dark:text-white placeholder-[#9CA3AF] border border-[#E5E7EB] dark:border-[#3D3D3D] rounded-lg focus:outline-none focus:border-[#10A37F] transition-colors duration-150"
                required
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-4 py-2 text-sm font-medium bg-[#10A37F] text-white rounded-lg hover:bg-[#0D8A6A] transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubscribing ? "..." : "Subscribe"}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E5E7EB] dark:border-[#2D2D2D] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9CA3AF] dark:text-[#6B7280]">
            © 2010-2026 CTekk Solutions. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
