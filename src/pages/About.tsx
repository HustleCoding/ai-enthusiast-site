export default function About() {
  return (
    <main>
      <section className="page-header">
        <h1>About</h1>
        <p>AI engineer, open-source contributor, and relentless tinkerer.</p>
      </section>

      <section className="section about-content">
        <div className="about-text">
          <h2>Hi, I'm Alex.</h2>
          <p>
            I'm an AI engineer who believes the most important models are the
            ones anyone can run. I spend my days exploring open-weight LLMs —
            from massive MoE architectures like <strong>Kimi K2</strong> and{" "}
            <strong>DeepSeek V3</strong> to efficient fine-tuned models that run
            on a single GPU.
          </p>
          <p>
            My work focuses on making frontier-level AI accessible: building
            tooling for local inference, creating evaluation frameworks for
            open models, and writing about the techniques that let small teams
            compete with billion-dollar labs.
          </p>
          <p>
            Before going all-in on open-source AI, I worked on distributed
            systems and backend infrastructure. That background shapes how I
            think about model serving — performance, reliability, and cost
            matter as much as benchmark scores.
          </p>

          <h2>What I'm Working On</h2>
          <ul>
            <li>
              Benchmarking the latest open-weight models across real-world tasks
            </li>
            <li>
              Building tools for efficient local inference and fine-tuning
            </li>
            <li>
              Writing practical guides for self-hosting AI
            </li>
            <li>
              Contributing to open-source inference engines
            </li>
          </ul>

          <h2>Get in Touch</h2>
          <div className="about-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="mailto:hello@openmind.dev">Email</a>
            <a href="https://huggingface.co" target="_blank" rel="noreferrer">
              Hugging Face
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
