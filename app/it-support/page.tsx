import Image from "next/image";
import Link from "next/link";

const items = [
  { href: "/it-support/ai", title: "AI Policy", body: "Guidelines for using AI tools responsibly and securely at August." },
  { href: "/it-support/accounts-security-passwords", title: "Accounts, SSO & Passwords", body: "Single sign-on setup, password management, and account access." },
  { href: "/it-support/applications", title: "Applications", body: "Software tools, licences, and approved applications for work." },
  { href: "/it-support/device-setup", title: "Device Setup", body: "Laptop configuration, mobile devices, and initial setup guides." },
  { href: "/it-support/office-ready", title: "Office Ready", body: "Mobile device management, enrolment, and remote wipe policies." },
  { href: "/it-support/support", title: "Support", body: "How to get help — IT support channels, escalation, and FAQs." },
  { href: "/it-support/use-policy", title: "Use Policy", body: "Acceptable use, device policies, and responsible technology usage." },
];

export default function ITSupportPage() {
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
          IT &amp; Support
        </h1>
        <p className="text-center text-[13px] leading-[1.7] text-slate-400 sm:text-[15px]">
          Device setup, security policies, applications
          <br />
          and technical support.
        </p>
        <div className="h-px w-10 bg-slate-200 sm:w-[60px]" />
      </section>

      {/* Hero Image — full bleed mobile, capped at 1440px desktop */}
      <div className="relative ml-[calc(50%-50vw)] h-[220px] w-screen overflow-hidden sm:ml-[-24px] sm:mr-[-24px] sm:h-[480px] sm:w-[calc(100%+48px)]">
        <Image
          src="/images/region-spain-barcelona.jpg"
          alt="Barcelona architecture"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1440px"
          priority
        />
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-[1040px] space-y-8 px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-2xl bg-[#eae6e1] px-8 py-9 transition hover:-translate-y-0.5"
            >
              <h2
                className="text-[22px] font-semibold text-slate-800 sm:text-[24px]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {item.title}
              </h2>
              <div className="mt-3 h-0.5 w-8 bg-[#326354]" />
              <p className="mt-3 text-[13px] leading-[1.7] text-slate-500 sm:text-[14px]">
                {item.body}
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
