interface HostingCardProps {
  name: string;
  rating: number;
  price: string;
  features: string[];
  link: string;
}

export default function HostingCard({
  name,
  rating,
  price,
  features,
  link,
}: HostingCardProps) {
  const stars = "⭐".repeat(Math.floor(rating));

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-sm mb-3">{stars} {rating.toFixed(1)}/5</p>
        <p className="text-3xl font-bold">{price}</p>
      </div>

      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href={link}
          className="w-full block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
