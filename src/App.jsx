import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
    </div>
  )
}
