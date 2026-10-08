import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, ArrowUpRight, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import profileImage from "../assets/fathul-profile.jpg";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Khair222", icon: GithubLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fathul-khair-070091413", icon: LinkedinLogo },
  { label: "Instagram", href: "https://www.instagram.com/edm.fhl.khair", icon: InstagramLogo },
];
const letters = "Fathul Khair.".split("");
const roles = ["pengalaman digital", "antarmuka elegan", "aplikasi berguna"];

function useTypewriter(words, speed = 90, pause = 1400) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[idx];
    const t = setTimeout(() => {
      if (!del) { if (txt.length < w.length) setTxt(w.slice(0, txt.length + 1)); else setTimeout(() => setDel(true), pause); }
      else { if (txt.length > 0) setTxt(w.slice(0, txt.length - 1)); else { setDel(false); setIdx((v) => (v + 1) % words.length); } }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [txt, del, idx, words, speed, pause]);
  return txt;
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const typed = useTypewriter(roles);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const kickerY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const onCtaMove = (e) => {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    e.currentTarget.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  return (
    <section ref={heroRef} id="home" className="hero-section page-container scroll-mt-20 hero-3d-stage" style={{ perspective: "1300px" }}>
      <motion.div aria-hidden style={reduceMotion ? undefined : { y: bgY, rotate: bgRotate }} className="pointer-events-none absolute right-[-6%] top-[18%] hidden h-[28rem] w-[28rem] rounded-full border border-[var(--accent-line)] opacity-[0.18] lg:block" />
      {/* 3D floating deco */}
      <div aria-hidden className="hero-float-cube float3d-y hidden lg:block" style={{ right: "34%", top: "9%" }}>
        <span className="scene3d-cube" style={{ position: "absolute", inset: 0 }}>
          <i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" /><i className="scene3d-cube-face" />
        </span>
      </div>
      <div aria-hidden className="hero-float-ring hidden lg:block" style={{ right: "28%", top: "14%" }} />
      <div aria-hidden className="hero-float-dot3d hidden lg:block" style={{ right: "31%", top: "62%" }} />
      <div aria-hidden className="hero-float-dot3d hidden lg:block" style={{ right: "6%", top: "44%", width: 7, height: 7, opacity: 0.55 }} />

      <motion.div style={reduceMotion ? undefined : { opacity: copyOpacity, y: kickerY }} className="hero-copy preserve3d">
        <motion.p initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="eyebrow hero-kicker">
          <span className="status-dot animate-pulse-dot" /> Portofolio 2026 <span className="hero-kicker-divider">/</span> Medan, Indonesia
          <motion.span animate={reduceMotion ? {} : { opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="ml-2 hidden h-1 w-1 rounded-full bg-[var(--accent-ink)] sm:inline-block" />
        </motion.p>
        <h1 className="display-heading hero-title preserve3d">
          <motion.span initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} style={{ display: "block" }}>Halo, saya</motion.span>
          <span className="hero-name" aria-label="Fathul Khair." style={{ display: "block", transform: "translateZ(14px)" }}>
            {letters.map((ch, i) => (
              <motion.span key={i} initial={reduceMotion ? false : { opacity: 0, y: 36, rotateX: -30 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.55, delay: 0.18 + i * 0.04, ease: [0.22, 1, 0.36, 1] }} style={{ display: "inline-block", transformOrigin: "bottom" }} whileHover={reduceMotion ? undefined : { y: -4, color: "var(--ink)", rotateX: 10 }}>
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.4 }} className="hero-cursor" aria-hidden>|</motion.span>
          </span>
          <motion.span initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(6px)" }} animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }} className="hero-title-note" style={{ transform: "translateZ(10px)" }}>
            Saya membangun <span className="font-semibold text-[var(--accent-ink)]">{typed}</span>
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="ml-[2px] inline-block h-[1.15em] w-[2px] translate-y-[3px] bg-[var(--accent-ink)]" aria-hidden />
            <span className="block text-sm font-normal tracking-normal opacity-60">yang berguna & menyenangkan dipakai.</span>
          </motion.span>
        </h1>
        <motion.p initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }} className="body-copy hero-description" style={{ transform: "translateZ(6px)" }}>
          Mahasiswa Teknik Informatika di Universitas Sumatera Utara. Tertarik pada pengembangan web, aplikasi mobile, dan desain antarmuka.
        </motion.p>
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }} className="hero-actions preserve3d" style={{ transform: "translateZ(12px)" }}>
          <motion.a href="#projects" className="solid-button hero-cta" onMouseMove={onCtaMove} whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02, rotateX: 6, rotateY: -4 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }} style={{ transformStyle: "preserve-3d" }}>
            <span className="hero-cta-shine" aria-hidden /><span className="hero-cta-glow" aria-hidden />Lihat proyek <ArrowDownRight size={18} weight="bold" />
          </motion.a>
          <motion.a href="#about" className="hero-text-link" whileHover={reduceMotion ? undefined : { x: 4, rotateY: 6 }}>Kenali lebih jauh <motion.span animate={reduceMotion ? {} : { x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }}><ArrowUpRight size={16} /></motion.span></motion.a>
        </motion.div>
        <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={reduceMotion ? undefined : { opacity: 1 }} transition={{ duration: 0.6, delay: 1.15 }} className="hero-socials preserve3d" style={{ transform: "translateZ(8px)" }} aria-label="Media sosial">
          {socialLinks.map(({ label, href, icon: Icon }, i) => (
            <motion.a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="quiet-link hero-social-link" initial={reduceMotion ? false : { opacity: 0, scale: 0.8, rotateY: -18 }} animate={reduceMotion ? undefined : { opacity: 1, scale: 1, rotateY: 0 }} transition={{ delay: 1.2 + i * 0.07, type: "spring", stiffness: 220, damping: 24 }} whileHover={reduceMotion ? undefined : { y: -6, rotateY: -14, rotateX: 10, scale: 1.12, borderColor: "var(--accent-ink)", color: "var(--accent-ink)" }} whileTap={{ scale: 0.92 }} style={{ transformStyle: "preserve-3d" }}>
              <Icon size={19} weight="regular" /><span className="sr-only">{label}</span>
            </motion.a>
          ))}
          <span className="hero-social-caption">Temukan saya di</span>
        </motion.div>
      </motion.div>

      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96, rotate: -1 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={reduceMotion ? undefined : { y: portraitY, scale: portraitScale }} className="hero-visual perspective-wrap">
        <motion.figure
          className="hero-portrait hero-3d-card preserve3d"
          whileHover={reduceMotion ? undefined : { y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
          onMouseMove={(e) => {
            if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
            const r = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            e.currentTarget.style.transform = `perspective(1100px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) translateZ(0)`;
          }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="portrait-index" style={{ transform: "translateZ(36px)" }}><span>01</span><span>—</span><span>04</span></div>
          <div className="portrait-img-wrap" style={{ transform: "translateZ(18px)" }}>
            <img src={profileImage} alt="Fathul Khair di kampus Universitas Sumatera Utara" width="1200" height="1800" fetchPriority="high" className="portrait-image" />
            <motion.div className="portrait-glint" initial={{ x: "-120%" }} animate={{ x: "220%" }} transition={{ duration: 1.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }} aria-hidden />
            <div className="portrait-vignette" aria-hidden /><div className="portrait-noise" aria-hidden />
          </div>
          <figcaption className="portrait-caption" style={{ transform: "translateZ(22px)" }}><span>Di kampus</span><span>Universitas Sumatera Utara</span></figcaption>
          <span aria-hidden className="depth-shadow" style={{ borderRadius: 6 }} />
        </motion.figure>
        <motion.div className="hero-statline preserve3d" style={{ transform: "translateZ(10px)" }} initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}>
          {[{ n: "04", l: "Proyek" }, { n: "02", l: "Sertifikat" }, { n: "USU", l: "Teknik Informatika" }].map((s, i) => (
            <motion.div key={s.l} initial={reduceMotion ? false : { opacity: 0, y: 12, rotateX: -12 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 1.2 + i * 0.08 }} style={{ transformStyle: "preserve-3d" }}><strong>{s.n}</strong><span>{s.l}</span></motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div className="scroll-indicator hidden md:flex preserve3d" style={{ transform: "translateZ(14px)" }} initial={reduceMotion ? false : { opacity: 0, y: -8 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.6 }} aria-hidden>
        <div className="scroll-mouse"><motion.div className="scroll-wheel" animate={reduceMotion ? {} : { y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} /></div>Scroll
      </motion.div>
    </section>
  );
}
