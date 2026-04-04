import React from 'react';
import { motion } from 'motion/react';

export default function MessageToTheWorld() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tighter mb-16">A Message to the World</h1>
          <div className="text-xl md:text-3xl text-white/70 font-light leading-relaxed space-y-10">
            <p>
              We are standing at the edge of a new frontier in creativity.
            </p>
            <p>
              The boundaries between imagination and reality are dissolving.
            </p>
            <p className="text-[var(--color-aqua)]">
              Welcome to the future of visual storytelling.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
