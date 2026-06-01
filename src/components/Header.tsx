import { useState } from 'react';
import { navigationLinks } from '../data/content';
import { Logo } from './Logo';
import { ButtonLink } from './ButtonLink';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/82 backdrop-blur-2xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-lava focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Logo />

        <div className="hidden items-center gap-7 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted transition hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <ButtonLink href="#contact" className="px-4 py-2 text-xs">
            Let's Talk
          </ButtonLink>
        </div>

        <button
          type="button"
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:border-lava/60 md:hidden"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-panel/95 p-3 shadow-card">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-muted transition hover:bg-white/[0.04] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink href="#contact" onClick={closeMenu} className="mt-2 w-full py-3">
            Start a Project
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
