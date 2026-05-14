"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useCallback } from "react";
import { navSections, isSectionActive } from "../../lib/navigation";
import NavIcon from "./NavIcon";
import SearchBar from "./SearchBar";
import { ChevronDown, X } from "lucide-react";

export default function MobileNav({
  open,
  onClose,
  onLogout,
}: {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
}) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close when tapping the backdrop
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  if (!open) return null;

  return (
    <div
      className="mobile-nav-enter fixed inset-0 z-[60] flex flex-col bg-black/30 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      onClick={handleBackdropClick}
    >
      <div className="flex max-h-full flex-col overflow-hidden bg-white">
        {/* Green header bar */}
        <div className="flex items-center justify-between bg-[#1d3528] px-6 py-4">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src="/images/logo-handbook-748x173.png"
              alt="August Handbook"
              width={100}
              height={24}
              className="h-6 w-[100px] brightness-0 invert"
            />
          </Link>
          <button type="button" onClick={onClose} aria-label="Close menu">
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* Search */}
        <div className="border-b border-slate-200 bg-white px-6 py-3">
          <SearchBar variant="mobile" onNavigate={onClose} />
        </div>

        {/* Accordion sections */}
        <nav className="flex-1 overflow-y-auto py-2">
          {navSections.map((section) => {
            const isActive = isSectionActive(section, pathname);
            return (
              <details
                key={section.title}
                className="group"
                open={isActive}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-[18px]">
                  <span
                    className={`text-[15px] font-semibold ${
                      isActive ? "text-[#326354]" : "text-slate-800"
                    }`}
                  >
                    {section.title}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition ${
                      isActive
                        ? "text-[#326354] group-open:rotate-180"
                        : "text-slate-400 group-open:rotate-180"
                    }`}
                  />
                </summary>

                {/* Expanded links */}
                <div className="bg-[#F5F3EE] py-1">
                  {section.items.map((item) => {
                    const itemActive =
                      pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center gap-3 px-10 py-[14px] text-[14px] transition ${
                          itemActive
                            ? "font-medium text-[#326354]"
                            : "text-slate-800 hover:text-[#326354]"
                        }`}
                      >
                        {item.icon && (
                          <NavIcon
                            name={item.icon}
                            size={16}
                            className="text-[#326354]"
                          />
                        )}
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="mx-0 h-px bg-slate-200" />
              </details>
            );
          })}

          {/* Divider before logout */}
          <div className="mx-6 my-4 h-px bg-slate-200" />

          {/* Logout */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onLogout();
            }}
            className="mx-6 text-left text-[14px] text-slate-400 transition hover:text-slate-600"
          >
            Sign out
          </button>
        </nav>
      </div>
    </div>
  );
}
