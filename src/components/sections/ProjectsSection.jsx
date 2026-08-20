import { Link } from 'react-router-dom';
import { projects } from '../../data';
import SectionHeading from '../common/SectionHeading';

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Featured Projects" title="Real Problems. Real Solutions." subtitle="Web applications built to solve meaningful problems." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="group rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white shadow-soft transition-transform duration-200 hover:-translate-y-1 overflow-hidden">

              {/* ── Dark title block ── */}
              <div className="relative overflow-hidden bg-[var(--dark)] px-7 py-6">
                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[var(--orange)] opacity-10 blur-2xl pointer-events-none" />
                <div className="relative flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.03em] text-white">{project.name}</h3>
                    <p className="mt-1 text-sm font-medium text-[var(--orange)]">{project.subtitle}</p>
                  </div>
                  <div className="rounded-full border border-[rgba(255,107,53,0.35)] bg-[rgba(255,107,53,0.12)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--orange)]">
                    Featured
                  </div>
                </div>
              </div>

              {/* ── Card body ── */}
              <div className="p-7">
                <p className="text-sm leading-7 text-[rgba(45,45,45,0.82)]">
                  <span className="font-semibold text-[var(--ink)]">Problem:</span> {project.problem}
                </p>
                <p className="mt-3 text-sm leading-7 text-[rgba(45,45,45,0.82)]">
                  <span className="font-semibold text-[var(--ink)]">Solution:</span> {project.solution}
                </p>

                <div className="mt-6 rounded-3xl border border-[rgba(45,45,45,0.08)] bg-[var(--cream)] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(45,45,45,0.55)]">Key Feature</div>
                  <div className="mt-2 text-sm leading-7 text-[var(--ink)]">{project.feature}</div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-[rgba(255,107,53,0.22)] bg-[rgba(255,107,53,0.08)] px-3 py-1.5 text-xs font-semibold text-[var(--orange)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to={`/project/${project.slug}`} className="rounded-full bg-[var(--orange)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--orange-deep)]">
                    {project.demoLabel}
                  </Link>
                  <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-[rgba(45,45,45,0.12)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]">
                    GitHub / Code
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
