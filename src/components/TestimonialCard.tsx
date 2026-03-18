'use client';

import { motion } from 'framer-motion';

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className="h-full"
    >
      <div className="h-full p-6 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] dark:bg-[#0D0D0D] dark:border-[#2D2D2D]">
        {/* Quote mark */}
        <div className="text-[#10A37F] opacity-40 text-3xl mb-3">"</div>

        {/* Quote Text */}
        <p className="text-[#111111] dark:text-[#ECECEC] text-sm leading-relaxed mb-4">
          {quote}
        </p>

        {/* Author Info */}
        <p className="font-medium text-[#111111] dark:text-[#ECECEC] text-sm">
          {author}
        </p>
        <p className="text-[#6B7280] dark:text-[#ECECEC]/70 text-sm">
          {role} at {company}
        </p>
      </div>
    </motion.div>
  );
}
