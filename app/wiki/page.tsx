import Image from "next/image";
import Link from "next/link";

const topics = [
  { href: "/wiki/branding-and-identity", title: "Branding & Identity", body: "Logo usage, tone of voice, visual identity and brand guidelines." },
  { href: "/wiki/collections", title: "Collections", body: "Everything about our Collections — locations, homes, and what makes each one unique." },
  { href: "/wiki/employment-hero", title: "Employment Hero", body: "Our central HR platform — employment details, holidays, training, and reviews." },
  { href: "/wiki/financials", title: "Financials", body: "Revenue models, pricing structures, and financial reporting." },
  { href: "/wiki/health-and-safety", title: "Health & Safety", body: "Health and safety policy and guidance." },
  { href: "/wiki/homeowners", title: "Homeowners", body: "Owner profiles, communication standards, and homeowner experience." },
  { href: "/wiki/how-to", title: "How To", body: "Step-by-step guides for common tasks, tools, and internal workflows." },
  { href: "/wiki/how-we-work", title: "How We Work", body: "Our ways of working, meeting cadences, and team rituals." },
  { href: "/wiki/hr-and-people", title: "HR & People", body: "Policies, benefits, leave, and everything people-related." },
  { href: "/wiki/legal", title: "Legal", body: "Contracts, compliance, and legal frameworks across regions." },
  { href: "/wiki/new-starters", title: "New Starters", body: "First-day essentials, onboarding checklists, and starter resources." },
  { href: "/wiki/regions", title: "Regions", body: "Location guides for Provence, Mallorca, Tuscany, and beyond." },
  { href: "/wiki/related-brands", title: "Related Brands", body: "Partner brands, affiliated services, and the wider August ecosystem." },
  { href: "/wiki/resources", title: "Resources", body: "Templates, assets, downloads, and shared team resources." },
  { href: "/wiki/team", title: "Team", body: "Meet the team — roles, departments, and who does what at August." },
];

export default function WikiPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Wiki
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Explore company knowledge, operations
          <br />
          and resources.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Hero Image — full bleed mobile, capped at 1440px desktop */}
      <div className="relative ml-[calc(50%-50vw)] h-[220px] w-screen overflow-hidden sm:ml-[-24px] sm:mr-[-24px] sm:h-[480px] sm:w-[calc(100%+48px)]">
        <Image
          src="/images/region-france-south_of_france.png"
          alt="South of France countryside"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1440px"
          priority
        />
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-[1040px] space-y-8 px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group block rounded-2xl bg-[#eae6e1] px-8 py-9 transition hover:-translate-y-0.5"
            >
              <h2
                className="text-[22px] font-semibold text-slate-800 sm:text-[24px]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {topic.title}
              </h2>
              <div className="mt-3 h-0.5 w-8 bg-[#326354]" />
              <p className="mt-3 text-[13px] leading-[1.7] text-slate-500 sm:text-[14px]">
                {topic.body}
              </p>
              <span className="mt-4 inline-block text-[10px] font-medium uppercase tracking-[0.22em] text-[#326354] sm:text-[11px]">
                READ MORE →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
