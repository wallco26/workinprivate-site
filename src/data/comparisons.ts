// Comparison / "alternative" landing-page content model.
// These pages target high-intent search queries — people comparing private-AI
// options or asking whether a cloud tool is safe. Each entry renders through
// src/components/ComparisonPage.astro, so a new page is a data change plus a
// one-line route file in src/pages/.
//
// HONESTY GUARDRAIL: every comparison includes an `honestTake` section that
// names where the competitor genuinely wins. This is deliberate — it builds
// trust with a skeptical, research-mode reader and it's simply true. Do not
// remove it to make WorkInPrivate look unbeatable.
//
// COMPLIANCE: same rules as segments.ts — we may say "runs on your device / no
// account / no telemetry / offline / open models". We may NOT claim HIPAA
// compliance, guarantees, or that competitors are insecure/illegal.

export type Tone = 'good' | 'bad' | 'neutral';

export interface ComparisonRow {
  label: string;
  values: string[]; // one per column, in column order; "yes"/"no"/free text
  // Colour per cell, in column order. Required because tone can't be inferred
  // from the value alone — for a negatively-phrased row ("Account required"),
  // "No" is the GOOD answer. good = green, bad = red, neutral = gray.
  tones: Tone[];
}

export interface ComparisonColumn {
  name: string;
  sub?: string; // small line under the name (price etc.)
  us?: boolean; // highlight this column as WorkInPrivate
}

export interface ComparisonFaq {
  q: string;
  a: string;
}

export interface ComparisonReason {
  title: string;
  body: string;
}

export interface ComparisonPage {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  subhead: string;
  intro: string[]; // lead paragraphs
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  reasonsHeading: string;
  reasons: ComparisonReason[];
  honestTake: { heading: string; body: string[] };
  faqs: ComparisonFaq[];
  ctaH2: string;
  ctaSub: string;
}

const TRIAL_SUB =
  "Free 7-day trial — no account, no credit card. Then $49.99 one-time. Windows, macOS & Linux.";

export const comparisonOrder = [
  "chatgpt-alternative-private",
  "ollama-vs-workinprivate",
  "lm-studio-alternative",
  "is-chatgpt-private",
] as const;

