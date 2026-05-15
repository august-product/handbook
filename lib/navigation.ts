export type NavItem = {
  href: string;
  label: string;
  breadcrumbLabel?: string;
  description?: string;
  icon?: string;
};

export type NavSection = {
  title: string;
  href: string;
  description?: string;
  items: NavItem[];
};

export const navSections: NavSection[] = [
  {
    title: "Welcome",
    href: "/welcome",
    description: "Company handbook, ethos, values, and onboarding.",
    items: [
      {
        href: "/welcome/introduction-to-august",
        label: "An Introduction to August",
        description: "What we do and how we operate",
        icon: "book-open",
      },
      {
        href: "/welcome/founders-vision",
        label: "The Founders' Vision",
        description: "The story and motivation behind August",
        icon: "eye",
      },
      {
        href: "/welcome/the-august-ethos",
        label: "The August Ethos",
        description: "Our philosophy and culture",
        icon: "sparkles",
      },
      {
        href: "/welcome/our-values",
        label: "Our Values",
        description: "The principles that guide our work",
        icon: "star",
      },
    ],
  },
  {
    title: "Wiki",
    href: "/wiki",
    description: "Explore company knowledge, operations, and resources.",
    items: [
      {
        href: "/wiki/branding-and-identity",
        label: "Branding & Identity",
        description: "Fonts, colours, logos, and brand templates.",
        icon: "palette",
      },
      {
        href: "/wiki/collections",
        label: "Collections",
        description: "Our 5 collection types and internal roadmap.",
        icon: "layers",
      },
      {
        href: "/wiki/employment-hero",
        label: "Employment Hero",
        description: "Our central HR platform — holidays, training, and reviews.",
        icon: "briefcase",
      },
      {
        href: "/wiki/financials",
        label: "Financials",
        description: "Revenue, capital, and financial structure.",
        icon: "trending-up",
      },
      {
        href: "/wiki/health-and-safety",
        label: "Health & Safety",
        description: "Health and safety policy and guidance.",
        icon: "shield",
      },
      {
        href: "/wiki/homeowners",
        label: "Homeowners",
        description: "Homeowner journey, access, and guest experience.",
        icon: "house",
      },
      {
        href: "/wiki/how-to",
        label: "How To",
        description: "Step-by-step instructions for everyday workflows.",
        icon: "list-checks",
      },
      {
        href: "/wiki/how-we-work",
        label: "How We Work",
        description: "Cadences, team rituals, webinars, and the Valeria platform.",
        icon: "calendar",
      },
      {
        href: "/wiki/hr-and-people",
        label: "HR & People",
        description: "HR support, wellbeing, and company handbook.",
        icon: "heart",
      },
      {
        href: "/wiki/legal",
        label: "Legal",
        description: "Legal onboarding and acquisition process.",
        icon: "scale",
      },
      {
        href: "/wiki/new-starters",
        label: "New Starters",
        description: "Onboarding timeline, first 90 days, and manager duties.",
        icon: "rocket",
      },
      {
        href: "/wiki/regions",
        label: "Regions",
        description: "Explore our 10 European villa destinations.",
        icon: "map-pin",
      },
      {
        href: "/wiki/related-brands",
        label: "Related Brands",
        description: "Partner brands and the wider August ecosystem.",
        icon: "link",
      },
      {
        href: "/wiki/resources",
        label: "Resources",
        description: "Templates, assets, downloads, and shared resources.",
        icon: "folder",
      },
      {
        href: "/wiki/team",
        label: "Team",
        breadcrumbLabel: "Team",
        description: "Meet the team — roles and departments.",
        icon: "users",
      },
    ],
  },
  {
    title: "IT & Support",
    href: "/it-support",
    description: "Tools, access, devices, and troubleshooting guides.",
    items: [
      {
        href: "/it-support/ai",
        label: "August, AI and Claude",
        description: "Guidelines for using AI tools responsibly.",
        icon: "bot",
      },
      {
        href: "/it-support/accounts-security-passwords",
        label: "Accounts, 2FA, SSO & Passwords",
        description: "Single sign-on setup and password management.",
        icon: "key-round",
      },
      {
        href: "/it-support/applications",
        label: "Applications",
        description: "Software tools, licences, and approved apps.",
        icon: "app-window",
      },
      {
        href: "/it-support/device-setup",
        label: "Device Setup",
        description: "Laptop configuration and initial setup guides.",
        icon: "laptop",
      },
      {
        href: "/it-support/support",
        label: "Support",
        description: "IT support channels, escalation, and FAQs.",
        icon: "headphones",
      },
      {
        href: "/it-support/use-policy",
        label: "Use Policy",
        description: "Acceptable use and responsible technology usage.",
        icon: "file-check",
      },
      {
        href: "/it-support/office-ready",
        label: "Office Ready",
        description: "Preparing your workspace and office setup.",
        icon: "building",
      },
    ],
  },
];

// Lookup helpers for active state detection

export function findSectionByPath(pathname: string): NavSection | undefined {
  return navSections.find(
    (s) => pathname === s.href || pathname.startsWith(`${s.href}/`)
  );
}

export function findItemByPath(pathname: string): NavItem | undefined {
  for (const section of navSections) {
    const item = section.items.find(
      (i) => pathname === i.href || pathname.startsWith(`${i.href}/`)
    );
    if (item) return item;
  }
  return undefined;
}

export function isSectionActive(
  section: NavSection,
  pathname: string
): boolean {
  return (
    pathname === section.href || pathname.startsWith(`${section.href}/`)
  );
}
