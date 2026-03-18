'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Globe,
  Users,
  Briefcase,
  BookOpen,
  Award,
  Stethoscope,
  CreditCard,
  ShoppingCart,
  BookMarked,
  Shield,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { PlatformCard } from '@/components/PlatformCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { CTASection } from '@/components/CTASection';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export default function Home() {
  // Industry cards data
  const industries = [
    {
      icon: Stethoscope,
      name: 'Healthcare',
      description: 'Delivering AI solutions for patient care and operational efficiency',
    },
    {
      icon: CreditCard,
      name: 'Finance',
      description: 'Enabling secure, compliant AI-driven financial intelligence',
    },
    {
      icon: ShoppingCart,
      name: 'Retail',
      description: 'Transforming customer experiences with AI personalization',
    },
    {
      icon: BookMarked,
      name: 'Education',
      description: 'Empowering learners with intelligent educational platforms',
    },
    {
      icon: Shield,
      name: 'Manufacturing',
      description: 'Optimizing production with predictive AI analytics',
    },
    {
      icon: Globe,
      name: 'Government',
      description: 'Supporting public services with advanced AI capabilities',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full overflow-hidden hero-gradient min-h-screen flex items-center justify-center">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top-left orb */}
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' as const }}
            className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-blue-500 to-purple-500"
          />

          {/* Top-right orb */}
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' as const }}
            className="absolute -top-20 -right-40 w-96 h-96 rounded-full blur-3xl opacity-15 bg-gradient-to-br from-cyan-400 to-blue-500"
          />

          {/* Bottom-right orb */}
          <motion.div
            animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' as const }}
            className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-pink-500 to-purple-500"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mx-auto"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Leading Dallas-Based AI Solutions Provider
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              Empowering Enterprises with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Driven Solutions
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
            >
              Dallas-based technology consulting partner transforming enterprises since
              2010. Delivering cutting-edge AI talent, platforms, and consulting services
              that drive innovation and competitive advantage.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              {/* Primary CTA */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Hire AI Talent
                  <ArrowRight size={20} />
                </a>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Book Consultation
                  <ArrowRight size={20} />
                </a>
              </motion.div>

              {/* Tertiary CTA */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/platforms"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Explore Platforms
                  <ArrowRight size={20} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <AnimatedCounter end={15} suffix="+" label="Years Experience" delay={0} />
          <AnimatedCounter end={500} suffix="+" label="Clients Served" delay={0.1} />
          <AnimatedCounter end={50} suffix="+" label="AI Solutions Deployed" delay={0.2} />
          <AnimatedCounter end={98} suffix="%" label="Client Satisfaction" delay={0.3} />
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <SectionHeading
              title="Our Services"
              subtitle="Comprehensive AI and technology solutions tailored to your business needs"
              centered
              gradient={false}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Brain size={24} />}
              title="AI Talent & Consulting"
              description="Access elite AI engineers and consultants to accelerate your AI initiatives and transformation roadmap."
              href="/services"
              delay={0}
            />
            <ServiceCard
              icon={<Cloud size={24} />}
              title="Cloud & DevOps"
              description="Scalable cloud infrastructure and DevOps expertise to modernize and streamline your operations."
              href="/services"
              delay={0.1}
            />
            <ServiceCard
              icon={<Globe size={24} />}
              title="Offshore Development Teams"
              description="Dedicated, managed development teams providing 24/7 coverage and cost-effective software delivery."
              href="/services"
              delay={0.2}
            />
            <ServiceCard
              icon={<Users size={24} />}
              title="Staffing & Recruiting"
              description="Strategic staffing solutions connecting you with top-tier technical talent across all disciplines."
              href="/services"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ===== PLATFORMS SECTION ===== */}
      <section className="bg-white dark:bg-gray-900 py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <SectionHeading
              title="Our Platforms"
              subtitle="Innovative SaaS platforms powering success across recruitment, education, and learning"
              centered
              gradient={false}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PlatformCard
              title="DFWITJOBS"
              description="Premier job marketplace connecting top tech talent with leading companies in the Dallas-Fort Worth metroplex."
              href="https://www.dfwitjobs.com"
              icon={<Briefcase size={40} />}
              color="#3b82f6"
              delay={0}
            />
            <PlatformCard
              title="OPTPlanet"
              description="Comprehensive educational platform for professional development and certification in emerging technologies."
              href="https://www.optplanet.net"
              icon={<GraduationCap size={40} />}
              color="#a855f7"
              delay={0.1}
            />
            <PlatformCard
              title="AI Learn Hub"
              description="Curated learning center for AI, machine learning, and data science education with industry-expert instructors."
              href="https://www.ailearnhub.io"
              icon={<BookOpen size={40} />}
              color="#06b6d4"
              delay={0.2}
            />
            <PlatformCard
              title="Benzaiten LMS"
              description="Powerful learning management system designed for modern training delivery and employee development programs."
              href="https://benzaitenlms.com"
              icon={<Award size={40} />}
              color="#10b981"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES SECTION ===== */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <SectionHeading
              title="Industries We Serve"
              subtitle="Delivering AI solutions across every major sector with deep domain expertise"
              centered
              gradient={false}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut' as const,
                    delay: index * 0.1,
                  }}
                  className="group p-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {industry.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-white dark:bg-gray-900 py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Trusted by Fortune 500 companies and innovative startups alike"
              centered
              gradient={false}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="CTekk Solutions transformed our AI hiring process. Their talent acquisition expertise and platform integration delivered measurable ROI within three months."
              author="Sarah Chen"
              role="CTO"
              company="TechVenture AI"
              delay={0}
            />
            <TestimonialCard
              quote="Working with CTekk's offshore development team has been seamless. Their professionalism, communication, and code quality exceed our expectations across all projects."
              author="Michael Rodriguez"
              role="VP Engineering"
              company="FinTech Innovations"
              delay={0.1}
            />
            <TestimonialCard
              quote="Their AI consulting services helped us identify opportunities we missed internally. The actionable insights and strategic roadmap delivered by their team were invaluable."
              author="Jennifer Park"
              role="Director of AI Strategy"
              company="Healthcare Systems Inc."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <CTASection
            title="Ready to Transform Your Business?"
            subtitle="Partner with CTekk Solutions to unlock the full potential of AI and modern technology for your enterprise."
            primaryCTA={{
              text: 'Get Started Today',
              href: '/contact',
            }}
            secondaryCTA={{
              text: 'View Our Services',
              href: '/services',
            }}
          />
        </div>
      </section>
    </div>
  );
}
