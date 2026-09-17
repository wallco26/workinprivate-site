---
title: "The Local AI Models Actually Worth Getting Excited About Right Now"
description: "Free AI models you can run on your own computer got genuinely fun this year. Here are four worth knowing about — one that listens to your voice on an ordinary laptop, one with a memory like a filing cabinet, one that punches ten times its weight, and one absurd monster that almost nobody can run at home."
pubDate: 2026-09-17
category: "Models"
---

For a couple of years, keeping up with free, downloadable AI models meant watching a number go up. A new one came out, it was a bit better than the old one, and that was the news.

That's not what this year has looked like. The models you can download and run on your own computer have started doing things that are *interesting* — not just "scores higher on a test you've never heard of," but genuinely new tricks. One of them listens to you talk. One of them holds a small library in its head at once. One of them is built in a way that lets it be ten times smarter than its speed suggests, through a design trick that's honestly a bit delightful once you see it.

So let's do a tour. Three you can realistically run on a normal computer, and one gloriously ridiculous one you almost certainly can't — because it's fun to know what the ceiling looks like.

### Two words, and then we'll begin

Almost everything below comes down to two things, and neither is complicated.

**Parameters** are the internal dials a model adjusts as it learns. A "9-billion-parameter model" has nine billion of them. More dials generally means a smarter model — and a bigger file that needs more of your computer's memory to hold. That's why you'll see sizes quoted constantly: size is the headline fact about any model. ([The longer version is here.](/blog/which-local-ai-model-should-you-run))

**Memory** means your computer's RAM — the working space it uses for whatever it's running right now, not the storage where your files live. A model has to fit in there, all at once, to run. This is the single number that decides what you can and can't use, and it matters far more than how fast your processor is.

That's the whole vocabulary. And if you'd rather not think about any of it, that's a completely reasonable position: pick the biggest model your computer runs smoothly and get on with your day. This post is for when you're curious about what's under the hood.

## The one you can talk to: Gemma 4

**From Google, released April 2026. Free for anyone to use, including commercially. Needs about 5 GB of memory.**

Google's Gemma 4 family arrived in April, and the small one is the star. It goes by the slightly unfriendly name *E4B* — that just marks it as the compact version — and it has roughly 4 billion parameters. Squeezed down a bit (the technical term is [quantizing](/blog/which-local-ai-model-should-you-run), and it's a standard, well-understood way of shrinking a model with very little loss of quality), it fits in about 5 GB. Which means it runs on a bog-standard laptop with 8 GB of memory. Nothing exotic required.

Here's the fun part. It doesn't just read text. Gemma 4's small models take **audio and images directly** — the same model that writes your email can also listen to a voice clip and look at a photo. There's no separate transcription program bolted on the front, no second piece of software converting your speech to text first. You hand it thirty seconds of audio and it just *understands* it.

Think about what that means on a private machine. A voice memo you recorded walking to your car, turned into action items, without the recording ever touching a transcription service. A photo of a whiteboard after a meeting, turned into notes. A screenshot of a baffling error message, explained. All of it happening on a laptop that cost a thousand dollars, with the Wi-Fi switched off if you like.

It can also "think" before it answers — work through a problem step by step rather than blurting out the first thing, which is the change that made the big cloud chatbots suddenly much better at logic a couple of years ago. That's now standard equipment on a model small enough to fit on a phone.

**Get this one if:** you have a modest machine, or you want to play with voice and images. It's the most fun-per-gigabyte model on this list.

## The one with the enormous memory: Qwen3.5

**From Alibaba, released February 2026. Free for anyone to use, including commercially. Needs about 6 GB of memory.**

Alibaba's Qwen family has quietly become the default recommendation for local AI, and the 9-billion-parameter version is the sweet spot for a computer with 16 GB of memory. It's a strong, sensible all-rounder — good at drafting, editing, explaining, and reasoning.

But the number worth staring at is how much it can read at once.

Every AI model has a limit on how much material it can hold in mind at one time — your question, its answer, and everything you've pasted in along the way. Think of it as desk space. This one's desk fits **roughly 600 to 800 pages of text.** On a model small enough to run on a mid-range laptop.

That changes what the tool is *for*. A small desk means AI is something you paste paragraphs into. A desk this size means you can hand it an entire contract, a full deposition transcript, a quarter's worth of board minutes, or a stack of research papers, and ask questions across all of it at once. It stops being a chatbot and starts being something closer to [a research assistant that has read your filing cabinet](/blog/chat-with-your-documents-privately).

It also handles a genuinely silly number of languages — more than 200 — and, like Gemma 4, it can switch between thinking hard and answering fast depending on what you asked it.

**Get this one if:** you have 16 GB of memory and you work with long documents. This is the most broadly useful model on the list.

## The one that cheats (in a good way): Qwen3.6-35B-A3B

**From Alibaba, released April 2026. Free for anyone to use, including commercially. Wants about 20 GB of memory.**

Yes, that name is horrible. Bear with me, because the trick it describes is the whole reason local AI got interesting this year.

