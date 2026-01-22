export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-800">Resources</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Webinar Recording</h2>
          <p className="mt-3 text-sm text-slate-600">
            Watch a super informative recording of a live webinar to get up to speed at your own
            pace,{" "}
            <a
              href="https://www.augustcollections.com/august-information-webinar-overview"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#326354] hover:text-[#2a5044]"
            >
              here on the August web site
            </a>
            . Or watch the embedded video below.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">Join Us Live</h2>
          <p className="mt-3 text-sm text-slate-600">
            Join a live session to see how the Advisory Team presents August and ask questions.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0OHDxMlsS8k?si=uMpMmF5lNi86Xb5y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-[320px] w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
