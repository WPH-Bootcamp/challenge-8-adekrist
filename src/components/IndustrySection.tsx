import { useState } from 'react';
import { industries } from '../data/content';
import { ButtonLink } from './ButtonLink';
import { Icon } from './Icon';
import { IndustryVisual } from './IndustryVisual';
import { SectionHeading } from './SectionHeading';

export function IndustrySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Industries"
              title="Built for Your"
              highlight="Industry"
              description="We adapt the layout, content, and features to match the way your market builds trust and wins users."
            />

            <div className="mt-7 flex flex-wrap gap-2" role="tablist" aria-label="Industry tabs">
              {industries.map((industry, index) => (
                <button
                  key={industry.title}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    activeIndex === index
                      ? 'border-lava bg-lava text-white shadow-glow'
                      : 'border-white/10 bg-white/[0.03] text-muted hover:border-lava/40 hover:text-white'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {industry.title}
                </button>
              ))}
            </div>

            <div className="mt-7 rounded-[1.7rem] border border-white/10 bg-panel/70 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-lava">{activeIndustry.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-black text-white">{activeIndustry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{activeIndustry.description}</p>
              <div className="mt-5 grid gap-3">
                {activeIndustry.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-3 text-sm font-semibold text-white">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-lava/15 text-lava">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {tag}
                  </div>
                ))}
              </div>
              <ButtonLink href="#contact" className="mt-6 w-full sm:w-auto">
                Discuss Industry Needs
              </ButtonLink>
            </div>
          </div>

          <IndustryVisual activeTitle={activeIndustry.title} />
        </div>
      </div>
    </section>
  );
}
