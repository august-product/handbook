export const dynamic = "force-dynamic";

import { Suspense } from "react";
import fs from "fs/promises";
import path from "path";
import SignupClient from "./signup-client";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".avif"]);

async function getSignupImages(): Promise<string[]> {
  try {
    const imagesDir = path.join(process.cwd(), "public", "images");
    const entries = await fs.readdir(imagesDir);
    const images = entries.filter(
      (entry) =>
        entry !== "favicon.avif" && IMAGE_EXTENSIONS.has(path.extname(entry).toLowerCase()),
    );
    return images.map((image) => `/images/${image}`);
  } catch {
    return [];
  }
}

export default async function SignupPage() {
  const imageSources = await getSignupImages();
  return (
    <Suspense
      fallback={
        <div className="mx-auto mt-12 max-w-[850px] rounded-3xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
          Loading signup...
        </div>
      }
    >
      <SignupClient imageSources={imageSources} />
    </Suspense>
  );
}
