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
    <div className="min-h-screen bg-white">
      {/* Hero - DARK */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="bg-[#0A0F1C] text-white py-20 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #10A37F, #06B6D4, #3B82F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About CTekk Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70"
          >
            Transforming enterprises through AI, cloud innovation, and world-class talent since 2010
          </motion.p>
        </div>
      </motion.section>

      {/* Story - LIGHT */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white max-w-3xl mx-auto py-20 px-6"
      >
        <SectionHeading title="Our Story" centered />
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-[#6B7280] space-y-4"
        >
          <p>
            Founded in 2010 in Dallas, Texas, CTekk Solutions began as a specialized staffing company connecting enterprises with top technical talent. Over 15 years, we've evolved into a comprehensive technology consulting firm.
          </p>
          <p>
            Today, we're recognized leaders in AI solutions, cloud architecture, and workforce transformation. Our dual-shore delivery model combines Dallas-based expertise with India-based technical excellence, enabling world-class solutions at competitive rates. Beyond consulting, we're committed to advancing professional careers through our training and workforce platforms, helping both enterprises and individuals thrive in the AI-driven economy.
          </p>
        </motion.div>
      </motion.section>

      {/* Mission & Vision - DARK bg, glass-cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-[#0A0F1C] max-w-6xl mx-auto py-20 px-6"
      >
        <motion.div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center"
            style={{
              background: 'linear-gradient(135deg, #10A37F, #06B6D4, #3B82F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Mission & Vision
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-white/70">
              To empower enterprises with cutting-edge AI solutions and world-class talent.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-white/70">
              To be the global leader in technology consulting for digital transformation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats - DARK bg with AnimatedCounters */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-[#0A0F1C] max-w-6xl mx-auto py-20 px-6"
      >
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-12">
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
                <div className="text-4xl font-semibold text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} label="" />
                </div>
                <p className="text-sm text-white/70">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white max-w-6xl mx-auto py-20 px-6"
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
                className="border border-[#E5E7EB] rounded-xl p-6 bg-white"
              >
                <Icon size={24} className="text-[#10A37F] mb-3" />
                <h3 className="font-semibold text-[#111111] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6B7280]">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Global Delivery - DARK bg, glass-cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-[#0A0F1C] max-w-6xl mx-auto py-20 px-6"
      >
        <motion.div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center"
            style={{
              background: 'linear-gradient(135deg, #10A37F, #06B6D4, #3B82F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Global Delivery
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#10A37F] flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Dallas HQ
              </h3>
            </div>
            <p className="text-white/70 text-sm space-y-2">
              <span className="block">Strategic leadership and client-facing services</span>
              <span className="block font-medium text-white">14800 Quorum Drive, Suite 285, Dallas, TX 75254</span>
              <span className="block font-medium text-white">408-471-7753</span>
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#10A37F] flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Mysuru, India
              </h3>
            </div>
            <p className="text-white/70 text-sm space-y-2">
              <span className="block">24/7 technical expertise and development excellence</span>
              <span className="block font-medium text-white">2nd Floor, 442, Jayachamarajendra Rd, Vijayanagar 1st Stage, Mysuru, Karnataka 570017, India</span>
              <span className="block font-medium text-white">+91 76766 66844</span>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white max-w-6xl mx-auto py-20 px-6"
      >
        <CTASection
          title="Ready to Transform Your Business?"
          primaryCTA={{ text: 'Book Consultation', href: '/contact' }}
        />
      </motion.section>
    </div>
  );
}
