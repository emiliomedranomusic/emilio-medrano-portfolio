import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ListenByStyle } from './components/ListenByStyle';
import { GameCredits } from './components/GameCredits';
import { SelectedProjects } from './components/SelectedProjects';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen relative font-sans text-primary selection:bg-accent selection:text-bg">
      <Header />
      <main>
        <Hero />
        {/* <FeaturedReel /> Hidden per user request */}
        <ListenByStyle />
        <GameCredits />
        <SelectedProjects />
        <Services />
        <About />
        {/* <Testimonials /> Hidden per user request */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
