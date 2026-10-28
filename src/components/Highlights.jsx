import { LuBadgeCheck, LuLeaf, LuUsers } from 'react-icons/lu';
import { FiArrowUpRight } from 'react-icons/fi';
import { highlights, certifications } from '../data/highlights';
import Reveal from './Reveal';
import './Highlights.css';

// All three lu icons confirmed present (LuBadgeCheck, LuLeaf, LuUsers).
// No substitutions needed.

const ICON_MAP = {
  LuBadgeCheck,
  LuLeaf,
  LuUsers,
};

/* ── Single highlight card ───────────────────────────────── */
function HighlightCard({ item, delay }) {
  const Icon = ICON_MAP[item.icon];

  return (
    <Reveal delay={delay}>
      <article className="hl-card card" aria-label={item.title}>
        <div className="hl-top-row">
          <div className="hl-icon" aria-hidden="true">
            {Icon && <Icon />}
          </div>
          <span className="label">{item.label}</span>
        </div>

        <h3 className="hl-title">{item.title}</h3>
        <p className="hl-subtitle">{item.subtitle}</p>
        <p className="hl-body">{item.body}</p>

        {item.link && (
          <div className="hl-link-row">
            <a
              href={item.link.href}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.link.label} for ${item.title}`}
            >
              {item.link.label} <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        )}
      </article>
    </Reveal>
  );
}

/* ── Certification chip ──────────────────────────────────── */
function CertChip({ cert }) {
  return (
    <a
      href={cert.verify}
      className="cert-chip"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${cert.title} – ${cert.issuer}, ${cert.date}`}
    >
      <span className="cert-chip-text">
        <span className="cert-chip-title">{cert.title}</span>
        <span className="cert-chip-meta">{cert.issuer} · {cert.date}</span>
      </span>
      <FiArrowUpRight className="cert-chip-arrow" aria-hidden="true" />
    </a>
  );
}

/* ── Section ─────────────────────────────────────────────── */
export default function Highlights() {
  return (
    <div className="container">
      <Reveal>
        <h2 className="section-title">
          The <em>highlight</em> reel
        </h2>
      </Reveal>

      <Reveal delay={60}>
        <p className="highlights-subtitle">
          a few things outside the repos.
        </p>
      </Reveal>

      {/* Three highlight cards */}
      <div className="highlights-grid">
        {highlights.map((item, i) => (
          <HighlightCard key={item.id} item={item} delay={i * 100} />
        ))}
      </div>

      {/* Certification chips */}
      <Reveal delay={80}>
        <div className="certs-section">
          <span className="label certs-label">certifications</span>
          <div className="certs-row">
            {certifications.map((cert, i) => (
              <CertChip key={i} cert={cert} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
