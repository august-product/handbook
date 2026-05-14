"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchEntries, type SearchEntry } from "../../lib/search-index";

type Variant = "desktop" | "mobile";

export default function SearchBar({
  variant = "desktop",
  onNavigate,
  autoFocus = false,
}: {
  variant?: Variant;
  onNavigate?: () => void;
  autoFocus?: boolean;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo<SearchEntry[]>(
    () => searchEntries(query),
    [query]
  );

  useEffect(() => {
    if (!autoFocus) return;
    inputRef.current?.focus();
  }, [autoFocus]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onMouseDown = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  // Reset highlight when result set changes
  useEffect(() => {
    setHighlight(0);
  }, [query]);

  const goTo = (entry: SearchEntry) => {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    router.push(entry.href);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setHighlight((h) => Math.min(h + 1, Math.max(results.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      if (results[highlight]) {
        e.preventDefault();
        goTo(results[highlight]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  const isDesktop = variant === "desktop";
  const showDropdown = open && query.trim().length > 0;
  const hasResults = results.length > 0;

  const inputWrap = isDesktop
    ? "flex w-[180px] items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 transition focus-within:bg-white/25 lg:w-[240px]"
    : "flex w-full items-center gap-2 rounded-full bg-slate-100 px-4 py-2.5 transition focus-within:bg-slate-200";

  const inputClass = isDesktop
    ? "w-full bg-transparent text-[13px] text-white placeholder:text-white/60 focus:outline-none"
    : "w-full bg-transparent text-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none";

  const iconClass = isDesktop ? "text-white/70" : "text-slate-400";

  return (
    <div ref={containerRef} className="relative">
      <label className={inputWrap}>
        <Search size={isDesktop ? 14 : 16} className={iconClass} />
        <input
          ref={inputRef}
          type="search"
          value={query}
          placeholder="Search the handbook…"
          aria-label="Search the handbook"
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className={inputClass}
        />
        {query && (
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              setQuery("");
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className={iconClass}
          >
            <X size={isDesktop ? 14 : 16} />
          </button>
        )}
      </label>

      {showDropdown && (
        <div
          className={`absolute z-50 mt-2 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 ${
            isDesktop ? "right-0 w-[360px]" : "left-0 right-0"
          }`}
        >
          {hasResults ? (
            <ul role="listbox" className="max-h-[60vh] overflow-y-auto py-1">
              {results.map((entry, idx) => {
                const active = idx === highlight;
                return (
                  <li key={`${entry.href}-${entry.title}`} role="option" aria-selected={active}>
                    <button
                      type="button"
                      onMouseEnter={() => setHighlight(idx)}
                      onClick={() => goTo(entry)}
                      className={`block w-full px-4 py-3 text-left transition ${
                        active ? "bg-[#eae6e1]" : "bg-white hover:bg-[#f3efe9]"
                      }`}
                    >
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                        {entry.section}
                      </p>
                      <p className="mt-0.5 text-[14px] font-semibold text-slate-800">
                        {entry.title}
                      </p>
                      {entry.description && (
                        <p className="mt-1 line-clamp-2 text-[13px] leading-[1.5] text-slate-500">
                          {entry.description}
                        </p>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="px-4 py-3 text-[13px] text-slate-500">
              No results for &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
