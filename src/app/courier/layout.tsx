import { Sidebar } from "@/components/courier/Sidebar";
import { Topbar } from "@/components/courier/Topbar";
import { ReactNode } from "react";

export default function CourierLayout({ children }: { children: ReactNode }) {
  return (
    <div className="courier-theme min-h-screen bg-courier-surfacewhite font-sans text-courier-textprimary flex">
      {/* Sidebar - Fixed Left */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Top Navigation */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto bg-courier-surfacewhite">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
