import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function ShowcaseVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "WE-iTKin9cc";

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-aqua)]">Featured Showcase</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tighter">
            Experience the <span className="italic text-white/50">Future</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_0_80px_rgba(0,229,255,0.05)] group"
        >
          {!isPlaying ? (
            <div 
              className="absolute inset-0 cursor-pointer flex items-center justify-center"
              onClick={() => setIsPlaying(true)}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10" />
              <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Showcase Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="relative z-20 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-aqua)]/20 group-hover:border-[var(--color-aqua)]/50 transition-all duration-500 shadow-2xl">
                <Play className="w-10 h-10 text-white fill-white ml-2" />
              </div>
            </div>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          )}
        </motion.div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-aqua)]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
