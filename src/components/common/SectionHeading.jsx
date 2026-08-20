export default function SectionHeading({ kicker, title, subtitle, dark = false }) {
  return (
    <div className="max-w-3xl">
      <div className={`text-sm font-semibold uppercase tracking-[0.3em] ${dark ? 'text-[var(--orange)]' : 'text-[var(--orange)]'}`}>
        {kicker}
      </div>
      <h2 className={`mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl ${dark ? 'text-white' : 'text-[var(--ink)]'}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 ${dark ? 'text-[rgba(255,255,255,0.72)]' : 'text-[rgba(45,45,45,0.72)]'}`}>
        {subtitle}
      </p>
    </div>
  );
}
