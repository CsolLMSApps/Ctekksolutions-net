'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Cloud,
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
  viewport: { once: true, margin: '0px 0px -100px 0px' },
};

const services = [
  {
    title: 'AI Talent & Consulting',
    description:
      'Access world-class AI experts for strategic projects and team augmentation.',
    icon: Zap,
    color: '#10A37F',
    features: [
      'Expert AI/ML consultants',
      'Strategic planning & roadmap',
      'Implementation support',
      'Ongoing optimization',
    ],
    cta: 'Get AI Talent',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Build scalable infrastructure and streamline your deployment pipeline.',
    icon: Cloud,
    color: '#3B82F6',
    features: [
      'Cloud architecture design',
      'Infrastructure automation',
      'CI/CD pipeline setup',
      'Performance optimization',
    ],
    cta: 'Explore Cloud Services',
  },
  {
    title: 'Offshore Development Teams',
    description:
      'Scale your engineering capacity with dedicated, skilled development teams.',
    icon: Users,
    color: '#8B5CF6',
    features: [
      'Dedicated team models',
      'Full-stack development',
      'Project management',
      'Quality assurance',
    ],
    cta: 'Build Your Team',
  },
  {
    title: 'Staffing & Recruiting',
    description:
      'Find the right talent for your organization with precision placement.',
    icon: Briefcase,
    color: '#F59E0B',
    features: [
      'Candidate sourcing',
      'Technical screening',
      'Placement management',
      'Retention support',
    ],
    cta: 'Find Talent',
  },
];

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your business needs and technical requirements.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Develop a comprehensive roadmap tailored to your goals.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Implement solutions with dedicated, expert teams.',
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Continuously improve performance and outcomes.',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <motion.div {...fadeIn}>
          <h1 className="text-4xl font-semibold text-[#111111] dark:text-[#ECECEC] mb-4">
            Our Services
          </h1>
          <p className="text-lg text-[#6B7280] dark:text-[#A3A3A3] max-w-2xl mx-auto">
            End-to-end technology consulting to transform your business. From AI strategy to execution,
            we deliver results.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                {...fadeIn}
                className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-white dark:bg-[#1A1A1A] hover:border-[#10A37F] dark:hover:border-[#10A37F] transition-colors"
              >
                <div className="mb-6 flex items-center gap-3">
                  <Icon size={28} color={service.color} />
                  <h3 className="text-xl font-semibold text-[#111111] dark:text-[#ECECEC]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[#6B7280] dark:text-[#A3A3A3] mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#10A37F] flex-shrink-0 mt-0.5" />
                      <span className="text-[#111111] dark:text-[#ECECEC]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#10A37F] hover:text-[#0D8B6B] dark:hover:text-[#10A37F] font-medium transition-colors"
                >
                  {service.cta}
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <SectionHeading title="Our Process" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-6 bg-[#F9FAFB] dark:bg-[#1A1A1A]"
            >
              <div className="text-3xl font-bold text-[#10A37F] mb-4">{step.number}</div>
              <h3 className="text-lg font-semibold text-[#111111] dark:text-[#ECECEC] mb-3">
                {step.title}
              </h3>
              <p className="text-[#6B7280] dark:text-[#A3A3A3]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Let's discuss how our services can accelerate your business transformation."
        primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
      />
    </main>
  );
}
