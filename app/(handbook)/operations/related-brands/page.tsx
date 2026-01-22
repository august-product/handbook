import Image from "next/image";

const relatedBrands = [
  {
    name: "Villa Valeria",
    logo: "/images/logo-villa_valeria.png",
    description:
      "Villa Valeria is a creator & producer of high-quality food and beauty products inspired by the August regions.",
    sections: [
      {
        title: "Villa Valeria Ownership",
        body: "August founders are shareholders.",
      },
      {
        title: "Villa Valeria & the Collections",
        body:
          "Villa Valeria supplies bath/shower products and olive oil to the collections that enhance the authentic high quality August brand experience.",
      },
      {
        title: "The Villa Valeria Deal",
        body:
          "The collections purchase VV products at a discounted rate v RRP according to a rate card. Procurement contracts are negotiated at arm's length.",
      },
    ],
  },
  {
    name: "Rio London",
    logo: "/images/logo-rio_london.png",
    description:
      "Studio RioLondon is an internationally acclaimed interior architecture and design studio based in London.",
    sections: [
      {
        title: "Rio London Ownership",
        body: "August founders are shareholders.",
      },
      {
        title: "Rio London & the Collections",
        body:
          "Rio London provides interior architecture and design services (including the procurement of furniture) in line with August values and DNA.",
      },
      {
        title: "The Rio London Deal",
        body:
          "SRL is paid a design fee per home renovated (depending on design scope) and a margin of 30% on furniture procurement. (SLR charges a margin of 20% on replacement items).",
      },
    ],
  },
  {
    name: "Anam Capital",
    logo: "/images/logo-anam_capital.png",
    description:
      "Anam Capital is a French property company specialising in luxury property renovation in the SoF and Alps.",
    sections: [
      {
        title: "Anam Capital Ownership",
        body: "August founders are shareholders.",
      },
      {
        title: "Anam Capital & the Collections",
        body:
          "AC sells pre-renovated French properties to some collections in line with August's demanding brand standards. This enables collections to access properties faster, with less risk, and that require larger renovations.",
      },
      {
        title: "The Anam Capital Deal",
        body:
          "Anam properties are sold to collections on an arm's length basis supported by independent valuations.",
      },
    ],
  },
];

export default function RelatedBrandsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-800">Related Brands</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        {relatedBrands.map((brand) => (
          <div key={brand.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-center">
              <Image src={brand.logo} alt={brand.name} width={180} height={80} />
            </div>
            <p className="mt-4 text-sm text-slate-600">{brand.description}</p>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              {brand.sections.map((section) => (
                <div key={section.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {section.title}
                  </p>
                  <p className="mt-2">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
