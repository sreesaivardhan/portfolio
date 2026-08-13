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
      className="min-h-screen flex items-center justify-center px-5 md:px-6 pt-20 md:pt-32"
      style={{ background: '#222831' }}
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <p className="text-sm font-mono tracking-widest mb-4" style={{ color: '#00ADB5' }}>
          HI, I'M
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#F5F5F5' }}>
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

        <p className="text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed whitespace-normal md:whitespace-nowrap" style={{ color: '#9CA3AF' }}>
          {personalInfo.tagline}
        </p>

        {/*
          Button layout:
          • Mobile  → stack vertically, each button full-width
          • Desktop → side by side in a row
          All three buttons share identical dimensions (py-3.5, same font/radius).
        */}
        <div className="flex flex-col md:flex-row md:flex-nowrap md:justify-center gap-4 w-full max-w-sm md:max-w-none mx-auto">

          {/* ── PRIMARY CTA ── */}
          <a
            href="#projects"
            className="flex items-center justify-center w-full md:w-auto px-6 py-3 md:px-8 md:py-3.5 text-base font-semibold rounded-lg transition-all duration-200 text-center"
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

          {/* ── SECONDARY CTA — Contact Me ── */}
          <a
            href="#contact"
            className="flex items-center justify-center w-full md:w-auto px-6 py-3 md:px-8 md:py-3.5 text-base font-semibold rounded-lg transition-all duration-200 text-center"
            style={{ background: '#00ADB5', color: '#F5F5F5' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0BC5D1' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#00ADB5' }}
          >
            Contact Me
          </a>

          {/* ── SECONDARY CTA — Download Resume ── */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full md:w-auto px-6 py-3 md:px-8 md:py-3.5 text-base font-semibold rounded-lg transition-all duration-200 text-center"
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