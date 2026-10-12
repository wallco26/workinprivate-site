---
title: "Open Enrollment, Privately: Use AI to Compare Health Plans Without Handing Over Your Medical History"
description: "Picking a health plan means weighing your prescriptions, your diagnoses, your family's doctors and your budget, which is exactly what you shouldn't paste into a cloud chatbot. Here's a step-by-step way to let an AI read the fine print for you while everything stays on your own computer."
pubDate: 2026-10-12
category: "Guides"
---

It's that time of year. An email from HR or a letter from the marketplace lands with a subject line like *"Your 2027 benefits: action required."* Inside are three or four plans, each with its own 12-page summary written in a language that's technically English: *deductible*, *coinsurance*, *tier 3 specialty*, *out-of-pocket maximum*.

You have a few weeks to pick one, and you'll live with it for a year.

This is a job AI is good at. It can read long documents without getting bored, pull out the numbers that matter and lay plans side by side. It can also answer the question you actually care about: *"Given what my family really uses, which of these costs us the least?"*

There's a catch. To answer that question well, the AI needs your real details: your medications, your conditions, your kids' specialists, the surgery you're planning for spring and your household income. That's about as private as information gets, so be careful where you type it.

## Why this is the wrong thing to paste into a cloud chatbot

When you type into ChatGPT, Gemini or a similar tool, your message goes to the company's servers. Depending on the service and your settings, it may be stored, reviewed by staff or used to improve future models. We've covered the general version of this [elsewhere](/blog/local-ai-vs-cloud-ai). Health information makes it worse in a few specific ways:

- **HIPAA almost certainly doesn't cover it.** The privacy law most Americans think of as "protecting my medical information" applies to doctors, insurers and their business partners. It generally doesn't apply to a consumer chatbot you've chosen to tell things to.
- **It's unusually detailed.** A plan comparison doesn't just mention "a health issue." It lists exact drug names and dosages, how often you see a therapist, and the procedure you're expecting. Taken together, that's a fairly complete health profile.
- **It's about other people too.** If you're picking a family plan, you're typing in your spouse's and children's information. They didn't agree to that.
- **It sticks around.** Privacy policies [can change](/blog/when-terms-of-service-change), and data you share this November is governed by whatever the policy says years from now.

Most people know this on some level, so they [edit themselves](/blog/the-things-you-dont-type-into-chatgpt). They write "a common medication" instead of the drug name, or "some specialist visits" instead of "monthly." The answer they get back is vaguer as a result, which defeats the point.

The fix is to run the AI on your own computer. A local model reads the same documents and does the same reasoning, but nothing leaves your machine. You can use real names, real drugs and real numbers.

## What you'll need

- **Your plan documents.** For each plan you're considering, collect:
  - The **Summary of Benefits and Coverage (SBC)**. Every plan is required to provide this standardized document, usually around eight pages. It's the most useful single file you'll get.
  - The **drug list** (sometimes called the *formulary*), if you take any regular prescriptions.
  - Any **premium sheet** from your employer or the marketplace showing what each plan costs per paycheck or per month.
- **Your own notes.** Make a short plain-text list of what your household actually used this year: medications, roughly how many doctor visits, any specialists, therapy, and anything big you expect next year, such as a baby, a surgery or braces. Last year's insurance statements (the "Explanation of Benefits" letters) are a good place to jog your memory.
- **A local AI app with document chat.** We'll use [WorkInPrivate](/blog/chat-with-your-documents-privately) here because that's what we make. The same approach works with any tool that reads your files without uploading them.

## Step 1: Put everything in one knowledge base

In WorkInPrivate, create a new knowledge base. Call it something like **"Benefits 2027."** Add the SBCs, drug lists, premium sheet and your notes file. PDFs, Word documents and plain text all work.

Keep the notes file separate rather than typing your medical details into the chat each time. That way the AI can refer back to it in every question, and you only write it once.

Then start a conversation and point it at that knowledge base.

## Step 2: Get the basics side by side

Start simple. Ask for a table of the numbers that drive most of the decision:

> *"For each plan in these documents, make a table with: monthly premium for family coverage, deductible, out-of-pocket maximum, primary care copay, specialist copay, and generic drug copay. Cite which file each number came from."*

