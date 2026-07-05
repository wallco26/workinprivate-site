// Segment landing-page content model.
// One entry per confidential-work profession. Every /for-<slug> page renders
// from this data through src/components/SegmentPage.astro, so a new segment is
// a data change only — no new markup.
//
// COMPLIANCE GUARDRAIL: copy may say "your data stays on your device / no
// account / no telemetry / offline / no cloud inference". Copy may NOT claim
// "HIPAA compliant / BAA / privilege guaranteed / compliance solved". The
// trust line always defers regulated workflows to the reader's own duty.
//
// TESTIMONIALS: `testimonial` is optional and intentionally left unset. Only
// add REAL, verifiable customer quotes — never placeholders.

export interface Feature {
  feature: string; // real product feature (small sky label)
  benefit: string; // profession-framed benefit (navy title)
  body: string; // one line of supporting copy
}

export interface Faq {
  q: string;
  a: string;
}

export interface Segment {
  slug: string; // e.g. "for-lawyers"
  label: string; // nav / card title, e.g. "Lawyers"
  cardBlurb: string; // homepage hub card one-liner
  seoTitle: string;
  metaDescription: string;
  h1: string;
  subhead: string;
  trustStrip: [string, string, string];
  painHeading: string;
  pains: string[];
  features: Feature[];
  complianceLine: string;
  testimonial?: { quote: string; role: string }; // optional — real quotes only
  faqs: Faq[];
  finalCtaH2: string;
  seeAlso: string[]; // slugs of adjacent segments
}

// Shared reassurance line under every primary CTA.
export const CTA_SUBLINE = "$29.99 one-time · 7-day free trial · Windows / macOS / Linux";

// Shared "private by design" proof points (identical on every page — privacy
// is architectural, not per-profession).
export const PRIVACY_PROOF: { title: string; body: string }[] = [
  {
    title: "Offline after setup",
    body: "After a one-time model download, WorkInPrivate needs no internet. Pull your Wi-Fi and it keeps answering — there's no server for your words to travel to.",
  },
  {
    title: "No account, no telemetry",
    body: "No sign-up, no email, no analytics, no tracking. There's nothing to log in to and nothing phoning home.",
  },
  {
    title: "Your files never leave your device",
    body: "The AI runs locally through a bundled engine. Documents are processed on your machine and are never uploaded.",
  },
];

const complianceLine = (duty: string) =>
  `WorkInPrivate reduces disclosure risk by keeping your data on your own device — no cloud inference, no account, no telemetry. It's a privacy-first tool, not a compliance product: validate any regulated workflow against your own ${duty}.`;

export const segmentOrder = [
  "for-lawyers",
  "for-therapists",
  "for-accountants",
  "for-healthcare",
  "for-journalists",
  "for-researchers",
  "for-writers",
] as const;

