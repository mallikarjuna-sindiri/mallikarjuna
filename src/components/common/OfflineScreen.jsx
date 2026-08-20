import portfolioLogo from '../../images/logo.png';

export default function OfflineScreen() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-24">
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-[var(--dark)] shadow-[0_8px_40px_rgba(30,20,10,0.18)]">
          <img src={portfolioLogo} alt="Mallikarjuna Sindiri" className="h-full w-full object-cover" />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[var(--ink)]">No Internet</h2>
          <p className="mt-1.5 max-w-xs text-sm leading-6 text-[rgba(45,45,45,0.58)]">
            Check your connection — the page will restore automatically.
          </p>

          {/* Animated dots */}
          <div className="mt-4 flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full bg-[var(--orange)]"
                style={{ animation: `offlinePulse 1.4s ease-in-out ${i * 0.2}s infinite` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes offlinePulse {
          0%, 100% { opacity: 0.2; transform: scale(0.85); }
          50%       { opacity: 1;   transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
