---
title: "When the Terms of Service Change: Cloud AI Privacy Is a Promise, Not a Property"
description: "Every cloud AI tool's privacy guarantee is a document the company can rewrite — and they do, when the business model shifts, when they're acquired, or when a court orders it. Here's what actually moves those documents, and the one question worth asking of any tool you hand real work to."
pubDate: 2026-09-21
category: "Privacy"
---

Somewhere in your browser history is a page you agreed to and did not read.

That's not a criticism — nobody reads them, and the companies writing them know nobody reads them. But it's worth sitting with what that page actually is. When a cloud AI tool tells you "we don't train on your data," or "we delete your chats after thirty days," or "your conversations are private," that sentence lives in a document. The document has a version number and a date at the top. And the same people who wrote it can write a new one.

That's the whole argument of this post, and it isn't really about any particular company. It's about the difference between two kinds of privacy:

- **A promise** — someone has agreed not to do a thing.
- **A property** — the thing cannot be done.

Cloud AI gives you the first. Only running the model on your own machine gives you the second. Everything below is about why that gap matters more than it looks.

## The document is not the architecture

When you type into a cloud chatbot, two separate things are true at once.

The **architecture** is fixed: your words leave your computer, travel to a company's servers, get processed on hardware you don't own, and land in a system associated with your account. That happens regardless of what any policy says. It is a physical fact about where the computation occurs.

The **policy** is what the company has agreed to do with the data once it's there. Don't train on it. Delete it on this schedule. Don't let staff read it except under these conditions.

The policy is the part that protects you. The policy is also the part that can change on a Tuesday, with an email you skim and a banner you click through. The architecture — your data being on their machines — is the part that doesn't change, and it's the part that makes every future version of the policy matter.

Once your data has crossed that line, you are no longer protected by a decision you made. You are protected by a decision someone else keeps making, on your behalf, indefinitely, for reasons that have nothing to do with you.

## Five things that rewrite a privacy policy

Policies don't change randomly. They change for a small number of very predictable reasons, and none of them require anyone to be a villain.

**1. The business model gets hungry.** Almost every consumer AI product is currently sold below what it costs to run. That gap closes eventually — through price increases, through ads, or through getting more value out of the data already sitting there. When a company needs training data and happens to be holding several billion conversations, the pressure on that particular clause is not subtle.

**2. The company gets bought, or goes under.** Privacy policies are contracts between you and a legal entity. When that entity is acquired or enters bankruptcy, its data is an *asset* — and assets are what bankruptcies exist to distribute. Nearly every privacy policy you have ever agreed to contains a clause reserving the right to transfer your data in a merger, acquisition, or sale of assets. That clause is doing more work than any other sentence in the document.

**3. A court gets involved.** A company's retention policy describes what it does voluntarily. It does not bind a judge. If litigation requires a company to preserve records, "we delete after thirty days" is suspended for as long as the court says — including, potentially, for data the company had already told users was on its way out the door. This has happened in AI specifically, and it surprised a lot of people who believed deletion meant deletion.

**4. A default gets flipped.** The most common change isn't a dramatic reversal; it's a setting that quietly moves from off to on, announced in an email with a subject line about "updates to our terms." Several major platforms have shifted toward using customer content for model training by default, with an opt-out for anyone who notices. Some walked it back after the backlash. The ones that didn't walk it back are the point.

**5. The free tier grows up.** "Free, unlimited, forever" is a customer-acquisition budget, not a promise. Ask anyone who filled a hard drive with free unlimited photo storage and then got the email. Generous terms are generous until the growth phase ends.

None of this requires bad faith. A company can mean every word of its privacy policy on the day it publishes it and still be a different company, with different owners, different financial pressure, and a different policy, three years later. Meanwhile your conversations from three years ago are still in the building.

## The precedent isn't hypothetical

The clearest example didn't involve AI at all. Millions of people mailed a tube of saliva to a consumer genetics company under a privacy policy they found reassuring. When that company later ran into serious financial trouble, the question of what happens to a database of human genomes in a bankruptcy proceeding stopped being theoretical, and a lot of customers went looking for the delete button at the same time. The privacy policy hadn't been violated. It had simply always contained the clause about transferring data in a sale, and the sale arrived.

