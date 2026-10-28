import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SkillsStrip from '../components/SkillsStrip';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  // Hash-based smooth scroll on mount / hash change
  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <SkillsStrip />
        <section id="projects"   className="section"><Projects /></section>
        <section id="experience" className="section"><Experience /></section>
        <section id="highlights" className="section"><Highlights /></section>
      </main>
      <Footer id="contact" />
    </>
  );
}
