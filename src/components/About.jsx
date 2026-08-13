import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaGraduationCap, FaLocationArrow } from 'react-icons/fa';
import { leetcodeAnalytics, personalDetails } from '../data/portfolioData';
import Counter from './Counter';

const reveal = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: 'linear' } } };

export default function About() {
  const stats = leetcodeAnalytics;
  const total = stats.totalSolved;
  return (
    <section id="about" className="relative px-6 py-24 sm:px-8 lg:py-32 bg-[#F5F6FA]">
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} className="grid gap-12 lg:grid-cols-[.93fr_1.07fr] lg:gap-20">
          <div>
            <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.15em] text-[#0A0A0A]">01 / About</p>
            <h2 className="mt-4 max-w-md text-[clamp(2rem,5vw,3.35rem)] font-extrabold leading-[1] tracking-[-0.06em] text-[#0A0A0A]">Engineering with a calm, precise edge.</h2>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative shrink-0 profile-photo-wrapper">
                <div className="relative h-44 w-44 overflow-hidden rounded-xl">
                  <img 
                    src="/profile.jpg" 
                    alt={personalDetails.name} 
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 rounded-lg border border-[#E2E8F0] bg-white/90 px-2.5 py-1 text-center backdrop-blur-md">
                    <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#0A0A0A]">Shivaji C S</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-base leading-8 text-[#475569]">{personalDetails.bioFull}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-xs text-[#475569]"><FaGraduationCap className="text-[#0A66C2]" /> {personalDetails.college}</div>
                  <div className="flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-xs text-[#475569]"><FaLocationArrow className="text-[#0A66C2]" /> {personalDetails.location}</div>
                </div>
              </div>
            </div>

            <a href={personalDetails.leetcode} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] transition-colors hover:text-[#094c8a]">Follow the problem-solving journey <FaArrowRight className="text-xs" /></a>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white p-5 shadow-lg sm:p-7">
            <div className="relative flex flex-wrap items-start justify-between gap-4 border-b border-[#E2E8F0] pb-6">
              <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#EEF1F6] text-[#0A66C2]"><FaCode /></span><div><p className="text-sm font-extrabold tracking-[-0.03em] text-[#0A0A0A]">Algorithmic thinking</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[.12em] text-[#9CA3AF]">LeetCode analytics</p></div></div>
              <div className="rounded-xl border border-[#E2E8F0] bg-[#EEF1F6] px-3 py-2 text-right">
                <div className="flex items-center justify-center">
                  <Counter
                    value={total}
                    places={[100, 10, 1]}
                    fontSize={18}
                    padding={2}
                    gap={2}
                    textColor="#0A66C2"
                    fontWeight={800}
                    borderRadius={0}
                    horizontalPadding={0}
                    gradientHeight={8}
                    gradientFrom="transparent"
                    gradientTo="transparent"
                  />
                  <span className="text-lg font-extrabold text-[#0A66C2]">+</span>
                </div>
                <p className="font-mono text-[9px] uppercase tracking-[.12em] text-[#9CA3AF]">solved</p>
              </div>
            </div>
            <div className="relative mt-7 grid gap-7 sm:grid-cols-[150px_1fr] sm:items-center">
              <div className="relative mx-auto grid h-36 w-36 place-items-center rounded-full" style={{ background: `conic-gradient(#22c55e 0deg ${leetcodeAnalytics.easy / total * 360}deg, #f59e0b ${leetcodeAnalytics.easy / total * 360}deg ${(leetcodeAnalytics.easy + leetcodeAnalytics.medium) / total * 360}deg, #ef4444 ${(leetcodeAnalytics.easy + leetcodeAnalytics.medium) / total * 360}deg 360deg)` }}>
                <div className="grid h-28 w-28 place-items-center rounded-full bg-white">
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <Counter
                        value={total}
                        places={[100, 10, 1]}
                        fontSize={24}
                        padding={4}
                        gap={3}
                        textColor="#0A0A0A"
                        fontWeight={800}
                        borderRadius={0}
                        horizontalPadding={0}
                        gradientHeight={10}
                        gradientFrom="transparent"
                        gradientTo="transparent"
                      />
                    </div>
                    <p className="font-mono text-[8px] uppercase tracking-[.15em] text-[#9CA3AF]">problems</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  ['Easy', stats.easy, 'bg-[#22c55e]', '#22c55e'],
                  ['Medium', stats.medium, 'bg-[#f59e0b]', '#f59e0b'],
                  ['Hard', stats.hard, 'bg-[#ef4444]', '#ef4444']
                ].map(([name, value, bgColor, textColor]) => (
                  <div key={name} className="grid grid-cols-[54px_1fr_40px] items-center gap-3 text-xs">
                    <span className="text-[#475569]">{name}</span>
                    <span className="h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Number(value) / total * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15, ease: 'linear' }}
                        className={`block h-full rounded-full ${bgColor}`}
                      />
                    </span>
                    <div className="text-right">
                      <Counter
                        value={Number(value)}
                        places={value >= 100 ? [100, 10, 1] : [10, 1]}
                        fontSize={12}
                        padding={1}
                        gap={1}
                        textColor={textColor}
                        fontWeight={600}
                        borderRadius={0}
                        horizontalPadding={0}
                        gradientHeight={6}
                        gradientFrom="transparent"
                        gradientTo="transparent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-7 grid gap-2 border-t border-[#E2E8F0] pt-5 sm:grid-cols-2">
              {leetcodeAnalytics.topTopics.slice(0, 4).map((topic) => <div key={topic.topic} className="flex items-center justify-between rounded-lg bg-[#EEF1F6] px-3 py-2.5 text-[11px]"><span className="text-[#475569]">{topic.topic.replace(' & ', ' / ')}</span><span className="font-mono text-[#0A66C2]">{topic.count}</span></div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
