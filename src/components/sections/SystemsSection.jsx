import { getTechLogo } from '../../utils/techLogos';
import SectionHeading from '../common/SectionHeading';
import TechLogo from '../common/TechLogo';

const principles = ['Performance', 'Security', 'Scalability', 'Reliability', 'Real Impact'];

export default function SystemsSection() {
  return (
    <section className="bg-[var(--dark)] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Scalable Systems" title="Built for Scale" subtitle="Designing applications that are reliable, performant and ready to grow." dark />
        <div className="mt-10 rounded-[1.75rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 sm:p-8">
          <div className="grid gap-4 lg:grid-cols-5 lg:items-center">
            {['Client', 'Frontend', 'Backend APIs', 'Database / Cache', 'Cloud Infrastructure'].map((step, index) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="flex h-20 w-full items-center justify-center rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-sm font-semibold text-white">
                  {step}
                </div>
                {index < 4 ? <div className="my-4 hidden h-8 w-px bg-[rgba(255,107,53,0.45)] lg:block" /> : null}
                {index < 4 ? <div className="mb-4 text-[var(--orange)] lg:hidden">↓</div> : null}
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {['React / Next.js', 'FastAPI / Node.js', 'MongoDB / MySQL', 'Docker', 'AWS / GCP', 'GKE'].map((item) => {
              const logo = getTechLogo(item);
              return (
                <div key={item} className="flex items-center justify-center gap-2 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-center text-sm font-medium text-[rgba(255,255,255,0.82)]">
                  <TechLogo src={logo} alt={item} className="h-4 w-4 object-contain" />
                  {item}
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {principles.map((item) => (
              <span key={item} className="rounded-full border border-[rgba(255,107,53,0.26)] bg-[rgba(255,107,53,0.1)] px-4 py-2 text-sm font-semibold text-[var(--orange)]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
