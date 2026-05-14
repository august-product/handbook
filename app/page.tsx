"use client";

export const dynamic = "force-dynamic";

import RequireAuth from "../components/RequireAuth";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Welcome",
    href: "/welcome",
    description: "Company handbook, ethos, values, and onboarding.",
    links: [
      { label: "Founders\u2019 Vision", href: "/welcome/founders-vision" },
      {
        label: "Introduction to August",
        href: "/welcome/introduction-to-august",
      },
      { label: "Our Values", href: "/welcome/our-values" },
      { label: "The August Ethos", href: "/welcome/the-august-ethos" },
    ],
  },
  {
    title: "Wiki",
    href: "/wiki",
    description: "Explore company knowledge, operations, and resources.",
    links: [
      { label: "Branding & Identity", href: "/wiki/branding-and-identity" },
      { label: "Collections", href: "/wiki/collections" },
      { label: "How We Work", href: "/wiki/how-we-work" },
      { label: "Regions", href: "/wiki/regions" },
    ],
  },
  {
    title: "IT & Support",
    href: "/it-support",
    description: "Tools, access, devices, and troubleshooting guides.",
    links: [
      { label: "Device Setup", href: "/it-support/device-setup" },
      { label: "Applications", href: "/it-support/applications" },
      { label: "Security", href: "/it-support/security" },
      { label: "AI Policy", href: "/it-support/ai" },
    ],
  },
];

export default function HomePage() {
  return (
    <RequireAuth>
      <div className="space-y-0">
        {/* Hero — full bleed mobile, capped at 1440px desktop */}
        <div className="relative ml-[calc(50%-50vw)] h-[360px] w-screen overflow-hidden sm:ml-[-24px] sm:mr-[-24px] sm:h-[560px] sm:w-[calc(100%+48px)]">
          <Image
            src="/images/handbook-header_image-key_ring-1440x620.jpg"
            alt="August Handbook key ring"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-3 px-6 pb-10 sm:gap-4 sm:px-20 sm:pb-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#F5F3EE]/70 sm:text-[11px]">
              AUGUST COLLECTIONS
            </p>
            <h1
              className="text-[40px] font-normal text-[#F5F3EE] sm:text-[72px]"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              The Handbook
            </h1>
            <p className="max-w-[520px] text-[14px] leading-[1.7] text-[#F5F3EE]/70 sm:text-[16px]">
              Your internal guide to everything August — from our
              story and values to company operations and IT&nbsp;support.
            </p>
          </div>
        </div>

        {/* Three-column sections */}
        <div className="grid gap-10 py-16 sm:grid-cols-3 sm:gap-6">
          {sections.map((section) => (
            <div key={section.title} className="space-y-5">
              <h2
                className="text-[24px] font-semibold text-slate-800 sm:text-[28px]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                <Link
                  href={section.href}
                  className="transition hover:text-[#326354]"
                >
                  {section.title}
                </Link>
              </h2>
              <div className="h-0.5 w-8 bg-[#326354]" />
              <p className="text-[14px] leading-[1.7] text-slate-500">
                {section.description}
              </p>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-slate-800 transition hover:text-[#326354]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={section.href}
                className="inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-[#326354] transition hover:text-[#2a5044]"
              >
                EXPLORE →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </RequireAuth>
  );
}
