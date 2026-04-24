import { Globe, MessageSquare, Rss } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} openMind — Built with open-source
          tools, for open-source people.
        </p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Globe size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <MessageSquare size={20} />
          </a>
          <a href="/blog" aria-label="RSS Feed">
            <Rss size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
