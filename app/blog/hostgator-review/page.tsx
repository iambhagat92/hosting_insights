import Link from "next/link";
import Comments from "@/components/Comments";
import RelatedReviews from "@/components/RelatedReviews";
import Infographic, { hostingInfographics } from "@/components/Infographic";

export const metadata = {
  title: "HostGator Review 2024: Budget Hosting with Great Support",
  description: "HostGator review - affordable hosting with excellent customer support. Best budget option.",
  keywords: "HostGator review, HostGator hosting, budget web hosting",
};

export default function HostGatorReview() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold mb-6">HostGator Review 2024: Budget-Friendly Web Hosting</h1>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">What is HostGator?</h2>
        <p className="text-gray-700">
          HostGator is one of the oldest and most recognized hosting providers, founded in 2002. Known for aggressive pricing and excellent customer support, HostGator is perfect for beginners and small businesses on tight budgets.
        </p>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">HostGator Pricing</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Baby Plan:</strong> $2.75/month (intro) → $8.95/month (renewal)</li>
          <li><strong>Storage:</strong> Unmetered</li>
          <li><strong>Bandwidth:</strong> Unmetered</li>
          <li><strong>Websites:</strong> 1 site</li>
          <li><strong>Money-Back:</strong> 45 days</li>
        </ul>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ <strong>Ultra-Cheap Pricing:</strong> Lowest intro rates available</li>
          <li>✅ <strong>45-Day Guarantee:</strong> Long money-back guarantee</li>
          <li>✅ <strong>24/7 Support:</strong> Phone and chat support</li>
          <li>✅ <strong>Free Domain:</strong> First year free</li>
          <li>✅ <strong>One-Click Installs:</strong> WordPress and more</li>
        </ul>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Pros & Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-green-600 mb-3">✅ Pros:</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Very cheap introductory rates</li>
              <li>• 24/7 customer support</li>
              <li>• 45-day money-back guarantee</li>
              <li>• Beginner-friendly interface</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-red-600 mb-3">❌ Cons:</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Huge renewal price jump</li>
              <li>• Moderate speed performance</li>
              <li>• Shared hosting limitations</li>
              <li>• Aggressive upselling</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Final Verdict</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-gray-800"><strong>Rating: ⭐⭐⭐⭐ 4.0/5</strong></p>
          <p className="text-gray-800 mt-2">
            HostGator is best for beginners wanting the cheapest option with decent support. Just be aware of renewal price increases.
          </p>
        </div>
      </section>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Get HostGator Hosting</h3>
        <a
          href="https://www.hostgator.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          🚀 Get HostGator Now
        </a>
      </div>

      {/* Infographics */}
      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-6">HostGator at a Glance</h2>
        <Infographic
          data={hostingInfographics.speedMetrics(
            "HostGator",
            "1.8-2.3 seconds"
          )}
        />
        <Infographic
          data={hostingInfographics.reliabilityMetrics("HostGator")}
        />
      </section>

      <Comments reviewName="HostGator" />

      <RelatedReviews currentReview="HostGator" />
    </article>
  );
}
