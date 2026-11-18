"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Menu, X, Download } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

// Menu di navbar. href harus sama dengan id section di app/page.tsx
const links = [
  { href: "/#work", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-[560px] rounded-[28px] border px-3 py-2.5 shadow-[0_10px_40px_-12px_rgba(13,27,46,0.35)] backdrop-blur-xl transition-colors duration-300 ${
          scrolled || open ? "border-white bg-white/90 text-ink" : "border-white/40 bg-white/25 text-white"
        }`}
        aria-label="Main"
      >
        <div className="flex items-center gap-3">
          <Link href="/#top" className="flex items-center gap-2.5 rounded-full pr-2" onClick={() => setOpen(false)}>
            <span className="grid size-10 place-items-center overflow-hidden rounded-full bg-white/70">
              <Avatar className="size-9 translate-y-0.5" />
            </span>
            <span className="text-[15px] font-extrabold tracking-[-0.01em] uppercase">{profile.name}</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-auto grid size-10 place-items-center rounded-full transition hover:bg-black/5"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 grid gap-1 border-t border-line px-1 pt-3 pb-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2.5 text-[17px] font-semibold transition hover:bg-brand-soft"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-1 grid grid-cols-2 gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-line px-3 py-3 text-[15px] font-bold"
              >
                <LinkedInIcon className="size-4 text-[#0A66C2]" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-line px-3 py-3 text-[15px] font-bold"
              >
                <GitHubIcon className="size-4" /> GitHub
              </a>
            </div>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-ink px-3 py-3 text-[15px] font-bold text-white"
            >
              <Download className="size-4" /> Download CV
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

const fmtClock = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "Asia/Jakarta" });
const readClock = () => fmtClock.format(new Date());
const subscribeClock = (cb: () => void) => {
  const id = setInterval(cb, 15_000);
  return () => clearInterval(id);
};

/** Jam WIB kecil di pojok kiri atas, seperti di contoh. */
export function LocalClock() {
  const time = useSyncExternalStore(subscribeClock, readClock, () => "");
  return (
    <div className="absolute top-7 left-6 z-10 hidden leading-tight text-white md:block" aria-hidden>
      <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide">
        WIB <span className="size-1.5 rounded-full bg-emerald-300" />
      </div>
      <div className="text-[17px] font-bold tabular-nums">{time || " "}</div>
    </div>
  );
}
