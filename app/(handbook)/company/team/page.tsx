import Image from "next/image";

const execTeam = [
  {
    name: "Mélie Dunod",
    role: "Co-Founder & CEO",
    src: "/images/staff/founder-ceo-melie_dunod.png",
  },
  {
    name: "Nico Watzenig",
    role: "Co-Founder & Chairman",
    src: "/images/staff/founder-nico.png",
  },
  {
    name: "Barry Gifford",
    role: "COO",
    src: "/images/staff/leadership-coo-barry_gifford.png",
  },
  {
    name: "Tanya Uniacke",
    role: "CRO",
    src: "/images/staff/leadership-cro-tanya_uniacke.png",
  },
  {
    name: "Antonio Martín Barceló",
    role: "Finance Director",
    src: "/images/staff/head-head_of_finance-antonio_martin_barcelo.jpeg",
  },
];

const departmentHeads = [
  {
    name: "Martin Coppens",
    role: "Head of Operations",
    src: "/images/staff/head-head_of_operations-martin_coppens.jpeg",
  },
  {
    name: "Tilly Smallwood",
    role: "Head of Customer Success",
    src: "/images/staff/hx-head-tilly_smallwood.png",
  },
  {
    name: "Will Gould",
    role: "General Counsel",
    src: "/images/staff/legal-general_counsel-will_gould.png",
  },
  {
    name: "Jenin Khanam",
    role: "Interim Legal Counsel",
    src: "/images/staff/legal-paralegal-jenin_khanam.jpeg",
  },
  {
    name: "Mytch Parks",
    role: "Head of Product",
    src: "/images/staff/head-head_of_product-mytch_parks.png",
  },
  {
    name: "Khitiz Saxena",
    role: "Product Manager",
    src: "/images/staff/product-technical_product_manager-kshitiz_saxena.png",
  },
  {
    name: "Karolina Wierzbicka",
    role: "Head of Design",
    src: "/images/staff/design-head_of_design-karolina_wierzbicka.png",
  },
  {
    name: "Rafael Baiao",
    role: "Head of Real Estate",
    src: "/images/staff/head-head_of_acquisitions-rafael_baiao.png",
  },
  {
    name: "Marcus Wright",
    role: "Head of Development",
    src: "/images/staff/head-head_of_development-marcus_wright.png",
  },
  {
    name: "Kirsten Meyer",
    role: "Commercial Director",
    src: "/images/staff/head-commercial_director-kirsten_meyer.png",
  },
  {
    name: "Mariana Ferraz",
    role: "Head of Marketing",
    src: "/images/staff/head-head_of_marketing-mariana_ferraz.png",
  },
  {
    name: "Mandar",
    role: "Head of Finance",
    src: "/images/staff/finance-finance_controller-mandar_bhairavkar.png",
  },
];

const LeadershipGrid = ({ title, people }: { title: string; people: typeof execTeam }) => (
  <div className="space-y-3">
    <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <div
          key={person.name}
          className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="h-[220px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image
              src={person.src}
              alt={person.name}
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold text-slate-800">{person.name}</p>
            <p className="text-xs text-slate-600">{person.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function LeadershipPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-800">Executive Team</h1>
      <div className="space-y-4">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {execTeam.map((person) => (
            <div
              key={person.name}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="h-[220px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <Image
                  src={person.src}
                  alt={person.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-800">{person.name}</p>
                <p className="text-xs text-slate-600">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LeadershipGrid title="Meet The Team" people={departmentHeads} />
      <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800">Company Org Chart</h2>
        <p className="mt-3">
          Access the complete interactive chart{" "}
          <a
            href="https://secure.employmenthero.com/app/v2/organisations/419512/organisation_chart"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#326354] hover:text-[#2a5044]"
          >
            via Employment Hero
          </a>{" "}
          to explore our team structure and understand how our teams collaborate.
        </p>
        <a
          href="https://secure.employmenthero.com/app/v2/organisations/419512/organisation_chart"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex"
        >
          <Image
            src="/images/logo-EH-Horizontal-Logo-Black-cropped.svg"
            alt="Employment Hero"
            width={250}
            height={60}
          />
        </a>
      </div>
    </div>
  );
}
