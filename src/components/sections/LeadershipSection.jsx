import SectionHeading from '../common/SectionHeading';

export default function LeadershipSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Leadership & Activities" title="Beyond the Code" subtitle="Smaller in scale, but important in how it shapes communication and community work." />
        <div className="mt-10 max-w-3xl rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-7 shadow-soft">
          <div className="text-lg font-semibold text-[var(--orange)]">Vignana Jyothi Sahithivanam</div>
          <div className="mt-2 text-sm font-medium text-[rgba(45,45,45,0.7)]">Core Member</div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Literary activities', 'Cultural engagement', 'Event organization', 'Student participation', 'Club outreach'].map((item) => (
              <div key={item} className="rounded-2xl border border-[rgba(45,45,45,0.08)] bg-[var(--cream)] px-4 py-3 text-sm text-[var(--ink)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
