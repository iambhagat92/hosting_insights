import Comments from "@/components/Comments";

export const metadata = {
  title: "Namecheap Review 2024: Budget Hosting with Free Domain",
  description: "Namecheap hosting review - cheap shared hosting with free domain. Best budget option for beginners.",
  keywords: "Namecheap review, Namecheap hosting, budget hosting",
};

export default function NamecheapReview() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold mb-6">Namecheap Review 2024: Best Budget Web Hosting</h1>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">What is Namecheap?</h2>
        <p className="text-gray-700">
          Namecheap is famous for cheap domain names but also offers affordable web hosting. Founded in 2000, Namecheap is trusted by over 10 million customers globally for domain registration and hosting services.
        </p>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Namecheap Pricing</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Stellar Plus:</strong> $1.88/month (intro) → $8.88/month (renewal)</li>
          <li><strong>Storage:</strong> 100 GB SSD</li>
          <li><strong>Bandwidth:</strong> Unlimited</li>
          <li><strong>Free Domain:</strong> Yes (first year)</li>
          <li><strong>Money-Back:</strong> 30 days</li>
        </ul>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ <strong>Cheapest Pricing:</strong> Most affordable hosting available</li>
          <li>✅ <strong>Free Domain:</strong> First year completely free</li>
          <li>✅ <strong>SSD Storage:</strong> Fast performance with SSD</li>
          <li>✅ <strong>Free SSL:</strong> HTTPS security included</li>
          <li>✅ <strong>cPanel:</strong> Easy website management</li>
        </ul>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Pros & Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-green-600 mb-3">✅ Pros:</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Lowest pricing in industry</li>
              <li>• Free domain for first year</li>
              <li>• SSD storage standard</li>
              <li>• Reliable uptime</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-red-600 mb-3">❌ Cons:</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Limited storage (100GB)</li>
              <li>• Support not always helpful</li>
              <li>• No live chat support</li>
              <li>• Performance not optimized</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12 pb-8 border-b">
        <h2 className="text-3xl font-bold mb-4">Final Verdict</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-gray-800"><strong>Rating: ⭐⭐⭐⭐ 3.8/5</strong></p>
          <p className="text-gray-800 mt-2">
            Namecheap is perfect if budget is your top priority. The free domain makes it an unbeatable deal for beginners starting their first website.
          </p>
        </div>
      </section>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Get Namecheap Hosting</h3>
        <a
          href="https://www.namecheap.com/hosting/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          🚀 Get Namecheap Now
        </a>
      </div>

      <Comments reviewName="Namecheap" />
    </article>
  );
}
