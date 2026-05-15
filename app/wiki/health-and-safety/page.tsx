import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function HealthAndSafetyPage() {
  return (
    <div className="space-y-0">
      <section className="flex flex-col items-center gap-5 px-6 pb-12 pt-16 sm:pt-20">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.22em]">
          <Link href="/" className="text-slate-400 transition hover:text-slate-600">HANDBOOK</Link>
          &nbsp;/&nbsp;
          <Link href="/wiki" className="text-slate-400 transition hover:text-slate-600">WIKI</Link>
          &nbsp;/&nbsp;HEALTH &amp; SAFETY
        </p>
        <h1
          className="text-center text-[36px] font-normal text-slate-800 sm:text-[56px]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Health &amp; Safety
        </h1>
        <p className="max-w-md text-center text-[14px] leading-relaxed text-slate-400 sm:text-[15px]">
          Health and safety policy{"\n"}and guidance.
        </p>
      </section>

      <div className="mx-auto max-w-[800px] space-y-10 px-6 py-16">
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              POLICY · 2026 / 2027
            </p>
            <h2
              className="text-[28px] font-normal text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Health &amp; Safety Policy
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            Our policy is to maintain a safe and healthy working environment for all August employees, visitors, and contractors. NM Five Limited (t/a August) is committed to meeting its obligations under the{" "}
            <a href="https://www.legislation.gov.uk/ukpga/1974/37/contents" target="_blank" rel="noreferrer" className="inline-flex items-baseline gap-1 text-[#326354] transition hover:text-[#2a5044]">Health and Safety at Work Act 1974<ExternalLink aria-hidden="true" className="h-3 w-3 self-center" /></a>{" "}
            and the{" "}
            <a href="https://www.legislation.gov.uk/uksi/1999/3242/contents/made" target="_blank" rel="noreferrer" className="inline-flex items-baseline gap-1 text-[#326354] transition hover:text-[#2a5044]">Management of Health and Safety at Work Regulations 1999<ExternalLink aria-hidden="true" className="h-3 w-3 self-center" /></a>.
          </p>
        </section>

        <hr className="border-slate-200" />

        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              OUR COMMITMENTS
            </p>
            <h2
              className="text-[28px] font-normal text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Our Commitments
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            In particular, August will use reasonable endeavours to ensure the following:
          </p>
          <ul className="list-inside list-disc space-y-3 text-[14px] leading-[1.7] text-slate-500">
            <li>The provision and maintenance of premises, plant and systems of work that are, so far as is reasonably practicable, safe and without risks to health.</li>
            <li>Arrangements for ensuring, so far as is reasonably practicable, safety and absence of risks to health in connection with the use, handling, storage and retrieval of goods, including furniture deliveries and manual handling tasks.</li>
            <li>The provision of guidance on safe manual handling practices for any tasks involving lifting, carrying or moving of items, ensuring employees are advised to seek assistance for heavy loads and to use correct lifting technique.</li>
            <li>The provision of such information, instruction, training and supervision as is necessary to ensure, so far as is reasonably practicable, the health, safety and welfare of all employees.</li>
            <li>The maintenance of any place of work frequented by employees in a safe condition without risks to health, including the provision and maintenance of safe access and egress in any emergency.</li>
            <li>The provision and maintenance of a working environment that is, so far as is reasonably practicable, safe, without risks to health, and adequate as regards facilities and arrangements for employee welfare and wellbeing.</li>
            <li>The provision and maintenance of a Fire Risk Assessment and associated evacuation procedures for August&apos;s premises at <strong className="text-slate-700">Bloomsbury House</strong>, to ensure the safety of all employees, visitors and contractors in the event of an emergency.</li>
            <li>The provision of adequate first aid arrangements, including trained first aiders and a fully stocked first aid kit on the premises. August currently has <strong className="text-slate-700">three trained first aiders</strong> whose certificates are maintained on file. First aid provision will be reviewed annually or following any significant change in staffing or premises.</li>
            <li>The provision of appropriate guidance for employees required to visit renovation sites, including residential apartments and villas, as part of their role.</li>
          </ul>
        </section>

        <hr className="border-slate-200" />

        <section className="space-y-4">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              SIGN-OFF
            </p>
            <h2
              className="text-[28px] font-normal text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Sign-Off
            </h2>
          </div>
          <div className="rounded-2xl bg-[#eae6e1] px-7 py-6">
            <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
              This Health and Safety Policy has been approved and adopted by August with effect from <strong className="text-slate-700">1st May 2026</strong>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
