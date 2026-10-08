import { motion, useScroll, useSpring, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect } from "react";

export default function PageEffects() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, restDelta: 0.001 });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const mxSpring = useSpring(mx, { stiffness: 90, damping: 22 });
  const mySpring = useSpring(my, { stiffness: 90, damping: 22 });
  const dotX = useSpring(mx, { stiffness: 600, damping: 28 });
  const dotY = useSpring(my, { stiffness: 600, damping: 28 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  return (
    <>
      <div className="ambient-field" aria-hidden="true">
        <span className="ambient-mesh" />
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-ring ambient-ring-one" />
        <span className="ambient-ring ambient-ring-two" />
        <span className="ambient-orbit ambient-orbit-one"><i /></span>
        <span className="ambient-orbit ambient-orbit-two"><i /></span>
        <span className="ambient-particle ambient-particle-one" />
        <span className="ambient-particle ambient-particle-two" />
        <span className="ambient-particle ambient-particle-three" />
        <span className="ambient-particle ambient-particle-four" />
        <span className="ambient-particle ambient-particle-five" />
        <span className="ambient-grid" />
      </div>
      <div className="grain-overlay" aria-hidden="true" />
      {!reduce && (
        <>
          <motion.div className="cursor-glow" style={{ x: mxSpring, y: mySpring }} aria-hidden="true" />
          <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }} aria-hidden="true" />
          <motion.div className="cursor-ring" style={{ x: mxSpring, y: mySpring }} aria-hidden="true" />
        </>
      )}
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
    </>
  );
}
