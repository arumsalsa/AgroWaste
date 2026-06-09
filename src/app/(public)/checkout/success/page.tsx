import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Pembayaran Berhasil | AgroWaste",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="flex-1 animate-fade-up pb-20">
      <div className="max-w-4xl mx-auto px-6 pt-16 text-center">
        
        {/* Success Header */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E6F5EC] rounded-full mb-6 relative">
          <div className="absolute inset-0 border-4 border-white rounded-full"></div>
          <svg className="w-10 h-10 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
        </div>
        
        <h1 className="text-3xl font-bold text-[#00662D] mb-3">Pembayaran Berhasil!</h1>
        <p className="text-[#555555] text-sm mb-12 max-w-lg mx-auto leading-relaxed">
          Terima kasih atas kontribusi Anda dalam mendukung sistem pertanian sirkular yang lebih berkelanjutan.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
          
          {/* Detail Pesanan */}
          <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-center mb-6 border-b border-[#E8E0D5] pb-4">
              <h2 className="text-lg font-bold text-[#111111]">Detail Pesanan</h2>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold tracking-wider uppercase rounded-full">Lunas</span>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#555555]">ID Pesanan</span>
                <span className="font-bold text-[#111111] font-tabular">AGW-882910</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#555555]">Tanggal</span>
                <span className="font-bold text-[#111111] font-tabular">24 Okt 2024, 14:30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#555555]">Metode Bayar</span>
                <span className="font-bold text-[#111111]">QRIS</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-t border-[#E8E0D5] mt-6 pt-6">
              <span className="font-bold text-[#111111]">Total</span>
              <span className="text-xl font-bold text-[#009A44] font-tabular">Rp 425.000</span>
            </div>
          </div>

          {/* Estimasi Pengiriman */}
          <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6 border-b border-[#E8E0D5] pb-4">
              <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              <h2 className="text-lg font-bold text-[#111111]">Estimasi Pengiriman</h2>
            </div>
            
            <div className="relative pl-6 space-y-6 mb-6">
              <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-[#E8E0D5]"></div>
              
              <div className="relative">
                <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-[#F59E0B] border-2 border-white ring-2 ring-[#F59E0B]/20"></div>
                <h4 className="text-xs font-bold text-[#111111] mb-1">Pesanan Sedang Disiapkan</h4>
                <p className="text-[10px] text-[#555555] leading-relaxed">Produk sedang dikemas oleh mitra peternak.</p>
              </div>
              
              <div className="relative opacity-50">
                <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-[#E8E0D5] border-2 border-white"></div>
                <h4 className="text-xs font-bold text-[#111111] mb-1">Dijemput AgroWaste Logistics</h4>
                <p className="text-[10px] text-[#555555] leading-relaxed">Estimasi: Besok, 09:00 - 12:00 WIB</p>
              </div>
            </div>

            <div className="bg-[#FFF4E5] border border-[#FFD8A8] rounded-xl p-4 flex gap-3 items-start">
              <svg className="w-4 h-4 text-[#E67700] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p className="text-[10px] text-[#E67700] leading-relaxed">
                Driver kami akan memastikan protokol kebersihan tetap terjaga selama proses pengangkutan limbah organik.
              </p>
            </div>
          </div>
        </div>

        {/* Sustainable Impact Banner */}
        <div className="bg-[#009A44] rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden text-left mb-10 flex flex-col md:flex-row items-center gap-8">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#00B853] rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute left-0 bottom-0 w-40 h-40 bg-white rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="w-16 h-16 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
          </div>
          
          <div className="relative z-10 flex-1">
            <h2 className="text-xl font-bold mb-2">Ringkasan Dampak Lingkungan</h2>
            <p className="text-sm text-white/90 leading-relaxed mb-4">
              Selamat! Transaksi ini membantu mengurangi <strong className="text-white">12.5kg emisi CO2e</strong> dengan mengalihkan limbah pertanian dari pembuangan terbuka.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 text-[10px] font-bold tracking-wider uppercase">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              Capaian Anda: Top 5% Pembeli Hijau
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/pesanan" className="w-full sm:w-auto px-8 py-3.5 bg-[#00662D] hover:bg-[#005224] text-white rounded-xl font-bold transition-colors shadow-md shadow-[#00662D]/20 flex items-center justify-center gap-2">
            Lihat Status Pesanan
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
          <Link href="/" className="w-full sm:w-auto px-8 py-3.5 text-[#00662D] font-bold hover:bg-[#E6F5EC] rounded-xl transition-colors">
            Kembali ke Beranda
          </Link>
        </div>

      </div>
    </div>
  );
}
