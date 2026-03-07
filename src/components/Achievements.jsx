import { achievements } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Achievements & Leadership</h2>
        <div className="w-16 h-1 bg-cyan-400 mb-12"></div>
        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{a.icon}</span>
                <div>
                  <h3 className="text-white font-bold leading-snug">{a.title}</h3>
                  <p className="text-cyan-400 text-sm mt-0.5">{a.org}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{a.duration}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {a.points.map((pt, j) => (
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
