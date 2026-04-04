import React from 'react';
import { motion } from 'motion/react';

export const MiniTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border-white/10 bg-white/[0.03] mb-5"
  >
    <div className="w-1 h-1 rounded-full bg-[var(--color-aqua)] shadow-[0_0_8px_var(--color-aqua)] opacity-90" />
    <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] uppercase text-white/60 pt-[1px]">
      {children}
    </span>
  </motion.div>
);
