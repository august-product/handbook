"use client";

export const dynamic = "force-dynamic";

import RequireAuth from "../components/RequireAuth";

export default function HomePage() {
  return (
    <RequireAuth>
      <div className="mt-10 rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center text-slate-500">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Welcome</p>
        <p className="mt-4 text-base text-slate-600">
          The homepage is intentionally blank for now.
        </p>
      </div>
    </RequireAuth>
  );
}
