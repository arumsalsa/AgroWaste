import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Pasar Pupuk Organik | AgroWaste",
};

export default function MarketplacePage() {
  const products = [
    { id: "P01", name: "Pupuk Kandang Sapi (25kg)", price: "Rp 35.000", farmer: "Peternak Pak Slamet", location: "Malang", rating: 4.8, sold: "1.2rb", badge: "TERVERIFIKASI", image: "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=400&q=80" },
    { id: "P02", name: "Urine Sapi Fermentasi (5L)", price: "Rp 75.000", farmer: "Kelompok Tani Lestari", location: "Batu", rating: 4.9, sold: "540", badge: "PILIHAN BERKELANJUTAN", image: "https://images.unsplash.com/photo-1628183141103-9bb670b89b88?auto=format&fit=crop&w=400&q=80" },
    { id: "P03", name: "Kompos Organik Premium (10kg)", price: "Rp 35.000", farmer: "UD Subur Makmur", location: "Kediri", rating: 4.7, sold: "890", badge: "", image: "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=400&q=80" },
    { id: "P04", name: "Pupuk Kandang Kambing (20kg)", price: "Rp 50.000", farmer: "Peternak Mandiri", location: "Pasuruan", rating: 4.8, sold: "2.1rb", badge: "TERVERIFIKASI", image: "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=400&q=80" },
    { id: "P05", name: "Kompos Vermikompos (5kg)", price: "Rp 28.000", farmer: "Agro Jaya", location: "Blitar", rating: 4.6, sold: "310", badge: "", image: "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=400&q=80" },
    { id: "P06", name: "POC Sayuran Super (1L)", price: "Rp 15.500", farmer: "Indo Organik", location: "Surabaya", rating: 4.9, sold: "1.8rb", badge: "", image: "https://images.unsplash.com/photo-1628183141103-9bb670b89b88?auto=format&fit=crop&w=400&q=80" },
    { id: "P07", name: "Pupuk Ayam Petelur (25kg)", price: "Rp 42.000", farmer: "Farm Maju Jaya", location: "Jombang", rating: 4.5, sold: "420", badge: "TERVERIFIKASI", image: "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=400&q=80" },
    { id: "P08", name: "Manual Compost Shifter", price: "Rp 125.000", farmer: "Agro Tools Co.", location: "Sidoarjo", rating: 4.8, sold: "125", badge: "", image: "https://images.unsplash.com/photo-1584483756858-69279090623a?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="flex-1 animate-fade-in pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#111111] mb-2 tracking-tight">Pupuk Organik Marketplace</h1>
            <p className="text-[#555555] text-sm"><span className="text-[#009A44] font-bold">1,248</span> Produk tersedia saat ini</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-[#E8E0D5] bg-white rounded-lg text-sm text-[#555555] font-semibold hover:border-[#009A44] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path></svg>
              Terbaru
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#E8E0D5] bg-white rounded-lg text-sm text-[#555555] font-semibold hover:border-[#009A44] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              Filter
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-10 max-w-xl">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#555555]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </span>
            <input 
              type="text" 
              placeholder="Cari pupuk organik..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-[#E8E0D5] rounded-full text-sm focus:outline-none focus:border-[#009A44] focus:ring-1 focus:ring-[#009A44] transition-colors shadow-sm" 
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <Link href={`/marketplace/${product.id}`} key={product.id} className="group bg-white border border-[#E8E0D5] rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block flex flex-col h-full">
              <div className="aspect-square bg-[#E8E0D5] relative overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold text-white flex items-center gap-1 ${product.badge === 'TERVERIFIKASI' ? 'bg-[#009A44]' : 'bg-[#10B981]'}`}>
                    {product.badge === 'TERVERIFIKASI' ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    ) : (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    )}
                    {product.badge}
                  </div>
                )}

                {/* Heart Button */}
                <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-[#555555] flex items-center justify-center hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-[#111111] text-sm mb-2 line-clamp-2">{product.name}</h3>
                <div className="text-lg font-bold text-[#009A44] mb-4 font-tabular">{product.price}</div>
                
                <div className="mt-auto pt-4 border-t border-[#E8E0D5]/50 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                      <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                    <span className="text-xs font-semibold text-[#111111] truncate">{product.farmer}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-[10px] text-[#555555]">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      {product.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <span className="font-bold text-[#111111]">{product.rating}</span>
                      <span className="text-[#555555]">({product.sold} terjual)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E8E0D5]">
          <div className="text-sm text-[#555555]">
            Menampilkan <span className="font-bold text-[#111111]">1 - 8</span> dari <span className="font-bold text-[#111111]">1.248</span> produk
          </div>
          <div className="flex items-center gap-1">
            <button className="w-9 h-9 rounded bg-white border border-[#E8E0D5] flex items-center justify-center text-[#555555] hover:border-[#009A44] hover:text-[#009A44] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button className="w-9 h-9 rounded bg-[#009A44] border border-[#009A44] flex items-center justify-center text-white font-semibold shadow-sm">1</button>
            <button className="w-9 h-9 rounded bg-white border border-transparent flex items-center justify-center text-[#555555] hover:bg-[#E8E0D5]/50 transition-colors">2</button>
            <button className="w-9 h-9 rounded bg-white border border-transparent flex items-center justify-center text-[#555555] hover:bg-[#E8E0D5]/50 transition-colors">3</button>
            <span className="w-9 h-9 flex items-center justify-center text-[#555555]">...</span>
            <button className="w-9 h-9 rounded bg-white border border-transparent flex items-center justify-center text-[#555555] hover:bg-[#E8E0D5]/50 transition-colors">42</button>
            <button className="w-9 h-9 rounded bg-white border border-[#E8E0D5] flex items-center justify-center text-[#555555] hover:border-[#009A44] hover:text-[#009A44] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
