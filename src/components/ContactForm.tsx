import type { FormEvent } from 'react';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

const serviceOptions = ['Website', 'Mobile App', 'Dashboard', 'UI/UX Design'];

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();
    window.alert('Thank you! Your project brief has been prepared for review.');
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-16 sm:py-24">
      <div className="absolute left-[-10rem] bottom-10 h-72 w-72 rounded-full bg-lava/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Ready to Start?"
            highlight="Let’s Talk"
            description="Tell us what you want to build. This form is prepared with accessible fields, clear focus states, and mobile-friendly spacing."
          />

          <div className="mt-8 space-y-4">
            {[
              ['Email', 'hello@tigerlay.studio'],
              ['Location', 'Remote-first digital team'],
              ['Response', 'Within 1 business day'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-panel/70 p-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lava/15 text-lava">
                  <Icon name="globe" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">{label}</p>
                  <p className="mt-1 text-sm font-bold text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-panel p-5 shadow-card sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-white">Name</span>
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted/60 focus:border-lava focus:ring-2 focus:ring-lava/25"
              />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-white">Email</span>
              <input
                required
                name="email"
                type="email"
                placeholder="you@email.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted/60 focus:border-lava focus:ring-2 focus:ring-lava/25"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-sm font-bold text-white">Project Type</span>
              <select
                name="projectType"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none transition focus:border-lava focus:ring-2 focus:ring-lava/25"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a project type
                </option>
                <option>Company Profile Website</option>
                <option>Landing Page</option>
                <option>Dashboard</option>
                <option>Mobile App UI</option>
              </select>
            </label>
          </div>

          <fieldset className="mt-5">
            <legend className="text-sm font-bold text-white">Services Needed</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {serviceOptions.map((option) => (
                <label key={option} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-ink px-4 py-3 text-sm font-semibold text-muted transition hover:border-lava/40 hover:text-white">
                  <input type="checkbox" name="services" value={option} className="h-4 w-4 accent-lava" />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-white">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell us about your goals, timeline, and target users."
              className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted/60 focus:border-lava focus:ring-2 focus:ring-lava/25"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-lava px-6 py-3.5 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#ff735d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lava focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
          >
            Send Project Brief
          </button>
        </form>
      </div>
    </section>
  );
}
