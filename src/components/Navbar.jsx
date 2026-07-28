import { useState, useEffect } from 'react'

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

/* SVG icon components — avoids emoji rendering differences across devices */
function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect y="4"  width="22" height="2" rx="1" fill="currentColor" />
      <rect y="10" width="22" height="2" rx="1" fill="currentColor" />
      <rect y="16" width="22" height="2" rx="1" fill="currentColor" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="2" x2="2"  y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [open,           setOpen]           = useState(false)
  const [activeSection,  setActiveSection]  = useState('')

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
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || open ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        style={(scrolled || open) ? { background: 'rgba(34,40,49,0.97)' } : {}}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <a
            href="#hero"
            className="font-bold text-xl tracking-tight"
            style={{ color: '#00ADB5' }}
            onClick={() => setOpen(false)}
          >
            SSV
          </a>

          {/* Desktop nav links */}
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

          {/* Mobile hamburger/close button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200"
            style={{ color: '#CFCFCF' }}
            onClick={() => setOpen(prev => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <HamburgerIcon />}
          </button>

        </div>
      </nav>

      {/* Mobile full-screen menu overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-300"
        style={{
          background: 'rgba(34,40,49,0.98)',
          backdropFilter: 'blur(12px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          paddingTop: '72px', // clears the navbar bar
        }}
        aria-hidden={!open}
      >
        {/* Divider under navbar */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '8px' }} />

        <nav className="flex flex-col px-6 pt-4 pb-10 overflow-y-auto flex-1">
          {links.map((l, idx) => {
            const isActive = activeSection === l.href.slice(1)
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 font-medium text-base transition-colors duration-200"
                style={{
                  color: isActive ? '#00ADB5' : '#F5F5F5',
                  borderBottom: idx < links.length - 1
                    ? '1px solid rgba(255,255,255,0.06)'
                    : 'none',
                }}
              >
                <span>{l.label}</span>
                {/* Active indicator chevron */}
                {isActive && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3l5 5-5 5" stroke="#00ADB5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            )
          })}

          {/* Bottom accent */}
          <div className="mt-auto pt-8 flex items-center gap-3">
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <span className="text-xs font-mono" style={{ color: '#9CA3AF' }}>SSV © 2026</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>
        </nav>
      </div>
    </>
  )
}
