import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { PlayCircle, PauseCircle } from 'lucide-react';
import { MUSIC_CATEGORIES } from '../data';

export function ListenByStyle() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const togglePlay = (id: string, audioSrc: string) => {
    if (playingId === id) {
      audioRefs.current[id]?.pause();
      setPlayingId(null);
    } else {
      // Pause currently playing if any
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId]?.pause();
      }
      
      const audioNode = audioRefs.current[id];
      if (audioNode) {
        audioNode.play().catch(e => console.error("Audio play failed:", e));
        setPlayingId(id);
      }
    }
  };

  return (
    <section id="listen" className="py-24 bg-surface border-y border-white/5 bg-grid relative">
       <div className="absolute inset-0 bg-gradient-to-b from-bg/90 to-surface/90 z-0" />
      <div className="container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">Listen by Style</h2>
          <p className="text-secondary text-lg max-w-2xl">
            Music organized by mood, function, and storytelling purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MUSIC_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            const isPlaying = playingId === category.id;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bg rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 group flex flex-col h-full shadow-lg"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors ${isPlaying ? 'bg-accent text-bg shadow-[0_0_20px_rgba(245,158,11,0.4)]' : 'bg-surface-hover text-accent'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-display font-medium mb-3 group-hover:text-amber-500 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-secondary text-sm mb-4 flex-grow">
                  {category.description}
                </p>
                
                <div className="text-xs text-secondary/60 uppercase tracking-wide font-medium mb-6">
                  Uses: {category.useCases}
                </div>

                <div className="mt-auto">
                  <div className="flex flex-col gap-3 border-t border-white/5 pt-4">
                     <audio 
                       ref={el => audioRefs.current[category.id] = el}
                       src={category.audioSrc} 
                       onEnded={() => setPlayingId(null)}
                       className="hidden"
                     />
                     <div className="flex items-center justify-between">
                       <span className="text-xs font-mono text-secondary">
                         {isPlaying ? 'Playing...' : 'Audio Track'}
                       </span>
                       <button 
                         onClick={() => togglePlay(category.id, category.audioSrc!)}
                         className={`flex items-center gap-2 text-sm font-medium transition-colors ${isPlaying ? 'text-accent' : 'hover:text-accent'}`}
                       >
                         {isPlaying ? <PauseCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
                         {isPlaying ? 'Pause' : 'Listen'}
                       </button>
                     </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
