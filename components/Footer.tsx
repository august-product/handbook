import Image from "next/image";
import Link from "next/link";

const wikiLinks = [
  { label: "Branding & Identity", href: "/wiki/branding-and-identity" },
  { label: "Collections", href: "/wiki/collections" },
  { label: "How To", href: "/wiki/how-to" },
  { label: "New Starters", href: "/wiki/new-starters" },
  { label: "Regions", href: "/wiki/regions" },
];

const itLinks = [
  { label: "Device Setup", href: "/it-support/device-setup" },
  { label: "Applications", href: "/it-support/applications" },
  { label: "Security", href: "/it-support/security" },
  { label: "AI Policy", href: "/it-support/ai" },
  { label: "Support", href: "/it-support/support" },
];

const welcomeLinks = [
  { label: "Founders' Vision", href: "/welcome/founders-vision" },
  { label: "Introduction to August", href: "/welcome/introduction-to-august" },
  { label: "Our Values", href: "/welcome/our-values" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#1d3528]">
      <div className="mx-auto max-w-[1440px] space-y-12 px-6 py-12 sm:px-20 sm:py-16">
        {/* Top: Logo + Link Columns */}
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Left: Logo + Tagline */}
          <div className="space-y-4">
            <Image
              src="/images/logo-handbook-white-748x173.png"
              alt="Handbook"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
            <p className="text-[13px] italic text-[#F5F3EE]/50">
              August Collections — Internal Wiki
            </p>
          </div>

          {/* Right: Link Columns */}
          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-20">
            {/* Wiki */}
            <div className="space-y-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#F5F3EE]/50">
                Wiki
              </p>
              {wikiLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[13px] text-[#F5F3EE]/70 transition hover:text-[#F5F3EE]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* IT & Support */}
            <div className="space-y-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#F5F3EE]/50">
                IT &amp; Support
              </p>
              {itLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[13px] text-[#F5F3EE]/70 transition hover:text-[#F5F3EE]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Welcome */}
            <div className="space-y-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#F5F3EE]/50">
                Welcome
              </p>
              {welcomeLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[13px] text-[#F5F3EE]/70 transition hover:text-[#F5F3EE]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#2a5044]" />

        {/* Bottom: Copyright + Legal */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-[#F5F3EE]/40">
            © 2026 August Collections. Internal use only.
          </p>
          <div className="flex gap-6">
            <span className="text-[12px] text-[#F5F3EE]/40">Privacy</span>
            <Link
              href="/it-support/support"
              className="text-[12px] text-[#F5F3EE]/40 transition hover:text-[#F5F3EE]/70"
            >
              IT Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
