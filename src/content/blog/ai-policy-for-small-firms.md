---
title: "How to Write an AI Policy for Your Small Firm (Without Banning Everything)"
description: "Your team is already using AI — the only question is whether they're doing it under rules you wrote. Here's a practical, plain-English AI policy you can adapt in an afternoon, plus the one decision that makes the whole thing simpler."
pubDate: 2026-08-16
category: "Guides"
---

If you run a small firm — a law practice, an accounting shop, a clinic, a two-person agency — you've probably had some version of this thought: *I should really put something in writing about AI.* And then the thought dies, because writing a policy sounds like a legal project you don't have time for.

Here's the thing worth knowing: **your team is already using AI.** Survey after survey finds employees using chatbots at work whether or not their employer has approved it, often quietly. The choice isn't between "AI at my firm" and "no AI at my firm." It's between AI used under rules you wrote, and AI used under rules nobody wrote.

The good news is that a workable policy for a small firm is short — one or two pages, not twenty. Here's how to build one.

## Start with the actual risk, not the technology

Most bad AI policies fail because they try to regulate *the tool*. Tools change every few months; you'll be rewriting forever. Better policies regulate **the data** — which barely changes at all.

For almost every small firm, the real exposure comes down to three things:

- **Confidentiality.** Client files, patient information, financials, and privileged material leaving your control and landing on a vendor's servers.
- **Accuracy.** Someone relying on a confidently wrong answer in work that goes out under your firm's name.
- **Disclosure.** Clients, courts, or regulators expecting to be told when AI was involved — and not being told.

If your policy handles those three, you've handled the vast majority of what can actually go wrong. Everything else is detail.

## The five decisions that make up the policy

Rather than starting from a template you don't understand, make these five decisions. The policy is just your answers, written down.

### 1. What data may never go into a cloud AI tool

This is the most important line in the document, and it should be concrete enough that nobody has to interpret it. Name the categories:

> Do not enter into any cloud AI tool: client or patient names and identifying details, contents of client files, privileged or attorney work-product material, financial account data, health information, employee records, credentials, or anything covered by an NDA or engagement letter.

If your staff has to make a judgment call about whether something counts, they will sometimes get it wrong. Lists are better than principles here.

### 2. What AI is explicitly *encouraged* for

A policy that's all prohibitions gets ignored, because people can see the tool is genuinely useful. Give them the green-light list, so the safe path is also the obvious one:

- Drafting and editing generic text with no client details in it
- Explaining a concept, statute, or standard in plain language
- Brainstorming structure and outlines
- Rewriting your own already-public marketing copy
- Formatting, summarizing, and cleaning up text you've stripped of identifying details

Naming the permitted uses is what stops the policy from being routed around.

### 3. Who reviews AI-assisted output before it leaves

The rule most firms land on is simple: **AI never speaks for the firm unless a human has checked it.** A person is accountable for every word that goes to a client, a court, or a regulator — the same standard you'd apply to a first-year's draft. Put a name or a role on it, not just "someone."

### 4. Which tools are approved

Keep a short list of tools people may use, and require a quick check-in before anyone adds a new one. This is the part that keeps your policy alive as the market shifts — you don't rewrite the policy for each new app, you just update the list.

For each approved tool, you should be able to answer: where does the data get processed, is it retained, is it used for training, and is there a contract covering it? (We walk through those questions in more detail in [is it safe to put client data into AI?](/blog/is-it-safe-to-put-client-data-in-ai).)

### 5. When you disclose AI use

Decide once, so nobody improvises: do you tell clients that AI assisted with their work? Do you note it in engagement letters? Are there court rules or professional-body guidance in your jurisdiction that require certification? Write down the answer, even if the answer is "no disclosure required for internal drafting."

## A skeleton you can adapt

Here's the shape of a policy that fits on a page and a half:

1. **Purpose** — one paragraph on why the firm has this policy.
2. **Scope** — who it applies to (staff, contractors, temps — say so explicitly).
3. **Prohibited data** — the concrete list from decision #1.
4. **Approved uses** — the green-light list from #2.
5. **Approved tools** — the current list, plus how to request an addition.
6. **Human review** — who signs off before anything leaves the firm.
7. **Disclosure** — what clients are told, and when.
8. **What to do if something goes wrong** — who to tell, immediately, with no penalty for reporting promptly.
9. **Review date** — revisit every six months.

That last one matters more than it looks. A policy with no review date becomes wrong quietly, and nobody notices until it's the subject of a complaint.

Point 8 deserves a note too. If your policy makes people afraid to admit they pasted the wrong thing into a chatbot, you won't find out until it's much more expensive to fix. Make prompt reporting the safe choice.

## The decision that makes the whole policy simpler

Notice how much of the work above exists because the AI tool is somewhere else. The prohibited-data list, the vendor questions, the retention terms, the disclosure analysis — nearly all of it is downstream of one fact: **the data leaves your building.**

Change that fact and most of the policy gets shorter.

When the AI model runs [on your own computer](/blog/local-ai-vs-cloud-ai), the document is processed on your machine and never uploaded. There's no vendor account holding your client's file, no retention window to track, no training-data setting to re-verify every time terms change, and nothing sitting on a third party's server to be exposed in their breach or produced under a subpoena directed at them. You can verify it yourself: pull the network cable and a local AI [keeps working](/blog/does-local-ai-work-offline), because there was never anywhere for the data to go.

That doesn't erase the other two risks — accuracy and disclosure still need human review and a clear answer. But it collapses the confidentiality section from a page of vendor analysis into a sentence.

In practice, a lot of small firms land on a hybrid rule that's easy to remember:

> **Cloud AI for anything you'd be comfortable posting publicly. Local AI for everything else.**

Two categories, one test, no judgment calls about retention policies. That's a rule people can actually follow at 6pm on a deadline — which is the only real measure of whether a policy works.

## Rolling it out

A policy nobody reads is just a document. Three things make it stick:

- **Walk through it once, live.** Fifteen minutes, with real examples from your actual work. "Here's a prompt that's fine. Here's the same prompt that isn't."
- **Make the compliant path the easy one.** If the approved tool is slower or more annoying than the unapproved one, people will use the unapproved one. This is the single biggest reason policies fail.
- **Re-check in six months.** Tools change, guidance from professional bodies changes, and your list of approved tools will be out of date.

## The bottom line

You don't need a twenty-page AI policy. You need a short document that names the data that can't leave, the uses you encourage, the tools you've approved, and the human who's accountable — plus a date to revisit it.

And if you want the confidentiality half of that problem to mostly go away, the shortest path is to keep the AI on your own machines. [WorkInPrivate](/) runs an open-source AI model entirely on your computer — no cloud, no account, no telemetry — so client material never leaves the building in the first place.

We've written more specific guidance for the professions that hit this hardest: [lawyers](/for-lawyers), [accountants and bookkeepers](/for-accountants), [therapists](/for-therapists), and [healthcare](/for-healthcare). And if you're weighing tools, here's [whether ChatGPT is really private](/is-chatgpt-private) and [what a private alternative looks like](/chatgpt-alternative-private).

*This article is general information to help you think through a firm AI policy — it isn't legal advice, and it doesn't replace guidance from your own counsel or professional body. WorkInPrivate keeps your data on your device, which supports your confidentiality obligations; it isn't a substitute for your own compliance program.*
