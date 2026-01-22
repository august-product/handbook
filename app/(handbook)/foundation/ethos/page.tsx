export default function FoundationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-slate-800">The August Ethos</h1>
      <p
        className="text-[20px] text-slate-600 italic"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        "Our goal is to make the experience of owning a second home as hassle-free and
        enjoyable as possible, which is how we because the pioneer of luxury co-ownership
        across Europe."
      </p>
      <div className="grid gap-8 text-sm text-slate-600 md:grid-cols-2">
        <p>
          If you are reading this it is probably because you love meaningful holidays,
          endless travel, beautiful homes and quality time with family and friends. We do too,
          and that's exactly why we founded August.
        </p>
        <p>
          One of the things that makes us particularly proud is seeing our owners enjoying their
          homes for the first time. We receive overwhelmingly positive feedback from them,
          which reflects the energy, passion, and attention to detail we pour into every home we curate.
        </p>
        <p>
          We understand the challenges and financial constraints that often come with owning and
          maintaining a holiday home, which is why we developed a transparent and straightforward ownership model.
        </p>
        <p>
          Our curated collections can take time to deliver because we care about every aspect of the process,
          from finding the perfect homes in the ideal locations to renovating and interior designing to
          meticulously high standards. We deliver excellence in everything we do and make sure that every home
          we create is the result of our true labour of love.
        </p>
      </div>
      <div className="flex justify-end">
        <a
          href="/foundation/values"
          className="inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
        >
          Our Values
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
            <path
              d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
