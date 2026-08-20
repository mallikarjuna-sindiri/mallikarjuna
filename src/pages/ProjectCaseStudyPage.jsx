import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CaseBlock from '../components/common/CaseBlock';
import { projects } from '../data';

export default function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = useMemo(() => projects.find((item) => item.slug === slug) ?? projects[0], [slug]);

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <div className="sticky top-0 z-50 border-b border-[rgba(45,45,45,0.08)] bg-[rgba(255,244,237,0.94)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button type="button" onClick={() => navigate('/')} className="text-sm font-semibold text-[var(--orange)] hover:text-[var(--orange-deep)]">
            ← Back to Portfolio
          </button>
          <div className="text-sm font-medium text-[rgba(45,45,45,0.72)]">Case Study</div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* ── Hero Header ── */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--dark)] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
          {/* Glow effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--orange)] opacity-[0.12] blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-48 w-96 rounded-full bg-[var(--orange)] opacity-[0.07] blur-3xl" />
          </div>

          {/* Decorative grid dots */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,107,53,0.35)] bg-[rgba(255,107,53,0.12)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--orange)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
                Project Case Study
              </div>
              <h1 className="mt-5 text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                {project.name}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-[rgba(255,255,255,0.7)]">
                {project.subtitle}
              </p>
            </div>

            {/* Stack tags on the right */}
            <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] px-3 py-1.5 text-xs font-semibold text-[rgba(255,255,255,0.78)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <CaseBlock title="Problem" text={project.problem} />
          <CaseBlock title="Users" text="Students, faculty, teams or individuals who need a focused system to remove friction from a real workflow." />
          <CaseBlock title="Solution" text={project.solution} />
          <CaseBlock title="Optimization" text="The system emphasizes speed, readable flows and deployment-aware implementation choices that support growth." />
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-7 shadow-soft">
          <h2 className="text-2xl font-bold text-[var(--ink)]">Architecture</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-5 lg:items-center">
            {['Client', 'Frontend', 'Backend APIs', 'Database / Cache', 'Cloud Infrastructure'].map((step, index) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="w-full rounded-2xl border border-[rgba(255,107,53,0.18)] bg-[rgba(255,107,53,0.07)] px-4 py-4 text-sm font-semibold text-[var(--orange)]">{step}</div>
                {index < 4 ? <div className="my-3 hidden h-8 w-px bg-[rgba(255,107,53,0.45)] lg:block" /> : null}
                {index < 4 ? <div className="mb-3 text-[var(--orange)] lg:hidden">↓</div> : null}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-[rgba(45,45,45,0.08)] bg-[var(--cream)] p-5">
            <div className="text-sm font-semibold text-[var(--ink)]">Technology</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-[rgba(255,107,53,0.22)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--orange)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <CaseBlock title="Implementation" text="The implementation focuses on small, composable flows, consistent API boundaries and a UI that stays readable as features grow." />
          <CaseBlock title="Challenges" text="Balancing product depth with performance, keeping the UX clean while adding engineering detail, and making the architecture easy to reason about." />
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-[var(--dark)] p-7 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Result</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[rgba(255,255,255,0.76)]">
            The outcome is a production-minded portfolio project that demonstrates product thinking, backend awareness and scalability-oriented execution.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--orange)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--orange-deep)]">GitHub</a>
            <a href="mailto:mallikarjuna.sindiri@gmail.com" target="_blank" rel="noreferrer" className="rounded-full border border-[rgba(255,255,255,0.16)] px-6 py-3 font-semibold text-white transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]">Live Demo</a>
          </div>
        </div>
      </main>
    </div>
  );
}
