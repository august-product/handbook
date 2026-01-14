"use client";

export const dynamic = "force-dynamic";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { apiRequest } from "../../lib/api";
import { getToken, setAuth } from "../../lib/auth";

type LoginResponse = {
  token?: string;
  access_token?: string;
  authToken?: string;
  user?: {
    id?: string | number;
    handbook_user_id?: string | number;
    name?: string;
    email?: string;
  };
  [key: string]: unknown;
};

const LOGIN_URL =
  "https://xdti-9vsw-swso.e2.xano.io/api:Nz1enbvB:v3.2/auth/login";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const nextPath = useMemo(() => searchParams.get("next") || "/", [searchParams]);

  useEffect(() => {
    if (getToken()) {
      router.replace("/");
    }
  }, [router]);

  const canSubmit = email.trim().length > 0 && password.trim().length >= 6 && !loading;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const payload = await apiRequest<LoginResponse>(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      setAuth(payload);
      router.replace(nextPath);
    } catch (err) {
      const message =
        err && typeof err === "object" && "message" in err
          ? String(err.message)
          : "Unable to log in. Please check your details and try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-12 max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900">Welcome back</h1>
      <p className="mt-2 text-sm text-slate-500">
        Sign in to access the August Handbook.
      </p>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
            placeholder="you@augustcollections.com"
          />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
            placeholder="Minimum 6 characters"
          />
        </div>
        {error ? (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-600">
            {error}
          </div>
        ) : null}
        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500">
        Need an account?{" "}
        <Link href="/signup" className="font-semibold text-slate-900">
          Create one
        </Link>
      </p>
    </div>
  );
}
