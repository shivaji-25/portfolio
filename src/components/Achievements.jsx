import { motion } from 'framer-motion';
import { FaCode, FaJava, FaLayerGroup, FaTrophy } from 'react-icons/fa';
import { achievements } from '../data/portfolioData';

const icons = { FaCode, FaJava, FaLayerGroup, FaTrophy };

export default function Achievements() {
  const achievementColors = [
    { icon: 'text-[#0A66C2]', gradient: 'hover:border-[#0A66C2]/40', shadow: 'hover:shadow-[0_8px_30px_rgba(10,102,194,.2)]' },
    { icon: 'text-[#22c55e]', gradient: 'hover:border-[#22c55e]/40', shadow: 'hover:shadow-[0_8px_30px_rgba(34,197,94,.2)]' },
    { icon: 'text-[#f59e0b]', gradient: 'hover:border-[#f59e0b]/40', shadow: 'hover:shadow-[0_8px_30px_rgba(245,158,11,.2)]' },
    { icon: 'text-[#8b5cf6]', gradient: 'hover:border-[#8b5cf6]/40', shadow: 'hover:shadow-[0_8px_30px_rgba(139,92,246,.2)]' },
  ];
  
  return (
    <section id="achievements" className="relative px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.1 }}>
          <p className="section-kicker">05 / Signals</p>
          <h2 className="section-heading mt-4">A few numbers with stories behind them.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => { 
              const Icon = icons[achievement.icon]; 
              const colors = achievementColors[index % achievementColors.length];
              return (
                <motion.div 
                  key={achievement.label} 
                  initial={{ opacity: 0, y: 8 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: .1, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group glass-card--soft rounded-2xl p-6 transition-all ${colors.gradient} ${colors.shadow}`}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`text-xl ${colors.icon} transition-all`} />
                  </motion.div>
                  <motion.p 
                    className="mt-9 text-3xl font-extrabold tracking-[-.07em] text-zinc-100"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {achievement.number}
                  </motion.p>
                  <p className="mt-2 text-sm font-bold text-zinc-200">{achievement.label}</p>
                  <p className="mt-3 text-xs leading-5 text-zinc-400">{achievement.desc}</p>
                </motion.div>
              ); 
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
