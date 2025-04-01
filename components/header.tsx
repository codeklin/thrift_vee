"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <ShoppingBag className="h-5 w-5" />
          <span>ThriftVee</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="font-medium text-muted-foreground hover:text-foreground">
            Products
          </Link>
          <Link href="/categories" className="font-medium text-muted-foreground hover:text-foreground">
            Categories
          </Link>
          <Link href="/about" className="font-medium text-muted-foreground hover:text-foreground">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping bag</span>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button className="rounded-full md:hidden" size="icon" variant="outline">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={closeMenu}>
                  <ShoppingBag className="h-5 w-5" />
                  <span>ThriftVee</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={closeMenu}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium" onClick={closeMenu}>
                  Home
                </Link>
                <Link href="/products" className="text-lg font-medium text-muted-foreground" onClick={closeMenu}>
                  Products
                </Link>
                <Link href="/categories" className="text-lg font-medium text-muted-foreground" onClick={closeMenu}>
                  Categories
                </Link>
                <Link href="/about" className="text-lg font-medium text-muted-foreground" onClick={closeMenu}>
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

