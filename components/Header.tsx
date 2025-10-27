"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            🏢 Best Hosting Review
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm items-center">
            <Link href="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link href="/blog/hosting-comparison" className="hover:text-blue-200 transition">
              Comparison
            </Link>
            
            {/* Best Reviews Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-200 transition py-2">
                Best Reviews
                <svg className="w-4 h-4 group-hover:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-96 overflow-y-auto">
                <Link href="/blog/bluehost-review" className="block px-4 py-2 hover:bg-blue-100 first:rounded-t-lg">
                  ⭐ Bluehost
                </Link>
                <Link href="/blog/siteground-review" className="block px-4 py-2 hover:bg-blue-100">
                  ⚡ SiteGround
                </Link>
                <Link href="/blog/a2-hosting-review" className="block px-4 py-2 hover:bg-blue-100">
                  🚀 A2 Hosting
                </Link>
                <Link href="/blog/interserver-review" className="block px-4 py-2 hover:bg-blue-100">
                  💎 InterServer
                </Link>
                <Link href="/blog/dreamhost-review" className="block px-4 py-2 hover:bg-blue-100">
                  🌙 DreamHost
                </Link>
                <Link href="/blog/hostgator-review" className="block px-4 py-2 hover:bg-blue-100">
                  🐊 HostGator
                </Link>
                <Link href="/blog/namecheap-review" className="block px-4 py-2 hover:bg-blue-100">
                  💰 Namecheap
                </Link>
                <Link href="/blog/milesweb-review" className="block px-4 py-2 hover:bg-blue-100 last:rounded-b-lg">
                  🌐 MilesWeb
                </Link>
              </div>
            </div>
            
            <Link href="/contact" className="hover:text-blue-200 transition">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
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
            <Link href="/" className="block hover:text-blue-200 py-2">
              Home
            </Link>
            <Link href="/blog/hosting-comparison" className="block hover:text-blue-200 py-2">
              Comparison
            </Link>
            <Link href="/blog/bluehost-review" className="block hover:text-blue-200 py-2">
              Bluehost Review
            </Link>
            <Link href="/blog/siteground-review" className="block hover:text-blue-200 py-2">
              SiteGround Review
            </Link>
            <Link href="/blog/a2-hosting-review" className="block hover:text-blue-200 py-2">
              A2 Hosting Review
            </Link>
            <Link href="/contact" className="block hover:text-blue-200 py-2">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
