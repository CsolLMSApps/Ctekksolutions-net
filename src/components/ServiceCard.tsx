'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className="h-full"
    >
      <Link href={href}>
        <div className="h-full p-6 rounded-xl border border-[#E5E7EB] bg-white dark:bg-[#0D0D0D] dark:border-[#2D2D2D] cursor-pointer hover:border-[#D1D5DB] dark:hover:border-[#3D3D3D] transition-colors duration-150">
          {/* Icon */}
          <div className="w-10 h-10 rounded-lg bg-[#F0FDF9] dark:bg-[#10A37F]/20 text-[#10A37F] flex items-center justify-center">
            {icon}
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-[#111111] dark:text-[#ECECEC] mt-4">
            {title}
          </h3>
          <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]/70 mt-2 leading-relaxed">
            {description}
          </p>

          {/* CTA */}
          <div className="text-[#10A37F] text-sm font-medium mt-4">
            Learn more →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
