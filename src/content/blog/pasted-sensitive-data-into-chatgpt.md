---
title: "You Already Pasted It: What to Do After Sending Something Sensitive to ChatGPT"
description: "That sinking feeling after you hit enter on a client file, a password, or a colleague's medical detail. Here's a calm, practical checklist for what to do next — what deletion actually accomplishes, what it doesn't, and how to make sure it isn't a recurring problem."
pubDate: 2026-09-06
category: "Privacy"
---

Most advice about AI and confidentiality is written for the moment *before* you paste something. This one is for the moment after.

You were moving fast. You dropped a contract into a chatbot to get a summary, and only afterward remembered whose contract it was. Or you pasted a config file that had a password sitting in line nine. Or you asked for help wording a difficult message and included a colleague's actual medical situation, because that was the whole point of the question.

Then you looked at the screen and thought: *oh.*

Here's the short version: **this is a common, mostly recoverable mistake, and the useful response is a calm hour of work, not a spiral.** What matters is doing the right few things in roughly the right order.

## First, resist both bad instincts

There are two natural reactions and both make things worse.

The first is panic — assuming the information is now permanently public and something terrible is in motion. That's almost never what happened. You sent data to a vendor's servers. That's a confidentiality problem to handle, not a breaking news event.

The second is the shrug: *it's probably fine, everyone does it.* Sometimes it genuinely is fine. But "probably fine" is a conclusion, and you haven't done the ten minutes of thinking that would earn it. Do the thinking, then you get to decide it's fine.

## Step 1: Write down what you actually sent

Do this before the details fade, because they fade fast — and because every later decision depends on this.

Open the conversation and look at it. Not your memory of it, the actual text. Then write down, somewhere outside the chatbot:

- **What was in it.** Names, account numbers, health details, the contents of an attached file, credentials.
- **Whose it was.** Yours, your employer's, a client's, a third party's.
- **Which tool and which account.** A personal free account, a work account, a company plan with a business agreement behind it — these have meaningfully different terms.
- **When.**

That's your record. If this turns out to be reportable to anyone, you'll need it, and reconstructing it from memory in a week is much worse than writing it down now.

## Step 2: Sort it into one of three buckets

Not everything you regret typing carries the same weight.

**Bucket one: your own information.** Your draft, your finances, your embarrassing question. There's no duty to anyone else here. It's worth caring about — your privacy is real — but there is nobody to notify and nothing to escalate.

**Bucket two: someone else's confidential information.** A client's file, a colleague's personal situation, an employer's unreleased plans. Now you're holding an obligation that belongs to someone else, which is what changes the calculus.

**Bucket three: live credentials.** A password, an API key, a private key, a token. This is the one bucket with genuine urgency, and it's also the easiest to fix completely — see step four.

Most incidents are bucket one, and most people treat them like bucket two. Some are bucket three and get treated like bucket one, which is the actual dangerous mix-up.

## Step 3: Delete the conversation — and understand what that does and doesn't do

Delete the chat. It's worth doing, it takes fifteen seconds, and it removes the most likely way this information gets seen again: someone glancing at your screen, your own history, a shared or synced account.

Be clear-eyed about what deletion is, though. Removing a conversation from your history is not the same as the data ceasing to exist on the provider's side. Providers generally keep copies for some period after deletion — for abuse monitoring, for backups, for operational reasons — and those windows are set by their policy, not by you. Deletion obligations can also be paused entirely: if a provider is under a legal preservation order, data that would normally age out may be retained until that lifts.

So the honest framing is: **deletion meaningfully reduces exposure and gives you a clean answer about your own systems, but you cannot personally verify that every copy is gone.** That gap is exactly the thing to keep in mind when you get to step six.

While you're in the settings, check whether the account has training or model-improvement enabled and turn it off. That doesn't retroactively unwind anything — it's forward-looking — but it stops the next one from compounding the problem.

## Step 4: If it was a credential, rotate it now

This is the step that actually removes risk rather than reducing it, and it's the one people skip because it feels like an overreaction.

If what you pasted was a password, an API key, a token, or a private key, treat it as compromised and rotate it. Not because a chatbot is likely to leak it, but because you now have a secret sitting in a system you don't control, with no way to confirm it's gone — and the fix costs you ten minutes.

Same logic for anything reused: if that password appears anywhere else, change it there too.

Once you've rotated, the exposure is genuinely over. That's a nice thing to be able to say, and it's only available in this bucket, which is why it's worth doing immediately.

## Step 5: If it was someone else's data, tell the right person

This is the step people dread, and it's usually far less dramatic than imagined.

If you're at an organization with a policy, follow it — that's what it's for, and self-reporting an honest mistake is a very different conversation from having it discovered later. If you handle client information under a professional duty, loop in whoever owns compliance at your firm. If you're a sole practitioner and you're unsure whether this triggers any notification obligation, that's a question for your own counsel or professional body, not for a blog post; the answer depends on your jurisdiction, your profession, and what specifically was disclosed.

What helps here is the record from step one. "On Tuesday I pasted a client contract into a personal ChatGPT account, deleted it within an hour, and training was off" is a manageable set of facts. Vagueness is what turns a small incident into a long one.

And if your firm doesn't have a policy, this is the moment to write the short one — [it takes an afternoon](/blog/ai-policy-for-small-firms), not a legal project.

## Step 6: Notice the pattern, not just the incident

Here's the part worth sitting with. Almost nobody does this once.

The paste happened because AI was genuinely useful for that task and the sensitive material was the actual substance of the question. That pressure doesn't go away after an apology. It shows up again next Tuesday, on a different document, when you're just as busy.

Which leaves three real options. You can keep using cloud AI and get disciplined about redacting — workable, but it's a permanent tax on your attention, and [the parts you strip out are usually the parts that made the question worth asking](/blog/the-things-you-dont-type-into-chatgpt). You can decide certain categories of work are off-limits for AI, and accept losing the help there. Or you can move the sensitive work to a tool where pasting the real thing isn't a mistake in the first place.

That last option is why [local AI](/blog/local-ai-vs-cloud-ai) exists. When the model runs on your own computer, the document is processed on your machine and never uploaded — there's no vendor account holding it, no retention window to reason about, no training setting to re-verify when terms change, and nothing on a third party's server to surface in their breach or under a subpoena aimed at them. It doesn't require any technical setup [to get started](/blog/run-ai-privately-no-coding), and you can verify the claim yourself: disconnect from the internet and a local model [keeps working](/blog/does-local-ai-work-offline), because there was never anywhere for your words to go.

## The thing not to conclude

Don't respond to this by swearing off AI. That's the overcorrection, and it doesn't hold — you'll be back within a month, using it in exactly the same way, just more furtively.

The better takeaway is narrower and more durable: you found the specific gap between the work you need help with and the tool you were using. Close that gap. Handle this incident with the steps above, and then set things up so the next version of this moment is just a normal Tuesday afternoon.
