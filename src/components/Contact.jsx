import { personalInfo } from '../data/portfolioData'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5 md:py-32 md:px-6" style={{ background: '#222831' }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#F5F5F5' }}>Get In Touch</h2>
        <div className="w-16 h-1 mb-10 mx-auto" style={{ background: '#00ADB5' }} />
        <p className="text-base md:text-lg mb-12 leading-relaxed" style={{ color: '#9CA3AF' }}>
          Open to internship opportunities, AI/ML roles, and interesting collaborations.
          Feel free to reach out!
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {[
            { href: `mailto:${personalInfo.email}`, Icon: HiMail,     label: personalInfo.email,             tag: 'a' },
            { Icon: HiPhone,                        label: personalInfo.phone,                                tag: 'div' },
            { href: personalInfo.github,             Icon: SiGithub,   label: 'github.com/sreesaivardhan',    tag: 'a', external: true },
            { href: personalInfo.linkedin,           Icon: FaLinkedin, label: 'linkedin.com/in/saivardhan06', tag: 'a', external: true },
          ].map(({ href, Icon, label, tag, external }) => {
            const baseStyle = {
              background: '#393E46',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#CFCFCF',
            }
            const content = (
              <>
                <Icon className="text-xl" style={{ color: '#00ADB5' }} />
                <span className="text-sm">{label}</span>
              </>
            )
            if (tag === 'a') {
              return (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-center gap-3 rounded-xl p-5 transition-all duration-200"
                  style={baseStyle}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,173,181,0.4)'
                    e.currentTarget.style.color = '#00ADB5'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = '#CFCFCF'
                  }}
                >
                  {content}
                </a>
              )
            }
            return (
              <div
                key={label}
                className="flex items-center justify-center gap-3 rounded-xl p-5"
                style={baseStyle}
              >
                {content}
              </div>
            )
          })}
        </div>

        <p className="text-xs" style={{ color: 'rgba(156,163,175,0.4)' }}>
          Portfolio · Sirasanagandla Sree Sai Vardhan © 2026
        </p>
      </div>
    </section>
  )
}
