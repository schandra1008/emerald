export const LogoMark = ({ className = "h-9 w-9" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path d="M24 4 40 15v18L24 44 8 33V15L24 4Z" stroke="#d4af37" strokeWidth="2" />
    <path d="M24 4 31.5 15 24 25 16.5 15 24 4Z" fill="#10b981" />
    <path
      d="M16.5 15h15M24 25 12 33M24 25l12 8M24 25v19"
      stroke="#d4af37"
      strokeWidth="1.1"
      opacity="0.85"
    />
  </svg>
);

export const LogoWordmark = ({ compact = false }) => (
  <span className="flex items-center gap-3">
    <LogoMark className={compact ? "h-8 w-8" : "h-9 w-9"} />
    <span className="flex flex-col leading-none">
      <span className="font-serif text-xl font-bold tracking-[0.18em] text-[#fcfbf7]">
        EMERALD
      </span>
      <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.35em] text-[#d4af37]">
        Est. 1977 · Dubai
      </span>
    </span>
  </span>
);
