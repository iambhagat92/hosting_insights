import Link from "next/link";
import Comments from "@/components/Comments";
import RelatedReviews from "@/components/RelatedReviews";

export const metadata = {
  title: "DreamHost Review 2024: Open-Source Hosting with 97-Day Money Back",
  description: "DreamHost review - affordable hosting with 97-day guarantee. Best for open-source projects and developers.",
  keywords: "DreamHost review, DreamHost hosting, open source hosting",
};

export default function DreamHostReview() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold mb-6">DreamHost Review 2024: Developer-Friendly Hosting</h1>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">What is DreamHost?</h2>
        <p className="text-gray-700 mb-4">
          DreamHost is an ICANN-accredited domain registrar and hosting provider founded in 1997. Known for supporting open-source projects and offering one of the longest money-back guarantees in the industry (97 days), DreamHost caters to developers, designers, and creative professionals.
        </p>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">DreamHost Pricing</h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li><strong>Shared Hosting:</strong> Starting at $2.59/month (with annual commit)</li>
          <li><strong>Storage:</strong> Unlimited SSD</li>
          <li><strong>Bandwidth:</strong> Unlimited</li>
          <li><strong>Money-Back Guarantee:</strong> 97 days (industry best!)</li>
        </ul>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ <strong>97-Day Money-Back:</strong> Longest guarantee in industry</li>
          <li>✅ <strong>Unlimited Resources:</strong> Storage and bandwidth</li>
          <li>✅ <strong>WordPress Optimized:</strong> Easy WordPress installation</li>
          <li>✅ <strong>Developer Tools:</strong> Git, SSH, command line access</li>
          <li>✅ <strong>Free SSL:</strong> HTTPS included</li>
        </ul>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Pros & Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-bold text-green-600 mb-3">✅ Pros:</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Best money-back guarantee (97 days)</li>
              <li>• Unlimited resources</li>
              <li>• Developer-friendly</li>
              <li>• Open-source friendly</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-red-600 mb-3">❌ Cons:</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Moderate speed performance</li>
              <li>• Support not 24/7</li>
              <li>• Setup fee required</li>
              <li>• Higher renewal prices</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Try DreamHost?</h3>
        <a
          href="https://www.dreamhost.com/hosting/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          🚀 Get DreamHost Hosting Now
        </a>
      </div>

      <Comments reviewName="DreamHost" />

      <RelatedReviews currentReview="DreamHost" />
    </article>
  );
}
