import React from "react";
import Link from "next/link";
import { Trash2, Sprout, ShieldCheck, Store, Check, ArrowRight, Ticket } from "lucide-react";

export const metadata = {
  title: "Keranjang Belanja | AgroWaste",
};

export default function CartPage() {
  const cartItems = [
    {
      id: "C01",
      farmer: "Peternak Pak Slamet",
      badge: "Produsen Terverifikasi",
      name: "Pupuk Kandang Sapi",
      desc: "Karung 25kg • Organik Grade A",
      price: "Rp 45.000",
      qty: 2,
      image: "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "C02",
      farmer: "Kandang Barokah",
      badge: "Pilihan Berkelanjutan",
      name: "Urine Sapi Fermentasi",
      desc: "Jerigen 5L • Pupuk Cair Alami",
      price: "Rp 120.000",
      qty: 3,
      image: "https://images.unsplash.com/photo-1628183141103-9bb670b89b88?auto=format&fit=crop&w=300&q=80",
    }
  ];

  return (
    <div className="flex-1 animate-fade-in pb-24 bg-land-bg">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 pb-6 border-b border-[#E8E0D5]/60">
          <div>
            <h1 className="text-4xl md:text-5xl font-land-heading font-bold text-land-ink tracking-tight mb-2">Keranjang Belanja</h1>
            <p className="text-land-muted text-sm">Dukung keberlanjutan pertanian dengan memanfaatkan limbah ternak.</p>
          </div>
          <div className="px-4 py-2 bg-white border border-[#E8E0D5] rounded-full text-xs font-bold text-land-muted tracking-wider uppercase shadow-sm">
            5 Barang Terpilih
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column (Cart Items) */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-[#E8E0D5]/60 rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Farmer Info Header */}
                <div className="bg-[#F0EDE6]/30 px-6 py-4 border-b border-[#E8E0D5]/50 flex flex-wrap justify-between items-center gap-3">
                  <div className="flex items-center gap-2.5">
                    <img 
                      src="/LOGO.png" 
                      alt="" 
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-sm font-bold text-land-ink flex items-center gap-1.5">
                      <Store className="w-4 h-4 text-land-clay" />
                      {item.farmer}
                    </span>
                  </div>
                  <div className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                    item.badge === 'Produsen Terverifikasi' 
                      ? 'bg-[#E6F5EC] border-[#B2DFCB] text-[#009A44]' 
                      : 'bg-blue-50 border-blue-200 text-blue-600'
                  }`}>
                    {item.badge === 'Produsen Terverifikasi' ? (
                      <Check className="w-3.5 h-3.5 text-[#009A44]" />
                    ) : (
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                    )}
                    {item.badge}
                  </div>
                </div>

                {/* Product details */}
                <div className="p-6 flex flex-col sm:flex-row gap-6">
                  {/* Photo */}
                  <div className="w-24 h-24 rounded-2xl bg-land-warm overflow-hidden border border-[#E8E0D5]/40 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Content block */}
                  <div className="flex-1 flex flex-col justify-between gap-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                      <div>
                        <h3 className="font-land-heading text-xl font-bold text-land-ink leading-snug">{item.name}</h3>
                        <p className="text-xs text-land-muted mt-0.5">{item.desc}</p>
                      </div>
                      <div className="text-xl font-bold text-[#009A44] font-tabular">{item.price}</div>
                    </div>
                    
                    {/* Controls row */}
                    <div className="flex justify-between items-center pt-2 border-t border-[#E8E0D5]/40">
                      <div className="flex items-center gap-3">
                        <button className="w-8 h-8 rounded-full border border-[#E8E0D5] flex items-center justify-center text-land-ink hover:bg-land-warm hover:border-land-clay transition-all duration-200 font-bold">-</button>
                        <span className="w-8 text-center text-sm font-bold text-land-ink font-tabular">{item.qty}</span>
                        <button className="w-8 h-8 rounded-full border border-[#E8E0D5] flex items-center justify-center text-land-ink hover:bg-land-warm hover:border-land-clay transition-all duration-200 font-bold">+</button>
                      </div>
                      <button className="flex items-center gap-1.5 text-xs font-bold text-rose-500 hover:text-rose-700 transition-colors p-1 group">
                        <Trash2 className="w-4 h-4 text-rose-400 group-hover:text-rose-600 transition-colors" />
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Summary & Carbon Impact) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Impact Metric Card */}
            <div className="bg-[#2C3930] text-[#FBFAF7] rounded-[32px] p-6 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[220px] group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute -right-10 -top-10 w-44 h-44 bg-[#009A44] rounded-full blur-3xl opacity-35 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-[#4ADE80]" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest text-[#4ADE80]">Dampak Lingkungan</span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-5xl font-bold font-land-heading tracking-tight">35</span>
                  <span className="text-base font-bold opacity-90">kg CO2 Berkurang</span>
                </div>
              </div>
              
              <p className="text-xs leading-relaxed text-[#FBFAF7]/80 relative z-10 pt-4 border-t border-white/10">
                Membeli produk ini membantu mencegah emisi gas rumah kaca berbahaya dari pembuangan terbuka limbah kotoran ternak.
              </p>
            </div>

            {/* Billing Struk */}
            <div className="bg-white border border-[#E8E0D5]/80 rounded-[32px] p-6 shadow-sm">
              <h3 className="font-land-heading text-xl font-bold text-land-ink mb-6">Ringkasan Belanja</h3>
              
              <div className="space-y-4 text-sm border-b border-dashed border-[#E8E0D5] pb-6 mb-6">
                <div className="flex justify-between">
                  <span className="text-land-muted">Subtotal Produk</span>
                  <span className="font-bold text-land-ink font-tabular">Rp 450.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-land-muted flex items-center gap-1">
                    Ongkir Layanan (GIS)
                  </span>
                  <span className="font-bold text-land-ink font-tabular">Rp 24.500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-land-muted">Biaya Administrasi</span>
                  <span className="font-bold text-land-ink font-tabular">Rp 2.000</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-base font-bold text-land-ink">Total Tagihan</span>
                <span className="text-2xl font-bold text-[#009A44] font-tabular">Rp 476.500</span>
              </div>

              {/* Promo input button */}
              <button className="btn-clay-secondary w-full py-3.5 mb-4 text-xs tracking-wider flex items-center justify-center gap-2">
                <Ticket className="w-4 h-4 text-land-clay" />
                MASUKKAN KODE PROMO
              </button>

              {/* Primary checkout link */}
              <Link href="/checkout" className="btn-clay-primary py-4 w-full flex items-center justify-center gap-2 mb-4">
                Lanjut ke Pembayaran
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Secure Payment */}
            <div className="text-center text-[10px] text-land-muted font-semibold flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#009A44]" />
              Pembayaran aman dengan enkripsi SSL 256-bit
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
