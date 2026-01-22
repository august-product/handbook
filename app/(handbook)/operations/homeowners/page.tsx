import Image from "next/image";

export default function HomeownersJourneyAndViewPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold text-slate-800">Homeowners Journey</h1>
        <div className="flex justify-center">
          <Image
            src="/images/homeowner-journey-timeline.png"
            alt="Homeowners journey timeline"
            width={1100}
            height={520}
            className="h-auto w-full max-w-[1100px]"
          />
        </div>
      </section>
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold text-slate-800">
          Experiencing the Collection: the Homeowner's View
        </h1>
        <div className="flex justify-center">
          <Image
            src="/images/homeowners-view-timeline.png"
            alt="Homeowners view timeline"
            width={1100}
            height={520}
            className="h-auto w-full max-w-[1100px]"
          />
        </div>
      </section>
      <section className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-800">Access to the Homes</h1>
          <p className="text-sm text-slate-600">
            Although the homes are not all purchased yet, homeowners can expect a timeline of
            within 12 months from the time their related group onboards and receive the share
            subscriptions to being able to use the relevant homes and all others already
            delivered.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Image
              src="/images/access_to_the_homes-top_table-homes.png"
              alt="Access to the homes timeline table"
              width={720}
              height={420}
              className="h-auto w-full"
            />
            <Image
              src="/images/access_to_the_homes-bottom_groups.png"
              alt="Access to the homes groups"
              width={720}
              height={420}
              className="h-auto w-full"
            />
          </div>
          <div className="grid gap-6 text-sm text-slate-600 md:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Live Home Schedule
              </p>
              <p className="mt-2">
                LIVE meaning the home has been completed + renovated and is available for
                bookings.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Forming a Collection
              </p>
              <p className="mt-2">
                Collections are formed of groups, which allows us to purchase the Home + build a
                complete portfolio of property for our Homeowners.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Access to Homes
              </p>
              <p className="mt-2">
                Group One Homeowners will have access to the homes as soon as Home One is LIVE.
                Other groups will have to wait for additional homes within the Collection to go
                live. Group Two Homeowners will have access to the homes as soon as Home Two is
                LIVE. They will gain access to Home One and Home two along with Group One. And so
                on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
