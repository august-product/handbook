"use client";

import Link from "next/link";
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
      <Link href="/" className="text-sm font-semibold tracking-wide text-slate-900">
        August Handbook
      </Link>
      {loggedIn ? (
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <span className="hidden sm:block">{name || "Signed in"}</span>
          <Link
            href="/account"
            className="rounded-full border border-slate-200 px-3 py-1.5 text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            Account settings
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full bg-slate-900 px-3 py-1.5 text-white transition hover:bg-slate-800"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default TopNav;
