import clsx from 'clsx';
import type { Theme } from '../../hooks/useTheme';

interface NavbarProps {
  isScrolled: boolean;
  theme: Theme;
  onThemeToggle: () => void;
}

const NAV_LINKS = ['Work', 'Studio', 'Journal', 'About'] as const;

export default function Navbar({ isScrolled, theme, onThemeToggle }: NavbarProps) {
  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-[100]',
        'flex items-center justify-between',
        'transition-[background,backdrop-filter,padding] duration-500 ease-in-out',
        isScrolled
          ? 'bg-black/25 backdrop-blur-[14px] px-10 py-[0.9rem]'
          : 'bg-transparent backdrop-blur-none px-10 py-5',
      )}
    >
      {/* Logo */}
      <a
        href="#"
        className={clsx(
          'font-serif text-[1.1rem] font-bold tracking-[0.12em]',
          'transition-colors duration-500',
          isScrolled ? 'text-white' : 'text-neutral-900',
        )}
      >
        VÉRITÉ
      </a>

      {/* Links */}
      <ul className="flex items-center gap-10 list-none">
        {NAV_LINKS.map((label) => (
          <li key={label}>
            <a
              href="#"
              className={clsx(
                'text-[0.8rem] font-normal tracking-[0.1em] uppercase',
                'transition-colors duration-500',
                isScrolled
                  ? 'text-white/75 hover:text-white'
                  : 'text-neutral-900/70 hover:text-neutral-900',
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button
          onClick={onThemeToggle}
          aria-label="Toggle theme"
          className={clsx(
            'w-9 h-9 flex items-center justify-center rounded-full border',
            'transition-[color,border-color,background-color] duration-500 cursor-pointer',
            isScrolled
              ? 'text-white border-white/35 hover:bg-white/10 hover:border-white/60'
              : 'text-neutral-900 border-neutral-900/30 hover:bg-neutral-900/8 hover:border-neutral-900/50',
          )}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* CTA */}
        <a
          href="#"
          className={clsx(
            'text-[0.8rem] font-normal tracking-[0.1em] uppercase',
            'px-5 py-2 rounded-full border',
            'transition-[color,border-color,background-color] duration-500',
            isScrolled
              ? 'text-white border-white/35 hover:bg-white/10 hover:border-white/60'
              : 'text-neutral-900 border-neutral-900/30 hover:bg-neutral-900/8 hover:border-neutral-900/50',
          )}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
