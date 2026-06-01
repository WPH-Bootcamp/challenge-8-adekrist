import { ButtonLink } from './ButtonLink';

export function ContactPreview() {
  return (
    <section className="bg-ink px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-lava/30 bg-lava p-4 shadow-glow sm:rounded-[2.5rem] sm:p-6">
        <div className="grid gap-6 rounded-[1.6rem] bg-gradient-to-br from-[#ff705a] to-[#e84b35] p-5 sm:rounded-[2rem] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">Let’s create something</p>
            <h2 className="mt-3 max-w-lg text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Let's create something people remember.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Bring your idea, brand, or existing product. We will help shape it into a sharper digital experience.
            </p>
            <ButtonLink href="#contact" variant="dark" className="mt-7 w-full sm:w-auto">
              Book a Call
            </ButtonLink>
          </div>

          <div className="relative min-h-[240px] overflow-hidden rounded-[1.5rem] bg-[#1a1010] p-5 sm:min-h-[310px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(255,255,255,.24),transparent_22%),radial-gradient(circle_at_20%_70%,rgba(255,189,84,.28),transparent_26%)]" />
            <div className="relative mt-6 grid grid-cols-3 gap-3">
              <div className="h-36 rounded-[1.2rem] bg-white/15 p-3 backdrop-blur">
                <span className="block h-14 rounded-full bg-[#2b313b]" />
                <span className="mt-4 block h-2 rounded-full bg-white/40" />
                <span className="mt-2 block h-2 w-2/3 rounded-full bg-white/25" />
              </div>
              <div className="mt-10 h-36 rounded-[1.2rem] bg-white/20 p-3 backdrop-blur">
                <span className="block h-14 rounded-full bg-[#38475b]" />
                <span className="mt-4 block h-2 rounded-full bg-white/40" />
                <span className="mt-2 block h-2 w-2/3 rounded-full bg-white/25" />
              </div>
              <div className="h-36 rounded-[1.2rem] bg-white/15 p-3 backdrop-blur">
                <span className="block h-14 rounded-full bg-[#2f2430]" />
                <span className="mt-4 block h-2 rounded-full bg-white/40" />
                <span className="mt-2 block h-2 w-2/3 rounded-full bg-white/25" />
              </div>
            </div>
            <div className="relative mt-5 rounded-2xl bg-white p-3 text-center text-sm font-black text-ink">
              Meet your digital growth team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