Traditionally, a model's size told you two things at once: how smart it is, and how slow it is. A 35-billion-parameter model is sharper than a 3-billion one, and it's also roughly ten times more work to run. Bigger and smarter always meant slower and hungrier. That was the deal.

**Mixture of Experts** breaks the deal. Instead of one enormous brain where every part fires for every word, the model is built as a large collection of smaller specialists — this one has 256 of them — plus something like a receptionist that decides which handful to consult for each word it writes. For any given word, only about nine specialists wake up. The rest sit idle.

So: picture a law firm. A big firm has a hundred lawyers covering every specialty, but your particular question doesn't go to all hundred of them — it goes to the two or three who actually know about it. You get the firm's full breadth of knowledge at the cost of a short conversation.

That's what the ugly name means. **35 billion parameters in total, but only about 3 billion working at any given moment.** You get the knowledge of a 35-billion-parameter model at roughly the speed of a 3-billion-parameter one. On a decent home machine it writes faster than most people can read.

Now the honest catch, because most write-ups skip it: **the speed is small, but the memory appetite is still large.** Every specialist has to be sitting in memory ready to be called, even though most of them stay quiet. That works out to roughly 20 GB just to hold the model — so this is a 32 GB machine's model, not a 16 GB one. The trick buys you speed, not space.

**Get this one if:** you have a well-specified machine — 32 GB of memory, or a dedicated graphics card with 24 GB — and you want the most capable thing that still feels snappy. It's especially good at code.

## And now the ridiculous one: DeepSeek V4-Pro

**From DeepSeek, released August 2026. Also free for anyone to use. Do not attempt this on your laptop.**

Everything above is a model you might actually use. This one is here because it's worth knowing how big "free and downloadable" gets now.

DeepSeek V4-Pro has **1.6 trillion parameters** — about 45 times the size of the model in the previous section, which was already too big for most laptops. It uses the same specialists trick, scaled to an absurd degree, and it can hold something like 2,500 pages in mind at once. And the finished model itself is a free public download, under terms about as permissive as they come: anyone can take it, run it, modify it, build a business on it, without asking permission or paying a cent.

So you *can* have it. The catch is what it takes to hold.

Even compressed, a model that size needs something approaching a terabyte of memory. Not disk space — memory, all of it live at once, because any of those specialists might be called at any moment. There is no consumer computer on earth that does this. You're looking at a rack of the kind of hardware that lives in a datacenter.

The closest thing to a home version is a rival of similar scale, **Kimi K2.5** from Moonshot AI, which enthusiasts have coaxed onto a single maxed-out Mac Studio with 512 GB of memory — a machine that costs about as much as a used car — by compressing it aggressively. It works. It produces maybe five to fifteen words a second. Some people have built four-machine clusters of them in their homes, which is either inspiring or a cry for help depending on your perspective.

Here's why this matters to you even though you will never run it. Three years ago, a model this capable would have been a closely guarded corporate secret, reachable only through a company's servers, with every question you asked it logged on someone else's computer. Today it's a free download with a license that says *do whatever you like.* The ceiling of what's openly available keeps rising — and everything below the ceiling gets cheaper and smaller in its wake. The 5 GB model at the top of this post is as good as it is largely because of research done on monsters like this one.

## So what fits your machine?

The one number that governs all of this is your computer's memory. [Here's how to check yours.](/blog/do-you-need-a-powerful-computer-to-run-ai-locally)

| Your machine | Reach for | What you get |
| --- | --- | --- |
| 8 GB memory | Gemma 4 (E4B) | Voice and image input, step-by-step thinking, runs on almost anything |
| 16 GB memory | Qwen3.5 (9B) | Strong all-rounder that reads 700 pages at a sitting |
| 32 GB memory | Qwen3.6 (35B-A3B) | Big-model quality at small-model speed, excellent at code |
| A small datacenter | DeepSeek V4-Pro | Bragging rights, mostly |

Two things are true of every model in that table, and they're the reason any of this is worth your attention. All of them are free. And all of them run entirely on your own hardware — which means the document you're asking about, the recording you're transcribing, and the question you were slightly embarrassed to ask [never leave the building](/blog/local-ai-vs-cloud-ai).

## The short version

The interesting news in local AI stopped being "the numbers went up" somewhere around the start of this year. A 5 GB model now listens to audio and looks at pictures. A 6 GB model reads 700 pages at a sitting. A clever bit of design lets a big model run at a small model's speed. And the largest free model in the world is a download away, if you happen to own a server rack.

You don't need to follow any of it to benefit from it. The releases keep coming, the floor keeps rising, and the model that fits your laptop this year is meaningfully better than the one that fit it last year — for free, without you doing a thing.

**WorkInPrivate** runs open-source models like these entirely on your own computer. It looks at your machine, picks one that fits, handles the download and setup, and lets you swap to another with a click — so you can try the new interesting thing whenever it shows up, and nothing you type ever leaves your machine.
