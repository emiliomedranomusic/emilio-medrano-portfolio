import { motion } from 'motion/react';
import { Play, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
      <div 
      className="absolute inset-0 bg-cover bg-[60%_center] opacity-95"
      style={{ backgroundImage: "url('/images/emilio_2.jpg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-bg/75 via-bg/35 to-bg/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-transparent to-transparent" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight mb-6 leading-[1.1]">
              Emilio Medrano
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl text-primary/80 font-display mb-6 max-w-2xl">
              Composer & Producer for Games, Film, Animation & Artists
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary max-w-2xl mb-12 leading-relaxed"
          >
            Miami-based Dominican composer, producer, arranger and pianist creating cinematic, emotional and game-inspired music for visual media, artists and live experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#listen"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
            >
              <Play className="w-5 h-5 fill-current" />
              Listen to Music
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors backdrop-blur-sm"
            >
              <Mail className="w-5 h-5" />
              Contact / Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-4 sm:gap-8 items-center text-sm font-medium text-secondary uppercase tracking-wider"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              1.5M+ Streams
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Indie Dominican Awards Nominee
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Miami-based Dominican
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Composer / Arranger / Producer / Pianist
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
