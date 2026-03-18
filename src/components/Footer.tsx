'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    // Simulate subscription
    setTimeout(() => {
      setEmail('');
      setIsSubscribing(false);
    }, 1000);
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 py-16">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-blue-900/20 via-transparent to-slate-900/20 pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main footer content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Company</h3>
              <nav className="space-y-3">
                <Link href="/about" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  About
                </Link>
                <Link href="/services" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
                <Link href="/platforms" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Platforms
                </Link>
                <Link href="/careers" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </nav>
            </div>

            {/* Solutions Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Solutions</h3>
              <nav className="space-y-3">
                <Link href="/solutions/ai-talent" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  AI Talent
                </Link>
                <Link href="/solutions/cloud-consulting" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Cloud Consulting
                </Link>
                <Link href="/solutions/staffing" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Staffing
                </Link>
                <Link href="/solutions/offshore-teams" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  Offshore Teams
                </Link>
              </nav>
            </div>

            {/* Platforms Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Platforms</h3>
              <nav className="space-y-3">
                <a
                  href="https://www.dfwitjobs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
                >
                  DFWITJOBS
                </a>
                <a
                  href="https://www.optplanet.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
                >
                  OPTPlanet
                </a>
                <a
                  href="https://www.ailearnhub.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
                >
                  AI Learn Hub
                </a>
                <a
                  href="https://benzaitenlms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Benzaiten LMS
                </a>
              </nav>
            </div>

            {/* Connect Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Connect</h3>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:info@ctekksolutions.net"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <Mail size={18} />
                  <span>info@ctekksolutions.net</span>
                </a>
                <a
                  href="tel:408-471-7753"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <Phone size={18} />
                  <span>408-471-7753</span>
                </a>
                <div className="flex items-start gap-2 text-slate-300">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    14800 Quorum Drive<br />
                    Suite 285<br />
                    Dallas, TX 75254
                  </span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <label htmlFor="newsletter-email" className="block text-sm font-semibold text-white">
                  Newsletter
                </label>
                <div className="flex">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 bg-slate-800 text-white placeholder-slate-500 border border-slate-700 rounded-l-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 my-8" />

          {/* Bottom section with social links and copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-slate-400 text-center md:text-right">
              © 2010-2026 CTekk Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
