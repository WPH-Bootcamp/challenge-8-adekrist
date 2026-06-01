import type { Service } from '../types/content';
import { Icon } from './Icon';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-panel p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-lava/45">
      <div className="absolute right-[-2rem] top-[-2rem] h-24 w-24 rounded-full bg-lava/0 blur-2xl transition group-hover:bg-lava/20" />
      <div className="relative">
        <span className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl bg-lava/15 text-lava ring-1 ring-lava/20">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
        <h3 className="text-base font-black text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
      </div>
    </article>
  );
}
