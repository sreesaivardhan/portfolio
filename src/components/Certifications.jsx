import { certifications } from '../data/portfolioData'
import { SiGooglecloud } from 'react-icons/si'
import { FaAws, FaCloud } from 'react-icons/fa'

const certStyle = {
  aws:    { color: "text-orange-400 bg-orange-400/10 border-orange-400/30", Icon: FaAws },
  google: { color: "text-blue-400 bg-blue-400/10 border-blue-400/30",       Icon: SiGooglecloud },
  ibm:    { color: "text-sky-300 bg-sky-300/10 border-sky-300/30",           Icon: FaCloud },
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-slate-800/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Certifications</h2>
        <div className="w-16 h-1 bg-cyan-400 mb-12"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => {
            const { color, Icon } = certStyle[c.badge]
            return (
              <div key={i} className={`rounded-xl p-5 border ${color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="text-2xl" />
                  <span className="text-xs font-bold tracking-widest">{c.issuer.toUpperCase()}</span>
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-2">{c.title}</h3>
                <p className="text-slate-500 text-xs">{c.date}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
