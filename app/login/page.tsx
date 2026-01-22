export const dynamic = "force-dynamic";

import { Suspense } from "react";
import fs from "fs/promises";
import path from "path";
import LoginClient from "./login-client";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);

async function getLoginImages(): Promise<string[]> {
  try {
    const imagesDir = path.join(process.cwd(), "public", "images");
    const entries = await fs.readdir(imagesDir);
    const images = entries.filter((entry) =>
      IMAGE_EXTENSIONS.has(path.extname(entry).toLowerCase()),
    );
    return images.map((image) => `/images/${image}`);
  } catch {
    return [];
  }
}

export default async function LoginPage() {
  const imageSources = await getLoginImages();
  return (
    <Suspense
      fallback={
        <div className="mx-auto mt-12 max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
          Loading login...
        </div>
      }
    >
      <LoginClient imageSources={imageSources} />
    </Suspense>
  );
}
