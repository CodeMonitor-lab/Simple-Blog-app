import { ToolBar } from "@/components/ui";
export default function Layout({ children }) {
    return (
      <div className="min-h-screen">
        <header className="border-b p-4">
          <h1 className="text-lg font-semibold mb-2">Layout</h1>
          <ToolBar />
        </header>
  
        <main className="p-4">
          {children}
        </main>
      </div>
    );
  }
  