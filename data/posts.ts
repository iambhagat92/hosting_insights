export type PostIndex = {
  title: string;
  slug: string; // path under /blog or absolute starting with /
  keywords?: string[];
};

// Minimal index to power sidebar search. Keep titles concise for display.
export const POSTS_INDEX: PostIndex[] = [
  { title: "Bluehost Review 2025", slug: "/blog/bluehost-review", keywords: ["bluehost", "wordpress", "shared hosting"] },
  { title: "SiteGround Review 2025", slug: "/blog/siteground-review", keywords: ["siteground", "speed", "uptime"] },
  { title: "A2 Hosting Review 2025", slug: "/blog/a2-hosting-review", keywords: ["a2", "turbo", "developer"] },
  { title: "InterServer Review 2025", slug: "/blog/interserver-review", keywords: ["interserver", "lifetime", "price lock"] },
  { title: "HostGator Review 2025", slug: "/blog/hostgator-review", keywords: ["hostgator", "budget", "cheap"] },
  { title: "DreamHost Review 2025", slug: "/blog/dreamhost-review", keywords: ["dreamhost", "open source", "97-day"] },
  { title: "Namecheap Review 2025", slug: "/blog/namecheap-review", keywords: ["namecheap", "free domain", "cheap"] },
  { title: "MilesWeb Review 2025", slug: "/blog/milesweb-review", keywords: ["milesweb", "india", "indian"] },
  { title: "Best Hosting Comparison", slug: "/blog/hosting-comparison", keywords: ["compare", "comparison", "top hosts"] },
];
