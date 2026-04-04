import React from 'react';
import { motion } from 'motion/react';
import { MiniTitle } from './Shared';
import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  return (
    <section className="py-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <MiniTitle>Why Choose Us</MiniTitle>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-serif font-light tracking-tighter"
          >
            I Grow vs. The Rest
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-x-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 border-b border-white/10 text-white/50 font-light text-lg w-1/4">Features</th>
                <th className="p-6 border-b border-white/10 text-center w-1/4">
                  <div className="text-[var(--color-aqua)] font-serif text-2xl mb-2">I Grow</div>
                  <div className="text-xs text-[var(--color-aqua)]/70 uppercase tracking-widest">AI-Powered Studio</div>
                </th>
                <th className="p-6 border-b border-white/10 text-center w-1/4">
                  <div className="text-white font-serif text-2xl mb-2">Traditional</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">Agencies</div>
                </th>
                <th className="p-6 border-b border-white/10 text-center w-1/4">
                  <div className="text-white font-serif text-2xl mb-2">Freelancers</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">Individuals</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {[
                { feature: "Delivery Speed", igrow: "72 Hours", traditional: "3-6 Weeks", freelancer: "Varies" },
                { feature: "Cost Efficiency", igrow: "60% Less", traditional: "High", freelancer: "Medium" },
                { feature: "Cinematic Quality", igrow: true, traditional: true, freelancer: false },
                { feature: "101% Photorealism", igrow: true, traditional: false, freelancer: false },
                { feature: "Full Privacy", igrow: true, traditional: true, freelancer: false },
                { feature: "Scalability", igrow: "Infinite", traditional: "Limited", freelancer: "Low" },
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 border-b border-white/5 text-white/80 font-light">{row.feature}</td>
                  <td className="p-6 border-b border-white/5 text-center bg-[var(--color-aqua)]/5">
                    {typeof row.igrow === 'boolean' ? (
                      row.igrow ? <Check className="w-6 h-6 text-[var(--color-aqua)] mx-auto" /> : <X className="w-6 h-6 text-white/20 mx-auto" />
                    ) : (
                      <span className="text-[var(--color-aqua)] font-medium">{row.igrow}</span>
                    )}
                  </td>
                  <td className="p-6 border-b border-white/5 text-center">
                    {typeof row.traditional === 'boolean' ? (
                      row.traditional ? <Check className="w-6 h-6 text-white/50 mx-auto" /> : <X className="w-6 h-6 text-white/20 mx-auto" />
                    ) : (
                      <span className="text-white/50">{row.traditional}</span>
                    )}
                  </td>
                  <td className="p-6 border-b border-white/5 text-center">
                    {typeof row.freelancer === 'boolean' ? (
                      row.freelancer ? <Check className="w-6 h-6 text-white/50 mx-auto" /> : <X className="w-6 h-6 text-white/20 mx-auto" />
                    ) : (
                      <span className="text-white/50">{row.freelancer}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
