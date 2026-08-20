import SectionHeading from '../common/SectionHeading';

export default function ProcessSection() {
  const steps = [
    {
      index: '01',
      title: 'Understand',
      subtitle: 'Identify the Problem',
      description: 'Understand users, requirements and real-world constraints.',
    },
    {
      index: '02',
      title: 'Design',
      subtitle: 'Engineer the Solution',
      description: 'Plan the product, architecture and technology stack.',
    },
    {
      index: '03',
      title: 'Build',
      subtitle: 'Develop the Application',
      description: 'Write clean code, test thoroughly and iterate.',
    },
    {
      index: '04',
      title: 'Scale',
      subtitle: 'Optimize for Impact',
      description: 'Deploy, improve performance, reliability and scalability.',
    },
  ];

  return (
    <section className="bg-[var(--cream)] px-4 py-16 text-[var(--ink)] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--orange)]">My Approach</div>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--ink)] sm:text-5xl">
            From Real-World Problems
            <span className="block">to Scalable Solutions</span>
          </h2>
          <p className="mt-4 text-base leading-8 text-[rgba(45,45,45,0.72)]">
            I follow a structured engineering approach to turn ideas into impactful, scalable and reliable web applications.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.index} className="relative rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-3 text-[var(--orange)]">
                <span className="text-2xl font-black">{step.index}</span>
                <div className="h-px flex-1 bg-[rgba(255,107,53,0.38)]" />
              </div>
              <div className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-[rgba(45,45,45,0.46)]">{step.title}</div>
              <h3 className="mt-2 text-xl font-bold text-[var(--ink)]">{step.subtitle}</h3>
              <p className="mt-3 text-sm leading-7 text-[rgba(45,45,45,0.76)]">{step.description}</p>
              {index < steps.length - 1 ? <div className="absolute -right-2 top-1/2 hidden h-px w-8 bg-[rgba(255,107,53,0.5)] lg:block" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
