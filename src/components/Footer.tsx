"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Shield, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const year = new Date().getFullYear();
  const complianceBadges = [
    { icon: Lock, label: "256-bit SSL Encrypted" },
    { label: "GDPR Compliant" },
    { label: "FTC Compliant" },
    { label: "29 CFR § 1625.2" },
  ];

  return (
    <>
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-[#059669] via-[#10A37F] to-[#34D399]" />

      <footer className="bg-[#0A0F1C] text-gray-400">
        <motion.div
          className="max-w-6xl mx-auto px-6 py-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Top Section — Logo + Tagline + Social */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-start gap-12 mb-10"
          >
            {/* Left: Logo + Brand */}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">CSOL</h3>
                <p className="text-xs text-gray-500 mt-1">C.Tekk Solutions Inc</p>
              </div>
              <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                Empowering careers and enterprises through AI talent, cloud consulting, and workforce development.
              </p>
            </div>

            {/* Right: Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/c-tekk-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#10A37F] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/ctekksolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#10A37F] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Link Columns */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10"
          >
            {/* Services */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Services</h4>
              <nav className="space-y-3">
                <Link
                  href="/services"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  AI Talent & Consulting
                </Link>
                <Link
                  href="/services"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Cloud & DevOps
                </Link>
                <Link
                  href="/services"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Staffing & Recruiting
                </Link>
                <Link
                  href="/services"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  AI Training & Upskilling
                </Link>
                <Link
                  href="/services"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Offshore Teams
                </Link>
              </nav>
            </div>

            {/* Platforms */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Platforms</h4>
              <nav className="space-y-3">
                <a
                  href="https://www.dfwitjobs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  DFWITJOBS
                </a>
                <a
                  href="https://www.optplanet.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  OPTPlanet
                </a>
                <a
                  href="https://optplanet.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  OPTPlanet.tech
                </a>
                <a
                  href="https://www.ailearnhub.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  AI Learn Hub
                </a>
                <a
                  href="https://benzaitenlms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Benzaiten LMS
                </a>
              </nav>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
              <nav className="space-y-3">
                <Link
                  href="/about"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link
                  href="/jobs"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Careers
                </Link>
                <Link
                  href="/insights"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Insights
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
                <Link
                  href="/education"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Education
                </Link>
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Legal</h4>
              <nav className="space-y-3">
                <Link
                  href="/privacy"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/disclaimer"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Disclaimer
                </Link>
                <Link
                  href="/cookies"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/accessibility"
                  className="block text-sm text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Accessibility
                </Link>
              </nav>
            </div>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-t border-white/5 pt-8"
          >
            {/* Dallas HQ */}
            <div>
              <h4 className="font-semibold text-white text-xs mb-4">DALLAS HQ</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5 text-gray-600" />
                  <span className="text-xs text-gray-500">
                    14800 Quorum Drive, Suite 285, Dallas, TX 75254
                  </span>
                </div>
                <a
                  href="mailto:info@ctekksolutions.net"
                  className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#10A37F] transition-colors duration-200"
                >
                  <Mail size={14} className="flex-shrink-0 text-gray-600" />
                  info@ctekksolutions.net
                </a>
                <a
                  href="tel:408-471-7753"
                  className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#10A37F] transition-colors duration-200"
                >
                  <Phone size={14} className="flex-shrink-0 text-gray-600" />
                  408-471-7753
                </a>
              </div>
            </div>

            {/* Mysuru, India */}
            <div>
              <h4 className="font-semibold text-white text-xs mb-4">MYSURU, INDIA</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5 text-gray-600" />
                  <span className="text-xs text-gray-500">
                    2nd Floor, 442, Jayachamarajendra Rd, Vijayanagar 1st Stage, Mysuru, Karnataka 570017, India
                  </span>
                </div>
                <a
                  href="tel:+917676666844"
                  className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#10A37F] transition-colors duration-200"
                >
                  <Phone size={14} className="flex-shrink-0 text-gray-600" />
                  +91 76766 66844
                </a>
              </div>
            </div>
          </motion.div>

          {/* Compliance Badges Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center items-center mb-8 py-4 border-t border-white/5"
          >
            {complianceBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 text-[10px] text-gray-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 hover:border-white/10 transition-colors duration-200"
              >
                {badge.icon && <badge.icon size={12} />}
                {badge.label}
              </div>
            ))}
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-xs text-gray-600">
              © 2010–{year} C.Tekk Solutions Inc. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">Dallas, TX · Mysuru, India</p>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
}
