import { achievements } from '../../data';
import SectionHeading from '../common/SectionHeading';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Achievements" title="Milestones Along the Way" subtitle="A record of contests, hackathons and industry exposure." />
        <div className="mt-10 space-y-5">
          {achievements.map((item) => (
            <div key={item.title} className="relative rounded-[1.5rem] border border-[rgba(45,45,45,0.08)] bg-white p-6 shadow-soft">
              <div className="absolute left-6 top-6 h-full w-px bg-[rgba(255,107,53,0.18)]" />
              <div className="relative flex gap-5 pl-8">
                <div className="mt-1 h-4 w-4 rounded-full bg-[var(--orange)] shadow-[0_0_0_6px_rgba(255,107,53,0.12)]" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--ink)]">{item.title}</h3>
                  <p className="mt-2 max-w-4xl text-sm leading-7 text-[rgba(45,45,45,0.78)]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
