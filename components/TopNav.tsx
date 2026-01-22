"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { clearAuth, getUser, isLoggedIn } from "../lib/auth";
import { usePathname, useRouter } from "next/navigation";

const TopNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState<string | undefined>();
  const [techMenuOpen, setTechMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
    const user = getUser();
    setName(typeof user?.name === "string" ? user.name : undefined);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setTechMenuOpen(false);
      setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    clearAuth();
    setLoggedIn(false);
    router.replace("/login");
  };

  const hideNavBranding = pathname === "/login" || pathname === "/signup";
  const hideNav = pathname === "/terms";
  const hideLoginLink = hideNavBranding;

  if (hideNav) {
    return null;
  }

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between gap-6 bg-[#f4f0ec] px-6 py-4">
      {hideNavBranding ? (
        <div />
      ) : (
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/August_Logo_Black.png"
            alt="August"
            width={120}
            height={40}
            className="h-8 w-auto"
            priority
          />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span className="mr-2 text-slate-400" aria-hidden="true">
              |
            </span>
            Handbook
          </span>
        </Link>
      )}
      {loggedIn && !hideNavBranding ? (
        <>
          <nav className="hidden flex-1 items-center justify-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 md:flex">
          <Link
            href="/overview"
            className="header-nav-link transition hover:text-slate-800"
          >
            Overview
          </Link>
          <div
            className="group relative"
            onMouseEnter={() => setTechMenuOpen(true)}
          >
            <Link
              href="/tech-it"
              className="header-nav-link transition hover:text-slate-800"
              aria-haspopup="true"
              aria-expanded={techMenuOpen}
            >
              Tech &amp; IT
            </Link>
            <div
              className={`absolute left-1/2 top-full z-10 mt-2 w-56 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-lg transition ${
                techMenuOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <Link
                href="/tech-it/acceptable-use-policy"
                className="block px-4 py-2 transition hover:bg-slate-100 hover:text-slate-800"
              >
                Acceptable Use Policy
              </Link>
            </div>
          </div>
          <Link href="/how-to" className="header-nav-link transition hover:text-slate-800">
            How To
          </Link>
          </nav>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="ml-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            Menu
            <span className="flex h-6 w-6 flex-col items-center justify-center gap-1">
              <span className="h-[2px] w-5 bg-slate-500"></span>
              <span className="h-[2px] w-5 bg-slate-500"></span>
              <span className="h-[2px] w-5 bg-slate-500"></span>
            </span>
          </button>
        </>
      ) : (
        <div className="hidden md:block md:flex-1" />
      )}
      {loggedIn ? (
        <div className="flex items-center gap-4 text-sm text-slate-600">
          {name ? <span className="hidden sm:block">{name}</span> : null}
          <Link
            href="/account"
            className="header-nav-link text-sm font-medium text-slate-600 transition hover:text-slate-800"
          >
            {name ?? "Account settings"}
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full bg-[#326354] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2a5044]"
          >
            Logout
          </button>
        </div>
      ) : (
        !hideLoginLink && (
          <Link
            href="/login"
            className="rounded-full bg-[#326354] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2a5044]"
          >
            Login
          </Link>
        )
      )}
      {loggedIn && !hideNavBranding && mobileMenuOpen ? (
        <div className="fixed inset-0 z-50 flex justify-center bg-black/40 md:hidden">
          <div
            id="mobile-nav"
            className="mt-16 h-[80vh] w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
              >
                Close
              </button>
            </div>
            <div className="h-full overflow-y-auto px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              <details className="group" open>
                <summary className="cursor-pointer list-none py-2">
                  <span className="flex items-center justify-between">
                    Tech &amp; IT
                    <span className="text-slate-400 transition group-open:rotate-180">
                      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </summary>
                <div className="mt-2 space-y-1">
                  <Link
                    href="/tech-it"
                    className="block rounded-2xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                  >
                    Tech &amp; IT
                  </Link>
                  <Link
                    href="/tech-it/acceptable-use-policy"
                    className="block rounded-2xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                  >
                    Acceptable Use Policy
                  </Link>
                </div>
              </details>
              <Link
                href="/overview"
                className="mt-3 block rounded-2xl px-3 py-2 hover:bg-slate-100 hover:text-slate-800"
              >
                Overview
              </Link>
              <Link
                href="/how-to"
                className="mt-2 block rounded-2xl px-3 py-2 hover:bg-slate-100 hover:text-slate-800"
              >
                How To
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TopNav;
