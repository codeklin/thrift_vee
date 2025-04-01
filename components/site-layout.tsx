import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackgroundCircles } from "@/components/background-circles"
import { MobileNav } from "@/components/mobile-nav"

interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundCircles />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <Footer />
      <MobileNav />
    </div>
  )
}

