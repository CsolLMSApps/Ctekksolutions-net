'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

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
      className="bg-white py-20 md:py-24"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h2>

        {subtitle && (
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#10A37F] text-white text-base font-medium rounded-md hover:bg-[#0d8c6a] transition-colors duration-150"
          >
            {primaryCTA.text}
            <ArrowRight size={18} />
          </Link>

          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-900 text-gray-900 text-base font-medium rounded-md hover:border-[#10A37F] hover:text-[#10A37F] transition-colors duration-150"
            >
              <Mail size={18} />
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
