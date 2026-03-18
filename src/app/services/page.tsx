'use client';

import { motion } from 'framer-motion';
import { Brain, Cloud, Globe, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const services = [
  {
    id: 'ai-talent',
    title: 'AI Talent & Consulting',
    icon: Brain,
    description:
      'Access elite AI/ML engineers, data scientists, NLP specialists, and computer vision experts who drive innovation and solve complex technical challenges.',
    features: [
      'AI Strategy Consulting',
      'ML Model Development',
      'NLP & Computer Vision',
      'AI Integration & Deployment',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: Cloud,
    description:
      'AWS, Azure, and GCP certified architects and engineers delivering scalable, secure, and efficient cloud infrastructure solutions.',
    features: [
      'Cloud Migration',
      'DevOps Automation',
      'Kubernetes & Containers',
      'CI/CD Pipeline Design',
    ],
  },
  {
    id: 'offshore-teams',
    title: 'Offshore Development Teams',
    icon: Globe,
    description:
      'Dedicated development teams based in India operating across US and UK timezones, providing seamless collaboration and cost-effective scaling.',
    features: [
      'Dedicated Development Teams',
      'US/UK Timezone Alignment',
      'Cost-Effective Scaling',
      'Quality Assurance & Testing',
    ],
  },
  {
    id: 'staffing',
    title: 'Staffing & Recruiting',
    icon: Users,
    description:
      'Contract, contract-to-hire, and permanent placement solutions tailored to your specific technical and cultural requirements.',
    features: [
      'Technical Screening',
      'Cultural Fit Assessment',
      'Rapid Placement',
      'Ongoing Support',
    ],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We understand your business goals, technical challenges, and team requirements through comprehensive consultation.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We develop a tailored strategy that aligns with your objectives, timelines, and budget constraints.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Our experts implement solutions with precision, maintaining clear communication throughout the process.',
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'We continuously refine and optimize to ensure maximum value, performance, and team satisfaction.',
  },
];

export default function ServicesPage() {
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

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-10 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology consulting and staffing solutions designed to accelerate your digital transformation and scale your capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-20"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 mb-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                        <Icon size={28} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h2>
                    </motion.div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={20}
                            className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
                          />
                          <span className="text-gray-700 dark:text-gray-200 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                      >
                        Get Started
                        <ArrowRight size={20} />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Decorative Element */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative h-80 rounded-2xl overflow-hidden ${
                      isEven ? '' : 'lg:col-start-1'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/10 dark:to-pink-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <Icon size={80} className="text-blue-600/40 dark:text-blue-400/40" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 sm:px-10 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Our Process"
            subtitle="A structured approach to delivering exceptional results and ensuring your success"
            centered
            gradient
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                )}

                <div className="relative">
                  {/* Step Number Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg"
                  >
                    {step.number}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <CTASection
            title="Ready to Scale Your Team?"
            subtitle="Let's discuss how CTekk Solutions can help you achieve your business goals with expert talent and innovative solutions."
            primaryCTA={{ text: 'Hire Talent', href: '/contact' }}
            secondaryCTA={{ text: 'Book Consultation', href: '/contact' }}
          />
        </div>
      </section>
    </div>
  );
}
