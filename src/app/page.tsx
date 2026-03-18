'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Users,
  Code,
  GraduationCap,
  Heart,
  Building2,
  ShoppingCart,
  Factory,
  Landmark,
  ArrowRight,
  Zap,
  Globe,
  Award,
  Mail,
  Sparkles,
} from 'lucide-react';

export default function Home() {
  const tickerItems = [
    '🟢 Now Hiring: Senior AI/ML Engineer — Dallas, TX',
    '📊 New Insight: AI Workforce Trends 2026',
    '🚀 OPTPlanet.tech: 200+ Global AI Jobs Listed',
    '📚 Benzaiten LMS: New Corporate Training Modules',
    '🟢 Now Hiring: Cloud Solutions Architect — Remote',
    '💡 AI Learn Hub: Advanced NLP Course Now Live',
    '🟢 Now Hiring: Data Scientist — Remote US',
  ];

  const services = [
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and DevOps expertise to modernize and streamline your operations.',
    },
    {
      icon: Brain,
      title: 'AI Talent & Solutions',
      description: 'Access elite AI engineers and consultants to accelerate your AI initiatives and transformation roadmap.',
    },
    {
      icon: Users,
      title: 'Staffing & Recruiting',
      description: 'Strategic staffing solutions connecting you with top-tier technical talent across all disciplines.',
    },
    {
      icon: Code,
      title: 'Offshore Development',
      description: 'Dedicated, managed development teams providing 24/7 coverage and cost-effective software delivery.',
    },
    {
      icon: GraduationCap,
      title: 'AI Training Programs',
      description: 'Comprehensive training programs to upskill your workforce in emerging AI technologies and best practices.',
    },
  ];

  const platforms = [
    {
      title: 'DFWITJOBS',
      description: 'Premier job marketplace connecting top tech talent with leading companies in the Dallas-Fort Worth metroplex.',
      url: 'https://www.dfwitjobs.com',
    },
    {
      title: 'OPTPlanet',
      description: 'Comprehensive educational platform for professional development and certification in emerging technologies.',
      url: 'https://www.optplanet.net',
    },
    {
      title: 'OPTPlanet.tech',
      description: 'Global AI job board connecting startups with STEM talent for remote AI jobs and prompt engineering roles.',
      url: 'https://optplanet.tech',
    },
    {
      title: 'AI Learn Hub',
      description: 'Curated learning center for AI, machine learning, and data science education with industry-expert instructors.',
      url: 'https://www.ailearnhub.io',
    },
    {
      title: 'Benzaiten LMS',
      description: 'Powerful learning management system designed for modern training delivery and employee development programs.',
      url: 'https://benzaitenlms.com',
    },
    {
      title: 'OPTPlanet Online',
      description: 'AI career acceleration platform with resume analysis, job matching, and interview prep tools for STEM and tech professionals.',
      url: 'https://optplanet.online',
    },
  ];

  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'HIPAA-compliant platforms and AI-driven diagnostics for improved patient outcomes.',
    },
    {
      icon: Building2,
      title: 'Finance',
      description: 'Secure fintech solutions and compliance automation for financial institutions.',
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'Omnichannel experiences and inventory AI for modern retail operations.',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Learning platforms and AI-powered educational tools for institutions.',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'IoT integration and predictive maintenance for industrial efficiency.',
    },
    {
      icon: Landmark,
      title: 'Government',
      description: 'Enterprise solutions and compliance systems for public sector organizations.',
    },
  ];

  const aiJourneySteps = [
    {
      icon: GraduationCap,
      title: 'Upskill',
      description: 'Find the right training programs to master emerging technologies and advance your expertise.',
    },
    {
      icon: Users,
      title: 'Connect',
      description: 'Match with opportunities that fit your expertise and career goals across our platform ecosystem.',
    },
    {
      icon: Zap,
      title: 'Grow',
      description: 'Advance your career with global platforms connecting you to leading opportunities worldwide.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== ANIMATED TICKER BAR ===== */}
      <div className="bg-[#0A0F1C] py-3 border-b border-white/10 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-ticker">
          {tickerItems.map((item, i) => (
            <span key={i} className="text-gray-500 mx-8 flex-shrink-0">
              {item}
            </span>
          ))}
          {tickerItems.map((item, i) => (
            <span key={`repeat-${i}`} className="text-gray-500 mx-8 flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="bg-[#0A0F1C] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="inline-flex items-center gap-2 bg-[#10A37F]/10 border border-[#10A37F]/30 rounded-full px-4 py-1.5 mb-8"
            >
              <Zap size={16} className="text-[#10A37F]" />
              <span className="text-[#10A37F]">Empowering Businesses Since 2010</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
              className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Empowering Enterprises
              </span>
              <span className="block bg-gradient-to-r from-[#10A37F] via-[#0d8c6a] to-[#10A37F] bg-clip-text text-transparent">
                With AI-Driven Solutions
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-10"
            >
              From talent acquisition to AI training and career platforms — we help enterprises and professionals thrive in the age of AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
            >
              <button className="bg-[#10A37F] text-white px-8 py-3 rounded-md hover:bg-[#0d8c6a] transition-colors flex items-center justify-center gap-2">
                Explore Services
                <ArrowRight size={18} />
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-md hover:border-[#10A37F] transition-colors">
                View Platforms
              </button>
              <button className="text-gray-300 hover:text-[#10A37F] transition-colors flex items-center justify-center gap-2">
                Start Your AI Journey
                <ArrowRight size={18} />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' as const }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-[#10A37F]" size={24} />
                </div>
                <div className="text-3xl text-white mb-1">500+</div>
                <div className="text-gray-400">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Globe className="text-[#10A37F]" size={24} />
                </div>
                <div className="text-3xl text-white mb-1">50+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="text-[#10A37F]" size={24} />
                </div>
                <div className="text-3xl text-white mb-1">98%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="text-[#10A37F]" size={24} />
                </div>
                <div className="text-3xl text-white mb-1">1000+</div>
                <div className="text-gray-400">Projects</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-4xl md:text-5xl mb-4 text-gray-900"
            >
              What We Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              End-to-end technology consulting, AI talent, and workforce development.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' as const }}
                  className="border border-gray-200 rounded-lg p-8 hover:border-[#10A37F] transition-all group"
                >
                  <div className="w-12 h-12 bg-[#10A37F]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#10A37F] transition-colors">
                    <IconComponent className="text-[#10A37F] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="text-2xl mb-3 font-medium text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PLATFORMS SECTION ===== */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-4xl md:text-5xl mb-4 text-gray-900"
            >
              Our Platform Ecosystem
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Purpose-built platforms powering workforce, careers, and education.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, idx) => {
              const IconComponent = idx === 5 ? Sparkles : Cloud;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' as const }}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:border-[#10A37F] transition-all"
                >
                  <div className="w-12 h-12 bg-[#10A37F]/10 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="text-[#10A37F]" size={24} />
                  </div>
                  <h3 className="text-2xl mb-3 font-medium text-gray-900">{platform.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {platform.description}
                  </p>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#10A37F] hover:gap-3 transition-all text-sm font-medium"
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES SECTION ===== */}
      <section className="bg-[#111827] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-4xl md:text-5xl mb-4 text-white"
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Trusted by enterprises across sectors
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: 'easeOut' as const }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#10A37F]/50 transition-all"
                >
                  <div className="w-12 h-12 bg-[#10A37F]/20 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="text-[#10A37F]" size={24} />
                  </div>
                  <h3 className="text-2xl mb-3 text-white font-medium">{industry.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {industry.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== AI JOURNEY SECTION ===== */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              className="text-4xl md:text-5xl mb-4 text-gray-900"
            >
              Your AI Journey Starts Here
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiJourneySteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' as const }}
                  className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-[#10A37F] transition-all"
                >
                  <div className="w-16 h-16 bg-[#10A37F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-[#10A37F]" size={28} />
                  </div>
                  <h3 className="text-2xl mb-4 font-medium text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="text-4xl md:text-5xl mb-6 text-gray-900"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
            className="text-xl text-gray-600 mb-10"
          >
            Let's discuss how our AI and cloud solutions can accelerate your digital transformation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-[#10A37F] text-white px-8 py-3 rounded-md hover:bg-[#0d8c6a] transition-colors flex items-center justify-center gap-2">
              Schedule a Consultation
              <ArrowRight size={18} />
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-md hover:border-[#10A37F] hover:text-[#10A37F] transition-colors flex items-center justify-center gap-2">
              Contact Sales
              <Mail size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
