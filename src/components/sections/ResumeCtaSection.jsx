import resumePdf from '../../images/SINDIRI_MALLIKARJUNA_Resume.pdf';

export default function ResumeCtaSection() {
  return (
    <section id="resume" className="bg-[var(--dark)] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--orange)]">Resume CTA</div>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Have a problem worth solving?</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[rgba(255,255,255,0.76)]">Let's build something impactful.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--orange)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--orange-deep)]"
            >
              View Resume
            </a>
            <a
              href={resumePdf}
              download="SINDIRI_MALLIKARJUNA_Resume.pdf"
              className="rounded-full border border-[rgba(255,255,255,0.16)] px-6 py-3 font-semibold text-white transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
