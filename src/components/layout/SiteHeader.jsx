import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../data';
import portfolioLogo from '../../images/logo.png';
import resumePdf from '../../images/SINDIRI_MALLIKARJUNA_Resume.pdf';

export default function SiteHeader({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,244,237,0.95)] backdrop-blur-xl shadow-[0_2px_16px_rgba(30,20,10,0.10)] border-b-2 border-[var(--orange)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 font-semibold tracking-[0.24em] text-[0.78rem] text-[var(--ink)]">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-[var(--dark)] shadow-soft">
            <img src={portfolioLogo} alt="Mallikarjuna Sindiri logo" className="h-full w-full object-cover" />
          </span>
          <div className="leading-tight">
            <div className="text-sm tracking-[0.3em]">MALLIKARJUNA</div>
            <div className="text-xs font-medium tracking-[0.2em] text-[rgba(45,45,45,0.72)]">SINDIRI</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `relative group font-medium transition-colors duration-200 pb-0.5 ${
                  isActive ? 'text-[var(--orange)]' : 'text-[var(--ink)] hover:text-[var(--orange)]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[var(--orange)] rounded-full transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--orange)] px-4 py-2 font-medium text-white transition-all duration-200 hover:bg-[var(--orange-deep)] hover:shadow-[0_0_0_3px_rgba(255,107,53,0.25)]"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(45,45,45,0.12)] bg-white text-[var(--ink)] lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          <span className="text-xl">{menuOpen ? '×' : '☰'}</span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-[rgba(45,45,45,0.08)] bg-[var(--cream)] px-4 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:px-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  `rounded-2xl px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[rgba(255,107,53,0.08)] text-[var(--orange)] font-semibold border-l-2 border-[var(--orange)]'
                      : 'text-[var(--ink)] hover:bg-[rgba(255,107,53,0.08)] hover:text-[var(--orange)]'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[var(--orange)] px-3 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--orange-deep)]"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
