import { navSections } from "./navigation";

export type SearchEntry = {
  title: string;
  href: string;
  section: string;
  description?: string;
  keywords?: string[];
};

// Extra entries (mostly deep-link anchors on content-heavy pages, plus
// keyword aliases that aren't captured by the nav labels themselves).
const extraEntries: SearchEntry[] = [
  // AI page sub-sections (anchors)
  {
    title: "August, AI and Claude",
    href: "/it-support/ai#august-ai-claude",
    section: "IT & Support",
    description: "How August uses AI day-to-day, principles for working with Claude, and the genius-bar Slack channel.",
    keywords: ["claude", "anthropic", "claude team", "genius bar", "prompts"],
  },
  {
    title: "Claude in Our Work",
    href: "/it-support/ai#august-ai-claude",
    section: "IT & Support",
    description: "AI at the centre of how we build August and Studio RIO London.",
    keywords: ["studio rio london", "ai partner"],
  },
  {
    title: "How to use Claude",
    href: "/it-support/ai#august-ai-claude",
    section: "IT & Support",
    description: "Claude Team access, thinking-partner principles, August voice, and data privacy.",
    keywords: ["claude team", "principles", "thinking partner", "tone of voice", "tov"],
  },
  {
    title: "Starting with Claude",
    href: "/it-support/ai#august-ai-claude",
    section: "IT & Support",
    description: "Common challenges when starting with Claude and how to address them.",
    keywords: ["prompting", "prompt", "challenges", "tone", "format"],
  },
  {
    title: "Comparing Chat, Cowork, and Code",
    href: "/it-support/ai#august-ai-claude",
    section: "IT & Support",
    description: "Which Claude mode to use for which kind of work.",
    keywords: ["chat", "cowork", "code", "modes", "claude code"],
  },
  {
    title: "Projects and Skills",
    href: "/it-support/ai#august-ai-claude",
    section: "IT & Support",
    description: "Difference between Projects and Skills in Claude.",
    keywords: ["projects", "skills"],
  },
  {
    title: "Permitted AI Uses",
    href: "/it-support/ai#permitted-uses",
    section: "IT & Support",
    description: "What you can use AI tools for at August.",
  },
  {
    title: "Prohibited AI Uses",
    href: "/it-support/ai#prohibited-uses",
    section: "IT & Support",
    description: "What must never be entered into external AI tools.",
    keywords: ["pii", "crm", "hubspot", "confidential"],
  },
  {
    title: "Data Classification & Handling Rules",
    href: "/it-support/ai#data-classification",
    section: "IT & Support",
    description: "Which data categories can be entered into external AI tools.",
    keywords: ["pii", "data", "classification", "gdpr"],
  },
  {
    title: "GDPR & European Data Protection",
    href: "/it-support/ai#gdpr-compliance",
    section: "IT & Support",
    description: "AI tool data protection and EEA transfer concerns.",
    keywords: ["gdpr", "eea", "data protection", "dpo"],
  },
  {
    title: "Further Reading — AI Provider Privacy",
    href: "/it-support/ai#further-reading",
    section: "IT & Support",
    description: "Privacy and data handling links for OpenAI, Anthropic, and Google.",
    keywords: ["openai", "anthropic", "gemini", "privacy"],
  },

  // Accounts page (a few useful anchors)
  {
    title: "2FA + Multi-Factor Authentication (MFA)",
    href: "/it-support/accounts-sso-passwords#mfa",
    section: "IT & Support",
    description: "MFA requirements and setup.",
    keywords: ["mfa", "2fa", "authenticator", "google authenticator"],
  },
  {
    title: "Single Sign-On (SSO)",
    href: "/it-support/accounts-sso-passwords#sso",
    section: "IT & Support",
    description: "Single sign-on setup and policy.",
    keywords: ["sso", "single sign on"],
  },
  {
    title: "1Password — Password Manager",
    href: "/it-support/accounts-sso-passwords#1password",
    section: "IT & Support",
    description: "Our standard password manager.",
    keywords: ["1password", "passwords", "password manager"],
  },

  // Employment Hero — training modules so people can search by module name
  {
    title: "Mandatory training (Employment Hero)",
    href: "/wiki/employment-hero",
    section: "Wiki",
    description: "Required modules in Development → My Learning.",
    keywords: [
      "training",
      "learning",
      "development",
      "my learning",
      "mandatory",
      "compliance",
      "display screen equipment",
      "health and safety",
      "gdpr",
      "password awareness",
      "sexual harassment awareness",
      "fire safety",
      "manual handling",
      "lifting techniques",
    ],
  },
];

function buildIndex(): SearchEntry[] {
  const fromNav: SearchEntry[] = [];
  for (const section of navSections) {
    fromNav.push({
      title: section.title,
      href: section.href,
      section: section.title,
      description: section.description,
    });
    for (const item of section.items) {
      fromNav.push({
        title: item.label,
        href: item.href,
        section: section.title,
        description: item.description,
      });
    }
  }
  return [...fromNav, ...extraEntries];
}

const index = buildIndex();

const normalize = (s: string) => s.toLowerCase().normalize("NFKD");

const tokenize = (q: string): string[] =>
  normalize(q)
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean);

function scoreEntry(entry: SearchEntry, tokens: string[]): number {
  const title = normalize(entry.title);
  const description = normalize(entry.description ?? "");
  const section = normalize(entry.section);
  const keywords = (entry.keywords ?? []).map(normalize).join(" ");

  let score = 0;
  for (const token of tokens) {
    let tokenScore = 0;
    if (title === token) tokenScore += 100;
    else if (title.startsWith(token)) tokenScore += 60;
    else if (title.includes(token)) tokenScore += 40;

    if (description.includes(token)) tokenScore += 12;
    if (section.includes(token)) tokenScore += 6;
    if (keywords.includes(token)) tokenScore += 20;

    if (tokenScore === 0) return 0; // every token must match somewhere
    score += tokenScore;
  }
  return score;
}

export function searchEntries(query: string, max = 8): SearchEntry[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const scored = index
    .map((entry) => ({ entry, score: scoreEntry(entry, tokens) }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .map((row) => row.entry);

  return scored;
}
