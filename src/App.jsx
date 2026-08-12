import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import QuickDock from './components/QuickDock';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.dataset.theme = 'light';
    document.documentElement.style.colorScheme = 'light';
  }, []);

  return (
    <div data-theme="light" className="theme-app relative min-h-screen overflow-x-clip antialiased">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1, ease: 'linear' }}
          className="relative z-10"
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Achievements />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <QuickDock />
      <Footer />
    </div>
  );
}
