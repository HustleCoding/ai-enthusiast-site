import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlogCard from "../components/BlogCard";
import ProjectCard from "../components/ProjectCard";
import { blogPosts } from "../data/posts";
import { projects } from "../data/projects";

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <p className="hero-label">Open-Source AI Enthusiast</p>
        <h1 className="hero-title">
          Building with <span className="highlight">open models</span>
        </h1>
        <p className="hero-subtitle">
          Exploring Kimi&nbsp;K2, DeepSeek&nbsp;V3, and the open-source AI
          ecosystem. Writing about what works, what doesn't, and how to run
          frontier models on your own hardware.
        </p>
        <div className="hero-actions">
          <Link to="/blog" className="btn btn-primary">
            Read the Blog
          </Link>
          <Link to="/projects" className="btn btn-ghost">
            View Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Latest</h2>
          <Link to="/blog" className="section-link">
            All posts <ArrowRight size={16} />
          </Link>
        </div>
        <div className="blog-list">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Projects</h2>
          <Link to="/projects" className="section-link">
            All projects <ArrowRight size={16} />
          </Link>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
