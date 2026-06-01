import { heroMetrics } from '../data/content';
import { ButtonLink } from './ButtonLink';
import { HeroPhone } from './HeroPhone';
import { Icon } from './Icon';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-aurora pb-12 pt-28 sm:pb-20 lg:pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div className="animate-rise">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-muted">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-lava/15 text-lava">
              <Icon name="spark" className="h-3.5 w-3.5" />
            </span>
            Digital product studio for modern brands
          </div>

          <h1 className="max-w-3xl text-balance text-[2.65rem] font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Your Tech Partner for{' '}
            <span className="text-lava">Smarter Growth</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-lg sm:leading-8">
            We design and build high-performing digital experiences that help startups and businesses launch faster, scale smarter, and look more credible.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#contact" className="w-full sm:w-auto">
              Let's Talk
            </ButtonLink>
            <ButtonLink href="#projects" variant="ghost" className="w-full sm:w-auto">
              See Our Work
            </ButtonLink>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-3 rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 backdrop-blur lg:max-w-xl">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl bg-panel/60 px-3 py-4 text-center">
                <dt className="text-lg font-black text-white sm:text-2xl">{metric.value}</dt>
                <dd className="mt-1 text-[10px] font-medium leading-4 text-muted sm:text-xs">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-rise [animation-delay:120ms]">
          <HeroPhone />
        </div>
      </div>
    </section>
  );
}
