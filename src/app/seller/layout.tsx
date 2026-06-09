import { Sidebar } from "@/components/seller/Sidebar";
import { Topbar } from "@/components/seller/Topbar";

export const metadata = {
  title: "AgroWaste Peternak Dashboard",
  description: "Manajemen bisnis limbah peternakan",
};

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="seller-theme min-h-screen bg-seller-warmbg font-sans text-seller-textprimary flex">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Utama */}
      <main className="flex-1 flex flex-col min-h-screen ml-64">
        <Topbar />
        
        {/* Area Konten Dinamis */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
