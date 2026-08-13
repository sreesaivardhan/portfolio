import { useState } from 'react'
import { projects } from '../data/portfolioData'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { FaTrophy } from 'react-icons/fa'

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-32 px-6" style={{ background: '#222831' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#F5F5F5' }}>Projects</h2>
        <div className="w-16 h-1 mb-14" style={{ background: '#00ADB5' }} />

        <div className="flex gap-3 mb-12">
          {['All', 'AI', 'Web'].map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={active === f
                ? { background: '#00ADB5', color: '#222831' }
                : { background: 'rgba(255,255,255,0.07)', color: '#CFCFCF' }
              }
              onMouseEnter={e => { if (active !== f) e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
              onMouseLeave={e => { if (active !== f) e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-all duration-200"
              style={{ background: '#393E46', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,173,181,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              {/* Title row with GitHub + Globe icons top-right */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs font-semibold tracking-wider mb-1" style={{ color: '#00ADB5' }}>
                    {p.subtitle.toUpperCase()}
                  </p>
                  <h3 className="font-bold text-lg leading-tight" style={{ color: '#F5F5F5' }}>{p.title}</h3>
                </div>

                {/* Icon cluster top-right */}
                <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="transition-colors duration-200"
                      style={{ color: '#CFCFCF' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#00ADB5'}
                      onMouseLeave={e => e.currentTarget.style.color = '#CFCFCF'}
                      title="View Source">
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="transition-colors duration-200"
                      style={{ color: '#CFCFCF' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#00ADB5'}
                      onMouseLeave={e => e.currentTarget.style.color = '#CFCFCF'}
                      title="Live Demo">
                      <FaGlobe className="text-xl" />
                    </a>
                  )}
                </div>
              </div>

              {p.highlight && (
                <div
                  className="rounded-lg px-3 py-1.5 mb-3"
                  style={{ background: 'rgba(0,173,181,0.1)', border: '1px solid rgba(0,173,181,0.2)' }}
                >
                  <p className="flex items-center gap-2 text-xs font-semibold" style={{ color: '#00ADB5' }}>
                    <FaTrophy className="text-[11px] flex-shrink-0" />
                    <span>{p.highlight}</span>
                  </p>
                </div>
              )}

              <p className="text-sm leading-relaxed flex-grow" style={{ color: '#9CA3AF' }}>{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.06)', color: '#9CA3AF' }}
                  >
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