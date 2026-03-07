import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
        <div className="w-16 h-1 bg-cyan-400 mb-12"></div>
        <div className="space-y-6">
          {experience.map((job, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/40 transition-colors">
              <div className="flex flex-wrap justify-between items-start mb-5">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <p className="text-cyan-400 font-semibold mt-1">{job.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-slate-400 text-sm">{job.duration}</p>
                  <p className="text-slate-500 text-xs mt-1">{job.type}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {job.points.map((pt, j) => (
                  <li key={j} className="flex gap-3 text-slate-300 text-sm">
                    <span className="text-cyan-400 flex-shrink-0 mt-0.5">▸</span>
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
