import { useState } from 'react';
import { getTechLogo, techLogos } from '../../utils/techLogos';
import SectionHeading from '../common/SectionHeading';
import TechLogo from '../common/TechLogo';

// Core Stack Tech Logos
const coreStackItems = [
  { name: 'Python', logo: techLogos.Python },
  { name: 'FastAPI', logo: techLogos.FastAPI },
  { name: 'React', logo: techLogos.React },
  { name: 'Next.js', logo: techLogos['Next.js'] },
  { name: 'PostgreSQL', logo: techLogos.PostgreSQL },
  { name: 'MongoDB', logo: techLogos.MongoDB },
  { name: 'Docker', logo: techLogos.Docker },
  { name: 'GCP', logo: techLogos.GCP },
];

// Engineering Focus Cards
const focusAreas = [
  {
    title: 'Full Stack Development',
    subtitle: 'Building end-to-end web applications',
    badgeBg: 'bg-purple-100 text-purple-600',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'AI / Agentic Systems',
    subtitle: 'Intelligent automation & decision systems',
    badgeBg: 'bg-sky-100 text-sky-600',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Scalable deployment & infrastructure',
    badgeBg: 'bg-emerald-100 text-emerald-600',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 001-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Backend Engineering',
    subtitle: 'APIs, services & system design',
    badgeBg: 'bg-orange-100 text-orange-600',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

// Categorized Skills Data
const skillCards = [
  {
    id: 'programming',
    filterTag: 'Backend',
    title: 'PROGRAMMING',
    icon: '⚡',
    titleColor: 'text-purple-600',
    skills: ['Python', 'Java', 'C'],
    usedIn: 'Used in: NEXORA • 1vite • DASH',
  },
  {
    id: 'frontend',
    filterTag: 'Frontend',
    title: 'FRONTEND',
    icon: '🌐',
    titleColor: 'text-sky-600',
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML', 'CSS'],
    usedIn: 'Used in: AcadLink • DASH • 1vite',
  },
  {
    id: 'backend',
    filterTag: 'Backend',
    title: 'BACKEND',
    icon: '⚙️',
    titleColor: 'text-emerald-600',
    skills: ['FastAPI', 'Node.js', 'REST APIs'],
    usedIn: 'Used in: NEXORA • 1vite',
  },
  {
    id: 'databases',
    filterTag: 'Backend',
    title: 'DATABASES',
    icon: '🗄️',
    titleColor: 'text-orange-600',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'CosmosDB'],
    usedIn: 'Used in: 1vite • AcadLink • NEXORA',
  },
  {
    id: 'cloud',
    filterTag: 'Cloud',
    title: 'CLOUD & DEVOPS',
    icon: '☁️',
    titleColor: 'text-cyan-600',
    skills: ['Docker', 'Kubernetes', 'GCP', 'GKE', 'AWS', 'GitHub Actions'],
    usedIn: 'Used in: NEXORA • 1vite',
  },
  {
    id: 'tools',
    filterTag: 'Tools',
    title: 'DEVELOPER TOOLS',
    icon: '🛠️',
    titleColor: 'text-indigo-600',
    skills: ['Git', 'GitHub', 'VS Code', 'Antigravity', 'Github CLI', 'Github Copilot', 'Cursor'],
    usedIn: 'Daily tools for building & shipping',
  },
];

const filterTabs = ['All', 'Frontend', 'Backend', 'Cloud', 'Tools'];

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter cards based on tab selection
  const isCardVisible = (filterTag) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Frontend' && filterTag === 'Frontend') return true;
    if (activeFilter === 'Backend' && filterTag === 'Backend') return true;
    if (activeFilter === 'Cloud' && filterTag === 'Cloud') return true;
    if (activeFilter === 'Tools' && filterTag === 'Tools') return true;
    return false;
  };

  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* ── Top Header & Filter Tabs ── */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="TECHNICAL SKILLS"
            title="My Engineering Stack"
            subtitle="A focused stack spanning full-stack development, AI systems, backend engineering and cloud infrastructure."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-[rgba(45,45,45,0.08)] bg-white p-1.5 shadow-sm shrink-0">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${isActive
                      ? 'bg-[var(--orange)] text-white shadow-sm'
                      : 'text-[rgba(45,45,45,0.65)] hover:bg-[rgba(255,107,53,0.06)] hover:text-[var(--ink)]'
                    }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 1. CORE STACK HERO BOX ── */}
        <div className="rounded-[2.25rem] border border-[rgba(45,45,45,0.08)] bg-gradient-to-b from-white via-[rgba(255,244,237,0.4)] to-white p-6 sm:p-8 shadow-soft">
          <div className="mb-6 flex items-center gap-2">
            <span className="rounded-md bg-[rgba(255,107,53,0.1)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--orange)]">
              ⭐ Core Stack
            </span>
          </div>

          {/* Stack Items Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-2 sm:gap-6 lg:justify-around">
            {coreStackItems.map((item, idx) => (
              <div key={item.name} className="flex items-center gap-4 sm:gap-6">
                <div className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md border border-[rgba(45,45,45,0.06)] p-2.5 transition-all group-hover:border-[rgba(255,107,53,0.3)] group-hover:shadow-lg">
                    <TechLogo src={item.logo} alt={item.name} className="h-8 w-8 object-contain" />
                  </div>
                  <span className="text-xs font-bold text-[rgba(45,45,45,0.8)] group-hover:text-[var(--orange)]">
                    {item.name}
                  </span>
                </div>

                {/* Dot Separator */}
                {idx < coreStackItems.length - 1 && (
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-[rgba(45,45,45,0.2)] md:inline-block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. ENGINEERING FOCUS ── */}
        <div className="space-y-4">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--orange)]">
            Engineering Focus
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="group flex items-start gap-4 rounded-2xl border border-[rgba(45,45,45,0.08)] bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,107,53,0.3)] hover:shadow-md"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${area.badgeBg} shadow-sm`}>
                  {area.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--ink)] group-hover:text-[var(--orange)] transition-colors">
                    {area.title}
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-[rgba(45,45,45,0.65)]">
                    {area.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. CATEGORIZED SKILL CARDS GRID (3 cols) ── */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCards.map((card) => {
            if (!isCardVisible(card.filterTag)) return null;

            return (
              <div
                key={card.id}
                className="group flex flex-col justify-between rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,107,53,0.3)] hover:shadow-xl"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-[rgba(45,45,45,0.06)] pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{card.icon}</span>
                      <h3 className={`text-xs font-extrabold uppercase tracking-[0.16em] ${card.titleColor}`}>
                        {card.title}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-[rgba(45,45,45,0.45)]">
                      {card.skills.length} skills
                    </span>
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.skills.map((skill) => {
                      const logo = getTechLogo(skill);
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-[rgba(45,45,45,0.08)] bg-[#f8fafc] px-3.5 py-1.5 text-xs font-bold text-[var(--ink)] transition-all hover:border-[var(--orange)] hover:bg-[rgba(255,107,53,0.08)] hover:text-[var(--orange)] hover:shadow-sm"
                        >
                          <TechLogo src={logo} alt={skill} className="h-4 w-4 object-contain" />
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Footer text */}
                <div className="mt-6 border-t border-[rgba(45,45,45,0.06)] pt-3 text-[11px] font-semibold text-[rgba(45,45,45,0.5)]">
                  {card.usedIn}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 4. QUOTE CARD BANNER ── */}
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[rgba(255,107,53,0.2)] bg-gradient-to-br from-[rgba(255,244,237,0.9)] via-white to-[rgba(255,107,53,0.06)] p-7 sm:p-8 shadow-soft flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Background decorative dots */}
          <div className="pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 opacity-15">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 36 }).map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-full bg-[var(--orange)]" />
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-4xl font-serif text-[var(--orange)] font-black">“</span>
            <p className="mt-1 text-base sm:text-lg font-bold leading-relaxed text-[var(--ink)]">
              I love turning ideas into scalable products with the right technology.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-2 shrink-0">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--orange)] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-[rgba(45,45,45,0.7)]">Mallikarjuna Sindiri</span>
          </div>
        </div>

      </div>
    </section>
  );
}
