import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export function FeaturedReel() {
  return (
    <section className="py-24 relative overflow-hidden" id="reel">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">Visual Media Reel</h2>
          <p className="text-secondary text-lg max-w-2xl">
            A 60–90 second reel featuring cinematic, game, action, suspense, piano and Latin-inspired cues.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video bg-surface rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
        >
          {/* Placeholder Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/80 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-500 group-hover:opacity-60"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2940&auto=format&fit=crop")' }}
          />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-110 mb-6">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-2" />
            </div>
            <span className="text-white font-medium uppercase tracking-widest text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              Watch Reel
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
