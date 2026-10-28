import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import './Projects.css';

/* ── Get initials from project title ─────────────────────── */
function getInitials(title) {
  return title
    .split(/\s+/)
    .map(w => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

/* ── Placeholder thumbnail (no image field yet) ──────────── */
export function ProjectThumb({ project }) {
  // When a real screenshot arrives: add image field to the project object
  // and render: <img src={project.image} alt={project.title} />
  if (project.image) {
    return (
      <div className="project-thumb">
        {project.highlight && (
          <span className="project-highlight">{project.highlight.toLowerCase()}</span>
        )}
        <img src={project.image} alt={project.title} loading="lazy" width="560" height="350" />
      </div>
    );
  }

  return (
    <div className="project-thumb">
      {project.highlight && (
        <span className="project-highlight">{project.highlight.toLowerCase()}</span>
      )}
      <div className="project-thumb-placeholder" aria-hidden="true">
        <span className="project-thumb-initials">{getInitials(project.title)}</span>
      </div>
    </div>
  );
}

/* ── Featured project card ───────────────────────────────── */
export default function ProjectCard({ project }) {
  return (
    <article className="project-card card" aria-label={project.title}>
      <ProjectThumb project={project} />

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <span className="label">{project.subtitle.toLowerCase()}</span>
        <p className="project-desc">{project.description}</p>

        {project.tags.length > 0 && (
          <div className="project-tags">
            {project.tags.slice(0, 5).map(tag => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
        )}

        <div className="project-btns">
          {project.live && (
            <a
              href={project.live}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`live demo for ${project.title}`}
            >
              live <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          <a
            href={project.github}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`source code for ${project.title}`}
          >
            <FiGithub aria-hidden="true" /> code
          </a>
        </div>
      </div>
    </article>
  );
}
