import { useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

export default function App() {
  useEffect(() => {
    document.documentElement.dataset.theme = 'light';
    document.documentElement.style.colorScheme = 'light';
  }, []);

  return (
    <div data-theme="light" className="theme-app relative min-h-[100dvh] overflow-x-hidden antialiased bg-[#F2F2F5] text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />

      <main id="main-content" className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <BackToTop />
    </div>
  );
}
