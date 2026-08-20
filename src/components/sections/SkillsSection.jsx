import { skills } from '../../data';
import SectionHeading from '../common/SectionHeading';

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Technical Skills" title="Tools to Build the Future" subtitle="A focused stack spanning product development, infrastructure and delivery." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(skills).map(([category, values]) => (
            <div key={category} className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-[var(--ink)]">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {values.map((skill) => (
                  <span key={skill} className="rounded-full border border-[rgba(255,107,53,0.18)] bg-[rgba(255,107,53,0.07)] px-3 py-1.5 text-xs font-semibold text-[var(--orange)] transition-colors hover:bg-[rgba(255,107,53,0.12)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
