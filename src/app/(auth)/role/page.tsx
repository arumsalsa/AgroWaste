import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Pilih Peran | AgroWaste",
};

export default function RoleSelectionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#FFF8F5] to-[#E6F5EC]/30">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009A44]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 mb-16 hover:opacity-80 transition-opacity">
        <img src="/LOGO.png" alt="AgroWaste Logo" className="h-9 w-auto object-contain" />
        <span className="text-2xl font-bold text-[#009A44] tracking-tight">AgroWaste</span>
      </Link>

      {/* Header */}
      <div className="text-center mb-12 animate-fade-up">
        <h1 className="text-3xl font-bold text-[#111111] mb-3">Selamat Datang di AgroWaste</h1>
        <p className="text-[#555555] text-sm">Silakan pilih peran Anda untuk memulai perjalanan ekonomi sirkular.</p>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-16 animate-fade-in" style={{ animationDelay: '100ms' }}>
        
        {/* Penjual (Peternak) */}
        <div className="bg-white border border-[#E8E0D5] hover:border-[#009A44] hover:shadow-lg hover:shadow-[#009A44]/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 group">
          <div className="w-16 h-16 bg-[#E6F5EC] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          </div>
          <h3 className="text-lg font-bold text-[#111111] mb-3">Penjual (Peternak)</h3>
          <p className="text-xs text-[#555555] leading-relaxed mb-8 flex-1">
            Kelola limbah ternak dan jual sebagai pupuk organik berkualitas tinggi.
          </p>
          <Link href="/register?role=penjual" className="w-full py-3 bg-[#009A44] hover:bg-[#008139] text-white text-sm font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
            Pilih & Lanjutkan
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>

        {/* Pembeli (Petani) */}
        <div className="bg-white border border-[#E8E0D5] hover:border-[#3B82F6] hover:shadow-lg hover:shadow-[#3B82F6]/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 group">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-lg font-bold text-[#111111] mb-3">Pembeli (Petani)</h3>
          <p className="text-xs text-[#555555] leading-relaxed mb-8 flex-1">
            Cari dan beli pupuk organik berkualitas langsung dari sumber produsen terpercaya.
          </p>
          <Link href="/register?role=pembeli" className="w-full py-3 bg-[#3B82F6] hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
            Pilih & Lanjutkan
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>

        {/* Mitra Logistik */}
        <div className="bg-white border border-[#E8E0D5] hover:border-[#F59E0B] hover:shadow-lg hover:shadow-[#F59E0B]/10 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 group">
          <div className="w-16 h-16 bg-[#FFF4E5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          </div>
          <h3 className="text-lg font-bold text-[#111111] mb-3">Mitra Logistik</h3>
          <p className="text-xs text-[#555555] leading-relaxed mb-8 flex-1">
            Bantu distribusi pupuk organik dan optimalkan rute pengiriman logistik Anda.
          </p>
          <Link href="/register?role=logistik" className="w-full py-3 bg-[#F59E0B] hover:bg-amber-600 text-white text-sm font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
            Pilih & Lanjutkan
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>

      </div>

      {/* Footer Links */}
      <div className="flex flex-col items-center gap-4 text-sm font-semibold animate-fade-in" style={{ animationDelay: '200ms' }}>
        <div className="text-[#555555]">
          Sudah punya akun? <Link href="/login" className="text-[#009A44] hover:text-[#008139]">Masuk di sini</Link>
        </div>
        <Link href="/" className="text-[#555555] hover:text-[#111111] flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Beranda
        </Link>
      </div>

    </div>
  );
}
