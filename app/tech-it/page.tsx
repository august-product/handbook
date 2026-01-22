"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import RequireAuth from "../../components/RequireAuth";

export default function TechItPage() {
  return (
    <RequireAuth>
      <div className="mt-10 space-y-6">
        <header className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-800">Tech &amp; IT</h1>
          <p className="mt-2 text-sm text-slate-500">
            Tools, access, and device support for day-to-day work.
          </p>
        </header>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Quick access</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>
              <Link href="/tech-it/acceptable-use-policy" className="text-[#326354]">
                Acceptable Use Policy
              </Link>
            </li>
            <li>Accounts, SSO, and password guidance</li>
            <li>Device setup and security requirements</li>
            <li>Recommended apps and licenses</li>
            <li>IT support and escalation steps</li>
          </ul>
        </section>
      </div>
    </RequireAuth>
  );
}
