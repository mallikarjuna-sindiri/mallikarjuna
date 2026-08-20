import SectionHeading from '../common/SectionHeading';

export default function AiSection() {
  return (
    <section className="bg-[var(--dark)] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="AI / ML" title="Intelligent Applications" subtitle="Focused on practical AI features rather than inflated claims." dark />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-7">
            <p className="text-sm leading-7 text-[rgba(255,255,255,0.76)]">
              Interest centers on AI-powered applications, image processing, large language models, prompt engineering and features that make products more useful without losing reliability.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['AI-powered apps', 'Image processing', 'LLM concepts', 'Prompt engineering'].map((item) => (
                <div key={item} className="rounded-2xl border border-[rgba(255,107,53,0.18)] bg-[rgba(255,107,53,0.08)] px-4 py-3 text-sm font-semibold text-[var(--orange)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {['Feature extraction', 'Inference flow', 'API orchestration', 'Model-assisted UX'].map((item, index) => (
                <div key={item} className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-5">
                  <div className="text-sm font-semibold text-[var(--orange)]">0{index + 1}</div>
                  <div className="mt-2 text-base font-medium">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
