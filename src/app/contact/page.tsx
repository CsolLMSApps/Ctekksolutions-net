'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ChevronDown, Briefcase, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Hire AI Talent',
    message: '',
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    'Hire AI Talent',
    'Cloud Consulting',
    'Staffing & Recruiting',
    'AI Training & Upskilling',
    'Offshore Development',
    'Platform Inquiry',
    'Career Opportunities',
    'Other',
  ];

  const faqItems: FAQItem[] = [
    {
      question: 'What services does CTekk Solutions offer?',
      answer:
        'We provide comprehensive technology consulting services including AI solutions, cloud architecture, digital transformation, staffing and talent acquisition, and enterprise solutions across multiple industries.',
    },
    {
      question: 'How quickly can you provide staffing?',
      answer:
        'Our average turnaround time is 2-3 weeks for role identification and placement. For urgent needs, we can often provide resources within 5-7 business days.',
    },
    {
      question: 'What size companies do you work with?',
      answer:
        'We work with organizations of all sizes, from ambitious startups to Fortune 500 companies. We tailor our solutions to match your specific needs and budget.',
    },
    {
      question: 'How do you approach AI implementation?',
      answer:
        'We follow a structured methodology: assessment, proof of concept, phased implementation, and continuous optimization. We ensure solutions align with your business goals and deliver measurable ROI.',
    },
    {
      question: 'Do you support multiple time zones?',
      answer:
        'Yes, our global delivery model with offices in Dallas and India ensures 24/7 coverage across US, UK, and Asian time zones for seamless support and continuous delivery.',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will contact you shortly.');

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      inquiryType: 'Hire AI Talent',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1C]">
      {/* Hero Section — Dark */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="bg-[#0A0F1C] text-white py-16 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#10A37F] via-[#06B6D4] to-[#3B82F6] bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400">
            Let's discuss your technology, talent, and training needs
          </p>
        </div>
      </motion.section>

      {/* 3-Column Main Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white dark:bg-[#0A0F1C] py-16 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Ad Box 1 — Employers */}
            <motion.a
              href="https://www.dfwitjobs.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full aspect-square max-w-[250px] rounded-xl overflow-hidden bg-gradient-to-br from-[#0A0F1C] to-[#111827] p-5 text-white hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col h-full">
                <Briefcase size={32} className="text-[#10A37F] mb-3" />
                <h3 className="font-semibold text-sm mb-2">Post Jobs on DFWITJOBS</h3>
                <p className="text-xs text-gray-400 flex-grow">
                  Reach qualified STEM and AI talent in the DFW area and beyond.
                </p>
                <button className="bg-[#10A37F] text-white text-xs px-3 py-1.5 rounded-md hover:bg-[#0D8A6A] transition-colors inline-flex items-center gap-1 mt-3">
                  Post a Job <ArrowRight size={12} />
                </button>
              </div>
            </motion.a>

            {/* Company Contact Info */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-5 bg-white dark:bg-[#111827]"
            >
              <div className="space-y-4">
                {/* Dallas */}
                <div>
                  <p className="text-xs font-semibold text-[#10A37F] mb-1">Dallas, TX — HQ</p>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <MapPin size={16} className="text-[#6B7280] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]">
                        14800 Quorum Drive, Suite 285, Dallas, TX 75254
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Phone size={16} className="text-[#6B7280] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]">408-471-7753</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#E5E7EB] dark:border-[#2D2D2D]"></div>

                {/* Mysuru */}
                <div>
                  <p className="text-xs font-semibold text-[#10A37F] mb-1">Mysuru, India</p>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <MapPin size={16} className="text-[#6B7280] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]">
                        2nd Floor, 442, Jayachamarajendra Rd, Vijayanagar, Mysuru, Karnataka 570017
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Phone size={16} className="text-[#6B7280] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]">+91 76766 66844</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex gap-2">
                    <Mail size={16} className="text-[#6B7280] flex-shrink-0 mt-0.5" />
                    <a href="mailto:info@ctekksolutions.net" className="text-sm text-[#10A37F] hover:underline">
                      info@ctekksolutions.net
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* MIDDLE COLUMN — Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-white dark:bg-[#111827]"
          >
            <h2 className="text-xl font-semibold text-[#111111] dark:text-[#ECECEC] mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0A0F1C] text-[#111111] dark:text-[#ECECEC] placeholder-[#6B7280] dark:placeholder-[#ECECEC]/50 focus:outline-none focus:border-[#10A37F] transition-colors"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company"
                  className="w-full px-4 py-2 border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0A0F1C] text-[#111111] dark:text-[#ECECEC] placeholder-[#6B7280] dark:placeholder-[#ECECEC]/50 focus:outline-none focus:border-[#10A37F] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0A0F1C] text-[#111111] dark:text-[#ECECEC] placeholder-[#6B7280] dark:placeholder-[#ECECEC]/50 focus:outline-none focus:border-[#10A37F] transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone"
                  className="w-full px-4 py-2 border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0A0F1C] text-[#111111] dark:text-[#ECECEC] placeholder-[#6B7280] dark:placeholder-[#ECECEC]/50 focus:outline-none focus:border-[#10A37F] transition-colors"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0A0F1C] text-[#111111] dark:text-[#ECECEC] focus:outline-none focus:border-[#10A37F] transition-colors"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us about your needs..."
                  className="w-full px-4 py-2 border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0A0F1C] text-[#111111] dark:text-[#ECECEC] placeholder-[#6B7280] dark:placeholder-[#ECECEC]/50 focus:outline-none focus:border-[#10A37F] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#10A37F] text-white rounded-lg font-medium hover:bg-[#0D8A6A] disabled:opacity-50 transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Ad Box 2 — AI Training */}
            <motion.a
              href="https://www.ailearnhub.io"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full aspect-square max-w-[250px] rounded-xl overflow-hidden bg-gradient-to-br from-[#10A37F]/10 to-[#06B6D4]/10 border border-[#10A37F]/20 p-5 text-[#111111] dark:text-[#ECECEC] hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col h-full">
                <BookOpen size={32} className="text-[#10A37F] mb-3" />
                <h3 className="font-semibold text-sm mb-2">Upskill with AI Learn Hub</h3>
                <p className="text-xs text-[#6B7280] flex-grow">
                  From fundamentals to advanced AI — live training for professionals and enterprises.
                </p>
                <button className="bg-[#10A37F] text-white text-xs px-3 py-1.5 rounded-md hover:bg-[#0D8A6A] transition-colors inline-flex items-center gap-1 mt-3">
                  Explore Courses <ArrowRight size={12} />
                </button>
              </div>
            </motion.a>

            {/* Static Map */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl overflow-hidden"
            >
              <div className="w-full h-[200px] bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] dark:from-[#111827] dark:to-[#0A0F1C] flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={40} className="text-[#10A37F] mx-auto mb-2" />
                  <p className="text-xs text-[#6B7280] dark:text-[#ECECEC]/70">Map coming soon</p>
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-[#111827]">
                <p className="text-xs text-[#6B7280] dark:text-[#ECECEC]/70 text-center">
                  14800 Quorum Dr, Suite 285, Dallas, TX
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-[#F9FAFB] dark:bg-[#111827] py-16 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" centered />
          <div className="mt-12 space-y-3">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.05 }}
                className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl bg-white dark:bg-[#0A0F1C] overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 hover:bg-[#F9FAFB] dark:hover:bg-[#111827] transition-colors"
                >
                  <h3 className="font-semibold text-[#111111] dark:text-[#ECECEC] text-left">
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-[#6B7280] dark:text-[#ECECEC]/70 flex-shrink-0 transition-transform ${
                      expandedFAQ === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFAQ === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-[#E5E7EB] dark:border-[#2D2D2D] p-5 bg-[#F9FAFB] dark:bg-[#111827]"
                  >
                    <p className="text-[#6B7280] dark:text-[#ECECEC]/70 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="py-8 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <CTASection
            title="Ready to Get Started?"
            primaryCTA={{ text: 'Send a Message', href: '#' }}
          />
        </div>
      </motion.section>
    </div>
  );
}
