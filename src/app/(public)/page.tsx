import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Beranda Utama | AgroWaste",
};

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#FFF8F5]">

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 flex flex-col items-center text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F5EC] text-[#009A44] text-[10px] font-bold tracking-widest uppercase mb-6">
          Platform Ekonomi Sirkular
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-tight mb-6 max-w-4xl">
          Ubah Limbah Ternak Menjadi <br/>
          <span className="text-[#009A44]">Berkah Ekonomi</span>
        </h1>
        <p className="text-[#555555] text-sm md:text-base max-w-2xl mb-10 leading-relaxed">
          Platform ekonomi sirkular pertama di Indonesia yang menghubungkan peternak dengan pembeli melalui teknologi pelacakan real-time untuk masa depan pertanian hijau.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/register?role=penjual" className="px-6 py-3.5 bg-[#009A44] hover:bg-[#008139] text-white text-sm font-bold rounded-xl shadow-md transition-colors flex items-center gap-2">
            Mulai Jual Limbah
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
          <Link href="/marketplace" className="px-6 py-3.5 bg-white hover:bg-[#F9F9F9] border border-[#E8E0D5] text-[#111111] text-sm font-bold rounded-xl shadow-sm transition-colors">
            Cari Pupuk Organik
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=800&q=80" alt="Sapi di peternakan" className="w-full h-auto object-cover" />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex gap-6 shadow-lg">
                <div>
                  <div className="text-xl font-bold text-[#009A44]">5,000+</div>
                  <div className="text-[10px] text-[#555555] font-bold uppercase tracking-wider">Peternak Bergabung</div>
                </div>
                <div className="w-px bg-[#E8E0D5]"></div>
                <div>
                  <div className="text-xl font-bold text-[#009A44]">12.4k</div>
                  <div className="text-[10px] text-[#555555] font-bold uppercase tracking-wider">Ton Terproses</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Misi Kami dalam Ekonomi Sirkular</h2>
            <p className="text-[#555555] text-sm leading-relaxed mb-8">
              Kami hadir untuk memecahkan tantangan polusi limbah ternak di Indonesia. Melalui sistem AgroWaste, kami mengkonversi residu peternakan menjadi kekayaan organik berkualitas tinggi bagi petani, menciptakan ekosistem yang saling menguntungkan secara ekonomi dan lingkungan.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6F5EC] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#111111] mb-1">Konversi Efisien</h3>
                  <p className="text-xs text-[#555555] leading-relaxed">Proses modern memastikan hasil akhir pupuk organik yang kaya nutrisi.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#111111] mb-1">Kualitas Terjamin</h3>
                  <p className="text-xs text-[#555555] leading-relaxed">Setiap produk melalui kontrol kualitas ketat untuk hasil pertanian maksimal.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GIS Tracking Dark Section */}
      <section className="bg-[#1C1A18] py-20 px-6 text-white mt-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-[10px] font-bold text-[#F59E0B] tracking-widest uppercase mb-2">Kecerdasan Logistik</div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
            <h2 className="text-3xl font-bold">Pelacakan GIS Real-Time</h2>
            <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-mono text-[#E6F5EC]">
              WAKTU AKTIF SISTEM: <span className="text-[#4ADE80]">99.9%</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3 h-96 bg-[#0B1120] rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="Peta" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay"></div>

              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white">Monitor Langsung</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="text-4xl font-bold tracking-widest text-white/20">LAUT JAWA</div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex-1 flex flex-col justify-center">
                <div className="w-10 h-10 rounded-full bg-[#009A44]/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#4ADE80]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Pengiriman Aktif</div>
                <div className="text-4xl font-bold text-[#4ADE80] mb-2">4,520</div>
                <div className="text-[10px] text-[#4ADE80] flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg> +12% minggu ini</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex-1 flex flex-col justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                </div>
                <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Rute Aktif</div>
                <div className="text-4xl font-bold text-white mb-2">89</div>
                <div className="text-[10px] text-gray-400">Di 12 Provinsi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Calculator */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full text-center">
        <h2 className="text-3xl font-bold text-[#111111] mb-2">Kalkulator Dampak Lingkungan</h2>
        <p className="text-[#555555] text-sm mb-12">Hitung kontribusi positif dari setiap kilogram limbah yang Anda kelola.</p>

        <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 shadow-xl shadow-[#009A44]/5">
          <div className="flex justify-between text-[10px] font-bold text-[#555555] uppercase tracking-wider mb-4">
            <span>Masukkan Volume Limbah (kg)</span>
          </div>

          <div className="relative mb-12">
            <div className="h-2 w-full bg-[#F9F9F9] rounded-full overflow-hidden">
              <div className="h-full bg-[#009A44] w-1/3"></div>
            </div>
            <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-white border-2 border-[#009A44] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-md cursor-pointer"></div>
            <div className="flex justify-between text-xs text-[#555555] mt-4 font-mono">
              <span>10kg</span>
              <span className="text-[#009A44] font-bold">100kg</span>
              <span>1000kg</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F9F9F9] rounded-2xl p-6 flex flex-col items-center justify-center border border-[#E8E0D5]">
              <div className="text-3xl font-bold text-[#009A44] mb-1">37.5kg</div>
              <div className="text-[10px] text-[#555555] uppercase tracking-wider font-bold mb-3">CO2 Berkurang</div>
              <svg className="w-5 h-5 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
            </div>
            <div className="bg-[#F4F8FF] rounded-2xl p-6 flex flex-col items-center justify-center border border-[#DCE8FF]">
              <div className="text-3xl font-bold text-[#3B82F6] mb-1">1.5</div>
              <div className="text-[10px] text-[#555555] uppercase tracking-wider font-bold mb-3">Setara Pohon</div>
              <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <div className="bg-[#FFFBF4] rounded-2xl p-6 flex flex-col items-center justify-center border border-[#FFE8C2]">
              <div className="text-2xl font-bold text-[#F59E0B] mb-1">Rp 150k - 250k</div>
              <div className="text-[10px] text-[#555555] uppercase tracking-wider font-bold mb-3">Nilai Ekonomi</div>
              <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="bg-[#F9F9F9] py-20 px-6 border-t border-[#E8E0D5]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-1">Marketplace Produk Organik</h2>
              <p className="text-[#555555] text-sm">Pupuk berkualitas premium langsung dari sumbernya.</p>
            </div>
            <Link href="/marketplace" className="text-[#009A44] text-sm font-bold hover:text-[#008139] flex items-center gap-1 group">
              Lihat Semua
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-2xl border border-[#E8E0D5] overflow-hidden hover:border-[#009A44] hover:shadow-lg transition-all group">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=400&q=80" alt="Produk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#111111] mb-1">Pupuk Kandang Sapi Premium</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <svg className="w-3 h-3 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span className="text-xs font-bold text-[#111111]">4.9</span>
                    <span className="text-[10px] text-[#555555]">(240+)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-[#009A44]">Rp 35.000 <span className="text-[10px] text-[#555555] font-normal">/ 50kg</span></div>
                    <button className="w-8 h-8 rounded-full bg-[#E6F5EC] text-[#009A44] flex items-center justify-center hover:bg-[#009A44] hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
