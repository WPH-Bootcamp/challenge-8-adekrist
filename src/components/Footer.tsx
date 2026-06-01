import { footerLinks, socialLinks } from '../data/content';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030609] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-panel/60 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
          <div>
            <Logo />
            <h2 className="mt-6 max-w-sm text-2xl font-black leading-tight text-white">
              LET'S DISCUSS YOUR IDEAS
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              A React, TypeScript, and TailwindCSS company profile website inspired by the provided mobile Figma design.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-white">Explore</p>
            <div className="mt-4 grid gap-3">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-semibold text-muted transition hover:text-lava">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-white">Social</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-ink text-xs font-black text-muted transition hover:border-lava hover:text-lava"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-muted">© 2026 TigerLay Studio. Built for growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
