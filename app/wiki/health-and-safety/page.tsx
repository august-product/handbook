import Link from "next/link";

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

      <div className="mx-auto max-w-[800px] space-y-16 px-6 py-16">
        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              POLICY
            </p>
            <h2
              className="text-[28px] font-normal text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Health &amp; Safety Policy
            </h2>
          </div>
          <p className="text-[14px] leading-[1.8] text-slate-500 sm:text-[15px]">
            our Health &amp; Safety Policy goes here
          </p>
        </section>
      </div>
    </div>
  );
}
