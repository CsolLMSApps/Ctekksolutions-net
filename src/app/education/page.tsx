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
  },
  {
    icon: Zap,
    title: 'Deep Learning',
    description: 'Explore neural networks, backpropagation, and modern deep learning frameworks.',
  },
  {
    icon: MessageSquare,
    title: 'NLP',
    description: 'Learn text processing, language models, and transformer architectures.',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Master image processing, object detection, and visual recognition systems.',
  },
  {
    icon: Briefcase,
    title: 'AI for Business',
    description: 'Strategic insights on implementing AI in enterprises and measuring ROI.',
  },
  {
    icon: Database,
    title: 'Data Engineering & MLOps',
    description: 'Build scalable data pipelines and deploy models in production.',
  },
];

const platforms = [
  {
    name: 'AI Learn Hub',
    url: 'www.ailearnhub.io',
    description: 'Comprehensive online learning platform',
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
    <main className="bg-white dark:bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <motion.div {...fadeIn}>
          <h1 className="text-4xl font-semibold text-[#111111] dark:text-[#ECECEC] mb-4">
            AI Education & Training
          </h1>
          <p className="text-lg text-[#6B7280] dark:text-[#A3A3A3] max-w-2xl mx-auto">
            Empower your workforce with cutting-edge AI and machine learning education through our
            comprehensive training programs.
          </p>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                {...fadeIn}
                className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-6 bg-[#F9FAFB] dark:bg-[#1A1A1A] text-center"
              >
                <Icon size={32} className="text-[#10A37F] mx-auto mb-4" />
                <h3 className="font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-[#6B7280] dark:text-[#A3A3A3]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <SectionHeading title="Course Categories" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={idx}
                {...fadeIn}
                className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-white dark:bg-[#1A1A1A]"
              >
                <div className="w-12 h-12 bg-[#10A37F] rounded-lg flex items-center justify-center text-white mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#111111] dark:text-[#ECECEC] mb-3">
                  {course.title}
                </h3>
                <p className="text-[#6B7280] dark:text-[#A3A3A3] text-sm">{course.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Learning Platforms Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <SectionHeading title="Learning Platforms" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {platforms.map((platform, idx) => (
            <motion.div
              key={idx}
              {...fadeIn}
              className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-[#F9FAFB] dark:bg-[#1A1A1A]"
            >
              <h3 className="text-xl font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                {platform.name}
              </h3>
              <p className="text-sm text-[#6B7280] dark:text-[#A3A3A3] mb-4">{platform.url}</p>
              <p className="text-[#111111] dark:text-[#ECECEC] mb-6 text-sm">{platform.description}</p>
              <ul className="space-y-3 mb-8">
                {platform.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#10A37F] flex-shrink-0 mt-0.5" />
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
          ))}
        </div>
      </section>

      {/* Corporate Training Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <SectionHeading title="Custom Training Programs" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {trainingPrograms.map((program, idx) => (
            <motion.div
              key={idx}
              {...fadeIn}
              className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-6 bg-white dark:bg-[#1A1A1A]"
            >
              <h4 className="text-lg font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                {program.title}
              </h4>
              <p className="text-[#6B7280] dark:text-[#A3A3A3] text-sm">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Transform Your Team's AI Capabilities"
        subtitle="Get started with our AI education and training programs today."
        primaryCTA={{ text: "Request Training", href: "/contact" }}
      />
    </main>
  );
}
