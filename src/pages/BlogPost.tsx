import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "../data/posts";

function parseContent(content: string): string[] {
  const codeBlocks: string[] = [];
  const withPlaceholders = content.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });
  return withPlaceholders.split("\n\n").map((block) =>
    block.replace(/__CODE_BLOCK_(\d+)__/g, (_, idx) => codeBlocks[Number(idx)])
  );
}

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
          {parseContent(post.content).map((block, i) => {
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
                  {block.split("\n").map((line, j) => {
                    const boldMatch = line.match(/^- \*\*(.+?)\*\*(:\s*|\s+)(.*)/);
                    if (!boldMatch) {
                      return <li key={j}>{line.replace(/^- /, "")}</li>;
                    }
                    const sep = boldMatch[2].startsWith(":") ? ": " : " ";
                    return (
                      <li key={j}>
                        <strong>{boldMatch[1]}</strong>{sep}{boldMatch[3]}
                      </li>
                    );
                  })}
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
