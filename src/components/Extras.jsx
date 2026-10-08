import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { certificates } from "../portfolioData";
import { useRef } from "react";

export default function Extras() {
  const r = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const decoY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const cubeY = useTransform(scrollYProgress, [0, 1], [0, -28]);

  return (
    <section ref={ref} id="achievements" className="page-section section-rule scroll-mt-20 overflow-hidden relative" style={{ perspective: "1400px" }}>
      <motion.div aria-hidden style={r ? undefined : { y: decoY }} className="pointer-events-none absolute -left-8 bottom-10 hidden h-28 w-28 rounded-full border border-dashed border-[var(--accent-line)] opacity-15 lg:block preserve3d" />
      <motion.div aria-hidden style={r ? undefined : { y: cubeY }} className="hero-float-cube float3d-y hidden lg:block" style={{ right: "8%", top: "12%", width: 32, height: 32, opacity: 0.4 }}>
        <span className="scene3d-cube" style={{ position: "absolute", inset: 0 }}>
          <i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" />
        </span>
      </motion.div>
      <span aria-hidden className="pointer-events-none absolute right-[3%] top-10 hidden select-none font-serif text-[10rem] font-black leading-none opacity-[0.035] lg:block" style={{ transform: "translateZ(-40px)" }}>04</span>
      <div className="page-container relative preserve3d">
        <motion.div
          initial={r ? false : { opacity: 0, y: 28, filter: "blur(8px)", rotateX: 10 }}
          whileInView={r ? undefined : { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="certificate-intro preserve3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div style={{ transform: "translateZ(18px)" }}>
            <motion.p initial={r ? false : { opacity: 0, x: -10 }} whileInView={r ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="eyebrow mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)] animate-pulse-dot" /> 04 / Pembelajaran
              <span className="h-px w-8 bg-[var(--accent-line)]" />
            </motion.p>
            <h2 className="section-heading" style={{ overflow: "hidden", transform: "translateZ(24px)" }}>
              <motion.span initial={r ? false : { y: "100%" }} whileInView={r ? undefined : { y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} style={{ display: "inline-block" }}>
                Sertifikat
              </motion.span>
            </h2>
            <motion.div aria-hidden initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ originX: 0, transform: "translateZ(8px)" }} className="mt-3 h-px w-24 bg-[var(--accent-ink)] opacity-30" />
          </div>
          <motion.p initial={r ? false : { opacity: 0, y: 12 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="body-copy" style={{ transform: "translateZ(12px)" }}>
            Catatan dari proses belajar yang terus berjalan, di luar ruang kelas.
          </motion.p>
        </motion.div>

        <div className="certificate-list perspective-wrap" style={{ perspective: "1100px" }}>
          {certificates.map((certificate, index) => (
            <motion.figure
              key={certificate.title}
              initial={r ? false : { opacity: 0, y: 32, scale: 0.97, rotateX: 12, rotateY: -6 }}
              whileInView={r ? undefined : { opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="certificate-item card3d cert-anim group noise-card relative overflow-hidden rounded-sm border transition-colors hover:border-[var(--accent-line)] hover:bg-[var(--surface-subtle)] preserve3d"
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={(e) => e.currentTarget.classList.add("tilting")}
              onMouseMove={(e) => {
                if (r || window.matchMedia("(pointer: coarse)").matches) return;
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
                const rawMx = ((e.clientX - rect.left) / rect.width - 0.5) * 5;
                const rawMy = ((e.clientY - rect.top) / rect.height - 0.5) * -4;
                const mx = Math.max(-5, Math.min(5, rawMx));
                const my = Math.max(-4, Math.min(4, rawMy));
                if (el._raf) cancelAnimationFrame(el._raf);
                el._raf = requestAnimationFrame(() => {
                  el.style.transform = `perspective(1000px) rotateY(${mx}deg) rotateX(${my}deg) translateZ(0)`;
                });
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                if (el._raf) cancelAnimationFrame(el._raf);
                el.classList.remove("tilting");
                el.style.transform = "";
              }}
            >
              <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(560px circle at var(--mx,50%) 50%, color-mix(in srgb, var(--accent-ink) 7%, transparent), transparent 62%)", transform: "translateZ(1px)" }} />
              <motion.div className="cert-img-wrap relative overflow-hidden preserve3d" style={{ transform: "translateZ(16px)" }} whileHover={r ? undefined : { scale: 1.015, rotateY: 2 }} transition={{ duration: 0.4 }}>
                <motion.img src={certificate.image} alt={certificate.alt} loading="lazy" className="certificate-image preserve3d" style={{ transform: "translateZ(10px)" }} initial={r ? false : { scale: 1.04 }} whileInView={r ? undefined : { scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />
                <motion.div className="cert-shine" initial={{ x: "-120%" }} whileInView={{ x: "220%" }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.5 + index * 0.12, ease: [0.22, 1, 0.36, 1] }} aria-hidden />
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent transition-all group-hover:ring-[var(--accent-line)]" aria-hidden style={{ transform: "translateZ(18px)" }} />
              </motion.div>
              <figcaption className="certificate-caption relative card3d-content preserve3d" style={{ transform: "translateZ(20px)" }}>
                <motion.span initial={r ? false : { opacity: 0, y: 8, scale: 0.9 }} whileInView={r ? undefined : { opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 + index * 0.08 }} className="certificate-number grid h-7 w-7 place-items-center rounded-full border text-[0.65rem] transition-colors group-hover:border-[var(--accent-ink)] group-hover:text-[var(--accent-ink)] preserve3d" style={{ borderColor: "var(--line)", transform: "translateZ(16px)" }}>
                  0{index + 1}
                </motion.span>
                <div style={{ transform: "translateZ(14px)" }}>
                  <h3 className="certificate-title transition-colors group-hover:text-[var(--accent-ink)] preserve3d" style={{ transform: "translateZ(12px)" }}>{certificate.title}</h3>
                  <p className="certificate-issuer">{certificate.issuer}</p>
                </div>
                <p className="certificate-date rounded-full border px-2.5 py-1 text-[0.64rem] transition-colors group-hover:border-[var(--accent-line)] preserve3d" style={{ borderColor: "var(--line)", transform: "translateZ(12px)" }}>{certificate.date}</p>
                <motion.span className="certificate-arrow grid h-7 w-7 place-items-center rounded-full border transition-colors group-hover:bg-[var(--accent-ink)] group-hover:text-white group-hover:border-[var(--accent-ink)] preserve3d" style={{ borderColor: "var(--line)", transform: "translateZ(24px)", transformStyle: "preserve-3d" }} aria-hidden="true" whileHover={r ? undefined : { rotate: 12, scale: 1.1, rotateY: 18 }} animate={r ? {} : { x: [0, 2, 0], y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}>
                  <ArrowUpRight size={14} />
                </motion.span>
              </figcaption>
              <span aria-hidden className="depth-shadow" style={{ borderRadius: 2, opacity: 0.4 }} />
              <motion.div aria-hidden className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[var(--accent-ink)] to-transparent" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} style={{ originX: 0, transform: "translateZ(22px)" }} transition={{ duration: 0.4 }} />
            </motion.figure>
          ))}
        </div>

        <motion.div initial={r ? false : { opacity: 0, y: 10 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }} className="mt-6 flex items-center gap-2 text-sm text-[var(--muted)] preserve3d" style={{ transform: "translateZ(10px)" }}>
          <span className="h-px w-8 bg-[var(--accent-line)]" /> Lebih banyak di LinkedIn & GitHub
        </motion.div>
      </div>
    </section>
  );
}
