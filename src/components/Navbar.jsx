import { useState, useEffect, useRef } from 'react'

const links = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Achievements',   href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
]

const sectionIds = links.map(l => l.href.slice(1))

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [open, setOpen]                 = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers = []
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur shadow-lg'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(34,40,49,0.97)' } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#hero"
          className="font-bold text-xl tracking-tight transition-colors"
          style={{ color: '#00ADB5' }}
        >
          SSV
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map(l => {
            const isActive = activeSection === l.href.slice(1)
            return (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium transition-all duration-200 pb-0.5"
                style={{
                  color: isActive ? '#00ADB5' : '#CFCFCF',
                  borderBottom: isActive ? '1.5px solid #00ADB5' : '1.5px solid transparent',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#00ADB5' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#CFCFCF' }}
              >
                {l.label}
              </a>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-xl transition-colors"
          style={{ color: '#CFCFCF' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ background: '#393E46' }}
        >
          {links.map(l => {
            const isActive = activeSection === l.href.slice(1)
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium transition-colors"
                style={{ color: isActive ? '#00ADB5' : '#CFCFCF' }}
              >
                {l.label}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}
