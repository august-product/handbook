const values = [
  {
    title: "Communication & openness",
    body: "Transparent and open with constructive and positive feedback. Prioritises collaboration and consistency.",
  },
  {
    title: "Ownership mindset",
    body: "We hold ourselves accountable for our actions, fostering a culture of pride, initiative, and empowerment within our team.",
  },
  {
    title: "Kindness",
    body: "Values kindness and a strong team ethos, with recognition that our people are what drive our success. Friendly, generous and considerate.",
  },
  { title: "Urgency", body: "Acts promptly, purposefully, and efficiently." },
  {
    title: "Resourceful",
    body: "Embraces challenges, takes initiative, has innovative problem solving abilities.",
  },
  {
    title: "Excellence",
    body: "We strive for excellence in everything we do, setting high standards for ourselves and continuously raising the bar.",
  },
];

export default function ValuesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-800">Our Values</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
              {value.title}
            </h2>
            <p className="mt-4 text-sm text-slate-600">{value.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
