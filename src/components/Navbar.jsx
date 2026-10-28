import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'projects',   hash: '#projects'   },
  { label: 'experience', hash: '#experience' },
  { label: 'highlights', hash: '#highlights' },
  { label: 'contact',    hash: '#contact'    },
];

const SECTION_IDS = NAV_LINKS.map(l => l.hash.slice(1));

/* ─── Highlight geometry helper ─────────────────────────────── */
function getHighlight(el) {
  if (!el) return null;
  return { left: el.offsetLeft, width: el.offsetWidth };
}

export default function Navbar() {
  const location  = useLocation();
  const navigate  = useNavigate();

  const [activeId,   setActiveId]   = useState('');
  const [hoverEl,    setHoverEl]    = useState(null); // DOM el being hovered
  const [highlight,  setHighlight]  = useState(null); // {left,width}
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [dropTop,    setDropTop]    = useState(64);   // px from top

  const pillRef    = useRef(null);
  const linksRef   = useRef(null);
  const linkEls    = useRef({});     // hash → <button> DOM node
  const dropRef    = useRef(null);
  const firstLinkRef = useRef(null);

  /* ── Active section via IntersectionObserver ─────────────── */
  useEffect(() => {
    if (location.pathname !== '/') { setActiveId(''); return; }
    const observers = [];
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [location.pathname]);

  /* ── Slide highlight position ────────────────────────────── */
  useEffect(() => {
    const source = hoverEl ?? linkEls.current['#' + activeId] ?? null;
    // Only show the highlight if hovering OR a section is genuinely active
    const show = source && (hoverEl !== null || activeId !== '');
    if (!show) {
      setHighlight(h => h ? { ...h, opacity: 0 } : null);
      return;
    }
    setHighlight({ left: source.offsetLeft, width: source.offsetWidth, opacity: 1 });
  }, [hoverEl, activeId]);

  /* Recalculate on resize */
  useEffect(() => {
    const recalc = () => {
      const source = hoverEl ?? linkEls.current['#' + activeId] ?? null;
      const show = source && (hoverEl !== null || activeId !== '');
      if (source && linksRef.current && show)
        setHighlight({ left: source.offsetLeft, width: source.offsetWidth, opacity: 1 });
    };
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [hoverEl, activeId]);

  /* ── Mobile: compute dropdown top from pill bottom ───────── */
  useEffect(() => {
    const updateTop = () => {
      if (pillRef.current) {
        const { bottom } = pillRef.current.getBoundingClientRect();
        setDropTop(bottom + 8);
      }
    };
    updateTop();
    window.addEventListener('resize', updateTop);
    return () => window.removeEventListener('resize', updateTop);
  }, []);

  /* ── Close mobile menu on route change or resize ─────────── */
  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 780) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ── Close on Escape ─────────────────────────────────────── */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  /* ── Close on outside tap ────────────────────────────────── */
  useEffect(() => {
    if (!menuOpen) return;
    const onPointer = (e) => {
      if (
        pillRef.current && !pillRef.current.contains(e.target) &&
        dropRef.current  && !dropRef.current.contains(e.target)
      ) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [menuOpen]);

  /* ── Move focus to first dropdown link when it opens ─────── */
  useEffect(() => {
    if (menuOpen && firstLinkRef.current) firstLinkRef.current.focus();
  }, [menuOpen]);

  /* ── Navigation handler (works on every route) ──────────── */
  const handleNavClick = useCallback((hash, e) => {
    e?.preventDefault();
    const id = hash.slice(1);
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', hash);
      }
    } else {
      navigate('/' + hash);
    }
    setMenuOpen(false);
  }, [location.pathname, navigate]);

  /* ── Brand click: scroll to top or navigate home ─────────── */
  const handleBrand = useCallback((e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', '/');
    } else {
      navigate('/');
    }
  }, [location.pathname, navigate]);

  const isHome = location.pathname === '/';

  return (
    <>
      {/* Skip link — first focusable element on the page */}
      <a href="#main" className="skip-link">skip to content</a>

      <header>
        <nav aria-label="primary">
          {/* ── Floating pill ──────────────────────────────── */}
          <div className="nav-wrapper" ref={pillRef}>

            {/* Brand */}
            <a
              href="/"
              className="nav-brand"
              onClick={handleBrand}
              aria-label="scroll to top"
            >
              sv<span>.</span>
            </a>

            {/* Desktop links */}
            <div className="nav-links" ref={linksRef}>
              {/* Sliding highlight */}
              {highlight && (
                <span
                  className="nav-highlight"
                  aria-hidden="true"
                  style={{
                    width:   highlight.width + 'px',
                    transform: `translateX(${highlight.left}px)`,
                    opacity: highlight.opacity,
                  }}
                />
              )}

              {NAV_LINKS.map(({ label, hash }) => {
                const id = hash.slice(1);
                const isActive = isHome && activeId === id;
                return (
                  <button
                    key={hash}
                    ref={el => { linkEls.current[hash] = el; }}
                    className={'nav-link' + (isActive ? ' is-active' : '')}
                    onClick={e => handleNavClick(hash, e)}
                    onMouseEnter={e => setHoverEl(e.currentTarget)}
                    onMouseLeave={() => setHoverEl(null)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="nav-menu-btn"
              aria-label={menuOpen ? 'close menu' : 'open menu'}
              aria-expanded={menuOpen}
              aria-controls="nav-dropdown"
              onClick={() => setMenuOpen(o => !o)}
            >
              {menuOpen ? 'close' : 'menu'}
            </button>
          </div>

          {/* ── Mobile dropdown ────────────────────────────── */}
          <div
            id="nav-dropdown"
            ref={dropRef}
            className={'nav-dropdown' + (menuOpen ? ' is-open' : '')}
            style={{ top: dropTop + 'px' }}
            aria-hidden={!menuOpen}
          >
            {NAV_LINKS.map(({ label, hash }, i) => {
              const id = hash.slice(1);
              const isActive = isHome && activeId === id;
              return (
                <button
                  key={hash}
                  ref={i === 0 ? firstLinkRef : undefined}
                  className={'nav-dropdown-link' + (isActive ? ' is-active' : '')}
                  onClick={e => handleNavClick(hash, e)}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}
