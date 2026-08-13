import { certifications } from '../data/portfolioData'
import { SiGooglecloud } from 'react-icons/si'
import { FaAws, FaCloud, FaExternalLinkAlt } from 'react-icons/fa'

const certStyle = {
  aws:    { color: 'text-orange-400', bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.25)',  Icon: FaAws },
  google: { color: 'text-blue-400',   bg: 'rgba(96,165,250,0.08)',  border: 'rgba(96,165,250,0.25)',  Icon: SiGooglecloud },
  ibm:    { color: 'text-sky-300',    bg: 'rgba(125,211,252,0.08)', border: 'rgba(125,211,252,0.25)', Icon: FaCloud },
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-5 md:py-32 md:px-6" style={{ background: '#222831' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#F5F5F5' }}>Certifications</h2>
        <div className="w-16 h-1 mb-14" style={{ background: '#00ADB5' }} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => {
            const { color, bg, border, Icon } = certStyle[c.badge]
            return (
              <div
                key={i}
                className="rounded-xl p-6 flex flex-col"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                {/* Header row */}
                <div className="flex items-center gap-2 mb-4">
                  <Icon className={`text-2xl ${color}`} />
                  <span className={`text-xs font-bold tracking-widest ${color}`}>
                    {c.issuer.toUpperCase()}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-sm leading-snug mb-3 flex-1" style={{ color: '#F5F5F5' }}>
                  {c.title}
                </h3>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-3">
                  <p className="text-xs" style={{ color: '#9CA3AF' }}>{c.date}</p>

                  {c.verify ? (
                    <a
                      href={c.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 text-xs font-medium transition-opacity hover:opacity-80 ${color}`}
                      title="Verify certificate"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Verify
                    </a>
                  ) : (
                    <span
                      className="flex items-center gap-1 text-xs cursor-default select-none"
                      style={{ color: 'rgba(156,163,175,0.4)' }}
                      title="Verification link coming soon"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Verify
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
