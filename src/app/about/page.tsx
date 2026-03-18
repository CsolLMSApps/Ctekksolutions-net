'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Shield, Users, Handshake, MapPin } from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';
import { AnimatedCounter } from '../../components/AnimatedCounter';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function AboutPage() {
  const team = [
    {
      name: 'Raj Patel',
      initials: 'RP',
      title: 'CEO',
      bio: 'Visionary leader with 20+ years in tech consulting.',
    },
    {
      name: 'Sarah Williams',
      initials: 'SW',
      title: 'CTO',
      bio: 'AI and cloud architecture expert.',
    },
    {
      name: 'Vikram Singh',
      initials: 'VS',
      title: 'VP Delivery',
      bio: 'Operations and delivery excellence leader.',
    },
    {
      name: 'Maria Garcia',
      initials: 'MG',
      title: 'VP BD',
      bio: 'Strategic partnerships and growth driver.',
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge AI and cloud solutions',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparency and ethical standards',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Seamless client partnerships',
    },
    {
      icon: Handshake,
      title: 'Excellence',
      description: 'Exceptional quality delivery',
    },
  ];

  const stats = [
    { label: '15+ Years', value: 15, suffix: '+' },
    { label: '500+ Clients', value: 500, suffix: '+' },
    { label: '50+ Solutions', value: 50, suffix: '+' },
    { label: '98% Satisfaction', value: 98, suffix: '%' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0D0D0D]">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="py-20 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#111111] dark:text-[#ECECEC]">
            About CTekk Solutions
          </h1>
          <p className="text-xl text-[#6B7280] dark:text-[#ECECEC]/70">
            Transforming enterprises through AI, cloud innovation, and world-class talent since 2010
          </p>
        </div>
      </motion.section>

      {/* Story */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-3xl mx-auto py-20 px-6"
      >
        <SectionHeading title="Our Story" centered />
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-[#6B7280] dark:text-[#ECECEC]/70 space-y-4"
        >
          <p>
            Founded in 2010 in Dallas, Texas, CTekk Solutions began as a specialized staffing company connecting enterprises with top technical talent. Over 15 years, we've evolved into a comprehensive technology consulting firm.
          </p>
          <p>
            Today, we're recognized leaders in AI solutions, cloud architecture, and workforce transformation. Our dual-shore delivery model combines Dallas-based expertise with India-based technical excellence, enabling world-class solutions at competitive rates.
          </p>
        </motion.div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <SectionHeading title="Mission & Vision" centered />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-white dark:bg-[#0D0D0D]"
          >
            <h3 className="text-xl font-semibold text-[#111111] dark:text-[#ECECEC] mb-4">
              Our Mission
            </h3>
            <p className="text-[#6B7280] dark:text-[#ECECEC]/70">
              To empower enterprises with cutting-edge AI solutions and world-class talent.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-white dark:bg-[#0D0D0D]"
          >
            <h3 className="text-xl font-semibold text-[#111111] dark:text-[#ECECEC] mb-4">
              Our Vision
            </h3>
            <p className="text-[#6B7280] dark:text-[#ECECEC]/70">
              To be the global leader in technology consulting for digital transformation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <div className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-12 bg-[#F9FAFB] dark:bg-[#0D0D0D]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-semibold text-[#10A37F] mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} label="" />
                </div>
                <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]/70">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <SectionHeading title="Core Values" centered />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-6 bg-white dark:bg-[#0D0D0D]"
              >
                <Icon size={24} className="text-[#10A37F] mb-3" />
                <h3 className="font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]/70">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Global Delivery */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <SectionHeading title="Global Delivery" centered />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-white dark:bg-[#0D0D0D]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#10A37F] flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#111111] dark:text-[#ECECEC]">
                Dallas HQ
              </h3>
            </div>
            <p className="text-[#6B7280] dark:text-[#ECECEC]/70 text-sm">
              Strategic leadership and client-facing services. 14800 Quorum Drive, Suite 285, Dallas, TX 75254
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-8 bg-white dark:bg-[#0D0D0D]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#10A37F] flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#111111] dark:text-[#ECECEC]">
                India Delivery
              </h3>
            </div>
            <p className="text-[#6B7280] dark:text-[#ECECEC]/70 text-sm">
              24/7 technical expertise and development excellence with full US/UK timezone coverage
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Leadership */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <SectionHeading title="Leadership Team" centered />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
              className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-6 bg-white dark:bg-[#0D0D0D] text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#F0FDF9] dark:bg-[#10A37F]/20 flex items-center justify-center mx-auto mb-4 text-[#10A37F] font-semibold text-lg">
                {member.initials}
              </div>
              <h3 className="font-semibold text-[#111111] dark:text-[#ECECEC] mb-1">
                {member.name}
              </h3>
              <p className="text-xs text-[#10A37F] font-medium mb-3">
                {member.title}
              </p>
              <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]/70">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <CTASection
          title="Ready to Transform Your Business?"
          primaryCTA={{ text: 'Book Consultation', href: '/contact' }}
        />
      </motion.section>
    </div>
  );
}
