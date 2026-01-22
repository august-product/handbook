"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import RequireAuth from "../../components/RequireAuth";

const topLevelItems = [
  { href: "/overview", label: "Overview" },
];

const navSections = [
  {
    title: "The Foundation",
    items: [
      { href: "/foundation/founders-vision", label: "Founders' Vision" },
      { href: "/foundation/ethos", label: "The August Ethos" },
      { href: "/foundation/values", label: "Our Values" },
    ],
  },
  {
    title: "Company",
    items: [
      { href: "/company/team", label: "Team" },
      { href: "/company/hr-support", label: "HR & Support" },
      { href: "/company/how-we-work", label: "How We Work" },
      { href: "/company/resources", label: "Resources" },
      { href: "/company/branding", label: "Branding & Visual Identity" },
    ],
  },
  {
    title: "Operations",
    items: [
      { href: "/operations/introduction", label: "An Introduction to August" },
      { href: "/operations/collections", label: "Collections" },
      { href: "/operations/homeowners", label: "Homeowners" },
      { href: "/operations/regions", label: "Regions" },
      { href: "/operations/financials", label: "Financials" },
      { href: "/operations/legal", label: "Legal" },
      { href: "/operations/related-brands", label: "Related Brands" },
    ],
  },
  {
    title: "New Starters",
    items: [
      { href: "/overview/onboarding", label: "Onboarding" },
    ],
  },
];

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isSectionActive = (section: (typeof navSections)[number]) =>
    section.items.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));

  return (
    <RequireAuth>
      <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <details className="lg:hidden">
            <summary className="cursor-pointer list-none px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Menu
            </summary>
            <nav className="mt-3 max-h-[80vh] space-y-1 overflow-y-auto text-sm text-slate-600">
              {topLevelItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-3 py-2 transition hover:bg-slate-100 hover:text-slate-800"
                >
                  {item.label}
                </Link>
              ))}
              {navSections.map((section) => (
                <details key={section.title} className="group" open={isSectionActive(section)}>
                  <summary
                    className="cursor-pointer list-none px-3 pt-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400"
                    onClick={(event) => {
                      if (isSectionActive(section)) {
                        event.preventDefault();
                      }
                    }}
                  >
                    <span className="flex items-center justify-between">
                      {section.title}
                      <span className="text-slate-400 transition group-open:rotate-180">
                        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                          <path
                            d="M4 6l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                  </summary>
                  <div className="mt-2 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-2xl px-3 py-2 transition hover:bg-slate-100 hover:text-slate-800"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </nav>
          </details>
          <nav className="hidden space-y-1 text-sm text-slate-600 lg:block">
            {topLevelItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-3 py-2 transition hover:bg-slate-100 hover:text-slate-800"
              >
                {item.label}
              </Link>
            ))}
            {navSections.map((section) => (
              <details key={section.title} className="group" open={isSectionActive(section)}>
                <summary
                  className="cursor-pointer list-none px-3 pt-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400"
                  onClick={(event) => {
                    if (isSectionActive(section)) {
                      event.preventDefault();
                    }
                  }}
                >
                  <span className="flex items-center justify-between">
                    {section.title}
                    <span className="text-slate-400 transition group-open:rotate-180">
                      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </summary>
                <div className="mt-2 space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-2xl px-3 py-2 transition hover:bg-slate-100 hover:text-slate-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </RequireAuth>
  );
}
