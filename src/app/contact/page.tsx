'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ChevronDown } from 'lucide-react';
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
    message: '',
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const faqItems: FAQItem[] = [
    {
      question: 'What services does CTekk Solutions offer?',
      answer:
        'We provide comprehensive technology consulting services including AI solutions, cloud architecture, digital transformation, staffing and talent acquisition, and enterprise solutions across multiple industries.',
    },
    {
      question: 'How quickly can you staff projects?',
      answer:
        'Our average turnaround time is 2-3 weeks for role identification and placement. For urgent needs, we can often provide resources within 5-7 business days.',
    },
    {
      question: 'Do you work with startups or only enterprise clients?',
      answer:
        'We work with organizations of all sizes, from ambitious startups to Fortune 500 companies. We tailor our solutions to match your specific needs and budget.',
    },
    {
      question: 'What is your approach to AI implementation?',
      answer:
        'We follow a structured methodology: assessment, proof of concept, phased implementation, and continuous optimization. We ensure solutions align with your business goals and deliver measurable ROI.',
    },
    {
      question: 'Can you support multiple time zones?',
      answer:
        'Yes, our global delivery model with offices in Dallas and India ensures 24/7 coverage across US, UK, and Asian time zones for seamless support and continuous delivery.',
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Dallas, TX — Headquarters',
      content: '14800 Quorum Drive, Suite 285',
      subContent: 'Dallas, TX 75254',
    },
    {
      icon: MapPin,
      label: 'Mysuru, India — Offshore Delivery',
      content: '2nd Floor, 442, Jayachamarajendra Rd',
      subContent: 'Vijayanagar, Mysuru, Karnataka 570017',
    },
    {
      icon: Mail,
      label: 'Email',
      content: 'info@ctekksolutions.net',
      href: 'mailto:info@ctekksolutions.net',
    },
    {
      icon: Phone,
      label: 'US Phone',
      content: '408-471-7753',
      href: 'tel:408-471-7753',
    },
    {
      icon: Phone,
      label: 'India Phone',
      content: '+91 76766 66844',
      href: 'tel:+917676666844',
    },
  ];

  const quickActions = [
    { label: 'Hire Talent', href: '/contact?service=hiring' },
    { label: 'Request AI Training', href: '/contact?service=training' },
    { label: 'Book Consultation', href: '/contact?service=consultation' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will contact you shortly.');

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0D0D0D]">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="py-20 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111111] dark:text-[#ECECEC]">
            Get in Touch
          </h1>
          <p className="text-xl text-[#6B7280] dark:text-[#ECECEC]/70">
            Let's discuss your technology and talent needs
          </p>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-5 bg-white dark:bg-[#0D0D0D]"
                >
                  <div className="flex items-start gap-3">
                    <Icon size={20} className="text-[#10A37F] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-[#6B7280] dark:text-[#ECECEC]/70 font-medium">
                        {info.label}
                      </p>
                      <p className="font-semibold text-[#111111] dark:text-[#ECECEC]">
                        {info.content}
                      </p>
                      {info.subContent && (
                        <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]/70">
                          {info.subContent}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-white dark:bg-[#0D0D0D]"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2 border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0D0D0D] text-[#111111] dark:text-[#ECECEC] placeholder-[#6B7280] dark:placeholder-[#ECECEC]/50 focus:outline-none focus:border-[#10A37F] transition-colors"
                    />
                  </div>
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
                      className="w-full px-4 py-2 border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0D0D0D] text-[#111111] dark:text-[#ECECEC] placeholder-[#6B7280] dark:placeholder-[#ECECEC]/50 focus:outline-none focus:border-[#10A37F] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0D0D0D] text-[#111111] dark:text-[#ECECEC] placeholder-[#6B7280] dark:placeholder-[#ECECEC]/50 focus:outline-none focus:border-[#10A37F] transition-colors"
                    />
                  </div>
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
                      className="w-full px-4 py-2 border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0D0D0D] text-[#111111] dark:text-[#ECECEC] placeholder-[#6B7280] dark:placeholder-[#ECECEC]/50 focus:outline-none focus:border-[#10A37F] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 py-2 border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-lg bg-white dark:bg-[#0D0D0D] text-[#111111] dark:text-[#ECECEC] placeholder-[#6B7280] dark:placeholder-[#ECECEC]/50 focus:outline-none focus:border-[#10A37F] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#10A37F] text-white rounded-lg font-medium hover:bg-[#0D8A6A] disabled:opacity-50 transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Actions */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <SectionHeading title="Quick Actions" centered />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quickActions.map((action, idx) => (
            <motion.a
              key={idx}
              href={action.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
              className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-white dark:bg-[#0D0D0D] text-center hover:border-[#10A37F] transition-colors"
            >
              <h3 className="font-semibold text-[#111111] dark:text-[#ECECEC]">
                {action.label}
              </h3>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-4xl mx-auto py-20 px-6"
      >
        <SectionHeading title="FAQ" centered />
        <div className="mt-12 space-y-3">
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.05 }}
              className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl bg-white dark:bg-[#0D0D0D] overflow-hidden"
            >
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 hover:bg-[#F9FAFB] dark:hover:bg-[#2D2D2D] transition-colors"
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
                  className="border-t border-[#E5E7EB] dark:border-[#2D2D2D] p-5 bg-[#F9FAFB] dark:bg-[#0D0D0D]"
                >
                  <p className="text-[#6B7280] dark:text-[#ECECEC]/70 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <CTASection
          title="Ready to Get Started?"
          primaryCTA={{ text: 'Send a Message', href: '#' }}
        />
      </motion.section>
    </div>
  );
}
