import { motion } from 'motion/react';
import { GAME_CREDITS } from '../data';
import { useState, useRef, MouseEvent } from 'react';
import { PlayCircle, PauseCircle, ExternalLink } from 'lucide-react';

export function GameCredits() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const togglePlay = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (playingId === id) {
      audioRefs.current[id]?.pause();
      setPlayingId(null);
    } else {
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId]?.pause();
      }
      const audioNode = audioRefs.current[id];
      if (audioNode) {
        audioNode.play().catch(err => console.error("Audio play failed:", err));
        setPlayingId(id);
      }
    }
  };

  const handleCardClick = (link: string, e: MouseEvent) => {
    e.preventDefault();
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="game-credits" className="py-24 bg-bg border-y border-white/5 relative">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">Game Music & Interactive Audio</h2>
          <p className="text-secondary text-lg max-w-2xl">
            Original music and sound design for indie games, game jams, demos, and mobile projects, ranging from 8-bit fantasy to retro arcade, dungeon RPGs, and atmospheric game loops.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAME_CREDITS.map((game, index) => (
             <motion.div
               key={game.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group relative flex flex-col h-[400px] md:h-[450px] bg-[#0a0a0f] border border-white/5 rounded-2xl overflow-hidden hover:border-accent/40 transition-colors shadow-lg cursor-pointer"
               onClick={(e) => handleCardClick(game.link, e)}
             >
                {/* Audio Element */}
                {game.audioSrc && (
                  <audio 
                    ref={el => audioRefs.current[game.id] = el}
                    src={game.audioSrc} 
                    onEnded={() => setPlayingId(null)}
                    className="hidden"
                  />
                )}

                {/* Image */}
                <div 
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-[1.03] opacity-80 group-hover:opacity-100"
                  style={{ backgroundImage: `url("${game.image}")` }}
                />
                
                {/* Default overlay for readability of title below */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/60 to-transparent opacity-90 group-hover:opacity-0 transition-opacity duration-300" />
                
                {/* Hover overlay that shows details */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 bg-black/90 backdrop-blur-md">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 flex flex-col h-full justify-end">
                    <div className="flex-grow"></div>
                    <div className="text-xs font-mono tracking-widest uppercase text-accent mb-2">
                       {game.role}
                    </div>
                    <h3 className="text-2xl font-display font-medium mb-1 flex items-center gap-2 group-hover:text-accent transition-colors">
                      {game.title}
                      <ExternalLink className="w-5 h-5 text-white/50" />
                    </h3>
                    <div className="text-sm text-white/70 mb-3 font-medium">
                      {game.type} • {game.context}
                    </div>
                    <p className="text-secondary text-sm mb-4 leading-relaxed line-clamp-3">
                      {game.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-medium text-white/60 bg-white/5 inline-block px-3 py-1.5 rounded-full border border-white/10">
                        Scope: {game.scope}
                      </div>
                      
                      {game.audioSrc && (
                        <button 
                          onClick={(e) => togglePlay(game.id, e)}
                          className="w-12 h-12 rounded-full bg-accent/20 hover:bg-accent/40 backdrop-blur-md text-accent flex items-center justify-center border border-accent/20 shadow-lg transition-colors flex-shrink-0 ml-4"
                        >
                          {playingId === game.id ? <PauseCircle className="w-8 h-8" /> : <PlayCircle className="w-8 h-8 ml-1" />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Default visible title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 group-hover:opacity-0 transition-opacity duration-300 z-10 flex items-end justify-between">
                   <div>
                     <div className="text-xs font-mono tracking-widest uppercase text-accent mb-2 drop-shadow-md">
                        {game.type}
                     </div>
                     <h3 className="text-2xl font-display font-medium text-white drop-shadow-lg">
                        {game.title}
                     </h3>
                   </div>
                   {game.audioSrc && (
                     <button 
                       onClick={(e) => togglePlay(game.id, e)}
                       className="w-12 h-12 rounded-full bg-accent/10 backdrop-blur-sm text-white hover:text-accent hover:bg-accent/20 flex items-center justify-center border border-white/10 shadow-lg transition-colors flex-shrink-0"
                     >
                       {playingId === game.id ? <PauseCircle className="w-6 h-6" /> : <PlayCircle className="w-6 h-6 ml-1" />}
                     </button>
                   )}
                </div>

                {playingId === game.id && (
                  <div className="absolute top-4 right-4 z-20 pointer-events-none flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <span className="w-1 h-3 bg-accent animate-pulse rounded-full"></span>
                    <span className="w-1 h-4 bg-accent animate-pulse delay-75 rounded-full"></span>
                    <span className="w-1 h-2 bg-accent animate-pulse delay-150 rounded-full"></span>
                  </div>
                )}
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
