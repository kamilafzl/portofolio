import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Plus } from "lucide-react";
import { GitHubIcon, LinkedInIcon, ToolTile } from "@/components/icons";
import { about, education, experience, faq, process, profile, services, toolkit } from "@/data/portfolio";

export const wrap = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";
export const h2 = "text-[clamp(24px,2.4vw,32px)] font-extrabold tracking-[-0.025em]";

/* ---------------- Toolkit (deretan ikon) ---------------- */
export function Toolkit() {
  return (
    <section className={`${wrap} py-16 text-center`} aria-labelledby="toolkit-title">
      <h2 id="toolkit-title" className={h2}>
        Toolkit
      </h2>
      <ul className="mx-auto mt-7 flex max-w-[960px] flex-wrap justify-center gap-x-6 gap-y-6">
        {toolkit.map((t) => (
          <li key={t.name} className="flex w-[84px] flex-col items-center gap-2">
            <ToolTile icon={t.icon} color={t.color} />
            <span className="text-[14px] font-semibold">{t.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- Pengalaman ---------------- */
export function Experience() {
  return (
    <section id="experience" className={`${wrap} py-16`} aria-labelledby="exp-title">
      <h2 id="exp-title" className={h2}>
        Where I’ve worked
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {experience.map((e) => (
          <article key={e.role + e.org} className="flex flex-col rounded-[20px] border border-line bg-white p-6">
            <div className="flex items-start justify-between gap-4">
              {e.metric ? (
                <p className="leading-none">
                  <span className="block text-[44px] font-extrabold tracking-[-0.04em] text-brand">{e.metric}</span>
                  <span className="mt-1 block text-[14px] font-semibold text-muted">{e.metricLabel}</span>
                </p>
              ) : (
                <span />
              )}
              {e.photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={e.photo}
                  alt={`Kamila at ${e.org}`}
                  loading="lazy"
                  className="size-16 shrink-0 rotate-3 rounded-lg border-4 border-white object-cover shadow-md"
                />
              )}
            </div>
            <p className="mt-5 flex-1 text-[16px] leading-[1.6]">{e.text}</p>
            <div className="mt-5 border-t border-line pt-4">
              <p className="text-[15px] font-bold">{e.role}</p>
              <p className="text-[14px] text-muted">
                {e.org} · {e.period}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Yang aku kerjakan ---------------- */
function ServiceArt({ kind }: { kind: string }) {
  const stroke = "#0D1B2E";
  if (kind === "dashboard")
    return (
      <svg viewBox="0 0 240 120" className="h-full" aria-hidden>
        <rect x="60" y="14" width="120" height="92" rx="10" fill="#fff" stroke={stroke} strokeWidth="3" />
        {[30, 48, 38, 62, 54].map((h, i) => (
          <rect key={i} x={76 + i * 19} y={92 - h} width="12" height={h} rx="3" fill={i === 3 ? "#2F6FDB" : "#B9CFF3"} />
        ))}
        <path d="M74 44 L98 36 L118 42 L140 26 L166 30" fill="none" stroke="#2F6FDB" strokeWidth="3" strokeLinecap="round" />
        <circle cx="140" cy="26" r="4" fill="#2F6FDB" />
        <path d="M14 60 H52" stroke="#2F6FDB" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" />
      </svg>
    );
  if (kind === "model")
    return (
      <svg viewBox="0 0 240 120" className="h-full" aria-hidden>
        <rect x="64" y="14" width="112" height="92" rx="10" fill="#fff" stroke={stroke} strokeWidth="3" />
        {[
          [82, 86], [92, 78], [100, 82], [110, 66], [120, 70], [130, 54], [140, 58], [150, 40], [158, 44],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#B9CFF3" stroke="#2F6FDB" strokeWidth="1.5" />
        ))}
        <path d="M78 90 L162 36" stroke="#2F6FDB" strokeWidth="3" strokeLinecap="round" />
        <path d="M14 60 H56" stroke="#2F6FDB" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" />
      </svg>
    );
  return (
    <svg viewBox="0 0 240 120" className="h-full" aria-hidden>
      <rect x="64" y="14" width="112" height="92" rx="10" fill="#fff" stroke={stroke} strokeWidth="3" />
      {[
        [84, 50, 76, true], [102, 58, 82, false], [120, 40, 66, true], [138, 30, 56, true], [156, 36, 60, false],
      ].map(([x, top, bot, up], i) => (
        <g key={i}>
          <line x1={x as number} y1={(top as number) - 8} x2={x as number} y2={(bot as number) + 8} stroke={stroke} strokeWidth="2" />
          <rect x={(x as number) - 6} y={top as number} width="12" height={(bot as number) - (top as number)} rx="2" fill={up ? "#2F6FDB" : "#B9CFF3"} />
        </g>
      ))}
      <path d="M14 60 H56" stroke="#2F6FDB" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" />
    </svg>
  );
}

export function Services() {
  return (
    <section className={`${wrap} py-16`} aria-labelledby="do-title">
      <h2 id="do-title" className={h2}>
        What I do
      </h2>
      <p className="mt-2 text-[17px] text-muted">Data work for finance, research and the people who make decisions with it.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="rounded-[20px] border border-line bg-white p-5">
            <div className="grid h-36 place-items-center rounded-[14px] bg-brand-soft">
              <ServiceArt kind={s.art} />
            </div>
            <h3 className="mt-5 text-[19px] font-extrabold tracking-[-0.015em]">{s.title}</h3>
            <p className="mt-2 text-[16px] leading-[1.6] text-muted">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Cara kerja ---------------- */
export function Process() {
  return (
    <section className={`${wrap} py-16`} aria-labelledby="how-title">
      <h2 id="how-title" className={h2}>
        How I work with data
      </h2>
      <ol className="relative mt-6 grid gap-8 rounded-[24px] border border-line bg-white p-7 sm:grid-cols-2 lg:grid-cols-4 lg:p-9">
        <span aria-hidden className="absolute top-[54px] right-[12%] left-[12%] hidden h-0.5 bg-[#C9DAF5] lg:block" />
        {process.map((s, i) => (
          <li key={s.title} className="relative">
            <span className="relative grid size-10 place-items-center rounded-full bg-brand text-[15px] font-bold text-white ring-8 ring-white">
              {i + 1}
            </span>
            <h3 className="mt-5 text-[17px] font-extrabold">{s.title}</h3>
            <p className="mt-1.5 text-[16px] text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------------- About ---------------- */
function Highlight({ text }: { text: string }) {
  // kata di dalam [kurung siku] diwarnai biru
  return (
    <>
      {text.split(/(\[[^\]]+\])/).map((part, i) =>
        part.startsWith("[") ? (
          <span key={i} className="text-brand">
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function About() {
  return (
    <section id="about" className={`${wrap} py-20`} aria-labelledby="about-title">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <figure className="mx-auto w-[min(78vw,320px)] -rotate-[4deg] bg-white p-3 pb-2 shadow-[0_30px_60px_-25px_rgba(13,27,46,0.5)]">
          <div className="sky aspect-[4/5] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.photo} alt="Portrait of Kamila Fazilatunisa" className="size-full object-cover object-top" />
          </div>
          <figcaption className="font-script py-2 text-center text-[32px] font-bold">{profile.firstName}</figcaption>
        </figure>

        <div>
          <h2 id="about-title" className="font-script text-[clamp(40px,4vw,56px)] leading-none font-bold text-brand">
            About me
          </h2>
          <p className="mt-4 text-[clamp(22px,2.3vw,32px)] leading-[1.35] font-medium tracking-[-0.015em]">
            <Highlight text={about} />
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {education.map((e) => (
              <li key={e.school} className="rounded-[18px] border border-line bg-white p-5">
                <p className="text-[13px] font-bold tracking-wide text-brand uppercase">{e.period}</p>
                <p className="mt-1 text-[17px] font-extrabold">{e.school}</p>
                <p className="text-[15px] font-semibold">{e.degree}</p>
                <p className="mt-2 text-[14px] text-muted">{e.note}</p>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-4 rounded-full bg-ink py-2 pr-2 pl-6 text-[17px] font-bold text-white shadow-[0_18px_40px_-14px_rgba(13,27,46,0.7)] transition hover:-translate-y-0.5"
          >
            Work with me
            <span className="grid size-10 place-items-center rounded-full bg-brand">
              <ArrowRight className="size-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function Faq() {
  return (
    <section id="faq" className="bg-brand-soft py-20" aria-labelledby="faq-title">
      <div className={wrap}>
        <h2 id="faq-title" className="text-center text-[clamp(30px,3.4vw,46px)] font-extrabold tracking-[-0.03em]">
          Questions recruiters ask
        </h2>
        <div className="mx-auto mt-10 grid max-w-[1040px] items-start gap-4 md:grid-cols-2">
          {faq.map((f) => (
            <details key={f.q} className="group rounded-[18px] border border-white bg-white px-6 py-5 shadow-[0_10px_30px_-20px_rgba(13,27,46,0.4)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-bold">
                {f.q}
                <Plus className="faq-icon size-5 shrink-0 transition-transform" />
              </summary>
              <p className="mt-3 text-[16px] leading-[1.6] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Kontak + footer ---------------- */
export function Contact() {
  const pill =
    "inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-[16px] font-bold transition hover:-translate-y-0.5 hover:border-ink";
  return (
    <section id="contact" className={`${wrap} py-24`}>
      <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
        <h2 className="leading-[0.95]">
          <span className="block text-[clamp(52px,7vw,100px)] font-extrabold tracking-[-0.045em]">Let’s find</span>
          <span className="font-script block pl-[0.6em] text-[clamp(52px,7vw,100px)] font-bold text-brand">
            the story in your data.
          </span>
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex -rotate-[8deg] items-center gap-4 rounded-[26px] bg-ink px-9 py-7 text-[clamp(22px,2.2vw,30px)] font-extrabold text-white shadow-[0_30px_50px_-20px_rgba(13,27,46,0.8)] transition hover:-rotate-[4deg]"
        >
          Email me <ArrowUpRight className="size-8" strokeWidth={2.4} />
        </a>
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={pill}>
          <LinkedInIcon className="size-[18px] text-[#0A66C2]" /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={pill}>
          <GitHubIcon className="size-5" /> GitHub
        </a>
        <a href={`mailto:${profile.email}`} className={pill}>
          <Mail className="size-5 text-brand" /> {profile.email}
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const social = [
    { href: profile.linkedin, label: "LinkedIn", icon: <LinkedInIcon className="size-[18px]" /> },
    { href: profile.github, label: "GitHub", icon: <GitHubIcon className="size-5" /> },
    { href: `mailto:${profile.email}`, label: "Email", icon: <Mail className="size-5" /> },
  ];
  return (
    <footer className="overflow-hidden border-t border-line">
      <div className={`${wrap} flex flex-col items-center gap-6 pt-10 md:flex-row md:justify-between`}>
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-[15px] font-medium" aria-label="Footer">
          <Link href="/#work">Projects</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#about">About</Link>
          <Link href="/#faq">FAQ</Link>
          <a href={profile.drive} target="_blank" rel="noopener noreferrer">
            Google Drive
          </a>
        </nav>
        <div className="flex gap-2.5">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid size-11 place-items-center rounded-full border border-line bg-white transition hover:border-ink"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-[14px] text-muted">
        © 2026 {profile.name} · {profile.email}
      </p>
      <p
        aria-hidden
        className="dotted-text mt-6 -mb-[0.2em] text-center text-[26vw] leading-[0.8] font-extrabold tracking-[-0.06em] select-none"
      >
        {profile.firstName.toLowerCase()}
      </p>
    </footer>
  );
}
