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

  useEffect(() => {
    setLoggedIn(isLoggedIn());
    const user = getUser();
    setName(typeof user?.name === "string" ? user.name : undefined);
  }, [pathname]);

  const handleLogout = () => {
    clearAuth();
    setLoggedIn(false);
    router.replace("/login");
  };

  return (
    <div className="flex items-center justify-between px-6 py-4">
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
          Handbook
        </span>
      </Link>
      {loggedIn ? (
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <span className="hidden sm:block">{name || "Signed in"}</span>
          <Link
            href="/account"
            className="header-nav-link text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Account settings
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
        <Link
          href="/login"
          className="rounded-full bg-[#326354] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2a5044]"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default TopNav;
