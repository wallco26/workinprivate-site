---
title: "Now You Can Chat With Your Own Documents — Completely Offline"
description: "WorkInPrivate can now answer questions about your own PDFs, Word files, and notes — grounded in your documents and citing its sources — without any of them ever leaving your computer. Here's how it works."
pubDate: 2026-07-30
category: "Privacy"
---

If you've ever wished you could just *ask* your files a question — "what does this contract say about termination?", "summarize these ten research papers", "where in my notes did I mention that budget figure?" — you've run into the same wall everyone else has. The tools that do this well are in the cloud, which means uploading your documents to someone else's servers. For anyone handling sensitive material, that's a non-starter.

So we built the version that isn't. WorkInPrivate can now **chat with your own documents, entirely on your machine.** You add your files, ask questions in plain language, and the AI answers using what's actually in them — no upload, no account, no internet required.

Here's the short version: **it's like having a research assistant who has read all your files, works only for you, and never takes them out of the room.**

## What it actually does

You start by creating a **knowledge base** — just a named collection of documents. You might have one called "Client Files," another called "Research," another called "Book Notes." You add documents to each one: **PDFs, Word documents, and plain text files** all work. (Images aren't supported as documents — this is about text you want to search and reason over.)

When you start a conversation, you choose which knowledge base or bases it should draw from. From then on, the AI answers your questions grounded in those specific documents. Ask it something, and instead of guessing from general knowledge, it looks through your files, finds the relevant passages, and answers based on them.

Two details make this genuinely useful rather than just impressive:

- **It cites its sources.** Answers come with a **Sources** list showing which of your files the information came from, by file name — so you can verify anything and go straight to the original.
- **It admits when it doesn't know.** The AI is instructed to tell you when your documents don't actually contain the answer, rather than inventing something that sounds right. For real work, "it's not in these files" is often exactly the answer you need.

## Why this matters

Plenty of tools let you "chat with a PDF." Almost all of them work by sending your document up to a server, where the reading, searching, and answering all happen on hardware you don't control. Your file gets copied to a third party, and you're left trusting their storage, their staff, and their retention policies with something you may be [ethically or legally bound to protect](/blog/chatgpt-confidential-documents).

WorkInPrivate takes the opposite approach. **Everything happens on your computer** — the documents, the search, and the AI. Nothing is uploaded. You can pull the ethernet cable, turn off Wi-Fi, and it keeps working, because there's no server for your files to travel to. That's the whole point of [running AI locally](/blog/local-ai-vs-cloud-ai): the only data that can't leak is data that never leaves your device.

## How it works, without the jargon

You don't need to understand any of this to use the feature — but if you're the kind of person who wants to know what's happening to your files, here's the honest version.

**Reading your documents.** When you add a file, WorkInPrivate extracts its text and splits it into overlapping chunks — roughly a few hundred words each, cut along paragraph boundaries so a thought never gets sliced in half. The overlap means context carries from one chunk to the next. If you happen to add the same document twice, it notices and skips the duplicate.

**Understanding the meaning.** Each chunk is turned into a kind of mathematical fingerprint — a list of numbers that captures its meaning, so passages about the same idea end up "near" each other even when they use different words. This is handled by a second, dedicated AI model that runs locally alongside the main one. It only starts up the *first* time you use a knowledge base, and it downloads itself automatically the first time it's needed — so if you never touch this feature, you never pay a cent of extra memory for it.

**Finding the right passages.** All of this is stored in a small database on your own disk, right next to your documents. When you ask a question, WorkInPrivate turns *your question* into a fingerprint too, then finds the chunks across your selected knowledge bases whose meaning is closest to it. The best matches are pulled out, merged, and ranked.

**Answering.** Those most-relevant excerpts are handed to the AI as context, and it writes an answer grounded in them — then lists which files they came from. Retrieval, understanding, and writing the answer all happen offline, on your hardware.

If you've heard the term "RAG" (retrieval-augmented generation), that's the technique. The difference here is simply *where* it runs.

## What you can do with it

The feature is deliberately general, because sensitive documents come in every shape:

- A **lawyer** can ask a folder of case files a question and get an answer with citations back to the specific documents — without those files touching a server.
- A **researcher** can load a stack of papers into one knowledge base and interrogate them as a set.
- A **writer or student** can turn a pile of notes, drafts, and source material into something they can actually query.
- Anyone with **years of accumulated files** can finally search them by meaning instead of by remembering the exact words they used.

Because knowledge bases are separate, you can keep different projects — or different clients — cleanly walled off from one another, and point each conversation only at what it needs.

## The bottom line

"Chat with your documents" has quietly become one of the most useful things AI can do. Until now, using it meant handing your files to the cloud. WorkInPrivate brings that same capability to your own computer, where your documents belong — grounded answers, real citations, and nothing uploaded, ever.

If you already have WorkInPrivate, create your first knowledge base and try asking it something only your files would know. If you don't yet, this is a good reason to [take a look](/download) — it runs an open-source AI model entirely on your machine, no cloud and no account required.

*WorkInPrivate keeps your documents on your device, which removes the third-party-disclosure risk of cloud tools. It supports your confidentiality obligations — it isn't a substitute for your own compliance program.*
