"use client";

export const dynamic = "force-dynamic";

import RequireAuth from "../components/RequireAuth";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <RequireAuth>
      <div className="mt-4 space-y-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/images/handbook-header_image-key_ring-1440x620.jpg"
            alt="Handbook key ring"
            width={1440}
            height={400}
            className="h-[400px] w-full object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
            priority
          />
          <div className="absolute bottom-[25%] left-0 right-0 px-6 sm:px-10">
            <div className="max-w-lg space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
                Welcome
              </p>
              <input
                type="search"
                placeholder="Search the handbook"
                className="w-full rounded-full border border-white/60 bg-white/90 px-5 py-3 text-sm text-slate-700 shadow-lg placeholder:text-slate-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/70"
              />
            </div>
          </div>
        </div>
        <section className="grid gap-6 md:grid-cols-3">
          <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
            <h2 className="text-lg font-semibold text-slate-800">Company Policy Handbook</h2>
            <p className="mt-2 text-sm text-slate-500">
              Employment policies, conduct, and people processes.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-500">
              <li>
                <Link href="/foundation/ethos" className="hover:text-slate-700">
                  The August Ethos
                </Link>
              </li>
              <li>Mission and vision statements</li>
              <li>Values and culture</li>
              <li>Policies for holiday, sickness, etc.</li>
            </ul>
            <Link
              href="/overview"
              className="mt-4 inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
            >
              More
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
              >
                <path
                  d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
            <h2 className="text-lg font-semibold text-slate-800">Tech &amp; IT</h2>
            <p className="mt-2 text-sm text-slate-500">
              Access, tools, devices, and troubleshooting guides.
            </p>
            <Link
              href="/tech-it"
              className="mt-4 inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
            >
              More
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
              >
                <path
                  d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
            <h2 className="text-lg font-semibold text-slate-800">How To</h2>
            <p className="mt-2 text-sm text-slate-500">
              Step-by-step instructions for common tasks.
            </p>
            <Link
              href="/how-to"
              className="mt-4 inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
            >
              More
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
              >
                <path
                  d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </section>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Training</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Slide Deck to explain/present to new starters (digital, tech stack, company comms)</li>
              <li>Hubspot playbook (role-specific)</li>
              <li>Monitor Tool Adoption &amp; Usage Optimization in Q1</li>
              <li>Reduce friction for Team (e.g. report.augustcollections.com)</li>
              <li>Educate on Cross-Team Visibility to improve team communication towards 2026 strategic goals.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Tech</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>How To Slide decks for reference: Google workspace (MacOS + PC)</li>
              <li>AI use (Gemini, ChatGPT)</li>
              <li>Villa Valeria (Stripe)</li>
              <li>1Password for a team and employee Vault</li>
              <li>Laptop replacement or requisition (HR)</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">Security</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>2FA, Google Authenticator, Microsoft Authenticator</li>
              <li>Laptop safety, responsibility, Acceptable Use Policy for all staff</li>
              <li>Office Ready deck</li>
              <li>Ninja + Sentinel migration to Heimdal</li>
              <li>Remote access / support</li>
              <li>Portal for support, as needed</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">IT</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>In-office support for: Google Workspace, Email support, Laptop software update requests</li>
              <li>
                Office Ready support for: Remote access / Portal tickets, Ninja (legacy) and Sentinel
                (legacy) migration to Heimdal
              </li>
              <li>GEO location of stolen/lost laptops</li>
            </ul>
          </div>
        </section>
      </div>
    </RequireAuth>
  );
}
