import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Tentang Kami | AgroWaste",
};

export default function AboutPage() {
  return (
    <div className="flex-1 animate-fade-in bg-[#FFF8F5] min-h-screen">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00662D] mb-6 max-w-2xl leading-tight">
          Membangun Masa Depan Pertanian Sirkular
        </h1>
        <p className="text-[#555555] max-w-xl mb-10 leading-relaxed text-sm">
          AgroWaste hadir untuk menjembatani kesenjangan antara limbah ternak dan kebutuhan pupuk organik, menciptakan ekosistem yang berkelanjutan bagi bumi kita.
        </p>
        <Link href="/marketplace" className="inline-flex items-center gap-2 px-6 py-3 bg-[#00662D] hover:bg-[#005224] text-white font-bold rounded-xl transition-colors shadow-md shadow-[#00662D]/20 mb-20">
          Bergabung Sekarang
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#E8E0D5]">
              <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=1200&q=80" alt="Peternakan AgroWaste" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#00662D] text-white p-5 rounded-2xl shadow-xl flex flex-col items-center border-4 border-[#FFF8F5]">
              <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
              <div className="text-[10px] font-bold text-center leading-tight">100% Organik<br/>Tervalidasi</div>
            </div>
          </div>

          {/* Misi Kami */}
          <div className="lg:w-1/2 lg:pl-10">
            <h2 className="text-2xl font-bold text-[#00662D] mb-4">Misi Kami</h2>
            <p className="text-[#555555] text-sm leading-relaxed mb-10">
              Kami percaya bahwa limbah bukanlah akhir, melainkan awal dari siklus baru yang berharga. AgroWaste memberdayakan peternak lokal untuk mengubah tantangan lingkungan menjadi peluang ekonomi melalui teknologi dan logistik cerdas.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#E6F5EC] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#111111] text-sm mb-1">Keberlanjutan</h3>
                  <p className="text-[#555555] text-xs leading-relaxed">Memastikan setiap kg limbah diolah menjadi nutrisi tanah berkualitas tinggi.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#E6F5EC] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#111111] text-sm mb-1">Transparansi via GIS</h3>
                  <p className="text-[#555555] text-xs leading-relaxed">Pelacakan real-time untuk memastikan keadilan dan efisiensi logistik.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#E6F5EC] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#111111] text-sm mb-1">Dampak Ekonomi</h3>
                  <p className="text-[#555555] text-xs leading-relaxed">Meningkatkan pendapatan peternak melalui monetisasi limbah ternak.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mengapa AgroWaste Ada */}
      <div className="bg-[#F5F1E8] py-20 border-y border-[#E8E0D5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#111111] mb-4">Mengapa AgroWaste Ada?</h2>
          <p className="text-[#555555] text-sm mb-12">Kami beroperasi dengan panduan tujuan pembangunan berkelanjutan global.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white border border-[#E8E0D5] rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#FFF4E5] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </div>
              <h3 className="font-bold text-[#111111] mb-3">SDG 12: Produksi & Konsumsi Bertanggung Jawab</h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Mengurangi limbah pangan dan pertanian secara signifikan melalui sistem manajemen limbah yang terintegrasi dan sirkular.
              </p>
            </div>
            
            <div className="bg-white border border-[#E8E0D5] rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#E6F5EC] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="font-bold text-[#111111] mb-3">SDG 13: Penanganan Perubahan Iklim</h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Meminimalisir emisi gas metana dari kotoran ternak yang tidak terkelola dengan mengubahnya menjadi pengganti pupuk kimia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Alur Kerja Sirkular */}
      <div className="py-20 bg-[#FFF8F5]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#111111] mb-16">Alur Kerja Sirkular Kami</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-[#E8E0D5] border-t-2 border-dashed border-[#E8E0D5] -z-10 -translate-y-12"></div>
            
            {/* Step 1 */}
            <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 w-full md:w-1/3 shadow-sm relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#00662D] text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-[#FFF8F5]">1</div>
              <div className="text-[#009A44] mb-4 mt-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 className="font-bold text-[#111111] mb-2 text-sm">Peternak (Pemasok)</h3>
              <p className="text-xs text-[#555555] leading-relaxed">Limbah ternak dikumpulkan secara terjadwal dari mitra peternak terverifikasi.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 w-full md:w-1/3 shadow-sm relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#00662D] text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-[#FFF8F5]">2</div>
              <div className="text-[#F59E0B] mb-4 mt-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              </div>
              <h3 className="font-bold text-[#111111] mb-2 text-sm">Logistik (Berbasis GIS)</h3>
              <p className="text-xs text-[#555555] leading-relaxed">Armada kami melacak pengiriman secara real-time untuk efisiensi rute dan biaya.</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 w-full md:w-1/3 shadow-sm relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#00662D] text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-[#FFF8F5]">3</div>
              <div className="text-blue-500 mb-4 mt-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </div>
              <h3 className="font-bold text-[#111111] mb-2 text-sm">Petani (Pupuk)</h3>
              <p className="text-xs text-[#555555] leading-relaxed">Pupuk organik berkualitas tinggi siap digunakan untuk meningkatkan kesuburan tanah.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dampak Nyata */}
      <div className="bg-[#1C1A18] py-20 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12">Dampak Nyata Bersama AgroWaste</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </div>
              <div className="text-4xl font-bold text-[#E6F5EC] tracking-tighter mb-2">12.4k+</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Ton Limbah Terproses</div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <div className="text-4xl font-bold text-[#FFF4E5] tracking-tighter mb-2">5.0k+</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Mitra Peternak</div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </div>
              <div className="text-4xl font-bold text-blue-100 tracking-tighter mb-2">375+</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Ton Emisi CO2 Berkurang</div>
            </div>
          </div>

          <p className="text-xs text-gray-400 italic max-w-sm mx-auto">
            "Setiap kontribusi kecil dari peternak adalah langkah besar bagi kesehatan planet kita."
            <br/><br/>
            <strong className="text-white not-italic">— Tim Pimpinan AgroWaste</strong>
          </p>
        </div>
      </div>

    </div>
  );
}
