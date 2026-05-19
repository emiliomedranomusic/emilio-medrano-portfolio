import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { PlayCircle, PauseCircle, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data';

export function SelectedProjects() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const togglePlay = (id: string, isVideo: boolean = false) => {
    if (playingId === id) {
      if (!isVideo) {
        audioRefs.current[id]?.pause();
      }
      setPlayingId(null);
    } else {
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId]?.pause();
      }
      if (!isVideo) {
        const audioNode = audioRefs.current[id];
        if (audioNode) {
          audioNode.play().catch(e => console.error("Audio play failed:", e));
        }
      }
      setPlayingId(id);
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute left-0 top-1/3 -translate-y-1/2 w-96 h-96 bg-accent-glow bg-glow rounded-full mix-blend-screen opacity-50" />
      <div className="container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">Selected Projects</h2>
          <p className="text-secondary text-lg max-w-2xl">
            A focused selection of original music, productions, arrangements, and live music work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const isPlaying = playingId === project.id;
            const isVideo = !!project.youtubeId;
            
            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col h-full bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors shadow-lg"
            >
              {/* Image with Play overlay */}
              <div className="aspect-video bg-surface-hover relative overflow-hidden group cursor-pointer" onClick={() => togglePlay(project.id, isVideo)}>
                 <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent z-10" />
                 
                 {isPlaying && isVideo ? (
                   <div className="absolute inset-0 z-30 bg-black">
                     <iframe 
                       width="100%" 
                       height="100%" 
                       src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`} 
                       title="YouTube video player" 
                       frameBorder="0" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen
                       className="absolute inset-0"
                     />
                   </div>
                 ) : (
                   <>
                     <div 
                       className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
                       style={{ backgroundImage: `url("${project.image}")` }}
                     />
                     <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-300">
                          {isPlaying && !isVideo ? (
                            <PauseCircle className="w-8 h-8 text-white" />
                          ) : (
                            <PlayCircle className="w-8 h-8 text-white ml-1" />
                          )}
                        </div>
                     </div>
                   </>
                 )}
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
                {!isVideo && (
                  <audio 
                    ref={el => audioRefs.current[project.id] = el}
                    src={project.audioSrc} 
                    onEnded={() => setPlayingId(null)}
                    className="hidden"
                  />
                )}
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-mono tracking-widest uppercase text-accent">
                    {project.type}
                  </div>
                  {isPlaying && (
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => togglePlay(project.id, isVideo)}>
                      {isVideo ? (
                        <span className="text-xs text-accent font-medium hover:text-white transition-colors">Close Video</span>
                      ) : (
                        <>
                          <span className="w-1 h-3 bg-accent animate-pulse rounded-full"></span>
                          <span className="w-1 h-4 bg-accent animate-pulse delay-75 rounded-full"></span>
                          <span className="w-1 h-2 bg-accent animate-pulse delay-150 rounded-full"></span>
                        </>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-display font-medium group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" title="External Link" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <div className="text-sm font-medium text-white/80 mb-4">
                  {project.role}
                </div>
                <p className="text-secondary text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-bg border border-white/10 rounded-full text-xs text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
