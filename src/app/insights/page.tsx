'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const categories = ['All', 'AI & ML', 'Cloud Computing', 'Staffing', 'Industry Trends', 'Case Studies'];

const featuredArticle = {
  title: 'AI Workforce Trends Shaping 2026',
  excerpt: 'From AI-native roles to upskilling imperatives, the workforce is transforming faster than ever. Here\'s what leaders need to know.',
  date: 'March 10, 2026',
  readTime: '8 min read',
  category: 'AI & ML',
  href: '/insights/ai-workforce-trends-2026',
  image: '/article-ai-workforce.svg',
};

const articles = [
  {
    title: 'Building Scalable Cloud Infrastructure for AI Workloads',
    excerpt: 'How to architect cloud environments that support demanding ML pipelines while controlling costs.',
    date: 'February 22, 2026',
    readTime: '6 min read',
    category: 'Cloud Computing',
    href: '/insights/building-scalable-cloud-infrastructure',
    image: '/article-cloud-infrastructure.svg',
  },
  {
    title: 'The Future of Remote STEM Hiring',
    excerpt: 'Remote work has reshaped how companies find STEM talent. Platforms like DFWITJOBS and OPTPlanet.tech are leading the way.',
    date: 'February 8, 2026',
    readTime: '5 min read',
    category: 'Staffing',
    href: '/insights/future-of-remote-stem-hiring',
    image: '/article-remote-hiring.svg',
  },
  {
    title: 'A Practical Guide to Enterprise AI Implementation',
    excerpt: 'A step-by-step approach to adopting AI in the enterprise — from discovery to full-scale deployment.',
    date: 'January 15, 2026',
    readTime: '10 min read',
    category: 'Industry Trends',
    href: '/insights/enterprise-ai-implementation-guide',
    image: '/article-ai-implementation.svg',
  },
  {
    title: 'From Training to Transformation: How AI Upskilling Drives Business Value',
    excerpt: 'Why corporate AI training programs deliver measurable ROI when designed around real business outcomes.',
    date: 'December 20, 2025',
    readTime: '7 min read',
    category: 'AI & ML',
    href: '/insights/from-training-to-transformation',
    image: '/article-training.svg',
  },
  {
    title: 'Offshore Development: Best Practices for Global Teams',
    excerpt: 'Managing distributed teams across Dallas and Mysuru — lessons learned from CTekk\'s global delivery model.',
    date: 'November 12, 2025',
    readTime: '6 min read',
    category: 'Case Studies',
    href: '/insights/offshore-development-best-practices',
    image: '/article-remote-hiring.svg',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function InsightsPage() {
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
            Insights & Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70"
          >
            Latest articles on AI, cloud computing, and technology
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Article - DARK bg, glass-card */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-[#0A0F1C] max-w-7xl mx-auto py-16 md:py-20 px-6"
      >
        <motion.div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold"
            style={{
              background: 'linear-gradient(135deg, #10A37F, #34D399, #6EE7B7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Article
          </h2>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-[#10A37F]/50 transition-colors"
        >
          <Link href={featuredArticle.href} className="block">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 h-48 rounded-lg bg-[#F9FAFB] overflow-hidden flex items-center justify-center">
              <Image src={featuredArticle.image} alt={featuredArticle.title} width={400} height={200} className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-2/3 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium text-[#10A37F] bg-[#10A37F]/10 px-3 py-1 rounded-full inline-block mb-4">
                  {featuredArticle.category}
                </span>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {featuredArticle.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {featuredArticle.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm text-white/60">
                  <span>{featuredArticle.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#10A37F] font-medium">
                  Read <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>
          </Link>
        </motion.div>
      </motion.section>

      {/* Category Filter + Articles Grid - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white max-w-7xl mx-auto py-8 px-6"
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                idx === 0
                  ? 'bg-[#10A37F] text-white'
                  : 'bg-[#F9FAFB] text-[#6B7280] hover:border-[#10A37F] border border-[#E5E7EB]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* Articles Grid - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white max-w-7xl mx-auto py-16 md:py-20 px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link href={article.href} className="block border border-[#E5E7EB] rounded-lg overflow-hidden bg-white hover:border-[#10A37F] transition-colors group">
                <div className="h-40 bg-[#F9FAFB] overflow-hidden flex items-center justify-center">
                  <Image src={article.image} alt={article.title} width={400} height={200} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-[#10A37F] bg-[#F0FDF9] px-2 py-1 rounded-full inline-block mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-semibold text-[#111111] mb-2 line-clamp-2 text-sm">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB] text-xs text-[#6B7280]">
                    <div className="flex gap-2">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <ArrowRight size={16} className="text-[#10A37F] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white max-w-7xl mx-auto py-16 md:py-20 px-6"
      >
        <CTASection
          title="Ready to Learn More?"
          primaryCTA={{ text: 'Contact Our Experts', href: '/contact' }}
        />
      </motion.section>
    </div>
  );
}
