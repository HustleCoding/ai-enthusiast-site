import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
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
            month: "long",
            day: "numeric",
          })}
        </time>
        <span className="read-time">
          <Clock size={14} />
          {post.readTime} min read
        </span>
      </div>

      <h3 className="blog-card-title">
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </h3>

      <p className="blog-card-excerpt">{post.excerpt}</p>

      <div className="blog-card-footer">
        <div className="tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/blog/${post.id}`} className="read-more">
          Read more <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
