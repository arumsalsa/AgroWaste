import { Search, SlidersHorizontal } from "lucide-react";
import MarketplaceProducts from "./MarketplaceProducts";

export const metadata = {
  title: "Pasar Pupuk Organik | AgroWaste",
};

export default function MarketplacePage() {

  return (
    <div className="flex-1 animate-fade-in pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section & Search Bar (Compact) */}
        <section className="bg-[#2C3930] rounded-[32px] px-6 py-10 md:py-12 mt-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-md">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#009A44] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F59E0B] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />
          
          <h1 className="text-3xl md:text-4xl font-land-heading font-bold text-white mb-8 relative z-10" style={{ textWrap: "balance" }}>
            Bursa pupuk organik <span className="text-[#4ADE80]">terbesar.</span>
          </h1>

          {/* Searchbar Tengah Atas */}
          <div className="w-full max-w-3xl relative z-20 group">
            <input 
              type="text" 
              placeholder="Cari kompos, pupuk kandang, atau alat pertanian..." 
              className="w-full h-16 md:h-20 pl-14 md:pl-16 pr-32 md:pr-40 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 text-base md:text-xl focus:outline-none focus:bg-white/20 focus:border-[#4ADE80] transition-all shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            />
            <Search className="w-6 h-6 md:w-8 md:h-8 text-white/60 absolute left-5 md:left-6 top-1/2 -translate-y-1/2 group-focus-within:text-[#4ADE80] transition-colors" />
            <button className="absolute right-2 top-2 bottom-2 px-6 md:px-10 bg-[#009A44] hover:bg-[#008139] text-white rounded-full font-bold md:text-lg transition-transform hover:scale-105 shadow-md flex items-center justify-center">
              Cari
            </button>
          </div>
        </section>

        {/* Main Layout: Sidebar & Grid */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          
          {/* Left Sidebar (Filter) */}
          <div className="w-full lg:w-1/4 shrink-0 flex flex-col gap-6">
            <div className="bg-white border border-[#E8E0D5] rounded-[32px] p-6 md:p-8 shadow-[0_8px_24px_rgba(44,57,48,0.04)] sticky top-24">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E8E0D5]">
                <SlidersHorizontal className="w-5 h-5 text-land-ink" />
                <h2 className="font-land-heading font-bold text-xl text-land-ink">Filter</h2>
              </div>
              
              {/* Filter Category */}
              <div className="mb-8">
                <h3 className="font-bold text-sm text-land-ink mb-4 uppercase tracking-wider">Kategori</h3>
                <div className="space-y-4">
                  {['Pupuk Kandang', 'Kompos', 'Pupuk Cair (POC)', 'Arang & Sekam', 'Peralatan Bertani'].map((cat, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded-[6px] border-[#E8E0D5] text-[#009A44] focus:ring-[#009A44] transition-colors cursor-pointer" />
                      <span className="text-land-muted font-medium group-hover:text-land-ink transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter Location */}
              <div className="mb-8">
                <h3 className="font-bold text-sm text-land-ink mb-4 uppercase tracking-wider">Lokasi Asal</h3>
                <div className="space-y-4">
                  {['Jawa Timur', 'Jawa Tengah', 'Jawa Barat', 'Luar Pulau Jawa'].map((loc, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-5 h-5 rounded-[6px] border-[#E8E0D5] text-[#009A44] focus:ring-[#009A44] transition-colors cursor-pointer" />
                      <span className="text-land-muted font-medium group-hover:text-land-ink transition-colors">{loc}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="btn-clay-secondary w-full py-3.5">
                Terapkan Filter
              </button>
            </div>
          </div>

          {/* Right Content (Product Grid) */}
          <div className="w-full lg:w-3/4">
            <MarketplaceProducts />
          </div>
        </div>
      </div>
    </div>
  );
}
