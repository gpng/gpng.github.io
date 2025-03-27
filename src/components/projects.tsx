import { projects } from '@/lib/data/projects';
import { ProjectCard } from './project-card';

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.name}
          description={project.description}
          url={project.website ?? undefined}
          source={project.github ?? undefined}
          image={project.image}
        />
      ))}
    </div>
  );
};
