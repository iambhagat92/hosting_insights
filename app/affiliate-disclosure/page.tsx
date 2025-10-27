export const metadata = {
  title: "Affiliate Disclosure - Best Hosting Review",
  description: "Our affiliate disclosure statement explaining our relationships with hosting providers.",
};

export default function AffiliateDisclosure() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Affiliate Disclosure</h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          <strong>Last Updated: October 2024</strong>
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Disclosure Statement</h2>
          <p>
            Best Hosting Review is a participant in various affiliate programs. We earn a commission when you purchase hosting through our links. These commissions do not affect the price you pay—you will pay the same amount whether you purchase directly or through our links.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Affiliate Partnerships</h2>
          <p>
            We have affiliate relationships with the following companies:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Bluehost</li>
            <li>SiteGround</li>
            <li>A2 Hosting</li>
            <li>HostGator</li>
            <li>Hostinger</li>
            <li>DreamHost</li>
            <li>InterServer</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Review Process</h2>
          <p>
            Our reviews are based on extensive research, personal testing, and user feedback. While we may earn commissions, our primary goal is to provide honest, unbiased reviews to help you make the best decision for your needs.
          </p>
          <p>
            We recommend hosting services based on their quality, features, pricing, and customer satisfaction—not on commission amounts.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Earnings Disclaimer</h2>
          <p>
            The earnings from affiliate links help us maintain this website and continue providing free, high-quality reviews. Your support through these links is greatly appreciated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Questions?</h2>
          <p>
            If you have any questions about our affiliate relationships or review process, please feel free to contact us at{" "}
            <a href="mailto:contact@besthosting.review" className="text-blue-600 hover:underline">
              contact@besthosting.review
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
