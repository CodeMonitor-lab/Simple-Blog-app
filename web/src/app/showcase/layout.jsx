import { ToolBar } from "@/components/ui";

export const metadata = {
    title: "Showcase | YourSite",
    description: "Explore frontend, backend and full-stack showcase projects.",
  };
  
  export default function Layout({ children }) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-10">
  
          {/* Section Title */}
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Showcase
            </h1>
            <p className="text-gray-600 mt-2">
              Explore categories and discover curated templates & resources.
            </p>
            <ToolBar active="showcase" />
          </header>
  
          {/* Page Content */}
          <section className="bg-white p-8 rounded-xl shadow-sm border">
            {children}
          </section>
          
        </div>
      </main>
    );
  }
  