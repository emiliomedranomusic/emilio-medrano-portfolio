import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Bio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-primary selection:bg-accent selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container max-w-4xl mx-auto px-6 lg:px-12">
          
          <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-medium mb-8">
              Emilio Medrano
            </h1>
            
            <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden mb-12 relative shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/emilio_3.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-p:text-secondary prose-a:text-accent hover:prose-a:text-amber-500 prose-headings:font-display">
              <p className="text-xl text-primary font-medium leading-relaxed mb-8">
                Emilio Alejandro Medrano Cruz is a Dominican composer, producer, arranger, pianist, and software engineer based in Miami. Born in Jarabacoa, Dominican Republic, Emilio began studying piano at age 10, inspired by instrumental storytellers such as Richard Clayderman, Raúl Di Blasio, Yanni, Koji Kondo, Alan Menken, and Yasunori Mitsuda.
              </p>

              <p className="mb-8">
                His work blends cinematic storytelling, emotional piano writing, Latin roots, game-inspired composition, live music direction, and creative technology. As both a musician and software engineer, Emilio brings a unique perspective to projects that live between music, storytelling, interactive media, artificial intelligence, and software.
              </p>
            
              <p className="mb-8">
                As a recording artist and composer, Emilio has released several original instrumental projects. In 2020, he released his piano EP "Mistakes," a collection of improvised piano pieces recorded in a single take. The project led to a 2021 Indie Dominican Awards nomination for "Cuestión de Tiempo" in the Best Classical Music Song category. He later released "Inspiration," "Clarity," the lo-fi project "Mr. Keys," and "Little Miracle." His emotional piano single "Feelings" has reached over 1.5 million streams on Amazon Music.
              </p>
            
              <p className="mb-8">
                Emilio has also composed music and designed sound effects for indie games, demos, and game jam projects, including Velhotorni, AstroClimb, Dungeonmania, Quota, and Green’s Dungeon. His game music work ranges from 8-bit fantasy and retro arcade styles to dungeon RPG atmospheres and interactive sound design.
              </p>

              <p className="mb-8">
                On stage, Emilio has built a strong presence as a pianist, arranger, and musical director. In 2023, he performed with Caribelia as part of the opening act for Arcángel at Quisqueya Stadium after the band won the first stage of the Presidente Studios contest. After moving to Miami, he has collaborated with emerging artists, Latin Grammy nominees, jazz musicians, and performers from The Voice, including appearances with the Miami Music Project orchestra at the Miami Beach Bandshell.
              </p>

              <p className="mb-8">
                His live and festival experience includes serving as pianist and musical director for Dominican reggae artist Mechy at Calle 8 Festival in 2024 and Bajo la Luna Fest in 2025, where the band opened for Cultura Profética, Los Cafres, and Akapellah.
              </p>

              <p className="mb-8">
                Beyond performance and composition, Emilio has contributed to large-scale music event production. In 2024, he served as Stage Manager Assistant at Los Producers, supporting an event featuring artists such as Juanes, Leonel García, Fonseca, Luis Fonsi, Mon Laferte, Cimafunk, and Danny Ocean. In 2025, he worked as Lead Vendor and Sponsor Coordinator for UNSIN Festival, coordinating vendor and sponsor operations for an event featuring artists including Leo Rizzi, Robi, Darumas, Baltazar Lora, Puerto Candelaria, Kat Dahlia, and Alex Luna.
              </p>

              <p className="mb-8">
                Today, Emilio focuses on creating original music for games, film, animation, artists, live performance, and technology-driven creative projects. His work is rooted in emotion, narrative function, versatility, and the belief that music can deepen the stories that visuals, games, and live experiences are trying to tell.
              </p>

              {/* 
              <div className="mt-12 p-8 bg-surface border border-white/5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-display font-medium text-white m-0 mb-2">Need a formal bio?</h3>
                  <p className="text-secondary text-sm m-0">Download the full press kit including high-res photos and standard bios.</p>
                </div>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors whitespace-nowrap">
                  <Download className="w-5 h-5" />
                  Download Press Kit
                </button>
              </div>
              */}

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


