import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { certifications } from '../../data';
import SectionHeading from '../common/SectionHeading';

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  const featuredCerts = certifications.filter((c) => c.featured);
  const additionalCerts = certifications.filter((c) => !c.featured);

  // Close modal on ESC key press & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Certifications"
          title="Certifications & Credentials"
          subtitle="Continuous learning, professional certifications, and technical credentials."
        />

        {/* ── Featured Certifications Grid (3 cards per row on desktop) ── */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCerts.map((cert) => (
            <article
              key={cert.id}
              className="group flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,107,53,0.3)] hover:shadow-xl"
            >
              <div>
                {/* Header Badges */}
                <div className="flex items-center justify-between gap-2 border-b border-[rgba(45,45,45,0.06)] pb-4">
                  <span className="rounded-md bg-[rgba(255,107,53,0.1)] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--orange)]">
                    {cert.category}
                  </span>
                  <span className="text-[11px] font-bold text-[rgba(45,45,45,0.5)]">
                    {cert.date}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-lg font-black leading-snug tracking-[-0.02em] text-[var(--ink)] transition-colors group-hover:text-[var(--orange)]">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold text-[rgba(45,45,45,0.65)]">
                    {cert.issuer} • <span className="text-[var(--orange)]">{cert.level}</span>
                  </p>
                  <p className="mt-3 text-xs leading-6 text-[rgba(45,45,45,0.76)] line-clamp-3">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Footer CTA & Validity */}
              <div className="mt-6 flex items-center justify-between border-t border-[rgba(45,45,45,0.06)] pt-4">
                <span className="text-[11px] font-semibold text-[rgba(45,45,45,0.5)]">
                  {cert.validity}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(255,107,53,0.08)] px-3.5 py-1.5 text-xs font-bold text-[var(--orange)] transition-all hover:bg-[var(--orange)] hover:text-white"
                >
                  <span>View Certificate</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ── More Certifications Secondary Section ── */}
        {additionalCerts.length > 0 && (
          <div className="mt-16 border-t border-[rgba(45,45,45,0.08)] pt-12">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-[var(--ink)]">
                More Certifications
              </h3>
              <p className="mt-1 text-sm font-semibold text-[rgba(45,45,45,0.65)]">
                Supporting technical credentials and specialized skill courses.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {additionalCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="group flex flex-col justify-between rounded-[1.5rem] border border-[rgba(45,45,45,0.08)] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[rgba(255,107,53,0.25)] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md bg-[rgba(45,45,45,0.05)] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[rgba(45,45,45,0.7)]">
                        {cert.category}
                      </span>
                      <span className="text-[11px] font-medium text-[rgba(45,45,45,0.5)]">
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="mt-3 text-base font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--orange)]">
                      {cert.title}
                    </h4>
                    <p className="mt-1 text-xs font-semibold text-[rgba(45,45,45,0.6)]">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[rgba(45,45,45,0.06)] pt-3">
                    <span className="text-[11px] text-[rgba(45,45,45,0.5)]">
                      {cert.validity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[var(--orange)] hover:underline"
                    >
                      <span>View</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CERTIFICATE LIGHTBOX MODAL (PORTAL TO BODY)
         ───────────────────────────────────────────────────────────── */}
      {selectedCert &&
        createPortal(
          <div
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#18181b] p-5 text-white shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-2 pb-4">
                <div>
                  <span className="rounded-md bg-[rgba(255,107,53,0.2)] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-[var(--orange)]">
                    {selectedCert.category}
                  </span>
                  <h4 className="mt-1.5 text-base font-bold text-white sm:text-xl">
                    {selectedCert.title}
                  </h4>
                  <p className="text-xs text-white/60 sm:text-sm">
                    Issued by {selectedCert.issuer} • {selectedCert.date}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="shrink-0 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-white/20"
                >
                  ✕ Close (ESC)
                </button>
              </div>

              {/* Certificate Image Frame */}
              <div className="flex min-h-0 flex-1 items-center justify-center p-4">
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} Certificate`}
                  className="max-h-[75vh] w-auto max-w-full rounded-lg border border-white/10 object-contain shadow-2xl"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
