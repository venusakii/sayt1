"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-playfair text-2xl font-bold text-primary">The Cosmo Store</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${isActive("/") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              Home
            </Link>
            <Link
              href="/reviews"
              className={`transition-colors ${isActive("/reviews") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              Reviews
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${isActive("/about") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${isActive("/contact") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`transition-colors ${isActive("/") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/reviews"
                className={`transition-colors ${isActive("/reviews") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/about"
                className={`transition-colors ${isActive("/about") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`transition-colors ${isActive("/contact") ? "text-primary font-medium" : "text-foreground hover:text-primary"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
