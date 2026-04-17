import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, BookOpen, ArrowDown } from 'lucide-react';

const sections = [
  {
    id: 0,
    content: (
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tighter mb-8 text-white">
          The Invisible Wrap <br className="hidden md:block" />
          <span className="text-[var(--color-aqua)] italic">& The Vision of I Grow</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
          We don't just produce beautiful commercials. We wrap our work in an invisible layer of science.
        </p>
      </div>
    )
  },
  {
    id: 1,
    content: (
      <p className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-12">
        Think of it as a transparent cover applied to every frame we edit. Inspired by Edward Bernays, we explicitly use the principles of Consumer Behavior and Neuromarketing. While the audience sees stunning visuals, this invisible wrapper uses hidden details and emotional triggers to speak directly to their subconscious mind.
      </p>
    )
  },
  {
    id: 2,
    content: (
      <p className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-12">
        To wrap your project in this strategy perfectly, absolute <span className="text-white font-medium">Client Privacy</span> is our standard. Keeping your brand's secrets strictly confidential gives us the ideal, secure space to apply these advanced techniques without exposing your edge to competitors.
      </p>
    )
  },
  {
    id: 3,
    content: (
      <p className="text-base md:text-lg text-[var(--color-aqua)]/90 font-light leading-relaxed mb-16 border-l-2 border-[var(--color-aqua)]/30 pl-6">
        Because applying this hidden layer is our natural passion, we include it in our content entirely for free.
      </p>
    )
  },
  {
    id: 4,
    content: (
      <h2 className="text-2xl md:text-3xl font-serif font-light tracking-tighter mb-8 text-white">
        But I Grow is more than just a Growth Partner.
      </h2>
    )
  },
  {
    id: 5,
    content: (
      <p className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-20">
        We are building something much bigger. We have massive future projects that go far beyond normal video production. Our true goal is to drive real change in the world of visual content and leave a lasting impact and legacy.
      </p>
    )
  }
];

export default function InvisibleWrap() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    }
  };

  // Auto-scroll to center the new section smoothly
  useEffect(() => {
    if (currentSection > 0) {
      setTimeout(() => {
        sectionRefs.current[currentSection]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  }, [currentSection]);

  return (
    <div 
      className="min-h-screen bg-[#050505] text-white pt-32 pb-32 px-6 cursor-pointer selection:bg-[var(--color-aqua)]/30"
      onClick={handleNext}
    >
      <div className="max-w-3xl mx-auto relative">
        
        {/* Progress Indicator */}
        <div className="fixed top-28 right-6 md:right-12 flex flex-col items-center gap-2 z-50 opacity-50">
          <div className="text-[10px] font-mono tracking-widest text-[var(--color-aqua)]">
            0{currentSection + 1} / 0{sections.length}
          </div>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-[var(--color-aqua)]"
              initial={{ height: '0%' }}
              animate={{ height: `${((currentSection + 1) / sections.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {sections.slice(0, currentSection + 1).map((section, index) => (
              <motion.div
                key={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={index < currentSection ? "opacity-40 transition-opacity duration-1000" : ""}
              >
                {section.content}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Click to continue prompt */}
        <AnimatePresence>
          {currentSection < sections.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 pointer-events-none"
            >
              <span className="text-xs tracking-[0.2em] uppercase font-light">Click anywhere to continue</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
