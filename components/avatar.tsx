/**
 * Avatar Kamila (Memoji). Gambarnya ada di public/me/memoji.png
 * Mau ganti avatar? Timpa file itu dengan gambar baru (PNG latar transparan),
 * nama file tetap memoji.png.
 */
export function Avatar({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/me/memoji.png" alt="" draggable={false} className={`object-contain select-none ${className ?? ""}`} />
  );
}
