import type React from "react"
import type { Metadata } from "next"
import { Anton, Oswald } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
})

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
})

const lalezar = localFont({
  src: "./fonts/Lalezar-Regular.ttf",
  display: "swap",
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  title: "Obay | أُبي - Video Editor & Motion Designer",
  description: "Creative video editing and motion design portfolio by Obay (sta4arr)",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${oswald.variable} ${lalezar.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  )
}