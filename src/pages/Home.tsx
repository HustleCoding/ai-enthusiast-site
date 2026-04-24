import { Link } from "react-router-dom";
import { ArrowRight, Cpu, BookOpen, Sparkles } from "lucide-react";
import BlogCard from "../components/BlogCard";
import ProjectCard from "../components/ProjectCard";
import { blogPosts } from "../data/posts";
import { projects } from "../data/projects";

export default function Home() {
  const latestPosts = blogPosts.slice(0, 2);
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            Open-Source AI Advocate
          </div>
          <h1 className="hero-title">
            Building the future with
            <span className="gradient-text"> open models</span>
          </h1>
          <p className="hero-subtitle">
            I explore, benchmark, and build with open-source AI — from
            Kimi&nbsp;K2 and DeepSeek&nbsp;V3 to fine-tuned small models that
            outperform proprietary giants. This is where I share what I learn.
          </p>
          <div className="hero-actions">
            <Link to="/blog" className="btn btn-primary">
              <BookOpen size={18} />
              Read the Blog
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              <Cpu size={18} />
              View Projects
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orb" />
        </div>
      </section>

      {/* Latest Posts */}
      <section className="section">
        <div className="section-header">
          <h2>Latest Posts</h2>
          <Link to="/blog" className="section-link">
            All posts <ArrowRight size={16} />
          </Link>
        </div>
        <div className="blog-grid">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="section-header">
          <h2>Featured Projects</h2>
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
