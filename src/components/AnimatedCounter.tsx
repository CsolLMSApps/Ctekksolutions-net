'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function AnimatedCounter({
  end,
  suffix = '',
  label,
  delay = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className="text-center"
    >
      <div className="text-4xl font-semibold text-[#111111] dark:text-[#ECECEC]">
        {count}
        <span>{suffix}</span>
      </div>
      <p className="text-sm text-[#6B7280] dark:text-[#ECECEC]/70 mt-1">
        {label}
      </p>
    </motion.div>
  );
}
