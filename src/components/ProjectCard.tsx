import { ExternalLink, Star } from "lucide-react";
import type { Project } from "../types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-name">{project.name}</h3>
        {project.stars && (
          <span className="project-stars">
            <Star size={14} />
            {project.stars}
          </span>
        )}
      </div>

      <p className="project-desc">{project.description}</p>

      <div className="project-footer">
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
