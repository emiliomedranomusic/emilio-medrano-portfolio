import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-[2rem] bg-surface overflow-hidden border border-white/5 relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10" />
               {/* This would be the real image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-70 hover:opacity-100 transition-all duration-700"
                style={{ backgroundImage: "url('/images/OZ_09540.jpg')" }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-8">About Emilio</h2>
            
            <div className="space-y-6 text-lg text-secondary leading-relaxed mb-10">
              <p>
                Emilio Medrano is a Dominican composer, producer, arranger, and pianist based in Miami. His music blends cinematic storytelling, Latin roots, game-inspired composition, and emotional piano-driven writing. His work spans original instrumental releases, artist collaborations, live music direction, arrangements, and production.
              </p>
              <p>
                As both a musician and software engineer, Emilio is especially interested in the intersection of music, storytelling, games, artificial intelligence, and creative technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center p-6 bg-surface rounded-2xl border border-accent/10 mb-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full" />
              <div className="flex-1 relative z-10">
                <p className="text-white font-medium mb-1">Recognized Work</p>
                <p className="text-secondary text-sm"> •1.5M+ streams on Amazon Music for the piano single “Feelings.”</p>
                <p className="text-secondary text-sm"> •Indie Dominican Awards nominee for “Cuestión de Tiempo.”.</p>
                <p className="text-secondary text-sm"> •Pianist and musical director for live performances in Miami and the Dominican Republic, including Calle 8 Festival and Bajo la Luna Fest.•</p>
                <p className="text-secondary text-sm"> •Experience supporting large-scale music events including Los Producers and UNSIN Festival.”.</p>              
              </div>
            </div>

            <Link to="/bio" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium transition-colors hover:bg-white/90">
              Read Full Bio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
