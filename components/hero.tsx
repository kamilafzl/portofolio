import { Download, Globe, MapPin } from "lucide-react";
import { Avatar } from "@/components/avatar";
import { LocalClock } from "@/components/navbar";
import { ToolTile } from "@/components/icons";
import { profile, toolkit } from "@/data/portfolio";

// Posisi awan: [kiri %, atas %, lebar px, tinggi px, durasi animasi]
const clouds: [number, number, number, number, number][] = [
  [-6, 22, 520, 220, 70],
  [58, 14, 560, 230, 75],
  [72, 46, 620, 260, 95],
  [30, 84, 760, 240, 80],
  [-4, 88, 520, 200, 90],
  [80, 82, 520, 200, 65],
];

export function Hero() {
  // 6 ikon pertama dari toolkit mengorbit di sekitar avatar
  const orbit = toolkit.slice(0, 6);

  return (
    <header id="top" className="sky relative isolate flex min-h-[100svh] flex-col overflow-hidden text-white">
      {clouds.map(([l, t, w, h, d], i) => (
        <span
          key={i}
          aria-hidden
          className="cloud -z-10"
          style={{ left: `${l}%`, top: `${t}%`, width: w, height: h, ["--d" as string]: `${d}s` }}
        />
      ))}
      <LocalClock />

      <div className="mx-auto grid w-full max-w-[1240px] flex-1 items-center gap-10 px-5 pt-32 pb-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
        <div>
          <p className="flex items-center gap-2 text-[clamp(20px,2.2vw,28px)] font-semibold">
            <span aria-hidden>👋</span> Hi, I’m <b className="font-extrabold">{profile.firstName}</b>
          </p>
          <h1 className="mt-2">
            <span className="block text-[clamp(96px,15vw,200px)] leading-[0.82] font-semibold tracking-[-0.06em]">
              {profile.bigWord}
            </span>
            <span className="font-script mt-3 block pl-[0.3em] text-[clamp(40px,5.4vw,80px)] whitespace-nowrap leading-[0.9] font-bold">
              {profile.scriptLine}
            </span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-[clamp(17px,1.5vw,20px)] leading-[1.55] font-medium text-white [text-shadow:0_1px_12px_rgba(20,60,120,0.35)]">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-ink px-6 py-3.5 text-[17px] font-bold text-white transition hover:-translate-y-0.5"
            >
              <span className="size-1.5 rounded-full bg-white" /> See my work
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[17px] font-bold text-ink transition hover:-translate-y-0.5"
            >
              <Download className="size-4" /> Download CV
            </a>
          </div>
        </div>

        {/* avatar + ikon tools yang mengorbit */}
        <div className="relative mx-auto aspect-square w-[min(88vw,500px)]" aria-hidden>
          <div className="absolute inset-0 rounded-full border border-white/35" />
          <div className="absolute inset-[18%] rounded-full border border-white/35" />
          <div className="orbit absolute inset-0">
            {orbit.map((t, i) => {
              const angle = (i / orbit.length) * Math.PI * 2 - Math.PI / 2;
              const r = i % 2 === 0 ? 50 : 32; // ring luar / ring dalam (dalam %)
              return (
                <div
                  key={t.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${50 + r * Math.cos(angle)}%`, top: `${50 + r * Math.sin(angle)}%` }}
                >
                  <div className="orbit-item">
                    <ToolTile icon={t.icon} color={t.color} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="float absolute inset-[26%]">
            <Avatar className="size-full drop-shadow-[0_24px_30px_rgba(13,27,46,0.35)]" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-10 text-[14px] font-extrabold tracking-[0.06em] text-ink/80 uppercase sm:px-8">
        <p className="flex items-center gap-2">
          <span className="text-muted">Based in</span> <MapPin className="size-4" /> {profile.location}
        </p>
        <p className="mt-1 flex items-center gap-2 text-muted">
          <Globe className="size-4" /> {profile.status}
        </p>
      </div>
    </header>
  );
}
