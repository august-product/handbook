import Image from "next/image";

export default function FoundersVisionPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-start">
      <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-slate-800">The Founders' Vision</h1>
        <div
          className="space-y-4 text-[18px] text-slate-600 italic"
          style={{ fontFamily: "\"Cormorant Garamond\", serif" }}
        >
          <p>
            "We witnessed how difficult it was for to-be holiday homeowners to succeed
            in buying, renovating, and managing homes in foreign countries.
          </p>
          <p>
            Having delivered real estate projects for individual clients and large
            hospitality groups across Europe, we knew with our expertise we could
            streamline the process.
          </p>
          <p>
            We created a transparent and trusted model that eliminates pain points,
            making it much easier to enjoy the lifestyle our customers wanted."
          </p>
        </div>
      <p className="text-sm font-semibold text-slate-500">- MELIE &amp; NICO</p>
      <div className="flex justify-end">
        <a
          href="/foundation/ethos"
          className="inline-flex items-center gap-2 text-xs font-normal uppercase tracking-[0.2em] text-[#326354] hover:text-[#2a5044]"
        >
          The August Ethos
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
            <path
              d="M17.5 10L11.25 3.75L10.3688 4.63125L15.1063 9.375L2.5 9.375L2.5 10.625L15.1063 10.625L10.3688 15.3687L11.25 16.25L17.5 10Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <Image
          src="/images/founders-melie_and_nico.avif"
          alt="Founders Melie and Nico"
          width={520}
          height={720}
          className="h-full w-full object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
      </div>
    </div>
  );
}
