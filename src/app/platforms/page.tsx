'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Monitor,
  Rocket,
  ExternalLink,
  Zap,
  Cpu,
  TrendingUp,
  Lock,
} from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true, margin: '0px 0px -100px 0px' },
};

const platforms = [
  {
    title: 'DFWITJOBS',
    url: 'www.dfwitjobs.com',
    icon: Briefcase,
    color: '#10A37F',
    description:
      'Premier job board for the Dallas-Fort Worth metroplex connecting top tech talent with leading employers',
    features: [
      'Local DFW job listings',
      'AI-powered job matching',
      'Resume builder tools',
      'Employer dashboard',
    ],
  },
  {
    title: 'OPTPlanet',
    url: 'www.optplanet.net',
    icon: GraduationCap,
    color: '#6366F1',
    description:
      'Comprehensive platform for OPT/CPT students and H1B professionals seeking opportunities',
    features: [
      'OPT/CPT job matching',
      'Immigration support resources',
      'Career guidance',
      'Employer connections',
    ],
  },
  {
    title: 'AI Learn Hub',
    url: 'www.ailearnhub.io',
    icon: BookOpen,
    color: '#F59E0B',
    description:
      'Cutting-edge AI education platform with hands-on courses and certifications',
    features: [
      'AI/ML courses',
      'Hands-on labs',
      'Industry certifications',
      'Expert instructors',
    ],
  },
  {
    title: 'Benzaiten LMS',
    url: 'benzaitenlms.com',
    icon: Monitor,
    color: '#EC4899',
    description:
      'Enterprise learning management system for corporate training and skill development',
    features: [
      'Custom course creation',
      'Progress tracking',
      'Team management',
      'Analytics dashboard',
    ],
  },
  {
    title: 'OPTPlanet.tech',
    url: 'optplanet.tech',
    icon: Rocket,
    color: '#8B5CF6',
    description:
      'Global AI job board connecting startups with STEM resources. Find remote AI jobs, prompt engineering roles, and automation contract opportunities worldwide.',
    features: [
      'Global AI job listings',
      'Remote & contract opportunities',
      'STEM talent matching',
      'Startup-focused hiring',
    ],
  },
];

const benefits = [
  {
    title: 'Complete Ecosystem',
    description: 'Talent discovery, training, and career placement all working together seamlessly',
    icon: Zap,
  },
  {
    title: 'Career Advancement',
    description: 'Move seamlessly from learning to employment with integrated pathways',
    icon: TrendingUp,
  },
  {
    title: 'Data-Driven',
    description: 'Track progress with comprehensive analytics and reporting across the full platform suite',
    icon: Cpu,
  },
  {
    title: 'Enterprise Ready',
    description: 'Enterprise-grade security, scalability, and support with global reach',
    icon: Lock,
  },
];

export default function PlatformsPage() {
  return (
    <main className="bg-white dark:bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <motion.div {...fadeIn}>
          <h1 className="text-4xl font-semibold text-[#111111] dark:text-[#ECECEC] mb-4">
            Our Platforms
          </h1>
          <p className="text-lg text-[#6B7280] dark:text-[#A3A3A3] max-w-2xl mx-auto">
            Innovative technology platforms designed to empower careers, education, and business growth.
          </p>
        </motion.div>
      </section>

      {/* Platforms Grid */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={index}
                {...fadeIn}
                className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-white dark:bg-[#1A1A1A] hover:border-[#10A37F] dark:hover:border-[#10A37F] transition-colors"
              >
                <div className="mb-6 flex items-center gap-3">
                  <Icon size={28} color={platform.color} />
                  <h3 className="text-xl font-semibold text-[#111111] dark:text-[#ECECEC]">
                    {platform.title}
                  </h3>
                </div>
                <p className="text-[#6B7280] dark:text-[#A3A3A3] mb-6 text-sm">
                  {platform.url}
                </p>
                <p className="text-[#111111] dark:text-[#ECECEC] mb-6">{platform.description}</p>
                <ul className="space-y-3 mb-8">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                        style={{ backgroundColor: platform.color }}
                      />
                      <span className="text-[#111111] dark:text-[#ECECEC] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://${platform.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#10A37F] hover:text-[#0D8B6B] dark:hover:text-[#10A37F] font-medium transition-colors"
                >
                  Visit Platform
                  <ExternalLink size={18} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <SectionHeading title="Why Our Platforms" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                {...fadeIn}
                className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-6 bg-[#F9FAFB] dark:bg-[#1A1A1A]"
              >
                <Icon size={24} className="text-[#10A37F] mb-4" />
                <h3 className="text-lg font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#6B7280] dark:text-[#A3A3A3]">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore Our Platforms?"
        subtitle="Get started with CTekk Solutions today and unlock the power of integrated career, education, and learning solutions."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
