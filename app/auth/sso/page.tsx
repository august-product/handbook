export const dynamic = "force-dynamic";

import { Suspense } from "react";
import SsoClient from "./sso-client";

export default function SsoPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto mt-12 max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
          Signing you in...
        </div>
      }
    >
      <SsoClient />
    </Suspense>
  );
}
