"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { POSTS_INDEX } from "@/data/posts";

export default function Sidebar() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return POSTS_INDEX.filter((p) => {
      const inTitle = p.title.toLowerCase().includes(term);
      const inKw = (p.keywords || []).some((k) => k.toLowerCase().includes(term));
      return inTitle || inKw;
    }).slice(0, 8);
  }, [q]);

  return (
    <aside className="space-y-6">
      {/* Search */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles... (e.g. siteground, a2, bluehost)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-2 top-2 text-gray-400">⌕</div>
        </div>
        {q && (
          <div className="mt-3">
            {results.length === 0 ? (
              <p className="text-xs text-gray-500">No results.</p>
            ) : (
              <ul className="divide-y divide-gray-100 border border-gray-100 rounded-md overflow-hidden">
                {results.map((p) => (
                  <li key={p.slug} className="bg-white hover:bg-gray-50">
                    <Link href={p.slug} className="block px-3 py-2 text-sm text-blue-700 hover:underline">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Top Reviews */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Top Reviews</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/blog/siteground-review" className="text-blue-700 hover:underline">SiteGround</Link></li>
          <li><Link href="/blog/a2-hosting-review" className="text-blue-700 hover:underline">A2 Hosting</Link></li>
          <li><Link href="/blog/bluehost-review" className="text-blue-700 hover:underline">Bluehost</Link></li>
          <li><Link href="/blog/interserver-review" className="text-blue-700 hover:underline">InterServer</Link></li>
          <li><Link href="/blog/hostgator-review" className="text-blue-700 hover:underline">HostGator</Link></li>
        </ul>
      </div>

      {/* Disclosure */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 text-xs text-gray-600">
        <p>
          Some links on this site are affiliate links. We may earn a commission at no extra cost to you. This helps keep the site running.
        </p>
      </div>
    </aside>
  );
}
