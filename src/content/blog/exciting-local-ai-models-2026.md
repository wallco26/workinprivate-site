---
title: "The Local AI Models Actually Worth Getting Excited About Right Now"
description: "Open-weight models got genuinely fun this year. Here are four worth knowing about — one that listens to your voice on an ordinary laptop, one with a memory like a filing cabinet, one that punches ten times its weight, and one absurd 1.6-trillion-parameter monster that almost nobody can run at home."
pubDate: 2026-09-17
category: "Models"
---

For a couple of years, keeping up with open-source AI models meant watching a number go up. A new Llama came out, it was a bit better than the old Llama, and that was the news.

That's not what this year has looked like. The models you can download and run on your own computer have started doing things that are *interesting* — not just "scores higher on a benchmark you've never heard of," but genuinely new tricks. One of them listens to you talk. One of them holds a small library in its head at once. One of them is a 35-billion-parameter model that runs at the speed of a 3-billion-parameter one, through a design trick that's honestly a bit delightful once you see it.

So let's do a tour. Three you can realistically run on a normal computer, and one gloriously ridiculous one you almost certainly can't — because it's fun to know what the ceiling looks like.

A quick note before we start: none of this is homework. If you just want a good local AI and don't care which one, [pick the biggest model your machine runs smoothly and stop thinking about it](/blog/which-local-ai-model-should-you-run). This post is for when you're curious about what's under the hood.

## Gemma 4 E4B — the one you can talk to

**Google, April 2026. Apache 2.0 license. Runs in about 5 GB of memory.**

Google's Gemma 4 family arrived in April, and the small one is the star. E4B is a roughly 4-billion-parameter model that fits in about 5 GB once it's been [quantized down to 4-bit](/blog/which-local-ai-model-should-you-run) — which means it runs on a bog-standard laptop with 8 GB of memory. Nothing exotic required.

Here's the fun part. It doesn't just read text. Gemma 4's small models take **audio and images as native input** — meaning the same model that writes your email can also listen to a voice clip and look at a photo. No separate transcription tool bolted on the front, no second piece of software converting speech to text first. You hand it thirty seconds of audio and it just *understands* it.

Think about what that means on a private machine. A voice memo you recorded walking to your car, summarized into action items, without the audio ever touching a transcription service. A photo of a whiteboard after a meeting, turned into notes. A screenshot of a confusing error message, explained. All of it happening on a laptop that cost a thousand dollars, with the Wi-Fi off if you like.

It also has a "thinking mode" — it can work through a problem step by step before answering, which is the thing that made the big cloud models suddenly much better at logic a couple of years ago. That's now standard equipment on a model small enough to fit on a phone.

**Get this one if:** you have a modest machine, or you want to play with voice and images. It's the most fun-per-gigabyte model on this list.

## Qwen3.5-9B — the one with the enormous memory

**Alibaba, February 2026. Apache 2.0 license. Runs in about 6 GB of memory.**

Alibaba's Qwen family has quietly become the default recommendation for local AI, and the 9-billion-parameter version is the sweet spot for a computer with 16 GB of memory. It's a strong, sensible, all-round model — good at drafting, editing, explaining, and reasoning.

But the specification worth staring at is the **context window: 256,000 tokens.**

Context window is the amount of material a model can hold in mind at one time — your question, its answer, and everything you've pasted in along the way. 256,000 tokens is somewhere in the neighborhood of 600 to 800 pages of text. On a model small enough to run on a mid-range laptop.

That number changes what the tool is *for*. A small context window means AI is something you paste paragraphs into. A window this size means you can hand it an entire contract, a full deposition transcript, a quarter's worth of board minutes, or a stack of research papers, and ask questions across all of it at once. It stops being a chatbot and starts being something closer to [a research assistant that has read your filing cabinet](/blog/chat-with-your-documents-privately).

It also handles a genuinely silly number of languages — over 200 — and, like Gemma 4, it can switch between thinking hard and answering fast depending on what you asked.

**Get this one if:** you have 16 GB of memory and you work with long documents. This is the most broadly useful model on the list.

## Qwen3.6-35B-A3B — the one that cheats (in a good way)

**Alibaba, April 2026. Apache 2.0 license. Wants about 20 GB of memory.**

This one requires explaining a trick, and the trick is the whole reason local AI got interesting this year.

Traditionally, a model's size tells you two things at once: how smart it is, and how slow it is. A 35-billion-parameter model is sharper than a 3-billion one, and it's also roughly ten times more work to run. Bigger and smarter always meant slower and hungrier. That was the deal.

