import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Search */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
          <div className="absolute right-2 top-2 text-gray-400">⌕</div>
        </div>
        <p className="mt-2 text-xs text-gray-500">Search coming soon.</p>
      </div>

      {/* Compare CTA */}
      <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">Compare Hosting</h3>
        <p className="text-sm text-blue-900/80 mb-3">See our side‑by‑side breakdown of the top providers.</p>
        <Link
          href="/blog/hosting-comparison"
          className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Comparison
        </Link>
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
