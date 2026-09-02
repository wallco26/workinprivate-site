---
title: "How to Verify an AI App Is Really Private (Don't Just Take Our Word for It)"
description: "Every AI tool now claims to be private. Claims are cheap — but privacy is one of the few things you can actually test yourself, in about ten minutes, with software you already have. Here are five checks anyone can run."
pubDate: 2026-09-02
category: "Privacy"
---

Read enough AI marketing and you'll notice something: *everybody* says they're private now. "Enterprise-grade privacy." "Your data is secure." "We don't train on your conversations." The words are reassuring, and they're also nearly free to write. Nothing about a landing page proves what a program does once it's running on your machine.

Here's the good news, and it's genuinely unusual: privacy is one of the very few software claims you can verify yourself. You don't need to read source code or trust a certification badge. You need about ten minutes and tools that are already installed on your computer.

This applies to us too. WorkInPrivate makes strong claims about your data never leaving your machine — and you should check them rather than believe them. Below are the five tests, in order of how much they tell you.

## Test 1: Pull the plug

This is the single most powerful test, and it takes thirty seconds.

**Turn off your Wi-Fi and try to use the tool.**

That's it. Turn on airplane mode, or unplug the ethernet cable, then open the AI app and ask it something substantial — summarize a document, draft an email, answer a question.

- **If it keeps working normally, the thinking is happening on your computer.** There's no ambiguity here. A program with no network connection cannot be sending your words to a server, because there's nowhere for them to go and no way to get there. Whatever answered you was running locally.
- **If it stalls, spins, or shows a connection error, your text was going somewhere.** It may be going somewhere perfectly reputable with an excellent privacy policy — but it *is* leaving your machine.

The reason this test is so strong is that it doesn't depend on anyone's honesty. It's a structural fact about how the software works. It's the same reason [local AI works on a plane](/blog/does-local-ai-work-offline): the two properties are the same property, seen from different angles.

**One fair caveat.** Genuinely local tools still need the internet for setup — the [model](/blog/which-local-ai-model-should-you-run) has to be downloaded once, the way any app has to be installed. So run this test *after* first-run setup is done. What matters is whether normal, day-to-day use requires a connection.

## Test 2: Watch what it connects to

The airplane test tells you the app can run without the network. This one tells you what it does when the network is there.

**On a Mac:** open **Activity Monitor** (Applications → Utilities), click the **Network** tab, and sort by "Sent Bytes." Use the AI app for a few minutes with a long conversation. Watch whether its Sent Bytes climb as you type. A local app sits at nearly nothing; a cloud client sends a bit of data every time you hit enter.

For a sharper look, open Terminal and run:

`lsof -i -a -c AppName`

That lists the network connections a given app currently has open. (A tool like Little Snitch does the same thing continuously, with a popup for every new connection — worth it if you want to watch over time rather than take a snapshot.)

**On Windows:** open **Resource Monitor** (search for it in the Start menu), go to the **Network** tab, and look at "Processes with Network Activity." Same idea — find the app, watch whether its send column moves while you're chatting. Task Manager's App History tab gives a rougher version of the same picture.

What you're looking for isn't literally zero traffic forever — an app may check for updates or download a model you asked for. What you're looking for is **traffic that tracks your typing**. If bytes go out every time you send a message, your messages are going out.

## Test 3: Find your data on disk

Ask a simple question: **where do my conversations actually live?**

A local tool stores your chats in a file on your computer, and you can go look at it. On a Mac that's usually somewhere under `~/Library/Application Support/`; on Windows, under `%APPDATA%`. Find the folder, open it, and see your conversation sitting there in plain text or a local database file.

This tells you two useful things at once. First, the data is genuinely on your machine. Second — and people underrate this — **you can delete it.** A file you can drag to the trash is a very different thing from a chat history that exists on a server, where "delete" means asking a company to stop showing it to you.

While you're there, look for the model file too. Local models are large — usually somewhere between 2 GB and 20 GB. A multi-gigabyte file sitting in your applications folder is the AI's actual brain, on your disk. That heft is oddly reassuring: it's the physical evidence that the thinking equipment is in the building.

## Test 4: Read the privacy policy for three specific things

Privacy policies are written to be skimmed past, but you can search one in about a minute if you know what you're hunting for. Ignore the mission statement at the top and use ⌘F / Ctrl+F on these:

**1. "Third parties" / "service providers" / "subprocessors."** This is where a policy lists who *else* gets your data. A tool that processes everything on your device has almost nothing to put here. A long list means your text has more stops than you thought.

**2. "Improve our services."** Watch for language granting the company the right to use your content to "improve," "develop," or "enhance" their services. That's often training-adjacent phrasing that stops short of the word "training."

**3. "Human review."** Many cloud AI policies reserve the right for staff to read flagged conversations for safety or quality purposes. That may be entirely reasonable — but if you handle [privileged or confidential material](/blog/chatgpt-confidential-documents), it's a fact you need to know before you paste, not after.

There's also a structural signal worth more than any paragraph: **does the tool require an account?** An account exists because there's a server that needs to know who you are. No account, no login, no sync — that's an architecture that couldn't easily build a profile of you even if someone wanted to.

## Test 5: Ask the awkward question

If a tool is aimed at businesses, ask the vendor directly, in writing:

> *"When I type a message, does the text of that message leave my device? If so, where does it go, how long is it retained, and who can read it?"*

The answer is informative regardless of what it says. A local tool answers "no, it doesn't leave" in one sentence. A cloud tool with good practices answers clearly and specifically about retention and access. A tool that answers with adjectives — *secure, encrypted, enterprise-grade* — has dodged the question, because none of those words say where the data went.

"Encrypted in transit" is the most common dodge. It means nobody can read your message *while it travels* to the company's servers. It says nothing at all about what happens when it arrives.

## The quick reference

| The claim | What it might still allow | How to check |
| --- | --- | --- |
| "Your data is encrypted" | Full access once it arrives on their servers | Test 2 — is anything being sent at all? |
| "We don't train on your data" | Storage, retention, human review, third parties | Test 4 — search for "improve" and "human review" |
| "Private by design" | Anything; it's a slogan, not a mechanism | Test 1 — does it work with the network off? |
| "Runs on your device" | Real, and easy to confirm | Tests 1–3 should all pass |
| "SOC 2 / enterprise-grade" | A security audit, not a locality claim | Test 5 — ask where the text goes |

None of this means cloud AI is dishonest. Plenty of cloud tools are careful, well-run, and exactly right for plenty of work. The point is narrower: **"private" is a claim about architecture, not intent**, and architecture is testable. A promise not to look at your data depends on a company's policies staying the same, its staff behaving well, and its servers not being breached. Software that never sends the data doesn't depend on any of that.

## Run these on us

We'd rather you tested than trusted, so here's what to expect from [WorkInPrivate](/) on each one.

Turn off your Wi-Fi and it keeps working — every conversation, including [questions about your own documents](/blog/chat-with-your-documents-privately), because the model is a file on your disk and your computer is doing the thinking. Watch it in Activity Monitor or Resource Monitor and you'll see nothing going out as you type; the only network activity is when you deliberately download a model from Hugging Face. Go looking for your chats and you'll find them in a folder on your own machine, yours to delete. There's no account to create, because there's no server that needs to know who you are.

That's the whole design, and it's why we're comfortable telling you to go check. Ten minutes with Activity Monitor beats any promise we could make on a webpage — including this one.

If that's the kind of AI you want for your confidential work, the [free trial](/download) runs entirely on the computer you already own. Test it before you trust it.
