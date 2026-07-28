import { personalInfo, education } from '../data/portfolioData'
import { SiGithub, SiLeetcode } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail, HiDownload, HiLocationMarker } from 'react-icons/hi'

const RESUME_URL =
  'https://drive.google.com/file/d/1s0HLk6gllwWTVubSWbzGserEtUYJPV3_/view?usp=drive_link'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-32 px-6"
      style={{ background: '#222831' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#F5F5F5' }}>About Me</h2>
        <div className="w-16 h-1 mb-14" style={{ background: '#00ADB5' }} />

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left — bio */}
          <div>
            <p className="text-xs font-mono tracking-widest mb-2" style={{ color: '#00ADB5' }}>NAME</p>
            <h3 className="text-2xl font-bold mb-8 leading-snug" style={{ color: '#F5F5F5' }}>
              Sirasanagandla<br />Sree Sai Vardhan
            </h3>

            <p className="text-base leading-relaxed mb-5" style={{ color: '#CFCFCF' }}>
              I'm a Full Stack Developer and AI enthusiast passionate about building scalable
              applications that solve real-world problems. My interests span machine learning,
              backend systems, cloud technologies, and modern web development.
            </p>

            <p className="text-base leading-relaxed mb-5" style={{ color: '#9CA3AF' }}>
              I've built projects across medical imaging AI, financial fraud detection, GenAI
              applications, IoT-enabled deep learning, and secure cloud-native systems, with a
              focus on production-ready software and measurable impact.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm mb-8" style={{ color: '#9CA3AF' }}>
              <HiLocationMarker style={{ color: '#00ADB5' }} className="text-base flex-shrink-0" />
              <span>Hyderabad, Telangana, India</span>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-5">
              {[
                { href: personalInfo.github,            Icon: SiGithub,   label: 'GitHub' },
                { href: personalInfo.linkedin,          Icon: FaLinkedin, label: 'LinkedIn' },
                { href: personalInfo.leetcode,          Icon: SiLeetcode, label: 'LeetCode' },
                { href: `mailto:${personalInfo.email}`, Icon: HiMail,     label: 'Email' },
                { href: RESUME_URL,                     Icon: HiDownload, label: 'Resume', external: true },
              ].map(({ href, Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external || label !== 'Email' ? '_blank' : undefined}
                  rel={external || label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: '#CFCFCF' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#00ADB5'}
                  onMouseLeave={e => e.currentTarget.style.color = '#CFCFCF'}
                >
                  <Icon className="text-lg" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — education card */}
          <div>
            <div
              className="rounded-2xl p-8"
              style={{ background: '#393E46', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="font-semibold text-xs tracking-widest mb-5" style={{ color: '#00ADB5' }}>
                EDUCATION
              </p>
              <p className="font-bold text-lg" style={{ color: '#F5F5F5' }}>
                {education.university}
              </p>
              <p className="mt-1.5 text-sm" style={{ color: '#CFCFCF' }}>
                {education.degree}
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: '#9CA3AF' }}>CGPA</span>
                  <span className="font-bold" style={{ color: '#00ADB5' }}>{education.cgpa}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#9CA3AF' }}>Graduation</span>
                  <span style={{ color: '#CFCFCF' }}>{education.graduation}</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs tracking-wider mb-4" style={{ color: '#9CA3AF' }}>
                  RELEVANT COURSEWORK
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map(c => (
                    <span
                      key={c}
                      className="text-xs px-2.5 py-1 rounded"
                      style={{ background: 'rgba(255,255,255,0.06)', color: '#CFCFCF' }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}