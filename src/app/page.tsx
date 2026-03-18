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
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { PlatformCard } from '@/components/PlatformCard';
import { CTASection } from '@/components/CTASection';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0D0D0D]">
      {/* ===== HERO SECTION ===== */}
      <section className="w-full py-24 md:py-32 px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F0FDF9] text-[#10A37F] text-xs font-medium mb-6">
            AI-Powered Consulting · Training · Talent
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#111111] dark:text-[#ECECEC] leading-tight mb-6">
            Empowering Enterprises with AI-Driven Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-[#6B7280] dark:text-[#A0A0A0] leading-relaxed max-w-2xl mx-auto mb-8">
            From talent acquisition to AI training and career platforms, we help enterprises and professionals thrive in the age of AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.a
              href="/services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex px-6 py-3 bg-[#10A37F] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Explore Services
            </motion.a>

            <motion.a
              href="/education"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex px-6 py-3 border border-[#E5E7EB] dark:border-[#2D2D2D] text-[#111111] dark:text-[#ECECEC] rounded-lg font-medium hover:bg-[#F9FAFB] dark:hover:bg-[#1A1A1A] transition-colors"
            >
              Start Your AI Journey
            </motion.a>

            <motion.a
              href="/platforms"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex text-[#10A37F] font-medium hover:opacity-80 transition-opacity"
            >
              View Platforms
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[#F9FAFB] dark:bg-[#1A1A1A] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedCounter
                end={15}
                suffix="+"
                label="Years of Excellence"
                delay={0}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <AnimatedCounter
                end={500}
                suffix="+"
                label="Clients Served"
                delay={0.1}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AnimatedCounter
                end={50}
                suffix="+"
                label="AI Solutions Deployed"
                delay={0.2}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatedCounter
                end={98}
                suffix="%"
                label="Client Satisfaction"
                delay={0.3}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="What We Do"
            subtitle="End-to-end technology consulting and AI talent solutions."
            centered
          />

          <p className="text-center text-[#6B7280] dark:text-[#A0A0A0] max-w-2xl mx-auto mt-6 mb-12">
            Whether you're scaling your team or advancing your career, our services bridge the gap between talent and opportunity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ServiceCard
                icon={<Brain size={24} />}
                title="AI Talent & Consulting"
                description="Access elite AI engineers and consultants to accelerate your AI initiatives and transformation roadmap."
                href="/services"
                delay={0}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
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
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ServiceCard
                icon={<Globe size={24} />}
                title="Offshore Development Teams"
                description="Dedicated, managed development teams providing 24/7 coverage and cost-effective software delivery."
                href="/services"
                delay={0.2}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ServiceCard
                icon={<Users size={24} />}
                title="Staffing & Recruiting"
                description="Strategic staffing solutions connecting you with top-tier technical talent across all disciplines."
                href="/services"
                delay={0.3}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORMS ===== */}
      <section className="bg-[#F9FAFB] dark:bg-[#1A1A1A] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Our Platforms"
            subtitle="Purpose-built platforms powering workforce and education."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <PlatformCard
                title="DFWITJOBS"
                description="Premier job marketplace connecting top tech talent with leading companies in the Dallas-Fort Worth metroplex."
                href="https://www.dfwitjobs.com"
                icon={<Briefcase size={40} />}
                color="#10A37F"
                delay={0}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <PlatformCard
                title="OPTPlanet"
                description="Comprehensive educational platform for professional development and certification in emerging technologies."
                href="https://www.optplanet.net"
                icon={<GraduationCap size={40} />}
                color="#6366F1"
                delay={0.1}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PlatformCard
                title="AI Learn Hub"
                description="Curated learning center for AI, machine learning, and data science education with industry-expert instructors."
                href="https://www.ailearnhub.io"
                icon={<BookOpen size={40} />}
                color="#F59E0B"
                delay={0.2}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <PlatformCard
                title="Benzaiten LMS"
                description="Powerful learning management system designed for modern training delivery and employee development programs."
                href="https://benzaitenlms.com"
                icon={<Monitor size={40} />}
                color="#EC4899"
                delay={0.3}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <PlatformCard
                title="OPTPlanet.tech"
                description="Global AI job board connecting startups with STEM talent for remote AI jobs, prompt engineering roles, and automation work."
                href="https://optplanet.tech"
                icon={<Rocket size={40} />}
                color="#8B5CF6"
                delay={0.4}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Industries We Serve"
            subtitle=""
            centered
          />

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
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="border border-[#E5E7EB] dark:border-[#2D2D2D] rounded-xl p-5 flex items-center gap-4 hover:border-[#D1D5DB] dark:hover:border-[#3D3D3D] transition-colors"
                >
                  <div
                    style={{ color: industry.color }}
                    className="flex-shrink-0"
                  >
                    <IconComponent size={24} />
                  </div>
                  <span className="text-[#111111] dark:text-[#ECECEC] font-medium">
                    {industry.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== YOUR AI JOURNEY ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Your AI Journey Starts Here"
            subtitle=""
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-[#F0FDF9]">
                  <GraduationCap size={32} className="text-[#10A37F]" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                Upskill
              </h3>
              <p className="text-[#6B7280] dark:text-[#A0A0A0]">
                Find the right training programs to master emerging technologies and advance your expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-[#F0FDF9]">
                  <Users size={32} className="text-[#10A37F]" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                Connect
              </h3>
              <p className="text-[#6B7280] dark:text-[#A0A0A0]">
                Match with opportunities that fit your expertise and career goals across our platform ecosystem.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-[#F0FDF9]">
                  <Rocket size={32} className="text-[#10A37F]" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
                Grow
              </h3>
              <p className="text-[#6B7280] dark:text-[#A0A0A0]">
                Advance your career with global platforms connecting you to leading opportunities worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-8 px-6">
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
