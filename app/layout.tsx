import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Laugh-Along, Live!",
  description: "Watch Midnight Movies with Chicago's Funniest Comedians!",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#40E0D0] text-black flex flex-col items-center">
        <Header />
        <div className="flex-grow w-full max-w-5xl text-center space-y-8 pt-4 pb-8 px-4">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
