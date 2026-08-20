import { Link } from 'react-router-dom';
import { socialLinks } from '../../data';
import portfolioLogo from '../../images/logo.png';
import githubLogo from '../../images/github_logo.png';
import gmailLogo from '../../images/gmail_logo.png';
import linkedinLogo from '../../images/linkedin_logo.png';

const socialIcons = {
  GitHub: githubLogo,
  LinkedIn: linkedinLogo,
  Email: gmailLogo,
};

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-[rgba(255,255,255,0.08)] pt-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/5 p-1 shadow-soft">
                <img src={portfolioLogo} alt="Mallikarjuna Sindiri logo" className="h-full w-full object-contain" />
              </span>
              <div>
                <div className="text-2xl font-black tracking-[0.26em]">MALLIKARJUNA</div>
                <div className="text-xs uppercase tracking-[0.34em] text-[rgba(255,255,255,0.48)]">Sindiri</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-[rgba(255,255,255,0.72)]">Problem Solver • Full Stack Developer • AI/ML Enthusiast</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[rgba(255,255,255,0.72)]">
            {['Home', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link key={item} to={path} className="transition-colors hover:text-[var(--orange)]">
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-[rgba(255,255,255,0.62)]">
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-[var(--orange)]">
                <img src={socialIcons[item.label]} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <div>© 2026 Mallikarjuna Sindiri</div>
        </div>
      </div>
    </footer>
  );
}
