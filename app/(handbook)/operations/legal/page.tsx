const steps = [
  "Offer",
  "Board Meeting",
  "Property Report & Board Approval",
  "Preliminary Contract & Payment of 10% Deposit",
  "Final Deed, Payment & Stamp Duty",
  "Renovation Begins",
];

export default function LegalPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-800">Legal Onboarding</h1>
      <p className="text-sm text-slate-600">
        The acquisition process begins when the team identifies an August home and submits a
        non-binding offer. Here is the process from offer to renovation.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <div key={step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Step {index + 1}
            </p>
            <h2 className="mt-3 text-lg font-semibold text-slate-800">{step}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
