"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { apiRequest } from "../../lib/api";
import { getToken, getUser, setAuth, setUser } from "../../lib/auth";

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

type SignupClientProps = {
  imageSources: string[];
};

const SIGNUP_URL =
  "https://xdti-9vsw-swso.e2.xano.io/api:Nz1enbvB:v3.2/auth/signup";

export default function SignupClient({ imageSources }: SignupClientProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (getToken()) {
      router.replace("/");
    }
  }, [router]);

  useEffect(() => {
    if (!imageSources.length) {
      setSelectedImage(null);
      return;
    }
    const randomImage = imageSources[Math.floor(Math.random() * imageSources.length)];
    setSelectedImage(randomImage);
  }, [imageSources]);

  const normalizedEmail = email.trim().toLowerCase();
  const emailAllowed = useMemo(() => {
    if (!normalizedEmail) {
      return true;
    }
    return (
      normalizedEmail.endsWith("@augustcollections.com") ||
      normalizedEmail.endsWith("@studioriolondon.com")
    );
  }, [normalizedEmail]);
  const passwordsMatch =
    password.trim().length > 0 &&
    confirmPassword.trim().length > 0 &&
    password === confirmPassword;

  const canSubmit =
    name.trim().length > 0 &&
    normalizedEmail.length > 0 &&
    password.trim().length >= 6 &&
    passwordsMatch &&
    emailAllowed &&
    termsAccepted &&
    !loading;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (!emailAllowed) {
      setError("Please use a correct email address.");
      return;
    }
    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }
    if (!termsAccepted) {
      setError("Please accept the Terms & Conditions.");
      return;
    }
    setLoading(true);
    try {
      const payload = await apiRequest<SignupResponse>(SIGNUP_URL, {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });
      setAuth(payload);
      const current = getUser();
      setUser({ ...(current || {}), name, email });
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
    <div className="mx-auto mt-12 w-full max-w-[850px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid min-h-[440px] grid-cols-1 md:grid-cols-[36fr_65fr]">
        <div className="py-8 pr-8 pl-4">
          <Image
            src="/August_Logo_Black.png"
            alt="August"
            width={200}
            height={68}
            className="h-12 w-auto"
            priority
          />
          <p className="mt-2 text-sm text-slate-500">
            Create your account using your August or RIO email address.
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
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 placeholder:text-xs outline-none transition focus:border-[#326354]"
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
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 placeholder:text-xs outline-none transition focus:border-[#326354]"
                placeholder="you@augustcollections.com"
              />
              {!emailAllowed && normalizedEmail.length > 0 ? (
                <p className="mt-2 text-xs text-rose-600">
                  Please use a correct email address.
                </p>
              ) : null}
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
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 placeholder:text-xs outline-none transition focus:border-[#326354]"
                placeholder="Minimum 6 characters"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Password
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 placeholder:text-xs outline-none transition focus:border-[#326354]"
                placeholder="Confirm password"
              />
              {confirmPassword.length > 0 && !passwordsMatch ? (
                <p className="mt-2 text-xs text-rose-600">Passwords do not match.</p>
              ) : null}
            </div>
            <label className="flex items-start gap-3 text-xs text-slate-600">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(event) => setTermsAccepted(event.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#326354] focus:ring-[#326354]"
              />
              <span>
                I agree to the{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#326354] underline underline-offset-2"
                >
                  Terms &amp; Conditions
                </Link>
                .
              </span>
            </label>
            {error ? (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-600">
                {error}
              </div>
            ) : null}
            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-full bg-[#326354] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2a5044] disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?
            <br />
            <Link href="/login" className="font-semibold text-slate-800">
              Sign in
            </Link>
          </p>
        </div>
        <div
          className="relative hidden select-none md:block"
          onContextMenu={(event) => event.preventDefault()}
          onDragStart={(event) => event.preventDefault()}
        >
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt="August Handbook"
              fill
              sizes="(min-width: 768px) 500px, 100vw"
              className="image-protect object-cover"
              draggable={false}
              priority
            />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_#dbe3e1,_#c7d4cf,_#b0c1ba)]" />
          )}
        </div>
      </div>
    </div>
  );
}
