import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCopy, FaHome, FaLaptopCode, FaUser } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function QuickDock() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }} className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2">
      <div className="glass-card flex items-center gap-1 rounded-2xl p-1.5 shadow-2xl shadow-black/35">
        <a href="#home" className="grid h-9 w-9 place-items-center rounded-xl text-zinc-400 transition-colors hover:bg-white/[0.07] hover:text-white" aria-label="Home"><FaHome className="text-xs" /></a>
        <a href="#about" className="grid h-9 w-9 place-items-center rounded-xl text-zinc-400 transition-colors hover:bg-white/[0.07] hover:text-white" aria-label="About"><FaUser className="text-xs" /></a>
        <a href="#projects" className="grid h-9 w-9 place-items-center rounded-xl text-zinc-400 transition-colors hover:bg-white/[0.07] hover:text-white" aria-label="Projects"><FaLaptopCode className="text-xs" /></a>
        <span className="mx-1 h-5 w-px bg-white/10" />
        <button onClick={copyEmail} className="flex h-9 items-center gap-2 rounded-xl bg-white px-3 text-[10px] font-extrabold text-black transition-transform hover:scale-[1.03]">{copied ? <FaCheck /> : <FaCopy />}<span className="hidden sm:inline">{copied ? 'Copied' : 'Copy email'}</span></button>
      </div>
    </motion.div>
  );
}
