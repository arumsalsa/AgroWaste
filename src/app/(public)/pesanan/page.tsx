import React from "react";
import Link from "next/link";
import { Search, ChevronDown, MapPin, Package, Truck, CheckCircle2, SlidersHorizontal, Leaf, Receipt } from "lucide-react";

export const metadata = {
  title: "Riwayat Pesanan | AgroWaste",
};

export default function PesananPage() {
  const orders = [
    { id: "AGW-882910", date: "24 Okt 2026", product: "Pupuk Kandang Sapi Premium (50kg)", status: "Sedang Dikirim", statusIcon: Truck, statusColor: "text-amber-600", statusBg: "bg-amber-100", price: "Rp 35.000", qty: 2, total: "Rp 70.000", courier: "Pak Agus (B 1234 ABC)" },
    { id: "AGW-882905", date: "20 Okt 2026", product: "Urine Sapi Fermentasi (5L)", status: "Selesai", statusIcon: CheckCircle2, statusColor: "text-[#009A44]", statusBg: "bg-[#009A44]/10", price: "Rp 75.000", qty: 1, total: "Rp 75.000", courier: "Pak Budi" },
    { id: "AGW-882850", date: "15 Okt 2026", product: "Kompos Daun Kering Premium (20kg)", status: "Selesai", statusIcon: CheckCircle2, statusColor: "text-[#009A44]", statusBg: "bg-[#009A44]/10", price: "Rp 20.000", qty: 5, total: "Rp 100.000", courier: "Pak Slamet" },
  ];

  return (
    <div className="flex-1 animate-fade-in pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section & Search Bar (Compact) */}
        <section className="bg-[#1C231F] rounded-[32px] px-6 py-10 md:py-12 mt-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-md">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#009A44] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4ADE80] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />
          
          <h1 className="text-3xl md:text-4xl font-land-heading font-bold text-white mb-8 relative z-10" style={{ textWrap: "balance" }}>
            Pantau <span className="text-[#4ADE80]">Pesanan</span> Anda.
          </h1>

          {/* Searchbar Tengah Atas */}
          <div className="w-full max-w-3xl relative z-20 group">
            <input 
              type="text" 
              placeholder="Cari ID Pesanan atau nama produk..." 
              className="w-full h-16 md:h-20 pl-14 md:pl-16 pr-32 md:pr-40 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 text-base md:text-xl focus:outline-none focus:bg-white/20 focus:border-[#4ADE80] transition-all shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            />
            <Search className="w-6 h-6 md:w-8 md:h-8 text-white/60 absolute left-5 md:left-6 top-1/2 -translate-y-1/2 group-focus-within:text-[#4ADE80] transition-colors" />
            <button className="absolute right-2 top-2 bottom-2 px-6 md:px-10 bg-[#009A44] hover:bg-[#008139] text-white rounded-full font-bold md:text-lg transition-transform hover:scale-105 shadow-md flex items-center justify-center">
              Cari
            </button>
          </div>
        </section>

        {/* Main Layout: Sidebar & List */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          
          {/* Left Sidebar (Filter) */}
          <div className="w-full lg:w-1/4 shrink-0 flex flex-col gap-6">
            <div className="bg-white border border-[#E8E0D5] rounded-[32px] p-6 md:p-8 shadow-[0_8px_24px_rgba(44,57,48,0.04)] sticky top-24">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E8E0D5]">
                <SlidersHorizontal className="w-5 h-5 text-land-ink" />
                <h2 className="font-land-heading font-bold text-xl text-land-ink">Filter</h2>
              </div>
              
              {/* Filter Status */}
              <div className="mb-8">
                <h3 className="font-bold text-sm text-land-ink mb-4 uppercase tracking-wider">Status</h3>
                <div className="space-y-4">
                  {['Semua Status', 'Menunggu Pembayaran', 'Sedang Diproses', 'Sedang Dikirim', 'Selesai'].map((status, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="status" defaultChecked={i === 0} className="w-5 h-5 border-[#E8E0D5] text-[#009A44] focus:ring-[#009A44] transition-colors cursor-pointer" />
                      <span className="text-land-muted font-medium group-hover:text-land-ink transition-colors">{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter Waktu */}
              <div className="mb-8">
                <h3 className="font-bold text-sm text-land-ink mb-4 uppercase tracking-wider">Waktu Beli</h3>
                <div className="space-y-4">
                  {['Semua Waktu', '30 Hari Terakhir', '3 Bulan Terakhir', 'Tahun Ini'].map((time, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="time" defaultChecked={i === 0} className="w-5 h-5 border-[#E8E0D5] text-[#009A44] focus:ring-[#009A44] transition-colors cursor-pointer" />
                      <span className="text-land-muted font-medium group-hover:text-land-ink transition-colors">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="btn-clay-secondary w-full py-3.5">
                Terapkan Filter
              </button>
            </div>
          </div>

          {/* Right Content (Order List) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            {orders.map((order, index) => (
              <div key={index} className="bg-white border border-[#E8E0D5] rounded-[32px] p-6 shadow-[0_8px_24px_rgba(44,57,48,0.04)] flex flex-col gap-6 group hover:-translate-y-1 transition-transform">
                
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E0D5]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-land-warm flex items-center justify-center shrink-0">
                      <Receipt className="w-5 h-5 text-[#009A44]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-land-muted uppercase tracking-widest block mb-0.5">ID Pesanan</span>
                      <span className="font-mono font-bold text-land-ink text-sm">{order.id}</span>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${order.statusBg} ${order.statusColor}`}>
                    <order.statusIcon className="w-4 h-4" />
                    {order.status}
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="w-24 h-24 rounded-[20px] bg-[#E8E0D5] shrink-0 overflow-hidden shadow-sm">
                    <img src={index === 0 ? "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=200&q=80" : "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=200&q=80"} className="w-full h-full object-cover" alt="Product" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-land-heading font-bold text-xl text-land-ink mb-1">{order.product}</h3>
                    <p className="text-sm text-land-muted mb-3 font-medium">{order.qty} barang x {order.price}</p>
                    {order.status === "Sedang Dikirim" && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold shadow-sm">
                        <Truck className="w-4 h-4" /> Dikirim oleh: {order.courier}
                      </div>
                    )}
                  </div>
                  <div className="text-left sm:text-right w-full sm:w-auto bg-land-warm sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none">
                    <span className="text-[10px] font-bold text-land-muted uppercase tracking-widest block mb-1">Total Belanja</span>
                    <span className="text-2xl font-bold text-[#009A44]">{order.total}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-[#E8E0D5]/50 mt-2">
                  <span className="text-xs font-bold text-land-muted">Dipesan pada: <span className="text-land-ink">{order.date}</span></span>
                  <div className="flex gap-3 w-full sm:w-auto">
                    {order.status === "Sedang Dikirim" ? (
                      <Link href={`/pesanan/${order.id}/lacak`} className="btn-clay-primary px-6 py-3 text-sm w-full sm:w-auto flex justify-center items-center gap-2">
                        <MapPin className="w-4 h-4" /> Lacak Pengiriman
                      </Link>
                    ) : (
                      <>
                        <Link href={`/pesanan/${order.id}`} className="btn-clay-secondary px-6 py-3 text-sm flex-1 sm:flex-none flex justify-center items-center">Detail</Link>
                        <button className="btn-clay-primary px-6 py-3 text-sm flex-1 sm:flex-none flex justify-center items-center">Beli Lagi</button>
                      </>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
