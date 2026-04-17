import React from 'react';
import { motion } from 'motion/react';
import { Inbox, Send, FileText, Star, Trash2, Search, MoreHorizontal, Reply, Forward, Archive, UserCircle, Lock } from 'lucide-react';

export default function MessageToTheWorld() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 max-w-7xl w-full mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Top App Bar */}
        <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-sm font-medium text-white/50 tracking-wide">Mail</span>
          </div>
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                type="text" 
                placeholder="Search mail..." 
                className="w-full bg-white/[0.05] border border-white/10 rounded-md py-1.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[var(--color-aqua)]/50 transition-colors placeholder:text-white/30"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--color-aqua)]/20 flex items-center justify-center border border-[var(--color-aqua)]/30">
              <UserCircle className="w-5 h-5 text-[var(--color-aqua)]" />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Sidebar */}
          <div className="w-48 lg:w-64 border-r border-white/10 bg-white/[0.01] flex flex-col py-4 hidden md:flex">
            <div className="px-4 mb-6">
              <button className="w-full bg-white text-black font-medium text-sm py-2 rounded-md hover:bg-gray-200 transition-colors">
                New Message
              </button>
            </div>
            <nav className="flex-1 space-y-1 px-2">
              <a href="#" className="flex items-center justify-between px-3 py-2 rounded-md bg-[var(--color-aqua)]/10 text-[var(--color-aqua)]">
                <div className="flex items-center gap-3">
                  <Inbox className="w-4 h-4" />
                  <span className="text-sm font-medium">Inbox</span>
                </div>
                <span className="text-xs font-bold">1</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                <Send className="w-4 h-4" />
                <span className="text-sm font-medium">Sent</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Drafts</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Starred</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                <Trash2 className="w-4 h-4" />
                <span className="text-sm font-medium">Trash</span>
              </a>
            </nav>
          </div>

          {/* Email List */}
          <div className="w-full md:w-80 lg:w-96 border-r border-white/10 flex flex-col bg-[#0a0a0a]">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-lg font-medium">Inbox</h2>
              <MoreHorizontal className="w-5 h-5 text-white/50 cursor-pointer hover:text-white" />
            </div>
            <div className="flex-1 overflow-y-auto">
              {/* Active Email Item */}
              <div className="p-4 border-b border-white/5 bg-[var(--color-aqua)]/5 border-l-2 border-l-[var(--color-aqua)] cursor-pointer">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-medium text-[var(--color-aqua)] text-sm">I Grow</span>
                  <span className="text-xs text-[var(--color-aqua)]/70">10:42 AM</span>
                </div>
                <h3 className="text-sm font-medium text-white mb-1 truncate">A Message to the Market - 2026 Shift</h3>
                <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                  We have been filmmakers for many years. This profession is both our first passion and our primary source of income...
                </p>
              </div>
              
              {/* Dummy Emails Container with Privacy Overlay */}
              <div className="relative mt-2">
                {/* Privacy Overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 border border-white/10 backdrop-blur-md shadow-2xl">
                    <Lock className="w-3.5 h-3.5 text-white/70" />
                    <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-white/70 pt-[1px]">Client Privacy</span>
                  </div>
                </div>

                {/* Blurred Content */}
                <div className="opacity-40 blur-[4px] select-none pointer-events-none">
                  {/* Dummy Email 1 */}
                  <div className="p-4 border-b border-white/5">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-medium text-white/80 text-sm">Vogue Magazine</span>
                      <span className="text-xs text-white/40">Yesterday</span>
                    </div>
                    <h3 className="text-sm font-medium text-white/70 mb-1 truncate">Partnership Inquiry</h3>
                    <p className="text-xs text-white/40 line-clamp-2 leading-relaxed">
                      We were incredibly impressed by your recent campaign and would love to discuss a potential collaboration for our upcoming fall issue.
                    </p>
                  </div>

                  {/* Dummy Email 2 */}
                  <div className="p-4 border-b border-white/5">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-medium text-white/80 text-sm">Apple Creative</span>
                      <span className="text-xs text-white/40">Oct 12</span>
                    </div>
                    <h3 className="text-sm font-medium text-white/70 mb-1 truncate">Project Vision Alignment</h3>
                    <p className="text-xs text-white/40 line-clamp-2 leading-relaxed">
                      Following up on our discussion regarding the new product launch. The aesthetic direction you proposed aligns perfectly with our vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Reading Pane */}
          <div className="flex-1 flex flex-col bg-[#0d0d0d] hidden sm:flex">
            {/* Action Bar */}
            <div className="h-14 border-b border-white/10 flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <button className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                  <Archive className="w-4 h-4" />
                </button>
                <button className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                  <Reply className="w-4 h-4" />
                  Reply
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                  <Forward className="w-4 h-4" />
                  Forward
                </button>
              </div>
            </div>

            {/* Email Content */}
            <div className="flex-1 overflow-y-auto p-8 lg:p-12">
              <div className="max-w-3xl mx-auto">
                <div className="mb-10">
                  <h1 className="text-2xl md:text-3xl font-serif font-light text-white mb-6">
                    A Message to the Market - 2026 Shift
                  </h1>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-aqua)]/10 border border-[var(--color-aqua)]/20 flex items-center justify-center text-[var(--color-aqua)] font-serif text-lg">
                        I
                      </div>
                      <div>
                        <div className="font-medium text-white/90">I Grow Studio</div>
                        <div className="text-sm text-white/50">hello@igrow.now</div>
                      </div>
                    </div>
                    <div className="text-sm text-white/40">
                      Today at 10:42 AM
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none" dir="ltr">
                  <div className="text-base md:text-lg text-white/80 font-light leading-relaxed space-y-6 tracking-wide">
                    <p>
                      We spent years in elite cinematic production. It was our lifeblood, but the era of traditional filmmaking is collapsing under the weight of exponential technology.
                    </p>
                    <p>
                      Today, our evolution into an absolute Growth Partner is not merely an upgrade; it is an algorithmic necessity to maintain market supremacy and dominate attention.
                    </p>
                    <p>
                      We weaponize Generative Cinema to construct hyper-realistic realities and scale at devastating speed. We do not replace the human mind; we augment it. We engineer outcomes. Our strategies are ruthless, our execution is flawless, and our loyalty to our partners' dominance is absolute. Conform to the new standard, or disappear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
