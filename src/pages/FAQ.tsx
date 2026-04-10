import React from 'react';
import { motion } from 'motion/react';
import { MiniTitle } from '../components/Shared';

const faqCategories = [
  {
    category: "Process & Technology",
    faqs: [
      {
        q: "Do you just use AI to generate videos automatically?",
        a: "No. We are filmmakers first. With 7 years of directorial experience, we use AI purely as a high end tool, not a replacement for human vision. AI provides the unmatched speed, but every frame, shadow, and cut is guided by a human Director’s eye to ensure cinematic perfection."
      },
      {
        q: "Do you only use AI?",
        a: "No. We use our own unique methods, seamlessly mixing our own real life footage and CGI with tools like After Effects and Blender."
      },
      {
        q: "Will the final video look \"fake\" or computer generated?",
        a: "Our standard is 101% true to life quality. We specialize in surreal, premium aesthetics—like futuristic cityscapes, luxury timepieces, and high end automotive shots—training custom models to ensure the final output is flawlessly realistic and aligned with your brand's prestige."
      },
      {
        q: "What does the workflow look like?",
        a: "We are an industry standard team that has worked together for years. We deliver perfect creative solutions for large corporations, and we build stable, friendly relationships with our long term clients."
      }
    ]
  },
  {
    category: "Services & Capabilities",
    faqs: [
      {
        q: "What exactly do we receive at the end of a project?",
        a: "We don't just deliver a file; we engineer an \"Ecosystem.\" From one core cinematic vision, you typically receive a master long form commercial, accompanied by optimized, high impact short formats (Reels/Shorts) designed for complete digital dominance across all platforms."
      },
      {
        q: "Do you offer standalone video editing services for content creators?",
        a: "Yes, absolutely. We provide premium video editing services specifically tailored for content creators and YouTubers. While we can edit your existing footage as a standalone service, we also offer the option to seamlessly integrate hyper-realistic AI B-roll to elevate your content and perfectly complement your main narrative."
      },
      {
        q: "Can you handle 25 videos and 300 photo campaigns in several days?",
        a: "Yes. The European market is full of fast releases, and we always succeed in delivering big projects on time while maximizing quality."
      },
      {
        q: "What if the generated content doesn't align with our brand identity?",
        a: "We don't rely on random generation. Before we create a single frame, we deeply analyze your brand's DNA. Because a human director is at the helm, we maintain complete control over the art direction, ensuring the final cut perfectly matches your established luxury standards."
      },
      {
        q: "Can I feature a specific model or celebrity in my campaign?",
        a: "Using a real person's likeness without explicit written consent is strictly prohibited and illegal. However, for visionary brands and major campaigns, I Grow facilitates official partnerships with a curated selection of global stars and models who are open to AI-driven projects. The talent's licensing fee is simply added to your final project cost. Think of it as casting a superstar for your commercial the 2026 way—eliminating the massive overhead of flights, luxury hotels, and on-set logistics, while delivering a flawless, high-end performance."
      }
    ]
  },
  {
    category: "Partnership & Pricing",
    faqs: [
      {
        q: "How does your pricing compare to traditional production agencies?",
        a: "By eliminating bloated crews, expensive equipment rentals, and physical sets, we deliver cinema quality campaigns at roughly 40% of the traditional cost and 5x the speed. You are investing in the final masterpiece, not the costly logistics."
      },
      {
        q: "How do you handle billing?",
        a: "We offer worldwide services and secure payment choices, with PayPal being our primary option."
      },
      {
        q: "We don’t want our audience to know we used AI. Is that possible?",
        a: "Absolutely. We guarantee 100% discretion and strict privacy. You never have to disclose our methods. We act as your secret weapon behind the scenes, delivering hyper stylized, photorealistic results that look indistinguishable from a massive studio production."
      },
      {
        q: "Do you accept projects from any industry or startup?",
        a: "To maintain our high standards, we exclusively partner with established, premium brands worldwide, with a strong focus on the UK and Europe. Our expertise is highly specialized in luxury sectors: fine fragrances, Swiss watches, 5 star hospitality, new car launches, and premium real estate."
      }
    ]
  }
];

export default function FAQ() {
  const allFaqs = faqCategories.flatMap(c => c.faqs);
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="pt-40 pb-32 relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 flex flex-col items-center">
          <MiniTitle>Knowledge Base</MiniTitle>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif font-light tracking-tighter mb-6"
          >
            Frequently Asked <span className="italic text-white/50">Questions</span>
          </motion.h1>
        </div>

        <div className="space-y-16">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-serif font-light text-white/90 border-b border-white/10 pb-4"
              >
                {category.category}
              </motion.h2>
              <div className="space-y-6">
                {category.faqs.map((faq, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass p-8 md:p-10 rounded-3xl glass-hover"
                  >
                    <h3 className="text-2xl font-serif mb-4 text-[var(--color-aqua-light)]">{faq.q}</h3>
                    <p className="text-white/70 font-light leading-relaxed text-lg">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