That's the shape of it. Not a breach. Not a scandal. Just a document performing exactly as written, in a situation nobody was picturing when they signed up.

Cloud AI has the same structure with a much larger surface area. A DNA sample is one very sensitive fact about you. A year of chat history is a running account of your work, your health, your finances, your marriage, and [everything you were worried about, month by month](/blog/the-things-you-dont-type-into-chatgpt) — annotated, searchable, and timestamped. If you handle other people's information, [it's their data in there too](/blog/is-it-safe-to-put-client-data-in-ai), under a policy they never saw and cannot opt out of.

It's worth being fair here: the major AI companies are not careless about this, and several have genuinely strong privacy engineering. The problem isn't that they're untrustworthy. It's that trustworthiness is the *only* thing standing between your data and a different outcome, and trustworthiness isn't a property of software. It's a property of an organization, and organizations change.

## The part people miss: it works backwards

Here's the detail that makes this more than an abstract worry.

When a privacy policy changes, it doesn't only govern what you do next. It governs the data the company is already holding. If a service revises its terms to allow training on stored conversations, the conversations available for training include the ones you had under the old terms — the ones where you felt safe, and pasted the whole document, and used the real names.

You can stop using the product. You can't retroactively un-send it. Deletion helps, and it's worth doing, but [it's a narrower remedy than it sounds](/blog/pasted-sensitive-data-into-chatgpt): it removes your copy from the interface while backups, logs, legal holds, and anything already absorbed into a trained model follow their own separate rules.

So the decision you're actually making, each time you paste something sensitive into a cloud tool, isn't "do I trust this company today?" It's "am I comfortable with every policy this company, or whoever owns it next, might adopt for as long as this data exists?"

That's a much harder question, and it's the honest one.

## What "nothing to revise" looks like

There's a version of this where the question doesn't come up, because there's no document in the middle.

An AI model can run **on the computer in front of you**. Not a stripped-down toy — a real assistant, the same back-and-forth you're used to, except the program sits on your laptop the way your photo editor does. You type, your own processor does the work, and the answer appears. Nothing is uploaded, because there is no server to upload to. No account, no history on someone else's hardware, no terms page.

Which means there is nothing to revise. A company that changed its mind about your privacy next year would have no mechanism to act on it. An acquisition wouldn't transfer anything, because nothing was transferred in the first place. A court order for stored conversations would land on a company that doesn't have them. The model runs [with the network unplugged](/blog/does-local-ai-work-offline), which is the simplest possible demonstration that your words aren't going anywhere: they can't.

This is the difference between a promise and a property, made concrete. Cloud AI privacy is a commitment maintained by people. Local AI privacy is a consequence of where the computation happens. The first can be renegotiated. The second would require physics to cooperate.

## One question to ask about any tool

You don't have to move everything, and [not everything needs to move](/blog/local-ai-vs-cloud-ai) — a frontier cloud model is still the better tool for plenty of ordinary, non-sensitive work, and pretending otherwise would be silly.

But there's a single question worth applying to anything you're about to hand real information to:

> **What would have to happen for this to stop being private — and would I find out?**

For a cloud service, the honest answer is a list: a policy update, an acquisition, a funding crunch, a subpoena, a breach, a default flipped in a release note. Most of those you'd learn about late, if at all.

For software running on your own machine, the answer is shorter. Someone would have to physically get to your computer.

That difference doesn't make cloud AI unusable. It makes it a tool with a known shape — fine for the draft blog post, wrong for [the privileged document](/blog/chatgpt-confidential-documents). Knowing which is which is most of the skill.

And for the work where the answer actually matters, the safest terms of service are the ones that don't exist.

[WorkInPrivate](/) is a private AI assistant that runs entirely on your own computer — no cloud, no account, no conversation history on anyone's server. There's no privacy policy governing your chats because there's nothing to govern. It installs in a few clicks, and the [free trial](/download) runs on the machine you already own.
