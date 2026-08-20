import { Link } from 'react-router-dom';
import { socialLinks, stats } from '../../data';
import heroImage from '../../images/hero_image.png';
import githubLogo from '../../images/github_logo.png';
import gmailLogo from '../../images/gmail_logo.png';
import linkedinLogo from '../../images/linkedin_logo.png';

const socialIcons = {
  GitHub: githubLogo,
  LinkedIn: linkedinLogo,
  Email: gmailLogo,
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--dark)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.16),transparent_22%),radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,107,53,0.08),transparent_24%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-[rgba(255,255,255,0.82)] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <span className="h-2 w-2 rounded-full bg-[var(--orange)] shadow-[0_0_0_5px_rgba(255,107,53,0.14)]" />
            CSE'27 • Open for Opportunities
          </div>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
              <span className="block text-white">Ideas.</span>
              <span className="block text-[var(--orange)]">Code.</span>
              <span className="block text-white">Real Impact.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[rgba(255,255,255,0.82)] sm:text-xl">
              Turning real-world problems into scalable web applications.
            </p>
            <p className="max-w-2xl text-base leading-7 text-[rgba(255,255,255,0.7)] sm:text-lg">
              I&apos;m Mallikarjuna, a Computer Science and Engineering student at VNR VJIET passionate about building full-stack applications, scalable backend systems, cloud solutions, and intelligent software.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="rounded-full bg-[var(--orange)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--orange-deep)]">
              View Projects →
            </Link>
            <Link to="/contact" className="rounded-full border border-[rgba(255,255,255,0.18)] px-6 py-3 font-semibold text-white transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]">
              Let&apos;s Connect →
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.14)] px-4 py-2 text-sm text-[rgba(255,255,255,0.82)] transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]"
              >
                <img src={socialIcons[item.label]} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                {item.label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] p-4">
                <div className="text-2xl font-bold text-[var(--orange)]">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.26em] text-[rgba(255,255,255,0.62)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden lg:-mr-8 lg:min-h-[720px] xl:-mr-16 2xl:-mr-24">
          <img
            src={heroImage}
            alt="Mallikarjuna Sindiri"
            className="absolute inset-0 h-full w-full object-cover object-[82%_center] lg:scale-[1.05]"
          />
        </div>
      </div>
    </section>
  );
}
