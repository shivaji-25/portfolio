import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 120) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-20% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Lock body scroll when hamburger menu is open
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [open]);

  const navItems = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const mobileNavItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    ...navItems,
  ];

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setOpen(false);

    if (id === 'home' || id === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4 px-4 sm:px-8 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left Pill Badge */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home', 'home')}
          className={`inline-flex items-center gap-2 rounded-full border border-black/[0.08] px-4 sm:px-5 py-2.5 text-xs font-bold tracking-wider text-neutral-900 backdrop-blur-md hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98] max-w-[calc(100vw-88px)] sm:max-w-none min-h-[44px] ${
            scrolled ? 'bg-white/95 shadow-md' : 'bg-white/90 shadow-sm'
          }`}
        >
          <span className="shrink-0">{personalDetails.name}</span>
          <span className="text-neutral-400 font-normal hidden sm:inline">/</span>
          <span className="text-neutral-500 uppercase tracking-widest text-[11px] hidden sm:inline">Java Backend Engineer</span>
        </a>

        {/* Right Pill Navigation Buttons (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className={`nav-pill rounded-full px-4 lg:px-5 py-2.5 text-xs font-bold tracking-widest backdrop-blur-md border min-h-[44px] inline-flex items-center ${
                  isActive
                    ? 'nav-pill-active bg-neutral-900 text-white border-neutral-900'
                    : 'bg-white/95 text-neutral-800 border-black/[0.08] hover:bg-neutral-900 hover:text-white hover:border-neutral-900'
                } ${scrolled ? 'shadow-md' : 'shadow-sm'} hover:scale-[1.02] active:scale-[0.98]`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle (44px touch target) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation"
            className={`w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-neutral-800 active:scale-95 transition-all ${
              scrolled ? 'shadow-md' : 'shadow-sm'
            }`}
          >
            {open ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with inertia touch scrolling */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="touch-scroll md:hidden mt-3 max-w-sm mx-auto rounded-2xl bg-white border border-black/[0.08] p-3 shadow-xl pointer-events-auto overscroll-contain overflow-y-auto max-h-[calc(100dvh-96px)]"
          >
            <div className="flex flex-col gap-1">
              {mobileNavItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={`px-4 py-3 min-h-[44px] flex items-center rounded-xl text-xs font-bold tracking-wider transition-colors ${
                      isActive
                        ? 'bg-neutral-900 text-white'
                        : 'text-neutral-800 hover:bg-neutral-100 active:bg-neutral-200'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
