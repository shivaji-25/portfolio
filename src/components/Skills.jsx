import { motion } from 'framer-motion';
import { FaServer, FaDatabase, FaCode, FaTools, FaJava } from 'react-icons/fa';
import {
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiPostman,
  SiLeetcode,
} from 'react-icons/si';
import { skillCategories } from '../data/portfolioData';

const skillIconMap = {
  Java: { icon: FaJava, color: '#EA2D2E' },
  'Spring Boot': { icon: SiSpringboot, color: '#6DB33F' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  'Express.js': { icon: SiExpress, color: '#2563EB' },
  PHP: { icon: SiPhp, color: '#777BB4' },
  MySQL: { icon: SiMysql, color: '#00758F' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  SQLite: { icon: SiSqlite, color: '#003B57' },
  'Query Optimization': { icon: FaDatabase, color: '#0284C7' },
  'React.js': { icon: SiReact, color: '#087EA4' },
  'JavaScript (ES6+)': { icon: SiJavascript, color: '#EAB308' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'HTML5 / CSS3': { icon: SiHtml5, color: '#E34F26' },
  'Git & GitHub': { icon: SiGit, color: '#F05032' },
  Postman: { icon: SiPostman, color: '#FF6C37' },
  'Data Structures & Algorithms': { icon: SiLeetcode, color: '#FFA116' },
  'OOP / DBMS / OS / Networks': { icon: FaCode, color: '#6366F1' },
};

const categoryIconMap = {
  'Backend Engineering': FaServer,
  'Databases & Storage': FaDatabase,
  'Frontend & Interfaces': FaCode,
  'Developer Tools & Core CS': FaTools,
};

const categoryTags = {
  'Backend Engineering': '5 Technologies',
  'Databases & Storage': '4 Technologies',
  'Frontend & Interfaces': '4 Technologies',
  'Developer Tools & Core CS': '4 Foundations',
};

export default function Skills() {
  return (
    <section id="skills" className="py-8 sm:py-10 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-neutral-200/80">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
          Technical Competencies
        </h2>
        <span className="text-sm sm:text-base font-semibold text-neutral-400">
          Architecture & Technologies
        </span>
      </div>

      {/* Bento Grid of 4 categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {skillCategories.map((category, idx) => {
          const IconComponent = categoryIconMap[category.category] || FaCode;
          const tag = categoryTags[category.category] || 'Core';

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.08 }}
              className="rounded-2xl sm:rounded-3xl bg-white border border-black/[0.06] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-neutral-800 text-lg shadow-2xs shrink-0">
                      <IconComponent />
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-neutral-900">
                      {category.category}
                    </h3>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/70">
                    {tag}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-1">
                  {category.skills.map((skill) => {
                    const meta = skillIconMap[skill.name] || {
                      icon: FaCode,
                      color: '#4B5563',
                    };
                    const SkillIcon = meta.icon;

                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2.5 rounded-xl bg-white hover:bg-neutral-900 hover:text-white border border-neutral-200/90 px-3.5 py-2 text-xs font-bold text-neutral-900 transition-all duration-200 shadow-2xs group cursor-default"
                      >
                        <span
                          className="w-6 h-6 rounded-lg bg-neutral-100 group-hover:bg-neutral-800 flex items-center justify-center text-xs shrink-0 transition-colors"
                          style={{ color: meta.color }}
                        >
                          <SkillIcon />
                        </span>
                        <span className="font-bold text-neutral-900 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md font-medium bg-neutral-100 text-neutral-600 border border-neutral-200/70 group-hover:bg-neutral-800 group-hover:text-neutral-300 group-hover:border-neutral-700 transition-colors">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
