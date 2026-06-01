import { projects } from '../data/content';
import { ButtonLink } from './ButtonLink';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden bg-ink py-16 sm:py-24">
      <div className="absolute right-[-12rem] top-20 h-80 w-80 rounded-full bg-lava/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="From Vision to Launch Project With a"
            highlight="Proven Flow"
            description="A selection of product, landing page, and dashboard concepts recreated as code-ready case studies."
          />
          <ButtonLink href="#contact" variant="ghost" className="w-full shrink-0 sm:w-auto">
            Start Your Project
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
