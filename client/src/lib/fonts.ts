import { Onest } from "next/font/google"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

export const geistSans = localFont({
  src: "../styles/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

export const geistMono = localFont({
  src: "../styles/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const onest = Onest({
  variable: "--font-onest",
  weight: "variable",
  subsets: ["latin"],
})

export const jetBrainsMono = localFont({
  src: "../styles/fonts/JetBrainsMono[wght].ttf",
  variable: "--font-jetbrains-mono",
  weight: "100 900",
})

export const fontVariableClassNames = cn(geistSans.variable, geistMono.variable, onest.variable, jetBrainsMono.variable)
