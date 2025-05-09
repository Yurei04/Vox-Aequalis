'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-10 w-full bg-muted text-muted-foreground">
      <Card className="rounded-none border-none shadow-none">
        <CardContent className="flex flex-col md:flex-row justify-between items-center p-6 gap-4 text-sm">
          <div className="text-center md:text-left">
            <p className="font-semibold text-base">Vox Aequalis</p>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
          </div>

          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 hover:text-primary" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-5 h-5 hover:text-primary" />
            </Link>
            <Link href="https://github.com" target="_blank">
              <Github className="w-5 h-5 hover:text-primary" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </footer>
  )
}
