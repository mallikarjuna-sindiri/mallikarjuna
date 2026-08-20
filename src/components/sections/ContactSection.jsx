import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactDetails } from '../../data';
import SectionHeading from '../common/SectionHeading';
import githubLogo from '../../images/github_logo.png';
import gmailLogo from '../../images/gmail_logo.png';
import linkedinLogo from '../../images/linkedin_logo.png';

const contactIcons = {
  Email: gmailLogo,
  LinkedIn: linkedinLogo,
  GitHub: githubLogo,
};

// ─── EmailJS credentials ───────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_ruhviaq';
const EMAILJS_TEMPLATE_ID = 'template_i0y25nv';
const EMAILJS_PUBLIC_KEY  = 'SBjB4E_mvVhA8YW2M';
// ───────────────────────────────────────────────────────────────────────────────

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Contact"
          title="Let's Build Something Impactful Together."
          subtitle="Interested in software engineering, full-stack development, AI or scalable systems?"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ── Contact details ── */}
          <div className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-7 shadow-soft">
            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-[rgba(45,45,45,0.08)] bg-[var(--cream)] px-4 py-4 transition-colors hover:border-[var(--orange)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(255,107,53,0.1)]">
                      <img src={contactIcons[detail.label]} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-[rgba(45,45,45,0.52)]">{detail.label}</div>
                      <div className="mt-1 font-medium text-[var(--ink)]">{detail.value}</div>
                    </div>
                  </div>
                  <span className="text-[var(--orange)]">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Contact form ── */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,244,237,0.92))] p-7 shadow-soft"
          >
            <div className="grid gap-5">

              {/* Name → {{from_name}} */}
              <label className="grid gap-2 text-sm font-semibold text-[var(--ink)]">
                Name
                <input
                  type="text"
                  name="from_name"
                  required
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="rounded-2xl border border-[rgba(45,45,45,0.12)] bg-white px-4 py-3 text-base outline-none transition-colors placeholder:text-[rgba(45,45,45,0.38)] focus:border-[var(--orange)]"
                />
              </label>

              {/* Email → {{from_email}} */}
              <label className="grid gap-2 text-sm font-semibold text-[var(--ink)]">
                Email
                <input
                  type="email"
                  name="from_email"
                  required
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="rounded-2xl border border-[rgba(45,45,45,0.12)] bg-white px-4 py-3 text-base outline-none transition-colors placeholder:text-[rgba(45,45,45,0.38)] focus:border-[var(--orange)]"
                />
              </label>

              {/* Subject → {{subject}} */}
              <label className="grid gap-2 text-sm font-semibold text-[var(--ink)]">
                Subject
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="rounded-2xl border border-[rgba(45,45,45,0.12)] bg-white px-4 py-3 text-base outline-none transition-colors placeholder:text-[rgba(45,45,45,0.38)] focus:border-[var(--orange)]"
                />
              </label>

              {/* Message → {{message}} */}
              <label className="grid gap-2 text-sm font-semibold text-[var(--ink)]">
                Message
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the problem you want to solve..."
                  className="rounded-2xl border border-[rgba(45,45,45,0.12)] bg-white px-4 py-3 text-base outline-none transition-colors placeholder:text-[rgba(45,45,45,0.38)] focus:border-[var(--orange)]"
                />
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--orange)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--orange-deep)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending…
                  </>
                ) : (
                  'Send Message →'
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  <span className="text-lg">✓</span>
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  <span className="text-lg">✕</span>
                  Something went wrong. Please try emailing directly.
                </div>
              )}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
