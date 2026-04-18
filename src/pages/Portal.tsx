import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { auth, loginWithGoogle, logout, db } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Lock, LogOut, ArrowRight, CheckCircle2, ChevronRight, FileVideo } from 'lucide-react';

export default function Portal() {
  const [user, loading] = useAuthState(auth);
  const [projects, setProjects] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.email === 'nomair836@gmail.com') {
        window.location.href = '/#/admin';
        return;
      }
      fetchProjects();
    }
  }, [user]);

  const fetchProjects = async () => {
    if (!user?.email) return;
    setIsFetching(true);
    try {
      const q = query(collection(db, 'projects'), where('clientEmail', '==', user.email));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(docs);
    } catch (error) {
      console.error("Error fetching projects", error);
    } finally {
      setIsFetching(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-luxury-black)] pt-32 pb-20 px-6 flex items-center justify-center">
        <motion.div
           animate={{ opacity: [0.5, 1, 0.5] }}
           transition={{ duration: 1.5, repeat: Infinity }}
           className="text-white/50 font-mono tracking-widest text-sm"
        >
          AUTHENTICATING...
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-luxury-black)] relative overflow-hidden flex flex-col">
       {/* Background structural elements */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.05)_0%,transparent_50%)]" />
       
       <div className="flex-1 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10 flex flex-col">
         
         {!user ? (
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-md mx-auto w-full mt-20 p-8 glass border border-white/10 rounded-2xl flex flex-col items-center text-center"
           >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-[var(--color-aqua)]" />
              </div>
              <h1 className="text-3xl font-display tracking-tighter mb-4 text-white">Client Vault Access</h1>
              <p className="text-white/40 mb-10 text-sm">Strictly verified access only. Please authenticate using your official project email.</p>
              
              <button 
                onClick={loginWithGoogle}
                className="w-full py-4 bg-white text-black font-medium tracking-[0.2em] uppercase text-[10px] sm:text-xs hover:bg-[#E5E4E2] transition-colors flex items-center justify-center gap-3"
              >
                Authenticate with Google <ArrowRight className="w-4 h-4" />
              </button>
           </motion.div>
         ) : (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="w-full flex-1 flex flex-col"
           >
             <header className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6 border-b border-white/10 pb-8">
               <div>
                 <h1 className="text-3xl sm:text-5xl font-display font-light tracking-tighter text-white mb-2">Secure Vault</h1>
                 <p className="text-[var(--color-aqua)] font-mono text-[10px] uppercase tracking-[0.2em]">{user.email}</p>
               </div>
               <button 
                 onClick={logout}
                 className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest"
               >
                 <LogOut className="w-4 h-4" /> Terminate Session
               </button>
             </header>

             <div className="flex-1">
               {isFetching ? (
                 <div className="text-white/30 font-mono text-sm tracking-widest animate-pulse">Retrieving architecture...</div>
               ) : projects.length === 0 ? (
                 <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl">
                   <p className="text-white/40 font-light mb-2">No active projects linked to this clearance level.</p>
                   <p className="text-white/20 text-sm">Contact your lead architect if this is an error.</p>
                 </div>
               ) : (
                 <div className="grid gap-6">
                   {projects.map((project) => (
                     <motion.div 
                       key={project.id}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       className="bg-[#0a0a0a] border border-white/5 p-6 sm:p-8 rounded-2xl flex flex-col lg:flex-row gap-8 justify-between hover:border-[var(--color-aqua)]/30 transition-colors group"
                     >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-2 py-1 bg-[var(--color-aqua)]/10 text-[var(--color-aqua)] text-[9px] uppercase tracking-widest border border-[var(--color-aqua)]/20 rounded-md">ID: {project.id.slice(0,8).toUpperCase()}</span>
                            <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono">Status: {project.status}</span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-display tracking-tight text-white mb-4 group-hover:text-[var(--color-aqua-light)] transition-colors">{project.title}</h2>
                          
                          {/* Visual Progress Bar */}
                          <div className="w-full max-w-sm h-1bg-white/10 rounded-full mt-6 flex overflow-hidden h-1">
                             {['Architectural Intel', 'Generative Forge', 'Market Strike', 'Delivered'].map((step, idx) => {
                               const currentIndex = ['Architectural Intel', 'Generative Forge', 'Market Strike', 'Delivered'].indexOf(project.status) || 0;
                               return (
                                 <div 
                                    key={step} 
                                    className={`h-full flex-1 ${idx <= currentIndex ? 'bg-[var(--color-aqua)]' : 'bg-white/10'} ${idx < 3 ? 'border-r border-[#0a0a0a]' : ''}`} 
                                 />
                               )
                             })}
                          </div>
                        </div>

                        <div className="flex items-center lg:items-end justify-start lg:justify-end min-w-[200px]">
                           {project.status === 'Delivered' && project.telegramLink ? (
                             <a 
                               href={project.telegramLink} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="w-full lg:w-auto px-6 py-4 bg-[var(--color-aqua)] text-black font-medium tracking-[0.1em] uppercase text-xs hover:bg-white transition-colors flex items-center justify-center gap-3"
                             >
                               <FileVideo className="w-4 h-4" /> Download 4K Master
                             </a>
                           ) : (
                             <div className="px-6 py-4 border border-white/10 text-white/30 text-[10px] uppercase tracking-widest font-mono w-full lg:w-auto text-center flex items-center gap-2 justify-center">
                               <div className="w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
                               Processing
                             </div>
                           )}
                        </div>
                     </motion.div>
                   ))}
                 </div>
               )}
             </div>
           </motion.div>
         )}
       </div>
    </div>
  );
}
