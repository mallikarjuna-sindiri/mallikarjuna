import { experience } from '../../data';
import oneViteLogo from '../../images/1vite_logo.png';
import SectionHeading from '../common/SectionHeading';

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Experience" title="Learning. Building. Contributing." subtitle="A timeline of practical engineering experience." />
        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <div key={item.company} className="relative overflow-hidden rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white shadow-soft">
              {/* Date — absolute top-right */}
              <div className="absolute right-6 top-6 z-10 rounded-full border border-[rgba(45,45,45,0.1)] bg-white px-4 py-2 text-sm font-medium text-[rgba(45,45,45,0.7)] shadow-sm">{item.duration}</div>
              <div className="absolute left-8 top-8 h-full w-px bg-[rgba(255,107,53,0.2)]" />
              <div className="relative grid gap-8 p-7 pl-10 lg:grid-cols-[1.35fr_0.85fr] lg:items-center lg:p-8 lg:pl-12">
                <div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="inline-flex h-4 w-4 -translate-x-[34px] rounded-full border-4 border-white bg-[var(--orange)] shadow-[0_0_0_6px_rgba(255,107,53,0.1)]" />
                      <h3 className="text-2xl font-bold text-[var(--ink)]">{item.role}</h3>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noreferrer" className="mt-1 inline-flex text-lg font-medium text-[var(--orange)] transition-colors hover:text-[var(--orange-deep)]">
                          {item.company}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg font-medium text-[var(--orange)]">{item.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <ul className="space-y-3 text-sm leading-7 text-[rgba(45,45,45,0.82)]">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--orange)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-[rgba(255,107,53,0.22)] bg-[rgba(255,107,53,0.08)] px-3 py-1.5 text-xs font-semibold text-[var(--orange)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="flex w-full max-w-[360px] items-center justify-center rounded-[1.5rem] border border-[rgba(45,45,45,0.08)] bg-[linear-gradient(180deg,rgba(255,244,237,0.55),rgba(255,255,255,0.95))] p-6 shadow-[0_16px_40px_rgba(30,30,30,0.04)]">
                    <img src={oneViteLogo} alt="1vite.ai logo" className="w-full max-w-[300px] object-contain" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
