import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { navLinks, personalDetails } from '../data/portfolioData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId = 0;
    const updateNavigation = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        frameId = 0;
        setScrolled(window.scrollY > 20);
        for (const { href } of navLinks) {
          const id = href.slice(1);
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= 160 && section.getBoundingClientRect().bottom >= 160) {
            setActiveSection(id);
            break;
          }
        }
      });
    };
    updateNavigation();
    window.addEventListener('scroll', updateNavigation, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateNavigation);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-5 ${scrolled ? 'border-[#E2E8F0] bg-white shadow-2xl' : 'border-transparent bg-transparent'}`}>
        <a href="#home" className="group flex items-center gap-3" aria-label="Go to homepage">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-[#E2E8F0] shadow-md transition-transform duration-300 group-hover:scale-105">
            <img src="/profile.jpg" alt={personalDetails.name} className="h-full w-full object-cover object-top" />
          </div>
          <span className="hidden text-sm font-extrabold tracking-[-0.04em] text-[#0A0A0A] sm:block">{personalDetails.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const selected = activeSection === link.href.slice(1);
            return (
              <a key={link.name} href={link.href} className={`relative rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${selected ? 'text-[#0A0A0A]' : 'text-[#9CA3AF] hover:text-[#475569]'}`}>
                {link.name}
                {selected && <motion.span layoutId="nav-indicator" className="absolute inset-x-3 -bottom-0.5 h-px bg-[#0A0A0A]" transition={{ type: 'spring', stiffness: 350, damping: 32 }} />}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <a href="#contact" className="items-center gap-2 rounded-xl border-2 border-[#0A0A0A] bg-white px-3.5 py-2 text-xs font-bold text-black transition-transform hover:-translate-y-0.5 hover:bg-[#F5F6FA] sm:flex">
            Let's talk <FaArrowRight className="text-[10px] text-black" />
          </a>
        </div>
        <div className="flex items-center gap-2 sm:hidden">
          <button onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" className="grid h-9 w-9 place-items-center rounded-xl border border-[#E2E8F0] bg-white text-[#0A0A0A] md:hidden">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }} className="mx-auto mt-2 max-w-7xl rounded-2xl border border-[#E2E8F0] bg-white p-3 shadow-lg md:hidden">
            {navLinks.map((link) => <a key={link.name} href={link.href} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#475569] transition-colors hover:bg-[#EEF1F6] hover:text-[#0A0A0A]">{link.name}</a>)}
            <a href="#contact" onClick={closeMenu} className="mt-1 flex items-center justify-between rounded-xl border-2 border-[#0A0A0A] bg-white px-4 py-3 text-sm font-bold text-black">Let's work together <FaArrowRight className="text-black" /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
