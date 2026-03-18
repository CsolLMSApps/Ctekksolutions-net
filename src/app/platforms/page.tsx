'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Award,
  ExternalLink,
} from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

interface PlatformItem {
  id: string;
  title: string;
  url: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
}

const platforms: PlatformItem[] = [
  {
    id: 'dfwitjobs',
    title: 'DFWITJOBS',
    url: 'https://www.dfwitjobs.com',
    icon: <Briefcase size={40} />,
    description:
      'Premier job board for the Dallas-Fort Worth metroplex connecting top tech talent with leading employers',
    features: [
      'Local DFW job listings',
      'AI-powered job matching',
      'Resume builder tools',
      'Employer dashboard',
    ],
    accentColor: '#2563eb',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600',
  },
  {
    id: 'optplanet',
    title: 'OPTPlanet',
    url: 'https://www.optplanet.net',
    icon: <GraduationCap size={40} />,
    description:
      'Comprehensive platform for OPT/CPT students and H1B professionals seeking opportunities',
    features: [
      'OPT/CPT job matching',
      'Immigration support resources',
      'Career guidance',
      'Employer connections',
    ],
    accentColor: '#a855f7',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-purple-600',
  },
  {
    id: 'ailearnhub',
    title: 'AI Learn Hub',
    url: 'https://www.ailearnhub.io',
    icon: <BookOpen size={40} />,
    description:
      'Cutting-edge AI education platform with hands-on courses and certifications',
    features: [
      'AI/ML courses',
      'Hands-on labs',
      'Industry certifications',
      'Expert instructors',
    ],
    accentColor: '#06b6d4',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-cyan-600',
  },
  {
    id: 'benzaiten',
    title: 'Benzaiten LMS',
    url: 'https://benzaitenlms.com',
    icon: <Award size={40} />,
    description:
      'Enterprise learning management system for corporate training and skill development',
    features: [
      'Custom course creation',
      'Progress tracking',
      'Team management',
      'Analytics dashboard',
    ],
    accentColor: '#10b981',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-emerald-600',
  },
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
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
          <div className="absolute top-0 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-20" />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Platforms
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Innovative technology platforms designed to empower careers,
            education, and business growth
          </motion.p>
        </motion.div>
      </section>

      {/* Platforms Section */}
      <section className="px-6 sm:px-10 py-20 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Gradient Top Bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${platform.gradientFrom} ${platform.gradientTo}`}
                />

                {/* Content */}
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900 text-2xl group-hover:scale-110 transition-transform duration-300"
                      style={{
                        color: platform.accentColor,
                      }}
                    >
                      {platform.icon}
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      background: `linear-gradient(135deg, ${platform.accentColor}, ${platform.accentColor}dd)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {platform.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-base mb-6 leading-relaxed">
                    {platform.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor: platform.accentColor,
                            }}
                          />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visit Button */}
                  <motion.a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:gap-3 group/btn"
                    style={{
                      background: `linear-gradient(135deg, ${platform.accentColor}, ${platform.accentColor}dd)`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Visit Platform
                    <ExternalLink
                      size={18}
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                    />
                  </motion.a>
                </div>

                {/* Bottom Accent */}
                <div
                  className="h-1 w-full opacity-20"
                  style={{
                    background: `linear-gradient(90deg, ${platform.accentColor}, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Integration Section */}
      <section className="px-6 sm:px-10 py-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionHeading
            title="Seamless Integration"
            subtitle="Our platforms work together seamlessly to create a comprehensive ecosystem for talent development, education, and business growth. From job matching and career guidance to advanced learning and training management, CTekk Solutions provides integrated solutions that drive success."
            centered
          />
        </motion.div>

        {/* Integration Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
        >
          {[
            {
              title: 'Career Advancement',
              description:
                'Move seamlessly from learning to employment with integrated career pathways',
              icon: '🚀',
            },
            {
              title: 'Unified Experience',
              description:
                'Access multiple platforms with consistent user experience and shared data',
              icon: '🔗',
            },
            {
              title: 'Data-Driven Insights',
              description:
                'Track progress across all platforms with comprehensive analytics and reporting',
              icon: '📊',
            },
            {
              title: 'Enterprise Ready',
              description:
                'Enterprise-grade security, scalability, and support across all solutions',
              icon: '🛡️',
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-6 sm:px-10 py-20 max-w-6xl mx-auto">
        <CTASection
          title="Ready to Explore Our Platforms?"
          subtitle="Get started with CTekk Solutions today and unlock the power of integrated career, education, and learning solutions"
          primaryCTA={{
            text: 'Contact Us',
            href: '/contact',
          }}
          secondaryCTA={{
            text: 'Learn More',
            href: '/',
          }}
        />
      </section>
    </div>
  );
}
