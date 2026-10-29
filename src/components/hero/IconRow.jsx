import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { FiFileText } from 'react-icons/fi';
import { siteConfig } from '../../data/siteConfig';

const ICONS = [
  { key: 'github',    label: 'github',    Icon: FaGithub,     href: siteConfig.github    },
  { key: 'linkedin',  label: 'linkedin',  Icon: FaLinkedinIn, href: siteConfig.linkedin  },
  { key: 'twitter',   label: 'twitter',   Icon: FaXTwitter,   href: siteConfig.twitter   },
  { key: 'instagram', label: 'instagram', Icon: FaInstagram,  href: siteConfig.instagram }, // photography page
  { key: 'resume',    label: 'resume',    Icon: FiFileText,   href: siteConfig.resume    },
];

export default function IconRow() {
  return (
    <div className="icon-row">
      {ICONS.map(({ key, label, Icon, href }) => (
        <a
          key={key}
          href={href}
          className="icon-link"
          aria-label={label}
          data-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
