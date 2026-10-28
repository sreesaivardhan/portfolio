import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { archiveProjects } from '../data/portfolioData';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';
import '../components/Projects.css';

/* ── Archive card (no thumbnail) ────────────────────────── */
function ArchiveCard({ project, delay }) {
  return (
    <Reveal delay={delay}>
      <article className="archive-card card" aria-label={project.title}>
        <h3 className="archive-title">{project.title}</h3>
        <span className="label">{project.subtitle.toLowerCase()}</span>
        <p className="archive-desc">{project.description}</p>

        {project.tags.length > 0 && (
          <div className="archive-tags">
            {project.tags.slice(0, 4).map(tag => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
        )}

        <div className="archive-btns">
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
      </article>
    </Reveal>
  );
}

export default function ProjectsArchive() {
  const navigate = useNavigate();

  // Set page title while mounted
  useEffect(() => {
    const prev = document.title;
    document.title = 'projects | sai vardhan';
    return () => { document.title = prev; };
  }, []);

  const handleBack = () => {
    navigate('/#projects');
  };

  return (
    <>
      <Navbar />
      <main id="main" style={{ paddingTop: '110px', paddingBottom: '80px' }}>
        <div className="container">

          {/* Back button */}
          <div className="archive-back">
            <button
              className="btn btn-ghost"
              onClick={handleBack}
              aria-label="back to projects"
            >
              <FiArrowLeft aria-hidden="true" /> back
            </button>
          </div>

          <Reveal>
            <h1 className="section-title">
              All <em>projects</em>
            </h1>
          </Reveal>

          <Reveal delay={60}>
            <p className="archive-subtitle">the full archive.</p>
          </Reveal>

          <div className="archive-grid">
            {archiveProjects.map((project, i) => (
              <ArchiveCard
                key={project.slug}
                project={project}
                delay={i * 60}
              />
            ))}
          </div>

        </div>
      <Footer />
      </main>
    </>
  );
}
