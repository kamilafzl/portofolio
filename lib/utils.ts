import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Menggabungkan nama class Tailwind (dipakai oleh komponen di components/ui). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
