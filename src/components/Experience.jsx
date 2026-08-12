import { motion } from 'framer-motion';
import { FaArrowRight, FaBriefcase } from 'react-icons/fa';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const companyColors = {
    0: { primary: '#0A66C2', gradient: 'from-[#0A66C2] via-[#0A66C2]', shadow: 'shadow-[0_0_18px_rgba(10,102,194,.5)]' },
    1: { primary: '#22c55e', gradient: 'from-[#22c55e] via-[#22c55e]', shadow: 'shadow-[0_0_18px_rgba(34,197,94,.5)]' },
    2: { primary: '#f59e0b', gradient: 'from-[#f59e0b] via-[#f59e0b]', shadow: 'shadow-[0_0_18px_rgba(245,158,11,.5)]' },
  };
  
  return (
    <section id="experience" className="relative border-y border-[#E2E8F0] bg-[#EEF1F6] px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.1 }}>
          <p className="section-kicker">04 / Experience</p>
          <h2 className="section-heading mt-4">Learning by shipping.</h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#475569]">Building in teams taught me that great code needs clear communication, steady iteration, and attention to the people using it.</p>
        </motion.div>
        <div className="relative border-l border-[#E2E8F0] pl-7 sm:pl-10">
          <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.15, ease: 'linear' }} className="absolute -left-px bottom-0 top-0 w-px origin-top bg-gradient-to-b from-[#0A66C2] via-[#22c55e] to-[#f59e0b]" />
          {experience.map((item, idx) => {
            const colors = companyColors[idx] || companyColors[0];
            return (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              <span className={`absolute -left-[35px] top-7 grid h-4 w-4 place-items-center rounded-full border-[3px] border-[#EEF1F6] ${colors.shadow} sm:-left-[48px]`} style={{ backgroundColor: colors.primary }} />
              <div className="bg-white border border-[#E2E8F0] rounded-[1.5rem] p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-4 border-b border-[#E2E8F0] pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#EEF1F6]" style={{ color: colors.primary }}>
                      <FaBriefcase />
                    </span>
                    <div>
                      <p className="text-lg font-extrabold tracking-[-.04em] text-[#0A0A0A]">{item.role}</p>
                      <p className="mt-1 text-sm font-semibold" style={{ color: colors.primary }}>{item.company}</p>
                    </div>
                  </div>
                  <span className="w-fit rounded-lg border border-[#E2E8F0] bg-[#F5F6FA] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-[#9CA3AF]">
                    {item.duration}
                  </span>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-[#475569]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: colors.primary }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-xs font-bold transition-colors hover:opacity-80" style={{ color: colors.primary }}>
                  Let's make the next one together <FaArrowRight className="text-[10px]" />
                </a>
              </div>
            </motion.article>
          );})}
        </div>
      </div>
    </section>
  );
}
