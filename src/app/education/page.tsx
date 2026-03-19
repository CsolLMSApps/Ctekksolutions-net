'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  MessageSquare,
  Eye,
  Briefcase,
  Database,
  BookOpen,
  Monitor,
  ExternalLink,
  CheckCircle2,
  Rocket,
} from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true, margin: '0px 0px -100px 0px' },
};

const highlights = [
  {
    icon: Brain,
    label: 'Expert Instructors',
    description: 'Industry veterans with real-world experience',
  },
  {
    icon: Zap,
    label: 'Hands-On Projects',
    description: 'Learn by building actual AI applications',
  },
  {
    icon: Briefcase,
    label: 'Enterprise Scale',
    description: 'Solutions for teams of any size',
  },
];

const courses = [
  {
    icon: Brain,
    title: 'ML Fundamentals',
    description: 'Master core concepts from supervised and unsupervised learning to model evaluation.',
    color: '#10A37F',
  },
  {
    icon: Zap,
    title: 'Deep Learning',
    description: 'Explore neural networks, backpropagation, and modern deep learning frameworks.',
    color: '#059669',
  },
  {
    icon: MessageSquare,
    title: 'NLP',
    description: 'Learn text processing, language models, and transformer architectures.',
    color: '#34D399',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Master image processing, object detection, and visual recognition systems.',
    color: '#6EE7B7',
  },
  {
    icon: Briefcase,
    title: 'AI for Business',
    description: 'Strategic insights on implementing AI in enterprises and measuring ROI.',
    color: '#0D8A6A',
  },
  {
    icon: Database,
    title: 'Data Engineering & MLOps',
    description: 'Build scalable data pipelines and deploy models in production.',
    color: '#10A37F',
  },
];

const platforms = [
  {
    name: 'AI Learn Hub',
    url: 'www.ailearnhub.io',
    description: 'Comprehensive online learning platform',
    color: '#F97316',
    features: [
      'Interactive courses with hands-on projects',
      'Expert-led workshops and seminars',
      'Industry-recognized certifications',
      'Lifetime course access',
    ],
  },
  {
    name: 'Benzaiten LMS',
    url: 'benzaitenlms.com',
    description: 'Enterprise learning management system',
    color: '#6D28D9',
    features: [
      'Custom curriculum development',
      'Progress tracking and analytics',
      'Team-based learning paths',
      'Integration with existing systems',
    ],
  },
];

const trainingPrograms = [
  {
    title: 'Assessment',
    description: 'Evaluate current skills and create a customized learning path for your team.',
  },
  {
    title: 'Dedicated Training',
    description: 'Instructor-led sessions tailored to your specific business needs.',
  },
  {
    title: 'Certification',
    description: 'Industry-recognized credentials that validate your team\'s AI expertise.',
  },
  {
    title: 'Ongoing Support',
    description: 'Continuous learning resources and mentorship to stay ahead of AI trends.',
  },
];

export default function EducationPage() {
  return (
    <main className="bg-white">
      {/* Hero Section - DARK */}
      <section className="bg-[#0A0F1C] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#10A37F] via-[#34D399] to-[#6EE7B7] bg-clip-text text-transparent">
              AI Education & Training
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Whether you're an enterprise looking to transform your workforce or a professional seeking to advance your AI career, our training programs are designed to meet you where you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section - DARK with Glass Cards */}
      <section className="bg-[#0A0F1C] text-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  className="group rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#10A37F]/20 to-[#34D399]/20 inline-block mb-4">
                    <Icon size={32} className="text-[#10A37F]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Categories Section - LIGHT */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
              Course Categories
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  className="group relative rounded-lg border-2 border-[#E5E7EB] bg-white hover:border-[#10A37F] hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Colored top accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: course.color }}
                  />
                  <div className="p-8">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${course.color}15` }}
                    >
                      <Icon size={24} style={{ color: course.color }} />
                    </div>
                    <h3 className="text-xl font-medium text-[#111111] mb-3">
                      {course.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm">{course.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Platforms Section - DARK with Glass Cards */}
      <section className="bg-[#0A0F1C] text-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#10A37F] to-[#34D399] bg-clip-text text-transparent mb-4">
              Learning Platforms
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, idx) => (
              <motion.div
                key={idx}
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
                <h3 className="text-2xl font-medium text-white mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{platform.url}</p>
                <p className="text-gray-200 mb-6 text-sm">{platform.description}</p>
                <ul className="space-y-3 mb-8">
                  {platform.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#10A37F] flex-shrink-0 mt-0.5" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Career-Ready Training Callout - LIGHT */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeIn}
            className="relative rounded-lg overflow-hidden border-2 border-[#10A37F] p-8 bg-gradient-to-br from-[#F0FDF9] to-white hover:shadow-lg transition-all duration-300"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10A37F] via-[#34D399] to-[#6EE7B7]" />
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#10A37F]/10 flex-shrink-0">
                <Rocket size={32} className="text-[#10A37F]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111111] mb-2">
                  Career-Ready Training
                </h3>
                <p className="text-[#6B7280]">
                  Our programs are designed to build skills that matter in today's AI-driven job market. Pair your training with our career platforms—DFW IT Jobs, OPT Planet, OPT Planet Tech, and OPT Planet - AI Career—to take the next step in your professional journey. OPT Planet - AI Career provides AI-powered career acceleration tools to complement your training.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Training Programs Section - LIGHT */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
              Custom Training Programs
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="group rounded-lg border-2 border-[#E5E7EB] bg-white p-8 hover:border-[#10A37F] hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-medium text-[#111111] mb-3">
                  {program.title}
                </h4>
                <p className="text-[#6B7280] text-sm">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - LIGHT */}
      <CTASection
        title="Transform Your Team's AI Capabilities"
        subtitle="Get started with our AI education and training programs today."
        primaryCTA={{ text: "Request Training", href: "/contact" }}
      />
    </main>
  );
}
