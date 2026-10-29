import { skills } from '../data/skills';
import Reveal from './Reveal';
import './SkillsStrip.css';

/* Single skill item — rendered in both copies of the track */
function SkillItem({ name, category, Icon, hidden }) {
  // Two-letter text badge for items without a brand icon
  const badge = name.slice(0, 2).toLowerCase();

  return (
    <div
      className="skill"
      tabIndex={hidden ? -1 : 0}
      aria-label={hidden ? undefined : `${name}, ${category}`}
      aria-hidden={hidden || undefined}
      data-category={category}
      role={hidden ? undefined : 'img'}
    >
      {Icon
        ? <Icon aria-hidden="true" />
        : <span className="skill-badge" aria-hidden="true">{badge}</span>
      }
      <span className="name">{name}</span>
    </div>
  );
}

export default function SkillsStrip() {
  return (
    <section className="skills" aria-label="skills and tools">
      <Reveal>
        <span className="label">Tech Stack &amp; Tools</span>
      </Reveal>

      <Reveal delay={80}>
        <div className="marquee" role="region" aria-label="scrolling skill logos">
          <div className="marquee-track">
            {/* First copy — visible and focusable */}
            {skills.map((skill) => (
              <SkillItem key={skill.name} {...skill} hidden={false} />
            ))}

            {/* Second copy — aria-hidden, not focusable, creates seamless loop */}
            {skills.map((skill) => (
              <SkillItem key={'dup-' + skill.name} {...skill} hidden={true} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
