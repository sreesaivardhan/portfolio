import { achievements } from '../data/portfolioData'
import { FaUserTie, FaMedal, FaFileAlt, FaTrophy } from 'react-icons/fa'

const iconMap = {
  leadership:  FaUserTie,
  medal:       FaMedal,
  certificate: FaFileAlt,
  trophy:      FaTrophy,
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-5 md:py-32 md:px-6" style={{ background: '#222831' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#F5F5F5' }}>Achievements &amp; Leadership</h2>
        <div className="w-16 h-1 mb-14" style={{ background: '#00ADB5' }} />

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((a, i) => {
            const Icon = iconMap[a.icon] || FaTrophy
            return (
              <div
                key={i}
                className="rounded-2xl p-6 md:p-8 transition-colors duration-200"
                style={{ background: '#393E46', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,173,181,0.35)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                <div className="flex items-start gap-5 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,173,181,0.12)', border: '1px solid rgba(0,173,181,0.2)' }}
                  >
                    <Icon className="text-xl" style={{ color: '#00ADB5' }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-snug" style={{ color: '#F5F5F5' }}>{a.title}</h3>
                    <p className="text-sm mt-1" style={{ color: '#00ADB5' }}>{a.org}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{a.duration}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {a.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#CFCFCF' }}>
                      <span className="flex-shrink-0 mt-0.5" style={{ color: '#00ADB5' }}>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}