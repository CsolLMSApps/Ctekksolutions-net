'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  delay = 0,
}: TestimonialCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
        delay,
      },
    },
  };

  const quoteIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: delay + 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="h-full"
    >
      <div className="h-full p-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-blue-200 dark:hover:border-blue-800 transition-colors duration-300">
        {/* Quote Icon */}
        <motion.div
          variants={quoteIconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-4"
        >
          <Quote className="w-8 h-8 text-blue-500/30" />
        </motion.div>

        {/* Quote Text */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
          "{quote}"
        </p>

        {/* Author Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="font-semibold text-gray-900 dark:text-white">
            {author}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
