import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
        <body style={{ fontFamily: 'serif' }} className="antialiased">
        {children}
            <Analytics />
        </body>
    </html>
  )
}