export const segments: Record<string, Segment> = {
  "for-lawyers": {
    slug: "for-lawyers",
    label: "Lawyers",
    cardBlurb: "Work through privileged documents without sending them to a third-party server.",
    seoTitle: "Private AI for Lawyers — Your Files Never Leave Your Device | WorkInPrivate",
    metaDescription:
      "A local AI assistant for attorneys. Analyze case documents, draft, and research on your own machine — no cloud, no account, no telemetry. $29.99 one-time, 7-day free trial.",
    h1: "An AI assistant that never sends your client files to the cloud.",
    subhead:
      "WorkInPrivate runs entirely on your computer. Analyze discovery, draft, and summarize — without a single document leaving your device. No account. No telemetry. Offline after a one-time setup.",
    trustStrip: ["Runs 100% on your machine", "No account required", "Works offline"],
    painHeading: "Sound familiar?",
    pains: [
      "You want AI to speed up document review — but pasting a client's file into ChatGPT means handing it to someone else's server.",
      "You're juggling discovery, contracts, and correspondence across matters, and no cloud tool feels safe enough to hold them.",
      "Your duty of confidentiality doesn't have an exception for “but the AI was really helpful.”",
      "You've been told “just don't put anything sensitive in it” — which rules out the actual work.",
    ],
    features: [
      {
        feature: "Named local knowledge bases",
        benefit: "A private workspace for every matter.",
        body: "Create a separate local knowledge base per case or client and ask questions across all its documents — everything stays in that workspace, on your machine.",
      },
      {
        feature: "File analysis (PDF, DOCX, images, code)",
        benefit: "Read a 200-page PDF in seconds — locally.",
        body: "Drop in discovery, contracts, or scanned exhibits and ask for summaries, key dates, or inconsistencies. The file is processed on your device, not uploaded.",
      },
      {
        feature: "Model comparison, side by side",
        benefit: "Sanity-check a draft against two models.",
        body: "Compare two models' output on the same prompt to spot weak reasoning before it reaches a filing.",
      },
      {
        feature: "Conversation history + search",
        benefit: "Reopen the answer you already refined.",
        body: "Every matter question stays searchable on your device, so you never rebuild context from scratch.",
      },
    ],
    complianceLine: complianceLine("bar rules and firm policy"),
    faqs: [
      {
        q: "Does anything I upload get sent to a server?",
        a: "No. After a one-time model download, WorkInPrivate runs entirely on your computer. Your documents are processed locally and never leave your device.",
      },
      {
        q: "Can I keep matters separate?",
        a: "Yes. Each case can be its own named local knowledge base, so questions and documents stay scoped to that matter.",
      },
      {
        q: "Is this a legal-research or compliance replacement?",
        a: "No. It's a private desktop assistant for summarizing, organizing, and drafting support — you still review every output, and you validate privileged workflows against your own bar rules and firm policy.",
      },
    ],
    finalCtaH2: "Try it on a real file — privately.",
    seeAlso: ["for-accountants", "for-researchers", "for-journalists"],
  },

  "for-therapists": {
    slug: "for-therapists",
    label: "Therapists & counselors",
    cardBlurb: "Draft and summarize session notes without them ever leaving your laptop.",
    seoTitle: "Private AI for Therapists & Counselors — On-Device, Confidential | WorkInPrivate",
    metaDescription:
      "A local AI assistant for mental health professionals. Draft notes, summarize, and organize your work on your own device — no cloud, no account, no telemetry. $29.99 one-time, 7-day trial.",
    h1: "AI for your notes and paperwork — that keeps client confidence on your device.",
    subhead:
      "WorkInPrivate runs locally on your computer, so you can lighten the admin load without sending a word about a client to the cloud. No account. No telemetry. Offline after setup.",
    trustStrip: ["Nothing leaves your device", "No account required", "Works offline"],
    painHeading: "Sound familiar?",
    pains: [
      "You'd love help drafting progress notes — but a cloud AI means trusting a stranger's server with your client's story.",
      "Documentation eats the hours you'd rather spend with clients (or resting).",
      "“Don't put anything identifiable in it” isn't a real workflow when the whole note is identifiable.",
      "Your ethical duty to protect confidentiality doesn't pause for a helpful tool.",
    ],
    features: [
      {
        feature: "File analysis + conversation history",
        benefit: "Turn your own rough notes into clean drafts.",
        body: "Paste or drop in your session shorthand and ask for a structured draft. Everything is processed on your machine, and your history stays searchable — locally.",
      },
      {
        feature: "Named local knowledge bases",
        benefit: "A private reference shelf you control.",
        body: "Build a local knowledge base of your own frameworks, worksheets, and reference material, and ask across it — no client data ever uploaded.",
      },
      {
        feature: "Voice input",
        benefit: "Dictate between sessions, hands-free.",
        body: "Speak your notes or questions instead of typing. Voice is transcribed on your device.",
      },
      {
        feature: "Fully offline after setup",
        benefit: "Confidentiality by architecture, not by promise.",
        body: "Once set up, WorkInPrivate needs no internet. There's no server to leak from because there's no server involved.",
      },
    ],
    complianceLine: complianceLine("ethical guidelines and legal counsel"),
    faqs: [
      {
        q: "Where do my notes actually go?",
        a: "Nowhere but your own device. WorkInPrivate runs locally after a one-time model download — no cloud, no account, no telemetry.",
      },
      {
        q: "Can I use it for progress notes with client details?",
        a: "The tool keeps everything local, which reduces disclosure risk. Whether a specific PHI workflow meets your obligations is for you and your counsel to confirm.",
      },
      {
        q: "Do I need internet to use it?",
        a: "Only once, for the initial model download. After that it works fully offline.",
      },
    ],
    finalCtaH2: "Get your evenings back — without giving up confidentiality.",
    seeAlso: ["for-healthcare", "for-writers", "for-accountants"],
  },

  "for-accountants": {
    slug: "for-accountants",
    label: "Accountants & bookkeepers",
    cardBlurb: "Analyze client financials while the numbers stay entirely on your computer.",
    seoTitle: "Private AI for Accountants & Bookkeepers — Local & Confidential | WorkInPrivate",
    metaDescription:
      "A local AI assistant for accountants and bookkeepers. Review statements, reconcile, and draft on your own machine — no cloud, no account, no telemetry. $29.99 one-time, 7-day trial.",
    h1: "Analyze client financials — with the numbers never leaving your machine.",
    subhead:
      "WorkInPrivate runs entirely on your computer. Summarize statements, draft client emails, and organize working papers without uploading a single figure. No account. No telemetry. Offline after setup.",
    trustStrip: ["Runs 100% on your machine", "No account required", "Works offline"],
    painHeading: "Sound familiar?",
    pains: [
      "Client books and tax documents are exactly the kind of data you can't paste into a public AI.",
      "Reconciliations and first-pass reviews are repetitive — but cloud tools ask you to hand over the ledger.",
      "Your engagement letters promise confidentiality; a third-party server undermines it.",
      "Everything spikes at deadline, and there's no safe assistant to absorb the crunch.",
    ],
    features: [
      {
        feature: "File analysis (PDF, DOCX, images)",
        benefit: "Summarize a statement or contract in seconds.",
        body: "Drop in financials, engagement docs, or scanned receipts and ask for summaries, anomalies, or key figures — processed locally, never uploaded.",
      },
      {
        feature: "Named local knowledge bases",
        benefit: "One workspace per client.",
        body: "Keep each client's documents in a separate local knowledge base so nothing cross-contaminates and everything stays on your device.",
      },
      {
        feature: "Model comparison, side by side",
        benefit: "Double-check a summary before it goes out.",
        body: "Compare two models on the same numbers to catch a weak read before it reaches the client.",
      },
      {
        feature: "Conversation history + search",
        benefit: "Reopen prior client questions instantly.",
        body: "Your refined answers stay searchable on your machine across the whole engagement.",
      },
    ],
    complianceLine: complianceLine("professional standards and firm policy"),
    faqs: [
      {
        q: "Do client financials get uploaded anywhere?",
        a: "No. After a one-time model download, everything runs and stays on your computer.",
      },
      {
        q: "Can I separate clients?",
        a: "Yes. Give each client their own named local knowledge base.",
      },
      {
        q: "Is it a bookkeeping or tax-filing system?",
        a: "No. It's a private assistant for reviewing, summarizing, and drafting — not a records or filing system, and not a substitute for your professional judgment.",
      },
    ],
    finalCtaH2: "Put a private assistant on your desk before deadline season.",
    seeAlso: ["for-lawyers", "for-researchers", "for-healthcare"],
  },

  "for-healthcare": {
    slug: "for-healthcare",
    label: "Healthcare",
    cardBlurb: "Summarize and draft while patient information stays offline, private by design.",
    seoTitle: "Private AI for Healthcare Professionals — On-Device & Offline | WorkInPrivate",
    metaDescription:
      "A local AI assistant for clinicians and private practices. Summarize and draft on your own device — no cloud, no account, no telemetry. $29.99 one-time, 7-day trial.",
    h1: "A private AI assistant that keeps patient information on your device.",
    subhead:
      "WorkInPrivate runs locally on your computer, so you can summarize, draft, and organize without sending patient information to the cloud. No account. No telemetry. Offline after setup.",
    trustStrip: ["Nothing leaves your device", "No account required", "Works offline"],
    painHeading: "Sound familiar?",
    pains: [
      "You can't paste patient information into a public AI — and most helpful tools ask you to.",
      "Documentation and admin pull time away from patient care.",
      "“De-identify everything first” isn't realistic for the work you actually do.",
      "Protecting patient privacy is non-negotiable, tool or no tool.",
    ],
    features: [
      {
        feature: "File analysis (PDF, DOCX, images)",
        benefit: "Summarize a document without retyping it.",
        body: "Drop in referrals, forms, or scanned notes and ask for a summary or key points — processed on your device, never uploaded.",
      },
      {
        feature: "Named local knowledge bases",
        benefit: "A private reference shelf for protocols.",
        body: "Keep guidelines, templates, and reference material in a local knowledge base and ask across it — no patient data ever leaves the machine.",
      },
      {
        feature: "Voice input",
        benefit: "Dictate quick notes hands-free.",
        body: "Speak instead of type; transcription happens locally on your device.",
      },
      {
        feature: "Fully offline after setup",
        benefit: "Private by architecture.",
        body: "After the one-time model download, no internet is required and nothing phones home.",
      },
    ],
    complianceLine: complianceLine("organization's HIPAA and compliance policies"),
    faqs: [
      {
        q: "Is WorkInPrivate HIPAA compliant?",
        a: "We don't make compliance guarantees and we're not a business-associate / BAA vendor. WorkInPrivate keeps data local to reduce disclosure risk; whether a given workflow meets HIPAA is for you and your compliance team to determine.",
      },
      {
        q: "Does anything leave my device?",
        a: "No, after the one-time model download. Inference runs locally — no account, no telemetry.",
      },
      {
        q: "Do I need internet?",
        a: "Only for the initial model download. It works offline afterward.",
      },
    ],
    finalCtaH2: "Lighten the admin load — without moving patient data.",
    seeAlso: ["for-therapists", "for-accountants", "for-lawyers"],
  },

  "for-journalists": {
    slug: "for-journalists",
    label: "Journalists",
    cardBlurb: "Search document dumps and organize source material offline, private by design.",
    seoTitle: "Private AI for Journalists — Protect Sources, Work Offline | WorkInPrivate",
    metaDescription:
      "A local AI assistant for reporters. Search documents, summarize, and organize source material on your own machine — no cloud, no account, no telemetry. $29.99 one-time, 7-day trial.",
    h1: "Work through source material — without uploading it to anyone.",
    subhead:
      "WorkInPrivate runs entirely on your computer. Summarize leaks, search document dumps, and organize research while your sources stay on your device. No account. No telemetry. Offline after setup.",
    trustStrip: ["Runs 100% on your machine", "No account required", "Works offline"],
    painHeading: "Sound familiar?",
    pains: [
      "Uploading a leaked document or a source's name to a cloud AI is a risk you can't take.",
      "You're searching a giant document dump for the one thing that matters.",
      "Protecting a source means protecting where their material lives.",
      "You need a research assistant that works on a plane, in the field, off the grid.",
    ],
    features: [
      {
        feature: "Named local knowledge bases",
        benefit: "A private case file per story.",
        body: "Load a document dump into a local knowledge base and ask questions across all of it — everything stays on your machine.",
      },
      {
        feature: "File analysis (PDF, DOCX, images, code)",
        benefit: "Read and cross-reference hundreds of pages.",
        body: "Drop in leaked PDFs, records, or scans and ask for summaries, names, dates, or contradictions — processed locally.",
      },
      {
        feature: "Optional web search",
        benefit: "Verify public facts without exposing the story.",
        body: "When you need current public information the AI can search the web — but never with your source documents.",
      },
      {
        feature: "Fully offline after setup",
        benefit: "Air-gap-friendly by design.",
        body: "After the one-time model download, pull the network and keep working. There's no server for anything to travel to.",
      },
    ],
    complianceLine: complianceLine("editorial and source-protection standards"),
    faqs: [
      {
        q: "Do my documents get uploaded?",
        a: "No. After a one-time model download, everything runs locally on your machine — no account, no telemetry.",
      },
      {
        q: "Can I work fully offline?",
        a: "Yes. Only the initial model download needs internet; after that it runs air-gapped if you want.",
      },
      {
        q: "Can I keep stories separate?",
        a: "Yes. Each story or investigation can be its own named local knowledge base.",
      },
    ],
    finalCtaH2: "Interrogate the documents — on a machine only you control.",
    seeAlso: ["for-researchers", "for-writers", "for-lawyers"],
  },

  "for-researchers": {
    slug: "for-researchers",
    label: "Researchers",
    cardBlurb: "Chat with literature, transcripts, and unpublished data — all on your device.",
    seoTitle: "Private AI for Researchers — Chat With Your Data, Locally | WorkInPrivate",
    metaDescription:
      "A local AI assistant for academic and independent researchers. Query papers, transcripts, and unpublished data on your own machine — no cloud, no account, no telemetry. $29.99 one-time.",
    h1: "Chat with your literature and data — without uploading unpublished work.",
    subhead:
      "WorkInPrivate runs entirely on your computer. Query papers, interview transcripts, and pre-publication data locally, so embargoed work never leaves your device. No account. No telemetry. Offline after setup.",
    trustStrip: ["Runs 100% on your machine", "No account required", "Works offline"],
    painHeading: "Sound familiar?",
    pains: [
      "Pre-publication data and interview transcripts shouldn't sit on someone else's server.",
      "You're synthesizing dozens of papers and want to ask across all of them at once.",
      "IRB and participant-consent duties don't allow careless uploads.",
      "Fieldwork happens where the internet doesn't.",
    ],
    features: [
      {
        feature: "Named local knowledge bases",
        benefit: "A private corpus per project.",
        body: "Load a project's papers, transcripts, and notes into a local knowledge base and ask questions across the whole set — on your machine.",
      },
      {
        feature: "File analysis (PDF, DOCX, images, code)",
        benefit: "Summarize and extract from any source.",
        body: "Drop in papers, datasets, or scanned notes for summaries, themes, or extraction — processed locally, never uploaded.",
      },
      {
        feature: "Model comparison, side by side",
        benefit: "Cross-check an interpretation.",
        body: "Compare two models on the same passage to pressure-test a reading before you cite it.",
      },
      {
        feature: "Conversation history + search",
        benefit: "Never lose a synthesis.",
        body: "Your refined questions and answers stay searchable on your device across the whole project.",
      },
    ],
    complianceLine: complianceLine("institution's data and ethics policies"),
    faqs: [
      {
        q: "Is my unpublished data uploaded anywhere?",
        a: "No. After a one-time model download, everything runs locally — no cloud, no account, no telemetry.",
      },
      {
        q: "Can I organize by project?",
        a: "Yes. Each project can be its own named local knowledge base.",
      },
      {
        q: "Does it work in the field without internet?",
        a: "Yes. Only the first model download needs a connection; after that it's fully offline.",
      },
    ],
    finalCtaH2: "Put your whole corpus on your desk — privately.",
    seeAlso: ["for-writers", "for-journalists", "for-accountants"],
  },

  "for-writers": {
    slug: "for-writers",
    label: "Writers",
    cardBlurb: "Draft and edit NDA'd manuscripts and unpublished work — nothing uploaded.",
    seoTitle: "Private AI for Writers — Draft NDA'd Work Offline | WorkInPrivate",
    metaDescription:
      "A local AI assistant for authors, ghostwriters, and editors. Draft and edit unpublished manuscripts on your own machine — no cloud, no account, no telemetry. $29.99 one-time.",
    h1: "Draft and edit unpublished work — without handing it to a cloud model.",
    subhead:
      "WorkInPrivate runs entirely on your computer. Brainstorm, draft, and edit manuscripts and NDA'd material while your words stay on your device. No account. No telemetry. Offline after setup.",
    trustStrip: ["Runs 100% on your machine", "No account required", "Works offline"],
    painHeading: "Sound familiar?",
    pains: [
      "Ghostwriting and NDA'd projects can't be pasted into a public AI that may train on them.",
      "Your manuscript is unpublished IP — uploading it is a real risk.",
      "You want an editing partner that doesn't quietly keep a copy.",
      "You draft anywhere, including where there's no Wi-Fi.",
    ],
    features: [
      {
        feature: "File analysis + conversation history",
        benefit: "Edit long drafts in context.",
        body: "Drop in a chapter or manuscript and ask for edits, continuity checks, or tightening — processed locally, and your history stays searchable on your device.",
      },
      {
        feature: "Named local knowledge bases",
        benefit: "A private story bible per project.",
        body: "Keep a book's characters, style guide, and research in a local knowledge base and ask across it — no manuscript ever uploaded.",
      },
      {
        feature: "Model comparison, side by side",
        benefit: "Compare two takes on a passage.",
        body: "See how two models rewrite the same paragraph and pick the stronger line.",
      },
      {
        feature: "Fully offline after setup",
        benefit: "Your IP never leaves the room.",
        body: "After the one-time model download, there's no server involved and nothing phones home.",
      },
    ],
    complianceLine: complianceLine("NDAs and client agreements"),
    faqs: [
      {
        q: "Will my manuscript be used to train AI?",
        a: "No. WorkInPrivate runs local open models on your machine — your text never leaves your device, so there's nothing to train on.",
      },
      {
        q: "Can I keep projects separate?",
        a: "Yes. Each project can be its own named local knowledge base.",
      },
      {
        q: "Can I write offline?",
        a: "Yes. Only the initial model download needs internet; after that it's fully offline.",
      },
    ],
    finalCtaH2: "Give your unpublished work a private editor.",
    seeAlso: ["for-journalists", "for-researchers", "for-lawyers"],
  },
};