**Mixture of Experts** breaks the deal. Instead of one enormous brain where every part fires for every word, the model is built as a large collection of smaller specialist sub-networks — this one has 256 of them — plus a router that decides which few to consult for each word it writes. For any given token, only about nine experts wake up. The rest sit idle.

The useful analogy is a law firm. A big firm has a hundred lawyers covering every specialty, but your particular question doesn't go to all hundred of them — it goes to the two or three who actually know about it. You get the firm's full breadth of knowledge at the cost of a short conversation.

That's what "35B-A3B" means: **35 billion parameters total, 3 billion active at a time.** You get the knowledge of a 35-billion-parameter model at roughly the speed of a 3-billion-parameter one. On decent consumer hardware it produces text faster than most people can read it.

Now the honest catch, because most write-ups skip it: **the speed is 3B, but the memory requirement is still 35B.** Every expert has to be sitting in memory ready to be called, even though most stay quiet. At 4-bit that's roughly 20 GB just for the model, so this is a 32 GB machine's model, not a 16 GB one. Mixture of Experts buys you speed, not space.

**Get this one if:** you have a well-specified machine — 32 GB of memory or a graphics card with 24 GB — and you want the most capable thing that still feels snappy. It's especially strong at code.

## And now the ridiculous one: DeepSeek V4-Pro

**DeepSeek, August 2026. MIT license. Do not attempt this on your laptop.**

Everything above is a model you might actually use. This one is here because it's worth knowing how big "open" gets now.

DeepSeek V4-Pro has **1.6 trillion parameters**, with about 49 billion active per token — the same Mixture of Experts idea as above, scaled to an absurd degree. It has a one-million-token context window. Its weights are published under the MIT license, which is about as permissive as licenses come: anyone can download it, run it, modify it, build a business on it.

So you *can* have it. The catch is what it takes to hold.

Even squeezed down to 4-bit, a model of that size runs to something approaching a terabyte of memory. Not disk space — memory, all of it live at once, because the router might call on any expert at any moment. There is no consumer computer on earth that does this. You're looking at a rack of datacenter GPUs.

The closest thing to a home version is its trillion-parameter cousin, **Kimi K2.5** from Moonshot AI, which enthusiasts have coaxed onto a single maxed-out Mac Studio with 512 GB of unified memory — a machine that costs about as much as a used car — by compressing it aggressively. It works. It generates maybe five to fifteen words a second. People have built four-machine clusters of them in their homes, which is either inspiring or a cry for help depending on your perspective.

The reason this matters to you, even though you will never run it: three years ago, a model this capable would have been a closely guarded corporate secret, available only through an API, with your prompts logged on someone else's server. Today the weights are a free download with a license that says *do whatever you want.* The ceiling of what's openly available keeps rising, and everything below the ceiling gets cheaper and smaller in its wake. The 5 GB model at the top of this post is capable today largely because of research done on monsters like this one.

## So what fits your machine?

The one number that governs all of this is your computer's memory — RAM, or video memory if you have a dedicated graphics card. [Here's how to check yours.](/blog/do-you-need-a-powerful-computer-to-run-ai-locally)

| Your machine | Reach for | What you get |
| --- | --- | --- |
| 8 GB memory | Gemma 4 E4B | Voice and image input, thinking mode, runs on almost anything |
| 16 GB memory | Qwen3.5-9B | Strong all-rounder, 256K context for long documents |
| 32 GB memory | Qwen3.6-35B-A3B | Big-model quality at small-model speed, excellent at code |
| A small datacenter | DeepSeek V4-Pro | Bragging rights, mostly |

Two things are true of every model in that table, and they're the reason any of this is worth your attention. All of them are free. And all of them run entirely on your own hardware, which means the document you're asking about, the recording you're transcribing, and the question you were slightly embarrassed to ask [never leave the building](/blog/local-ai-vs-cloud-ai).

## The short version

The interesting news in local AI stopped being "the numbers went up" somewhere around the start of this year. A 5 GB model now listens to audio and looks at pictures. A 6 GB model reads 700 pages at a sitting. A clever architecture lets a 35-billion-parameter model run at the speed of a 3-billion one. And the biggest open model in the world is a free download, if you happen to own a server rack.

You don't need to track any of it to benefit from it. The releases keep coming, the floor keeps rising, and the model that fits your laptop this year is meaningfully better than the one that fit it last year — for free, without you doing anything.

**WorkInPrivate** runs open-source models like these entirely on your own computer. It looks at your machine, picks one that fits, handles the download and setup, and lets you swap to another with a click — so you can try the new interesting thing whenever it shows up, and nothing you type ever leaves your machine.
