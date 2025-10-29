type Props = {
  title: string;
  path: string; // absolute path starting with /
};

export default function BreadcrumbJsonLd({ title, path }: Props) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hostinginsights.vercel.app/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://hostinginsights.vercel.app/blog' },
      { '@type': 'ListItem', position: 3, name: title, item: `https://hostinginsights.vercel.app${path}` },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}