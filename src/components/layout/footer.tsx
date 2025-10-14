
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="text-sm">
              Building the next generation of secure, high-speed, decentralized network infrastructure.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Documentation</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Whitepaper</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-headline text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {currentYear} Exilene, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
