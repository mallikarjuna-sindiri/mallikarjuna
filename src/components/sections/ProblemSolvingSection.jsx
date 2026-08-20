import SectionHeading from '../common/SectionHeading';

export default function ProblemSolvingSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Problem Solving" title="Think. Solve. Optimize." subtitle="Algorithms, data structures and contests sharpen the way solutions are designed." />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-8 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              {['Algorithms', 'Data Structures', 'Competitive Programming', 'Coding Contests', 'Analytical Thinking'].map((item) => (
                <div key={item} className="rounded-3xl border border-[rgba(45,45,45,0.08)] bg-[var(--cream)] p-5">
                  <div className="text-sm font-semibold text-[var(--orange)]">{item}</div>
                  <p className="mt-2 text-sm leading-7 text-[rgba(45,45,45,0.72)]">Used to build cleaner logic and stronger decision making.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,244,237,0.92))] p-8">
            <div className="flex h-full min-h-[280px] items-center justify-center rounded-[1.5rem] border border-[rgba(45,45,45,0.08)] bg-white p-8">
              <div className="w-full max-w-md space-y-4">
                <div className="rounded-2xl bg-[rgba(255,107,53,0.1)] p-4 text-sm font-medium text-[var(--orange)]">Input problem</div>
                <div className="ml-10 border-l-2 border-dashed border-[rgba(255,107,53,0.4)] pl-6">
                  <div className="rounded-2xl bg-[var(--dark)] p-4 text-sm text-white">Break into parts</div>
                </div>
                <div className="ml-20 rounded-2xl border border-[rgba(45,45,45,0.08)] bg-[var(--cream)] p-4 text-sm font-medium text-[var(--ink)]">Optimize approach</div>
                <div className="rounded-2xl bg-[var(--orange)] p-4 text-sm font-semibold text-white">Deliver clean solution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
