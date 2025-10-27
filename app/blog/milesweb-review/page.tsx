import Link from "next/link";
import Comments from "@/components/Comments";
import RelatedReviews from "@/components/RelatedReviews";
import Infographic, { hostingInfographics } from "@/components/Infographic";

export const metadata = {
  title: "MilesWeb Review 2024: Affordable Hosting with Good Speed",
  description: "MilesWeb review - budget hosting with decent performance. Best for Indian users and small businesses.",
  keywords: "MilesWeb review, MilesWeb hosting, cheap Indian hosting",
};

export default function MilesWebReview() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold mb-6">MilesWeb Review 2024: Affordable & Reliable Hosting</h1>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">What is MilesWeb?</h2>
        <p className="text-gray-700">
          MilesWeb is an Indian web hosting provider offering affordable shared, cloud, and VPS hosting. Popular among Indian entrepreneurs and small businesses, MilesWeb focuses on providing good value hosting with decent customer support.
        </p>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">MilesWeb Pricing</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Starter Plan:</strong> $1.99/month (intro)</li>
          <li><strong>Storage:</strong> 100 GB SSD</li>
          <li><strong>Bandwidth:</strong> Unlimited</li>
          <li><strong>Websites:</strong> 1 website</li>
          <li><strong>Money-Back:</strong> 30 days</li>
        </ul>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ <strong>Budget Friendly:</strong> Very affordable pricing starting at $1.99/month</li>
          <li>✅ <strong>SSD Storage:</strong> Fast SSD storage on all plans</li>
          <li>✅ <strong>24/7 Support:</strong> Email and chat support available</li>
          <li>✅ <strong>Free SSL:</strong> HTTPS security included</li>
          <li>✅ <strong>Uptime Guarantee:</strong> 99.9% uptime SLA</li>
        </ul>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Pros & Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-green-600 mb-3">✅ Pros:</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Very affordable pricing</li>
              <li>• Good speed performance</li>
              <li>• SSD storage included</li>
              <li>• Responsive support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-red-600 mb-3">❌ Cons:</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Limited storage (100GB)</li>
              <li>• Only 1 website on starter</li>
              <li>• Renewal prices higher</li>
              <li>• Not widely known globally</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Final Verdict</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-gray-800"><strong>Rating: ⭐⭐⭐⭐ 4.1/5</strong></p>
          <p className="text-gray-800 mt-2">
            MilesWeb is an excellent choice for budget-conscious users, especially those based in India. Good value hosting with decent support and performance.
          </p>
        </div>
      </section>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Get MilesWeb Hosting</h3>
        <a
          href="https://www.milesweb.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          🚀 Get MilesWeb Now
        </a>
      </div>

      {/* Infographics */}
      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-6">MilesWeb at a Glance</h2>
        <Infographic
          data={hostingInfographics.speedMetrics(
            "MilesWeb",
            "1.3-1.7 seconds"
          )}
        />
        <Infographic
          data={hostingInfographics.reliabilityMetrics("MilesWeb")}
        />
      </section>

      <Comments reviewName="MilesWeb" />

      <RelatedReviews currentReview="MilesWeb" />
    </article>
  );
}
