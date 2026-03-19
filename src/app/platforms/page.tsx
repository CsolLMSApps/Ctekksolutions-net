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
  Sparkles,
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
    title: 'DFW IT Jobs',
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
    title: 'OPT Planet',
    url: 'www.optplanet.net',
    icon: GraduationCap,
    color: '#7C3AED',
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
    color: '#F97316',
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
    color: '#6D28D9',
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
    title: 'OPT Planet Tech',
    url: 'optplanet.tech',
    icon: Rocket,
    color: '#F97316',
    description:
      'Global AI job board connecting startups with STEM resources. Find remote AI jobs, prompt engineering roles, and automation contract opportunities worldwide.',
    features: [
      'Global AI job listings',
      'Remote & contract opportunities',
      'STEM talent matching',
      'Startup-focused hiring',
    ],
  },
  {
    title: 'OPT Planet - AI Career',
    url: 'optplanet.online',
    icon: Sparkles,
    color: '#2563EB',
    description:
      'AI-powered career tools for OPT, STEM, and tech job seekers — Resume Analyzer, Job Match Scorer, Interview Prep, Cover Letter Generator, and Job Readiness Score.',
    features: [
      'AI-powered resume analysis',
      'Intelligent job matching',
      'Interview preparation tools',
      'Career readiness scoring',
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
    <main className="bg-white">
      {/* Hero Section - DARK */}
      <section className="bg-[#0A0F1C] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#10A37F] via-[#34D399] to-[#6EE7B7] bg-clip-text text-transparent">
              Our Platforms
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Innovative technology platforms designed to empower careers, education, and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platforms Grid - DARK with Glass Cards */}
      <section className="bg-[#0A0F1C] text-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeIn}
                  className="group relative rounded-lg overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm p-8 hover:bg-white/10 hover:border-[#10A37F]/50 transition-all duration-300"
                >
                  {/* Gradient accent top bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${platform.color}, transparent)`,
                    }}
                  />
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${platform.color}20` }}
                    >
                      <Icon size={28} color={platform.color} />
                    </div>
                    <h3 className="text-2xl font-medium text-white">
                      {platform.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">
                    {platform.url}
                  </p>
                  <p className="text-gray-200 mb-6">{platform.description}</p>
                  <ul className="space-y-3 mb-8">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                          style={{ backgroundColor: platform.color }}
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://${platform.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#10A37F] hover:text-[#13C992] font-semibold transition-colors"
                  >
                    Visit Platform
                    <ExternalLink size={18} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - LIGHT */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
              Why Our Platforms
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeIn}
                  className="group rounded-lg border-2 border-[#E5E7EB] bg-white p-8 hover:border-[#10A37F] hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#10A37F]/10 to-[#34D399]/10 inline-block mb-4">
                    <Icon size={24} className="text-[#10A37F]" />
                  </div>
                  <h3 className="text-xl font-medium text-[#111111] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#6B7280]">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - LIGHT */}
      <CTASection
        title="Ready to Explore Our Platforms?"
        subtitle="Get started with CTekk Solutions today and unlock the power of integrated career, education, and learning solutions."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
      />
    </main>
  );
}
