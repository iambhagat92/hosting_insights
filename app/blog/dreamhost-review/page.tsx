import Link from "next/link";
import Comments from "@/components/Comments";
import RelatedReviews from "@/components/RelatedReviews";
import Infographic, { hostingInfographics } from "@/components/Infographic";

export const metadata = {
  title: "DreamHost Review 2025: Open-Source Hosting with 97-Day Money Back",
  description: "DreamHost review - affordable hosting with 97-day guarantee. Best for open-source projects and developers.",
  keywords: "DreamHost review, DreamHost hosting, open source hosting",
};

export default function DreamHostReview() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold mb-6">DreamHost Review 2025: Developer-Friendly Hosting</h1>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">What is DreamHost?</h2>
        <p className="text-gray-700 mb-4">
          DreamHost is an ICANN-accredited domain registrar and hosting provider founded in 1997. Known for supporting open-source projects and offering one of the longest money-back guarantees in the industry (97 days), DreamHost caters to developers, designers, and creative professionals.
        </p>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">DreamHost Pricing Plans</h2>
        <h3 className="text-2xl font-semibold mb-4">Shared Starter Plan</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li><strong>Introductory Price:</strong> $2.59/month (first year)</li>
          <li><strong>Renewal Price:</strong> $7.99/month</li>
          <li><strong>Storage:</strong> Unlimited SSD</li>
          <li><strong>Bandwidth:</strong> Unlimited</li>
          <li><strong>Email Accounts:</strong> Unlimited</li>
          <li><strong>Money-Back Guarantee:</strong> 97 days (industry best!)</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-4">Shared Unlimited Plan</h3>
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          <li><strong>Introductory Price:</strong> $3.95/month (first year)</li>
          <li><strong>Renewal Price:</strong> $9.99/month</li>
          <li><strong>Storage:</strong> Unlimited SSD</li>
          <li><strong>Bandwidth:</strong> Unlimited</li>
          <li><strong>Websites:</strong> Unlimited</li>
          <li><strong>Advanced Features:</strong> Included</li>
        </ul>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Premium Features & Inclusions</h2>
        <h3 className="text-2xl font-semibold mb-3">⭐ 97-Day Money-Back Guarantee</h3>
        <p className="text-gray-700 mb-6">Industry-leading 97-day guarantee. More time than anyone else to try DreamHost risk-free. If you're not happy, get a full refund—no questions asked.</p>
        <h3 className="text-2xl font-semibold mb-3">🚀 Developer-Friendly Tools</h3>
        <p className="text-gray-700 mb-6">Full SSH access, Git integration, multiple PHP versions, WP-CLI support, and command-line tools included on all plans. No restrictions for developers.</p>
        <h3 className="text-2xl font-semibold mb-3">∞ Unlimited Everything</h3>
        <p className="text-gray-700 mb-6">Unlimited SSD storage, bandwidth, email accounts, and websites on most plans. No hidden limits or surprise overage charges.</p>
        <h3 className="text-2xl font-semibold mb-3">🎯 WordPress Pre-Optimized</h3>
        <p className="text-gray-700 mb-6">One-click WordPress installation with automatic updates. DreamPress (WordPress-specific hosting) available for high-traffic blogs.</p>
        <h3 className="text-2xl font-semibold mb-3">🌐 Open-Source Friendly</h3>
        <p className="text-gray-700 mb-6">Official support for Drupal, Joomla, MODX, and other open-source projects. DreamHost sponsors open-source initiatives.</p>
        <h3 className="text-2xl font-semibold mb-3">🔒 Free SSL & Security</h3>
        <p className="text-gray-700 mb-6">AutoSSL certificates included free. Automatic security updates and daily malware scanning for peace of mind.</p>
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

      {/* Infographics */}
      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-6">DreamHost at a Glance</h2>
        <Infographic
          data={hostingInfographics.speedMetrics(
            "DreamHost",
            "1.2-1.8 seconds"
          )}
        />
        <Infographic
          data={hostingInfographics.reliabilityMetrics("DreamHost")}
        />
      </section>

      <Comments reviewName="DreamHost" />

      <RelatedReviews currentReview="DreamHost" />
    </article>
  );
}
