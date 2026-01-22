import Image from "next/image";

export default function BrandingVisualIdentityPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-800">The August Brand</h1>
        <p className="text-sm text-slate-600">
          Click{" "}
          <a
            href="https://drive.google.com/file/d/1sJirfUr4AEVUBzHfACrxSxVxq7Z5aFrc/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#326354] hover:text-[#2a5044]"
          >
            here
          </a>{" "}
          or the image below to view the August Brand book and learn how to use our identity.
        </p>
        <a
          href="https://drive.google.com/file/d/1sJirfUr4AEVUBzHfACrxSxVxq7Z5aFrc/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="block max-w-lg"
        >
          <Image
            src="/images/august-brand_book-cover.png"
            alt="August brand book cover"
            width={520}
            height={700}
            className="h-auto w-full rounded-3xl border border-slate-200 bg-white shadow-sm"
          />
        </a>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
        <p className="font-semibold text-slate-800">
          To maintain consistency with the company's brand, you can use the following
          specifications:
        </p>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Fonts</p>
            <p className="mt-2">
              For Titles, use the{" "}
              <a
                href="https://fonts.google.com/specimen/Cormorant+Garamond"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#326354] hover:text-[#2a5044]"
              >
                Cormorant Garamond
              </a>{" "}
              font.
            </p>
            <p className="mt-2">
              Body Text: Use{" "}
              <a
                href="https://fonts.google.com/specimen/Plus+Jakarta+Sans"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#326354] hover:text-[#2a5044]"
              >
                Plus Jakarta Sans
              </a>
              .
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Colors
            </p>
            <p className="mt-2">Utilise the palette established in the provided presentation.</p>
          </div>
          <div>
            <p className="mt-4">
              Here are some of our{" "}
              <a
                href="https://drive.google.com/drive/folders/1LTH6wC7HROneCfoYbCy8Iciidp5C2uGy"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#326354] hover:text-[#2a5044]"
              >
                LinkedIn banners
              </a>{" "}
              you can use for your profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
