import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Convert to regular js objectž
export function convertToObject<T>(value: T) {
  return JSON.parse(JSON.stringify(value));
}
