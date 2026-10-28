import { FiCopy, FiDownload, FiArrowUp } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { siteConfig } from '../data/siteConfig';
import { useToast } from './Toast';
import { copyText } from '../lib/copyText';
import './Footer.css';

export default function Footer({ id }) {
  const showToast = useToast();

  const handleCopyEmail = async () => {
    const ok = await copyText(siteConfig.email);
    showToast(
      ok
        ? 'copied!'
        : `copy failed, email is ${siteConfig.email}`
    );
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id={id} className="site-footer" aria-label="contact">
      <div className="container">

        <h2 className="section-title">
          Let's build <em>something</em>
        </h2>

        <p className="footer-sub">
          open to opportunities. email is the fastest way to reach me.
        </p>

        {/* Action row */}
        <div className="footer-actions">
          {/* Email copy button */}
          <button
            type="button"
            className="btn btn-ghost"
            onClick={handleCopyEmail}
            aria-label="copy email address"
          >
            <FiCopy aria-hidden="true" />
            {siteConfig.email}
          </button>

          {/* GitHub */}
          <a
            href={siteConfig.github}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <FaGithub aria-hidden="true" />
            github
          </a>

          {/* LinkedIn */}
          <a
            href={siteConfig.linkedin}
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
          >
            <FaLinkedinIn aria-hidden="true" />
            linkedin
          </a>

          {/* Resume */}
          <a
            href={siteConfig.resume}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="download resume"
          >
            <FiDownload aria-hidden="true" />
            resume
          </a>
        </div>

        {/* Bottom bar */}
        <div className="footer-bar">
          <span>© {new Date().getFullYear()} sree sai vardhan</span>
          <button
            type="button"
            className="footer-top-btn"
            onClick={scrollToTop}
            aria-label="back to top"
          >
            back to top <FiArrowUp aria-hidden="true" />
          </button>
        </div>

      </div>
    </footer>
  );
}
