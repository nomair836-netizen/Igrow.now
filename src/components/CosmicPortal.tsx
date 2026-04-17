import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const SYMBOLS = ['👁', '🪬', '☯', '☥', '✧', '✦', '⚛', '⎊', '♾', '☾'];

export default function CosmicPortal() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to="/message"
      className="relative flex items-center justify-center rounded-full overflow-hidden z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ 
        width: isHovered ? '180px' : '48px', 
        height: '48px',
        boxShadow: isHovered ? '0 0 30px rgba(0,229,255,0.4), inset 0 0 20px rgba(0,0,0,0.8)' : '0 4px 20px rgba(0,0,0,0.3)',
        border: isHovered ? '1px solid rgba(0,229,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
        backgroundColor: isHovered ? '#000' : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(10px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default State: The Mysterious Orb */}
      <motion.div
        animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.5 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 flex items-center justify-center"
      >
         <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_3px_rgba(255,255,255,0.8)] relative">
           <div className="absolute inset-0 bg-[var(--color-aqua)] blur-[4px] opacity-50 animate-pulse rounded-full"></div>
         </div>
      </motion.div>

      {/* Hover State: The Cosmic Tunnel */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
          >
            {/* Warp Tunnel Background */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_#001133_0%,_#000000_100%)]">
              {/* CSS Warp Lines */}
              <div className="warp-tunnel"></div>
            </div>
            
            {/* Cosmic Flowing Symbols */}
            <div className="relative z-10 w-full h-full flex items-center justify-between px-6">
              {[0, 1, 2].map((index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0, x: (index - 1) * -30, rotate: -45 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0.5, 1.5, 0.5], 
                    x: [(index - 1) * -20, 0, (index - 1) * 20],
                    rotate: [45, 0, -45],
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "linear"
                  }}
                  className="text-[var(--color-aqua-light)] text-xl filter drop-shadow-[0_0_10px_rgba(0,229,255,1)] absolute left-1/2 top-1/2 -ml-2.5 -mt-3.5"
                >
                  <SymbolRotator delay={index * 0.3} />
                </motion.span>
              ))}
            </div>

            {/* Central Deep Eye/Core */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute w-8 h-8 rounded-full bg-gradient-to-tr from-[#9900ff]/20 to-[var(--color-aqua)]/20 blur-[8px] mix-blend-screen"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

function SymbolRotator({ delay }: { delay: number }) {
  const [sym, setSym] = useState(SYMBOLS[0]);

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setSym(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
      }, 150);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  return <>{sym}</>;
}
