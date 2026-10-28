import HeroTiles from './hero/HeroTiles';
import AvatarBubble from './hero/AvatarBubble';
import IconRow from './hero/IconRow';
import CodeEditor from './hero/CodeEditor';
import Reveal from './Reveal';
import './hero/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Layer 0: tile grid + ambient glow */}
      <HeroTiles />

      {/* Layer 1: hero content */}
      <div className="container">
        <div className="hero-inner">

          {/* ── Left column ───────────────────────── */}
          <div className="hero-left">

            {/* Avatar with hover bubble */}
            <Reveal delay={0}>
              <AvatarBubble />
            </Reveal>

            {/* Headline */}
            <Reveal delay={80}>
              <h1 className="hero-h1">
                Building AI powered products from model to{' '}
                <em>production</em>.
              </h1>
            </Reveal>

            {/* Subline */}
            <Reveal delay={160}>
              <p className="hero-sub">
                Love Photography, and Cinema.
              </p>
            </Reveal>

            {/* Icon row */}
            <Reveal delay={240}>
              <IconRow />
            </Reveal>

          </div>

          {/* ── Right column ──────────────────────── */}
          <div className="hero-right">
            <Reveal delay={320}>
              <CodeEditor />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}