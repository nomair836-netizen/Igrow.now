import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { auth, loginWithGoogle, logout, db } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, query, getDocs, addDoc, updateDoc, doc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { ShieldAlert, Plus, Save, Trash2, ArrowRight } from 'lucide-react';

export default function AdminDashboard() {
  const [user, loading] = useAuthState(auth);
  const [projects, setProjects] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  
  const [newProject, setNewProject] = useState({ clientEmail: '', title: '', status: 'Architectural Intel', telegramLink: '' });

  useEffect(() => {
    if (user && user.email === 'nomair836@gmail.com') {
      fetchProjects();
    }
  }, [user]);

  const fetchProjects = async () => {
    setIsFetching(true);
    try {
      const q = query(collection(db, 'projects'));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setProjects(docs);
    } catch (error) {
      console.error("Error fetching projects", error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.clientEmail || !newProject.title) return;
    
    try {
      await addDoc(collection(db, 'projects'), {
        ...newProject,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      setNewProject({ clientEmail: '', title: '', status: 'Architectural Intel', telegramLink: '' });
      fetchProjects();
    } catch (error) {
      console.error("Error creating project", error);
      alert("Failed to create project");
    }
  };

  const handleUpdateLink = async (id: string, newLink: string, currentStatus: string) => {
    try {
      await updateDoc(doc(db, 'projects', id), {
        telegramLink: newLink,
        status: newLink && currentStatus !== 'Delivered' ? 'Delivered' : currentStatus,
        updatedAt: serverTimestamp()
      });
      fetchProjects();
    } catch (error) {
      console.error("Error updating project", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this project permanently?")) return;
    try {
      await deleteDoc(doc(db, 'projects', id));
      fetchProjects();
    } catch (error) {
      console.error("Error deleting", error);
    }
  };

  if (loading) return <div className="min-h-screen bg-black" />;

  // Restrict access
  if (!user || user.email !== 'nomair836@gmail.com') {
    return (
      <div className="min-h-screen bg-black pt-32 px-6 flex flex-col items-center">
        <ShieldAlert className="w-16 h-16 text-red-500 mb-6" />
        <h1 className="text-white text-2xl font-mono">RESTRICTED AREA</h1>
        {user ? (
          <button onClick={logout} className="mt-8 text-white/50 border border-white/20 px-6 py-2">Logout</button>
        ) : (
          <button onClick={loginWithGoogle} className="mt-8 text-white/50 border border-white/20 px-6 py-2">Admin Login</button>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-mono">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="flex justify-between items-end border-b border-white/10 pb-6">
          <div>
            <h1 className="text-2xl text-[var(--color-aqua)] uppercase tracking-widest">Command Center</h1>
            <p className="text-white/40 text-sm mt-2">Admin Access: {user.email}</p>
          </div>
          <button onClick={logout} className="text-white/30 hover:text-white text-sm">Logout</button>
        </header>

        {/* Create Form */}
        <section className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="text-lg mb-6 uppercase tracking-widest">Provision New Client Vault</h2>
          <form onSubmit={handleCreateProject} className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              required
              placeholder="Client Email" 
              className="bg-black border border-white/20 p-3 text-sm focus:border-[var(--color-aqua)] outline-none flex-1"
              value={newProject.clientEmail}
              onChange={e => setNewProject({...newProject, clientEmail: e.target.value})}
            />
            <input 
              type="text" 
              required
              placeholder="Project Title (e.g. Campaign Alpha)" 
              className="bg-black border border-white/20 p-3 text-sm focus:border-[var(--color-aqua)] outline-none flex-1"
              value={newProject.title}
              onChange={e => setNewProject({...newProject, title: e.target.value})}
            />
            <select 
              className="bg-black border border-white/20 p-3 text-sm text-white/50 focus:border-[var(--color-aqua)] outline-none"
              value={newProject.status}
              onChange={e => setNewProject({...newProject, status: e.target.value})}
            >
              <option>Architectural Intel</option>
              <option>Generative Forge</option>
              <option>Market Strike</option>
              <option>Delivered</option>
            </select>
            <button type="submit" className="bg-[var(--color-aqua)] text-black px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" /> Provision
            </button>
          </form>
        </section>

        {/* List */}
        <section>
          <h2 className="text-lg mb-6 uppercase tracking-widest text-white/50">Active Vaults</h2>
          <div className="space-y-4">
            {isFetching ? <div className="text-white/30 animate-pulse">Scanning...</div> : projects.map(p => (
              <div key={p.id} className="bg-black border border-white/10 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group hover:border-white/30 transition-colors">
                <div className="flex-1">
                  <div className="text-xs text-[var(--color-aqua)] mb-1">ID: {p.id}</div>
                  <div className="text-xl mb-1">{p.title}</div>
                  <div className="text-white/40 text-sm">Client: {p.clientEmail} | Status: {p.status}</div>
                </div>
                
                <div className="flex-1 w-full relative">
                  <span className="text-[10px] uppercase text-white/30 absolute -top-5 left-0">Telegram Download Link</span>
                  <div className="flex items-center gap-2">
                    <input 
                      type="url"
                      placeholder="https://t.me/c/... (Direct File Link)"
                      className="bg-white/5 border border-white/20 p-2 text-xs w-full focus:border-[var(--color-aqua)] outline-none font-sans"
                      defaultValue={p.telegramLink || ''}
                      onBlur={(e) => {
                        if (e.target.value !== (p.telegramLink || '')) {
                           handleUpdateLink(p.id, e.target.value, p.status);
                        }
                      }}
                    />
                    <button className="text-white/30 hover:text-[var(--color-aqua)] p-2">
                      <Save className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                   <button onClick={() => handleDelete(p.id)} className="p-3 text-white/20 hover:text-red-500 transition-colors">
                     <Trash2 className="w-5 h-5" />
                   </button>
                </div>
              </div>
            ))}
            {!isFetching && projects.length === 0 && (
              <div className="text-white/20 border border-dashed border-white/10 p-10 text-center">No active projects found in database.</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
