'use client';

import { motion } from 'framer-motion';
import { Users, Lightbulb, Shield, Handshake, MapPin, Mail, Phone } from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';
import { AnimatedCounter } from '../../components/AnimatedCounter';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  viewport: { once: true },
};

export default function AboutPage() {
  // Leadership team data
  const team = [
    {
      name: 'Raj Patel',
      title: 'Founder & CEO',
      bio: 'Visionary leader with 20+ years in tech consulting and enterprise solutions.',
    },
    {
      name: 'Sarah Williams',
      title: 'CTO',
      bio: 'AI and cloud architecture expert leading our technology innovation.',
    },
    {
      name: 'Vikram Singh',
      title: 'VP, Delivery',
      bio: 'Operations expert ensuring world-class delivery across all client projects.',
    },
    {
      name: 'Maria Garcia',
      title: 'VP, Business Development',
      bio: 'Strategic partnerships and growth leader driving business expansion.',
    },
  ];

  // Values data
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge AI and cloud solutions.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Operating with transparency and ethical standards in all partnerships.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working seamlessly with clients to achieve shared success.',
    },
    {
      icon: Handshake,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project and interaction.',
    },
  ];

  // Stats data
  const stats = [
    { label: 'Years of Excellence', value: 15, suffix: '+' },
    { label: 'Clients Served', value: 500, suffix: '+' },
    { label: 'Countries', value: 12, suffix: '+' },
    { label: 'AI Solutions', value: 50, suffix: '+' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 md:px-8 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About CTekk Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Transforming enterprises through AI, cloud innovation, and world-class talent
          </p>
        </motion.div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Our Story" subtitle="From startup vision to industry leader" />

          <motion.div
            {...fadeInUp}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12 mt-12"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in 2010 in Dallas, Texas, CTekk Solutions began as a specialized staffing
              company focused on connecting enterprises with top technical talent. Over the past
              15 years, we've evolved into a comprehensive technology consulting firm.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we're recognized leaders in AI solutions, cloud architecture, and workforce
              transformation. Our dual-shore delivery model—combining Dallas-based expertise with
              India-based technical excellence—enables us to deliver world-class solutions at
              competitive rates to enterprises across 12+ countries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Mission & Vision"
            subtitle="Guiding our path forward"
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mt-12"
          >
            {/* Mission Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower enterprises with cutting-edge AI solutions and world-class talent
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8 border border-indigo-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading technology consulting partner for businesses navigating digital
                transformation
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            By the Numbers
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center text-white"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} label={stat.label} />
                </div>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Our Core Values"
            subtitle="What drives us every day"
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 mt-12"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Global Delivery Model Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Global Delivery Model"
            subtitle="Best of both worlds: US expertise + offshore excellence"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-700 text-lg max-w-3xl mx-auto mt-6 mb-12"
          >
            Our proven dual-shore model combines Dallas-based strategic leadership with India-based
            technical expertise, ensuring US/UK timezone coverage and exceptional delivery quality.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mt-12"
          >
            {/* Dallas Office */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border border-blue-200 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Dallas HQ</h3>
              </div>
              <p className="text-gray-700 mb-4">Strategic leadership and client-facing services</p>
              <p className="text-gray-600">
                14800 Quorum Drive, Suite 285
                <br />
                Dallas, TX 75254, USA
              </p>
            </motion.div>

            {/* India Offshore */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-indigo-50 to-white rounded-lg p-8 border border-indigo-200 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">India Delivery Center</h3>
              </div>
              <p className="text-gray-700 mb-4">24/7 technical expertise and development excellence</p>
              <p className="text-gray-600">
                Multiple offices across India
                <br />
                Full US/UK timezone coverage
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Leadership Team" subtitle="Meet the visionaries behind CTekk" />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 mt-12"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Gradient Avatar Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${
                  index === 0 ? 'from-blue-400 to-blue-600' :
                  index === 1 ? 'from-purple-400 to-purple-600' :
                  index === 2 ? 'from-indigo-400 to-indigo-600' :
                  'from-pink-400 to-pink-600'
                }`}></div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Let's discuss how CTekk Solutions can help your enterprise succeed"
        primaryCTA={{ text: "Book Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Explore Services", href: "/services" }}
      />
    </div>
  );
}
