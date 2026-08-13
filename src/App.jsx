import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, lazy, Suspense } from 'react';
import ScrollProgress from './components/ScrollProgress';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load non-critical components for faster initial load
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Certifications = lazy(() => import('./components/Certifications'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const QuickDock = lazy(() => import('./components/QuickDock'));
const Footer = lazy(() => import('./components/Footer'));

// Minimal loading indicator
const Loader = () => (
  <div className="flex items-center justify-center py-16">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#E2E8F0] border-t-[#0A66C2]" />
  </div>
);

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
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Certifications />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Achievements />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Suspense fallback={null}>
        <QuickDock />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
