'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const categories = ['All', 'AI & ML', 'Cloud Computing', 'Staffing', 'Industry Trends', 'Case Studies'];

const featuredArticle = {
  title: 'The Future of Enterprise AI: Trends and Predictions for 2026',
  excerpt: 'Explore the transformative trends shaping enterprise AI adoption.',
  date: 'March 15, 2026',
  readTime: '12 min read',
  category: 'AI & ML',
};

const articles = [
  {
    title: 'Scaling Machine Learning in Production',
    excerpt: 'Best practices for deploying and scaling ML models.',
    date: 'March 13, 2026',
    readTime: '8 min read',
    category: 'AI & ML',
  },
  {
    title: 'Cloud-Native Architecture: A Complete Guide',
    excerpt: 'Design and implement cloud-native applications.',
    date: 'March 10, 2026',
    readTime: '10 min read',
    category: 'Cloud Computing',
  },
  {
    title: 'Building a High-Performance AI Talent Strategy',
    excerpt: 'Finding and recruiting top AI talent in a competitive market.',
    date: 'March 8, 2026',
    readTime: '9 min read',
    category: 'Staffing',
  },
  {
    title: 'LLMs in Enterprise: Implementation and Challenges',
    excerpt: 'Leveraging large language models for business intelligence.',
    date: 'March 5, 2026',
    readTime: '11 min read',
    category: 'Industry Trends',
  },
  {
    title: 'Case Study: AI Implementation at Fortune 500 Company',
    excerpt: 'Real-world transformation with AI-powered solutions.',
    date: 'February 28, 2026',
    readTime: '15 min read',
    category: 'Case Studies',
  },
  {
    title: 'The Hidden Costs of Technical Debt in ML Systems',
    excerpt: 'Understanding and mitigating technical debt in ML projects.',
    date: 'February 25, 2026',
    readTime: '7 min read',
    category: 'AI & ML',
  }
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
        className="bg-[#0A0F1C] max-w-6xl mx-auto py-20 px-6"
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
          className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 hover:border-white/[0.12] transition-colors"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3 h-48 rounded-lg bg-gradient-to-br from-[#10A37F]/20 to-[#34D399]/20" />
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
        </motion.div>
      </motion.section>

      {/* Category Filter + Articles Grid - LIGHT bg */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
        className="bg-white max-w-6xl mx-auto py-8 px-6"
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
        className="bg-white max-w-6xl mx-auto py-20 px-6"
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
              className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white hover:border-[#10A37F] transition-colors group"
            >
              <div className="h-40 bg-gradient-to-br from-[#10A37F]/10 to-[#34D399]/10" />
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
        className="bg-white max-w-6xl mx-auto py-20 px-6"
      >
        <CTASection
          title="Ready to Learn More?"
          primaryCTA={{ text: 'Contact Our Experts', href: '/contact' }}
        />
      </motion.section>
    </div>
  );
}
