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
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const jobCategories = [
  { icon: Brain, label: 'AI & Machine Learning', color: 'from-blue-500 to-cyan-500' },
  { icon: Cloud, label: 'Cloud & DevOps', color: 'from-purple-500 to-pink-500' },
  { icon: Globe, label: 'Remote Positions', color: 'from-green-500 to-emerald-500' },
  { icon: Briefcase, label: 'Corporate & Operations', color: 'from-orange-500 to-red-500' }
];

const featuredPositions = [
  {
    title: 'Senior Machine Learning Engineer',
    department: 'AI & Machine Learning',
    location: 'Dallas, TX',
    type: 'Full-time',
    category: 'AI & ML'
  },
  {
    title: 'DevOps & Cloud Infrastructure Engineer',
    department: 'Cloud & DevOps',
    location: 'Remote',
    type: 'Full-time',
    category: 'Cloud'
  },
  {
    title: 'AI Research Scientist',
    department: 'AI & Machine Learning',
    location: 'Dallas, TX',
    type: 'Full-time',
    category: 'AI & ML'
  },
  {
    title: 'Kubernetes & Containerization Specialist',
    department: 'Cloud & DevOps',
    location: 'India (Remote)',
    type: 'Contract',
    category: 'Cloud'
  },
  {
    title: 'Business Development Manager',
    department: 'Corporate & Operations',
    location: 'Dallas, TX',
    type: 'Full-time',
    category: 'Operations'
  },
  {
    title: 'Data Pipeline Architect',
    department: 'Cloud & DevOps',
    location: 'Remote',
    type: 'Full-time',
    category: 'Cloud'
  },
  {
    title: 'AI Solutions Consultant',
    department: 'Corporate & Operations',
    location: 'Dallas, TX',
    type: 'Full-time',
    category: 'Operations'
  },
  {
    title: 'Computer Vision Engineer',
    department: 'AI & Machine Learning',
    location: 'India (Remote)',
    type: 'Full-time',
    category: 'AI & ML'
  }
];

const benefits = [
  { icon: Wifi, label: 'Remote Work', description: 'Work from anywhere with flexible schedules' },
  { icon: Heart, label: 'Health Benefits', description: 'Comprehensive health, dental, and vision coverage' },
  { icon: BookOpen, label: 'Learning Budget', description: '$2000 annual education and training allowance' },
  { icon: Users, label: 'Global Team', description: 'Collaborate with talented professionals worldwide' },
  { icon: Zap, label: 'Innovation Focus', description: 'Work on cutting-edge AI and cloud technologies' },
  { icon: Briefcase, label: 'Growth Opportunities', description: 'Clear career progression and advancement paths' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
};

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="relative py-20 px-6 sm:px-10 overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20 -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Careers at CTekk Solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Join our team of innovative thinkers and builders pushing the boundaries of AI and cloud technology.
          </motion.p>
        </div>
      </motion.section>

      {/* Job Categories */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-6 sm:px-10 bg-gray-50 dark:bg-gray-950"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Open Positions by Category"
            subtitle="Find your ideal role across our different departments"
            centered
          />
          <motion.div
            variants={containerVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {jobCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-transparent hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4`}>
                  <category.icon size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {category.label}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Positions */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 sm:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Featured Open Positions"
            subtitle="Explore current opportunities at CTekk Solutions"
            centered
          />
          <motion.div
            variants={containerVariants}
            className="mt-16 space-y-4"
          >
            {featuredPositions.map((job, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="group p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact?subject=Job Application"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group-hover:gap-3"
                    >
                      Apply Now
                      <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 px-6 sm:px-10 bg-gray-50 dark:bg-gray-950"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Why Work at CTekk?"
            subtitle="Competitive benefits and opportunities for growth"
            centered
          />
          <motion.div
            variants={containerVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <div className="h-full p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Note Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-6 sm:px-10"
      >
        <div className="max-w-4xl mx-auto p-8 rounded-xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Internal Positions Only
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              This page showcases open positions within CTekk Solutions. For staffing and recruitment services to external clients, please visit our <Link href="/services" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Services</Link> page.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 px-6 sm:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <CTASection
            title="Ready to Join Our Team?"
            subtitle="Submit your resume and let's talk about your next opportunity"
            primaryCTA={{ text: 'Submit Your Resume', href: '/contact' }}
          />
        </div>
      </motion.section>
    </div>
  );
}
