import { services } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { ServiceCard } from './ServiceCard';

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink py-16 sm:py-24">
      <div className="absolute left-[-12rem] top-1/3 h-72 w-72 rounded-full bg-lava/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Smart IT Solutions That Grow"
          highlight="With You"
          description="Choose a focused service or combine multiple capabilities to build a complete digital product."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