Asking for citations matters. WorkInPrivate lists the source file for each answer, so you can open the SBC and check any number that looks odd. **Check the important ones anyway.** Plan documents are dense and full of near-duplicate tables, and any AI can grab the in-network number when you wanted the out-of-network one.

## Step 3: Check your medications

This is where a lot of the money is, and where cloud tools force you to be vague. Here, be specific:

> *"Using my notes file, check each of my family's medications against each plan's drug list. For each drug and plan, tell me the tier, whether it needs prior authorization, and the copay or coinsurance. If a drug isn't listed, say so."*

Pay close attention to anything the AI says is *missing* or *requires prior authorization*. A drug that isn't on a plan's list can cost far more than any difference in premiums. Drug lists also get updated during the year, so if a medication is expensive or essential, confirm it with the insurer before you enroll.

## Step 4: Run your real year through each plan

Every SBC includes a few worked examples, typically having a baby, managing type 2 diabetes and treating a simple fracture. They're useful, but they describe someone else's year. Ask the AI to do the same thing with yours:

> *"Using my notes, estimate what my household would pay in a full year on each plan: premiums plus what we'd pay for our expected visits, prescriptions and the knee surgery planned for March. Show your working step by step, then give a total for each plan."*

Then try the year you hope you won't have:

> *"Now assume a bad year: one of us has an unexpected hospital stay. What's the most we could pay in total on each plan, including premiums?"*

The bad-year number is usually just the yearly premiums plus the out-of-pocket maximum. It's the figure that tells you how much financial risk each plan really carries.

**A word on arithmetic.** AI models, especially the smaller ones that run on a laptop, are better at reading and reasoning than at long chains of math. That's why the prompt asks for working: if the AI shows each step, you can spot a wrong number. For the final totals, copy the figures into a spreadsheet or calculator, or compare them with the plan cost estimator your employer or the marketplace provides. Use the AI to find and organize the numbers, and do the final sums yourself. More tips on getting good results are in [our prompting guide](/blog/how-to-prompt-a-local-ai-model).

## Step 5: Ask the questions you'd feel awkward asking HR

Because nobody else will see these questions, you can ask anything:

- *"Does any plan cover fertility treatment? What does each document say about it?"*
- *"How does each plan handle mental health visits? Is therapy covered the same way as a regular doctor's visit?"*
- *"Explain what 'coinsurance after deductible' would mean for my surgery, in plain English, as if I've never had insurance before."*
- *"Which plan works with a Health Savings Account, and how would that change the math for us?"*
- *"Is there anything in these documents about out-of-network emergency care that I should worry about?"*

If the documents don't contain the answer, a good document-chat tool should say so rather than guess. WorkInPrivate is set up to tell you when something isn't in your files. That's often a useful answer in itself, because it tells you exactly what to ask the insurer.

## A short checklist before you click "Enroll"

The AI does the reading. These checks are still yours:

1. **Are your doctors in network?** Look up each one in the insurer's directory, and ideally call the office to confirm. AI can't check this, because the network lists change and live on the insurer's website.
2. **Are your essential medications covered, at what tier, and with what restrictions?** Confirm anything expensive with the insurer.
3. **What's your worst-case year on each plan?** Premiums plus out-of-pocket maximum.
4. **What's your expected year on each plan?** Checked in a spreadsheet, not just taken from the AI.
5. **Do you know the deadline?** On HealthCare.gov, open enrollment for 2027 coverage runs from November 1, 2026 to January 15, 2027, and you need to enroll by December 15 for coverage that starts January 1. Some states run their own marketplaces with different dates. Employer deadlines vary and are often shorter, so check your HR email.

## The bottom line

Choosing a health plan is a reading-and-comparison problem, and that suits AI well. It's also a problem that involves your family's most private information. You can get help with it without making that trade-off: when the AI runs on your own computer, you can describe your real situation, get a specific answer, and keep it to yourself.

If you already have WorkInPrivate, create a "Benefits 2027" knowledge base this week and see what it finds. If you don't, you can [download it here](/download). It's a one-time purchase with no account, and it works without an internet connection. You can also see [whether your computer is ready](/blog/do-you-need-a-powerful-computer-to-run-ai-locally) first.

*This article is general information, not medical, legal, tax or financial advice. Plan details, drug lists and deadlines vary and change, so confirm anything important with your insurer, your employer's benefits team or the official marketplace before you enroll.*
