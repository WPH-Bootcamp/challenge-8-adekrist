import type { Project } from '../types/content';
import { Icon } from './Icon';
import { ProjectVisual } from './ProjectVisual';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-panel p-3 shadow-card transition duration-300 hover:-translate-y-1 hover:border-lava/40">
      <ProjectVisual project={project} />
      <div className="p-3 sm:p-4">
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-lava">{project.id}</p>
        <h3 className="mt-2 text-xl font-black text-white">{project.title}</h3>
        <p className="mt-1 text-sm font-semibold text-muted">{project.category}</p>
        <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-white/[0.04] p-3 text-sm font-bold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-lava/15 text-lava">
            <Icon name="chart" className="h-4 w-4" />
          </span>
          {project.result}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
