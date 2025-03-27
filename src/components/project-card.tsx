import { Github } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  url?: string;
  source?: string;
  image?: string;
};

export const ProjectCard = ({
  title,
  description,
  url,
  source,
  image,
}: ProjectCardProps) => {
  return (
    <div className="p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <div className="text-muted-foreground text-sm mb-4 whitespace-pre-line">
        {description}
      </div>
      <div className="flex gap-3">
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">View source code for {title}</span>
          </a>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span className="sr-only">Visit {title} website</span>
          </a>
        )}
      </div>
    </div>
  );
};
