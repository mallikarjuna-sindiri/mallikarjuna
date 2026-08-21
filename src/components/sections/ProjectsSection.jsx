import { Link } from 'react-router-dom';
import { projects } from '../../data';
import SectionHeading from '../common/SectionHeading';

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Featured Projects"
          title="Real Problems. Real Solutions."
          subtitle="Web applications built with production-grade architecture, scalable backends, and clear UX."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[rgba(45,45,45,0.08)] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(255,107,53,0.3)] hover:shadow-xl"
            >
              <div>
                {/* ── Browser Mockup Header & Application Preview ── */}
                <div className="relative overflow-hidden bg-[#18181b] p-3 sm:p-4">
                  {/* Browser Window Bar */}
                  <div className="mb-3 flex items-center justify-between px-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-[#ef4444] opacity-80" />
                      <span className="h-3 w-3 rounded-full bg-[#f59e0b] opacity-80" />
                      <span className="h-3 w-3 rounded-full bg-[#10b981] opacity-80" />
                    </div>

                    {/* Address Bar */}
                    <div className="mx-4 flex flex-1 max-w-xs items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] px-3 py-1 text-[11px] font-mono text-[rgba(255,255,255,0.5)]">
                      <span className="mr-1.5 text-emerald-400">🔒</span>
                      https://{project.slug}.ai/
                    </div>

                    <div className="rounded-full bg-[rgba(255,107,53,0.2)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--orange)]">
                      Live App
                    </div>
                  </div>

                  {/* Application Homepage Image Frame */}
                  <div className="relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#09090b]">
                    {project.homeImage ? (
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={project.homeImage}
                          alt={`${project.name} Application Preview`}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.2)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <Link
                            to={`/project/${project.slug}`}
                            className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105"
                          >
                            <span>Inspect Case Study & Diagrams</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      /* Placeholder Application Frame for projects awaiting screenshots */
                      <div className="relative flex aspect-[16/9] w-full flex-col items-center justify-center bg-gradient-to-br from-[#1c1917] via-[#292524] to-[#0c0a09] p-6 text-center">
                        <div className="text-3xl font-black tracking-wider text-white sm:text-4xl">
                          {project.name}
                        </div>
                        <p className="mt-2 text-xs font-medium text-[var(--orange)] sm:text-sm">
                          {project.subtitle}
                        </p>
                        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                          {project.stack.slice(0, 4).map((tech) => (
                            <span key={tech} className="rounded-full bg-[rgba(255,255,255,0.08)] px-2.5 py-1 text-[10px] font-semibold text-white/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/project/${project.slug}`}
                          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[rgba(255,107,53,0.5)] bg-[rgba(255,107,53,0.15)] px-4 py-2 text-xs font-bold text-[var(--orange)] transition-colors hover:bg-[var(--orange)] hover:text-white"
                        >
                          <span>Explore Architecture</span>
                          <span>→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* ── Card Info Body ── */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black tracking-[-0.03em] text-[var(--ink)]">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[var(--orange)]">
                        {project.subtitle}
                      </p>
                    </div>

                    <Link
                      to={`/project/${project.slug}`}
                      className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-[var(--orange)] hover:underline"
                    >
                      <span>HLD & LLD Diagrams</span>
                      <span>→</span>
                    </Link>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[rgba(45,45,45,0.82)]">
                    <span className="font-bold text-[var(--ink)]">Problem:</span> {project.problem}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[rgba(45,45,45,0.82)]">
                    <span className="font-bold text-[var(--ink)]">Solution:</span> {project.solution}
                  </p>

                  <div className="mt-5 rounded-2xl border border-[rgba(45,45,45,0.08)] bg-[var(--cream)] p-4">
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[rgba(45,45,45,0.55)]">
                      Key Feature
                    </div>
                    <div className="mt-1.5 text-xs font-semibold leading-6 text-[var(--ink)]">
                      {project.feature}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[rgba(255,107,53,0.22)] bg-[rgba(255,107,53,0.08)] px-3 py-1 text-xs font-bold text-[var(--orange)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Footer Call to Action ── */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(45,45,45,0.08)] bg-[#fafafa] px-7 py-4">
                <Link
                  to={`/project/${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[var(--orange-deep)]"
                >
                  <span>Open Full Case Study & Diagrams</span>
                  <span>→</span>
                </Link>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[rgba(45,45,45,0.7)] hover:text-[var(--orange)]"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[rgba(45,45,45,0.7)] hover:text-[var(--orange)]"
                  >
                    GitHub ↗
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
