import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data/posts";

export default function Blog() {
  return (
    <main>
      <section className="page-header">
        <h1>Blog</h1>
        <p>
          Deep dives into open-source AI models, tooling, and the ecosystem
          that's reshaping the industry.
        </p>
      </section>

      <section className="section">
        <div className="blog-grid blog-grid-full">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
