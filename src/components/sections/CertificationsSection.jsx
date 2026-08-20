import { Link } from 'react-router-dom';
import { certifications } from '../../data';
import SectionHeading from '../common/SectionHeading';

export default function CertificationsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Certifications" title="Learning That Shows Up in the Work" subtitle="Clean certification cards that keep the focus on what was learned." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-white p-6 shadow-soft">
              <h3 className="text-lg font-bold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[rgba(45,45,45,0.76)]">{item.description}</p>
              <Link to="/contact" className="mt-5 inline-flex font-semibold text-[var(--orange)] transition-colors hover:text-[var(--orange-deep)]">
                View Certificate →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
