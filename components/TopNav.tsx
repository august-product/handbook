"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import { apiRequest } from "../lib/api";
import { clearAuth, getUser, isLoggedIn, setUser } from "../lib/auth";
import type { AuthUser } from "../lib/auth";
import { usePathname, useRouter } from "next/navigation";
import { navSections, isSectionActive } from "../lib/navigation";
import MegaMenuPanel from "./nav/MegaMenu";
import MobileNav from "./nav/MobileNav";
import SearchBar from "./nav/SearchBar";

const TopNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const logged = isLoggedIn();
    setLoggedIn(logged);
    const user = getUser();
    const resolvedName = resolveUserDisplayName(user);
    if (logged && !resolvedName) {
      const loadProfile = async () => {
        try {
          const payload = await apiRequest<AuthMePayload>(AUTH_ME_URL);
          const resolved = resolveAuthMeUser(payload);
          if (!resolved) return;
          const nextUser: AuthUser = {
            ...(resolved as AuthUser),
            name: resolveUserDisplayName(resolved),
          };
          setUser(nextUser);
        } catch {
          // Ignore auth/me failures
        }
      };
      loadProfile();
    }
  }, [pathname]);

  const handleLogout = () => {
    clearAuth();
    setLoggedIn(false);
    router.replace("/login");
  };

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  // Close menus on route change
  useEffect(() => {
    setOpenSection(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape (single handler for both desktop and mobile)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenSection(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close dropdown when clicking outside header
  useEffect(() => {
    if (openSection === null) return;
    const onClick = (e: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setOpenSection(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [openSection]);

  // Hover intent: open section with cancel-on-reenter pattern
  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setOpenSection(null);
      closeTimerRef.current = null;
    }, 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const handleNavEnter = useCallback(
    (index: number) => {
      cancelClose();
      setOpenSection(index);
    },
    [cancelClose]
  );

  const handleNavLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  const handlePanelEnter = useCallback(() => {
    cancelClose();
  }, [cancelClose]);

  const handlePanelLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const hideNavBranding = pathname === "/login" || pathname === "/signup";
  const hideNav = pathname === "/terms";

  if (hideNav) return null;

  return (
    <>
      <header
        ref={headerRef}
        id="site-header"
        className="sticky top-0 z-50 bg-[#1d3528]"
      >
        {/* Nav bar */}
        <div className="flex items-center justify-between px-6 py-4 sm:px-20">
          {/* Left: Logo + Desktop nav links */}
          <div className="flex items-center gap-10">
            {hideNavBranding ? (
              <div />
            ) : (
              <Link href="/" className="flex shrink-0 items-center">
                <Image
                  src="/images/logo-handbook-748x173.png"
                  alt="August Handbook"
                  width={120}
                  height={28}
                  className="h-7 w-[120px] brightness-0 invert"
                  priority
                />
              </Link>
            )}

            {/* Desktop nav links */}
            {loggedIn && !hideNavBranding && (
              <nav className="hidden items-center gap-8 md:flex">
                {navSections.map((section, index) => (
                  <button
                    key={section.title}
                    type="button"
                    className={`header-nav-link text-[13px] font-normal transition ${
                      isSectionActive(section, pathname) ||
                      openSection === index
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                    aria-expanded={openSection === index}
                    aria-haspopup="true"
                    onMouseEnter={() => handleNavEnter(index)}
                    onMouseLeave={handleNavLeave}
                    onClick={() =>
                      setOpenSection(openSection === index ? null : index)
                    }
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            )}
          </div>

          {/* Right: Icons + Mobile hamburger */}
          <div className="flex items-center gap-5">
            {loggedIn && !hideNavBranding && (
              <>
                {/* Desktop: search + user email */}
                <div className="hidden items-center gap-5 md:flex">
                  <SearchBar variant="desktop" />
                  <Link
                    href="/account"
                    className="text-[13px] font-normal text-white/70 transition hover:text-white"
                  >
                    <UserEmail />
                  </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="flex items-center md:hidden"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-nav"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {mobileMenuOpen ? (
                      <>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </>
                    ) : (
                      <>
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="17" x2="20" y2="17" />
                      </>
                    )}
                  </svg>
                </button>
              </>
            )}

            {!loggedIn && !hideNavBranding && (
              <Link
                href="/login"
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#326354] transition hover:bg-white/90"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Desktop dropdown panel */}
        {loggedIn && openSection !== null && (
          <MegaMenuPanel
            section={navSections[openSection]}
            pathname={pathname}
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handlePanelLeave}
          />
        )}
      </header>

      {/* Logout handler for account page (hidden) */}
      {loggedIn && (
        <button
          type="button"
          id="logout-trigger"
          className="hidden"
          onClick={handleLogout}
        />
      )}

      {/* Mobile nav overlay */}
      {loggedIn && !hideNavBranding && (
        <MobileNav
          open={mobileMenuOpen}
          onClose={closeMobileMenu}
          onLogout={handleLogout}
        />
      )}
    </>
  );
};

type AuthMePayload = {
  user?: Record<string, unknown>;
  data?: Record<string, unknown>;
  [key: string]: unknown;
};

const AUTH_ME_URL =
  "https://xdti-9vsw-swso.e2.xano.io/api:Nz1enbvB:v3.2/auth/me";

const resolveAuthMeUser = (
  payload: AuthMePayload
): Record<string, unknown> | null => {
  if (!payload || typeof payload !== "object") return null;
  if ("user" in payload && payload.user && typeof payload.user === "object") {
    return payload.user;
  }
  if ("data" in payload && payload.data && typeof payload.data === "object") {
    return payload.data;
  }
  return payload;
};

const resolveUserDisplayName = (user?: Record<string, unknown> | null) => {
  const name = typeof user?.name === "string" ? user.name.trim() : "";
  if (name) return name;
  const username =
    typeof user?.username === "string" ? user.username.trim() : "";
  if (username) return username;
  const email = typeof user?.email === "string" ? user.email.trim() : "";
  if (email) return email;
  return undefined;
};

const UserEmail = () => {
  const user = getUser();
  const email = typeof user?.email === "string" ? user.email.trim() : "";
  return <>{email || "Account"}</>;
};

export default TopNav;
