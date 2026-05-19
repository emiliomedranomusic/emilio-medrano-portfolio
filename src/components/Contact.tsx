import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.239.54-.959.72-1.559.3z" />
  </svg>
);

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    
    // Simulate a network request (e.g., sending an email)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset(); // Reset form fields
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-accent/5 bg-glow rounded-full mix-blend-screen" />

      <div className="container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-6 leading-tight">
              Need original music for your project?
            </h2>
            <p className="text-xl text-secondary mb-12 max-w-lg">
              Available for film, games, animation, artist production, arrangements, live music direction, jingles, and creative collaborations.
            </p>

            <div className="space-y-6">
              <a href="mailto:emiliomedranomusic@gmail.com" className="flex items-center gap-4 text-lg hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-surface border border-white/5 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <Mail className="w-5 h-5 text-secondary group-hover:text-accent font-medium leading-none" />
                </div>
                emiliomedranomusic@gmail.com
              </a>
              <a href="https://instagram.com/emiliomedranomusic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-surface border border-white/5 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <Instagram className="w-5 h-5 text-secondary group-hover:text-accent font-medium leading-none" />
                </div>
                @emiliomedrano.music
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-surface p-8 rounded-3xl border border-white/5"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium text-secondary">Project Type</label>
                <select 
                  id="projectType" 
                  defaultValue=""
                  className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="film">Film</option>
                  <option value="game">Game</option>
                  <option value="animation">Animation</option>
                  <option value="artist">Artist Production</option>
                  <option value="arrangement">Arrangement</option>
                  <option value="live">Live Performance</option>
                  <option value="jingle">Jingle / Ad</option>
                  <option value="sync">Sync / Licensing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-secondary flex items-center justify-between">
                  Budget / Timeline
                  <span className="text-xs text-secondary/50">Optional</span>
                </label>
                <input 
                  type="text" 
                  id="budget" 
                  className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="Rough estimate or schedule"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 rounded-xl font-medium transition-colors mt-4 text-lg ${
                  isSuccess 
                    ? 'bg-emerald-500 text-white' 
                    : isSubmitting 
                      ? 'bg-white/50 text-black cursor-not-allowed'
                      : 'bg-white text-black hover:bg-white/90'
                }`}
              >
                {isSubmitting ? 'Sending...' : isSuccess ? 'Project sent!' : 'Start a Project'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
