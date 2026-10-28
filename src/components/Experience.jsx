import { experience } from '../data/experience';
import Reveal from './Reveal';
import './Experience.css';

/* ── App name links in bullet 0 of Unified Mentor ───────── */
const APP_LINKS = [
  { name: 'SecureGov',  href: 'https://securegov.netlify.app'                 },
  { name: 'MediCore',   href: 'https://mediicore.netlify.app'                  },
  { name: 'ChatChime',  href: 'https://chat-chimes.netlify.app'                },
  { name: 'LensLore',   href: 'https://virtual-gallery-gamma-woad.vercel.app'  },
];

/**
 * Split a bullet string on known app names and replace each match with
 * a React link element. Returns an array of strings and elements.
 */
function linkifyBullet(text) {
  // Build a regex from the app names in order of appearance
  const pattern = new RegExp(`(${APP_LINKS.map(a => a.name).join('|')})`, 'g');
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    const app = APP_LINKS.find(a => a.name === part);
    if (app) {
      return (
        <a
          key={i}
          href={app.href}
          className="exp-app-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

/* ── Single timeline card ────────────────────────────────── */
function ExperienceCard({ entry, delay }) {
  const isIncoming = entry.status === 'incoming';

  return (
    <div className="timeline-entry">
      {/* Timeline node */}
      <span
        className={'timeline-node ' + (isIncoming ? 'is-incoming' : 'is-past')}
        aria-hidden="true"
      />

      <Reveal delay={delay}>
        <article className="exp-card card" aria-label={`${entry.title} at ${entry.company}`}>

          {/* ── Header ──────────────────────────────────── */}
          <header className="exp-header">
            <div className="exp-header-left">
              <div className="exp-title-row">
                <h3 className="exp-title">{entry.title}</h3>
                {isIncoming && (
                  <span className="exp-status-tag">incoming</span>
                )}
              </div>
              <p className="exp-company">
                {entry.company} · {entry.location}
              </p>
            </div>
            <time className="exp-period">{entry.period}</time>
          </header>

          {/* ── Summary (if non-empty) ───────────────────── */}
          {entry.summary && (
            <p className="exp-summary">{entry.summary}</p>
          )}

          {/* ── Bullets (if non-empty) ───────────────────── */}
          {entry.bullets.length > 0 && (
            <ul className="exp-bullets">
              {entry.bullets.map((bullet, bi) => (
                <li key={bi}>
                  {/* Only linkify the first bullet of unified-mentor */}
                  {entry.id === 'unified-mentor' && bi === 0
                    ? linkifyBullet(bullet)
                    : bullet
                  }
                </li>
              ))}
            </ul>
          )}

          {/* ── Stack chips (if non-empty) ───────────────── */}
          {entry.stack.length > 0 && (
            <div className="exp-stack">
              {entry.stack.map(tech => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>
          )}

        </article>
      </Reveal>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────── */
export default function Experience() {
  return (
    <div className="container">
      <Reveal>
        <h2 className="section-title">
          The <em>story</em> so far
        </h2>
      </Reveal>

      <Reveal delay={60}>
        <p className="exp-subtitle">
          where i have worked, and where i am headed.
        </p>
      </Reveal>

      <div className="timeline">
        {experience.map((entry, i) => (
          <ExperienceCard
            key={entry.id}
            entry={entry}
            delay={i * 120}
          />
        ))}
      </div>
    </div>
  );
}
