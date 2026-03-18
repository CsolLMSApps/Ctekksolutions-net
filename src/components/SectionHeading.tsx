'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  gradient = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2
        className={`text-3xl font-semibold ${
          gradient ? 'text-[#10A37F]' : 'text-[#111111]'
        } dark:text-[#ECECEC]`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-[#6B7280] dark:text-[#ECECEC]/70">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
