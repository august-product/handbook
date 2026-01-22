import Image from "next/image";

const collections = [
  {
    title: "Pied a Terre",
    subtitle: "A Slice of the City",
    price: "from EUR 405,000 per share",
    image: "/images/collection-pied_a_terre.jpg",
  },
  {
    title: "Grand Pied a Terre",
    subtitle: "Elevate Your Urban Retreat",
    price: "from EUR 665,000 per share",
    image: "/images/collection-grand_pied_a_terre.jpg",
  },
  {
    title: "Signature",
    subtitle: "Our Most Popular Collection",
    price: "from EUR 480,000 per share",
    image: "/images/collection-signature.png",
  },
  {
    title: "Premium",
    subtitle: "An Invitation to Entertain",
    price: "from EUR 775,000 per share",
    image: "/images/collection-premium.jpg",
  },
  {
    title: "Prime",
    subtitle: "Simply the Best",
    price: "from EUR 1.8m per share",
    image: "/images/collection-prime.png",
  },
];

export default function CollectionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-800">Our Collections</h1>
      <div className="text-sm text-slate-600">
        <p>
          Each collection is a carefully curated group of holiday homes, designed to offer a
          consistent and premium experience. Collections are made up of 4 or 5 homes, with
          multiple homeowners sharing ownership in each: 4-home collections are owned collectively
          by 17 homeowners or 5-home Collections are owned collectively by 21 homeowners.
          <br />
          <br />
          August offers 5 types of Collections, each uniquely suited to your budget, lifestyle,
          travel preferences and family size. Discover which one is right for you.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {collections.map((item) => (
          <div key={item.title} className="space-y-3">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src={item.image}
                alt={item.title}
                width={280}
                height={260}
                className="h-[200px] w-full object-cover"
              />
            </div>
            <div className="space-y-1 text-sm text-slate-700">
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-800">
                {item.title}
              </h2>
              <p className="text-xs text-slate-600">{item.price}</p>
              <p className="text-xs italic text-slate-500">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-800">
          Building the Collection: An Internal Roadmap
        </h2>
        <div className="flex justify-center">
          <Image
            src="/images/building_the_collection-an_internal_roadmap.png"
            alt="Building the collection internal roadmap"
            width={1100}
            height={620}
            className="h-auto w-full max-w-[1100px]"
          />
        </div>
      </section>
    </div>
  );
}
