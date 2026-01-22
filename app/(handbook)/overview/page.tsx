import Link from "next/link";
import Image from "next/image";

export default function OnboardingHomePage() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 lg:p-12">
            <h1 className="text-[36px] font-semibold text-slate-800">Overview</h1>
            <div className="mt-3 space-y-3 text-sm text-slate-600">
              <p>
                Welcome. August is the premier co-ownership platform for European
                holiday homes. This August Handbook is our company wiki for new
                starters and staff alike, to learn more about the company and its
                respective policies, process and goals.
              </p>
              <p>Use the menu to navigate through the wiki and its information.</p>
            </div>
          </div>
          <div className="relative min-h-[320px]">
            <Image
              src="/images/SP9_64.avif"
              alt="August collection"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <hr className="mx-auto w-1/2 border-[#2a5044]" />
        <h2 className="text-xl font-semibold text-slate-800">Company: The August Way</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              href: "/foundation/founders-vision",
              title: "Founders' Vision",
              body: "Understand the Why behind August and the model we built.",
            },
            {
              href: "/foundation/ethos",
              title: "The August Ethos",
              body: "Dive into the August ethos and what makes our community special.",
            },
            {
              href: "/foundation/values",
              title: "Our Values",
              body: "The principles that guide how we work and show up.",
            },
            {
              href: "/overview/onboarding",
              title: "Onboarding",
              body: "Your onboarding timeline, training, and check-ins.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{item.body}</p>
              <span className="mt-4 inline-flex text-xs font-normal uppercase tracking-[0.2em] text-[#326354]">
                Read More
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <hr className="mx-auto w-1/2 border-[#2a5044]" />
        <h2 className="text-xl font-semibold text-slate-800">New Joiner Onboarding Structure</h2>
        <p className="text-sm text-slate-600">
          A structured journey designed to immerse new team members in our brand,
          culture, and operations.
        </p>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {[
            {
              title: "Brand Immersion",
              body: "Meeting with Melie/Nico to discuss the brand vision and origins.",
              icon: "/images/icon-brand_immersion.png",
            },
            {
              title: "Culture & Details",
              body: "Deep dive with HR into company culture, values, and operational details.",
              icon: "/images/icon-culture_and_details.png",
            },
            {
              title: "Team Intros",
              body: "Meetings with Department Heads to understand key functions.",
              icon: "/images/icon-team_intros.png",
            },
            {
              title: "Webinar",
              body: "Watch an in-depth webinar to master the product offering.",
              icon: "/images/icon-webinar.png",
            },
            {
              title: "Live Observation",
              body: "Shadow a Director's Orientation or Board Meeting to listen and learn.",
              icon: "/images/icon-live-observation.png",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                <Image
                  src={item.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-6 w-6 object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
