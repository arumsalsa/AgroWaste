import React from "react";
import Link from "next/link";

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
      image: "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "C02",
      farmer: "Kandang Barokah",
      badge: "Pilihan Berkelanjutan",
      name: "Urine Sapi Fermentasi",
      desc: "Jerigen 5L • Pupuk Alami",
      price: "Rp 120.000",
      qty: 3,
      image: "https://images.unsplash.com/photo-1628183141103-9bb670b89b88?auto=format&fit=crop&w=200&q=80",
    }
  ];

  return (
    <div className="flex-1 animate-fade-in pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        
        <div className="flex justify-between items-end mb-8">
          <h1 className="text-3xl font-bold text-[#111111] tracking-tight">Keranjang Belanja</h1>
          <div className="px-3 py-1 bg-[#F5F1E8] rounded-full text-[10px] font-bold text-[#555555] tracking-wider uppercase">
            5 BARANG DIPILIH
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Items) */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white border border-[#E8E0D5] rounded-2xl overflow-hidden shadow-sm">
                {/* Farmer Header */}
                <div className="bg-[#F5F1E8]/50 px-6 py-3 border-b border-[#E8E0D5] flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    <span className="text-xs font-bold text-[#111111]">{item.farmer}</span>
                  </div>
                  <div className={`text-[10px] font-bold flex items-center gap-1 ${item.badge === 'Produsen Terverifikasi' ? 'text-[#009A44]' : 'text-blue-500'}`}>
                    {item.badge === 'Produsen Terverifikasi' ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    ) : (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    )}
                    {item.badge}
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 flex gap-6">
                  <div className="w-24 h-24 rounded-xl bg-[#E8E0D5] overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-[#111111]">{item.name}</h3>
                        <p className="text-xs text-[#555555] mt-1">{item.desc}</p>
                      </div>
                      <div className="text-lg font-bold text-[#009A44] font-tabular">{item.price}</div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-[#E8E0D5] rounded-lg overflow-hidden">
                        <button className="w-8 h-8 flex items-center justify-center text-[#555555] hover:bg-[#F5F1E8] transition-colors">-</button>
                        <input type="text" value={item.qty} readOnly className="w-10 h-8 text-center text-sm font-bold text-[#111111] border-x border-[#E8E0D5]" />
                        <button className="w-8 h-8 flex items-center justify-center text-[#555555] hover:bg-[#F5F1E8] transition-colors">+</button>
                      </div>
                      <button className="flex items-center gap-1.5 text-xs font-bold text-red-500 hover:text-red-700 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Summary & Impact) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Impact Preview */}
            <div className="bg-[#00662D] rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-[#009A44] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[#E6F5EC]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                  <h3 className="font-bold text-lg">Dampak Lingkungan</h3>
                </div>
                <div className="flex items-end gap-1.5 mb-3">
                  <span className="text-4xl font-bold tracking-tight">35</span>
                  <span className="text-sm font-semibold mb-1 opacity-90">kg CO2 Berkurang</span>
                </div>
                <p className="text-xs leading-relaxed opacity-80">
                  Dengan membeli limbah pertanian sirkular, kamu membantu mencegah emisi metana dari penimbunan sampah.
                </p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white border border-[#E8E0D5] rounded-3xl p-6 shadow-sm">
              <h3 className="font-bold text-[#111111] mb-6">Ringkasan Pesanan</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#555555]">Subtotal</span>
                  <span className="font-bold text-[#111111] font-tabular">Rp 450.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#555555] flex items-center gap-1">
                    Ongkos Kirim (Berbasis GIS)
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </span>
                  <span className="font-bold text-[#111111] font-tabular">Rp 24.500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555555]">Biaya Layanan</span>
                  <span className="font-bold text-[#111111] font-tabular">Rp 2.000</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-[#E8E0D5] mt-6 pt-6 mb-6">
                <span className="font-bold text-[#111111]">Total Tagihan</span>
                <span className="text-xl font-bold text-[#009A44] font-tabular">Rp 476.500</span>
              </div>

              {/* Logistics Alert */}
              <div className="bg-[#FFF4E5] border border-[#FFD8A8] rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-1 text-[#E67700]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                  <h4 className="font-bold text-[10px] uppercase tracking-wider">Pelacakan Logistik</h4>
                </div>
                <p className="text-[10px] text-[#555555] leading-relaxed">Perkiraan tiba dalam 2-3 hari kerja menggunakan AgroWaste-Logistics.</p>
              </div>

              <Link href="/checkout" className="w-full py-4 bg-[#009A44] hover:bg-[#008139] text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 mb-4 shadow-md shadow-[#009A44]/20">
                Lanjut ke Pembayaran
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
              
              <button className="w-full py-3 text-xs font-bold text-[#009A44] tracking-wider uppercase hover:bg-[#E6F5EC] rounded-xl transition-colors">
                MASUKKAN KODE PROMO
              </button>
            </div>
            
            <div className="text-center text-[10px] text-[#555555] font-semibold flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              Pembayaran Aman via Transfer Bank atau QRIS
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
