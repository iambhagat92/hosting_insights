import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Blog | Best Hosting Review",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <main className="md:col-span-2 min-w-0">
            {children}
          </main>
          <div className="md:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
