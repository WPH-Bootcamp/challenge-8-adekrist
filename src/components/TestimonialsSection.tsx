import { testimonials } from '../data/content';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

export function TestimonialsSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Partners Say About Working"
          highlight="With Us"
          description="We keep collaboration clear, practical, and focused on outcomes that are useful after launch."
          align="center"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="relative overflow-hidden rounded-[2rem] border border-lava/25 bg-gradient-to-br from-lava/14 via-panel to-panel p-6 shadow-glow sm:p-8">
            <div className="absolute right-[-4rem] top-[-4rem] h-48 w-48 rounded-full bg-lava/20 blur-3xl" />
            <div className="relative">
              <span className="text-6xl font-black leading-none text-lava">“</span>
              <p className="mt-2 text-xl font-bold leading-9 text-white sm:text-3xl sm:leading-[1.35]">
                {testimonials[0].quote}
              </p>
              <div className="mt-8 flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-lava text-sm font-black text-white shadow-glow">
                    NP
                  </div>
                  <div>
                    <p className="font-black text-white">{testimonials[0].name}</p>
                    <p className="text-sm text-muted">
                      {testimonials[0].role}, {testimonials[0].company}
                    </p>
                  </div>
                </div>
                <div className="hidden items-center gap-1 text-gold sm:flex" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            {testimonials.slice(1).map((testimonial) => (
              <article key={testimonial.name} className="rounded-[1.7rem] border border-white/10 bg-panel p-5 shadow-card">
                <div className="mb-4 flex items-center gap-1 text-gold" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm leading-7 text-white">“{testimonial.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-lava/15 text-xs font-black text-lava">
                    {testimonial.name
                      .split(' ')
                      .map((word) => word[0])
                      .join('')}
                  </span>
                  <div>
                    <p className="text-sm font-black text-white">{testimonial.name}</p>
                    <p className="text-xs text-muted">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-center gap-3 text-white">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-lava text-white">
                  <Icon name="users" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-black">Trusted collaboration</p>
                  <p className="text-sm text-muted">Clear timeline, feedback loops, and launch-ready handover.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
