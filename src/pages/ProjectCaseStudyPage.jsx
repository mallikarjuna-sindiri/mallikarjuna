import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CaseBlock from '../components/common/CaseBlock';
import TechLogo from '../components/common/TechLogo';
import { projects } from '../data';
import { getTechLogo } from '../utils/techLogos';

export default function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = useMemo(() => projects.find((item) => item.slug === slug) ?? projects[0], [slug]);

  // Accordion state
  const [openAccordions, setOpenAccordions] = useState({
    hld: true,
    lld: true,
    workflow: true,
  });

  // Lightbox Modal state
  const [activeModalImage, setActiveModalImage] = useState(null);
  const [activeModalTitle, setActiveModalTitle] = useState('');

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const openLightbox = (imgSrc, title) => {
    if (!imgSrc) return;
    setActiveModalImage(imgSrc);
    setActiveModalTitle(title);
  };

  const closeLightbox = () => {
    setActiveModalImage(null);
    setActiveModalTitle('');
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      
      {/* ── Sticky Top Bar ── */}
      <div className="sticky top-0 z-40 border-b border-[rgba(45,45,45,0.08)] bg-[rgba(255,244,237,0.94)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--orange)] hover:text-[var(--orange-deep)]"
          >
            <span>← Back to Projects</span>
          </button>
          <div className="flex items-center gap-3 text-xs font-semibold text-[rgba(45,45,45,0.7)] sm:text-sm">
            <span>Project: <strong className="text-[var(--ink)]">{project.name}</strong></span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[var(--orange)] px-3 py-1 text-xs font-bold text-white transition-colors hover:bg-[var(--orange-deep)]"
              >
                Live App ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--orange)] px-3 py-1 text-xs font-bold text-[var(--orange)] transition-colors hover:bg-[var(--orange)] hover:text-white"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* ── Hero Header ── */}
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[var(--dark)] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16 shadow-2xl">
          {/* Background Glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[var(--orange)] opacity-[0.14] blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-56 w-96 rounded-full bg-[var(--orange)] opacity-[0.08] blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,107,53,0.35)] bg-[rgba(255,107,53,0.14)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[var(--orange)]">
                <span className="h-2 w-2 rounded-full bg-[var(--orange)] animate-pulse" />
                Case Study & System Architecture
              </div>
              <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                {project.name}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-8 text-[rgba(255,255,255,0.78)] sm:text-lg">
                {project.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[var(--orange-deep)] hover:scale-105 shadow-md"
                  >
                    <span>View GitHub Code</span>
                    <span>↗</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all shadow-md ${
                      project.github
                        ? 'border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] text-white hover:border-[var(--orange)] hover:text-[var(--orange)]'
                        : 'bg-[var(--orange)] text-white hover:bg-[var(--orange-deep)] hover:scale-105'
                    }`}
                  >
                    <span>Launch Live Application</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* Stack Pills on Right */}
            <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
              {project.stack.map((tech) => {
                const logo = getTechLogo(tech);
                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] px-3.5 py-1.5 text-xs font-bold text-white/90 shadow-sm"
                  >
                    <TechLogo src={logo} alt={tech} className="h-4 w-4 object-contain" />
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>


        {/* ── 1. Application Homepage Preview Banner ── */}
        <div className="mt-10 rounded-[2rem] border border-[rgba(45,45,45,0.08)] bg-white p-6 sm:p-8 shadow-soft">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[rgba(45,45,45,0.06)] pb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                Application Interface
              </div>
              <h2 className="text-2xl font-black text-[var(--ink)]">
                {project.name} Homepage & User Interface
              </h2>
            </div>
            {project.homeImage && (
              <button
                type="button"
                onClick={() => openLightbox(project.homeImage, `${project.name} Homepage Preview`)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--orange)] hover:underline"
              >
                <span>🔍 View High-Res Image</span>
              </button>
            )}
          </div>

          {/* Browser Container Frame */}
          <div className="relative overflow-hidden rounded-2xl border border-[rgba(45,45,45,0.12)] bg-[#18181b] shadow-2xl">
            <div className="flex items-center justify-between bg-[#09090b] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                <span className="h-3 w-3 rounded-full bg-[#10b981]" />
              </div>
              <div className="rounded-full bg-[rgba(255,255,255,0.08)] px-4 py-1 font-mono text-xs text-white/60">
                https://{project.slug}.ai/
              </div>
              <div className="text-xs font-bold text-emerald-400">● Operational</div>
            </div>

            {project.homeImage ? (
              <div
                onClick={() => openLightbox(project.homeImage, `${project.name} Homepage Preview`)}
                className="group relative cursor-pointer overflow-hidden"
              >
                <img
                  src={project.homeImage}
                  alt={`${project.name} Homepage Preview`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-black shadow-lg">
                    🔍 Click to Enlarge Diagram / Screenshot
                  </span>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-white/70">
                <p className="text-lg font-bold">Homepage Preview for {project.name}</p>
                <p className="mt-2 text-xs text-white/50">Full-stack web application interface.</p>
              </div>
            )}
          </div>
        </div>


        {/* ── Problem / Solution Cards ── */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <CaseBlock title="Problem Statement" text={project.problem} />
          <CaseBlock title="Architectural Solution" text={project.solution} />
        </div>


        {/* ─────────────────────────────────────────────────────────────
            2. ARCHITECTURE & DIAGRAMS (HLD, LLD & WORKFLOW DROPDOWNS)
           ───────────────────────────────────────────────────────────── */}
        <div className="mt-10 space-y-6">

          {/* ── HLD (High-Level Design) Dropdown ── */}
          <div className="overflow-hidden rounded-[2rem] border border-[rgba(45,45,45,0.08)] bg-white shadow-soft">
            <button
              type="button"
              onClick={() => toggleAccordion('hld')}
              className="flex w-full items-center justify-between bg-white px-7 py-6 text-left transition-colors hover:bg-[rgba(255,107,53,0.03)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(255,107,53,0.1)] text-2xl">
                  📐
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                    System Architecture
                  </div>
                  <h3 className="text-xl font-black text-[var(--ink)]">
                    High-Level Design (HLD) Diagram
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden rounded-full bg-[rgba(255,107,53,0.1)] px-3 py-1 text-xs font-bold text-[var(--orange)] sm:inline-block">
                  {openAccordions.hld ? 'Collapse' : 'Expand HLD'}
                </span>
                <span className={`text-2xl font-bold text-[var(--orange)] transition-transform duration-300 ${openAccordions.hld ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
            </button>

            {openAccordions.hld && (
              <div className="border-t border-[rgba(45,45,45,0.08)] p-7 animate-fade-in-right">
                <p className="text-sm leading-7 text-[rgba(45,45,45,0.8)]">
                  {project.hldDescription || 'High-level system design showing client requests, API gateways, service handlers, database persistence, and cloud infrastructure.'}
                </p>

                {/* HLD Image Display */}
                {project.hldImage ? (
                  <div className="mt-6">
                    <div
                      onClick={() => openLightbox(project.hldImage, project.hldTitle || 'High-Level Design (HLD)')}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[rgba(45,45,45,0.12)] bg-[#18181b] p-2 shadow-lg"
                    >
                      <img
                        src={project.hldImage}
                        alt="High-Level Design Diagram"
                        className="w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-101"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.35)] opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow-lg">
                          🔍 Click to View HLD Diagram in Fullscreen
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Fallback Interactive Visual HLD Flow */
                  <div className="mt-6 rounded-2xl border border-[rgba(255,107,53,0.2)] bg-[var(--cream)] p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--orange)]">HLD System Flow</div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-4">
                      {['Client SPA (React/Next.js)', 'FastAPI / API Server', 'Database / Storage', 'Cloud Infrastructure'].map((node) => (
                        <div key={node} className="rounded-xl border border-[rgba(45,45,45,0.08)] bg-white p-4 text-center text-xs font-bold text-[var(--ink)] shadow-sm">
                          {node}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key HLD Highlights */}
                {project.hldHighlights && (
                  <div className="mt-6 rounded-2xl border border-[rgba(45,45,45,0.06)] bg-[#fafafa] p-5">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink)]">
                      HLD Key Infrastructure Highlights
                    </h4>
                    <ul className="mt-3 space-y-2 text-xs font-medium text-[rgba(45,45,45,0.8)]">
                      {project.hldHighlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[var(--orange)] font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>


          {/* ── LLD (Low-Level Design) Dropdown ── */}
          <div className="overflow-hidden rounded-[2rem] border border-[rgba(45,45,45,0.08)] bg-white shadow-soft">
            <button
              type="button"
              onClick={() => toggleAccordion('lld')}
              className="flex w-full items-center justify-between bg-white px-7 py-6 text-left transition-colors hover:bg-[rgba(255,107,53,0.03)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(255,107,53,0.1)] text-2xl">
                  ⚙️
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                    Component & Module Architecture
                  </div>
                  <h3 className="text-xl font-black text-[var(--ink)]">
                    Low-Level Design (LLD) Diagram
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden rounded-full bg-[rgba(255,107,53,0.1)] px-3 py-1 text-xs font-bold text-[var(--orange)] sm:inline-block">
                  {openAccordions.lld ? 'Collapse' : 'Expand LLD'}
                </span>
                <span className={`text-2xl font-bold text-[var(--orange)] transition-transform duration-300 ${openAccordions.lld ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
            </button>

            {openAccordions.lld && (
              <div className="border-t border-[rgba(45,45,45,0.08)] p-7 animate-fade-in-right">
                <p className="text-sm leading-7 text-[rgba(45,45,45,0.8)]">
                  {project.lldDescription || 'Low-level component design specifying class models, API controllers, database schemas, and helper utilities.'}
                </p>

                {/* LLD Image Display */}
                {project.lldImage ? (
                  <div className="mt-6">
                    <div
                      onClick={() => openLightbox(project.lldImage, project.lldTitle || 'Low-Level Design (LLD)')}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[rgba(45,45,45,0.12)] bg-[#18181b] p-2 shadow-lg"
                    >
                      <img
                        src={project.lldImage}
                        alt="Low-Level Design Diagram"
                        className="w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-101"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.35)] opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow-lg">
                          🔍 Click to View LLD Diagram in Fullscreen
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 rounded-2xl border border-[rgba(45,45,45,0.08)] bg-[var(--cream)] p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--orange)]">LLD Component Modules</div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {['Route Controllers', 'Business Logic & Services', 'DB Schema & ORM'].map((module) => (
                        <div key={module} className="rounded-xl border border-[rgba(45,45,45,0.08)] bg-white p-4 text-center text-xs font-bold text-[var(--ink)] shadow-sm">
                          {module}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key LLD Highlights */}
                {project.lldHighlights && (
                  <div className="mt-6 rounded-2xl border border-[rgba(45,45,45,0.06)] bg-[#fafafa] p-5">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink)]">
                      LLD Implementation Specifications
                    </h4>
                    <ul className="mt-3 space-y-2 text-xs font-medium text-[rgba(45,45,45,0.8)]">
                      {project.lldHighlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[var(--orange)] font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>


          {/* ── Workflow & Sequence Diagram Dropdown ── */}
          <div className="overflow-hidden rounded-[2rem] border border-[rgba(45,45,45,0.08)] bg-white shadow-soft">
            <button
              type="button"
              onClick={() => toggleAccordion('workflow')}
              className="flex w-full items-center justify-between bg-white px-7 py-6 text-left transition-colors hover:bg-[rgba(255,107,53,0.03)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(255,107,53,0.1)] text-2xl">
                  🔄
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--orange)]">
                    Execution Flow
                  </div>
                  <h3 className="text-xl font-black text-[var(--ink)]">
                    Workflow & Request Sequence Diagram
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden rounded-full bg-[rgba(255,107,53,0.1)] px-3 py-1 text-xs font-bold text-[var(--orange)] sm:inline-block">
                  {openAccordions.workflow ? 'Collapse' : 'Expand Workflow'}
                </span>
                <span className={`text-2xl font-bold text-[var(--orange)] transition-transform duration-300 ${openAccordions.workflow ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
            </button>

            {openAccordions.workflow && (
              <div className="border-t border-[rgba(45,45,45,0.08)] p-7 animate-fade-in-right">
                <p className="text-sm leading-7 text-[rgba(45,45,45,0.8)]">
                  {project.workflowDescription || 'Step-by-step request flow from user interaction to backend API validation, async task execution, cloud storage, and final response delivery.'}
                </p>

                {/* Workflow Image Display */}
                {project.workflowImage && (
                  <div className="mt-6">
                    <div
                      onClick={() => openLightbox(project.workflowImage, project.workflowTitle || 'Workflow & Processing Sequence Diagram')}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[rgba(45,45,45,0.12)] bg-[#18181b] p-2 shadow-lg"
                    >
                      <img
                        src={project.workflowImage}
                        alt="Workflow Diagram"
                        className="w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-101"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.35)] opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow-lg">
                          🔍 Click to View Workflow Diagram in Fullscreen
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Workflow Cards Sequence */}
                {project.workflowSteps && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.workflowSteps.map((ws) => (
                      <div
                        key={ws.step}
                        className="rounded-2xl border border-[rgba(45,45,45,0.08)] bg-[#fafafa] p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-[rgba(255,107,53,0.25)]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="rounded-full bg-[rgba(255,107,53,0.12)] px-3 py-1 text-xs font-bold text-[var(--orange)]">
                            Step {ws.step}
                          </span>
                          <span className="text-xs font-bold text-[rgba(45,45,45,0.4)]">Pipeline</span>
                        </div>
                        <h4 className="mt-3 text-sm font-bold text-[var(--ink)]">{ws.title}</h4>
                        <p className="mt-2 text-xs leading-5 text-[rgba(45,45,45,0.7)]">{ws.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

        </div>


        {/* ── Result & Footer CTA ── */}
        <div className="mt-10 rounded-[2.25rem] border border-[rgba(45,45,45,0.08)] bg-[var(--dark)] p-8 text-white shadow-2xl">
          <h2 className="text-3xl font-black">Engineering Impact</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[rgba(255,255,255,0.8)] sm:text-base">
            The project demonstrates scalable system design, clean API interfaces, robust data handling, and automated cloud deployments tailored for real-world user adoption.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[var(--orange-deep)] hover:scale-105 shadow-md"
              >
                <span>Explore Source Code on GitHub</span>
                <span>↗</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all shadow-md ${
                  project.github
                    ? 'border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] text-white hover:border-[var(--orange)] hover:text-[var(--orange)]'
                    : 'bg-[var(--orange)] text-white hover:bg-[var(--orange-deep)] hover:scale-105'
                }`}
              >
                <span>Launch Live Application</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>

      </main>

      {/* ─────────────────────────────────────────────────────────────
          LIGHTBOX MODAL FOR HIGH-RES DIAGRAM VIEWING
         ───────────────────────────────────────────────────────────── */}
      {activeModalImage && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.88)] p-4 backdrop-blur-md animate-fade-in-right"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] max-w-[95vw] flex-col overflow-hidden rounded-2xl bg-[#18181b] p-3 text-white shadow-2xl border border-[rgba(255,255,255,0.15)]"
          >
            {/* Modal Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
              <span className="text-xs font-bold text-[var(--orange)]">
                {activeModalTitle || 'Diagram Viewer'}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white hover:bg-white/20"
              >
                ✕ Close (ESC)
              </button>
            </div>

            {/* Image Container */}
            <div className="overflow-auto p-2">
              <img
                src={activeModalImage}
                alt={activeModalTitle}
                className="max-h-[80vh] w-auto object-contain mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
