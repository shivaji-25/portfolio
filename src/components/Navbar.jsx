import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['projects', 'about', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      let found = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            found = id;
            break;
          }
        }
      }
      if (found) {
        setActiveSection(found);
      } else if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'PROFILE', href: '#about', id: 'about' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 px-4 sm:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left Pill Badge */}
        <a
          href="#home"
          onClick={() => handleNavClick('')}
          className="inline-flex items-center gap-2 rounded-full bg-white/95 border border-black/[0.08] px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold tracking-wider text-neutral-900 shadow-sm backdrop-blur-md hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98] max-w-[calc(100vw-80px)] sm:max-w-none truncate"
        >
          <span className="shrink-0">{personalDetails.name}</span>
          <span className="text-neutral-400 font-normal hidden sm:inline">/</span>
          <span className="text-neutral-500 uppercase tracking-widest text-[11px] hidden sm:inline">Java Backend Engineer</span>
        </a>

        {/* Right Pill Navigation Buttons (Desktop) */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`nav-pill rounded-full px-5 py-2.5 text-xs font-bold tracking-widest shadow-sm backdrop-blur-md border ${
                  isActive
                    ? 'nav-pill-active bg-neutral-900 text-white border-neutral-900'
                    : 'bg-white/95 text-neutral-800 border-black/[0.08] hover:bg-neutral-900 hover:text-white hover:border-neutral-900'
                } hover:scale-[1.02] active:scale-[0.98]`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation"
            className="w-10 h-10 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-neutral-800 shadow-sm active:scale-95 transition-transform"
          >
            {open ? <FaTimes className="text-sm" /> : <FaBars className="text-sm" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-sm mx-auto rounded-2xl bg-white border border-black/[0.08] p-3 shadow-xl pointer-events-auto"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-colors ${
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
