export const dynamic = "force-dynamic";

import { Suspense } from "react";
import LoginClient from "./login-client";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto mt-12 max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
          Loading login...
        </div>
      }
    >
      <LoginClient />
    </Suspense>
  );
}
