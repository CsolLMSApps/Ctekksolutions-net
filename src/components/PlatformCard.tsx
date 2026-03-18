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
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
        delay,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -6,
      boxShadow: `0 20px 25px -5px ${color}20`,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <motion.div
      variants={{
        ...cardVariants,
        ...hoverVariants,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      whileHover="hover"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        <div
          className={`h-full p-6 rounded-lg border transition-all duration-300 bg-white dark:bg-gray-950 hover:bg-gradient-to-br`}
          style={{
            borderColor: `${color}40`,
            backgroundImage: 'linear-gradient(to bottom right, transparent, transparent)',
          }}
        >
          {/* Top accent bar */}
          <div
            className="h-1 w-12 rounded-full mb-6"
            style={{ backgroundColor: color }}
          />

          {/* Icon */}
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>

          {/* External link indicator */}
          <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300">
            <span style={{ color }}>Visit</span>
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              style={{ color }}
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
}
