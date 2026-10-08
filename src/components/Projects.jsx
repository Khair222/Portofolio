import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, GithubLogo, Star } from "@phosphor-icons/react";
import { projects } from "../portfolioData";
import { useRef } from "react";

export default function Projects() {
  const r = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [24, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const cubeY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  return (
    <section ref={ref} id="projects" className="page-section section-rule scroll-mt-20 overflow-hidden relative" style={{ perspective: "1400px" }}>
      <span aria-hidden className="pointer-events-none absolute right-[2%] top-10 hidden select-none font-serif text-[11rem] font-black leading-none opacity-[0.035] lg:block preserve3d" style={{ transform: "translateZ(-40px)" }}>02</span>
      {/* 3D floating deco */}
      <motion.div aria-hidden style={r ? undefined : { y: cubeY }} className="hero-float-cube float3d-y hidden lg:block" style={{ left: "44%", top: "6%", width: 36, height: 36, opacity: 0.45 }}>
        <span className="scene3d-cube" style={{ position: "absolute", inset: 0 }}>
          <i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" />
        </span>
      </motion.div>
      <div aria-hidden className="hero-float-ring hidden lg:block" style={{ right: "10%", top: "18%", width: 64, height: 64, opacity: 0.18 }} />
      <div aria-hidden className="hero-float-dot3d hidden lg:block" style={{ left: "7%", top: "44%", width: 8, height: 8, opacity: 0.5 }} />

      <div className="page-container relative preserve3d">
        <motion.div
          initial={r ? false : { opacity: 0, y: 30, filter: "blur(8px)", rotateX: 10 }}
          whileInView={r ? undefined : { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={r ? undefined : { y: headerY, opacity: headerOpacity, transformStyle: "preserve-3d" }}
          className="mb-12 grid grid-cols-1 items-end gap-5 md:grid-cols-[1fr_auto] preserve3d"
        >
          <div style={{ transform: "translateZ(18px)" }}>
            <motion.p initial={r ? false : { opacity: 0, x: -10 }} whileInView={r ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="eyebrow mb-4 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)] animate-pulse-dot" /> 02 / Karya
              <span className="hidden h-px w-8 bg-[var(--accent-line)] sm:inline-block" />
            </motion.p>
            <h2 className="section-heading" style={{ overflow: "hidden", transform: "translateZ(22px)" }}>
              <motion.span initial={r ? false : { y: "100%" }} whileInView={r ? undefined : { y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ display: "inline-block" }}>
                Proyek pilihan
              </motion.span>
            </h2>
          </div>
          <motion.p initial={r ? false : { opacity: 0, y: 12 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="body-copy max-w-sm md:pb-1" style={{ transform: "translateZ(12px)" }}>
            Dari platform edukasi hingga aplikasi mobile, setiap proyek berangkat dari kebutuhan yang nyata.
          </motion.p>
        </motion.div>

        <div className="project-grid perspective-wrap" style={{ perspective: "1200px" }}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={r ? false : { opacity: 0, y: 36, scale: 0.96, rotateX: 12, rotateY: index % 2 === 0 ? -6 : 6 }}
              whileInView={r ? undefined : { opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`project-card card3d project-card-anim group noise-card preserve3d ${index === 0 ? "project-card-featured" : "project-card-compact"}`}
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={(e) => e.currentTarget.classList.add("tilting")}
              onMouseMove={(e) => {
                if (r || window.matchMedia("(pointer: coarse)").matches) return;
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
                el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
                // clamp rotasi biar tidak "rusak" saat kursor di tepi; rAF smooth
                const rawMx = ((e.clientX - rect.left) / rect.width - 0.5) * 7;
                const rawMy = ((e.clientY - rect.top) / rect.height - 0.5) * -5;
                const mx = Math.max(-7, Math.min(7, rawMx));
                const my = Math.max(-5, Math.min(5, rawMy));
                if (el._raf) cancelAnimationFrame(el._raf);
                el._raf = requestAnimationFrame(() => {
                  el.style.transform = `perspective(1100px) rotateY(${mx}deg) rotateX(${my}deg) translateZ(0)`;
                });
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                if (el._raf) cancelAnimationFrame(el._raf);
                el.classList.remove("tilting");
                el.style.transform = "";
              }}
            >
              {index === 0 && (
                <span className="absolute left-3 top-3 z-[3] inline-flex items-center gap-1 rounded-full bg-[var(--accent-ink)] px-2.5 py-1 text-[0.62rem] font-semibold tracking-widest text-white" style={{ transform: "translateZ(32px)" }}>
                  <Star size={11} weight="fill" /> UNGGULAN
                </span>
              )}
              <div className="project-image-wrap card3d-image preserve3d" style={{ transform: "translateZ(12px)" }}>
                <motion.img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="project-image"
                  whileHover={r ? undefined : { scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transform: "translateZ(14px)" }}
                />
                <motion.div className="project-shine" initial={{ x: "-120%" }} whileInView={{ x: "220%" }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }} aria-hidden />
                <span className="project-glow" aria-hidden />
                <span aria-hidden className="pointer-events-none absolute right-0 top-0 h-6 w-6 bg-gradient-to-bl from-[var(--accent-line)]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)", transform: "translateZ(20px)" }} />
              </div>
              <div className="project-content card3d-content relative preserve3d" style={{ transform: "translateZ(22px)" }}>
                <div className="project-heading" style={{ transform: "translateZ(8px)" }}>
                  <motion.p initial={r ? false : { opacity: 0 }} whileInView={r ? undefined : { opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + index * 0.08 }} className="project-number flex items-center gap-2">
                    PROYEK {String(index + 1).padStart(2, "0")}
                    <span className="h-px w-6 bg-[var(--accent-line)] opacity-60" />
                  </motion.p>
                  <motion.span className="grid h-7 w-7 place-items-center rounded-full border transition-colors group-hover:border-[var(--accent-ink)] group-hover:text-[var(--accent-ink)]" style={{ borderColor: "var(--line)", transform: "translateZ(16px)" }} whileHover={r ? undefined : { rotate: 18, scale: 1.15, rotateY: 18 }} transition={{ type: "spring", stiffness: 220, damping: 24 }}>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </motion.span>
                </div>
                <h3 className="project-title transition-colors group-hover:text-[var(--accent-ink)]" style={{ transform: "translateZ(16px)" }}>{project.title}</h3>
                <p className="project-description" style={{ transform: "translateZ(10px)" }}>{project.desc}</p>
                <ul className="project-tags preserve3d" style={{ transform: "translateZ(14px)" }} aria-label={`Teknologi proyek ${project.title}`}>
                  {project.tech.map((tech, ti) => (
                    <motion.li
                      key={tech}
                      className="pastel-tag transition-colors group-hover:bg-[var(--accent-bg)] group-hover:text-[var(--accent-ink)]"
                      initial={r ? false : { opacity: 0, y: 8, scale: 0.9, rotateX: -12 }}
                      whileInView={r ? undefined : { opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.08 + ti * 0.04, duration: 0.4 }}
                      whileHover={r ? undefined : { y: -2, scale: 1.05, rotateY: 8 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <span aria-hidden className="depth-shadow" style={{ borderRadius: 2 }} />
              <motion.div className="project-border-grad" initial={{ scaleX: 0 }} whileInView={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} style={{ originX: 0, transform: "translateZ(24px)" }} transition={{ duration: 0.4 }} aria-hidden />
            </motion.article>
          ))}
        </div>

        <motion.div initial={r ? false : { opacity: 0, y: 12 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-3 preserve3d" style={{ transform: "translateZ(10px)" }}>
          <motion.a href="https://github.com/Khair222" target="_blank" rel="noreferrer" className="solid-button preserve3d" whileHover={r ? undefined : { y: -2, scale: 1.02, rotateX: 6, rotateY: -6 }} whileTap={{ scale: 0.97 }} style={{ transformStyle: "preserve-3d" }}>
            <GithubLogo size={18} /> Jelajahi GitHub <ArrowUpRight size={15} />
          </motion.a>
          <span className="text-sm text-[var(--muted)]">— lihat kode & dokumentasi lengkap</span>
        </motion.div>
      </div>
    </section>
  );
}
