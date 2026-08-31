---
title: "How to Get Better Answers From a Local AI Model"
description: "If your local AI feels thinner than ChatGPT, the model usually isn't the problem — the prompt is. Here are seven habits that make a model running on your own laptop noticeably sharper, with before-and-after examples."
pubDate: 2026-08-31
category: "Guides"
---

There's a moment that trips up almost everyone who moves from a cloud chatbot to AI running on their own computer. You type the same kind of message you'd type into ChatGPT — *"help me with this email"* — and the answer comes back a little flat. Generic. Not wrong, exactly, but not great either.

The natural conclusion is that the model is too small. Sometimes that's true. Much more often, the model is fine and the prompt was doing a lot of invisible work that a big cloud model was quietly covering for.

Here's the useful mental model: **a large cloud model guesses well when you're vague. A smaller local model does what you actually said.** Once you know that, the fix is mostly a set of habits — and they take about ten minutes to learn.

## 1. Say who it's for, and what it's for

The single highest-value thing you can add to a prompt is context about the destination. Audience, purpose, tone, length. A cloud model infers these from statistical instinct; a local model just needs to be told.

> **Vague:** Help me write an email about the delay.
>
> **Better:** Write a short email to a client explaining that their project will be two weeks late because a supplier missed a deadline. Professional but warm, apologetic without being dramatic, and end with a specific new delivery date of October 3rd. Under 150 words.

Same model, same machine. The second one produces something you can almost send as-is, because there's nothing left for the AI to guess about.

## 2. Give it the material — don't make it remember

Smaller models know fewer facts than the giant cloud ones, and they're more likely to fill a gap with something plausible-sounding. The fix is simple: stop asking from memory, and start pasting the source.

Instead of *"what does our refund policy usually say about partial months?"*, paste the policy and ask the question about the text in front of it. Instead of *"summarize the Smith case,"* give it the document.

This is the habit that changes local AI from "a chatbot that sometimes bluffs" into a genuinely reliable tool — because when the answer has to come from text you supplied, there's much less room to invent one. It's also why [chatting with your own documents](/blog/chat-with-your-documents-privately) matters so much: pointing the model at your actual PDFs and notes is the same trick, automated, with citations back to the source.

And here's the part that only works locally: you can paste the *real* document. Not a scrubbed version with the names taken out, not a vague paraphrase that protects the client — the actual file, because [it never leaves your machine](/blog/is-it-safe-to-put-client-data-in-ai). The best prompt is usually the one with the real material in it, and that's a prompt you simply can't write into a cloud tool.

## 3. One job per message

Cloud models are good at juggling a five-part request. Local models are much better when you break it up.

If you ask for a summary *and* a list of risks *and* a rewritten paragraph *and* a suggested reply, a smaller model will usually do the first thing well and get progressively vaguer. Ask for the summary. Read it. Then ask for the risks. You'll get four good answers instead of one mediocre one, and you'll spot problems on the way through rather than at the end.

## 4. Show it one tiny example

If you want output in a specific shape, one example beats three paragraphs of instructions. This works remarkably well on small models:

> Rewrite each of these notes as a one-line task, like this:
>
> *Note:* "spoke with vendor, they need the PO before shipping"
> *Task:* "Send PO to vendor — blocks shipment"
>
> Now do these five:

Format instructions get interpreted. Examples get copied. Copying is easier, so use it whenever the shape of the answer matters.

## 5. Ask for a specific shape and size

"Summarize this" is an open-ended request, and open-ended requests are where smaller models drift. Give the answer walls to fit inside:

- "Five bullets, one line each."
- "A table with three columns: clause, risk, what to ask about."
- "Two paragraphs, no bullet points, plain language, no jargon."
- "Answer in one sentence, then stop."

Constraints don't limit a local model — they focus it. They also make the output much faster to check, which matters more than people expect.

## 6. Iterate in the chat instead of starting over

When an answer is 70% right, resist the urge to rewrite your whole prompt. Just say what to change: *"Good — make the third point blunter and cut the closing sentence."* Local models are perfectly good at revision, and it costs you one short message instead of a fresh attempt that might land somewhere different.

This is also where a good habit pays off: read the first answer as a draft, not a verdict. Two rounds of "shorter, and drop the second paragraph" gets you further than any amount of prompt engineering up front.

## 7. Start a new chat when you change topics

A long conversation carries everything before it along for the ride. That has two effects on a local model: it gets slower as the conversation grows, and it starts blending old context into new answers — mentioning a project you finished discussing twenty messages ago.

When you switch tasks, start a fresh chat. It's the closest thing local AI has to a free speed upgrade, and it makes answers noticeably cleaner.

## When something still feels off

A few common symptoms and what usually causes them:

| What you're seeing | Usual cause | What to try |
| --- | --- | --- |
| Answers are vague or generic | Prompt left too much to infer | Add audience, purpose, format, length |
| It made up a detail | Asked from memory, not from text | Paste the source and ask about it |
| It ignored half your request | Too many jobs in one message | Split into separate messages |
| It's repeating itself | Long conversation, cluttered context | Start a new chat |
| It's slow | Model is large for your machine | Try a smaller or quantized model |
| It's fast but shallow | Model may be smaller than it needs to be | Step up a size if your memory allows |

Those last two are worth reading together with our guides on [choosing a model size](/blog/which-local-ai-model-should-you-run) and [what your computer actually needs](/blog/do-you-need-a-powerful-computer-to-run-ai-locally). If your answers are consistently thin across many well-written prompts, that's the point where model size genuinely is the answer — and swapping is a download, not a decision you're stuck with.

## What local models are quietly great at

It's worth naming the tasks where a model on your own laptop is not a compromise at all:

- **Working over text you provide** — summarizing, extracting, comparing, reformatting, pulling out dates and obligations.
- **Rewriting and tightening your own drafts**, in your own voice.
- **Explaining something in plain language**, at whatever level you ask for.
- **Structuring a mess** — turning scattered notes into an outline, an agenda, or a task list.
- **Drafting the boring middle** of documents you'll edit anyway.

Notice how many of those involve handing over your actual material. That's the point. The tasks local AI is best at are exactly the ones you'd hesitate to send to someone else's server.

## The short version

Be specific about audience and format. Paste the source instead of relying on memory. One job per message. Show an example when shape matters. Give it constraints. Revise instead of restarting. Start fresh chats.

Do those seven things and a model running on your own laptop will surprise you — not because it got smarter, but because you stopped making it guess.

[WorkInPrivate](/) runs an open-source AI model entirely on your own computer, handles the setup for you, and lets you switch models with a click — so you can paste the real document, ask the real question, and know that none of it ever leaves your machine.
