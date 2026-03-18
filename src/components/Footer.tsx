"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Lock } from "lucide-react";
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

      <footer className="bg-[#0A0F1C] border-t border-white/10 text-gray-400">
        <motion.div
          className="max-w-7xl mx-auto px-6 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* 4-Column Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          >
            {/* Column 1: Logo + Tagline + Social */}
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">CSOL</h3>
                <p className="text-xs text-gray-500 mt-1">C.Tekk Solutions Inc</p>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Empowering careers and enterprises through AI talent, cloud consulting, and workforce development.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/c-tekk-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#10A37F] transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/ctekksolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#10A37F] transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="mailto:info@ctekksolutions.net"
                  className="text-gray-500 hover:text-[#10A37F] transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Services</h4>
              <nav className="space-y-3">
                <Link
                  href="/services"
                  className="block text-sm text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  AI Talent & Consulting
                </Link>
                <Link
                  href="/services"
                  className="block text-sm text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  Cloud & DevOps
                </Link>
                <Link
                  href="/services"
                  className="block text-sm text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  Staffing & Recruiting
                </Link>
                <Link
                  href="/services"
                  className="block text-sm text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  AI Training
                </Link>
                <Link
                  href="/services"
                  className="block text-sm text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  Offshore Teams
                </Link>
                <a
                  href="https://optplanet.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  OPTPlanet Online
                </a>
              </nav>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
              <nav className="space-y-3">
                <Link
                  href="/about"
                  className="block text-sm text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link
                  href="/jobs"
                  className="block text-sm text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  Careers
                </Link>
                <Link
                  href="/insights"
                  className="block text-sm text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  Insights
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  Contact
                </Link>
                <Link
                  href="/privacy"
                  className="block text-sm text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
              <nav className="space-y-4">
                {/* Dallas */}
                <div>
                  <h5 className="text-xs font-semibold text-gray-300 mb-2">Dallas TX</h5>
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin size={14} className="flex-shrink-0 mt-0.5 text-gray-600" />
                    <span className="text-xs text-gray-400">
                      14800 Quorum Drive, Suite 285, Dallas, TX 75254
                    </span>
                  </div>
                  <a
                    href="tel:408-471-7753"
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                  >
                    <Phone size={12} className="flex-shrink-0" />
                    408-471-7753
                  </a>
                </div>

                {/* Mysuru */}
                <div>
                  <h5 className="text-xs font-semibold text-gray-300 mb-2">Mysuru India</h5>
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin size={14} className="flex-shrink-0 mt-0.5 text-gray-600" />
                    <span className="text-xs text-gray-400">
                      2nd Floor, 442, Jayachamarajendra Rd, Vijayanagar 1st Stage, Mysuru, Karnataka 570017, India
                    </span>
                  </div>
                  <a
                    href="tel:+917676666844"
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                  >
                    <Phone size={12} className="flex-shrink-0" />
                    +91 76766 66844
                  </a>
                </div>

                {/* Email */}
                <a
                  href="mailto:info@ctekksolutions.net"
                  className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#10A37F] transition-colors duration-200"
                >
                  <Mail size={12} className="flex-shrink-0" />
                  info@ctekksolutions.net
                </a>
              </nav>
            </div>
          </motion.div>

          {/* Compliance Badges Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center items-center mb-8 py-4 border-t border-white/10"
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
            className="border-t border-white/10 pt-8 text-center"
          >
            <p className="text-xs text-gray-500">
              © 2010–{year} C.Tekk Solutions Inc. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
}
