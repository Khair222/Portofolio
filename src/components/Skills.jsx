import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, BracketsCurly, Database, DeviceMobile } from "@phosphor-icons/react";
import { useRef } from "react";

const skillGroups = [
  { label: "Web", focus: "Antarmuka & interaksi", icon: BracketsCurly, skills: ["HTML5", "CSS3", "JavaScript"], accent: "var(--accent-ink)" },
  { label: "Backend dan AI", focus: "Data & logika aplikasi", icon: Database, skills: ["PHP", "MySQL", "Python"], accent: "var(--accent-line)" },
  { label: "Mobile", focus: "Aplikasi lintas perangkat", icon: DeviceMobile, skills: ["Flutter", "Dart", "Supabase"], accent: "var(--ambient-warm)" },
];

export default function Skills() {
  const r = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const cubeY = useTransform(scrollYProgress, [0, 1], [0, -32]);

  return (
    <section ref={ref} id="skills" className="page-section section-rule scroll-mt-20 overflow-hidden relative" style={{ perspective: "1400px" }}>
      <motion.div aria-hidden style={r ? undefined : { x: bgX }} className="pointer-events-none absolute -left-10 top-20 hidden h-40 w-40 rounded-full border border-[var(--accent-line)] opacity-[0.10] lg:block preserve3d" />
      <span aria-hidden className="pointer-events-none absolute right-[3%] top-10 hidden select-none font-serif text-[10rem] font-black leading-none opacity-[0.035] lg:block preserve3d" style={{ transform: "translateZ(-40px)" }}>03</span>
      <motion.div aria-hidden style={r ? undefined : { y: cubeY }} className="hero-float-cube float3d-y hidden lg:block" style={{ left: "38%", top: "4%", width: 34, height: 34, opacity: 0.42 }}>
        <span className="scene3d-cube" style={{ position: "absolute", inset: 0 }}>
          <i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" />
        </span>
      </motion.div>
      <div aria-hidden className="hero-float-ring hidden lg:block" style={{ right: "12%", top: "10%", width: 58, height: 58, opacity: 0.16 }} />
      <div aria-hidden className="hero-float-dot3d hidden lg:block" style={{ left: "8%", top: "48%", width: 7, height: 7, opacity: 0.45 }} />

      <div className="page-container relative preserve3d">
        <motion.div
          initial={r ? false : { opacity: 0, y: 28, filter: "blur(8px)", rotateX: 12 }}
          whileInView={r ? undefined : { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="skills-intro preserve3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div style={{ transform: "translateZ(18px)" }}>
            <motion.p initial={r ? false : { opacity: 0, x: -10 }} whileInView={r ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="eyebrow mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)] animate-pulse-dot" /> 03 / Perangkat
              <span className="h-px w-8 bg-[var(--accent-line)]" />
            </motion.p>
            <h2 className="section-heading" style={{ overflow: "hidden", transform: "translateZ(24px)" }}>
              <motion.span initial={r ? false : { y: "100%" }} whileInView={r ? undefined : { y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ display: "inline-block" }}>
                Teknologi yang saya gunakan
              </motion.span>
            </h2>
          </div>
          <motion.p initial={r ? false : { opacity: 0, y: 12 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="body-copy skills-note relative preserve3d" style={{ transform: "translateZ(14px)" }}>
            Perangkat yang saya pakai untuk mengubah ide menjadi sesuatu yang bisa dicoba.
            <motion.span aria-hidden initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.7 }} style={{ originX: 0, transform: "translateZ(6px)" }} className="absolute -bottom-2 left-0 h-px w-full bg-[var(--accent-line)] opacity-40 hidden md:block" />
          </motion.p>
        </motion.div>

        <div className="skills-grid relative overflow-hidden rounded-sm perspective-wrap" style={{ perspective: "1100px" }}>
          <motion.div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" initial={{ x: "-100%" }} whileInView={{ x: "220%" }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} />
          {skillGroups.map(({ icon: Icon, accent, ...group }, index) => (
            <motion.div
              key={group.label}
              initial={r ? false : { opacity: 0, y: 32, scale: 0.96, rotateX: 14, rotateY: -8 }}
              whileInView={r ? undefined : { opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="skill-column card3d skill-anim noise-card group relative overflow-hidden preserve3d"
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={(e) => e.currentTarget.classList.add("tilting")}
              onMouseMove={(e) => {
                if (r || window.matchMedia("(pointer: coarse)").matches) return;
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
                el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
                const rawMx = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
                const rawMy = ((e.clientY - rect.top) / rect.height - 0.5) * -5;
                const mx = Math.max(-6, Math.min(6, rawMx));
                const my = Math.max(-5, Math.min(5, rawMy));
                if (el._raf) cancelAnimationFrame(el._raf);
                el._raf = requestAnimationFrame(() => {
                  el.style.transform = `perspective(900px) rotateY(${mx}deg) rotateX(${my}deg) translateZ(0)`;
                });
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                if (el._raf) cancelAnimationFrame(el._raf);
                el.classList.remove("tilting");
                el.style.transform = "";
              }}
            >
              <span aria-hidden className="skill-orb" style={{ transform: "translateZ(8px)" }} />
              <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), color-mix(in srgb, var(--accent-ink) 9%, transparent), transparent 62%)", transform: "translateZ(1px)" }} />
              <div className="skill-topline relative preserve3d" style={{ transform: "translateZ(20px)" }}>
                <motion.span initial={r ? false : { opacity: 0 }} whileInView={r ? undefined : { opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + index * 0.08 }} className="skill-index" style={{ transform: "translateZ(10px)" }}>0{index + 1}</motion.span>
                <motion.span
                  animate={r ? {} : { y: [0, -4, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 2.6, delay: index * 0.35, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={r ? undefined : { rotate: -14, scale: 1.2, rotateY: 14 }}
                  className="grid h-10 w-10 place-items-center rounded-full border bg-[var(--surface)] transition-colors group-hover:bg-[var(--accent-bg)] group-hover:border-[var(--accent-line)]"
                  style={{ borderColor: "var(--line)", display: "grid", placeItems: "center", transform: "translateZ(28px)", transformStyle: "preserve-3d" }}
                >
                  <Icon size={20} weight="regular" style={{ color: accent }} />
                </motion.span>
              </div>
              <motion.h3 initial={r ? false : { opacity: 0, y: 10 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 + index * 0.08 }} className="skill-group-title relative preserve3d" style={{ transform: "translateZ(22px)" }}>{group.label}</motion.h3>
              <p className="skill-focus" style={{ transform: "translateZ(14px)" }}>{group.focus}</p>
              <ul className="skill-tags preserve3d" style={{ transform: "translateZ(18px)" }}>
                {group.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={r ? false : { opacity: 0, scale: 0.85, y: 6, rotateX: -10 }}
                    whileInView={r ? undefined : { opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 + index * 0.08 + si * 0.05, type: "spring", stiffness: 220, damping: 24 }}
                    whileHover={r ? undefined : { y: -3, scale: 1.06, rotateY: 10 }}
                    className="relative overflow-hidden transition-colors group-hover:border-[var(--accent-line)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="relative z-[1]">{skill}</span>
                    <span aria-hidden className="absolute inset-0 -translate-x-full bg-[var(--accent-bg)] transition-transform duration-300 group-hover:translate-x-0 opacity-60" />
                  </motion.li>
                ))}
              </ul>
              <motion.div className="skill-accent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 0 }} style={{ originX: 0, transform: "translateZ(24px)" }} aria-hidden />
              <span aria-hidden className="depth-shadow" style={{ borderRadius: 2, opacity: 0.35 }} />
              <span aria-hidden className="pointer-events-none absolute right-2 top-2 h-2 w-2 border-r border-t opacity-20 transition-opacity group-hover:opacity-60" style={{ borderColor: accent, transform: "translateZ(20px)" }} />
            </motion.div>
          ))}
        </div>

        <motion.a href="#projects" className="quiet-link skills-link group preserve3d" initial={r ? false : { opacity: 0, y: 10 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} whileHover={r ? undefined : { x: 4, rotateY: 6 }} style={{ transform: "translateZ(10px)", display: "inline-flex" }}>
          Lihat penerapannya di proyek
          <motion.span className="inline-flex h-6 w-6 items-center justify-center rounded-full border transition-colors group-hover:bg-[var(--accent-ink)] group-hover:text-white group-hover:border-[var(--accent-ink)]" style={{ borderColor: "var(--line)", transform: "translateZ(14px)" }} animate={r ? {} : { x: [0, 3, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDownRight size={12} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
