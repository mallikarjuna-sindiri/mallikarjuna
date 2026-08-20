import { capabilityCards } from '../../data';
import SectionHeading from '../common/SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="About" title="A Problem Solver at Heart" subtitle="Focused on engineering thoughtful software, not just shipping interfaces." />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-8 shadow-soft">
            <p className="max-w-3xl text-lg leading-8 text-[rgba(45,45,45,0.84)]">
              Mallikarjuna is a Computer Science student who enjoys turning unclear problems into structured systems. The focus is on full-stack development, backend engineering, AI/ML, cloud technologies, scalable systems and practical problem solving.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilityCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-[rgba(45,45,45,0.08)] bg-[var(--cream)] p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-[rgba(255,107,53,0.4)]">
                  <h3 className="text-lg font-semibold text-[var(--ink)]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[rgba(45,45,45,0.76)]">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,244,237,0.92))] p-8">
            <div className="grid gap-4">
              {['Real-world workflows', 'Backend logic', 'Cloud readiness', 'Product-minded delivery'].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-3xl border border-[rgba(45,45,45,0.08)] bg-white p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(255,107,53,0.12)] text-lg font-bold text-[var(--orange)]">0{index + 1}</div>
                  <div>
                    <div className="font-semibold">{item}</div>
                    <div className="text-sm text-[rgba(45,45,45,0.68)]">Designed for clarity and practical execution.</div>
                  </div>
                </div>
              ))}
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}
