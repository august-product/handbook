import Image from "next/image";

export default function HrSupportPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-800">HR & Support</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-[120px_1fr] md:items-start">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/images/staff/human_resource-hr_associate-yasmin_gecit.png"
                alt="Yasmin Gecit"
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Yasmin - Human Resources Associate
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                "Hello! I'm Yasmin. I'm here to support you with anything HR-related-payroll,
                benefits, wellbeing, and guidance on processes. Most queries go through your
                manager first, but you're always welcome to reach out directly."
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm font-semibold text-slate-700">I Can Help With:</p>
          <div className="mt-3 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
            <ul className="list-disc space-y-2 pl-5">
              <li>Payroll & Benefits</li>
              <li>Wellbeing Support</li>
              <li>Recruitment & Onboarding</li>
              <li>Training & Development</li>
            </ul>
            <ul className="list-disc space-y-2 pl-5">
              <li>Quarter Reviews</li>
              <li>Team Events & Celebrations</li>
              <li>Policy Guidance</li>
              <li>Employee Relations</li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">IT & Office Ready</h2>
          <p className="mt-3 text-sm text-slate-600">
            IT troubles? Issues with Gmail or login? Raise a Support Ticket with Office Ready via{" "}
            <a
              href="https://portal.officeready.tech/portal/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#326354] hover:text-[#2a5044]"
            >
              the Office Ready Portal
            </a>{" "}
            for support. Need new gear? Reach out to Mytch (Head of Product) for approval and
            guidance.
          </p>
          <a
            href="https://portal.officeready.tech/portal/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex justify-center"
          >
            <Image
              src="/images/logo-office_ready_tech.png"
              alt="Office Ready"
              width={175}
              height={48}
            />
          </a>
          <p className="mt-4 text-sm text-slate-600">
            Do you have other questions? Email{" "}
            <a
              href="mailto:yasmin@augustocollections.com?subject=Support Request from Hanbook"
              className="font-semibold text-[#326354] hover:text-[#2a5044]"
            >
              Yasmin
            </a>{" "}
            or{" "}
            <a
              href="mailto:mytch@augustocollections.com?subject=Support Request from Hanbook"
              className="font-semibold text-[#326354] hover:text-[#2a5044]"
            >
              Mytch
            </a>{" "}
            .
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Company Handbook</h2>
          <p className="mt-3 text-sm text-slate-600">
            Access our complete guide to company policies, procedures, and expectations.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1Q1tue5uxbdhhxB7ItUrm5qXZ_PJwGdx7SQpYmgbdjos/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
          >
            View Company Handbook
          </a>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Health Assured EAP</h2>
          <p className="mt-3 text-sm text-slate-600">
            Our partnership with Health Assured brings you support for any situation where you
            might feel you need it.
          </p>
          <div className="mt-4 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Physical & Emotional
              </p>
              <p className="mt-2">Resources ranging from managing anxiety to breathing techniques.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Wisdom App
              </p>
              <p className="mt-2">Track wellness & contact counsellors directly.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Wellbeing Resources
              </p>
              <p className="mt-2">Self-help tools, factsheets, and professional counselling.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                4-Week Health Plan
              </p>
              <p className="mt-2">
                Support for goals like eating healthier, quitting smoking, or sleeping better.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Home & Life Support
              </p>
              <p className="mt-2">Expert advice on budgets, debt, and civil disputes.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Work Life Assistance
              </p>
              <p className="mt-2">
                Support for returning to work or coping with professional change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
