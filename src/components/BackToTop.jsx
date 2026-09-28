import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-neutral-900 text-white shadow-lg hover:bg-black active:scale-95 transition-all flex items-center justify-center border border-white/20 focus-visible:outline-2 focus-visible:outline-neutral-900 cursor-pointer"
        >
          <FaArrowUp className="text-xs" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
