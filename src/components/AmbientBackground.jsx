import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleField from './ParticleField';

export default function AmbientBackground() {
  const { scrollY } = useScroll();
  const auroraY = useTransform(scrollY, [0, 1800], [0, -130]);
  const gridY = useTransform(scrollY, [0, 1800], [0, -55]);

  return (
    <div aria-hidden="true" className="ambient-background pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: auroraY }} className="absolute inset-0">
        <div className="aurora-sky aurora-orbit-one absolute -top-[24rem] left-[15%] h-[48rem] w-[56rem] rounded-full blur-[85px]" />
        <div className="aurora-cyan aurora-orbit-two absolute -right-56 top-[12%] h-[38rem] w-[38rem] rounded-full blur-[85px]" />
        <div className="aurora-violet aurora-orbit-three absolute -bottom-80 -left-36 h-[48rem] w-[48rem] rounded-full blur-[85px]" />
      </motion.div>
      <ParticleField />
      <motion.div style={{ y: gridY }} className="ambient-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
    </div>
  );
}
