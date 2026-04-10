import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="font-serif font-light text-sm md:text-base tracking-[0.2em] uppercase flex whitespace-nowrap flex-nowrap items-center gap-8 px-4" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

const AwardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-aqua)] opacity-50">
    <path d="M12 15c-3.866 0-7-3.134-7-7 0-3.866 3.134-7 7-7s7 3.134 7 7c0 3.866-3.134 7-7 7z" />
    <path d="M12 15v7" />
    <path d="M8.5 22h7" />
    <path d="M12 2v2" />
    <path d="M12 11v2" />
    <path d="M5 8h2" />
    <path d="M17 8h2" />
    <path d="M7.05 4.93l1.41 1.41" />
    <path d="M15.54 10.66l1.41 1.41" />
    <path d="M7.05 11.07l1.41-1.41" />
    <path d="M15.54 5.34l1.41-1.41" />
  </svg>
);

const LaurelIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-aqua)] opacity-50">
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M9 11a9 9 0 0 1 9 9" />
    <path d="M20 11a9 9 0 0 0-9 9" />
    <path d="M15 11a9 9 0 0 0-9 9" />
    <path d="M12 3v18" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-aqua)] opacity-50">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-aqua)] opacity-50">
    <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
  </svg>
);

export default function AwardBanner() {
  return (
    <section className="py-12 relative overflow-hidden flex flex-col gap-4">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-luxury-black)] from-10% via-transparent via-50% to-[var(--color-luxury-black)] to-90% z-10 pointer-events-none" />
      
      <ParallaxText baseVelocity={-1}>
        <span className="flex items-center gap-8 text-white/40">
          <AwardIcon />
          <span>Cinematic Quality</span>
          <LaurelIcon />
          <span>101% Perfection</span>
          <StarIcon />
          <span>AI Powered</span>
          <SparkleIcon />
          <span>Future Ready</span>
          <AwardIcon />
          <span>Limitless Creativity</span>
          <LaurelIcon />
          <span>Hyper Realistic</span>
        </span>
      </ParallaxText>

      <ParallaxText baseVelocity={1}>
        <span className="flex items-center gap-8 text-white/40">
          <StarIcon />
          <span>Unmatched Speed</span>
          <SparkleIcon />
          <span>Cost Efficient</span>
          <AwardIcon />
          <span>Global Standards</span>
          <LaurelIcon />
          <span>Visionary Art</span>
          <StarIcon />
          <span>Pixel Perfect</span>
          <SparkleIcon />
          <span>Next Gen Studio</span>
        </span>
      </ParallaxText>
    </section>
  );
}
