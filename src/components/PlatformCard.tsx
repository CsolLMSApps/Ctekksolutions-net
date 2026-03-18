'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PlatformCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  color: string;
  delay?: number;
}

export function PlatformCard({
  title,
  description,
  href,
  icon,
  color,
  delay = 0,
}: PlatformCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        <div className="h-full p-6 rounded-xl border border-[#E5E7EB] bg-white dark:bg-[#0D0D0D] dark:border-[#2D2D2D] hover:border-[#D1D5DB] dark:hover:border-[#3D3D3D] transition-colors duration-150">
          {/* Top accent bar */}
          <div
            className="h-1 w-8 rounded-full mb-6"
            style={{ backgroundColor: color }}
          />

          {/* Icon */}
          <div className="text-4xl mb-4">{icon}</div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-[#111111] dark:text-[#ECECEC] mb-2">
            {title}
          </h3>
          <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]/70 mb-4 leading-relaxed">
            {description}
          </p>

          {/* External link indicator */}
          <div className="flex items-center gap-2 text-sm font-medium transition-all duration-150">
            <span style={{ color }}>Visit</span>
            <ExternalLink size={16} style={{ color }} />
          </div>
        </div>
      </a>
    </motion.div>
  );
}
