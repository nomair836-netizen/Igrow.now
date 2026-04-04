import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: "Project Emerald",
    category: "Commercial",
    color: "green",
    bgClass: "bg-green-950/20",
    borderClass: "border-green-500/20",
    glowClass: "shadow-[0_0_50px_rgba(34,197,94,0.1)]",
    textClass: "text-green-400",
    gradient: "from-green-500/20 via-green-900/5 to-transparent",
    image: "https://i.ibb.co/s7zLgvX/Green-copy.png"
  },
  {
    id: 2,
    title: "Project Crimson",
    category: "Editorial",
    color: "red",
    bgClass: "bg-red-950/20",
    borderClass: "border-red-500/20",
    glowClass: "shadow-[0_0_50px_rgba(239,68,68,0.1)]",
    textClass: "text-red-400",
    gradient: "from-red-500/20 via-red-900/5 to-transparent",
    image: null
  },
  {
    id: 3,
    title: "Project Azure",
    category: "Automotive",
    color: "blue",
    bgClass: "bg-blue-950/20",
    borderClass: "border-blue-500/20",
    glowClass: "shadow-[0_0_50px_rgba(59,130,246,0.1)]",
    textClass: "text-blue-400",
    gradient: "from-blue-500/20 via-blue-900/5 to-transparent",
    image: null
  },
  {
    id: 4,
    title: "Project Spectrum",
    category: "Creative Direction",
    color: "multicolor",
    bgClass: "bg-[#050505]",
    borderClass: "border-white/10",
    glowClass: "shadow-[0_0_50px_rgba(255,255,255,0.05)]",
    textClass: "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500",
    gradient: "from-transparent to-transparent",
    image: null
  }
];

export default function TheCollection() {
  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-8xl font-serif font-light tracking-tighter mb-6">The Collection</h1>
          <p className="text-xl text-white/50 font-light max-w-2xl">
            A curated gallery of our finest creations. Each project represents a unique exploration of color, mood, and precision.
          </p>
        </motion.div>
        
        <div className="space-y-16 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full aspect-[4/5] sm:aspect-square md:aspect-[21/9] rounded-2xl overflow-hidden border ${project.borderClass} ${project.bgClass} ${project.glowClass} group cursor-pointer`}
            >
              {/* Background Gradients */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-80 transition-opacity duration-700 z-0`} />
              
              {/* Project Image */}
              {project.image && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform"
                  />
                  {/* Subtle gradient overlay to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
              )}

              {/* Paint Splatter effect for Project 4 */}
              {project.color === 'multicolor' && (
                <>
                  <div className="absolute inset-0 opacity-40 mix-blend-screen filter blur-[60px] group-hover:blur-[30px] transition-all duration-1000" style={{
                    backgroundImage: `radial-gradient(circle at 10% 20%, rgba(255,0,128,0.8) 0%, transparent 40%),
                                      radial-gradient(circle at 90% 10%, rgba(0,255,255,0.8) 0%, transparent 40%),
                                      radial-gradient(circle at 30% 80%, rgba(255,255,0,0.8) 0%, transparent 40%),
                                      radial-gradient(circle at 80% 80%, rgba(0,255,0,0.8) 0%, transparent 40%)`
                  }} />
                </>
              )}

              {/* Noise overlay */}
              <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/40">
                    0{project.id} // {project.category}
                  </span>
                  <span className={`font-mono text-xs tracking-widest uppercase ${project.textClass}`}>
                    {project.color}
                  </span>
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <h3 className={`text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4 ${project.color === 'multicolor' ? project.textClass : 'text-white'}`}>
                    {project.title}
                  </h3>
                  <p className="text-white/40 font-light max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    Space reserved for project upload. The visual language is set, awaiting the final masterpiece.
                  </p>
                </div>
              </div>

              {/* Hover reveal overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
