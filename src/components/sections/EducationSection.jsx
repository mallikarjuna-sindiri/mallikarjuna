import { education } from '../../data';
import SectionHeading from '../common/SectionHeading';

export default function EducationSection() {
  return (
    <section id="education" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Education"
          title="Academic Background"
          subtitle="Formal education, academic institutions, and grades."
        />

        <div className="mt-10 space-y-6">
          {education.map((item) => (
            <div
              key={item.institution}
              className="relative overflow-hidden rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-7 shadow-soft transition-all duration-300 hover:border-[rgba(255,107,53,0.3)] hover:shadow-md sm:p-8"
            >
              <div className="absolute left-8 top-8 h-full w-px bg-[rgba(255,107,53,0.2)]" />
              <div className="relative flex flex-col gap-4 pl-6 sm:flex-row sm:items-center sm:justify-between sm:pl-8">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-4 shrink-0 rounded-full border-4 border-white bg-[var(--orange)] shadow-[0_0_0_5px_rgba(255,107,53,0.12)]" />
                    <h3 className="text-xl font-bold text-[var(--ink)] sm:text-2xl">
                      {item.institution}
                    </h3>
                  </div>
                  <p className="mt-2 pl-7 text-sm font-semibold text-[rgba(45,45,45,0.78)] sm:text-base">
                    {item.degree}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-2.5 pl-7 shrink-0 sm:items-end sm:pl-0">
                  <span className="rounded-full border border-[rgba(45,45,45,0.12)] bg-[#fafafa] px-4 py-1.5 text-xs font-bold text-[rgba(45,45,45,0.7)] shadow-sm">
                    {item.duration}
                  </span>
                  <span className="rounded-full border border-[rgba(255,107,53,0.25)] bg-[rgba(255,107,53,0.09)] px-4 py-1.5 text-xs font-extrabold text-[var(--orange)] shadow-sm">
                    {item.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
