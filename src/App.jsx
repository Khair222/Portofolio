import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Extras from "./components/Extras";
import Footer from "./components/Footer";
import PageEffects from "./components/PageEffects";

function App() {
  const [theme, setTheme] = useState(() => (
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  ));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="portfolio-shell">
      <PageEffects />
      <a href="#home" className="skip-link">Lewati ke konten utama</a>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Extras />
      </main>
      <Footer />
    </div>
  );
}

export default App;
