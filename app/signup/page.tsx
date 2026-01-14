"use client";

export const dynamic = "force-dynamic";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { apiRequest } from "../../lib/api";
import { getToken, setAuth } from "../../lib/auth";

type SignupResponse = {
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

const SIGNUP_URL =
  "https://xdti-9vsw-swso.e2.xano.io/api:Nz1enbvB:v3.2/auth/signup";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (getToken()) {
      router.replace("/");
    }
  }, [router]);

  const canSubmit =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    password.trim().length >= 6 &&
    !loading;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const payload = await apiRequest<SignupResponse>(SIGNUP_URL, {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });
      setAuth(payload);
      router.replace("/");
    } catch (err) {
      const message =
        err && typeof err === "object" && "message" in err
          ? String(err.message)
          : "Unable to create your account. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-12 max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900">Create account</h1>
      <p className="mt-2 text-sm text-slate-500">
        Start onboarding with the August Handbook.
      </p>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
            placeholder="Full name"
          />
        </div>
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
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-slate-900">
          Sign in
        </Link>
      </p>
    </div>
  );
}
