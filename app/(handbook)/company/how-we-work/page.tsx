export default function HowWeWorkPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-800">How We Work at August</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Quarterly Presentations</h2>
          <p className="mt-3 text-sm text-slate-600">
            At the end of each quarter, we gather for our <strong>All Hands meeting</strong> to
            present wins, work in progress, and next moves. It’s a chance for the whole team to
            reconnect with our shared goals.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            All members are expected to join. If joining online, please turn on your camera to
            keep the session engaging.
            <br />
            <br />
          </p>
          <p className="text-sm text-slate-600">
            Presentations should be concise and focused on what is relevant to the whole team.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Cadences</h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-600">
            <li>
              <strong>Weekly 1:1s</strong> - A dedicated space with your manager to check in,
              align on priorities, ask questions, and get support.
            </li>
            <li>
              <strong>Quarterly Reviews</strong> - Sessions to review OKRs and performance.
              This is the ideal moment to discuss career progression and development goals.
            </li>
            <li>
              <strong>Salary Review Cycles</strong> - Formal reviews take place twice a year
              (H1 &amp; H2). While pay can be discussed quarterly, adjustments happen during
              these cycles.
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Leadership Expectations</h2>
        <p className="mt-2 text-sm text-slate-600">
          An overview of your key responsibilities and touchpoints as a leader at August.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                The Meeting
              </p>
              <p className="mt-2 font-semibold text-slate-800">Monthly Business Review (MBR)</p>
              <p className="mt-2">Active attendance required.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Timing
              </p>
              <p className="mt-2 font-semibold text-slate-800">First Monday of Every Month</p>
              <p className="mt-2">Recurring monthly session with the leadership team.</p>
            </div>
          </div>
          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Preparation & Deliverables
              </p>
              <p className="mt-2 font-semibold text-slate-800">Look for Reminders</p>
              <p className="mt-2">
                Melie will send prompts ahead of the meeting outlining specific preparation
                needs.
              </p>
            </div>
            <div>
              <p className="mt-4 font-semibold text-slate-800">Prepare Your Report</p>
              <p className="mt-2">
                Create a Monthly Business Report covering your department's key metrics and
                updates.
              </p>
            </div>
            <div>
              <p className="mt-4 font-semibold text-slate-800">Submit One Day Prior</p>
              <p className="mt-2">
                Share your report with Melie and Nico the day before the meeting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
