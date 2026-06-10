import React from "react";
import Link from "next/link";
import { Globe2, Recycle, Sparkles, TrendingUp, TreePine, Download, ArrowUpRight, Leaf, Sprout } from "lucide-react";

export const metadata = {
  title: "Dampak Lingkungan | AgroWaste",
};

export default function ImpactPage() {
  return (
    <div className="flex-1 animate-fade-in bg-[#F8FAF9] min-h-screen pb-20">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#009A44] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_4px_20px_rgba(44,57,48,0.05)] border border-[#E8E0D5]">
            <Globe2 className="w-4 h-4" /> Laporan Transparansi 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-land-heading font-bold text-land-ink leading-tight mb-8" style={{ textWrap: "balance" }}>
            Merawat Bumi,<br />Satu <span className="text-[#009A44]">Truk Limbah</span> Sekali Waktu.
          </h1>
          <p className="text-land-muted md:text-lg max-w-2xl mx-auto leading-relaxed">
            Pantau kontribusi kolektif komunitas AgroWaste secara real-time. Bersama-sama kita mengubah limbah yang membusuk menjadi kehidupan baru bagi tanah pertanian Indonesia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Bento Grid Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Card 1: Total Terproses (Lebar) */}
          <div className="md:col-span-2 bg-[#2C3930] rounded-[40px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group shadow-xl hover:-translate-y-1 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#009A44] rounded-full filter blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-[20px] flex items-center justify-center text-[#4ADE80] mb-12 border border-white/20 shadow-inner">
                <Recycle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-white/70 text-sm font-bold uppercase tracking-widest mb-3">Limbah Organik Terolah</h3>
                <div className="flex items-baseline gap-4">
                  <span className="text-7xl md:text-9xl font-bold text-white tracking-tighter">12.4</span>
                  <span className="text-2xl md:text-3xl font-bold text-[#4ADE80]">Ribu Ton</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <p className="text-white/60 text-sm font-medium">Berdasarkan data timbangan logistik terverifikasi sejak 2024</p>
              <div className="flex items-center gap-2 text-[#4ADE80] bg-[#4ADE80]/10 px-4 py-2 rounded-full text-xs font-bold w-max">
                <TrendingUp className="w-4 h-4" /> Naik 24% dari Kuartal Lalu
              </div>
            </div>
          </div>

          {/* Card 2: CO2 */}
          <div className="bg-[#E6F5EC] border border-[#009A44]/20 rounded-[40px] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:-translate-y-1 transition-transform duration-500">
            <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center text-[#009A44] mb-12 shadow-sm">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-[#009A44] text-sm font-bold uppercase tracking-widest mb-3">Reduksi Emisi Metana</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl md:text-7xl font-bold text-[#009A44] tracking-tighter">375</span>
                <span className="font-bold text-[#009A44]/70 text-xl">Ton CO₂e</span>
              </div>
              <p className="text-sm text-land-ink/70 leading-relaxed font-medium">
                Setara dengan meniadakan emisi gas buang dari 80 mobil berbahan bakar fosil selama setahun penuh.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Pohon (Full Width) */}
        <div className="bg-white border border-[#E8E0D5] rounded-[40px] p-8 md:p-12 shadow-[0_8px_32px_rgba(44,57,48,0.03)] flex flex-col lg:flex-row items-center justify-between gap-10 mb-6 hover:-translate-y-1 transition-transform duration-500">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-24 h-24 bg-amber-50 rounded-[28px] border border-amber-100 flex items-center justify-center text-amber-500 shrink-0">
              <TreePine className="w-12 h-12" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2">Dampak Ekologis</div>
              <h3 className="font-land-heading text-3xl md:text-4xl font-bold text-land-ink mb-4">Setara 15.000+ Pohon Tumbuh</h3>
              <p className="text-land-muted md:text-lg max-w-2xl leading-relaxed">
                Kontribusi seluruh anggota platform dalam mengembalikan karbon ke dalam tanah secara sirkular menghasilkan dampak penyerapan karbon yang luar biasa.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center lg:items-end w-full lg:w-auto bg-[#F8FAF9] p-6 rounded-[24px]">
            <div className="flex -space-x-4 mb-4">
              <div className="w-16 h-16 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm"><img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" alt="Petani" className="w-full h-full object-cover" /></div>
              <div className="w-16 h-16 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="Petani" className="w-full h-full object-cover" /></div>
              <div className="w-16 h-16 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt="Petani" className="w-full h-full object-cover" /></div>
              <div className="w-16 h-16 rounded-full border-4 border-white bg-[#009A44] flex items-center justify-center text-white font-bold text-sm shadow-sm">+2.4k</div>
            </div>
            <p className="text-xs font-bold text-land-muted uppercase tracking-wider text-center lg:text-right">Mitra Aktif Bulan Ini</p>
          </div>
        </div>

        {/* Visual Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          
          {/* Distribusi Chart */}
          <div className="bg-white border border-[#E8E0D5] rounded-[40px] p-8 md:p-12 shadow-[0_8px_32px_rgba(44,57,48,0.03)] hover:-translate-y-1 transition-transform duration-500">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-land-heading text-2xl font-bold text-land-ink">Distribusi Limbah</h3>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-end text-sm font-bold">
                  <span className="text-land-ink flex items-center gap-3 text-base">
                    <div className="w-4 h-4 rounded-[6px] bg-[#009A44] shadow-sm" /> Kotoran Sapi
                  </span>
                  <span className="text-[#009A44] text-xl">50%</span>
                </div>
                <div className="w-full h-6 bg-land-warm rounded-full overflow-hidden p-1">
                  <div className="h-full bg-[#009A44] w-[50%] rounded-full shadow-sm" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-end text-sm font-bold">
                  <span className="text-land-ink flex items-center gap-3 text-base">
                    <div className="w-4 h-4 rounded-[6px] bg-amber-500 shadow-sm" /> Kotoran Ayam
                  </span>
                  <span className="text-amber-500 text-xl">30%</span>
                </div>
                <div className="w-full h-6 bg-land-warm rounded-full overflow-hidden p-1">
                  <div className="h-full bg-amber-500 w-[30%] rounded-full shadow-sm" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-end text-sm font-bold">
                  <span className="text-land-ink flex items-center gap-3 text-base">
                    <div className="w-4 h-4 rounded-[6px] bg-blue-500 shadow-sm" /> Kambing & Lainnya
                  </span>
                  <span className="text-blue-500 text-xl">20%</span>
                </div>
                <div className="w-full h-6 bg-land-warm rounded-full overflow-hidden p-1">
                  <div className="h-full bg-blue-500 w-[20%] rounded-full shadow-sm" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Laporan CSR Card */}
          <div className="bg-[#1C231F] rounded-[40px] p-8 md:p-12 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden hover:-translate-y-1 transition-transform duration-500">
            {/* Abstract green glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#009A44] rounded-full filter blur-[100px] opacity-30 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-8 border border-white/20">
                <Sprout className="w-10 h-10" />
              </div>
              <h3 className="font-land-heading text-3xl font-bold text-white mb-4">Unduh Laporan CSR</h3>
              <p className="text-white/60 mb-10 max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                Dapatkan laporan lengkap mengenai metodologi perhitungan jejak karbon, dampak ESG, dan tata kelola AgroWaste.
              </p>
              
              <button className="btn-clay-primary px-8 py-4 w-full sm:w-auto group">
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> Unduh PDF Laporan (4.2 MB)
              </button>
            </div>
          </div>
          
        </div>

        {/* Footer CTA */}
        <div className="py-20 text-center border-t border-[#E8E0D5]">
          <h2 className="text-3xl md:text-4xl font-land-heading font-bold text-land-ink mb-6">Jadilah Bagian dari Solusi</h2>
          <p className="text-land-muted text-lg max-w-2xl mx-auto mb-10">Ubah limbah menjadi nutrisi tanah yang berharga. Bergabunglah dengan platform sirkular AgroWaste hari ini dan berikan dampak positif bagi alam.</p>
          <Link href="/marketplace" className="btn-clay-primary px-10 py-4.5 text-lg flex items-center justify-center gap-3">
            Mulai Kontribusi <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
