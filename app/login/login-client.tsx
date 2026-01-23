"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { apiRequest } from "../../lib/api";
import { getToken, setAuth, setUser } from "../../lib/auth";

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

type LoginClientProps = {
  imageSources: string[];
};

const LOGIN_URL =
  "https://xdti-9vsw-swso.e2.xano.io/api:Nz1enbvB:v3.2/auth/login";
const AUTH_ME_URL =
  "https://xdti-9vsw-swso.e2.xano.io/api:Nz1enbvB:v3.2/auth/me";

export default function LoginClient({ imageSources }: LoginClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState<"auth" | "terms" | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextPath = useMemo(() => searchParams.get("next") || "/", [searchParams]);

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

  useEffect(() => {
    if (errorType !== "auth") {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      window.location.href = "https://mondrianandme.com/";
    }, 2000);
    return () => window.clearTimeout(timeoutId);
  }, [errorType]);

  const canSubmit = email.trim().length > 0 && password.trim().length >= 6 && !loading;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setErrorType(null);
    if (!agreedToTerms) {
      setError("Please agree to the Terms & Conditions to continue.");
      setErrorType("terms");
      return;
    }
    setLoading(true);
    try {
      const payload = await apiRequest<LoginResponse>(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      setAuth(payload);
      try {
        const profilePayload = await apiRequest<LoginResponse | { user?: LoginResponse["user"] }>(
          AUTH_ME_URL
        );
        const resolvedUser = resolveAuthMeUser(profilePayload);
        if (resolvedUser) {
          setUser({
            ...resolvedUser,
            name:
              resolvedUser.name ||
              (resolvedUser as { username?: string }).username ||
              resolvedUser.email ||
              undefined,
          });
        }
      } catch {
        // Ignore auth/me errors; allow login to proceed.
      }
      router.replace(nextPath);
    } catch (err) {
      const message =
        err && typeof err === "object" && "message" in err
          ? String(err.message)
          : "Unable to log in. Please check your details and try again.";
      setError(message);
      setErrorType("auth");
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
            Please log in using your employee credentials to access the August Handbook.
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
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 placeholder:text-xs outline-none transition focus:border-[#326354]"
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
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 placeholder:text-xs outline-none transition focus:border-[#326354]"
                placeholder="Minimum 6 characters"
              />
            </div>
            <label className="flex items-start gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(event) => setAgreedToTerms(event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#326354] focus:ring-[#326354]"
              />
              <span>
                I agree to the{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-slate-800"
                >
                  Terms &amp; Conditions
                </a>
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
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            Need an account?{" "}
            <Link href="/signup" className="font-semibold text-slate-800">
              Create one
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

const resolveAuthMeUser = (
  payload: LoginResponse | { user?: LoginResponse["user"] }
): LoginResponse["user"] | null => {
  if (!payload || typeof payload !== "object") return null;
  if ("user" in payload && payload.user && typeof payload.user === "object") {
    return payload.user as LoginResponse["user"];
  }
  return payload as LoginResponse["user"];
};
