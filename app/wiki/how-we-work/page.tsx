import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function HowWeWorkPage() {
  return (
    <div className="space-y-0">
      {/* Page Hero */}
      <section id="top" className="flex scroll-mt-24 flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;
          HOW WE WORK
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          How We Work
        </h1>
        <p className="max-w-md text-center text-[14px] leading-relaxed text-slate-400 sm:text-[15px]">
          Our ways of working, meeting cadences,{"\n"}and team rituals.
        </p>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        {/* Table of Contents */}
        <nav className="rounded-2xl bg-[#eae6e1] px-6 py-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
            On This Page
          </p>
          <ul className="mt-2.5 columns-1 gap-x-8 sm:columns-2">
            <li className="py-[3px]">
              <a href="#quarterly-presentations" className="text-[13px] text-[#326354] transition hover:text-[#2a5044] sm:text-[14px]">
                Quarterly Presentations
              </a>
            </li>
            <li className="py-[3px]">
              <a href="#cadences" className="text-[13px] text-[#326354] transition hover:text-[#2a5044] sm:text-[14px]">
                Cadences
              </a>
            </li>
            <li className="py-[3px]">
              <a href="#leadership" className="text-[13px] text-[#326354] transition hover:text-[#2a5044] sm:text-[14px]">
                Leadership Expectations
              </a>
            </li>
            <li className="py-[3px]">
              <a href="#webinars" className="text-[13px] text-[#326354] transition hover:text-[#2a5044] sm:text-[14px]">
                Monthly Webinars
              </a>
            </li>
            <li className="py-[3px]">
              <a href="#valeria" className="text-[13px] text-[#326354] transition hover:text-[#2a5044] sm:text-[14px]">
                Valeria Platform
              </a>
            </li>
          </ul>
        </nav>

        {/* Quarterly Presentations */}
        <section id="quarterly-presentations" className="scroll-mt-24 space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Company Rhythm
          </p>
          <h2
            className="text-[28px] font-normal text-slate-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Quarterly Presentations
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            At the end of each quarter, we gather for our <strong className="text-slate-700">All Hands meeting</strong> to
            present wins, work in progress, and next moves. It&apos;s a chance for the whole team to
            reconnect with our shared goals.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            All members are expected to join. If joining online, please turn on your camera to
            keep the session engaging.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Presentations should be concise and focused on what is relevant to the whole team.
          </p>
        </section>

        <hr className="border-slate-200" />

        {/* Cadences */}
        <section id="cadences" className="scroll-mt-24 space-y-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Meeting Cadences
          </p>
          <h2
            className="text-[28px] font-normal text-slate-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Cadences
          </h2>
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#eae6e1] p-6">
              <p className="text-[14px] font-semibold text-slate-800 sm:text-[15px]">Weekly 1:1s</p>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                A dedicated space with your manager to check in,
                align on priorities, ask questions, and get support.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] p-6">
              <p className="text-[14px] font-semibold text-slate-800 sm:text-[15px]">Quarterly Reviews</p>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Sessions to review OKRs and performance.
                This is the ideal moment to discuss career progression and development goals.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] p-6">
              <p className="text-[14px] font-semibold text-slate-800 sm:text-[15px]">Salary Review Cycles</p>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Formal reviews take place twice a year
                (H1 &amp; H2). While pay can be discussed quarterly, adjustments happen during
                these cycles.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Leadership Expectations */}
        <section id="leadership" className="scroll-mt-24 space-y-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Leadership
          </p>
          <h2
            className="text-[28px] font-normal text-slate-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Leadership Expectations
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            An overview of your key responsibilities and touchpoints as a leader at August.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#eae6e1] p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                The Meeting
              </p>
              <p className="mt-3 text-[15px] font-semibold text-slate-800">
                Monthly Business Review (MBR)
              </p>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Active attendance required.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eae6e1] p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Timing
              </p>
              <p className="mt-3 text-[15px] font-semibold text-slate-800">
                First Monday of Every Month
              </p>
              <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                Recurring monthly session with the leadership team.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#eae6e1] p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Preparation &amp; Deliverables
            </p>
            <div className="mt-4 space-y-5">
              <div>
                <p className="text-[15px] font-semibold text-slate-800">Look for Reminders</p>
                <p className="mt-1 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                  Mélie will send prompts ahead of the meeting outlining specific preparation
                  needs.
                </p>
              </div>
              <div>
                <p className="text-[15px] font-semibold text-slate-800">Prepare Your Report</p>
                <p className="mt-1 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                  Create a Monthly Business Report covering your department&apos;s key metrics and
                  updates.
                </p>
              </div>
              <div>
                <p className="text-[15px] font-semibold text-slate-800">Submit One Day Prior</p>
                <p className="mt-1 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
                  Share your report with Mélie and Nico the day before the meeting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Monthly Webinars */}
        <section id="webinars" className="scroll-mt-24 space-y-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Webinars
          </p>
          <h2
            className="text-[28px] font-normal text-slate-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Monthly Webinars
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Our <strong className="text-slate-700">Advisory team</strong> hosts a monthly webinar where they present August to prospective leads, often featuring current homeowners or members of the team — including <strong className="text-slate-700">Mélie</strong>. These sessions cover the concept, our current collections, and provide a highly informative overview.
          </p>

          <div className="rounded-2xl bg-[#eae6e1] p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Watch the Recording
            </p>
            <p className="mt-3 text-[15px] font-semibold text-slate-800">
              August Information Webinar — Overview Replay
            </p>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              <a
                href="https://www.augustcollections.com/august-information-webinar-overview"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-baseline gap-1 text-[#326354] transition hover:text-[#2a5044]"
              >
                Watch the August Information Webinar
                <ExternalLink aria-hidden="true" className="h-3 w-3 self-center" />
              </a>
            </p>
          </div>

          <div className="rounded-2xl bg-[#eae6e1] p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Joining an Upcoming Session
            </p>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              Team members are welcome to join upcoming webinars — just reach out to the <strong className="text-slate-700">Sales team</strong> for the schedule and joining details.
            </p>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Valeria Platform */}
        <section id="valeria" className="scroll-mt-24 space-y-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Platforms
          </p>
          <h2
            className="text-[28px] font-normal text-slate-800"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Valeria Platform
          </h2>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            <strong className="text-slate-700">Valeria</strong> is our in-house booking platform used by our Homeowners to book their stay in their homes. It is built and maintained by the August team and sits at the heart of the homeowner experience.
          </p>

          <div className="rounded-2xl bg-[#eae6e1] p-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Walkthrough
            </p>
            <p className="mt-3 text-[15px] font-semibold text-slate-800">
              Valeria Walkthrough Video
            </p>
            <p className="mt-2 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              A guided tour of the platform — how Homeowners log in, browse availability, and book their stays.
            </p>
            <p className="mt-3 text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              <a
                href="https://www.loom.com/share/da7cb406dd1c4dd788ef6d6abbfa60d8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-baseline gap-1 text-[#326354] transition hover:text-[#2a5044]"
              >
                Watch the Valeria Walkthrough on Loom
                <ExternalLink aria-hidden="true" className="h-3 w-3 self-center" />
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
