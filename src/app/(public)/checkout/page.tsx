import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Pembayaran | AgroWaste",
};

export default function CheckoutPage() {
  return (
    <div className="flex-1 animate-fade-in pb-20">
      
      {/* Progress Bar Header */}
      <div className="bg-[#FFF8F5] border-b border-[#E8E0D5] py-8">
        <div className="max-w-3xl mx-auto px-6 flex justify-between items-center relative">
          {/* Connecting Line */}
          <div className="absolute left-[15%] right-[15%] top-5 h-[2px] bg-[#E8E0D5] -z-10"></div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#009A44] text-white flex items-center justify-center font-bold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className="text-xs font-bold text-[#009A44]">Alamat</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#009A44] text-white flex items-center justify-center font-bold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg>
            </div>
            <span className="text-xs font-bold text-[#009A44]">Pengiriman</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white border-2 border-[#E8E0D5] text-[#111111] flex items-center justify-center font-bold shadow-sm">
              3
            </div>
            <span className="text-xs font-bold text-[#111111]">Pembayaran</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Forms) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Alamat Pengiriman */}
            <div className="bg-white border border-[#E8E0D5] rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <h2 className="text-xl font-bold text-[#111111]">Alamat Pengiriman</h2>
                </div>
                <button className="text-sm font-bold text-blue-500 hover:text-blue-600 flex items-center gap-1 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                  Ubah Alamat
                </button>
              </div>
              
              <div className="bg-[#FFF8F5] border border-[#E8E0D5] rounded-xl p-5">
                <h3 className="font-bold text-[#111111] mb-2">Rumah Utama (Budi Santoso)</h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-3">
                  Jl. Merdeka No. 123, Kel. Babakan, Kec. Bogor Tengah,<br/>
                  Kota Bogor, Jawa Barat, 16121
                </p>
                <p className="text-sm font-bold text-[#555555] font-tabular">[+62 812-3456-7890]</p>
              </div>
            </div>

            {/* Metode Pengiriman */}
            <div className="bg-white border border-[#E8E0D5] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                <h2 className="text-xl font-bold text-[#111111]">Metode Pengiriman</h2>
              </div>
              
              <div className="space-y-4">
                {/* Option 1: Selected */}
                <div className="relative bg-[#E6F5EC] border-2 border-[#009A44] rounded-xl p-5 cursor-pointer">
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-[#009A44] rounded-full text-white flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-[#009A44]">AgrowWaste Logistics</h3>
                        <span className="px-2 py-0.5 bg-[#009A44] text-white text-[9px] font-bold tracking-wider uppercase rounded">Rekomendasi</span>
                      </div>
                      <p className="text-xs text-[#009A44]/80">Estimasi tiba: 24 - 48 Jam (Besok/Lusa)</p>
                    </div>
                    <div className="text-lg font-bold text-[#009A44] font-tabular">Rp 45.000</div>
                  </div>
                </div>

                {/* Option 2: Unselected */}
                <div className="bg-white border border-[#E8E0D5] rounded-xl p-5 cursor-pointer hover:border-[#009A44] transition-colors">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-[#111111] mb-1">Kargo Reguler</h3>
                      <p className="text-xs text-[#555555]">Estimasi tiba: 3 - 5 Hari Kerja</p>
                    </div>
                    <div className="text-lg font-bold text-[#111111] font-tabular">Rp 32.500</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metode Pembayaran */}
            <div className="bg-white border border-[#E8E0D5] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <h2 className="text-xl font-bold text-[#111111]">Metode Pembayaran</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* QRIS Option */}
                <div className="relative bg-[#E6F5EC] border-2 border-[#009A44] rounded-xl p-5 cursor-pointer flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border-4 border-[#009A44] flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#111111] text-sm">QRIS (OVO, DANA, ShopeePay)</h3>
                    <p className="text-[10px] text-[#555555]">Konfirmasi Otomatis</p>
                  </div>
                  <div className="w-8 h-8 bg-black/80 rounded flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                  </div>
                </div>

                {/* Virtual Account Option */}
                <div className="bg-white border border-[#E8E0D5] rounded-xl p-5 cursor-pointer hover:border-[#009A44] transition-colors flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border border-[#E8E0D5] flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#111111] text-sm">Transfer Bank (VA)</h3>
                    <p className="text-[10px] text-[#555555]">BCA, Mandiri, BNI</p>
                  </div>
                  <div className="w-8 h-8 rounded text-[#555555] flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Summary) */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#E8E0D5] rounded-3xl p-6 shadow-sm sticky top-28">
              <h2 className="text-xl font-bold text-[#111111] mb-6">Ringkasan Pesanan</h2>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#E8E0D5] overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=100&q=80" alt="Barang 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#111111] text-xs">Pupuk Organik Premium (50kg)</h4>
                    <div className="flex justify-between mt-1">
                      <span className="text-[10px] text-[#555555]">Qty: 2</span>
                      <span className="text-[10px] font-bold text-[#111111] font-tabular">Rp 450.000</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#E8E0D5] overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1628183141103-9bb670b89b88?auto=format&fit=crop&w=100&q=80" alt="Barang 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#111111] text-xs">Pakan Ternak Olahan Hijauan</h4>
                    <div className="flex justify-between mt-1">
                      <span className="text-[10px] text-[#555555]">Qty: 1</span>
                      <span className="text-[10px] font-bold text-[#111111] font-tabular">Rp 225.000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-sm border-t border-[#E8E0D5] pt-6 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#555555]">Subtotal Produk</span>
                  <span className="font-bold text-[#111111] font-tabular">Rp 675.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555555]">Biaya Pengiriman</span>
                  <span className="font-bold text-[#111111] font-tabular">Rp 45.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#555555]">Biaya Layanan</span>
                  <span className="font-bold text-[#111111] font-tabular">Rp 2.000</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-[#E8E0D5] pt-6 mb-8">
                <span className="font-bold text-[#111111]">Total Tagihan</span>
                <span className="text-xl font-bold text-[#009A44] font-tabular">Rp 722.000</span>
              </div>

              <Link href="/checkout/success" className="w-full py-4 bg-[#00662D] hover:bg-[#005224] text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 mb-6 shadow-md shadow-[#00662D]/20">
                Bayar Sekarang
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
              
              <div className="text-center text-[8px] text-[#555555] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 opacity-80">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Pembayaran Aman oleh AgroWaste Pay
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