export const comparisons: Record<string, ComparisonPage> = {
  "chatgpt-alternative-private": {
    slug: "chatgpt-alternative-private",
    seoTitle: "Private ChatGPT Alternative That Runs on Your Computer | WorkInPrivate",
    metaDescription:
      "Looking for a private ChatGPT alternative? WorkInPrivate runs an AI assistant entirely on your own computer — no cloud, no account, no data used to train AI. $49.99 one-time, free 7-day trial.",
    eyebrow: "ChatGPT Alternative",
    h1: "A private ChatGPT alternative that runs on your own computer",
    subhead:
      "Same kind of chat you already know — writing, brainstorming, reading documents — but the AI runs on your machine instead of a company's servers. Nothing you type leaves your computer.",
    intro: [
      "ChatGPT is powerful, but everything you send it travels to OpenAI's servers, sits under an account tied to your identity, and may be used to improve their models. For casual questions that's fine. For a client's contract, a patient's notes, your finances, or an unpublished draft, it's a problem.",
      "WorkInPrivate is built for exactly those moments. It's a desktop app that runs an open-source AI model locally, so your conversations and files stay on your device. No account, no telemetry, and it keeps working with the Wi-Fi off.",
    ],
    columns: [
      { name: "WorkInPrivate", sub: "$49.99 one-time", us: true },
      { name: "ChatGPT Plus", sub: "$20/month" },
    ],
    rows: [
      { label: "Runs on your own computer", values: ["Yes", "No — cloud only"], tones: ["good", "bad"] },
      { label: "Chats & files leave your machine", values: ["Never", "Always"], tones: ["good", "bad"] },
      { label: "Account / email required", values: ["No", "Yes"], tones: ["good", "bad"] },
      { label: "Your chats can train the AI", values: ["Never", "Possible"], tones: ["good", "bad"] },
      { label: "Works with no internet", values: ["Yes, after setup", "No"], tones: ["good", "bad"] },
      { label: "File analysis (PDF, DOCX, images)", values: ["Yes", "Yes"], tones: ["good", "good"] },
      { label: "Cost after one year", values: ["$49.99", "$240"], tones: ["good", "neutral"] },
      { label: "Best-in-class frontier model", values: ["No — good local models", "Yes"], tones: ["neutral", "good"] },
    ],
    reasonsHeading: "Why people switch to WorkInPrivate",
    reasons: [
      {
        title: "Your data never leaves the room",
        body: "The model runs on your hardware. There's no server to send your words to, so there's nothing to leak, subpoena, or train on.",
      },
      {
        title: "Pay once, not every month",
        body: "$49.99 one time replaces a $240/year subscription. No usage caps, no metering, no surprise bill.",
      },
      {
        title: "No account, no setup headaches",
        body: "No sign-up, no API keys, no command line. It checks your computer, picks a model that fits, and opens like any chat app.",
      },
      {
        title: "Works offline",
        body: "On a plane, on a locked-down network, or just unplugged — WorkInPrivate keeps answering after the one-time model download.",
      },
    ],
    honestTake: {
      heading: "When ChatGPT is still the better choice",
      body: [
        "We'll be straight with you: for raw capability on the hardest tasks, a frontier cloud model like GPT-4-class ChatGPT is stronger than a model running on a typical laptop. If you need the absolute best reasoning and you don't mind the data leaving your machine, keep ChatGPT.",
        "WorkInPrivate is the right pick when privacy is the priority — confidential documents, work you're under NDA on, or anything you simply don't want on someone else's server. Many people run both: ChatGPT for public brainstorming, WorkInPrivate for anything sensitive.",
      ],
    },
    faqs: [
      {
        q: "Is WorkInPrivate as smart as ChatGPT?",
        a: "It runs strong open-source models locally, which are excellent for everyday writing, summarizing, and document Q&A. For the very hardest reasoning tasks, frontier cloud models still have an edge — but they can't offer on-device privacy. WorkInPrivate trades a little raw power for complete confidentiality.",
      },
      {
        q: "Do I need a powerful computer?",
        a: "Most modern laptops from the last few years work fine. During setup, WorkInPrivate checks your machine and recommends a model that will run well on it — you never have to compare specs yourself.",
      },
      {
        q: "Is it really a one-time price?",
        a: "Yes. $49.99 once, no subscription and no usage limits. You can try it free for 7 days first with no account or credit card.",
      },
      {
        q: "Which platforms are supported?",
        a: "Windows, macOS, and Linux — all included in the one purchase.",
      },
    ],
    ctaH2: "Try a private ChatGPT alternative for yourself",
    ctaSub: TRIAL_SUB,
  },

  "ollama-vs-workinprivate": {
    slug: "ollama-vs-workinprivate",
    seoTitle: "Ollama vs WorkInPrivate — Local AI Without the Command Line | WorkInPrivate",
    metaDescription:
      "Ollama vs WorkInPrivate: both run AI locally and privately. Ollama is a free command-line tool for developers; WorkInPrivate is a guided desktop app for everyone else. See which fits you.",
    eyebrow: "Ollama vs WorkInPrivate",
    h1: "Ollama vs WorkInPrivate: local AI, with or without the command line",
    subhead:
      "Both run open-source AI models privately on your own machine. The difference is who they're built for — Ollama for developers comfortable in a terminal, WorkInPrivate for everyone who just wants to open an app and start chatting.",
    intro: [
      "Ollama is a great, free tool. If you're a developer who's happy pulling models from a command line, wiring up a separate chat front-end, and managing it yourself, you may not need anything else — and we'll say so plainly below.",
      "But most people aren't developers. WorkInPrivate takes the same idea — AI running locally on your device — and wraps it in a guided desktop app: no terminal, no config files, no separate UI to install. It checks your hardware, picks a model, and opens like any chat app you already know.",
    ],
    columns: [
      { name: "WorkInPrivate", sub: "$49.99 one-time", us: true },
      { name: "Ollama", sub: "Free" },
    ],
    rows: [
      { label: "Runs AI locally & privately", values: ["Yes", "Yes"], tones: ["good", "good"] },
      { label: "Command line required", values: ["Never", "Yes, to run models"], tones: ["good", "bad"] },
      { label: "Built-in chat interface", values: ["Yes", "No — separate UI needed"], tones: ["good", "bad"] },
      { label: "Picks a model that fits your PC", values: ["Yes, automatically", "You choose & manage"], tones: ["good", "neutral"] },
      { label: "File analysis built in", values: ["Yes", "Not out of the box"], tones: ["good", "bad"] },
      { label: "Guided setup for non-technical users", values: ["Yes", "No — built for developers"], tones: ["good", "bad"] },
      { label: "Price", values: ["$49.99 once", "Free"], tones: ["neutral", "neutral"] },
      { label: "Customer support", values: ["Email support included", "Community only"], tones: ["good", "neutral"] },
    ],
    reasonsHeading: "What you're paying for with WorkInPrivate",
    reasons: [
      {
        title: "No terminal, ever",
        body: "Everything happens in a normal app window. No installing a runtime, pulling models, or launching a server from a command line.",
      },
      {
        title: "One app, not a stack",
        body: "Ollama runs models but you still need a separate chat UI and setup. WorkInPrivate is the model engine, the chat, and file analysis in a single install.",
      },
      {
        title: "It picks the model for you",
        body: "No comparing parameter counts and quantization. It reads your hardware and recommends one that runs well.",
      },
      {
        title: "A real person to email",
        body: "You get product support, not just a Discord to search through when something doesn't work.",
      },
    ],
    honestTake: {
      heading: "When Ollama is the better choice",
      body: [
        "If you're a developer, love the terminal, and want to script your own pipelines or plug models into your code, Ollama is excellent and free. You don't need us — and we'd rather tell you that than sell you something you won't use.",
        "WorkInPrivate earns its $49.99 with people who want the same privacy without the setup: they'd rather pay once than spend an afternoon wiring up a runtime, a model, and a chat UI. If that's you, the time saved is worth more than the price.",
      ],
    },
    faqs: [
      {
        q: "Isn't Ollama free? Why pay $49.99?",
        a: "You're paying for the experience, not the model. Ollama is a developer tool that needs a command line and a separate chat interface. WorkInPrivate bundles the engine, a friendly chat app, automatic model selection, file analysis, and email support into one install — so a non-technical person can be chatting privately in minutes.",
      },
      {
        q: "Does WorkInPrivate use Ollama under the hood?",
        a: "WorkInPrivate runs open-source models locally through a bundled engine so you never touch a command line. The privacy guarantee is the same idea as any local-model tool: inference happens on your machine, not in the cloud.",
      },
      {
        q: "Can I still use my own models?",
        a: "WorkInPrivate is designed to pick and manage a model for you automatically, which is the point for most users. If you're the kind of person who wants full manual control over every model, a developer tool like Ollama may suit you better.",
      },
    ],
    ctaH2: "Want local AI without the setup? Try WorkInPrivate",
    ctaSub: TRIAL_SUB,
  },

  "lm-studio-alternative": {
    slug: "lm-studio-alternative",
    seoTitle: "An LM Studio Alternative Built for Non-Technical Users | WorkInPrivate",
    metaDescription:
      "Looking for an LM Studio alternative that's simpler? WorkInPrivate runs open-source AI locally with a guided setup — no model catalogs or quantization settings to figure out. $49.99 one-time.",
    eyebrow: "LM Studio Alternative",
    h1: "A simpler LM Studio alternative — private AI without the tinkering",
    subhead:
      "LM Studio puts a whole model catalog and its settings in front of you. WorkInPrivate makes the choices for you: it checks your computer, sets up a model that runs well, and opens straight into a chat.",
    intro: [
      "LM Studio is a capable app for running local models, and if you enjoy browsing model catalogs, comparing quantizations, and tuning parameters, it gives you a lot of control. That control is exactly what stops many people from ever getting started.",
      "WorkInPrivate is for the person who doesn't want to become a local-AI hobbyist. Same core benefit — the AI runs privately on your own machine — but the technical decisions are made for you, so there's nothing to configure before you can start chatting with your documents.",
    ],
    columns: [
      { name: "WorkInPrivate", sub: "$49.99 one-time", us: true },
      { name: "LM Studio", sub: "Free" },
    ],
    rows: [
      { label: "Runs AI locally & privately", values: ["Yes", "Yes"], tones: ["good", "good"] },
      { label: "Pick your own model & quantization", values: ["Done for you", "You choose"], tones: ["good", "neutral"] },
      { label: "Guided, non-technical setup", values: ["Yes", "Partial — geared to enthusiasts"], tones: ["good", "neutral"] },
      { label: "Automatic hardware check", values: ["Yes", "Manual"], tones: ["good", "neutral"] },
      { label: "File analysis built in", values: ["Yes", "Varies by setup"], tones: ["good", "neutral"] },
      { label: "Made for confidential professional work", values: ["Yes — with segment guides", "General-purpose"], tones: ["good", "neutral"] },
      { label: "Price", values: ["$49.99 once", "Free"], tones: ["neutral", "neutral"] },
      { label: "Email support", values: ["Included", "Community only"], tones: ["good", "neutral"] },
    ],
    reasonsHeading: "Why choose WorkInPrivate over LM Studio",
    reasons: [
      {
        title: "No model catalog to navigate",
        body: "You don't have to know what a 7B parameter Q4_K_M model is. WorkInPrivate reads your hardware and picks one that fits.",
      },
      {
        title: "Nothing to configure first",
        body: "No context-length sliders or GPU-offload settings between you and your first answer. Open it and type.",
      },
      {
        title: "Built around real work",
        body: "Dedicated guides for lawyers, therapists, accountants and more — mapped to confidential workflows, not generic demos.",
      },
      {
        title: "Support when you're stuck",
        body: "A real support email, not just a forum to search.",
      },
    ],
    honestTake: {
      heading: "When LM Studio is the better choice",
      body: [
        "If you like to tinker — swapping models, testing quantizations, tuning inference settings — LM Studio is free and gives you that control. Enthusiasts will feel more at home there, and we won't pretend otherwise.",
        "WorkInPrivate is for people who see all those options as friction. If you'd rather have the decisions made for you and just get to work privately, that's exactly what the $49.99 buys.",
      ],
    },
    faqs: [
      {
        q: "How is WorkInPrivate different from LM Studio?",
        a: "Both run open-source models locally for privacy. LM Studio hands you the full toolkit — model catalog, quantization, inference settings — which is powerful but overwhelming for non-technical users. WorkInPrivate makes those choices for you and opens straight into a simple chat, with professional guides and email support.",
      },
      {
        q: "Why pay when LM Studio is free?",
        a: "The same reason people buy polished software over free tools: the $49.99 buys a guided, decision-free experience and support. If configuring models yourself sounds fun, LM Studio is a fine free choice.",
      },
      {
        q: "Can I use it for confidential client work?",
        a: "Yes — that's its focus. Everything runs on your device with no account or telemetry, which reduces disclosure risk. It supports your confidentiality obligations but isn't a substitute for your own compliance program.",
      },
    ],
    ctaH2: "Skip the tinkering — try WorkInPrivate",
    ctaSub: TRIAL_SUB,
  },

  "is-chatgpt-private": {
    slug: "is-chatgpt-private",
    seoTitle: "Is ChatGPT Private? What Happens to Your Data — and a Private Alternative | WorkInPrivate",
    metaDescription:
      "Is ChatGPT private or confidential? Here's what actually happens to your chats and files, why it matters for sensitive work, and how a local AI keeps everything on your own computer.",
    eyebrow: "Is ChatGPT Private?",
    h1: "Is ChatGPT private? Here's what actually happens to your data",
    subhead:
      "Short answer: what you type into ChatGPT leaves your computer, lives under an account tied to you, and may be reviewed or used to improve the model. For sensitive work, that matters — here's the detail, and what to do instead.",
    intro: [
      "When you chat with ChatGPT, Claude, Gemini, or any cloud AI, your messages and any files you upload are sent over the internet to that company's servers. They're processed there, stored under your account, and — depending on your settings and plan — may be used to train future models or reviewed by staff for safety.",
      "For a lot of everyday use, that's a perfectly acceptable trade. But if you handle privileged legal documents, patient information, client financials, unpublished writing, or anything under an NDA, \"it probably stays private\" isn't good enough. The only way to be certain your data doesn't leave is to not send it anywhere in the first place.",
    ],
    columns: [
      { name: "WorkInPrivate", sub: "Local AI", us: true },
      { name: "ChatGPT & cloud AI", sub: "Cloud AI" },
    ],
    rows: [
      { label: "Where your chats are processed", values: ["On your computer", "Company servers"], tones: ["good", "bad"] },
      { label: "Files uploaded to a server", values: ["Never", "Yes"], tones: ["good", "bad"] },
      { label: "Stored under an account tied to you", values: ["No account at all", "Yes"], tones: ["good", "bad"] },
      { label: "Can be used to train the AI", values: ["Never", "Possible, per settings/plan"], tones: ["good", "bad"] },
      { label: "Can be reviewed by staff", values: ["No — no one else can see it", "Possible, for safety"], tones: ["good", "bad"] },
      { label: "Subject to subpoena of the provider", values: ["Nothing to hand over", "Data exists to request"], tones: ["good", "bad"] },
      { label: "Works with no internet", values: ["Yes", "No"], tones: ["good", "bad"] },
    ],
    reasonsHeading: "How WorkInPrivate keeps it actually private",
    reasons: [
      {
        title: "There's no server involved",
        body: "The AI model runs on your own hardware. Your words are never transmitted, so there's nothing to intercept, store, or subpoena.",
      },
      {
        title: "No account, no identity",
        body: "No email, no login, no profile. Nothing ties a conversation back to you because there's no account in the first place.",
      },
      {
        title: "Nothing trains on your data",
        body: "Your text can't improve anyone's model because it never leaves your device. It's private by architecture, not by policy.",
      },
      {
        title: "Prove it yourself",
        body: "Unplug your internet. WorkInPrivate keeps answering. That's the simplest demonstration that nothing is being sent anywhere.",
      },
    ],
    honestTake: {
      heading: "To be fair to ChatGPT",
      body: [
        "Cloud providers do take security seriously, and most offer settings to opt out of training or use enterprise plans with stronger data terms. If you configure it carefully, ChatGPT can be reasonably private for many uses.",
        "But \"reasonably private, if you trust the settings\" is a different promise from \"the data physically never leaves my machine.\" For confidential professional work, the second promise is the one that holds up — and it's the one a local tool like WorkInPrivate can make.",
      ],
    },
    faqs: [
      {
        q: "Does ChatGPT keep my conversations?",
        a: "Yes. By default your conversations are stored under your account, and depending on your plan and settings they may be used to train future models or reviewed for safety. You can adjust some of this in settings, but the data still passes through and is held on their servers.",
      },
      {
        q: "Is ChatGPT safe for confidential or client data?",
        a: "It depends on your obligations. Because your input is transmitted to and stored by a third party, many professionals with confidentiality duties avoid putting client or patient data into cloud AI. A local tool that never sends the data anywhere removes that disclosure risk entirely.",
      },
      {
        q: "How is WorkInPrivate different?",
        a: "WorkInPrivate runs the AI on your own computer. Your chats and files are never uploaded, there's no account, and no telemetry — so there's simply nothing on a server to expose. You can confirm it by disconnecting from the internet and watching it keep working.",
      },
      {
        q: "Can I just turn off training in ChatGPT instead?",
        a: "You can reduce how your data is used, and that's worth doing. But it still travels to and is stored on their servers. If you need certainty rather than a setting, keeping the data on your own device is the only approach that guarantees it.",
      },
    ],
    ctaH2: "Keep sensitive work on your own machine",
    ctaSub: TRIAL_SUB,
  },
};
