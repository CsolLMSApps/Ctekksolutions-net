'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Globe,
  Users,
  Briefcase,
  BookOpen,
  Heart,
  Building2,
  ShoppingCart,
  GraduationCap,
  Factory,
  Landmark,
  Monitor,
  Rocket,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { PlatformCard } from '@/components/PlatformCard';
import { CTASection } from '@/components/CTASection';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export default function Home() {
  const easeInOutCubic = [0.42, 0, 0.58, 1] as const;
  const easeOutQuart = [0.25, 1, 0.25, 1] as const;

  return (
    <div className="min-h-screen bg-white">
      {/* ===== ANIMATED TICKER BAR ===== */}
      <div className="bg-[#0A0F1C] border-b border-white/5 overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap py-2 px-6"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' as const }}
        >
          {['AI Talent', 'Cloud Consulting', 'Offshore Teams', 'AI Training', 'DFWITJOBS', 'OPTPlanet', 'AI Learn Hub', 'Benzaiten LMS'].map((item, i) => (
            <span key={i} className="text-xs text-gray-500">
              {item} ·
            </span>
          ))}
          {['AI Talent', 'Cloud Consulting', 'Offshore Teams', 'AI Training', 'DFWITJOBS', 'OPTPlanet', 'AI Learn Hub', 'Benzaiten LMS'].map((item, i) => (
            <span key={`repeat-${i}`} className="text-xs text-gray-500">
              {item} ·
            </span>
          ))}
        </motion.div>
      </div>

      {/* ===== HERO SECTION — DARK ===== */}
      <section className="bg-[#0A0F1C] text-white py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutQuart }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#10A37F] rounded-full"
            />
            <span className="text-xs text-gray-300">Serving enterprises since 2010</span>
          </motion.div>

          {/* Headline with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeInOutCubic }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span>Empowering Enterprises with </span>
              <span className="bg-gradient-to-r from-[#10A37F] via-[#06B6D4] to-[#3B82F6] bg-clip-text text-transparent">
                AI-Driven Solutions.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeInOutCubic }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            From talent acquisition to AI training and career platforms — we help enterprises and professionals thrive in the age of AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeInOutCubic }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
          >
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(16, 163, 127, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#10A37F] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Explore Services
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="/education"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.08)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-colors"
            >
              Start Your AI Journey
              <Zap size={16} />
            </motion.a>

            <motion.a
              href="/platforms"
              whileHover={{ scale: 1.05, x: 8 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-[#06B6D4] font-medium hover:text-[#10A37F] transition-colors"
            >
              View Platforms
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Stats Row — Inside Dark Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeInOutCubic }}
            className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-20 pt-12 border-t border-white/10"
          >
            <div className="py-6 px-4 border-r border-white/10 last:border-r-0">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-sm text-gray-400">Years</div>
            </div>
            <div className="py-6 px-4 border-r border-white/10 last:border-r-0">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-gray-400">Clients</div>
            </div>
            <div className="py-6 px-4 border-r border-white/10 last:border-r-0">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-gray-400">AI Solutions</div>
            </div>
            <div className="py-6 px-4 border-r border-white/10 last:border-r-0">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES — LIGHT ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="What We Do"
            subtitle="End-to-end technology consulting, AI talent, and workforce development."
            centered
          />

          <p className="text-center text-gray-600 max-w-2xl mx-auto mt-6 mb-12">
            Whether you're scaling your team or advancing your career, our services bridge the gap between talent and opportunity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeInOutCubic }}
            >
              <ServiceCard
                icon={<Brain size={24} />}
                title="AI Talent"
                description="Access elite AI engineers and consultants to accelerate your AI initiatives and transformation roadmap."
                href="/services"
                delay={0}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeInOutCubic }}
            >
              <ServiceCard
                icon={<Cloud size={24} />}
                title="Cloud & DevOps"
                description="Scalable cloud infrastructure and DevOps expertise to modernize and streamline your operations."
                href="/services"
                delay={0.1}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeInOutCubic }}
            >
              <ServiceCard
                icon={<Globe size={24} />}
                title="Offshore Teams"
                description="Dedicated, managed development teams providing 24/7 coverage and cost-effective software delivery."
                href="/services"
                delay={0.2}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: easeInOutCubic }}
            >
              <ServiceCard
                icon={<Users size={24} />}
                title="Staffing & Recruiting"
                description="Strategic staffing solutions connecting you with top-tier technical talent across all disciplines."
                href="/services"
                delay={0.3}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: easeInOutCubic }}
            >
              <ServiceCard
                icon={<GraduationCap size={24} />}
                title="AI Training & Upskilling"
                description="Comprehensive training programs to upskill your workforce in emerging AI technologies and best practices."
                href="/services"
                delay={0.4}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORMS — DARK ===== */}
      <section className="bg-[#0A0F1C] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeInOutCubic }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Platform Ecosystem</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Purpose-built platforms powering workforce, careers, and education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* DFWITJOBS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeInOutCubic }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-colors group"
            >
              <div className="h-1 w-12 bg-[#10A37F] rounded-full mb-6" />
              <div className="mb-4 text-[#10A37F]">
                <Briefcase size={32} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">DFWITJOBS</h3>
              <p className="text-gray-400 text-sm mb-6">
                Premier job marketplace connecting top tech talent with leading companies in the Dallas-Fort Worth metroplex.
              </p>
              <motion.a
                href="https://www.dfwitjobs.com"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-[#10A37F] font-medium text-sm hover:gap-3 transition-all"
              >
                Visit <ArrowRight size={14} />
              </motion.a>
            </motion.div>

            {/* OPTPlanet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeInOutCubic }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-colors group"
            >
              <div className="h-1 w-12 bg-[#6366F1] rounded-full mb-6" />
              <div className="mb-4 text-[#6366F1]">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">OPTPlanet</h3>
              <p className="text-gray-400 text-sm mb-6">
                Comprehensive educational platform for professional development and certification in emerging technologies.
              </p>
              <motion.a
                href="https://www.optplanet.net"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-[#6366F1] font-medium text-sm hover:gap-3 transition-all"
              >
                Visit <ArrowRight size={14} />
              </motion.a>
            </motion.div>

            {/* OPTPlanet.tech */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeInOutCubic }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-colors group"
            >
              <div className="h-1 w-12 bg-[#8B5CF6] rounded-full mb-6" />
              <div className="mb-4 text-[#8B5CF6]">
                <Rocket size={32} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">OPTPlanet.tech</h3>
              <p className="text-gray-400 text-sm mb-6">
                Global AI job board connecting startups with STEM talent for remote AI jobs and prompt engineering roles.
              </p>
              <motion.a
                href="https://optplanet.tech"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-[#8B5CF6] font-medium text-sm hover:gap-3 transition-all"
              >
                Visit <ArrowRight size={14} />
              </motion.a>
            </motion.div>

            {/* AI Learn Hub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: easeInOutCubic }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-colors group"
            >
              <div className="h-1 w-12 bg-[#F59E0B] rounded-full mb-6" />
              <div className="mb-4 text-[#F59E0B]">
                <BookOpen size={32} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">AI Learn Hub</h3>
              <p className="text-gray-400 text-sm mb-6">
                Curated learning center for AI, machine learning, and data science education with industry-expert instructors.
              </p>
              <motion.a
                href="https://www.ailearnhub.io"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-[#F59E0B] font-medium text-sm hover:gap-3 transition-all"
              >
                Visit <ArrowRight size={14} />
              </motion.a>
            </motion.div>

            {/* Benzaiten LMS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: easeInOutCubic }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-colors group"
            >
              <div className="h-1 w-12 bg-[#EC4899] rounded-full mb-6" />
              <div className="mb-4 text-[#EC4899]">
                <Monitor size={32} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Benzaiten LMS</h3>
              <p className="text-gray-400 text-sm mb-6">
                Powerful learning management system designed for modern training delivery and employee development programs.
              </p>
              <motion.a
                href="https://benzaitenlms.com"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-[#EC4899] font-medium text-sm hover:gap-3 transition-all"
              >
                Visit <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES — LIGHT ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Industries We Serve" centered />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {[
              { icon: Heart, label: 'Healthcare', color: '#EF4444' },
              { icon: Building2, label: 'Finance', color: '#3B82F6' },
              { icon: ShoppingCart, label: 'Retail', color: '#F59E0B' },
              { icon: GraduationCap, label: 'Education', color: '#8B5CF6' },
              { icon: Factory, label: 'Manufacturing', color: '#10B981' },
              { icon: Landmark, label: 'Government', color: '#6366F1' },
            ].map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: easeInOutCubic }}
                  className="border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <div style={{ color: industry.color }} className="flex-shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <span className="text-gray-900 font-medium">{industry.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== YOUR AI JOURNEY — GRADIENT ===== */}
      <section className="bg-gradient-to-br from-[#0A0F1C] to-[#111827] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeInOutCubic }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#06B6D4] via-[#10A37F] to-[#8B5CF6] bg-clip-text text-transparent">
                Your AI Journey Starts Here
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Upskill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeInOutCubic }}
              className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-8 text-center hover:bg-white/[0.08] transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex justify-center mb-6"
              >
                <div className="text-[#06B6D4]">
                  <GraduationCap size={40} />
                </div>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Upskill</h3>
              <p className="text-gray-400">
                Find the right training programs to master emerging technologies and advance your expertise.
              </p>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeInOutCubic }}
              className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-8 text-center hover:bg-white/[0.08] transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex justify-center mb-6"
              >
                <div className="text-[#3B82F6]">
                  <Users size={40} />
                </div>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <p className="text-gray-400">
                Match with opportunities that fit your expertise and career goals across our platform ecosystem.
              </p>
            </motion.div>

            {/* Grow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeInOutCubic }}
              className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-8 text-center hover:bg-white/[0.08] transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex justify-center mb-6"
              >
                <div className="text-[#8B5CF6]">
                  <Rocket size={40} />
                </div>
              </motion.div>
              <h3 className="text-xl font-bold mb-3">Grow</h3>
              <p className="text-gray-400">
                Advance your career with global platforms connecting you to leading opportunities worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION — LIGHT ===== */}
      <section className="bg-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <CTASection
            title="Ready to Get Started?"
            subtitle=""
            primaryCTA={{
              text: 'Contact Us',
              href: '/contact',
            }}
            secondaryCTA={{
              text: 'Explore Platforms',
              href: '/platforms',
            }}
          />
        </div>
      </section>
    </div>
  );
}
