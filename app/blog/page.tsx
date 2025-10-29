import Link from "next/link";
import { POSTS_INDEX } from "@/data/posts";

export const metadata = {
  title: "Blog Articles | Best Hosting Review",
  description: "All our hosting reviews and guides in one place.",
};

export default function BlogIndexPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-gray-600 mb-6">Browse all reviews and guides.</p>
      <ul className="space-y-3">
        {POSTS_INDEX.map((p) => (
          <li key={p.slug}>
            <Link href={p.slug} className="text-blue-700 hover:underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
