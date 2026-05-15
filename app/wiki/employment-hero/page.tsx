import Image from "next/image";
import Link from "next/link";

const mandatoryModules = [
  "Display Screen Equipment",
  "Introduction to Health & Safety",
  "GDPR",
  "Password Awareness",
  "Sexual Harassment Awareness",
  "Fire Safety",
  "Manual Handling & Lifting Techniques",
];

export default function EmploymentHeroPage() {
  return (
    <div className="space-y-0">
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link
            href="/"
            className="text-slate-400 transition hover:text-slate-600"
          >
            HANDBOOK
          </Link>
          &nbsp;/&nbsp;
          <Link
            href="/wiki"
            className="text-slate-400 transition hover:text-slate-600"
          >
            WIKI
          </Link>
          &nbsp;/&nbsp;EMPLOYMENT HERO
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Employment Hero
        </h1>
        <p className="max-w-md text-center text-[14px] leading-relaxed text-slate-400 sm:text-[15px]">
          Our central HR platform &mdash; employment{"\n"}details, holidays,
          training, and reviews.
        </p>
      </section>

      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              ABOUT
            </p>
            <h2
              className="text-[28px] font-normal text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              What is Employment Hero?
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Employment Hero (EH) is the platform every August employee uses for
            HR. It holds your employment details, manages holiday requests,
            hosts our mandatory training modules, and runs quarterly
            performance reviews.
          </p>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            <a
              href="https://drive.google.com/file/d/1QzZ-5KuKO1WJaXZbufPW4QH277yQMRF-/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#326354] transition hover:text-[#2a5044]"
            >
              Open the Employment Hero guide &rarr;
            </a>
          </p>
          <a
            href="https://drive.google.com/file/d/1QzZ-5KuKO1WJaXZbufPW4QH277yQMRF-/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the Employment Hero Desktop Employee Daily Use Guide"
            className="mx-auto block w-full max-w-[642px] overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:opacity-90"
          >
            <Image
              src="/images/employment_hero-cover-image.png"
              alt="Employment Hero — Desktop Employee Daily Use Guide cover"
              width={642}
              height={360}
              quality={100}
              unoptimized
              sizes="(min-width: 642px) 642px, 100vw"
              className="h-auto w-full"
            />
          </a>
        </section>

        <hr className="border-slate-200" />

        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              TRAINING
            </p>
            <h2
              className="text-[28px] font-normal text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Mandatory training
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            All staff are required to complete the modules below in Employment
            Hero. Completion is not optional. To access them, log in and go to{" "}
            <strong className="text-slate-700">
              Development &rarr; My Learning
            </strong>
            .
          </p>
          <ul className="list-inside list-disc space-y-2 text-[14px] leading-[1.7] text-slate-500">
            {mandatoryModules.map((module) => (
              <li key={module}>{module}</li>
            ))}
          </ul>
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <p className="text-[14px] leading-[1.7] text-slate-500">
              <strong className="text-slate-800">How to access:</strong> log in
              to Employment Hero, open{" "}
              <strong className="text-slate-700">Development</strong>, and
              select <strong className="text-slate-700">My Learning</strong> to
              see your assigned modules and progress.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
