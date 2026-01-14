import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TopNav from "../components/TopNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "August Handbook",
  description: "Onboarding tool for August Collections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="min-h-screen">
          <TopNav />
          <main className="mx-auto max-w-3xl px-6 pb-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
