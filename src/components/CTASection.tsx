'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  text: string;
  href: string;
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCTA: CTAProps;
  secondaryCTA?: CTAProps;
}

export function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: CTASectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="border border-[#E5E7EB] dark:border-white/10 rounded-xl py-10 px-6 text-center bg-[#F9FAFB] dark:bg-[#111827]"
    >
      <h3 className="text-xl font-semibold text-[#111] dark:text-white">
        {title}
      </h3>

      {subtitle && (
        <p className="text-sm text-[#6B7280] dark:text-gray-400 mt-2 max-w-lg mx-auto">
          {subtitle}
        </p>
      )}

      <div className="flex flex-wrap gap-3 justify-center items-center mt-5">
        <Link
          href={primaryCTA.href}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#10A37F] text-white text-sm font-medium rounded-lg hover:bg-[#059669] transition-colors duration-150"
        >
          {primaryCTA.text}
          <ArrowRight size={14} />
        </Link>

        {secondaryCTA && (
          <Link
            href={secondaryCTA.href}
            className="px-5 py-2.5 border border-[#D1D5DB] dark:border-white/10 text-[#111] dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-white dark:hover:bg-white/5 transition-colors duration-150"
          >
            {secondaryCTA.text}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
