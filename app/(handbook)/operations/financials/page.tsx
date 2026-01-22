export default function FinancialsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-800">August Revenue Model</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
            Sources of Capital
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Collection setup fees</li>
            <li>Project management</li>
            <li>Design fee (Rio London)</li>
            <li>Management fee</li>
            <li>Treasury & interest</li>
            <li>Resale fee</li>
            <li>Property managers fee</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
            Financial Structure
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>AMC Balance</li>
            <li>End of Stay Balance</li>
            <li>Initial Reserve</li>
            <li>Sinking Fund</li>
            <li>HIRF Balance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
