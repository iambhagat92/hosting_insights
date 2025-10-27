"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            🏢 Best Hosting Review
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm">
            <Link href="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link href="/blog/hosting-comparison" className="hover:text-blue-200 transition">
              Comparison
            </Link>
            <Link href="/blog/bluehost-review" className="hover:text-blue-200 transition">
              Bluehost
            </Link>
            <Link href="/blog/siteground-review" className="hover:text-blue-200 transition">
              SiteGround
            </Link>
            <Link href="/blog/a2-hosting-review" className="hover:text-blue-200 transition">
              A2 Hosting
            </Link>
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
