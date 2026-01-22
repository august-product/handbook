"use client";

export const dynamic = "force-dynamic";

import RequireAuth from "../../components/RequireAuth";

export default function HowToPage() {
  return (
    <RequireAuth>
      <div className="mt-10 space-y-6">
        <header className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-800">How To</h1>
          <p className="mt-2 text-sm text-slate-500">
            Step-by-step instructions for everyday workflows.
          </p>
        </header>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Popular guides</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Submit expenses and track approvals</li>
            <li>Request time off and update calendars</li>
            <li>Prepare reports for weekly reviews</li>
            <li>Find brand assets and templates</li>
          </ul>
        </section>
      </div>
    </RequireAuth>
  );
}
