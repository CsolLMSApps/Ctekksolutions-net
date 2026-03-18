'use client';

import { motion } from 'framer-motion';
import {
  Lightbulb, Shield, Users, Handshake, MapPin, Target,
  Rocket, GraduationCap, Globe, Cpu, ArrowRight, Layers,
  TrendingUp, Zap, BookOpen, BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import { CTASection } from '../../components/CTASection';
import { AnimatedCounter } from '../../components/AnimatedCounter';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function AboutPage() {
  const pillars = [
    { icon: Cpu, title: 'AI Workforce Enablement', description: 'Connecting enterprises with pre-vetted AI, ML, and cloud talent — on demand, at scale, across time zones.' },
    { icon: Layers, title: 'Platform Ecosystem Growth', description: 'Five interconnected platforms that power talent acquisition, career development, and enterprise learning as one system.' },
    { icon: GraduationCap, title: 'Education & Upskilling', description: 'Live, instructor-led AI training for professionals and enterprises — from fundamentals to production-grade deployment.' },
    { icon: Globe, title: 'Global Delivery Advantage', description: 'Dallas leadership paired with Mysuru engineering creates a follow-the-sun model that delivers faster without compromising quality.' },
    { icon: TrendingUp, title: 'Services-to-SaaS Flywheel', description: 'Revenue from staffing and consulting directly funds platform R&D — creating a self-sustaining engine for long-term growth.' },
  ];

  const values = [
    { icon: Rocket, title: 'Build, Don\'t Just Advise', description: 'We ship products alongside our consulting. Every engagement leaves behind working systems, not just slide decks.' },
    { icon: Zap, title: 'Speed with Substance', description: 'We move fast — but never cut corners on quality. Our global team delivers enterprise-grade work on startup timelines.' },
    { icon: Users, title: 'People Are the Platform', description: 'Technology is only as good as the people behind it. We invest in talent development as deeply as product development.' },
    { icon: Target, title: 'Outcome Over Output', description: 'We measure success by business impact, not billable hours. Every project starts with a clear definition of what "done" looks like.' },
    { icon: Shield, title: 'Radical Transparency', description: 'No hidden fees, no vague timelines. Clients see our roadmaps, our challenges, and our progress — in real time.' },
    { icon: Lightbulb, title: 'Practical Innovation', description: 'We don\'t chase hype. We deploy AI that works today, solves real problems, and delivers measurable ROI.' },
  ];

  const platforms = [
    { name: 'DFWITJOBS', desc: 'Full-service job board for employers and professionals across all industries' },
    { name: 'OPTPlanet', desc: 'Career platform connecting STEM graduates with sponsorship-friendly employers' },
    { name: 'OPTPlanet.tech', desc: 'AI-focused job board matching startups with global STEM and AI talent' },
    { name: 'AI Learn Hub', desc: 'Live, practical AI training for individuals and enterprise teams' },
    { name: 'Benzaiten LMS', desc: 'Enterprise learning management system for scalable workforce development' },
  ];

  const stats = [
    { label: 'Years in Operation', value: 15, suffix: '+' },
    { label: 'Enterprise Clients', value: 500, suffix: '+' },
    { label: 'AI Solutions Deployed', value: 50, suffix: '+' },
    { label: 'Client Retention', value: 98, suffix: '%' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ===== HERO — DARK ===== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="bg-[#0A0F1C] text-white py-20 md:py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[#10A37F] text-sm font-medium tracking-wider uppercase mb-6"
          >
            AI Workforce &middot; Education &middot; Platform Ecosystem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              We Build the Infrastructure
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#10A37F] via-[#0d8c6a] to-[#10A37F] bg-clip-text text-transparent">
              That Powers AI Careers.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            CTekk Solutions is a Dallas-based AI talent, training, and technology company. Our services fund our platforms. Our platforms scale our impact. Together, they form an ecosystem designed for the AI-driven economy.
          </motion.p>
        </div>
      </motion.section>

      {/* ===== OUR STORY — LIGHT ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white py-16 md:py-20 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p>
              CTekk Solutions was founded in 2010 as a custom software development firm in Dallas, Texas. In those early years, we built tailored enterprise applications for clients in healthcare, finance, and retail — learning firsthand what it takes to deliver production-grade technology under real-world constraints.
            </p>
            <p>
              As the technology landscape shifted, we saw a deeper problem: organizations didn&apos;t just need software — they needed people who could build and maintain it. We expanded into corporate training and workforce development, helping companies upskill their teams in cloud infrastructure, automation, and emerging frameworks.
            </p>
            <p>
              By 2018, the AI wave had arrived — and we were ready. Our training expertise gave us a natural entry point into Artificial Intelligence, Machine Learning, Natural Language Processing, and Robotic Process Automation. What began as upskilling programs evolved into full-scale AI consulting: designing, building, and deploying intelligent systems for enterprises navigating digital transformation.
            </p>
            <p>
              Today, CTekk operates at the intersection of three forces: <strong className="text-gray-900">talent</strong>, <strong className="text-gray-900">training</strong>, and <strong className="text-gray-900">technology platforms</strong>. Our consulting and staffing services generate the revenue that funds our product development. Our platforms — DFWITJOBS, OPTPlanet, OPTPlanet.tech, AI Learn Hub, and Benzaiten LMS — scale that value into a self-sustaining ecosystem. It&apos;s a model designed not just for growth, but for compounding impact.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ===== MISSION & VISION — PEARL ===== */}
      <section className="bg-[#F9FAFB] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 border-l-4 border-[#10A37F]"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To accelerate the adoption of AI across industries by providing enterprises with the talent, training, and platforms they need to build, deploy, and scale intelligent systems — while creating meaningful career pathways for the professionals who power them.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 border-l-4 border-[#059669]"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the operating system for AI workforce development — a global platform where enterprises find talent, professionals find careers, and both find the training they need to stay ahead. By 2030, we aim to be the ecosystem that connects every step from AI education to enterprise deployment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STRATEGIC PILLARS — DARK ===== */}
      <section className="bg-[#0A0F1C] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Strategic Pillars</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Five interconnected pillars that drive every decision we make.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.08 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#10A37F]/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#10A37F]/20 rounded-lg flex items-center justify-center mb-5">
                    <Icon size={24} className="text-[#10A37F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== STATS — CHARCOAL ===== */}
      <section className="bg-[#111827] py-16 px-6">
        <div className="max-w-5xl mx-auto">
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
                <div className="text-4xl font-bold text-white mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} label="" />
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BUSINESS MODEL — LIGHT ===== */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Business Model</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            A self-reinforcing engine where services fund products, and products scale impact.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="border border-gray-200 rounded-lg p-8 hover:border-[#10A37F] transition-colors"
            >
              <div className="w-10 h-10 bg-[#10A37F]/10 rounded-lg flex items-center justify-center mb-4">
                <Users size={20} className="text-[#10A37F]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Services Generate Revenue</h3>
              <p className="text-sm text-gray-600">AI staffing, offshore teams, and consulting engagements create predictable, high-margin revenue streams.</p>
            </motion.div>
            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="border border-gray-200 rounded-lg p-8 hover:border-[#10A37F] transition-colors"
            >
              <div className="w-10 h-10 bg-[#10A37F]/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket size={20} className="text-[#10A37F]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue Funds Platforms</h3>
              <p className="text-sm text-gray-600">Profits are reinvested directly into building and scaling our five technology platforms — no external funding required.</p>
            </motion.div>
            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="border border-gray-200 rounded-lg p-8 hover:border-[#10A37F] transition-colors"
            >
              <div className="w-10 h-10 bg-[#10A37F]/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={20} className="text-[#10A37F]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Platforms Scale Value</h3>
              <p className="text-sm text-gray-600">Each platform compounds network effects — more users, more data, more value — creating long-term, defensible growth.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM ECOSYSTEM — DARK ===== */}
      <section className="bg-[#0A0F1C] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Platform Ecosystem</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Five platforms. One integrated ecosystem. From job discovery to enterprise learning — connected by design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#10A37F]/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{p.name}</h3>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/platforms" className="inline-flex items-center gap-2 text-[#10A37F] font-medium hover:text-[#34D399] transition-colors">
              Explore All Platforms <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES — LIGHT ===== */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">What We Stand For</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Six principles that define how we work, what we build, and who we hire.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.08 }}
                  className="border border-gray-200 rounded-lg p-8 hover:border-[#10A37F] transition-colors"
                >
                  <Icon size={24} className="text-[#10A37F] mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CULTURE — PEARL ===== */}
      <section className="bg-[#F9FAFB] py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Culture</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We operate as a distributed, high-performance team across Dallas and Mysuru. Our culture isn&apos;t defined by an office — it&apos;s defined by ownership, execution speed, and a shared commitment to building things that matter.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Engineers in India work US and UK hours — not as a cost center, but as a strategic advantage. Our follow-the-sun model means work doesn&apos;t stop when Dallas logs off. Bugs get fixed overnight. Features ship faster. Clients get results, not excuses.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We hire builders — people who treat every project like it&apos;s their own company. Whether you&apos;re writing code in Mysuru or closing a deal in Dallas, the expectation is the same: move fast, think clearly, and deliver work you&apos;re proud of.
          </p>
        </div>
      </section>

      {/* ===== GLOBAL DELIVERY — DARK ===== */}
      <section className="bg-[#111827] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Global Delivery Model</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Two offices, one mission. Our Dallas-Mysuru axis isn&apos;t about arbitrage — it&apos;s about velocity.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-[#10A37F] flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Dallas, Texas</h3>
                  <p className="text-xs text-gray-400">Headquarters</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">Strategic leadership, enterprise sales, client success, and product direction. Where relationships are built and strategy is set.</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>14800 Quorum Drive, Suite 285, Dallas, TX 75254</p>
                <p>408-471-7753</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-[#059669] flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Mysuru, India</h3>
                  <p className="text-xs text-gray-400">Engineering & Delivery Center</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">Full-stack engineering, platform development, QA, and 24/7 technical operations. Where products are built and shipped.</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>2nd Floor, 442, Jayachamarajendra Rd, Vijayanagar 1st Stage</p>
                <p>Mysuru, Karnataka 570017, India</p>
                <p>+91 76766 66844</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== GROWTH ROADMAP — LIGHT ===== */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What&apos;s Next</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We&apos;re building for the long term. Here&apos;s where we&apos;re headed.
          </p>
          <div className="space-y-6 text-left">
            {[
              { phase: 'Now', title: 'Scale the Ecosystem', desc: 'Grow DFWITJOBS, OPTPlanet.tech, and AI Learn Hub to 10x current user bases. Deepen enterprise LMS integrations with Benzaiten.' },
              { phase: '2026–2027', title: 'AI-Native Platform Features', desc: 'Embed machine learning into every platform — intelligent job matching, adaptive learning paths, predictive workforce analytics.' },
              { phase: '2028+', title: 'Global Enterprise SaaS', desc: 'Evolve from a services-plus-platforms model into a fully scalable SaaS business serving enterprises, staffing firms, and training organizations worldwide.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-24">
                  <span className="text-sm font-semibold text-[#10A37F]">{item.phase}</span>
                </div>
                <div className="border-l-2 border-[#10A37F]/30 pl-6 pb-2">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#F9FAFB] py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <CTASection
            title="Ready to Build Something Together?"
            subtitle="Whether you need AI talent, enterprise training, or a technology partner — let's talk."
            primaryCTA={{ text: 'Schedule a Conversation', href: '/contact' }}
            secondaryCTA={{ text: 'Explore Services', href: '/services' }}
          />
        </div>
      </section>
    </div>
  );
}
