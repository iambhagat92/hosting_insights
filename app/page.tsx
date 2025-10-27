import Link from "next/link";
import HostingCard from "@/components/HostingCard";

export default function Home() {
  const featuredHosts = [
    {
      name: "Bluehost",
      rating: 4.8,
      price: "$2.95/mo",
      features: ["24/7 Support", "Free Domain", "45-Day Guarantee"],
      link: "#bluehost",
    },
    {
      name: "SiteGround",
      rating: 4.9,
      price: "$2.99/mo",
      features: ["Super Fast", "Great Support", "Auto Backups"],
      link: "#siteground",
    },
    {
      name: "A2 Hosting",
      rating: 4.7,
      price: "$1.99/mo",
      features: ["Unlimited Bandwidth", "Developer Friendly", "HDD & SSD"],
      link: "#a2hosting",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Find Your Perfect Web Hosting
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Compare the best web hosting services and make an informed decision for your website.
          </p>
          <Link
            href="/blog/hosting-comparison"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Read Full Comparison →
          </Link>
        </div>
      </section>

      {/* Featured Hosts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Top Hosting Providers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredHosts.map((host) => (
              <HostingCard key={host.name} {...host} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Compare */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why You Should Choose the Right Web Host
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-4">⚡ Performance</h3>
              <p className="text-gray-600">
                Fast loading times directly impact user experience and SEO rankings. A quality host ensures your site runs smoothly.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-4">🔒 Security</h3>
              <p className="text-gray-600">
                Protect your website and customer data with SSL certificates, firewalls, and regular backups included.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-600">
              <h3 className="text-xl font-bold mb-4">📞 Support</h3>
              <p className="text-gray-600">
                24/7 customer support ensures you get help when you need it. Quality support can save you hours of frustration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Choose Your Hosting?
          </h2>
          <p className="text-lg mb-8">
            Read our comprehensive comparison guide to find the perfect hosting provider for your needs.
          </p>
          <Link
            href="/blog/hosting-comparison"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            View Detailed Comparison
          </Link>
        </div>
      </section>
    </div>
  );
}
