"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { setAuth } from "../../../lib/auth";

const SSO_EXCHANGE_URL =
  "https://xdti-9vsw-swso.e2.xano.io/api:Nz1enbvB/sso_exchange";

type SsoPayload = {
  email: string;
  name: string;
  ts: number;
};

type SsoExchangeResponse = {
  authToken?: string;
  token?: string;
  access_token?: string;
  user?: {
    id?: string | number;
    handbook_user_id?: string | number;
    name?: string;
    email?: string;
    role?: string;
  };
  message?: string;
};

const decodeBase64UrlJson = (b64: string): SsoPayload => {
  const standard = b64.replace(/-/g, "+").replace(/_/g, "/");
  const padded = standard + "===".slice((standard.length + 3) % 4);
  const jsonText = decodeURIComponent(
    Array.from(atob(padded))
      .map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("")
  );
  const parsed = JSON.parse(jsonText);
  if (
    !parsed ||
    typeof parsed.email !== "string" ||
    typeof parsed.name !== "string" ||
    typeof parsed.ts !== "number"
  ) {
    throw new Error("Invalid payload shape.");
  }
  return parsed as SsoPayload;
};

export default function SsoClient() {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = params?.get("token") ?? null;
    if (!token) {
      setError("Missing SSO token.");
      return;
    }
    const dot = token.indexOf(".");
    if (dot < 1 || dot === token.length - 1) {
      setError("Invalid SSO link.");
      return;
    }
    const payload_b64 = token.slice(0, dot);
    const signature = token.slice(dot + 1);

    let decoded: SsoPayload;
    try {
      decoded = decodeBase64UrlJson(payload_b64);
    } catch {
      setError("Invalid SSO link.");
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(SSO_EXCHANGE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...decoded, signature, payload_b64 }),
        });
        if (!res.ok) {
          const body = (await res
            .json()
            .catch(() => ({}))) as { message?: string };
          throw new Error(body.message ?? `SSO failed (${res.status}).`);
        }
        const data = (await res.json()) as SsoExchangeResponse;
        if (cancelled) return;
        setAuth(data);
        router.replace("/");
      } catch (err) {
        if (cancelled) return;
        setError(
          err instanceof Error ? err.message : "SSO sign-in failed."
        );
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [params, router]);

  if (error) {
    return (
      <div className="mx-auto mt-12 w-full max-w-[520px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <Image
          src="/images/logo-handbook-748x173.png"
          alt="Handbook"
          width={748}
          height={173}
          className="h-12 w-auto"
          priority
        />
        <h1
          className="mt-6 text-[28px] font-semibold text-slate-800"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Could not sign you in
        </h1>
        <div className="mt-2 h-0.5 w-8 bg-[#326354]" />
        <p className="mt-4 text-sm leading-[1.7] text-slate-600">{error}</p>
        <Link
          href="/login"
          className="mt-8 inline-block rounded-full bg-[#326354] px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2a5044]"
        >
          Go to login
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-12 w-full max-w-[520px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <Image
        src="/images/logo-handbook-748x173.png"
        alt="Handbook"
        width={748}
        height={173}
        className="mx-auto h-12 w-auto"
        priority
      />
      <p className="mt-6 text-sm text-slate-500">Signing you in...</p>
    </div>
  );
}
