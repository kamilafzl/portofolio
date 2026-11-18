/**
 * Halaman detail tiap proyek (otomatis dibuat dari data/portfolio.ts).
 * Alamatnya: /projects/<slug>
 */
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer, wrap } from "@/components/sections";
import { profile, projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} | ${profile.name}`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  // kalau link proyek kosong, tombolnya jadi "minta file lewat email"
  const href = p.link || `mailto:${profile.email}?subject=${encodeURIComponent(`File request: ${p.title}`)}`;
  const label = p.link ? p.linkLabel : "Request the file by email";

  return (
    <>
      <Navbar />
      <main>
        <header className="bg-[linear-gradient(180deg,var(--sky-top),var(--sky-mid))] pt-32 pb-32 text-white">
          <div className={wrap}>
            <Link href="/#work" className="inline-flex items-center gap-2 text-[15px] font-bold text-white/90 hover:text-white">
              <ArrowLeft className="size-4" /> All projects
            </Link>
            <p className="mt-8 text-[14px] font-extrabold tracking-[0.06em] uppercase">
              {p.category} · {p.year}
            </p>
            <h1 className="mt-2 max-w-[18ch] text-[clamp(40px,6vw,84px)] leading-[0.95] font-extrabold tracking-[-0.045em]">
              {p.title}
            </h1>
            <p className="font-script mt-3 text-[clamp(28px,3vw,40px)] font-bold">{p.subtitle}</p>
          </div>
        </header>

        <div className={`${wrap} -mt-20`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image}
            alt={`Preview of ${p.title}`}
            className="w-full rounded-[24px] shadow-[0_40px_80px_-40px_rgba(13,27,46,0.6)]"
          />
        </div>

        <article className={`${wrap} grid gap-12 py-16 lg:grid-cols-[1fr_320px]`}>
          <div className="max-w-[44rem]">
            <p className="text-[clamp(20px,2vw,26px)] leading-[1.45] font-medium tracking-[-0.01em]">{p.summary}</p>

            <h2 className="mt-12 text-[14px] font-extrabold tracking-[0.06em] text-brand uppercase">The question</h2>
            <p className="mt-2 text-[19px] font-semibold">{p.question}</p>

            <h2 className="mt-10 text-[14px] font-extrabold tracking-[0.06em] text-brand uppercase">What I did</h2>
            <ol className="mt-3 grid gap-3">
              {p.steps.map((s, i) => (
                <li key={s} className="flex gap-4 text-[17px] leading-[1.6]">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-[14px] font-bold text-brand">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>

            <h2 className="mt-10 text-[14px] font-extrabold tracking-[0.06em] text-brand uppercase">What I found</h2>
            <ul className="mt-3 grid gap-3">
              {p.findings.map((f) => (
                <li key={f} className="rounded-[16px] border border-line bg-white px-5 py-4 text-[17px] leading-[1.55]">
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-[20px] border border-line bg-white p-6 lg:sticky lg:top-28">
            <p className="text-[13px] font-bold tracking-wide text-muted uppercase">Type</p>
            <p className="mt-1 text-[16px] font-semibold">{p.tag}</p>
            <p className="mt-5 text-[13px] font-bold tracking-wide text-muted uppercase">Tools</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {p.tools.map((t) => (
                <li key={t} className="rounded-full bg-brand-soft px-3 py-1 text-[14px] font-semibold text-brand">
                  {t}
                </li>
              ))}
            </ul>
            {!p.link && <p className="mt-6 text-[14px] text-muted">The full file is available on request.</p>}
            <a
              href={href}
              target={p.link ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`${p.link ? "mt-6" : "mt-3"} flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-[15px] font-bold text-white transition hover:-translate-y-0.5`}
              style={{ background: p.accent }}
            >
              {label} <ArrowUpRight className="size-4" />
            </a>
            {p.slides && (
              <a
                href={p.slides}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-line px-4 py-3.5 text-[15px] font-bold transition hover:border-ink"
              >
                View the slides <ArrowUpRight className="size-4" />
              </a>
            )}
            {p.files?.map((f) => (
              <a
                key={f.href}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-line px-4 py-3.5 text-[15px] font-bold transition hover:border-ink"
              >
                {f.label} <ArrowUpRight className="size-4" />
              </a>
            ))}
          </aside>
        </article>

        <div className={`${wrap} pb-20`}>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-[24px] bg-ink p-7 text-white sm:p-9"
          >
            <span>
              <span className="block text-[14px] font-bold text-white/60">Next project</span>
              <span className="mt-1 block text-[clamp(24px,3vw,36px)] font-extrabold tracking-[-0.03em]">{next.title}</span>
            </span>
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-brand transition group-hover:translate-x-1">
              <ArrowRight className="size-6" />
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
