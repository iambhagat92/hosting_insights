import Link from "next/link";

interface Review {
  title: string;
  href: string;
  emoji: string;
  description: string;
}

const allReviews: Review[] = [
  {
    title: "Bluehost",
    href: "/blog/bluehost-review",
    emoji: "⭐",
    description: "Best for WordPress beginners",
  },
  {
    title: "SiteGround",
    href: "/blog/siteground-review",
    emoji: "⚡",
    description: "Best for performance",
  },
  {
    title: "A2 Hosting",
    href: "/blog/a2-hosting-review",
    emoji: "🚀",
    description: "Best value for speed",
  },
  {
    title: "InterServer",
    href: "/blog/interserver-review",
    emoji: "💎",
    description: "Lifetime price lock",
  },
  {
    title: "DreamHost",
    href: "/blog/dreamhost-review",
    emoji: "🌙",
    description: "Developer friendly",
  },
  {
    title: "HostGator",
    href: "/blog/hostgator-review",
    emoji: "🐊",
    description: "Budget option",
  },
  {
    title: "Namecheap",
    href: "/blog/namecheap-review",
    emoji: "💰",
    description: "Cheapest hosting",
  },
  {
    title: "MilesWeb",
    href: "/blog/milesweb-review",
    emoji: "🌐",
    description: "Indian users favorite",
  },
];

export default function RelatedReviews({
  currentReview,
}: {
  currentReview: string;
}) {
  const related = allReviews.filter((r) => r.title !== currentReview).slice(0, 4);

  return (
    <section className="mt-16 pt-8 border-t">
      <h2 className="text-3xl font-bold mb-8">Compare With Other Hosting</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {related.map((review) => (
          <Link
            key={review.title}
            href={review.href}
            className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 hover:border-blue-600 hover:bg-blue-100 transition group"
          >
            <div className="text-3xl mb-2 group-hover:scale-125 transition">
              {review.emoji}
            </div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition">
              {review.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{review.description}</p>
            <div className="text-blue-600 font-semibold text-sm mt-3 group-hover:underline">
              Read Review →
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Comparison */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4">All Reviews at a Glance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allReviews.map((review) => (
            <Link
              key={review.title}
              href={review.href}
              className="p-3 bg-white rounded border hover:border-blue-600 hover:shadow-md transition text-center group"
            >
              <div className="text-2xl mb-1 group-hover:scale-110 transition">
                {review.emoji}
              </div>
              <p className="font-semibold text-sm text-gray-900 group-hover:text-blue-600">
                {review.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
