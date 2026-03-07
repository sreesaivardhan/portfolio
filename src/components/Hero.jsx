import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-cyan-400 text-sm font-mono tracking-widest mb-4">HI, I'M</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Sree Sai Vardhan</h1>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {personalInfo.roles.map(r => (
            <span key={r} className="px-4 py-1.5 border border-cyan-400/50 text-cyan-400 text-sm rounded-full">
              {r}
            </span>
          ))}
        </div>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-colors">
            View Projects
          </a>
          <a href="#contact"
            className="px-8 py-3 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
