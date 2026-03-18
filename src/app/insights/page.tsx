'use client';

import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '../../components/SectionHeading';
import { CTASection } from '../../components/CTASection';

const categories = [
  'All',
  'AI & ML',
  'Cloud Computing',
  'Staffing',
  'Industry Trends',
  'Case Studies'
];

const featuredArticle = {
  id: 1,
  title: 'The Future of Enterprise AI: Trends and Predictions for 2026',
  excerpt: 'Explore the transformative trends shaping enterprise AI adoption, from generative models to autonomous systems and the skills gap challenge.',
  date: 'March 15, 2026',
  readTime: '12 min read',
  category: 'AI & ML',
  image: 'from-blue-500 via-purple-500 to-pink-500'
};

const articles = [
  {
    id: 2,
    title: 'Scaling Machine Learning in Production',
    excerpt: 'Best practices for deploying and scaling ML models in production environments with minimal downtime.',
    date: 'March 13, 2026',
    readTime: '8 min read',
    category: 'AI & ML',
    image: 'from-emerald-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Cloud-Native Architecture: A Complete Guide',
    excerpt: 'Learn how to design and implement cloud-native applications that scale automatically and maintain high availability.',
    date: 'March 10, 2026',
    readTime: '10 min read',
    category: 'Cloud Computing',
    image: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'Building a High-Performance AI Talent Acquisition Strategy',
    excerpt: 'Strategic approaches to finding and recruiting top AI talent in a competitive market.',
    date: 'March 8, 2026',
    readTime: '9 min read',
    category: 'Staffing',
    image: 'from-purple-500 to-pink-500'
  },
  {
    id: 5,
    title: 'LLMs in Enterprise: Implementation and Challenges',
    excerpt: 'How organizations are leveraging large language models for business intelligence and automation.',
    date: 'March 5, 2026',
    readTime: '11 min read',
    category: 'Industry Trends',
    image: 'from-blue-500 to-indigo-500'
  },
  {
    id: 6,
    title: 'Case Study: AI Implementation at Fortune 500 Company',
    excerpt: 'A real-world example of how a major corporation transformed their operations with AI-powered solutions.',
    date: 'February 28, 2026',
    readTime: '15 min read',
    category: 'Case Studies',
    image: 'from-green-500 to-emerald-500'
  },
  {
    id: 7,
    title: 'The Hidden Costs of Technical Debt in ML Systems',
    excerpt: 'Understanding and mitigating technical debt in machine learning projects before it becomes a critical issue.',
    date: 'February 25, 2026',
    readTime: '7 min read',
    category: 'AI & ML',
    image: 'from-yellow-500 to-orange-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const articleCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
    },
  },
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' as const }}
        className="relative py-20 px-6 sm:px-10 overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20 -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Insights & Resources
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Stay informed with our latest articles, research, and expert insights on AI, cloud computing, and technology trends.
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Article */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 px-6 sm:px-10 bg-gray-50 dark:bg-gray-950"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Article</h2>
          </motion.div>
          <motion.div
            variants={articleCardVariants}
            whileHover="hover"
            className="group"
          >
            <Link href={`/insights/${featuredArticle.id}`}>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  {/* Image Placeholder */}
                  <div className={`h-64 lg:h-full rounded-xl bg-gradient-to-br ${featuredArticle.image} opacity-80 group-hover:opacity-100 transition-opacity duration-300 min-h-64`} />

                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="inline-block mb-4">
                        <span className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                          {featuredArticle.category}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {featuredArticle.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        {featuredArticle.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{featuredArticle.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {featuredArticle.readTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Filter */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12 px-6 sm:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  idx === 0
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-blue-400 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Articles Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 sm:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Latest Articles
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article) => (
              <motion.div
                key={article.id}
                variants={articleCardVariants}
                whileHover="hover"
                className="group"
              >
                <Link href={`/insights/${article.id}`}>
                  <div className="h-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10">
                    {/* Image Placeholder */}
                    <div className={`h-40 bg-gradient-to-br ${article.image} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Content */}
                    <div className="p-6">
                      <div className="inline-block mb-3">
                        <span className="px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                          <span>{article.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {article.readTime}
                          </span>
                        </div>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 px-6 sm:px-10 bg-gray-50 dark:bg-gray-950"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get the latest insights delivered directly to your inbox. No spam, just valuable content.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <Mail size={20} />
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 px-6 sm:px-10"
      >
        <div className="max-w-6xl mx-auto">
          <CTASection
            title="Ready to Transform Your Business?"
            subtitle="Subscribe to our newsletter and stay ahead of the curve with AI and cloud insights"
            primaryCTA={{ text: 'Subscribe to Our Newsletter', href: '#newsletter' }}
            secondaryCTA={{ text: 'Contact Our Experts', href: '/contact' }}
          />
        </div>
      </motion.section>
    </div>
  );
}
