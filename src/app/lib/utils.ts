//Tailwind CSSのクラス名を効率的に処理するためのヘルパー関数を提供しています。
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
