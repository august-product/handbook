"use client";

export const dynamic = "force-dynamic";

import { FormEvent, useEffect, useState } from "react";
import RequireAuth from "../../components/RequireAuth";
import { apiRequest } from "../../lib/api";
import { getUser, getUserId, setUser } from "../../lib/auth";

type UpdateResponse = {
  id?: string | number;
  handbook_user_id?: string | number;
  name?: string;
  email?: string;
  [key: string]: unknown;
};

const ACCOUNT_URL =
  "https://xdti-9vsw-swso.e2.xano.io/api:Nz1enbvB:v3.2/handbook_user";

export default function AccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userId, setUserId] = useState<string | number | null>(null);

  useEffect(() => {
    const user = getUser();
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setUserId(getUserId(user));
    }
  }, []);

  const canSubmit = name.trim().length > 0 && email.trim().length > 0 && !loading;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    if (!userId) {
      setError("Missing user id. Please log in again to refresh your account.");
      return;
    }
    setLoading(true);
    try {
      const payload = await apiRequest<UpdateResponse>(`${ACCOUNT_URL}/${userId}`, {
        method: "PUT",
        body: JSON.stringify({ name, email }),
      });
      const current = getUser();
      setUser({ ...(current || {}), ...payload });
      setSuccess("Account updated.");
    } catch (err) {
      const message =
        err && typeof err === "object" && "message" in err
          ? String(err.message)
          : "Unable to update account. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RequireAuth>
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">Account settings</h1>
        <p className="mt-2 text-sm text-slate-500">
          Update your profile details for August Collections.
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
            />
          </div>
          {error ? (
            <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-600">
              {error}
            </div>
          ) : null}
          {success ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
              {success}
            </div>
          ) : null}
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading ? "Saving..." : "Save changes"}
          </button>
        </form>
      </div>
    </RequireAuth>
  );
}
