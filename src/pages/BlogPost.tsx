import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "../data/posts";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <main>
        <section className="section" style={{ textAlign: "center" }}>
          <h1>Post not found</h1>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
            <ArrowLeft size={18} /> Back to Blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <article className="post">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        <header className="post-header">
          <div className="post-meta">
            <span>
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>
              <Clock size={14} />
              {post.readTime} min read
            </span>
          </div>
          <h1>{post.title}</h1>
          <div className="tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="post-body">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return <h2 key={i}>{block.replace("## ", "")}</h2>;
            }
            if (block.startsWith("```")) {
              const lines = block.split("\n");
              const code = lines.slice(1, -1).join("\n");
              return (
                <pre key={i}>
                  <code>{code}</code>
                </pre>
              );
            }
            if (block.startsWith("- ")) {
              return (
                <ul key={i}>
                  {block.split("\n").map((line, j) => (
                    <li key={j}>{line.replace(/^- \*\*(.+?)\*\*:?\s*/, "").length === line.replace("- ", "").length
                      ? line.replace("- ", "")
                      : <><strong>{line.match(/\*\*(.+?)\*\*/)?.[1]}</strong>{line.replace(/^- \*\*.+?\*\*:?\s*/, ": ")}</>
                    }</li>
                  ))}
                </ul>
              );
            }
            if (block.match(/^\d+\./)) {
              return (
                <ol key={i}>
                  {block.split("\n").map((line, j) => (
                    <li key={j}>{line.replace(/^\d+\.\s*/, "")}</li>
                  ))}
                </ol>
              );
            }
            const rendered = block
              .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
              .replace(/`(.+?)`/g, "<code>$1</code>");
            return (
              <p key={i} dangerouslySetInnerHTML={{ __html: rendered }} />
            );
          })}
        </div>
      </article>
    </main>
  );
}
