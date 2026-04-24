import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main>
      <section className="page-header">
        <h1>Projects</h1>
        <p>
          Open-source tools and experiments at the intersection of LLMs,
          inference optimization, and practical AI engineering.
        </p>
      </section>

      <section className="section">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
