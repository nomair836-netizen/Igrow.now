import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Youtube, Lock } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Project Genesis",
    category: "Commercial",
    color: "monochrome",
    bgClass: "bg-white/5",
    borderClass: "border-white/10",
    glowClass: "shadow-[0_0_50px_rgba(255,255,255,0.03)]",
    textClass: "text-white/60",
    gradient: "from-white/10 via-black/5 to-transparent",
    image: "/assets/project-genesis.png"
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

const ProjectCard = ({ project, isLocked = false }: { project: any, isLocked?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className={`relative w-full aspect-[4/5] sm:aspect-square md:aspect-[21/9] rounded-2xl overflow-hidden border ${project.borderClass} ${project.bgClass} ${project.glowClass} group ${isLocked ? '' : 'cursor-pointer'}`}
  >
    {/* Background Gradients */}
    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 ${isLocked ? '' : 'group-hover:opacity-80'} transition-opacity duration-700 z-0`} />
    
    {/* Project Image */}
    {project.image && (
      <div className={`absolute inset-0 z-0 ${project.id === 1 ? 'grayscale opacity-70' : ''}`}>
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover select-none pointer-events-none ${isLocked ? '' : 'opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform'}`}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          draggable="false"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
      </div>
    )}

    {/* Paint Splatter effect for Project 4 */}
    {project.color === 'multicolor' && (
      <div className="absolute inset-0 opacity-40 mix-blend-screen filter blur-[60px] transition-all duration-1000" style={{
        backgroundImage: `radial-gradient(circle at 10% 20%, rgba(255,0,128,0.8) 0%, transparent 40%),
                          radial-gradient(circle at 90% 10%, rgba(0,255,255,0.8) 0%, transparent 40%),
                          radial-gradient(circle at 30% 80%, rgba(255,255,0,0.8) 0%, transparent 40%),
                          radial-gradient(circle at 80% 80%, rgba(0,255,0,0.8) 0%, transparent 40%)`
      }} />
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
      
      <div className={`transform ${isLocked ? '' : 'translate-y-4 group-hover:translate-y-0'} transition-transform duration-700 ease-out`}>
        <h3 className={`text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4 ${project.color === 'multicolor' ? project.textClass : 'text-white'}`}>
          {project.title}
        </h3>
        {!isLocked && (
          <p className="text-white/40 font-light max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            Space reserved for project upload. The visual language is set, awaiting the final masterpiece.
          </p>
        )}
      </div>
    </div>

    {/* Hover reveal overlay */}
    {!isLocked && <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />}
  </motion.div>
);

export default function TheCollection() {
  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tighter mb-8">
            We proudly protect our clients' privacy.
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl text-white/60 font-light leading-relaxed">
            <p>
              We never use our clients' projects for our own promotion. Our work remains their exclusive asset.
            </p>
            <p className="text-white/90">
              However, the I Grow team is currently producing an exclusive collection of high-end commercials, documentaries, and concept visuals to showcase our capabilities.
            </p>
            <p className="text-[var(--color-aqua-light)] font-medium tracking-wide">
              Coming very soon.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <a href="https://www.instagram.com/Igroooow" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@igrowai" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCT1d2dxF_RNNvwd59XYPPpw" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        
        <div className="space-y-16 md:space-y-32">
          {/* First Project - Visible */}
          <ProjectCard project={projects[0]} />

          {/* Locked Projects Container */}
          <div className="relative">
            {/* The rest of the projects (blurred/dimmed) */}
            <div className="space-y-16 md:space-y-32 opacity-20 blur-sm pointer-events-none">
              {projects.slice(1).map(project => (
                <ProjectCard key={project.id} project={project} isLocked={true} />
              ))}
            </div>

            {/* The Black Gradient Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-[#020202] via-40% to-[#020202] flex flex-col items-center justify-start pt-48">
              <div className="flex flex-col items-center">
                <Lock className="w-5 h-5 text-white/30 mb-6" strokeWidth={1} />
                <span className="uppercase tracking-[0.4em] text-[10px] font-light text-white/40 mb-4">Classified Collection</span>
                <h3 className="text-3xl md:text-5xl font-serif font-light text-white/90 tracking-wide">Coming Soon</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
