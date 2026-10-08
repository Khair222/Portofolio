import { motion, AnimatePresence, useReducedMotion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";
import { List, Moon, Sun, X } from "@phosphor-icons/react";

const links = [
  { label: "Tentang", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Perjalanan", href: "#experience" },
  { label: "Keahlian", href: "#skills" },
  { label: "Sertifikat", href: "#achievements" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("#home");
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
    // auto-hide on scroll down, show on scroll up
    if (v > 400) {
      const prev = scrollY.getPrevious() ?? 0;
      setHidden(v > prev && v - prev > 4);
    } else setHidden(false);
  });

  useEffect(() => {
    const ids = ["#home", ...links.map((l) => l.href), "#contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.querySelector(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: hidden ? -80 : 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md nav-shell ${scrolled ? "nav-scrolled" : ""}`}
      style={{
        backgroundColor: scrolled ? "color-mix(in srgb, var(--canvas) 88%, transparent)" : "color-mix(in srgb, var(--canvas) 92%, transparent)",
        borderColor: "var(--line)",
      }}
    >
      {/* active progress line under header */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 h-[1.5px] bg-[var(--accent-ink)]"
        style={{ width: scrolled ? "100%" : "0%", opacity: scrolled ? 0.35 : 0 }}
        transition={{ duration: 0.4 }}
      />
      <div className="page-container flex h-16 items-center justify-between gap-6">
        <motion.a
          href="#home"
          className="font-serif text-lg font-semibold tracking-tight"
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {"Fathul Khair".split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: i * 0.018, duration: 0.4 }}
              style={{ display: "inline-block" }}
            >
              {ch === " " ? " " : ch}
            </motion.span>
          ))}
          <motion.span className="nav-logo-dot" animate={reduceMotion ? {} : { scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }} transition={{ duration: 1.8, repeat: Infinity }} aria-hidden>
            ·
          </motion.span>
        </motion.a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 lg:flex">
          {links.map((item, i) => {
            const isActive = active === item.href;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                className={`quiet-link nav-link text-sm font-medium ${isActive ? "nav-link-active" : ""}`}
                initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -1 }}
                style={{ color: isActive ? "var(--accent-ink)" : undefined }}
              >
                {item.label}
                <span className="nav-link-underline" aria-hidden />
                {isActive && (
                  <motion.span layoutId="nav-dot" className="absolute -top-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent-ink)]" />
                )}
              </motion.a>
            );
          })}
          <motion.a href="#contact" className="nav-contact relative overflow-hidden" whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <motion.span className="absolute inset-0 bg-[var(--ink)]" initial={{ x: "-100%" }} whileHover={{ x: "0%" }} transition={{ duration: 0.3 }} aria-hidden style={{ opacity: 0.08 }} />
            Kontak
          </motion.a>
          <motion.button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Gunakan tema terang" : "Gunakan tema gelap"}
            aria-pressed={theme === "light"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors"
            style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
            whileHover={reduceMotion ? undefined : { rotate: 12, scale: 1.08 }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -30, scale: 0.7, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 30, scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ display: "grid", placeItems: "center" }}
              >
                {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </nav>

        <motion.button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden"
          style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.92 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={isMenuOpen ? "x" : "list"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              {isMenuOpen ? <X weight="bold" size={24} /> : <List weight="bold" size={24} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Navigasi utama"
            className="absolute inset-x-0 top-full flex flex-col gap-4 border-b px-6 py-4 lg:hidden"
            style={{ backgroundColor: "var(--canvas)", borderColor: "var(--line)" }}
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="quiet-link text-sm font-medium"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{ color: active === item.href ? "var(--accent-ink)" : undefined }}
              >
                {item.label}
              </motion.a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="quiet-link text-sm font-semibold">Kontak</a>
            <button type="button" onClick={onToggleTheme} aria-label={theme === "dark" ? "Gunakan tema terang" : "Gunakan tema gelap"} className="inline-flex items-center gap-2 text-left text-sm font-medium" style={{ color: "var(--ink-soft)" }}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />} {theme === "dark" ? "Gunakan tema terang" : "Gunakan tema gelap"}
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
