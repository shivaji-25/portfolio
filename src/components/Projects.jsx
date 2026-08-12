import { LayoutGroup, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filters = useMemo(() => ['All', ...new Set(projects.map((project) => project.category.split(' & ')[0]))], []);
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category.startsWith(filter));
  
  const filterColors = {
    'All': { bg: 'bg-[#0A66C2]', text: 'text-white', hover: 'rgba(10,102,194,.15)', accent: 'border-[#0A66C2]' },
    'Backend': { bg: 'bg-[#22c55e]', text: 'text-white', hover: 'rgba(34,197,94,.15)', accent: 'border-[#22c55e]' },
    'Full-Stack': { bg: 'bg-[#f59e0b]', text: 'text-white', hover: 'rgba(245,158,11,.15)', accent: 'border-[#f59e0b]' },
    'Frontend': { bg: 'bg-[#8b5cf6]', text: 'text-white', hover: 'rgba(139,92,246,.15)', accent: 'border-[#8b5cf6]' },
    'AI': { bg: 'bg-[#ec4899]', text: 'text-white', hover: 'rgba(236,72,153,.15)', accent: 'border-[#ec4899]' },
  };
  
  return (
    <section id="projects" className="relative px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.1 }}>
          <p className="section-kicker">03 / Selected work</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><h2 className="section-heading max-w-2xl">Things I’ve made work <span className="text-zinc-500">harder.</span></h2><p className="max-w-sm text-sm leading-6 text-zinc-500">A selection of systems where the real craft lives in the architecture underneath the interface.</p></div>
          <LayoutGroup><div className="mt-9 flex flex-wrap gap-2">
            {filters.map((item) => { const colors = filterColors[item] || filterColors['All']; return <button key={item} onClick={() => setFilter(item)} className={`relative rounded-full px-3.5 py-2 font-mono text-[10px] uppercase tracking-[.11em] transition-colors ${filter === item ? colors.text : 'border border-[#E2E8F0] bg-white text-[#9CA3AF] hover:text-[#475569]'}`}>{filter === item && <motion.span layoutId="project-filter" className={`absolute inset-0 -z-10 rounded-full ${colors.bg}`} transition={{ type: 'spring', stiffness: 350, damping: 28 }} />}{item}</button>; })}
          </div><motion.div layout className="mt-6 grid gap-6 md:grid-cols-2">
            {visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} filter={filter} filterColors={filterColors} />)}
          </motion.div></LayoutGroup>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, filter, filterColors }) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const category = project.category.split(' & ')[0];
  const activeColor = filter === 'All' ? filterColors['All'] : filterColors[filter] || filterColors['All'];
  const projectColor = filterColors[category] || filterColors['All'];
  
  return <motion.article 
    layout
    initial={{ opacity: 0, scale: 0.9 }} 
    animate={{ opacity: 1, scale: 1 }} 
    exit={{ opacity: 0, scale: 0.9 }} 
    transition={{ 
      layout: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 }
    }} 
    whileHover={{ y: -8, scale: 1.02 }} 
    onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setSpotlight({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 }); }} 
    className="group relative overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white shadow-lg hover:shadow-2xl transition-shadow"
  >
    <motion.div 
      className="pointer-events-none absolute -inset-px z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
      style={{ background: `radial-gradient(280px circle at ${spotlight.x}% ${spotlight.y}%, ${activeColor.hover}, transparent 42%)` }} 
    />
    <div className="relative p-6 sm:p-7">
      <div className="mb-7 flex items-center justify-between gap-4">
        <motion.span 
          className="rounded-lg border border-[#E2E8F0] bg-[#EEF1F6] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[.13em] text-[#475569]"
          whileHover={{ scale: 1.05 }}
        >
          0{index + 1} · {project.category}
        </motion.span>
        <motion.a 
          href={project.github} 
          target="_blank" 
          rel="noreferrer" 
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#E2E8F0] bg-[#EEF1F6] text-[#0A0A0A] transition-all hover:border-transparent ${projectColor.bg.replace('bg-', 'hover:bg-')} hover:text-white`} 
          aria-label={`View ${project.title} source`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <FaGithub className="text-base" />
        </motion.a>
      </div>
      <motion.h3 
        className="text-xl font-extrabold tracking-[-.05em] text-[#0A0A0A]"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {project.title}
      </motion.h3>
      <p className="mt-3 max-w-xl text-sm leading-6 text-[#475569]">{project.impact}</p>
      <motion.p 
        className={`mt-5 border-l-2 ${projectColor.accent} pl-3 text-xs leading-6 text-[#9CA3AF]`}
        initial={{ borderLeftWidth: 2 }}
        whileHover={{ borderLeftWidth: 4, paddingLeft: 16 }}
        transition={{ duration: 0.2 }}
      >
        {project.architecture}
      </motion.p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((tech, i) => (
          <motion.span 
            key={tech} 
            className="rounded-md bg-[#EEF1F6] px-2 py-1 font-mono text-[9px] text-[#475569]"
            whileHover={{ scale: 1.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
      <motion.a 
        href={project.demo} 
        className={`mt-7 inline-flex items-center gap-2 text-xs font-extrabold transition-colors ${projectColor.bg.replace('bg-', 'text-').replace(']', '/90]')} hover:opacity-80`}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        Read the build notes <motion.div whileHover={{ x: 3 }}><FaArrowRight className="text-[10px]" /></motion.div>
      </motion.a>
    </div>
  </motion.article>;
}
