import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

const RESUME_URL =
  'https://drive.google.com/file/d/1s0HLk6gllwWTVubSWbzGserEtUYJPV3_/view?usp=drive_link'

export default function Hero() {
  const roles = personalInfo.roles
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const delay = deleting ? 45 : 90

    if (!deleting && charIndex === currentRole.length) {
      const t = setTimeout(() => setDeleting(true), 1600)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(prev => (prev + 1) % roles.length)
      return
    }

    const t = setTimeout(() => {
      setDisplayed(currentRole.slice(0, charIndex + (deleting ? -1 : 1)))
      setCharIndex(prev => prev + (deleting ? -1 : 1))
    }, delay)

    return () => clearTimeout(t)
  }, [charIndex, deleting, roleIndex, roles])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
      style={{ background: '#222831' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-mono tracking-widest mb-4" style={{ color: '#00ADB5' }}>
          HI, I'M
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#F5F5F5' }}>
          Sree Sai Vardhan
        </h1>

        {/* Typing role pill */}
        <div className="flex justify-center mb-6 min-h-[2.5rem]">
          <span
            className="px-5 py-2 text-sm rounded-full font-medium inline-flex items-center"
            style={{ border: '1px solid rgba(0,173,181,0.5)', color: '#00ADB5' }}
          >
            {displayed}
            <span className="typing-cursor" />
          </span>
        </div>

        <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: '#9CA3AF' }}>
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Primary CTA */}
          <a
            href="#projects"
            className="px-8 py-3.5 font-semibold rounded-lg transition-all duration-200"
            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#F5F5F5' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,173,181,0.12)'
              e.currentTarget.style.borderColor = '#00ADB5'
              e.currentTarget.style.color = '#00ADB5'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.color = '#F5F5F5'
            }}
          >
            Explore My Work
          </a>

          {/* Secondary CTA — Contact Me */}
          <a
            href="#contact"
            className="px-8 py-3.5 font-semibold rounded-lg transition-all duration-200"
            style={{ background: '#00ADB5', color: '#F5F5F5' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0BC5D1' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#00ADB5' }}
          >
            Contact Me
          </a>

          {/* Secondary CTA — Download Resume */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 font-semibold rounded-lg transition-all duration-200"
            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: '#F5F5F5' }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,173,181,0.12)'
              e.currentTarget.style.borderColor = '#00ADB5'
              e.currentTarget.style.color = '#00ADB5'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              e.currentTarget.style.color = '#F5F5F5'
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
