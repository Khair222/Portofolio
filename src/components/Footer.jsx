import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Envelope, MapPin } from "@phosphor-icons/react";
import { useRef } from "react";

const currentYear = new Date().getFullYear();
const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/edm.fhl.khair" },
  { label: "GitHub", href: "https://github.com/Khair222" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fathul-khair-070091413" },
];
const portfolioLinks = [
  { label: "Tentang saya", href: "#about" },
  { label: "Perjalanan", href: "#experience" },
  { label: "Proyek", href: "#projects" },
  { label: "Keahlian", href: "#skills" },
  { label: "Sertifikat", href: "#achievements" },
];

export default function Footer() {
  const r = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const panelY = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const panelScale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);
  const cubeY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <footer ref={ref} id="contact" className="page-section section-rule scroll-mt-20 overflow-hidden relative" style={{ perspective: "1400px" }}>
      <motion.div aria-hidden animate={r ? {} : { rotate: [0, 1.2, 0], y: [0, -6, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -right-10 top-24 hidden h-40 w-40 rounded-full border border-[var(--accent-line)] opacity-[0.10] lg:block" />
      <motion.div aria-hidden style={r ? undefined : { y: cubeY }} className="hero-float-cube float3d-y hidden lg:block" style={{ left: "6%", top: "18%", width: 30, height: 30, opacity: 0.36 }}>
        <span className="scene3d-cube" style={{ position: "absolute", inset: 0 }}><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /></span>
      </motion.div>
      <span aria-hidden className="pointer-events-none absolute right-[3%] top-8 hidden select-none font-serif text-[10rem] font-black leading-none opacity-[0.035] lg:block" style={{ transform: "translateZ(-40px)" }}>05</span>
      <div className="page-container relative preserve3d">
        <motion.div
          style={r ? undefined : { y: panelY, scale: panelScale, transformStyle: "preserve-3d" }}
          initial={r ? false : { opacity: 0, y: 32, scale: 0.97, rotateX: 10 }}
          whileInView={r ? undefined : { opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="contact-panel footer-reveal card3d group relative overflow-hidden rounded-sm preserve3d"
          onMouseEnter={(e) => e.currentTarget.classList.add("tilting")}
          onMouseMove={(e) => {
            if (r || window.matchMedia("(pointer: coarse)").matches) return;
            const el = e.currentTarget;
            const rect = el.getBoundingClientRect();
            el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
            el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
            const rawMx = ((e.clientX - rect.left) / rect.width - 0.5) * 5;
            const rawMy = ((e.clientY - rect.top) / rect.height - 0.5) * -4;
            const mx = Math.max(-5, Math.min(5, rawMx));
            const my = Math.max(-4, Math.min(4, rawMy));
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
          <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(700px circle at var(--mx,50%) var(--my,50%), color-mix(in srgb, var(--accent-ink) 11%, transparent), transparent 62%)", transform: "translateZ(1px)" }} />
          <motion.div aria-hidden className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-[var(--accent-ink)] via-[var(--accent-line)] to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} style={{ originX: 0, transform: "translateZ(24px)" }} />
          <motion.div initial={r ? false : { opacity: 0, y: 16 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }} className="contact-copy relative preserve3d" style={{ transform: "translateZ(22px)" }}>
            <motion.p initial={r ? false : { opacity: 0, x: -8 }} whileInView={r ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} className="eyebrow mb-4 flex items-center gap-2" style={{ transform: "translateZ(10px)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-line)] animate-pulse-dot" /> 05 / Kontak
              <span className="h-px w-8 bg-[var(--canvas)] opacity-20" />
            </motion.p>
            <h2 className="section-heading preserve3d" style={{ overflow: "hidden", transform: "translateZ(24px)" }}>
              <motion.span initial={r ? false : { y: "100%" }} whileInView={r ? undefined : { y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} style={{ display: "inline-block" }}>Ada ide yang ingin</motion.span><br />
              <motion.span initial={r ? false : { y: "100%" }} whileInView={r ? undefined : { y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} style={{ display: "inline-block", transform: "translateZ(14px)" }} className="text-gradient-anim">diwujudkan?</motion.span>
            </h2>
            <motion.p initial={r ? false : { opacity: 0, y: 10 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="body-copy mt-5" style={{ transform: "translateZ(10px)" }}>Saya terbuka untuk berdiskusi tentang proyek, belajar bersama, dan kolaborasi.</motion.p>
            <motion.a href="mailto:fathulkhair393@gmail.com" className="contact-email group/email relative preserve3d" style={{ transform: "translateZ(18px)", transformStyle: "preserve-3d" }} whileHover={r ? undefined : { x: 4, rotateY: 6 }} transition={{ type: "spring", stiffness: 220, damping: 24 }}>
              <span className="inline-flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--canvas)] text-[var(--ink)] transition-colors group-hover/email:bg-[var(--accent-line)]"><Envelope size={14} weight="bold" /></span>fathulkhair393@gmail.com</span>
              <motion.span animate={r ? {} : { x: [0, 3, 0], y: [0, -2, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="grid h-7 w-7 place-items-center rounded-full border border-[var(--canvas)]/30 transition-colors group-hover/email:bg-white group-hover/email:text-[var(--ink)]"><ArrowUpRight size={14} /></motion.span>
            </motion.a>
            <motion.div initial={r ? false : { opacity: 0 }} whileInView={r ? undefined : { opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.45 }} className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs tracking-wide text-white/70 preserve3d" style={{ transform: "translateZ(14px)" }}><MapPin size={12} /> Medan, Indonesia — respon &lt; 24 jam</motion.div>
          </motion.div>
          <motion.aside initial={r ? false : { opacity: 0, x: 20, rotateY: -8 }} whileInView={r ? undefined : { opacity: 1, x: 0, rotateY: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="contact-aside relative preserve3d" style={{ transform: "translateZ(18px)" }}>
            <span className="contact-aside-label flex items-center gap-2"><span className="h-px w-6 bg-white/20" /> Mari terhubung</span>
            <nav aria-label="Media sosial" className="contact-socials">
              {socialLinks.map(({ label, href }, i) => (
                <motion.a key={label} href={href} target="_blank" rel="noreferrer" className="contact-social-link group/link" initial={r ? false : { opacity: 0, x: 12, rotateY: -10 }} whileInView={r ? undefined : { opacity: 1, x: 0, rotateY: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.07 }} whileHover={r ? undefined : { x: 6, rotateY: 8 }}>
                  <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--accent-line)] opacity-60 transition-all group-hover/link:w-3 group-hover/link:opacity-100" />{label}</span>
                  <motion.span whileHover={r ? undefined : { rotate: 15, scale: 1.2, rotateY: 14 }} className="grid h-6 w-6 place-items-center rounded-full border border-white/15 transition-colors group-hover/link:bg-white group-hover/link:text-[var(--ink)] group-hover/link:border-white"><ArrowUpRight size={12} /></motion.span>
                </motion.a>
              ))}
            </nav>
            <motion.a href="#home" className="contact-back group/back preserve3d" style={{ transform: "translateZ(12px)" }} whileHover={r ? undefined : { x: 4, rotateY: 6 }}><span className="grid h-6 w-6 place-items-center rounded-full border border-white/20 transition-colors group-hover/back:bg-white group-hover/back:text-[var(--ink)]"><ArrowDownRight size={12} /></span>Kembali ke atas</motion.a>
          </motion.aside>
          <span aria-hidden className="depth-shadow" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.35), transparent 70%)", opacity: 0.45 }} />
          <motion.div className="footer-glow-bar" initial={r ? false : { scaleX: 0 }} whileInView={r ? undefined : { scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} style={{ originX: 0, transform: "translateZ(20px)" }} aria-hidden />
        </motion.div>

        <motion.div initial={r ? false : { opacity: 0, y: 16 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="footer-directory preserve3d" style={{ transform: "translateZ(6px)" }}>
          <motion.div initial={r ? false : { opacity: 0, y: 12 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="footer-signature preserve3d" style={{ transform: "translateZ(10px)" }}>
            <a href="#home" className="footer-name group inline-flex items-center gap-2 preserve3d" style={{ transform: "translateZ(8px)" }}>Fathul Khair<motion.span animate={r ? {} : { scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)]" /></a>
            <p>Mahasiswa Teknik Informatika di Universitas Sumatera Utara. Tertarik membangun web dan aplikasi yang bermanfaat.</p>
            <motion.span initial={r ? false : { opacity: 0 }} whileInView={r ? undefined : { opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="footer-location inline-flex items-center gap-1.5"><MapPin size={11} /> Medan, Indonesia</motion.span>
          </motion.div>
          <nav aria-label="Jelajahi portofolio" className="footer-link-group">
            <h3>Jelajahi</h3>
            {portfolioLinks.map(({ label, href }, i) => (<motion.a key={href} href={href} initial={r ? false : { opacity: 0, y: 8 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.05 }} whileHover={r ? undefined : { x: 4, color: "var(--accent-ink)", rotateY: 6 }}>{label}</motion.a>))}
          </nav>
          <nav aria-label="Media sosial" className="footer-link-group">
            <h3>Temukan saya</h3>
            {socialLinks.map(({ label, href }, i) => (<motion.a key={label} href={href} target="_blank" rel="noreferrer" initial={r ? false : { opacity: 0, y: 8 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.05 }} whileHover={r ? undefined : { x: 4, color: "var(--accent-ink)", rotateY: 6 }}>{label}<motion.span animate={r ? {} : { x: [0, 2, 0], y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}><ArrowUpRight size={13} /></motion.span></motion.a>))}
            <motion.a href="mailto:fathulkhair393@gmail.com" whileHover={r ? undefined : { x: 3, rotateY: 6 }} className="inline-flex items-center gap-1">Email <ArrowUpRight size={13} /></motion.a>
          </nav>
        </motion.div>

        <motion.div initial={r ? false : { opacity: 0 }} whileInView={r ? undefined : { opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="footer-meta relative overflow-hidden preserve3d" style={{ transform: "translateZ(4px)" }}>
          <motion.div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-line)] to-transparent opacity-40" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} style={{ originX: 0.5 }} />
          <p>© {currentYear} Fathul Khair</p><p className="inline-flex items-center gap-2">Dibuat dengan rasa ingin tahu di Medan.<motion.span animate={r ? {} : { scale: [1, 1.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }} className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)]" /></p>
        </motion.div>
      </div>
    </footer>
  );
}
