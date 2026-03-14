'use client';

import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

export function AnimatedSection({ children, delay = 0, direction = 'up', className }: AnimatedSectionProps) {
  const directionOffset = {
    up: { x: 0, y: 40 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
