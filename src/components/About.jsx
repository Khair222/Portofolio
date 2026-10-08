import { motion, useReducedMotion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight, Code, GraduationCap, Laptop } from "@phosphor-icons/react";
import { useRef } from "react";

const journey = [
  { icon: GraduationCap, title: "Pendidikan", detail: "Teknik Informatika, Universitas Sumatera Utara", description: "Mempelajari pemrograman dan pengembangan perangkat lunak." },
  { icon: Code, title: "Proyek web", detail: "TalkLab Edukasi dan SIAKAD Universitas", description: "Membuat platform edukasi dan sistem informasi akademik." },
  { icon: Laptop, title: "Proyek aplikasi", detail: "Bot Asisten AI dan Booking Lapangan", description: "Mengerjakan chatbot dan aplikasi mobile pemesanan lapangan." },
];

function SplitText({ text, delay = 0, r }) {
  return (
    <span aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span key={i} initial={r ? false : { opacity: 0, y: 20, rotateX: -35 }} whileInView={r ? undefined : { opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ delay: delay + i * 0.022, duration: 0.5, ease: [0.22, 1, 0.36, 1] }} style={{ display: "inline-block", transformOrigin: "bottom" }}>
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function About() {
  const r = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const lineScale = useSpring(useTransform(scrollYProgress, [0, 0.35], [0, 1]), { stiffness: 120, damping: 20 });
  const cubeY = useTransform(scrollYProgress, [0, 1], [0, -28]);

  return (
    <section ref={ref} id="about" className="page-section section-rule scroll-mt-20 overflow-hidden relative" style={{ perspective: "1200px" }}>
      <motion.div aria-hidden style={r ? undefined : { rotate: bgRotate }} className="pointer-events-none absolute -right-20 top-10 hidden h-56 w-56 rounded-full border border-[var(--accent-line)] opacity-[0.12] lg:block" />
      <motion.div aria-hidden style={r ? undefined : { y: cubeY }} className="hero-float-cube float3d-y hidden lg:block" style2={{ left: "5%", top: "36%" }}>
        <div className="hero-float-cube float3d-y hidden lg:block" style={{ left: "5%", top: "36%", width: 38, height: 38, opacity: 0.5 }}>
          <span className="scene3d-cube" style={{ position: "absolute", inset: 0 }}>
            <i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" />
          </span>
        </div>
      </motion.div>
      <div aria-hidden className="hero-float-ring hidden lg:block" style={{ left: "42%", top: "8%", width: 88, height: 88, opacity: 0.22 }} />
      <div className="page-container preserve3d">
        <div className="about-intro preserve3d">
          <motion.div initial={r ? false : { opacity: 0, y: 28, filter: "blur(8px)", rotateX: 10 }} whileInView={r ? undefined : { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="about-heading" style={{ transformStyle: "preserve-3d", transform: "translateZ(0)" }}>
            <motion.p initial={r ? false : { opacity: 0, x: -12 }} whileInView={r ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="eyebrow mb-4 flex items-center gap-2" style={{ transform: "translateZ(18px)" }}>
              <motion.span animate={r ? {} : { scale: [1, 1.3, 1] }} transition={{ duration: 1.8, repeat: Infinity }} className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)]" /> 01 / Profil
            </motion.p>
            <h2 className="section-heading" style={{ transform: "translateZ(26px)" }}><SplitText text="Tentang saya" delay={0.12} r={r} /></h2>
            <motion.p initial={r ? false : { opacity: 0, y: 10, filter: "blur(4px)" }} whileInView={r ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ delay: 0.55, duration: 0.6 }} className="about-heading-note" style={{ transform: "translateZ(14px)" }}>Rasa ingin tahu, diterjemahkan menjadi karya.</motion.p>
            <motion.div initial={r ? false : { scaleX: 0 }} whileInView={r ? undefined : { scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ originX: 0, height: 2, background: "var(--accent-line)", marginTop: "1.2rem", transform: "translateZ(8px)" }} />
            <motion.div aria-hidden initial={{ x: "-100%" }} whileInView={{ x: "200%" }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="pointer-events-none -mt-[2px] h-[2px] w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </motion.div>

          <motion.div initial={r ? false : { opacity: 0, y: 24, rotateX: 8 }} whileInView={r ? undefined : { opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="about-copy preserve3d" style={{ transformStyle: "preserve-3d" }}>
            <motion.p initial={r ? false : { opacity: 0, y: 16 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="about-lead" style={{ transform: "translateZ(12px)" }}>Saya Fathul Khair, mahasiswa Teknik Informatika di Universitas Sumatera Utara. Saya tertarik pada pemrograman dan desain, lalu menerapkannya dalam proyek web dan aplikasi.</motion.p>
            <motion.p initial={r ? false : { opacity: 0, y: 16 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }} className="body-copy" style={{ transform: "translateZ(6px)" }}>Bagi saya, teknologi yang baik perlu menjawab kebutuhan dan terasa mudah digunakan. Setiap proyek menjadi ruang untuk belajar dan mengembangkan kemampuan.</motion.p>
            <motion.a href="#experience" className="quiet-link about-more group" whileHover={r ? undefined : { x: 6, rotateY: 6 }} whileTap={{ scale: 0.97 }} style={{ transform: "translateZ(16px)", display: "inline-flex" }}>Lihat fokus saya<motion.span animate={r ? {} : { x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--line)] group-hover:border-[var(--accent-ink)] group-hover:text-[var(--accent-ink)] transition-colors"><ArrowUpRight size={13} /></motion.span></motion.a>
            <motion.div className="mt-6 flex gap-1.5" initial={r ? false : { opacity: 0 }} whileInView={r ? undefined : { opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} style={{ transform: "translateZ(10px)" }}>
              {[0, 1, 2].map((i) => (<motion.span key={i} animate={r ? {} : { scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.6, delay: i * 0.2, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)]" />))}<span className="ml-2 text-[0.65rem] font-mono tracking-widest text-[var(--muted)]">BELAJAR · BANGUN · ULANGI</span>
            </motion.div>
          </motion.div>
        </div>

        <div id="experience" className="about-journey scroll-mt-24 relative perspective-wrap" style={{ perspective: "1100px" }}>
          <motion.div aria-hidden className="pointer-events-none absolute left-0 top-0 hidden h-full w-[2px] origin-top bg-[var(--accent-ink)] opacity-20 lg:block" style={r ? undefined : { scaleY: lineScale }} />
          <motion.div initial={r ? false : { opacity: 0, y: 20 }} whileInView={r ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="journey-title preserve3d" style={{ transform: "translateZ(10px)" }}>
            <p className="eyebrow flex items-center gap-2"><span className="h-px w-6 bg-[var(--accent-line)]" /> Cara saya bertumbuh</p>
            <h3 className="font-serif text-2xl" style={{ overflow: "hidden", transform: "translateZ(14px)" }}><motion.span initial={r ? false : { y: "100%" }} whileInView={r ? undefined : { y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} style={{ display: "inline-block" }}>Fokus saya</motion.span></h3>
            <motion.div initial={r ? false : { scaleX: 0 }} whileInView={r ? undefined : { scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7 }} style={{ originX: 0, width: "100%", height: 2, background: "var(--accent-ink)", opacity: 0.2 }} />
            <motion.p initial={r ? false : { opacity: 0 }} whileInView={r ? undefined : { opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }} className="text-sm leading-relaxed text-[var(--muted)]">Tiga pilar yang ngebentuk cara saya kerja — dari kelas sampai produk.</motion.p>
          </motion.div>

          <div className="journey-list perspective-wrap" style={{ perspective: "1000px" }}>
            {journey.map(({ icon: Icon, title, detail, description }, index) => (
              <motion.article
                key={title}
                initial={r ? false : { opacity: 0, y: 26, scale: 0.97, rotateX: 10 }}
                whileInView={r ? undefined : { opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="journey-item card3d group relative overflow-hidden preserve3d"
                style={{ borderColor: "var(--line)", transformStyle: "preserve-3d" }}
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
                <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(520px circle at var(--mx,50%) 50%, color-mix(in srgb, var(--accent-ink) 7%, transparent), transparent 62%)" }} />
                <div className="journey-heading relative" style={{ transform: "translateZ(18px)" }}>
                  <motion.span initial={r ? false : { opacity: 0 }} whileInView={r ? undefined : { opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + index * 0.12 }} className="journey-number">0{index + 1}</motion.span>
                  <motion.span whileHover={r ? undefined : { rotate: 12, scale: 1.15 }} animate={r ? {} : { y: [0, -3, 0] }} transition={r ? {} : { duration: 2.4, delay: index * 0.4, repeat: Infinity, ease: "easeInOut" }} className="grid h-9 w-9 place-items-center rounded-full border bg-[var(--surface)] transition-colors group-hover:border-[var(--accent-line)] group-hover:bg-[var(--accent-bg)]" style={{ borderColor: "var(--line)", transform: "translateZ(22px)" }}>
                    <Icon size={18} weight="regular" style={{ color: "var(--accent-ink)" }} />
                  </motion.span>
                </div>
                <div className="relative card3d-content" style={{ transform: "translateZ(14px)" }}>
                  <h4 className="journey-item-title flex items-center gap-2" style={{ transform: "translateZ(10px)" }}>{title}<motion.span className="hidden h-px flex-1 bg-[var(--line)] opacity-0 transition-all group-hover:opacity-100 lg:block" /></h4>
                  <p className="journey-detail">{detail}</p>
                  <p className="journey-description">{description}</p>
                </div>
                <span aria-hidden className="depth-shadow" style={{ borderRadius: 0 }} />
                <motion.div className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[var(--accent-ink)] to-[var(--accent-line)]" initial={{ scaleX: 0 }} whileInView={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} style={{ originX: 0, transform: "translateZ(20px)" }} transition={{ duration: 0.35 }} aria-hidden />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
