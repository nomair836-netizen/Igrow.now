import React from 'react';
import { motion } from 'motion/react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tighter mb-6">Terms & Conditions</h1>
          <p className="text-xl text-white/50 font-light">
            Formal policies and operational guidelines for I Grow.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12 text-white/80 font-light leading-relaxed"
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white">Payments & Ownership Transfer</h2>
            <p>
              50% upfront non-refundable deposit to commence work, and 50% final payment upon project completion. All drafts and the final completed video will be delivered with a prominent watermark, rendering it unusable for publication. Upon receipt of the final payment in full, complete ownership of the video transfers to the client, and a clean, unwatermarked high-resolution file will be released.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white">Revisions (Client Reassurance)</h2>
            <p>
              We guarantee exceptional satisfaction by offering a generous 7 to 12 rounds of revisions strictly within the initially agreed-upon concept. However, requesting a complete overhaul or a fundamentally new concept after the project has commenced or concluded will be treated as a new project subject to additional fees.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white">Deliverables</h2>
            <p>
              The client will receive the final, polished, and rendered video file only. Source files, raw footage, and Generative Cinema algorithms remain the exclusive property of I Grow.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white">Client Delays (Workflow Protection)</h2>
            <p>
              To maintain efficient project timelines, if a client fails to respond or provide feedback on a submitted draft within 7 consecutive days, the project will be legally deemed as approved and finalized.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white">Strict Confidentiality & Portfolio Usage</h2>
            <p>
              I Grow has not and will never use your materials, videos, or brand for our own advertising or self-promotion. Total privacy is guaranteed. Exceptional usage will only occur if explicitly requested by the client or with prior signed written consent.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
