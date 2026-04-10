import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { Sparkles, Instagram, Twitter, Linkedin, Github, Mail, X, Menu } from 'lucide-react';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import TheCollection from './pages/TheCollection';
import MessageToTheWorld from './pages/MessageToTheWorld';
import InvisibleWrap from './pages/InvisibleWrap';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Small timeout to ensure the page has rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function AppContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [logoClicks, setLogoClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setIsNavVisible(false);
    } else if (latest < previous) {
      setIsNavVisible(true);
    }
  });

  const rotateX = useTransform(scrollY, [0, 300], [0, 25]);
  const rotateY = useTransform(scrollY, [0, 300], [0, -10]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    // Preloader Logic
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 800);
      }
      setLoadingProgress(progress);
    }, 100);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLogoClick = () => {
    const newClicks = logoClicks + 1;
    setLogoClicks(newClicks);
    if (newClicks === 3) {
      setShowEasterEgg(true);
      setTimeout(() => {
        setShowEasterEgg(false);
        setLogoClicks(0);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-luxury-black)] text-white overflow-hidden selection:bg-[var(--color-aqua)]/30 selection:text-[var(--color-aqua-light)] font-sans">
      <ScrollToTop />
      
      {/* Film Grain Overlay */}
      <div className="bg-noise" />

      {/* Cinematic Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ y: '-100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center"
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-8xl md:text-[12rem] font-display font-bold tracking-tighter text-white/10"
              >
                {loadingProgress}%
              </motion.div>
            </div>
            <div className="absolute bottom-12 w-full max-w-sm px-6">
              <div className="h-[1px] bg-white/10 w-full overflow-hidden">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: '0%' }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inverted Magnetic Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16 
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 150, 
          damping: 15, 
          mass: 0.1 
        }}
      />

      {/* Mouse Glow Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 229, 255, 0.025), transparent 40%)`
        }}
      />

      {/* Easter Egg Toast */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 glass border-[var(--color-aqua)]/20 px-6 py-4 rounded-2xl shadow-[0_0_40px_rgba(0,229,255,0.1)] flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--color-aqua)]/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[var(--color-aqua)]" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">You found the secret!</p>
              <p className="text-xs text-[var(--color-aqua-light)] mt-0.5">15% OFF: "Just tell us we have got the key!"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isNavVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 w-full z-40 glass border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6">
            <Link to="/">
              <motion.div style={{ perspective: 1000 }}>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-xl sm:text-2xl font-display font-bold tracking-tighter cursor-pointer transition-all duration-500 ${isScrolled ? 'text-gradient-silver' : 'text-gradient-aqua'}`}
                  onClick={handleLogoClick}
                >
                  I Grow.
                </motion.div>
              </motion.div>
            </Link>
            
            <Link to="/message" className="block">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-aqua)] to-[#00ffcc] rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <span className="relative text-[9px] sm:text-xs uppercase tracking-widest font-medium text-white group-hover:text-black transition-colors duration-300 border border-white/20 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/80 group-hover:bg-[var(--color-aqua)] backdrop-blur-sm flex items-center gap-1.5 sm:gap-2">
                  <Sparkles className="w-3 h-3 shrink-0" />
                  <span className="hidden sm:inline">A Message to the World</span>
                  <span className="sm:hidden">Message</span>
                </span>
              </motion.div>
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-white/60"
          >
            <Link to="/#vision" className="hover:text-[var(--color-aqua-light)] transition-colors duration-300">Vision</Link>
            <Link to="/#story" className="hover:text-[var(--color-aqua-light)] transition-colors duration-300">Story</Link>
            <Link to="/collection" className="hover:text-[var(--color-aqua-light)] transition-colors duration-300">The Collection</Link>
            <Link to="/faq" className="hover:text-[var(--color-aqua-light)] transition-colors duration-300">FAQ</Link>
            <a href="#contact" className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-[var(--color-aqua)] hover:text-black border border-white/10 hover:border-transparent transition-all duration-500">
              Contact Us
            </a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center border-b border-white/10 md:hidden"
          >
            <button 
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8 text-xl font-light tracking-wide">
              <Link to="/#vision" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-aqua)] transition-colors">Vision</Link>
              <Link to="/#story" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-aqua)] transition-colors">Story</Link>
              <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-aqua)] transition-colors">The Collection</Link>
              <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[var(--color-aqua)] transition-colors">FAQ</Link>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-8 py-3 rounded-full bg-white/5 hover:bg-[var(--color-aqua)] hover:text-black border border-white/10 hover:border-transparent transition-all duration-500">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/collection" element={<TheCollection />} />
        <Route path="/message" element={<MessageToTheWorld />} />
        <Route path="/invisible-wrap" element={<InvisibleWrap />} />
      </Routes>

      {/* Footer & Contact Section */}
      <footer id="contact" className="py-32 border-t border-white/5 relative overflow-hidden bg-[var(--color-luxury-gray)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,229,255,0.03)_0%,transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tighter mb-6">
              Initiate Project
            </h2>
            <p className="text-white/50 font-light text-lg">
              Tell us about your vision. We strictly vet all projects to ensure alignment with our luxury standards.
            </p>
          </div>

          {/* CRO Contact Form */}
          <form className="space-y-8 mb-24" action="https://formsubmit.co/contact@igrow.now" method="POST">
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Project Initiation Request - I Grow" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://igrow.now/" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid md:grid-cols-2 gap-8">
              <input type="text" name="Name" placeholder="Name" required className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-light focus:outline-none focus:border-white transition-colors duration-500 placeholder:text-white/30" />
              <input type="text" name="Brand Name" placeholder="Brand Name" required className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-light focus:outline-none focus:border-white transition-colors duration-500 placeholder:text-white/30" />
            </div>
            <input type="url" name="Website" placeholder="Website URL" required className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-light focus:outline-none focus:border-white transition-colors duration-500 placeholder:text-white/30" />
            <textarea name="Vision" placeholder="Tell us about your vision." required rows={4} className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-light focus:outline-none focus:border-white transition-colors duration-500 placeholder:text-white/30 resize-none"></textarea>
            
            <div className="text-center pt-8">
              <button type="submit" className="px-12 py-5 bg-white text-black font-medium tracking-[0.2em] uppercase text-sm hover:bg-[#E5E4E2] transition-colors duration-700 w-full md:w-auto">
                Initiate Project
              </button>
            </div>
          </form>
          
          {/* Trust Signals & Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10 text-sm font-light text-white/50">
            <div className="flex items-center gap-8">
              <span>&copy; 2026 I Grow.</span>
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors duration-300">Privacy Policy</button>
            </div>
            <div className="flex items-center gap-8">
              <a href="mailto:contact@igrow.now" className="hover:text-white transition-colors duration-300">contact@igrow.now</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsPrivacyOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
            >
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-3xl font-serif mb-6 text-white">Privacy Policy</h3>
              <div className="space-y-6 text-white/60 font-light leading-relaxed text-sm md:text-base">
                <p><strong>Effective Date:</strong> March 31, 2026</p>
                <p>At I Grow, we take your privacy and the confidentiality of your brand extremely seriously. This Privacy Policy outlines how we collect, use, and protect your information, ensuring full compliance with GDPR and UK data protection laws.</p>
                <h4 className="text-white text-lg font-medium mt-8 mb-4">1. Information We Collect</h4>
                <p>We only collect information necessary to evaluate and execute your project, including your name, brand name, website URL, and project vision submitted via our contact form.</p>
                <h4 className="text-white text-lg font-medium mt-8 mb-4">2. 100% Discretion Guarantee</h4>
                <p>We operate as a white label, silent partner. We will never disclose our partnership, your use of AI, or share your project assets without explicit written consent. Your brand's prestige and exclusivity are our top priorities.</p>
                <h4 className="text-white text-lg font-medium mt-8 mb-4">3. Analytics & Tracking</h4>
                <p>We use industry standard analytics tools (such as Google Analytics and Hotjar) to understand how visitors interact with our website. This data is anonymized and used strictly to improve our user experience.</p>
                <h4 className="text-white text-lg font-medium mt-8 mb-4">4. Contact Us</h4>
                <p>For any privacy related inquiries or to request the deletion of your data, please contact our Data Protection Officer at <a href="mailto:contact@igrow.now" className="text-white underline">contact@igrow.now</a>.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
