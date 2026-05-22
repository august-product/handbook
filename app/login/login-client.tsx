"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
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
    role?: string;
  };
  [key: string]: unknown;
};

type GoogleTokenResponse = { access_token?: string; error?: string };

type GoogleTokenClient = {
  requestAccessToken: (overrides?: { prompt?: string }) => void;
};

declare global {
  interface Window {
    google?: {
      accounts?: {
        oauth2?: {
          initTokenClient: (config: {
            client_id: string;
            scope: string;
            callback: (response: GoogleTokenResponse) => void;
            error_callback?: (error: { type?: string }) => void;
          }) => GoogleTokenClient;
        };
      };
    };
  }
}

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
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState<"auth" | "terms" | "google" | null>(null);
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

  const handleGoogle = () => {
    setError("");
    setErrorType(null);
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const oauth2 = window.google?.accounts?.oauth2;
    if (!clientId || !oauth2) {
      setError(
        "Google sign-in is unavailable right now. Please use your email and password."
      );
      setErrorType("google");
      return;
    }
    setGoogleLoading(true);
    const tokenClient = oauth2.initTokenClient({
      client_id: clientId,
      scope: "openid email profile",
      callback: async (response) => {
        if (response.error || !response.access_token) {
          setGoogleLoading(false);
          setError("Google sign-in was cancelled. Please try again.");
          setErrorType("google");
          return;
        }
        try {
          const data = await apiRequest<LoginResponse>("/api/auth/google", {
            method: "POST",
            body: JSON.stringify({ accessToken: response.access_token }),
          });
          setAuth(data);
          if (data.user) {
            setUser({
              ...data.user,
              name: data.user.name || data.user.email || undefined,
            });
          }
          router.replace(nextPath);
        } catch (err) {
          const message =
            err && typeof err === "object" && "message" in err
              ? String(err.message)
              : "Unable to sign in with Google. Please try again.";
          setError(message);
          setErrorType("google");
          setGoogleLoading(false);
        }
      },
      error_callback: () => {
        setGoogleLoading(false);
        setError("Google sign-in was cancelled. Please try again.");
        setErrorType("google");
      },
    });
    tokenClient.requestAccessToken();
  };

  return (
    <div className="mx-auto mt-12 w-full max-w-[850px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" />
      <div className="grid min-h-[440px] grid-cols-1 md:grid-cols-[36fr_65fr]">
        <div className="py-8 pr-8 pl-4">
          <Image
            src="/images/logo-handbook-748x173.png"
            alt="Handbook"
            width={748}
            height={173}
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
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs uppercase tracking-wide text-slate-400">or</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <button
            type="button"
            onClick={handleGoogle}
            disabled={googleLoading}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <svg className="h-5 w-5" viewBox="0 0 18 18" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
              />
              <path
                fill="#34A853"
                d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
              />
              <path
                fill="#FBBC05"
                d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"
              />
              <path
                fill="#EA4335"
                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.892 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58z"
              />
            </svg>
            {googleLoading ? "Signing in..." : "Continue with Google"}
          </button>
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
