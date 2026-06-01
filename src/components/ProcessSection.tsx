import { useState } from 'react';
import { processSteps } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our process"
          title="A clear path from idea to"
          highlight="Launch"
          description="A simple process keeps the project focused, transparent, and easy to review at every stage."
          align="center"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <article
                key={step.number}
                className={`group rounded-[1.7rem] border p-1 transition duration-300 ${
                  isActive ? 'border-lava/60 bg-lava/10 shadow-glow' : 'border-white/10 bg-panel/70 hover:border-lava/35'
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-start gap-4 rounded-[1.45rem] p-4 text-left lg:min-h-[240px] lg:flex-col lg:justify-between"
                  aria-expanded={isActive}
                  onClick={() => setActiveStep(index)}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lava text-sm font-black text-white shadow-glow">
                    {step.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-base font-black text-white">{step.title}</span>
                      <span className={`text-lava transition lg:hidden ${isActive ? 'rotate-180' : ''}`}>⌃</span>
                    </span>
                    <span
                      className={`mt-3 block overflow-hidden text-sm leading-6 text-muted transition-all duration-300 lg:max-h-48 ${
                        isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 lg:opacity-100'
                      }`}
                    >
                      {step.description}
                    </span>
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
