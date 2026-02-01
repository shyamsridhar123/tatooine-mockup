export function DroidIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="4" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="8" r="1.5" fill="currentColor" />
      <circle cx="15" cy="8" r="1.5" fill="currentColor" />
      <rect x="8" y="12" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="14" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="14" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="14" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function AstromechIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="8" r="2" fill="currentColor" />
      <rect x="9" y="16" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="20" x2="10" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="20" x2="14" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ImperialIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="16" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" />
      <line x1="2" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function HolonetIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function TwinSunsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="10" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="16" cy="12" r="5" fill="currentColor" />
      <path d="M2 20h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DatapadIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="7" x2="16" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="15" x2="12" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CreditsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 6v12M8 9h8M8 15h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BountyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}
