import { ChartColumnBig, ChartPie, CodeXml, Database, LayoutGrid, Network, Sheet, Sigma, type LucideIcon } from "lucide-react";

/** Nama ikon yang bisa dipakai di data/portfolio.ts (bagian toolkit). */
export const toolIcons: Record<string, LucideIcon> = {
  code: CodeXml,
  database: Database,
  sheet: Sheet,
  chart: ChartColumnBig,
  sigma: Sigma,
  network: Network,
  layout: LayoutGrid,
  pie: ChartPie,
};

export function ToolTile({ icon, color, size = "md" }: { icon: string; color: string; size?: "sm" | "md" }) {
  const Icon = toolIcons[icon] ?? CodeXml;
  const box = size === "sm" ? "size-12 rounded-[14px]" : "size-14 rounded-[16px] sm:size-16 sm:rounded-[18px]";
  return (
    <span
      className={`grid place-items-center border border-white/70 bg-white shadow-[0_10px_24px_-10px_rgba(13,27,46,0.45)] ${box}`}
      style={{ color }}
    >
      <Icon className={size === "sm" ? "size-6" : "size-7 sm:size-8"} strokeWidth={2} />
    </span>
  );
}

/* Ikon LinkedIn, GitHub (lucide versi baru tidak menyediakan logo merek). */
export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.64-1.6-2.64-1.6 0-1.85 1.25-1.85 2.55v4.92h-4v-11z" />
    </svg>
  );
}
export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.23C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}
