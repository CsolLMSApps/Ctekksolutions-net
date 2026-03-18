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
              background: 'linear-gradient(135deg, #10A37F, #34D399, #6EE7B7)',
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
        className="bg-white py-20 md:py-32 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Our Story" centered />
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 text-[#6B7280] space-y-4"
          >
            <p>
              Founded in 2010 as a custom software development firm in Dallas, Texas, C.Tekk Solutions began by building tailored enterprise applications for clients across healthcare, finance, and retail. As the technology landscape evolved, so did we.
            </p>
            <p>
              Recognizing the growing demand for skilled professionals, we expanded into corporate training and workforce development — helping organizations upskill their teams in emerging technologies. This pivot proved transformative.
            </p>
            <p>
              By 2018, we had entered the high-tech domains of Artificial Intelligence, Machine Learning, Natural Language Processing, and Robotic Process Automation. What started as training engagements grew into full-scale consulting — designing and deploying AI-driven solutions for enterprises navigating digital transformation.
            </p>
            <p>
              Today, C.Tekk Solutions is a comprehensive AI talent, training, and technology products company. Our suite of platforms — DFWITJOBS, OPTPlanet, OPTPlanet.tech, AI Learn Hub, and Benzaiten LMS — forms an integrated ecosystem that connects talent acquisition, career development, and enterprise learning. With a strong foundation in automation and a relentless focus on practical AI applications, we help both enterprises and professionals thrive in the age of intelligent technology.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision - LIGHT bg with accent bars */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-[#F9FAFB] py-20 md:py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#111827]">
              Mission & Vision
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 border-l-4 border-[#10A37F]"
            >
              <h3 className="text-xl font-semibold text-[#111827] mb-4">
                Our Mission
              </h3>
              <p className="text-[#6B7280]">
                To empower enterprises with cutting-edge AI solutions and world-class talent, enabling digital transformation and sustainable competitive advantage.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-8 border-l-4 border-[#059669]"
            >
              <h3 className="text-xl font-semibold text-[#111827] mb-4">
                Our Vision
              </h3>
              <p className="text-[#6B7280]">
                To be the global leader in AI talent acquisition, intelligent learning, and technology solutions that drive meaningful progress for enterprises and professionals worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats - DARK bg with AnimatedCounters */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-[#111827] py-20 md:py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-lg p-12">
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
        </div>
      </motion.section>

      {/* Core Values - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white py-20 md:py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
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
                  className="border border-[#E5E7EB] rounded-lg p-8 bg-white hover:border-[#10A37F] transition-colors"
                >
                  <Icon size={24} className="text-[#10A37F] mb-3" />
                  <h3 className="font-semibold text-[#111827] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Global Delivery - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-[#F9FAFB] py-20 md:py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#111827]">
              Global Delivery
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-[#E5E7EB]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#10A37F] flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Dallas HQ
                </h3>
              </div>
              <p className="text-[#6B7280] text-sm space-y-2">
                <span className="block">Strategic leadership and client-facing services</span>
                <span className="block font-medium text-[#111827]">14800 Quorum Drive, Suite 285</span>
                <span className="block font-medium text-[#111827]">Dallas, TX 75254</span>
                <span className="block font-medium text-[#111827]">408-471-7753</span>
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-8 border border-[#E5E7EB]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#059669] flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Mysuru, India
                </h3>
              </div>
              <p className="text-[#6B7280] text-sm space-y-2">
                <span className="block">24/7 technical expertise and development excellence</span>
                <span className="block font-medium text-[#111827]">2nd Floor, 442, Jayachamarajendra Rd</span>
                <span className="block font-medium text-[#111827]">Vijayanagar 1st Stage, Mysuru</span>
                <span className="block font-medium text-[#111827]">Karnataka 570017, India</span>
                <span className="block font-medium text-[#111827]">+91 76766 66844</span>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white py-8 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Ready to Transform Your Business?"
            primaryCTA={{ text: 'Book Consultation', href: '/contact' }}
          />
        </div>
      </motion.section>
    </div>
  );
}
