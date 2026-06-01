import { resultMetrics } from '../data/content';
import { Icon } from './Icon';
import { MetricOrb } from './MetricOrb';
import { SectionHeading } from './SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink py-16 sm:py-24">
      <div className="absolute right-[-10rem] top-4 h-72 w-72 rounded-full bg-lava/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Build results"
              title="End-to-End Solutions That Drive"
              highlight="Results"
              description="From strategy and design to production-ready code, TigerLay combines creative thinking and engineering discipline to turn ideas into reliable digital products."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Business-first product planning',
                'Mobile-to-desktop responsive UI',
                'Clean React component architecture',
                'Launch support and iteration',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-panel/55 p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lava/15 text-lava">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4 sm:gap-6 lg:pl-8">
            {resultMetrics.map((metric) => (
              <MetricOrb key={metric.label} metric={metric} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
