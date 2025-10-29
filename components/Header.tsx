"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-gray-900">
            Best Hosting Review
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-700 transition">
              Home
            </Link>
            <Link href="/blog/hosting-comparison" className="text-gray-700 hover:text-blue-700 transition">
              Comparison
            </Link>
            
            {/* Best Reviews Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-blue-700 transition py-2">
                Best Reviews
                <svg className="w-4 h-4 group-hover:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-96 overflow-y-auto">
                <Link href="/blog/bluehost-review" className="block px-4 py-2 hover:bg-gray-50 first:rounded-t-lg">
                  ⭐ Bluehost
                </Link>
                <Link href="/blog/siteground-review" className="block px-4 py-2 hover:bg-gray-50">
                  ⚡ SiteGround
                </Link>
                <Link href="/blog/a2-hosting-review" className="block px-4 py-2 hover:bg-gray-50">
                  🚀 A2 Hosting
                </Link>
                <Link href="/blog/interserver-review" className="block px-4 py-2 hover:bg-gray-50">
                  💎 InterServer
                </Link>
                <Link href="/blog/dreamhost-review" className="block px-4 py-2 hover:bg-gray-50">
                  🌙 DreamHost
                </Link>
                <Link href="/blog/hostgator-review" className="block px-4 py-2 hover:bg-gray-50">
                  🐊 HostGator
                </Link>
                <Link href="/blog/namecheap-review" className="block px-4 py-2 hover:bg-gray-50">
                  💰 Namecheap
                </Link>
                <Link href="/blog/milesweb-review" className="block px-4 py-2 hover:bg-gray-50 last:rounded-b-lg">
                  🌐 MilesWeb
                </Link>
              </div>
            </div>
            
            <Link href="/contact" className="text-gray-700 hover:text-blue-700 transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-700 py-2">
              Home
            </Link>
            <Link href="/blog/hosting-comparison" className="block text-gray-700 hover:text-blue-700 py-2">
              Comparison
            </Link>
            <Link href="/blog/bluehost-review" className="block text-gray-700 hover:text-blue-700 py-2">
              Bluehost Review
            </Link>
            <Link href="/blog/siteground-review" className="block text-gray-700 hover:text-blue-700 py-2">
              SiteGround Review
            </Link>
            <Link href="/blog/a2-hosting-review" className="block text-gray-700 hover:text-blue-700 py-2">
              A2 Hosting Review
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-700 py-2">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
