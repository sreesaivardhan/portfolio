import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight, FiGithub } from 'react-icons/fi';
import { featuredProjects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import './Projects.css';

export default function Projects() {
  return (
    <div className="container">
      <Reveal>
        <h2 className="section-title">
          Selected <em>work</em>
        </h2>
      </Reveal>

      <Reveal delay={60}>
        <p className="projects-subtitle">
          six things i am proud of. the rest live one click away.
        </p>
      </Reveal>

      <div className="projects-grid">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <div className="projects-cta">
        <Reveal delay={160}>
          <Link
            to="/projects"
            className="btn btn-ghost"
            aria-label="see all projects"
          >
            see all projects <FiArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}