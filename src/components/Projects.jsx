import { useState } from 'react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 px-6 bg-slate-800/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <div className="w-16 h-1 bg-cyan-400 mb-8"></div>

        <div className="flex gap-3 mb-10">
          {['All', 'AI', 'Web'].map(f => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === f
                  ? 'bg-cyan-500 text-slate-900'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-cyan-400 text-xs font-semibold tracking-wider mb-1">
                    {p.subtitle.toUpperCase()}
                  </p>
                  <h3 className="text-white font-bold text-lg leading-tight">{p.title}</h3>
                </div>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-xl ml-2 flex-shrink-0">
                    ↗
                  </a>
                )}
              </div>

              {p.highlight && (
                <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg px-3 py-1.5 mb-3">
                  <p className="text-cyan-400 text-xs font-semibold">🏆 {p.highlight}</p>
                </div>
              )}

              <p className="text-slate-400 text-sm leading-relaxed flex-grow">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs bg-slate-700 text-slate-400 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
