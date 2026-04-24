import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="project-card"
    >
      <h3 className="project-name">
        {project.name}
        <ArrowUpRight size={16} className="project-arrow" />
      </h3>
      <p className="project-desc">{project.description}</p>
      <div className="tags">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
