'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Globe,
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Wifi,
  Zap,
  Users,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const jobCategories = [
  { icon: Brain, label: 'AI & ML' },
  { icon: Cloud, label: 'Cloud & DevOps' },
  { icon: Globe, label: 'Remote' },
  { icon: Briefcase, label: 'Corporate' }
];

const featuredPositions = [
  {
    title: 'Senior AI Engineer',
    department: 'AI & ML',
    location: 'Dallas',
    type: 'Full-time',
  },
  {
    title: 'Cloud Architect',
    department: 'Cloud',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'ML Operations Engineer',
    department: 'AI & ML',
    location: 'Dallas',
    type: 'Full-time',
  },
  {
    title: 'DevOps Lead',
    department: 'Cloud',
    location: 'Remote',
    type: 'Contract',
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'India',
    type: 'Full-time',
  },
  {
    title: 'AI Research Scientist',
    department: 'AI & ML',
    location: 'Dallas',
    type: 'Full-time',
  },
  {
    title: 'Recruiter',
    department: 'Corporate',
    location: 'Dallas',
    type: 'Full-time',
  },
  {
    title: 'Data Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  }
];

const benefits = [
  { icon: Wifi, label: 'Remote Work', description: 'Work from anywhere with flexible schedules' },
  { icon: Heart, label: 'Health Benefits', description: 'Comprehensive health and wellness coverage' },
  { icon: BookOpen, label: 'Learning Budget', description: 'Annual education and training allowance' },
  { icon: Users, label: 'Global Team', description: 'Collaborate with talented professionals' },
  { icon: Zap, label: 'Innovation Focus', description: 'Work on cutting-edge technologies' },
  { icon: Briefcase, label: 'Growth', description: 'Clear career progression paths' }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0D0D0D]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="py-20 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-[#111111] dark:text-[#ECECEC]"
          >
            Careers at CTekk Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6B7280] dark:text-[#ECECEC]/70"
          >
            Join our team and help drive AI and cloud innovation
          </motion.p>
        </div>
      </motion.section>

      {/* Job Categories */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {jobCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-5 bg-white dark:bg-[#0D0D0D] hover:border-[#10A37F] transition-colors"
              >
                <Icon size={24} className="text-[#10A37F] mb-3" />
                <h3 className="font-semibold text-[#111111] dark:text-[#ECECEC]">
                  {cat.label}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Featured Positions */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <SectionHeading title="Featured Positions" centered />
        <motion.div className="mt-12 space-y-3">
          {featuredPositions.map((job, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-5 bg-white dark:bg-[#0D0D0D] hover:border-[#10A37F] transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-[#111111] dark:text-[#ECECEC] text-lg mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#F9FAFB] dark:bg-[#2D2D2D] text-[#6B7280] dark:text-[#ECECEC]/70 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                    <span className="text-xs bg-[#F9FAFB] dark:bg-[#2D2D2D] text-[#6B7280] dark:text-[#ECECEC]/70 px-3 py-1 rounded-full">
                      {job.location}
                    </span>
                    <span className="text-xs bg-[#F9FAFB] dark:bg-[#2D2D2D] text-[#6B7280] dark:text-[#ECECEC]/70 px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-2 bg-[#10A37F] text-white rounded-lg font-medium hover:bg-[#0D8A6A] transition-colors whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <SectionHeading title="Why Join CTekk?" centered />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-6 bg-white dark:bg-[#0D0D0D]"
              >
                <Icon size={24} className="text-[#10A37F] mb-3" />
                <h3 className="font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                  {benefit.label}
                </h3>
                <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]/70">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Note */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <div className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-[#F9FAFB] dark:bg-[#0D0D0D] text-center">
          <p className="text-[#6B7280] dark:text-[#ECECEC]/70">
            These positions are internal to CTekk Solutions. For external client opportunities, visit{' '}
            <a href="https://dfwitjobs.com" target="_blank" rel="noopener noreferrer" className="text-[#10A37F] font-medium hover:underline">
              DFWITJOBS
            </a>
            .
          </p>
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
          title="Submit Your Resume"
          primaryCTA={{ text: 'Get in Touch', href: '/contact' }}
        />
      </motion.section>
    </div>
  );
}
