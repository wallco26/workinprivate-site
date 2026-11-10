---
title: "Which Local AI Model Should You Run? A Plain-English Guide"
description: "How to choose a local AI model: pick the largest size your computer's memory can run smoothly. A plain-English guide with a size chart."
pubDate: 2026-07-23
updatedDate: 2026-11-10
category: "Guides"
---

Once you've decided to [run AI on your own computer](/blog/run-ai-privately-no-coding/), you hit a question that cloud tools never ask you: *which model do you want?* ChatGPT just gives you one AI and hides the machinery. Run AI locally and you get to choose — which is powerful, and a little confusing the first time. Here's a plain-English guide to what you're actually choosing between.

**The short answer:** choose the largest model your computer's memory can run smoothly, in a 4-bit ("Q4") version. As a rule of thumb, that means a small model (1B–3B) on 8 GB of RAM, a medium model (7B–8B) on 16 GB, and a large model (13B and up) on 32 GB or more.

| Your computer's RAM | Model size to start with |
| --- | --- |
| 8 GB | Small: around 1B–3B |
| 16 GB | Medium: around 7B–8B |
| 32 GB or more | Large: 13B and up |

## What "a model" even is

A **model** is the AI itself — the trained brain that reads your message and writes a response. When you use ChatGPT, there's a model running on OpenAI's servers. When you run AI [locally](/blog/local-ai-vs-cloud-ai/), a copy of a model lives on your own machine and does the thinking right there.

The reason you have a choice is that the AI world runs on **open-source models** — AIs that companies and research labs have released for anyone to download and use. Names you'll see include Llama (from Meta), Mistral, Qwen, Gemma, and Phi. They're free, they're capable, and because you can hold a full copy of one on your laptop, they're what makes private AI possible in the first place.

There isn't one "best" model. There are many, each with different strengths — and the right one for you mostly comes down to a single practical question.

## The one number that matters most: size

Models come in different **sizes**, measured in *parameters* (you'll see labels like "7B" or "3B" — that's billions). Think of parameters as the number of tiny dials inside the model's brain. More dials generally means a smarter, more capable AI — and a bigger file that needs more of your computer's memory to run.

That's the whole trade-off in one sentence: **bigger models are smarter but hungrier; smaller models are lighter but simpler.** Choosing a model is really just picking the biggest one your computer can comfortably run.

Here's a rough guide to match size to your machine:

- **Small models (around 1B–3B).** Run happily on almost any modern laptop, including ones with modest memory. Fast, great for everyday writing, summarizing, and quick questions. Noticeably less "sharp" on complex reasoning.
- **Medium models (around 7B–8B).** The sweet spot for most people. Genuinely capable at drafting, editing, reasoning, and reading documents. Comfortable on a computer with roughly 16GB of memory or more.
- **Large models (around 13B and up).** The most capable, and the closest to the cloud experience — but they want a lot of memory and a reasonably powerful machine to stay fast.

If you're not sure, **start with a small or medium model.** It's easy to download a bigger one later once you see how your computer handles it.

## What the extra letters mean (quantization)

You'll sometimes see a model name followed by something like `Q4` or "4-bit." This is **quantization**, and it's less intimidating than it looks.

Quantization is a clever way of shrinking a model so it takes up less memory and runs faster, by storing its dials a little less precisely. A `Q4` version of a model might be less than half the size of the original with only a small dip in quality — which is often the difference between a model that runs smoothly on your laptop and one that doesn't. For most people, a quantized version of a bigger model beats the full version of a smaller one. When in doubt, a 4-bit ("Q4") model is a safe, popular default.

## Different models for different jobs

Beyond size, models have personalities and specialties. You don't need to memorize them, but it helps to know the categories exist:

- **General chat models** are the all-rounders — good at writing, explaining, and answering questions. This is what most people want most of the time.
- **Coding models** are tuned to help with programming and are stronger at reading and writing code.
- **Small, fast models** are built for speed on modest hardware, trading some depth for responsiveness.

You can keep more than one on your computer and switch depending on the task — a big one for careful work, a small one for quick drafts.

## "But is it as good as ChatGPT?"

Honest answer: the very largest cloud models are still ahead of what most laptops can run, especially on hard reasoning. But the gap is smaller than people expect, and it keeps shrinking. For the everyday work most of us actually do — drafting emails, summarizing documents, brainstorming, cleaning up writing, answering questions — a good local model is genuinely excellent.

And there's a trade the comparison usually forgets: a local model keeps everything on your machine. For [anything confidential](/blog/is-it-safe-to-put-client-data-in-ai/), a private model that's 90% as clever is worth far more than a cloud one that's slightly sharper but has [seen all your data](/blog/chatgpt-confidential-documents/).

## Common questions

**What is the best local AI model?** There isn't a single best one; it depends on your memory. On a 16 GB computer, a medium-sized general chat model in a Q4 version is the right place to start.

**What local AI model can I run with 8 GB of RAM?** A small model, around 1B to 3B. It will handle chatting, summarizing and short writing well.

**What about 16 GB of RAM?** A medium model, around 7B to 8B. This is the sweet spot for most people.

**How do I know if a model is too big for my computer?** It loads very slowly, answers arrive a word every few seconds, or it fails to load at all. Drop down one size and try again. Not sure how much memory you have? Here's [how to check](/blog/do-you-need-a-powerful-computer-to-run-ai-locally/).

**How big are the files?** Small models are roughly 2 GB. Medium models in a Q4 version are around 4 to 5 GB.

## The short version

You don't need to become an expert to choose well. Pick the biggest model your computer runs smoothly, lean on a quantized ("Q4") version to make bigger models fit, and start with a general chat model unless you have a specific need. If it feels slow, drop to a smaller size; if it feels sharp and fast, try a bigger one.

The best part: with a tool that handles the downloading and setup for you, trying a different model is just a click. **WorkInPrivate** picks a sensible model for you out of the box and lets you swap to others — all running privately on your own computer, so whatever you choose, nothing you type ever leaves your machine.
