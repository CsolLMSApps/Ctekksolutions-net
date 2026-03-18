'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp, Shield, Layers, Globe, Cpu, Users, Rocket,
  BarChart3, Target, ArrowRight, Zap, BookOpen, Building2,
  DollarSign, PieChart, Mail,
} from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function InvestorsPage() {
  const investmentReasons = [
    {
      icon: TrendingUp,
      title: 'Timing the Largest Labor Market Shift in a Generation',
      description: 'The AI talent gap is projected to reach 4.3 million unfilled positions by 2028. CTekk is positioned at the exact intersection of where demand is accelerating — and supply is constrained.',
    },
    {
      icon: DollarSign,
      title: 'Revenue-Generating from Day One',
      description: 'Unlike pre-revenue SaaS bets, CTekk generates real revenue through AI staffing, offshore teams, and consulting. The business model is already profitable — investment accelerates platform scaling, not survival.',
    },
    {
      icon: Layers,
      title: 'Five Platforms, One Ecosystem',
      description: 'DFWITJOBS, OPTPlanet, OPTPlanet.tech, AI Learn Hub, and Benzaiten LMS form an integrated talent-to-training pipeline. Each platform drives users to the others — creating compounding network effects.',
    },
    {
      icon: Rocket,
      title: 'Services-to-SaaS Flywheel',
      description: 'Services revenue funds platform R&D organically. As platforms mature, recurring SaaS revenue grows while services margins stay healthy. The flywheel compounds without dilution.',
    },
    {
      icon: Shield,
      title: 'Data Moat in Formation',
      description: 'Every job posted, every resume matched, every course completed feeds proprietary datasets. Over time, this becomes an AI-driven talent intelligence layer that competitors cannot replicate without years of data accumulation.',
    },
    {
      icon: Globe,
      title: 'Global Delivery, US Margins',
      description: 'Dallas leadership paired with Mysuru engineering delivers enterprise-grade output at structurally lower costs. This isn\'t outsourcing — it\'s a built-in margin advantage that scales with every new engagement.',
    },
    {
      icon: Cpu,
      title: 'AI-Native Product Roadmap',
      description: 'Every platform in the ecosystem is being enhanced with machine learning — intelligent job matching, adaptive learning paths, predictive workforce analytics. The AI isn\'t bolted on; it\'s the foundation.',
    },
  ];

  const marketData = [
    { stat: '$680B', label: 'Global AI market by 2030', source: 'Grand View Research' },
    { stat: '4.3M', label: 'AI talent gap by 2028', source: 'World Economic Forum' },
    { stat: '$400B', label: 'Corporate training market', source: 'Statista' },
    { stat: '$35B', label: 'HR tech SaaS market', source: 'Research and Markets' },
  ];

  const platforms = [
    { name: 'DFWITJOBS', role: 'Talent Acquisition', desc: 'Job board generating employer revenue and candidate data' },
    { name: 'OPTPlanet', role: 'STEM Pipeline', desc: 'Career platform feeding qualified STEM graduates into the ecosystem' },
    { name: 'OPTPlanet.tech', role: 'AI Talent Matching', desc: 'Specialized AI job board connecting startups with global STEM talent' },
    { name: 'AI Learn Hub', role: 'Skills Development', desc: 'Training platform converting learners into job-ready professionals' },
    { name: 'Benzaiten LMS', role: 'Enterprise Learning', desc: 'LMS generating recurring enterprise subscription revenue' },
  ];

  const useOfFunds = [
    { label: 'Platform Engineering & AI Features', pct: '40%', desc: 'Intelligent matching, adaptive learning, predictive analytics across all five platforms' },
    { label: 'Growth & Market Expansion', pct: '25%', desc: 'User acquisition, enterprise sales, geographic expansion beyond US market' },
    { label: 'Data Infrastructure & AI Models', pct: '20%', desc: 'Proprietary talent intelligence layer, training data pipelines, model training' },
    { label: 'Operations & Team Scaling', pct: '15%', desc: 'Key hires in product, engineering, and enterprise sales across Dallas and Mysuru' },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ===== HERO — DARK ===== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="bg-[#0A0F1C] text-white py-20 md:py-28 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[#10A37F] text-sm font-medium tracking-wider uppercase mb-6"
          >
            Investor Relations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              AI Workforce Infrastructure.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#10A37F] via-[#0d8c6a] to-[#10A37F] bg-clip-text text-transparent">
              Built to Compound.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-10"
          >
            CTekk Solutions operates a services-to-SaaS growth engine across AI talent, enterprise training, and workforce platforms. Revenue today funds the platforms that scale tomorrow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact?inquiryType=Partnership"
              className="inline-flex items-center gap-2 bg-[#10A37F] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0d8c6a] transition-colors"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3 rounded-md font-medium hover:border-[#10A37F] transition-colors"
            >
              Read Our Story
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== WHY INVEST — LIGHT ===== */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Invest in CTekk Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seven structural advantages that make this a differentiated opportunity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentReasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.06 }}
                  className="border border-gray-200 rounded-lg p-8 hover:border-[#10A37F] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#10A37F]/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#10A37F] transition-colors">
                    <Icon size={24} className="text-[#10A37F] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== MARKET OPPORTUNITY — DARK ===== */}
      <section className="bg-[#0A0F1C] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Market Opportunity</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three massive markets are converging — and CTekk operates at their intersection.
            </p>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {marketData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#10A37F] mb-1">{item.stat}</p>
                <p className="text-sm text-white mb-1">{item.label}</p>
                <p className="text-xs text-gray-500">{item.source}</p>
              </motion.div>
            ))}
          </div>

          {/* Three Convergence Points */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'The AI Talent Crisis',
                desc: 'Demand for AI engineers, ML ops specialists, and data scientists is outpacing supply by 3:1. Companies are spending more to find less. CTekk\'s staffing arm fills this gap today while platforms build the pipeline for tomorrow.',
              },
              {
                icon: BookOpen,
                title: 'The Upskilling Imperative',
                desc: 'Enterprises are projected to spend $400B+ on workforce training. The shift from traditional IT training to AI-focused programs is accelerating. AI Learn Hub and Benzaiten LMS are built for exactly this moment.',
              },
              {
                icon: Building2,
                title: 'HR Tech + EdTech Convergence',
                desc: 'The lines between hiring, training, and career development are dissolving. Platforms that connect all three — talent acquisition, skills development, and workforce analytics — will capture disproportionate value.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#10A37F]/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#10A37F]/20 rounded-lg flex items-center justify-center mb-5">
                    <Icon size={24} className="text-[#10A37F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BUSINESS MODEL — LIGHT ===== */}
      <section className="bg-[#F9FAFB] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Business Model</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A self-reinforcing engine. No external dependency. No burn-rate anxiety.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-0">
            {[
              { step: '01', title: 'Services Generate Revenue', desc: 'AI staffing, offshore teams, and consulting create profitable, recurring revenue streams. This is the engine.', color: '#10A37F' },
              { step: '02', title: 'Revenue Funds Platforms', desc: 'Profits are reinvested into product development across all five platforms. No VC dependency for R&D.', color: '#059669' },
              { step: '03', title: 'Platforms Scale Value', desc: 'Each platform compounds network effects — more users, more data, more defensibility. This is the long-term prize.', color: '#0D8A6A' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                className="bg-white border border-gray-200 p-8 text-center first:rounded-l-lg last:rounded-r-lg"
              >
                <p className="text-5xl font-bold mb-4" style={{ color: item.color }}>{item.step}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLATFORM ECOSYSTEM — DARK ===== */}
      <section className="bg-[#111827] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Platform Ecosystem</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Five platforms that feed into each other. Each one generates value independently — and exponentially when connected.
            </p>
          </div>
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
                <p className="text-xs font-semibold text-[#10A37F] uppercase tracking-wider mb-2">{p.role}</p>
                <h3 className="text-lg font-semibold text-white mb-2">{p.name}</h3>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GROWTH STRATEGY — LIGHT ===== */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Growth Strategy</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                phase: 'Short Term (Now)',
                title: 'Scale Revenue & Users',
                items: [
                  'Grow DFWITJOBS and OPTPlanet.tech to 10x current active listings',
                  'Expand AI Learn Hub course catalog and enterprise partnerships',
                  'Increase staffing revenue with AI-specialized talent vertical',
                  'Deploy Benzaiten LMS to 5+ new enterprise clients',
                ],
              },
              {
                phase: 'Mid Term (2026–2027)',
                title: 'AI-Native Platform Features',
                items: [
                  'Launch intelligent job matching powered by proprietary talent data',
                  'Deploy adaptive learning paths in AI Learn Hub',
                  'Build predictive workforce analytics dashboard for enterprise clients',
                  'Introduce platform API for third-party integrations',
                ],
              },
              {
                phase: 'Long Term (2028+)',
                title: 'Global Enterprise SaaS',
                items: [
                  'Evolve into a fully scalable SaaS business with recurring revenue majority',
                  'Expand beyond US into UK, EU, and APAC markets',
                  'Build the definitive AI talent intelligence layer',
                  'Position for strategic acquisition or Series A+ institutional raise',
                ],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                className="border border-gray-200 rounded-lg p-8 hover:border-[#10A37F] transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold text-[#10A37F] bg-[#10A37F]/10 px-3 py-1 rounded-full">{item.phase}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#10A37F] mt-1 flex-shrink-0">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== USE OF FUNDS — PEARL ===== */}
      <section className="bg-[#F9FAFB] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Use of Funds</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every dollar accelerates platform development and market expansion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useOfFunds.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#10A37F] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
                  <span className="text-2xl font-bold text-[#10A37F]">{item.pct}</span>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IDEAL INVESTOR — DARK ===== */}
      <section className="bg-[#0A0F1C] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Who Should Invest</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We&apos;re looking for investors who understand that the best SaaS companies are built on real revenue, not just runway.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Angel Investors',
                desc: 'Individuals who want early exposure to an AI workforce platform with existing revenue, a clear product roadmap, and a capital-efficient growth model.',
              },
              {
                icon: BarChart3,
                title: 'SaaS & Platform Investors',
                desc: 'Funds focused on services-to-SaaS transitions, marketplace dynamics, and B2B platforms with network effects and data moat potential.',
              },
              {
                icon: PieChart,
                title: 'HR Tech & EdTech Investors',
                desc: 'Investors who see the convergence of talent acquisition, workforce training, and AI-driven career platforms as the next major category.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: 'easeOut' as const, delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#10A37F]/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#10A37F]/20 rounded-lg flex items-center justify-center mb-5">
                    <Icon size={24} className="text-[#10A37F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA — LIGHT ===== */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Build the Future of AI Workforce Together.
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re an angel investor, a fund, or a strategic partner — we&apos;d welcome the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?inquiryType=Partnership"
              className="inline-flex items-center gap-2 bg-[#10A37F] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0d8c6a] transition-colors"
            >
              Schedule Investor Call <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:info@ctekksolutions.net?subject=Investor%20Inquiry"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-md font-medium hover:border-[#10A37F] hover:text-[#10A37F] transition-colors"
            >
              <Mail size={18} />
              Email Us Directly
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            info@ctekksolutions.net &middot; 408-471-7753 &middot; Dallas, TX
          </p>
        </div>
      </section>
    </div>
  );
}
