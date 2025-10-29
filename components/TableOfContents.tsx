import Link from "next/link";

interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
  image?: {
    src: string;
    alt: string;
  };
}

export default function TableOfContents({ items, image }: TableOfContentsProps) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* TOC List */}
        <div className="md:col-span-2">
          <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="text-blue-600 hover:underline hover:text-blue-800 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Image (Optional) */}
        {image && (
          <div className="md:col-span-1 flex items-center justify-center">
            <img
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              className="w-full h-auto max-w-[600px] object-cover rounded-lg"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        )}
      </div>
    </div>
  );
}
