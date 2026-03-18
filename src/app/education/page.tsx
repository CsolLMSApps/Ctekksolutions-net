'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  MessageSquare,
  Eye,
  Briefcase,
  Database,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const courseCategories = [
  {
    icon: Brain,
    title: 'Machine Learning Fundamentals',
    description: 'Master the core concepts of machine learning, from supervised and unsupervised learning to model evaluation and validation.'
  },
  {
    icon: Zap,
    title: 'Deep Learning & Neural Networks',
    description: 'Explore neural network architectures, backpropagation, and modern deep learning frameworks for advanced AI applications.'
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Learn text processing, language models, sentiment analysis, and transformer architectures for NLP tasks.'
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Develop expertise in image processing, object detection, segmentation, and visual recognition systems.'
  },
  {
    icon: Briefcase,
    title: 'AI for Business Leaders',
    description: 'Strategic insights on implementing AI in enterprises, managing AI teams, and measuring AI ROI.'
  },
  {
    icon: Database,
    title: 'Data Engineering & MLOps',
    description: 'Build scalable data pipelines, manage machine learning operations, and deploy models in production environments.'
  }
];

const platformHighlights = [
  {
    name: 'AI Learn Hub',
    url: 'www.ailearnhub.io',
    description: 'Comprehensive online learning platform',
    features: [
      'Interactive courses with hands-on projects',
      'Expert-led workshops and seminars',
      'Industry-recognized certifications',
      'Lifetime course access'
    ]
  },
  {
    name: 'Benzaiten LMS',
    url: 'benzaitenlms.com',
    description: 'Enterprise learning management system',
    features: [
      'Custom curriculum development',
      'Progress tracking and analytics',
      'Team-based learning paths',
      'Integration with existing systems'
    ]
  }
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

const courseCardVariants = {
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

export default function EducationPage() {
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
              AI Education & Training
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Empower your workforce with cutting-edge AI and machine learning education through our comprehensive training programs.
          </motion.p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-6 sm:px-10"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Corporate AI Training Programs"
            subtitle="Tailored learning solutions designed to elevate your team's AI capabilities"
            centered
          />
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Brain, label: 'Expert Instructors', desc: 'Industry veterans with real-world experience' },
              { icon: Zap, label: 'Hands-On Projects', desc: 'Learn by building actual AI applications' },
              { icon: Briefcase, label: 'Enterprise Scale', desc: 'Solutions for teams of any size' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={courseCardVariants}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 text-center hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Course Categories Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 sm:px-10 bg-gray-50 dark:bg-gray-950"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Course Categories"
            subtitle="Comprehensive curriculum covering all aspects of AI and machine learning"
            centered
          />
          <motion.div
            variants={containerVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {courseCategories.map((course, idx) => (
              <motion.div
                key={idx}
                variants={courseCardVariants}
                whileHover="hover"
                className="group"
              >
                <div className="h-full p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <course.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Platform Highlights */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 px-6 sm:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Featured Learning Platforms"
            subtitle="Leverage our partnerships with industry-leading AI education providers"
            centered
          />
          <motion.div
            variants={containerVariants}
            className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {platformHighlights.map((platform, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="p-10 rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/20 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {platform.url}
                    </p>
                  </div>
                  <ExternalLink className="text-gray-400 dark:text-gray-600" size={24} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {platform.description}
                </p>
                <div className="space-y-2 mb-6">
                  {platform.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={`https://${platform.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                >
                  Visit Platform
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Corporate Training Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 px-6 sm:px-10 bg-gray-50 dark:bg-gray-950"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Custom Training Programs"
            subtitle="We design and deliver tailored AI education solutions for your organization"
            centered
          />
          <motion.div
            variants={containerVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'Assessment & Roadmap',
                description: 'Evaluate current skills and create a customized learning path for your team.'
              },
              {
                title: 'Dedicated Training',
                description: 'Instructor-led sessions tailored to your specific business needs and use cases.'
              },
              {
                title: 'Certification Programs',
                description: 'Industry-recognized credentials that validate your team\'s AI expertise.'
              },
              {
                title: 'Ongoing Support',
                description: 'Continuous learning resources and mentorship to stay ahead of AI trends.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
            title="Ready to Transform Your Team?"
            subtitle="Get started with our AI education and training programs today"
            primaryCTA={{ text: 'Request Training', href: '/contact' }}
            secondaryCTA={{ text: 'Explore Courses', href: '#courses' }}
          />
        </div>
      </motion.section>
    </div>
  );
}
