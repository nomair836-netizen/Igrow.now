import React from 'react';
import { motion } from 'motion/react';
import { MiniTitle } from '../components/Shared';
import AwardBanner from '../components/AwardBanner';
import ShowcaseVideo from '../components/ShowcaseVideo';
import ComparisonTable from '../components/ComparisonTable';
import InteractiveMessage from '../components/InteractiveMessage';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden gradient-bg">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/abstract-dark/1920/1080?blur=10')] opacity-5 mix-blend-overlay" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <MiniTitle>Growth Partner</MiniTitle>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-display font-bold tracking-tighter leading-[0.8] mb-8 text-gradient-aqua"
          >
            I Grow.
          </motion.h1>
        </div>
      </section>

      <AwardBanner />

      <ShowcaseVideo />

      {/* Section 1: Our Vision */}
      <section id="vision" className="pt-32 pb-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            
            {/* Text Content - Left Side */}
            <div className="lg:col-span-5 relative z-20">
              <MiniTitle>The Epiphany</MiniTitle>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-sans font-light tracking-tighter mb-10 leading-[1.1]"
              >
                Architects of <span className="font-serif italic text-white/80">Perception</span>
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <p className="text-xl md:text-3xl text-white/80 font-serif leading-relaxed">
                  The era of traditional production is <span className="italic text-white">dead.</span>
                </p>
                <p className="text-lg text-white/50 font-light leading-relaxed">
                  We do not "make videos" or "run campaigns." We construct visual realities and engineer market supremacy. By merging ruthless business strategy with absolute cinematic mastery, we treat your brand's equity as our own. We don't take briefs; we dictate the future of your visual identity.
                </p>
                <p className="text-sm text-[var(--color-aqua-dark)] font-mono">
                  The gap between imagination and reality no longer exists. We closed it.
                </p>
              </motion.div>
            </div>

            {/* Image - Right Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative lg:-mr-12 xl:-mr-32"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-aqua)]/10 to-transparent mix-blend-overlay z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-50" />
                <img 
                  src="https://i.ibb.co/4yYrjqv/2-copy.jpg" 
                  alt="I Grow Vision" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[var(--color-aqua)]/10 blur-[120px] rounded-full pointer-events-none" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 2: The Story Behind I Grow */}
      <section id="story" className="py-40 relative z-20 bg-[var(--color-luxury-gray)] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-luxury-black)] to-transparent pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-[20%] -right-[10%] w-[70%] h-[140%] bg-[radial-gradient(ellipse_at_center,var(--color-aqua-deep)_0%,transparent_70%)] opacity-20 blur-[100px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: The Big Numbers (Editorial Stats) */}
            <div className="lg:col-span-7 relative">
              <div className="flex flex-col gap-12 md:gap-16">
                
                {/* Stat 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-7xl md:text-[9rem] font-sans font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 leading-none transition-transform duration-500 group-hover:-translate-y-2">
                      40<span className="text-5xl md:text-7xl">%</span>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--color-aqua)] mb-2">The Result</span>
                      <span className="text-2xl md:text-4xl font-serif italic text-white/70">of the cost</span>
                    </div>
                  </div>
                </motion.div>

                {/* Stat 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-7xl md:text-[9rem] font-serif italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-aqua-light)] to-[var(--color-aqua-dark)] leading-none transition-transform duration-500 group-hover:-translate-y-2">
                      5<span className="text-5xl md:text-7xl font-sans">x</span>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/40 mb-2">The Efficiency</span>
                      <span className="text-2xl md:text-4xl font-sans font-light text-white/70">the speed</span>
                    </div>
                  </div>
                </motion.div>

                {/* Stat 3 */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="text-7xl md:text-[9rem] font-sans font-bold tracking-tighter text-white leading-none transition-transform duration-500 group-hover:-translate-y-2">
                      101<span className="text-5xl md:text-7xl">%</span>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--color-aqua)] mb-2">The Standard</span>
                      <span className="text-2xl md:text-4xl font-serif italic text-white/70">photorealistic quality</span>
                    </div>
                  </div>
                </motion.div>

              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-12"
              >
                <p className="text-xs md:text-sm text-[var(--color-aqua-dark)] font-mono border-t border-white/10 pt-6">
                  *Perfection is not the goal. It is the baseline.
                </p>
              </motion.div>

            </div>

            {/* Right Column: The Narrative */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <MiniTitle>Who We Are</MiniTitle>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-sans font-light tracking-tighter mb-12 leading-[1.1]"
              >
                The <span className="relative inline-block font-serif italic text-white z-10 px-1">
                  Philosophy
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                    className="absolute bottom-[15%] left-0 w-full h-[35%] bg-[var(--color-aqua)]/60 -z-10 origin-left -rotate-1 rounded-sm"
                  />
                </span> <br/> Behind I Grow
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Vertical Timeline Accent */}
                <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-white/10">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    className="w-full bg-gradient-to-b from-[var(--color-aqua)] via-[var(--color-aqua-light)] to-transparent"
                  />
                </div>

                <div className="pl-8 space-y-10">
                  <div>
                    <p className="text-3xl md:text-4xl text-white font-serif leading-snug mb-6">
                      After <span className="font-sans font-medium italic text-[var(--color-aqua-light)]">7 years</span> in elite production, we rendered the old model obsolete.
                    </p>
                    <p className="text-lg text-white/50 font-light leading-relaxed">
                      We rebounded our philosophy. We emerged as I Grow. We do not take briefs; we dictate the future of your visual identity. By fusing ruthless psychological insight with Generative Cinema, we engineer mass persuasion. Perfection is not our goal; it is our baseline.
                    </p>
                  </div>
                </div>
              </motion.div>

              <InteractiveMessage />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Secret Weapons */}
      <section className="py-40 relative z-10 overflow-hidden">
        {/* Full-width Background Image (Parallax) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('https://i.ibb.co/KjJc01YB/freepik-inspired-by-this-positon-and-camera-angel-img1-i-want-a-super-realistic-portrait-out-door-is.png')` }}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-[var(--color-luxury-black)]/80" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Centered Header */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <MiniTitle>It's a Craft. Generative Cinema is a Tool.</MiniTitle>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-sans font-light tracking-tighter mt-8 leading-[1.1]"
            >
              Our <span className="font-serif italic text-[var(--color-aqua-light)]">Secret</span> Weapons
            </motion.h2>
          </div>

          {/* Simple 2-Column Grid */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Weapon 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <span className="text-6xl md:text-8xl font-serif italic text-white/10">01</span>
              <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed">
                <strong className="block text-white mb-2 font-serif text-3xl">Architectural Precision.</strong>
                We do not play with tools; we engineer realities. Born from film school and ruthless business mastery, we execute with lethal precision.
              </p>
            </motion.div>

            {/* Weapon 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <span className="text-6xl md:text-8xl font-serif italic text-white/10">02</span>
              <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed">
                <strong className="block text-white mb-2 font-serif text-3xl">Psychological Warfare.</strong>
                We do not use basic tools. We sculpt proprietary models to bend perception. Every shadow, texture, and cut is engineered to bypass logic and ignite raw desire.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Industry Verticals Marquee */}
      <section className="py-20 border-t border-b border-white/5 bg-[var(--color-luxury-black)] overflow-hidden">
        <div className="flex w-[200%] md:w-[150%] animate-[marquee_20s_linear_infinite]">
          <div className="flex w-1/2 justify-around items-center">
            {['Haute Horlogerie', 'Luxury Real Estate', 'Automotive Elite', 'Private Aviation', 'High-End Hospitality', 'Venture Capital'].map((vertical, i) => (
              <div key={i} className="text-xl md:text-3xl font-serif italic text-white/20 whitespace-nowrap px-8">
                {vertical}
              </div>
            ))}
          </div>
          <div className="flex w-1/2 justify-around items-center">
            {['Haute Horlogerie', 'Luxury Real Estate', 'Automotive Elite', 'Private Aviation', 'High-End Hospitality', 'Venture Capital'].map((vertical, i) => (
              <div key={i} className="text-xl md:text-3xl font-serif italic text-white/20 whitespace-nowrap px-8">
                {vertical}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Deployment Protocol */}
      <section className="py-40 relative z-20 bg-[#020202]">
        <div className="max-w-6xl mx-auto px-6">
          <MiniTitle>The Methodology</MiniTitle>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-serif font-light tracking-tighter mb-20"
          >
            The Deployment Protocol
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase 01",
                title: "Architectural Intel",
                desc: "We extract your market distinctives and map your competitors' psychological blind spots. We formulate the strategy."
              },
              {
                phase: "Phase 02",
                title: "Generative Forge",
                desc: "Our proprietary AI pipelines synthesize hyper-realistic assets at speeds traditional studios cannot comprehend."
              },
              {
                phase: "Phase 03",
                title: "Market Strike",
                desc: "We deploy the assets across synchronized channels, guaranteeing absolute market suffocation and engagement."
              }
            ].map((protocol, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                key={i}
                className="bg-white/[0.02] border border-white/5 p-10 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-aqua)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <span className="text-[10px] font-mono text-[var(--color-aqua)] tracking-widest uppercase mb-4 block">
                  {protocol.phase}
                </span>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-[var(--color-aqua-light)] transition-colors duration-300">{protocol.title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm">
                  {protocol.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What We Do */}
      <section className="py-40 relative z-20 bg-[var(--color-luxury-gray)] shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
        <div className="max-w-4xl mx-auto px-6">
          <MiniTitle>The Velvet Rope</MiniTitle>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-serif font-light tracking-tighter mb-10"
          >
            The Selection
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/50 font-light leading-relaxed space-y-6"
          >
            <p>This is not a plea for business. We partner exclusively with visionaries prepared to scale aggressively.</p>
            <ul className="space-y-4 pl-4">
              {['Fine Perfumes & Swiss Watches', '5 Star Hotels', 'New Automobile Launches', 'Premium Real Estate'].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-aqua)]" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-4">If you are not prepared to rewrite your industry's rules, look elsewhere.</p>
            <p className="text-sm text-[var(--color-aqua-dark)] italic pt-4">
              *Note: We strictly vet all projects and only work with verified businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Privacy */}
      <section className="py-40 relative z-20 bg-[var(--color-luxury-black)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MiniTitle>100% Discretion</MiniTitle>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-sans font-light tracking-tighter mt-8 mb-10 leading-[1.1]"
          >
            Absolute <span className="font-serif italic text-[var(--color-aqua-light)]">Privacy</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto space-y-6"
          >
            <p>
              We operate as a silent strategic partner. We will never disclose our partnership, our methods, or share your project assets without explicit written consent.
            </p>
            <p>
              Your brand's prestige and exclusivity are our top priorities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6: I Grow */}
      <section className="py-40 relative z-20 bg-[var(--color-luxury-gray)] shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
        <div className="max-w-4xl mx-auto px-6">
          <MiniTitle>The Final Axiom</MiniTitle>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-serif font-light tracking-tighter mb-10"
          >
            I Grow
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-white/50 font-light leading-relaxed"
          >
            <p>
              We do not just make videos. We arm you with a multi-platform visual arsenal to suffocate the competition. 72 hours from conception to absolute market dominance. The future of engagement has arrived.
            </p>
          </motion.div>
        </div>
      </section>

      <ComparisonTable />

      {/* Structured Deployments Section */}
      <section id="packages" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <MiniTitle>The Deliverables</MiniTitle>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-serif font-light tracking-tighter mb-16 text-center"
          >
            Service Level Agreements
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            {[
              {
                miniTitle: "SLA Tier 01",
                title: "The Premiere",
                desc: "One devastating concept. Executed for absolute impact across multiple formats. One full-scale campaign, fractured into perfectly engineered short-form assets.",
                specs: [
                  "1x Flagship Cinematic Asset (4K / 60s)",
                  "6x Fractured Short-form Variants (9:16)",
                  "Custom Sound Design & Psychological Audio Engineering",
                  "72-Hour Rapid Deployment Protocol"
                ],
                link: "#contact"
              },
              {
                miniTitle: "SLA Tier 02",
                title: "The Dynasty",
                desc: "Complete market suffocation. A continuous flow of hyper-premium visual assets designed to dominate the timeline and rewrite your industry's rules.",
                specs: [
                  "4x Flagship Cinematic Assets Per Month",
                  "24x Omnichannel Social Micro-Assets",
                  "Dedicated Account Architect & Creative Lead",
                  "Priority Global Processing & Unlimited Revisions"
                ],
                link: "#contact"
              }
            ].map((pkg, i) => (
              <motion.a
                href={pkg.link}
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="block p-10 rounded-3xl relative overflow-hidden bg-black/40 border border-white/10 hover:border-[var(--color-aqua)]/50 group cursor-pointer transition-all duration-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-aqua)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-[var(--color-aqua)] mb-6">
                    {pkg.miniTitle}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif mb-6 group-hover:text-[var(--color-aqua-light)] transition-colors duration-500">{pkg.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed text-lg mb-8">
                    {pkg.desc}
                  </p>
                  <ul className="space-y-4 pt-8 border-t border-white/5">
                    {pkg.specs.map((spec, j) => (
                      <li key={j} className="flex items-start gap-4 text-sm font-light text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-aqua)] mt-1.5 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Content Creator Partnership Box */}
          <motion.a
            href="#creator-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block max-w-5xl mx-auto p-8 rounded-3xl relative overflow-hidden glass group cursor-pointer border-red-500/20 hover:border-red-500/40 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="text-[10px] sm:text-xs font-medium tracking-[0.25em] uppercase text-red-500 mb-4">
                  Content Creator Partnership
                </div>
                <h3 className="text-2xl md:text-3xl font-serif group-hover:text-red-400 transition-colors duration-500">YouTube Video Editing</h3>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-red-500/30 text-red-400 text-sm tracking-widest uppercase group-hover:bg-red-500/10 transition-colors duration-500">
                  Apply Now
                </span>
              </div>
            </div>
          </motion.a>
        </div>
      </section>
    </>
  );
}
