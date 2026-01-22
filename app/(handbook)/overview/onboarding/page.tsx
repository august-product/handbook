import Image from "next/image";

export default function NinetyDaysPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div className="space-y-8">
        <h1 className="text-3xl font-semibold text-slate-800">Onboarding</h1>
        <div className="space-y-4 text-sm text-slate-600">
          <h2 className="text-lg font-semibold text-slate-800">The First 30 Days: Core Learning</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <a
                href="https://secure.employmenthero.com/users/sign_in"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#326354] hover:text-[#2a5044]"
              >
                Employment Hero tasks
              </a>{" "}
              within your first 30 days.{" "}
              <a
                href="https://workhelp.employmenthero.com/hc/en-sg/articles/14565481513359-Manage-your-tasks"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#326354] hover:text-[#2a5044]"
              >
                Click here
              </a>{" "}
              to learn more about Employment Hero Tasks.
            </li>
            <li>
              Attend a webinar and meet the wider team. Visit{" "}
              <a
                href="https://www.augustcollections.com/august-information-webinar-overview"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#326354] hover:text-[#2a5044]"
              >
                August Information Webinar
              </a>{" "}
              to watch an overview of August.
            </li>
            <li>
              <a
                href="https://www.loom.com/share/da7cb406dd1c4dd788ef6d6abbfa60d8"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#326354] hover:text-[#2a5044]"
              >
                Watch the video overview
              </a>{" "}
              about the Valeria booking platform.
            </li>
            <li>Welcome to August presentation with HR.</li>
            <li>Board meeting and/or director orientation.</li>
          </ul>
        </div>
        <div className="space-y-4 text-sm text-slate-600">
          <h2 className="text-lg font-semibold text-slate-800">HR & Management Check-ins</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-100/70 text-xs uppercase tracking-[0.2em] text-slate-500">
                <tr>
                  <th className="px-4 py-3">Timeline</th>
                  <th className="px-4 py-3">Meeting With</th>
                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-4 py-3">Day 30</td>
                  <td className="px-4 py-3">HR Associate</td>
                  <td className="px-4 py-3">
                    Review your initial experience and task completion.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Day 30, 60, 90</td>
                  <td className="px-4 py-3">Your Manager</td>
                  <td className="px-4 py-3">
                    Focused check-ins to support your integration and growth.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="space-y-4 text-sm text-slate-600">
          <h2 className="text-lg font-semibold text-slate-800">Leaders in the Business</h2>
          <p>
            If you are a leader, you might at some point play a vital role in welcoming others.
            We want to share what is expected of you when you begin to grow your own team.
          </p>
          <p>
            <span className="font-semibold text-slate-800">Your Management Responsibilities:</span>{" "}
            When a new member joins your team and reports directly to you, Employment Hero will
            trigger an onboarding checklist for you to manage:
          </p>
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-slate-800">Pre-Arrival Planning:</span> Organise
              a detailed schedule for their first two weeks. Invite them to relevant meetings and
              project channels. Schedule dedicated training on key topics and organise a team
              lunch.
            </p>
            <p>
              <span className="font-semibold text-slate-800">The First Day:</span> Introduce your
              new joiner to the entire business via Slack.
            </p>
            <p>
              <span className="font-semibold text-slate-800">Ongoing Mentorship:</span> Schedule
              and conduct 30, 60, and 90-day check-ins to ensure they are integrated and thriving.
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <Image
          src="/images/first-90-days.avif"
          alt="First 90 days onboarding"
          width={640}
          height={860}
          className="h-full w-full object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
      </div>
    </div>
  );
}
