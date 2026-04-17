import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function InteractiveMessage() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    if (clicks < 3) {
      setClicks(clicks + 1);
    }
  };

  let buttonText = "Did you know?";
  if (clicks === 1) buttonText = "2 more...";
  if (clicks === 2) buttonText = "1 more...";

  return (
    <div className="mt-12 flex justify-center">
      <motion.div
        layout
        onClick={clicks < 3 ? handleClick : undefined}
        animate={clicks < 3 ? {
          y: [0, -8, 0],
          boxShadow: [
            "0 0 10px rgba(0, 240, 255, 0.2)",
            "0 0 25px rgba(0, 240, 255, 0.6)",
            "0 0 10px rgba(0, 240, 255, 0.2)"
          ],
          borderColor: [
            "rgba(255, 255, 255, 0.1)",
            "rgba(0, 240, 255, 0.5)",
            "rgba(255, 255, 255, 0.1)"
          ]
        } : {
          y: 0,
          boxShadow: "0 0 0px rgba(0,0,0,0)",
          borderColor: "rgba(255, 255, 255, 0.1)"
        }}
        transition={clicks < 3 ? {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        } : { duration: 0.4 }}
        className={`glass bg-white/[0.03] overflow-hidden border ${
          clicks < 3 
            ? 'inline-flex items-center justify-center px-6 py-2.5 rounded-full cursor-pointer' 
            : 'rounded-2xl p-6 md:p-8 relative w-full'
        }`}
        style={{ cursor: clicks < 3 ? 'pointer' : 'default' }}
      >
        {clicks < 3 ? (
          <motion.div layout="position" className="flex items-center">
            <motion.span layout="position" className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[var(--color-aqua)] whitespace-nowrap drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
              {buttonText}
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col text-left"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-aqua)] to-transparent" />
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-aqua)] shadow-[0_0_8px_var(--color-aqua)] opacity-90" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-aqua)]">
                Did you know?
              </span>
            </div>
            <p className="text-white/70 font-light leading-relaxed mb-6 text-sm md:text-base">
              When you architect a <span className="relative inline-block text-white font-medium z-10 px-1">
                narrative
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                  className="absolute bottom-[10%] left-0 w-full h-[40%] bg-[var(--color-aqua)]/60 -z-10 origin-left -rotate-1 rounded-sm"
                />
              </span>, the viewer's brain surrenders to your frequency. It bypasses logical defense mechanisms, rendering our psych-driven campaigns the ultimate weapon for market domination. They don't just watch. They submit.
            </p>
            <Link 
              to="/invisible-wrap" 
              className="inline-flex items-center text-xs font-light tracking-wide text-white/50 hover:text-[var(--color-aqua)] transition-colors w-fit"
            >
              click here to learn more...
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
