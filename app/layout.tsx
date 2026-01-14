import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import TopNav from "../components/TopNav";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
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
        className={`${jakartaSans.variable} ${geistMono.variable} bg-[#f7f7f7] text-[#0f172a] antialiased`}
      >
        <div className="min-h-screen">
          <TopNav />
          <main className="mx-auto max-w-3xl px-6 pb-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
