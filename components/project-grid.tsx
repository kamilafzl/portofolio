"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, FolderOpen } from "lucide-react";
import { categories, profile, projects, type Category } from "@/data/portfolio";

export function ProjectGrid() {
  const [active, setActive] = useState<Category | "All">("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);
  const count = (c: Category) => projects.filter((p) => p.category === c).length;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {(["All", ...categories] as const).map((c) => {
          const on = active === c;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-[14px] font-bold transition ${
                on ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-ink/40"
              }`}
            >
              {c}
              <span className={`ml-1.5 tabular-nums ${on ? "text-white/60" : "text-muted"}`}>
                {c === "All" ? projects.length : count(c)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {shown.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group relative block aspect-[16/10] overflow-hidden rounded-[22px] bg-line shadow-[0_24px_50px_-30px_rgba(13,27,46,0.55)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 via-45% to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <span className="mb-2 inline-block rounded-full bg-white/20 px-2.5 py-1 text-[12px] font-bold backdrop-blur">
                  {p.category}
                </span>
                <h3 className="text-[clamp(20px,2vw,26px)] leading-tight font-extrabold tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-1 text-[15px] text-white/85">{p.subtitle}</p>
              </div>
              <span className="hidden shrink-0 items-center gap-1.5 text-[14px] font-bold sm:flex">
                {p.tag}
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={profile.drive}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgba(13,27,46,0.7)] transition hover:-translate-y-0.5"
        >
          <FolderOpen className="size-4" /> All files on Google Drive <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
