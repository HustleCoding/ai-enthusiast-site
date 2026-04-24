import { Link } from "react-router-dom";
import type { BlogPost } from "../types";

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <article className="blog-card">
      <div className="blog-card-meta">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <span className="dot" />
        <span>{post.readTime} min</span>
      </div>

      <h3 className="blog-card-title">
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </h3>

      <p className="blog-card-excerpt">{post.excerpt}</p>

      <div className="tags">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
