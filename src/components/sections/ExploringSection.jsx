import { exploring } from '../../data';
import SectionHeading from '../common/SectionHeading';

export default function ExploringSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,244,237,0.92))] p-7">
          <SectionHeading kicker="Currently Exploring" title="Currently Exploring" subtitle="Topics being explored more deeply right now." />
          <div className="mt-6 flex flex-wrap gap-3">
            {exploring.map((item) => (
              <span key={item} className="rounded-full border border-[rgba(255,107,53,0.22)] bg-[rgba(255,107,53,0.08)] px-4 py-2 text-sm font-semibold text-[var(--orange)]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
