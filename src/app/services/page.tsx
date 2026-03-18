'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Cloud,
  Users,
  Briefcase,
  GraduationCap,
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
    color: '#059669',
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
    color: '#34D399',
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
    color: '#6EE7B7',
    features: [
      'Candidate sourcing',
      'Technical screening',
      'Placement management',
      'Retention support',
    ],
    cta: 'Find Talent',
  },
  {
    title: 'AI Training & Workforce Development',
    description:
      'Upskill your workforce and advance your career with live instructor-led AI training programs designed for professionals and enterprises.',
    icon: GraduationCap,
    color: '#0D8A6A',
    features: [
      'Live instructor-led training',
      'Corporate upskilling programs',
      'Hands-on AI workshops',
      'Career-aligned certification paths',
    ],
    cta: 'Explore Training',
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
    <main className="bg-white">
      {/* Hero Section - DARK */}
      <section className="bg-[#0A0F1C] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#10A37F] via-[#34D399] to-[#6EE7B7] bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              End-to-end technology consulting, training, and talent solutions to transform your business. From AI strategy to execution and workforce development, we deliver results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - LIGHT */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  {...fadeIn}
                  className="group relative rounded-lg overflow-hidden border-2 border-[#E5E7EB] bg-white hover:border-[#10A37F] hover:shadow-lg transition-all duration-300"
                >
                  {/* Colored top accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: service.color }}
                  />
                  <div className="p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <Icon size={28} color={service.color} />
                      </div>
                      <h3 className="text-2xl font-medium text-[#111111]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#6B7280] mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#10A37F] flex-shrink-0 mt-0.5" />
                          <span className="text-[#111111] text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-[#10A37F] hover:text-[#0D8B6B] font-semibold transition-colors"
                    >
                      {service.cta}
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - DARK */}
      <section className="bg-[#0A0F1C] text-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#10A37F] to-[#34D399] bg-clip-text text-transparent mb-4">
              Our Process
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                className="relative group rounded-lg p-8 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Gradient accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10A37F] via-[#34D399] to-transparent rounded-t-xl" />
                <div className="text-4xl font-bold bg-gradient-to-r from-[#10A37F] to-[#34D399] bg-clip-text text-transparent mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - LIGHT */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Let's discuss how our services can accelerate your business transformation."
        primaryCTA={{ text: "Schedule Consultation", href: "/contact" }}
      />
    </main>
  );
}
