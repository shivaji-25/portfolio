import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaTools } from 'react-icons/fa';
import { skillCategories } from '../data/portfolioData';

const icons = { FaServer: FaServer, FaDatabase: FaDatabase, FaCode: FaCode, FaTools: FaTools };
const categoryColors = {
  0: { bg: 'bg-[#0A66C2]', border: 'border-[#0A66C2]/40', shadow: 'shadow-[0_10px_30px_rgba(10,102,194,.18)]', accent: 'from-[#0A66C2] to-[#0A66C2]', bar: 'bg-[#0A66C2]/70' }, // Blue
  1: { bg: 'bg-[#22c55e]', border: 'border-[#22c55e]/40', shadow: 'shadow-[0_10px_30px_rgba(34,197,94,.18)]', accent: 'from-[#22c55e] to-[#22c55e]', bar: 'bg-[#22c55e]/70' }, // Green
  2: { bg: 'bg-[#f59e0b]', border: 'border-[#f59e0b]/40', shadow: 'shadow-[0_10px_30px_rgba(245,158,11,.18)]', accent: 'from-[#f59e0b] to-[#f59e0b]', bar: 'bg-[#f59e0b]/70' }, // Orange
  3: { bg: 'bg-[#8b5cf6]', border: 'border-[#8b5cf6]/40', shadow: 'shadow-[0_10px_30px_rgba(139,92,246,.18)]', accent: 'from-[#8b5cf6] to-[#8b5cf6]', bar: 'bg-[#8b5cf6]/70' }, // Purple
};

export default function Skills() {
  const [active, setActive] = useState(0);
  const selected = skillCategories[active];
  return (
    <section id="skills" className="relative border-y border-[#E2E8F0] bg-[#EEF1F6] px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.1 }}>
          <p className="section-kicker">02 / Toolkit</p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="section-heading max-w-xl">The tools behind the work.</h2><p className="max-w-sm text-sm leading-6 text-[#475569]">A focused stack for making backend services robust, thoughtful and easy to evolve.</p></div>
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
            {skillCategories.map((category, index) => { const Icon = icons[category.icon]; const colors = categoryColors[index]; return <button key={category.category} onClick={() => setActive(index)} className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-3 text-xs font-bold transition-all ${active === index ? `${colors.border} ${colors.bg} text-white ${colors.shadow}` : 'border-[#E2E8F0] bg-white text-[#475569] hover:border-[#0A66C2]/30 hover:text-[#0A0A0A]'}`}><Icon className="text-sm" /> {category.category}</button>; })}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={selected.category} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.1 }} className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {selected.skills.map((skill, index) => { const colors = categoryColors[active]; return <motion.div key={skill.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.055 }} whileHover={{ y: -4 }} className="bg-white border border-[#E2E8F0] group relative overflow-hidden rounded-2xl p-5 shadow-sm"><span className={`absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r ${colors.accent} transition-transform duration-300 group-hover:scale-x-100`} /><p className="font-bold tracking-[-.035em] text-[#0A0A0A]">{skill.name}</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[.11em] text-[#9CA3AF]">{skill.level}</p><span className={`mt-7 block h-1 w-8 rounded-full ${colors.bar}`} /></motion.div>; })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
