---
title: "Don't Take Our Word for It: How to Check Whether an AI App Is Really Private"
description: "Every AI tool says it respects your privacy — including us. Here are four checks anyone can run in fifteen minutes, no technical background required, to see for yourself whether an AI app keeps your words on your computer or quietly sends them somewhere else."
pubDate: 2026-09-25
category: "Guides"
---

Every AI product on the market says it takes your privacy seriously. We say it too. So does the company that trains on your chats by default, and so does the browser extension that uploads everything you type to a server you've never heard of.

When every product makes the same claim, the claim stops meaning much. Earlier this week we wrote about why [a cloud privacy policy is a promise, not a property](/blog/when-terms-of-service-change) — a document the company can rewrite. This post is the practical follow-up: if privacy is supposed to be a property of the software, you should be able to *check* it. Not by reading a policy, but by watching what the program actually does.

You can. It takes about fifteen minutes, costs nothing, and doesn't require you to know what a packet is. Here are four checks, from easiest to most thorough.

## Check 1: Pull the plug

This one is almost insultingly simple, and it settles most of the question on its own.

1. Open the AI app and make sure a model is already downloaded.
2. Turn off Wi-Fi. If you're on a cable, unplug it. Airplane mode works too.
3. Ask it something real — summarize a paragraph, draft an email, explain a concept.

If you get an answer, the thinking happened on your computer. There's no other place it could have happened: there was no connection to send your words over and no connection to receive a reply on.

If you get a spinner, an error, or a polite "please check your internet connection," the AI lives somewhere else. That doesn't make the app bad — it just means it's a window onto a cloud service, and its privacy depends on that service's policy.

Try the same thing with ChatGPT, Claude, Gemini, or Copilot and you'll get the error. That's not a criticism; those are cloud products and they're built that way on purpose. But it's worth knowing that "private" and "cloud" can't both be fully true, and ten seconds with the Wi-Fi switch tells you which one you're dealing with. (We wrote more about what [running AI fully offline](/blog/does-local-ai-work-offline) actually changes, if you're curious.)

**What this check doesn't prove:** an app could, in principle, work offline and then upload a backlog of your conversations the moment you reconnect. That's rare and would be a genuinely hostile design, but "rare" isn't "impossible," so if the stakes are high, keep going.

## Check 2: Watch the traffic meter

Your computer already keeps a running tally of how much data each program sends and receives. You just have to know where to look.

**On a Mac:** open **Activity Monitor** (press ⌘-Space and type it), then click the **Network** tab. You'll see a list of every running program with columns for bytes sent and bytes received.

**On Windows:** open **Resource Monitor** (press the Windows key and type `resmon`), then click the **Network** tab. The top section lists each program and how much it's sending and receiving right now.

Now reconnect to the internet, find your AI app in the list, and use it normally for a few minutes. Paste in a long document. Ask it to summarize. Have a real back-and-forth.

Then look at the **sent** column.

A cloud AI app will climb steadily — every message you send goes up, and a long pasted document shows up as a visible jump. A genuinely local app should sit at or near zero while you chat, because there's nowhere for your words to go.

This is a surprisingly powerful test, because it catches the sneaky case from Check 1. An app that saves up your conversations and uploads them later would show a burst of outbound data when you reconnect. Leave the monitor open for a bit after going back online and see if anything happens.

## Check 3: Ask a firewall to tattle

Checks 1 and 2 tell you *how much* data is moving. A firewall that prompts you on outbound connections tells you *where it's going* — and lets you say no.

On a Mac, [LuLu](https://objective-see.org/products/lulu.html) is free and made by a well-regarded independent security researcher. Little Snitch is the long-standing paid option. On Windows, the built-in Windows Defender Firewall can block an app's outbound connections entirely, and third-party tools like GlassWire will pop up a notice the first time any program tries to connect somewhere.

Once one is running, use your AI app for a while and pay attention to the prompts. Every time the app tries to reach the internet, you'll see the destination. Then ask a simple question of each one: *does this connection make sense?*

For a local AI app, a small number of connections are completely reasonable:

- **Downloading a model.** The model file has to come from somewhere the first time. For open-source models, that's usually Hugging Face, the big public library where they're published. This is a download *to* you, not an upload *from* you.
- **Checking for updates.** Plenty of software pings a server to ask "is there a newer version?" A well-behaved app lets you turn this off.
- **Features you deliberately turned on.** If an app offers web search and you enable it, your search queries have to go to a search engine. That's the feature working as described, and it should be clearly labeled and optional.

What *shouldn't* be there: connections while you're simply chatting, connections to analytics or tracking services, or connections to domains that have nothing to do with anything you asked for. If you block everything and the app keeps working perfectly for normal conversation, you've learned something important about it.

## Check 4: Read the fine print — but check it against what you saw

After the hands-on checks, the privacy policy becomes much more useful, because now you can compare the words to the behavior.

A few things to look for:

- **Does it say "no telemetry" or "no analytics"?** If so, the traffic meter should agree.
- **Does it list the network connections it makes?** An honest local app should be able to name every one of them in a sentence or two. If the list is vague ("we may share data with partners to improve our services"), that's a policy written for a cloud product.
- **Does it require an account?** An account isn't automatically bad, but for a program that runs on your own machine, it's worth asking what the account is *for*. Anything tied to an account is, by definition, stored somewhere that isn't your computer.

The point isn't that policies are worthless. It's that a policy you've *verified* is worth a lot more than one you've taken on faith.

## A worry worth addressing: can the model itself spy on you?

People sometimes ask whether a downloaded AI model could be the problem — could the file itself be phoning home?

For the model files most local apps use today, no, and it's worth understanding why. A model file is essentially a very large table of numbers — the "weights" the model learned during training. Modern formats for storing those numbers (you may see names like GGUF or safetensors) are designed to hold data, not instructions. The model doesn't run itself; the *app* reads those numbers and does the math. A spreadsheet can't send an email on its own, and a model file can't open a network connection on its own.

So the thing to scrutinize is the app, not the model — which is exactly what the four checks above do. (There's one real caveat: some older model formats could carry executable code, which is why the ecosystem moved away from them. A reputable local AI app will use the modern data-only formats.)

## What we'd expect you to find with WorkInPrivate

Since we asked you not to take our word for it, here's what we'd expect those checks to show for [WorkInPrivate](/), so you can hold us to it:

- **Pull the plug:** it keeps working. Chat, document questions, all of it, with the network off.
- **Traffic meter:** nothing going out while you chat. Your prompts, documents, and answers stay on your machine.
- **Firewall:** you'll see the model download from Hugging Face the first time you pick a model, and an optional check for new versions. If you turn on web search, your search queries go to DuckDuckGo — that feature is off unless you choose it. That's the whole list.
- **Fine print:** our [privacy policy](/privacy) says no telemetry, no analytics, no accounts, and that we never receive your prompts or generated content. You now know how to confirm that yourself.

If you ever see something that doesn't match, we genuinely want to hear about it.

## The habit worth keeping

You don't need to run these checks on every app you install. But for the tools you hand your [confidential work](/blog/chatgpt-confidential-documents), your [client's data](/blog/is-it-safe-to-put-client-data-in-ai), or [the things you'd never type into ChatGPT](/blog/the-things-you-dont-type-into-chatgpt), fifteen minutes of checking is a small price for knowing — instead of hoping.

The most trustworthy privacy claim is the one you can test. And the easiest test in the world is still the Wi-Fi switch.

WorkInPrivate is a private AI assistant that runs entirely on your own computer. The [free 7-day trial](/download) has every feature unlocked and needs no account — so you can run every check above before you spend a cent.
