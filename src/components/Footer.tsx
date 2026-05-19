import { Youtube, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

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

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-bg">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-display font-medium mb-2">Emilio Medrano</h2>
            <p className="text-secondary text-sm">Composer & Producer for Games, Film, Animation & Artists</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://www.youtube.com/@EmilioMedranoMusic" className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-secondary hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://open.spotify.com/artist/1IYdYM7dcNkohufNrN8BWL" className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-secondary hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" aria-label="Spotify">
              <SpotifyIcon />
            </a>
            <a href="https://www.tiktok.com/@emiliomedranomusic" className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-secondary hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" aria-label="TikTok">
              <TikTokIcon />
            </a>
            <a href="https://www.instagram.com/emiliomedrano.music/" className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-secondary hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://x.com/EmilioMedranoRD" className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-secondary hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" aria-label="Twitter / X">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/emilio-medrano-b8b3971ba/" className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-secondary hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:emiliomedranomusic@gmail.com" className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-secondary hover:text-white hover:bg-white/5 hover:border-white/20 transition-all" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-secondary pt-8 border-t border-white/5">
          <p>© 2026 Emilio Medrano. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
