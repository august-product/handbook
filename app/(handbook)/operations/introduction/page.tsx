import Image from "next/image";

export default function AugustIntroPage() {
  return (
    <div className="space-y-12">
      <div className="rounded-[32px] bg-white shadow-none">
        <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative min-h-[360px]">
            <Image
              src="/images/handbook-an_introduction_to_august-1024x768.avif"
              alt="An introduction to August"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="bg-[#f4f0ec] p-8 lg:p-10">
            <h1
              className="text-[34px] font-normal text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              An Introduction
              <br />
              to August
            </h1>
            <div className="mt-6 grid gap-6 text-sm text-slate-600 lg:grid-cols-2">
              <div className="space-y-4">
                <p>
                  Welcome to August. We are the premier co-ownership platform for
                  European holiday homes.
                </p>
                <p>
                  Own a Collection of five quintessential holiday homes in Europe's
                  most iconic destinations. With August, we make the process hassle-free
                  and turnkey with a co-ownership model.
                </p>
                <p>
                  We truly create and curate Collections of homes - and that's no
                  accident. Each of our Collections is unique and differentiated by
                  design. While we carefully secure homes in highly desirable areas and
                  create a consistent standard and experience, the homes and Collections
                  remain as unique as our homeowners.
                </p>
              </div>
              <div className="space-y-4">
                <p>We are boutique in our offering and approach.</p>
                <p>
                  We only launch six Collections each year to maintain our standards and
                  high-touch service. Due to high demand, we curate an ever-growing
                  waiting list of families who aspire to join our Collections as
                  homeowners every year.
                </p>
                <p>
                  With our headquarters in London, we serve owners from around the
                  world, including the US, UK and Europe.
                </p>
                <p>
                  We are personal and deliberate in everything we do as a proudly
                  independent, founder-led business. We focus on delivering exceptional
                  experiences and value to our August homeowners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mx-auto w-1/2 border-[#2a5044]" />

      <div className="mx-auto grid w-full max-w-[1440px] gap-2 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <section className="space-y-6">
          <div className="space-y-3">
            <h1
              className="text-[34px] font-normal text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Why August
            </h1>
            <h2
              className="text-[22px] font-normal text-slate-800"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              August purchases, renovates, interior designs, maintains and manages your
              homes - at exceptional value.
            </h2>
          </div>

          <div className="grid gap-6 text-sm text-slate-600 md:grid-cols-2">
            <p>
              Second-home ownership can be full of challenges. From sourcing the right
              home, negotiating a fair price and navigating foreign legal and financial
              requirements to managing a renovation and upkeep abroad - it all requires
              time, money and energy.
            </p>
            <p>
              August addresses all these barriers with one clever, turnkey solution. Our
              expert team carefully acquires and renovates desirable homes in the most
              iconic locations.
            </p>
            <p>
              Each home is renovated and refurbished to our August standards, leveraging
              our team of architects, interior designers and local suppliers to deliver
              beautiful results.
            </p>
            <p>
              Finally, we fully maintain, manage and service the homes for all
              homeowners. On average, our owners can enjoy 8 weeks in their Collection
              per year when travelling in mid to peak season. Owners who travel off-peak
              can enjoy upwards of 12-14 weeks per year.
            </p>
          </div>
        </section>

        <section className="relative min-h-[416px]">
          <div className="absolute left-10 top-6 h-[168px] w-[240px] overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/why_august-beach-brollys.jpg"
              alt="Beach umbrellas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
          <div className="absolute left-[55%] top-0 h-[288px] w-[224px] overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/why_august-frontdoor.jpg"
              alt="Front door detail"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
          <div className="absolute left-16 top-[184px] h-[184px] w-[208px] overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/why_august-cafe_tables.jpg"
              alt="Cafe tables"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
