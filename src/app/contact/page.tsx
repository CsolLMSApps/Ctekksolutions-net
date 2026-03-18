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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#10A37F] via-[#34D399] to-[#6EE7B7] bg-clip-text text-transparent">
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
            {/* Ad Card 1 — OPTPlanet.tech AI Job Board (Orange/Black) */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden bg-[#111111] border border-[#333]"
            >
              <div className="h-1 bg-gradient-to-r from-[#F97316] to-[#FB923C]" />
              <div className="p-5">
                <p className="text-[10px] font-semibold text-[#F97316] uppercase tracking-wider mb-1">AI JOB BOARD</p>
                <h3 className="font-bold text-white text-sm mb-2">Global AI Jobs &amp; Contracts</h3>
                <p className="text-xs text-gray-400 mb-3">Remote AI jobs, prompt engineering &amp; automation work worldwide.</p>
                <ul className="space-y-1.5 mb-4">
                  <li className="text-xs text-gray-400 flex items-start gap-1.5">
                    <span className="text-[#F97316] mt-0.5">›</span> Machine Learning &amp; LLM roles
                  </li>
                  <li className="text-xs text-gray-400 flex items-start gap-1.5">
                    <span className="text-[#F97316] mt-0.5">›</span> STEM talent for startups
                  </li>
                  <li className="text-xs text-gray-400 flex items-start gap-1.5">
                    <span className="text-[#F97316] mt-0.5">›</span> Remote &amp; contract opportunities
                  </li>
                </ul>
                <a
                  href="https://optplanet.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-[#F97316] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#EA580C] transition-colors"
                >
                  Explore Jobs <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>

            {/* Ad Card 2 — Advertise / Employers */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#2D2D2D] bg-white dark:bg-[#111827]"
            >
              <div className="h-1 bg-gradient-to-r from-[#059669] to-[#34D399]" />
              <div className="p-5">
                <p className="text-[10px] font-semibold text-[#10A37F] uppercase tracking-wider mb-1">DFW IT JOBS</p>
                <h3 className="font-bold text-[#111] dark:text-white text-sm mb-2">Post Jobs &amp; Find Talent</h3>
                <p className="text-xs text-[#6B7280] mb-3">Your brand in front of thousands of active IT professionals.</p>
                <ul className="space-y-1.5 mb-4">
                  <li className="text-xs text-[#6B7280] flex items-start gap-1.5">
                    <span className="text-[#6B7280] mt-0.5">›</span> Highly targeted tech audience
                  </li>
                  <li className="text-xs text-[#6B7280] flex items-start gap-1.5">
                    <span className="text-[#6B7280] mt-0.5">›</span> Affordable sponsored placements
                  </li>
                  <li className="text-xs text-[#6B7280] flex items-start gap-1.5">
                    <span className="text-[#6B7280] mt-0.5">›</span> Contact us to get started
                  </li>
                </ul>
                <a
                  href="https://www.dfwitjobs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-[#10A37F] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#0D8A6A] transition-colors"
                >
                  Learn More <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>

            {/* Company Contact Info */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-lg p-8 bg-[#F9FAFB] dark:bg-[#0A0F1C] border border-[#E5E7EB] dark:border-[#2D2D2D]"
            >
              <p className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider mb-3">OUR OFFICE</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-[#111] dark:text-white text-sm">C Tekk Solutions Inc.</p>
                  <p className="text-xs text-[#6B7280] mt-1">14800 Quorum Drive, Suite 285</p>
                  <p className="text-xs text-[#6B7280]">Dallas, TX 75254</p>
                  <a href="tel:408-471-7753" className="text-xs text-[#10A37F] hover:underline mt-1 block">408-471-7753</a>
                  <a href="mailto:info@ctekksolutions.net" className="text-xs text-[#10A37F] hover:underline block">info@ctekksolutions.net</a>
                </div>
                <div className="border-t border-[#E5E7EB] dark:border-[#2D2D2D] pt-3">
                  <p className="text-[10px] text-[#6B7280]">Mon–Fri, 9 AM – 6 PM CST</p>
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
            className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg p-8 bg-white dark:bg-[#111827]"
          >
            <h2 className="text-2xl font-medium text-[#111111] dark:text-[#ECECEC] mb-6">
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

            {/* Quick Action Icons — below form */}
            <p className="text-xs text-center text-[#6B7280] mt-4">For urgent employer support, email <a href="mailto:info@ctekksolutions.net" className="text-[#10A37F] hover:underline">info@ctekksolutions.net</a></p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <a href="/services" className="flex flex-col items-center gap-1 p-3 rounded-lg border border-[#E5E7EB] dark:border-[#2D2D2D] hover:border-[#10A37F] transition-colors text-center">
                <Briefcase size={20} className="text-[#10A37F]" />
                <span className="text-[10px] text-[#6B7280] dark:text-[#9CA3AF]">Hire Talent</span>
              </a>
              <a href="/education" className="flex flex-col items-center gap-1 p-3 rounded-lg border border-[#E5E7EB] dark:border-[#2D2D2D] hover:border-[#10A37F] transition-colors text-center">
                <BookOpen size={20} className="text-[#10A37F]" />
                <span className="text-[10px] text-[#6B7280] dark:text-[#9CA3AF]">AI Training</span>
              </a>
              <a href="/platforms" className="flex flex-col items-center gap-1 p-3 rounded-lg border border-[#E5E7EB] dark:border-[#2D2D2D] hover:border-[#10A37F] transition-colors text-center">
                <ArrowRight size={20} className="text-[#10A37F]" />
                <span className="text-[10px] text-[#6B7280] dark:text-[#9CA3AF]">Platforms</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* Ad Card 3 — AI Learning Platform (Orange/Black) */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg overflow-hidden bg-[#111111] border border-[#333]"
            >
              <div className="h-1 bg-gradient-to-r from-[#F97316] to-[#FB923C]" />
              <div className="p-5">
                <p className="text-[10px] font-semibold text-[#F97316] uppercase tracking-wider mb-1">AI LEARNING PLATFORM</p>
                <h3 className="font-bold text-white text-sm mb-2">#1 AI Platform for Professionals</h3>
                <p className="text-xs text-gray-400 mb-3">Master AI. Less theory. More real-life AI.</p>
                <ul className="space-y-1.5 mb-4">
                  <li className="text-xs text-gray-400 flex items-start gap-1.5">
                    <span className="text-[#F97316] mt-0.5">›</span> Apply AI to everyday decisions
                  </li>
                  <li className="text-xs text-gray-400 flex items-start gap-1.5">
                    <span className="text-[#F97316] mt-0.5">›</span> LLM, GenAI &amp; workflow automation
                  </li>
                  <li className="text-xs text-gray-400 flex items-start gap-1.5">
                    <span className="text-[#F97316] mt-0.5">›</span> Clarity over complexity
                  </li>
                </ul>
                <a
                  href="https://www.ailearnhub.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-[#F97316] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#EA580C] transition-colors"
                >
                  Start Learning <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>

            {/* Ad Card 4 — OPTPlanet Online (Orange/Black) */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-lg overflow-hidden bg-[#111111] border border-[#333]"
            >
              <div className="h-1 bg-gradient-to-r from-[#F97316] to-[#FB923C]" />
              <div className="p-5">
                <p className="text-[10px] font-semibold text-[#F97316] uppercase tracking-wider mb-1">AI CAREER TOOLS</p>
                <h3 className="font-bold text-white text-sm mb-2">Boost Your Resume, Get Hired Faster</h3>
                <p className="text-xs text-gray-400 mb-3">Free AI-powered tools to optimize your resume, match with jobs, and prep for interviews.</p>
                <ul className="space-y-1.5 mb-4">
                  <li className="text-xs text-gray-400 flex items-start gap-1.5">
                    <span className="text-[#F97316] mt-0.5">›</span> AI resume analysis &amp; scoring
                  </li>
                  <li className="text-xs text-gray-400 flex items-start gap-1.5">
                    <span className="text-[#F97316] mt-0.5">›</span> Smart job matching
                  </li>
                  <li className="text-xs text-gray-400 flex items-start gap-1.5">
                    <span className="text-[#F97316] mt-0.5">›</span> Interview prep &amp; cover letters
                  </li>
                </ul>
                <a
                  href="https://optplanet.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-[#F97316] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#EA580C] transition-colors"
                >
                  Try Free <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>

            {/* Find Us — Map */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="rounded-lg overflow-hidden border border-[#E5E7EB] dark:border-[#2D2D2D] bg-white dark:bg-[#111827]"
            >
              <div className="p-4 border-b border-[#E5E7EB] dark:border-[#2D2D2D] flex items-center gap-2">
                <MapPin size={16} className="text-[#10A37F]" />
                <span className="text-sm font-semibold text-[#111] dark:text-white">Find Us</span>
              </div>
              <Image
                src="/map-dallas.svg"
                alt="CTekk Solutions Dallas Office Map"
                width={280}
                height={220}
                className="w-full h-auto"
              />
              <div className="p-6 flex items-center justify-between">
                <p className="text-[10px] text-[#6B7280]">14800 Quorum Dr, Suite 285, Dallas, TX</p>
                <a
                  href="https://maps.google.com/?q=14800+Quorum+Dr+Suite+285+Dallas+TX+75254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#10A37F] hover:underline"
                >
                  Open in Maps ↗
                </a>
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
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" centered />
          <div className="mt-12 space-y-3 max-w-3xl mx-auto">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.05 }}
                className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0A0F1C] overflow-hidden"
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
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Ready to Get Started?"
            primaryCTA={{ text: 'Send a Message', href: '#' }}
          />
        </div>
      </motion.section>
    </div>
  );
}
