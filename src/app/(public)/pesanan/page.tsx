import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Lacak Pesanan | AgroWaste",
};

export default function PesananPage() {
  return (
    <div className="flex-1 animate-fade-in bg-[#FFF8F5] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (Details & Status) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Header Card */}
            <div className="bg-white border border-[#E8E0D5] rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-[10px] font-bold text-[#555555] uppercase tracking-wider mb-1">ID Pesanan</div>
                  <div className="text-lg font-bold text-[#009A44]">AGW-882910</div>
                </div>
                <div className="px-3 py-1 bg-[#F59E0B] text-white text-[10px] font-bold tracking-wider uppercase rounded-full shadow-sm">
                  Sedang Dikirim
                </div>
              </div>
              
              <div className="flex justify-between border-t border-[#E8E0D5] pt-4">
                <div>
                  <div className="text-[10px] font-bold text-[#555555] mb-1">Tanggal</div>
                  <div className="text-xs font-bold text-[#111111]">24 Okt 2023</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-[#555555] mb-1">Total Bayar</div>
                  <div className="text-sm font-bold text-[#111111] font-tabular">Rp 1.250.000</div>
                </div>
              </div>
            </div>

            {/* Status Pengiriman */}
            <div className="bg-white border border-[#E8E0D5] rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#111111] mb-8">Status Pengiriman</h2>
              
              <div className="relative pl-8 space-y-8">
                {/* Connecting Line */}
                <div className="absolute left-3 top-2 bottom-6 w-0.5 bg-[#E8E0D5]"></div>
                <div className="absolute left-3 top-2 h-[60%] w-0.5 bg-[#009A44]"></div>
                
                {/* Step 1 */}
                <div className="relative">
                  <div className="absolute -left-[38px] top-0 w-6 h-6 rounded-full bg-[#009A44] flex items-center justify-center text-white ring-4 ring-white">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-sm font-bold text-[#111111]">Pesanan Dibuat</h4>
                  <p className="text-[10px] text-[#555555]">24 Okt, 09:00 AM</p>
                </div>
                
                {/* Step 2 */}
                <div className="relative">
                  <div className="absolute -left-[38px] top-0 w-6 h-6 rounded-full bg-[#009A44] flex items-center justify-center text-white ring-4 ring-white">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-sm font-bold text-[#111111]">Pembayaran Dikonfirmasi</h4>
                  <p className="text-[10px] text-[#555555]">24 Okt, 09:15 AM</p>
                </div>
                
                {/* Step 3 */}
                <div className="relative">
                  <div className="absolute -left-[38px] top-0 w-6 h-6 rounded-full bg-[#009A44] flex items-center justify-center text-white ring-4 ring-white">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-sm font-bold text-[#111111]">Pesanan Dijemput</h4>
                  <p className="text-[10px] text-[#555555]">24 Okt, 11:30 AM</p>
                </div>
                
                {/* Step 4: Active */}
                <div className="relative">
                  <div className="absolute -left-[42px] top-0 w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-white ring-4 ring-[#E6F5EC] shadow-sm z-10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                  </div>
                  <h4 className="text-sm font-bold text-[#10B981]">Sedang Dikirim</h4>
                  <p className="text-[10px] text-[#555555]">Sedang menuju lokasi Anda</p>
                </div>
                
                {/* Step 5: Pending */}
                <div className="relative opacity-50">
                  <div className="absolute -left-[38px] top-0 w-6 h-6 rounded-full bg-[#E8E0D5] flex items-center justify-center text-[#555555] ring-4 ring-white">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                  </div>
                  <h4 className="text-sm font-bold text-[#111111]">Terkirim</h4>
                  <p className="text-[10px] text-[#555555]">Estimasi tiba hari ini</p>
                </div>
              </div>
            </div>

            {/* Courier Card */}
            <div className="bg-[#F5F1E8] border border-[#E8E0D5] rounded-3xl p-5 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden shrink-0 border border-white shadow-sm">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" alt="Kurir" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#111111] text-sm">Pak Agus</h4>
                  <p className="text-[10px] text-[#555555] mb-1">Mitra Logistik</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-white border border-[#E8E0D5] rounded text-[10px] font-bold text-[#111111]">B 1234 ABC</span>
                    <span className="flex items-center gap-0.5 text-[10px] font-bold text-[#F59E0B]">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      4.9
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-white text-[#009A44] border border-[#E8E0D5] flex items-center justify-center hover:bg-[#E6F5EC] transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
              </button>
            </div>
            
          </div>

          {/* Right Column (Map) */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-[#E8E0D5] rounded-3xl overflow-hidden shadow-sm h-[600px] relative">
              
              {/* Fake Map Background */}
              <div className="absolute inset-0 bg-[#E5E3DF]">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="Peta" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
                
                {/* SVG Route Lines & Nodes */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M70,30 Q65,50 60,70" fill="none" stroke="#3B82F6" strokeWidth="0.8" strokeDasharray="2 1" />
                </svg>
                
                {/* User Location */}
                <div className="absolute bottom-[25%] left-[58%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-white px-2 py-1 rounded shadow-md text-[8px] font-bold text-[#111111] mb-1 whitespace-nowrap">LOKASI SAYA</div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-sm"></div>
                  </div>
                </div>

                {/* Courier Location */}
                <div className="absolute top-[35%] right-[32%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-white border border-[#009A44] px-3 py-1.5 rounded-full shadow-md text-[10px] font-bold text-[#009A44] mb-2 flex items-center gap-1.5 whitespace-nowrap">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                    POSISI KURIR
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#009A44] border-2 border-white shadow-md shadow-[#009A44]/50"></div>
                </div>
                
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-[#555555] hover:text-[#111111] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </button>
                <button className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-[#555555] hover:text-[#111111] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"></path></svg>
                </button>
                <button className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-[#555555] hover:text-[#111111] transition-colors mt-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </button>
              </div>

              {/* Lacak Pengiriman Overlay Card */}
              <div className="absolute bottom-6 right-6 w-80 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-[#009A44] text-xs uppercase tracking-wider">Lacak Pengiriman</h3>
                  <button className="text-[#555555] hover:text-[#111111]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                  </button>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 items-start">
                    <svg className="w-5 h-5 text-[#009A44] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <div>
                      <div className="text-[10px] font-bold text-[#555555] uppercase tracking-wider mb-0.5">Lokasi Saat Ini</div>
                      <div className="text-sm font-bold text-[#111111]">Hub Logistik Karawang, Jabar</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 items-start">
                    <svg className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                      <div className="text-[10px] font-bold text-[#555555] uppercase tracking-wider mb-0.5">Estimasi Tiba</div>
                      <div className="text-lg font-bold text-[#F59E0B]">45 Menit Lagi</div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 bg-[#009A44] hover:bg-[#008139] text-white rounded-xl font-bold transition-colors shadow-md shadow-[#009A44]/20 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Hubungi Kurir
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Kontribusi Banner */}
        <div className="mt-8 bg-[#E6F5EC] border border-[#009A44]/20 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 bg-[#009A44] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[#009A44]/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#009A44] mb-2">Kontribusi Keberlanjutan</h2>
              <p className="text-sm text-[#555555] max-w-lg leading-relaxed">
                Dengan membeli limbah organik ini untuk diolah kembali, Anda telah berkontribusi mengurangi emisi karbon dari limbah yang membusuk di TPA.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl px-8 py-6 text-center border border-[#E8E0D5] shadow-sm relative z-10 min-w-[200px]">
            <div className="text-[10px] font-bold text-[#555555] uppercase tracking-widest mb-2">Reduksi CO2</div>
            <div className="text-5xl font-bold text-[#009A44] tracking-tighter mb-1">12.4</div>
            <div className="text-xs font-bold text-[#111111]">Kilogram</div>
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/60 to-transparent pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
}
