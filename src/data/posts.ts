import type { BlogPost } from "../types";

export const blogPosts: BlogPost[] = [
  {
    id: "kimi-k2-open-source-frontier",
    title: "Kimi K2: Why This Open-Source Model Changes Everything",
    excerpt:
      "Moonshot AI's Kimi K2 is a 1-trillion-parameter MoE model that rivals GPT-4o on coding and agentic tasks — and it's fully open-weight. Here's what makes it special.",
    content: `Moonshot AI quietly dropped one of the most impressive open-weight models we've ever seen. Kimi K2 is a mixture-of-experts model with 1 trillion total parameters (32 billion active per token), trained on 15.5 trillion tokens.

## Why It Matters

Unlike proprietary models locked behind APIs, Kimi K2 ships under an Apache 2.0–style license. You can fine-tune it, deploy it on your own hardware, and build commercial products on top of it.

The benchmarks speak for themselves:
- **SWE-bench Verified**: 65.8% (state-of-the-art for open models)
- **AIME 2025**: 70.0% (strong mathematical reasoning)
- **Codeforces Rating**: 1,636 (competitive programming territory)

## The MoE Architecture

Kimi K2 uses a Mixture-of-Experts design — only 32B of its 1T parameters activate per forward pass, which keeps inference costs manageable. This is the same trick DeepSeek V3 uses, and it's becoming the de facto approach for scaling open models efficiently.

## Agentic Capabilities

What really sets K2 apart is its agentic performance. It can use tools, browse the web, write and execute code, and orchestrate multi-step workflows. In Tau-bench (airline and retail scenarios), it outperforms Claude 3.5 Sonnet and GPT-4o.

## Getting Started

You can run Kimi K2 today via vLLM, SGLang, or KTransformers. For most developers, the quantized versions fit on a single node with 8×A100 or equivalent.

This is the kind of release that makes proprietary model providers nervous — and that's exactly the point.`,
    date: "2025-07-15",
    tags: ["Kimi K2", "Open Source", "MoE", "LLM"],
    readTime: 5,
  },
  {
    id: "deepseek-v3-local-setup",
    title: "Running DeepSeek V3 Locally: A Practical Guide",
    excerpt:
      "DeepSeek V3 brings frontier-level reasoning to open source. Here's how to actually run it on consumer and prosumer hardware.",
    content: `DeepSeek V3 is a 671B-parameter MoE model that punches well above its weight class. With only 37B active parameters per token, it delivers performance competitive with Claude 3.5 Sonnet while being fully open.

## Hardware Requirements

Let's be realistic about what you need:
- **Full precision (FP16)**: 8×A100 80GB or equivalent
- **GPTQ 4-bit quant**: 2×A100 or 4×RTX 4090
- **GGUF Q4_K_M**: Fits on a single machine with 128GB RAM (CPU inference)

## Step-by-Step Setup with vLLM

\`\`\`bash
pip install vllm>=0.6.0
python -m vllm.entrypoints.openai.api_server \\
  --model deepseek-ai/DeepSeek-V3 \\
  --tensor-parallel-size 8 \\
  --max-model-len 8192
\`\`\`

## Performance Tips

1. Use tensor parallelism matching your GPU count
2. Start with shorter context lengths and scale up
3. Enable KV-cache quantization for longer contexts
4. Consider PagedAttention for batch serving

## When to Use It

DeepSeek V3 excels at code generation, mathematical reasoning, and instruction following. For pure chat applications, the smaller DeepSeek-Chat variant may be more practical.

The open-source AI ecosystem keeps delivering. Every month the gap between open and closed narrows.`,
    date: "2025-06-28",
    tags: ["DeepSeek", "Local LLM", "Tutorial", "Self-Hosting"],
    readTime: 7,
  },
  {
    id: "open-source-ai-stack-2025",
    title: "My 2025 Open-Source AI Stack",
    excerpt:
      "From inference engines to vector databases — here's the fully open-source toolkit I use for every AI project this year.",
    content: `Every year I revisit my AI development stack. For 2025, I've converged on a set of tools that are all open-source, battle-tested, and composable.

## Inference

- **vLLM** for serving large models with PagedAttention
- **llama.cpp / Ollama** for local development and edge deployment
- **SGLang** for structured generation and complex prompting

## Models

My go-to models right now:
- **Kimi K2** for agentic tasks and coding
- **DeepSeek V3** for reasoning-heavy workloads
- **Llama 3.1 405B** for general-purpose tasks
- **Qwen 2.5 72B** as a strong all-rounder
- **Mistral Large** for multilingual tasks

## RAG & Embeddings

- **Qdrant** as my vector database (fast, typed, easy to self-host)
- **nomic-embed-text** for embeddings (open, performant, MIT-licensed)
- **LangChain** / **LlamaIndex** for orchestration (though I'm increasingly going framework-free)

## Fine-Tuning

- **Unsloth** for efficient LoRA fine-tuning (2× faster, 60% less memory)
- **Axolotl** for more complex training setups
- **Weights & Biases** for experiment tracking (the one non-open-source tool I still use)

## Evaluation

- **lm-eval-harness** by EleutherAI for standardized benchmarks
- Custom eval suites for domain-specific testing

## The Philosophy

I optimize for **reproducibility** and **sovereignty**. If a vendor disappears tomorrow, my stack keeps running. That's the real value of open source in AI.`,
    date: "2025-06-10",
    tags: ["Open Source", "AI Stack", "Tools", "Infrastructure"],
    readTime: 6,
  },
  {
    id: "fine-tuning-small-models",
    title: "Fine-Tuning Small Models That Beat GPT-4 on Your Task",
    excerpt:
      "A 7B model fine-tuned on high-quality domain data can outperform GPT-4 for specific use cases. Here's the methodology.",
    content: `The best model isn't always the biggest. For production workloads with well-defined scope, a fine-tuned 7–14B model often delivers better results than a general-purpose frontier model.

## The Core Insight

GPT-4 is optimized to be good at everything. Your fine-tuned model only needs to be good at one thing. That asymmetry is your advantage.

## Data Quality > Data Quantity

The single most impactful thing you can do:
1. Curate 500–2,000 high-quality examples
2. Ensure consistent formatting and labeling
3. Include edge cases and failure modes
4. Have domain experts validate the data

## My Fine-Tuning Recipe

\`\`\`python
# Using Unsloth for 2x faster training
from unsloth import FastLanguageModel

model, tokenizer = FastLanguageModel.from_pretrained(
    model_name="unsloth/Qwen2.5-7B-Instruct",
    max_seq_length=4096,
    load_in_4bit=True,
)

model = FastLanguageModel.get_peft_model(
    model,
    r=16,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj"],
    lora_alpha=16,
    lora_dropout=0,
)
\`\`\`

## Evaluation Strategy

Always compare against:
- The base model (to measure improvement)
- GPT-4o via API (to measure the gap)
- Your previous best model (to track progress)

Use domain-specific metrics, not just perplexity. If you're building a code reviewer, measure false positive rates. If it's a summarizer, measure factual consistency.

## Cost Analysis

A fine-tuned Qwen 2.5 7B costs roughly $0.001 per 1K tokens to serve on a single A10G. GPT-4o costs $0.01–0.03 per 1K tokens via API. At scale, this is a 10–30× cost reduction with equal or better quality on your specific task.`,
    date: "2025-05-22",
    tags: ["Fine-Tuning", "Small Models", "LoRA", "Production"],
    readTime: 8,
  },
];
