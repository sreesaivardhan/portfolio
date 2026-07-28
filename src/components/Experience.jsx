import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6" style={{ background: '#222831' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#F5F5F5' }}>Experience</h2>
        <div className="w-16 h-1 mb-14" style={{ background: '#00ADB5' }} />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <div
              key={i}
              className="rounded-2xl p-10 transition-colors duration-200"
              style={{ background: '#393E46', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,173,181,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              <div className="flex flex-wrap justify-between items-start mb-7">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#F5F5F5' }}>{job.title}</h3>
                  <p className="font-semibold mt-1.5" style={{ color: '#00ADB5' }}>{job.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-sm" style={{ color: '#9CA3AF' }}>{job.duration}</p>
                  <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>{job.type}</p>
                </div>
              </div>

              <ul className="space-y-4">
                {job.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#CFCFCF' }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: '#00ADB5' }}>▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
