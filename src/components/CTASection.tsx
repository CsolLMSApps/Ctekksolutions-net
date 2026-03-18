'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-[#F9FAFB] dark:bg-[#0D0D0D] rounded-2xl py-16 px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#111111] dark:text-[#ECECEC]">
          {title}
        </h2>

        {subtitle && (
          <p className="text-lg text-[#6B7280] dark:text-[#ECECEC]/70 mt-3">
            {subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          {/* Primary CTA */}
          <Link
            href={primaryCTA.href}
            className="px-6 py-3 bg-[#10A37F] text-white rounded-lg font-medium hover:bg-[#0D8A6A] transition-colors duration-150"
          >
            {primaryCTA.text}
          </Link>

          {/* Secondary CTA */}
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="px-6 py-3 border border-[#E5E7EB] dark:border-[#2D2D2D] text-[#111111] dark:text-[#ECECEC] rounded-lg font-medium hover:bg-[#F9FAFB] dark:hover:bg-[#1A1A1A] transition-colors duration-150"
            >
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  );
}
