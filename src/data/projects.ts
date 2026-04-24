import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "kimi-k2-playground",
    name: "Kimi K2 Playground",
    description:
      "An interactive web playground for testing Kimi K2 capabilities — code generation, tool use, and multi-turn reasoning. Built with React and vLLM backend.",
    tags: ["React", "vLLM", "Kimi K2", "TypeScript"],
    url: "https://github.com",
    stars: "342",
  },
  {
    id: "oss-model-bench",
    name: "OSS Model Bench",
    description:
      "Automated benchmarking suite for open-source LLMs. Runs standardized evals across coding, math, and reasoning tasks with reproducible configs.",
    tags: ["Python", "Evaluation", "Benchmarking", "CLI"],
    url: "https://github.com",
    stars: "1.2k",
  },
  {
    id: "local-rag-kit",
    name: "Local RAG Kit",
    description:
      "A fully offline RAG pipeline using Ollama, Qdrant, and nomic-embed-text. Chat with your documents without sending data to any third-party API.",
    tags: ["RAG", "Qdrant", "Ollama", "Privacy"],
    url: "https://github.com",
    stars: "876",
  },
  {
    id: "finetune-forge",
    name: "FineTune Forge",
    description:
      "Opinionated fine-tuning toolkit built on Unsloth. Handles data curation, training, evaluation, and deployment in a single CLI workflow.",
    tags: ["Fine-Tuning", "Unsloth", "LoRA", "Python"],
    url: "https://github.com",
    stars: "524",
  },
  {
    id: "model-router",
    name: "Model Router",
    description:
      "Intelligent request routing across multiple local and remote LLMs. Routes based on task type, latency requirements, and cost constraints.",
    tags: ["Routing", "API", "Cost Optimization", "Go"],
    url: "https://github.com",
    stars: "218",
  },
  {
    id: "tokenomics-viz",
    name: "Tokenomics Viz",
    description:
      "Interactive visualization tool for understanding tokenizer behavior across different models. Compare BPE, SentencePiece, and tiktoken side-by-side.",
    tags: ["Visualization", "Tokenizers", "D3.js", "Education"],
    url: "https://github.com",
    stars: "163",
  },
];
