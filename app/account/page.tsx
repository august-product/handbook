"use client";

export const dynamic = "force-dynamic";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
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
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState<string | number | null>(null);
  const [toast, setToast] = useState<{ type: "error" | "success"; message: string } | null>(
    null
  );

  useEffect(() => {
    const user = getUser();
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setUserId(getUserId(user));
    }
  }, []);

  const passwordsMatch =
    newPassword.trim().length === 0 ||
    (newPassword.trim().length > 0 && newPassword === confirmPassword);
  const canSubmit =
    name.trim().length > 0 && email.trim().length > 0 && passwordsMatch && !loading;

  const showToast = (type: "error" | "success", message: string) => {
    setToast({ type, message });
    window.setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToast(null);
    if (!userId) {
      showToast("error", "Missing user id. Please log in again to refresh your account.");
      return;
    }
    if (!passwordsMatch) {
      showToast("error", "Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const body = {
        name,
        email,
        ...(newPassword.trim() ? { password: newPassword } : {}),
      };
      const payload = await apiRequest<UpdateResponse>(`${ACCOUNT_URL}/${userId}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      const current = getUser();
      setUser({ ...(current || {}), ...payload });
      setNewPassword("");
      setConfirmPassword("");
      showToast("success", "Account updated.");
    } catch (err) {
      const message =
        err && typeof err === "object" && "message" in err
          ? String(err.message)
          : "Unable to update account. Please try again.";
      showToast("error", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RequireAuth>
      <div className="relative mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        {toast ? (
          <div
            className={`absolute right-6 top-6 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${
              toast.type === "success"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-rose-100 text-rose-700"
            }`}
            role="status"
          >
            {toast.message}
          </div>
        ) : null}
        <h1 className="text-2xl font-semibold text-slate-800">Account settings</h1>
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
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-[#326354]"
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
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-[#326354]"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              New password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-[#326354]"
            />
            <label className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Confirm new password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-[#326354]"
            />
            <Link
              href="/login"
              className="mt-2 inline-flex text-xs font-semibold text-[#326354] hover:text-[#2a5044]"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full rounded-full bg-[#326354] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2a5044] disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading ? "Saving..." : "Save changes"}
          </button>
        </form>
      </div>
    </RequireAuth>
  );
}
