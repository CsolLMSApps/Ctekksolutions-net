"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
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
            <Image
              src="/logo.svg"
              alt="CSOL - C.Tekk Solutions Inc"
              width={100}
              height={40}
              className="h-9 w-auto dark:invert"
            />
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
              Empowering careers and enterprises through AI talent, cloud consulting, and workforce development platforms.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/c-tekk-solutions"
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
              <Link href="/services" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                AI Talent &amp; Consulting
              </Link>
              <Link href="/services" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                Cloud &amp; DevOps
              </Link>
              <Link href="/services" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                Staffing &amp; Recruiting
              </Link>
              <Link href="/education" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                AI Training &amp; Upskilling
              </Link>
              <Link href="/services" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
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
              <a href="https://www.dfwitjobs.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                DFWITJOBS
              </a>
              <a href="https://www.optplanet.net" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                OPTPlanet
              </a>
              <a href="https://optplanet.tech" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                OPTPlanet.tech
              </a>
              <a href="https://www.ailearnhub.io" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                AI Learn Hub
              </a>
              <a href="https://benzaitenlms.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
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
              <Link href="/about" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                About Us
              </Link>
              <Link href="/jobs" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                Careers
              </Link>
              <Link href="/insights" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                Insights
              </Link>
              <Link href="/contact" className="block text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                Contact
              </Link>
            </nav>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] dark:border-[#2D2D2D] my-8" />

        {/* Office Locations */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Dallas HQ */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[#111] dark:text-white text-sm">Dallas, TX — Headquarters</h4>
            <div className="space-y-1.5">
              <div className="flex items-start gap-2 text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>14800 Quorum Drive, Suite 285, Dallas, TX 75254</span>
              </div>
              <a href="mailto:info@ctekksolutions.net" className="flex items-center gap-2 text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                <Mail size={16} className="flex-shrink-0" />
                info@ctekksolutions.net
              </a>
              <a href="tel:408-471-7753" className="flex items-center gap-2 text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                <Phone size={16} className="flex-shrink-0" />
                408-471-7753
              </a>
            </div>
          </div>

          {/* Mysore India */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[#111] dark:text-white text-sm">Mysuru, India — Offshore Delivery</h4>
            <div className="space-y-1.5">
              <div className="flex items-start gap-2 text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>2nd Floor, 442, Jayachamarajendra Rd, Vijayanagar 1st Stage, Mysuru, Karnataka 570017, India</span>
              </div>
              <a href="tel:+917676666844" className="flex items-center gap-2 text-sm text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white transition-colors duration-150">
                <Phone size={16} className="flex-shrink-0" />
                +91 76766 66844
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E5E7EB] dark:border-[#2D2D2D] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9CA3AF] dark:text-[#6B7280]">
            © 2010–{new Date().getFullYear()} C.Tekk Solutions Inc. All rights reserved.
          </p>
          <p className="text-xs text-[#9CA3AF] dark:text-[#6B7280]">
            Dallas, TX · Mysuru, India
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
