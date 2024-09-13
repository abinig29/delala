import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: Date | string | number,
  opts: Intl.DateTimeFormatOptions = {},
) {
  return new Intl.DateTimeFormat("en-US", {
    month: opts.month ?? "long",
    day: opts.day ?? "numeric",
    year: opts.year ?? "numeric",
    ...opts,
  }).format(new Date(date));
}

export const HEIGHT = 100;
export const calculateHeight = (start: string, end: string): string => {
  const startTime = new Date(`2024-05-01 ${start}`);
  const endTime = new Date(`2024-05-01 ${end}`);
  const duration = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
  const inMinutes = duration / 30;
  return `${inMinutes * HEIGHT}px`;
};

export const calculateTop = (start: string): string => {
  const startTime = new Date(`2024-05-01 ${start}`);
  const minutesFromStartOfDay =
    startTime.getHours() * 60 + startTime.getMinutes() - 8 * 60; // Minutes from 8:00 AM
  console.log(minutesFromStartOfDay);
  return `${(minutesFromStartOfDay / 30) * HEIGHT}px`; // Each 30 minutes takes 100px height
};

export const workingHours = Array.from(
  { length: 17 },
  (_, i) => `${i + 8 < 10 ? "0" : ""}${i + 8}:00`,
);
export const halfHours = Array.from(
  { length: 17 },
  (_, i) => `${i + 8 < 10 ? "0" : ""}${i + 8}:30`,
);
