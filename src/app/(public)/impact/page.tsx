import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Dampak Lingkungan | AgroWaste",
};

export default function ImpactPage() {
  return (
    <div className="flex-1 animate-fade-in bg-[#FFF8F5] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 bg-[#E6F5EC] text-[#009A44] text-[10px] font-bold tracking-widest uppercase rounded-full w-max mb-6">
              Dampak Komunitas 2024
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#009A44] leading-tight mb-4 max-w-sm">
              Dampak Nyata<br />untuk Bumi Kita
            </h1>
            <p className="text-[#555555] mb-8 max-w-md leading-relaxed text-sm">
              Pantau kontribusi kolektif komunitas AgroWaste dalam mengurangi emisi karbon dan mengelola limbah ternak secara berkelanjutan.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/marketplace" className="px-6 py-3.5 bg-[#00662D] hover:bg-[#005224] text-white rounded-xl font-bold transition-colors shadow-md shadow-[#00662D]/20">
                Mulai Kontribusi Sekarang
              </Link>
              <button className="px-6 py-3.5 bg-transparent border border-transparent hover:bg-white rounded-xl text-[#009A44] font-bold transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Laporan Dampak
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#E6F5EC] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#009A44]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" /></svg>
              </div>
              <div className="text-4xl font-bold text-[#009A44] mb-2 tracking-tighter">12.4k</div>
              <div className="text-xs text-[#555555] font-semibold">Ton Limbah Terproses</div>
            </div>
            
            <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </div>
              <div className="text-4xl font-bold text-blue-500 mb-2 tracking-tighter">375.2</div>
              <div className="text-xs text-[#555555] font-semibold">Ton CO2 Berkurang</div>
            </div>
          </div>
          
        </div>

        {/* Analytics Section */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-end gap-4 border-b border-[#E8E0D5] pb-6">
          <div>
            <h2 className="text-xl font-bold text-[#111111]">Analisis Keberlanjutan</h2>
            <p className="text-xs text-[#555555]">Visualisasi data limbah real-time dari seluruh jaringan mitra AgroWaste.</p>
          </div>
          <div className="flex bg-[#E8E0D5]/50 p-1 rounded-xl">
            <button className="px-4 py-1.5 bg-white text-[#111111] text-xs font-bold rounded-lg shadow-sm">Bulanan</button>
            <button className="px-4 py-1.5 text-[#555555] hover:text-[#111111] text-xs font-bold rounded-lg transition-colors">Tahunan</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Bar Chart */}
          <div className="lg:col-span-2 bg-white border border-[#E8E0D5] rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-bold text-[#111111] text-sm">Tren Reduksi Emisi Bulanan</h3>
              <div className="text-xs font-bold text-[#009A44] flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                +12% per Bulan
              </div>
            </div>
            
            <div className="h-48 flex items-end justify-between gap-2 px-2">
              <div className="w-full max-w-[40px] flex flex-col items-center gap-3">
                <div className="w-full bg-[#E6F5EC] rounded-t-lg h-20 transition-all duration-500 hover:bg-[#009A44]"></div>
                <div className="text-[10px] text-[#555555] font-bold">Jan</div>
              </div>
              <div className="w-full max-w-[40px] flex flex-col items-center gap-3">
                <div className="w-full bg-[#E6F5EC] rounded-t-lg h-24 transition-all duration-500 hover:bg-[#009A44]"></div>
                <div className="text-[10px] text-[#555555] font-bold">Feb</div>
              </div>
              <div className="w-full max-w-[40px] flex flex-col items-center gap-3">
                <div className="w-full bg-[#E6F5EC] rounded-t-lg h-22 transition-all duration-500 hover:bg-[#009A44]"></div>
                <div className="text-[10px] text-[#555555] font-bold">Mar</div>
              </div>
              <div className="w-full max-w-[40px] flex flex-col items-center gap-3">
                <div className="w-full bg-[#E6F5EC] rounded-t-lg h-28 transition-all duration-500 hover:bg-[#009A44]"></div>
                <div className="text-[10px] text-[#555555] font-bold">Apr</div>
              </div>
              <div className="w-full max-w-[40px] flex flex-col items-center gap-3">
                <div className="w-full bg-[#E6F5EC] rounded-t-lg h-32 transition-all duration-500 hover:bg-[#009A44]"></div>
                <div className="text-[10px] text-[#555555] font-bold">Mei</div>
              </div>
              <div className="w-full max-w-[40px] flex flex-col items-center gap-3">
                <div className="w-full bg-[#009A44] rounded-t-lg h-40 shadow-md shadow-[#009A44]/20"></div>
                <div className="text-[10px] text-[#111111] font-bold">Jun</div>
              </div>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="lg:col-span-1 bg-white border border-[#E8E0D5] rounded-3xl p-6 md:p-8 shadow-sm flex flex-col items-center">
            <h3 className="font-bold text-[#111111] text-sm mb-8 w-full text-left">Distribusi Jenis Limbah</h3>
            
            <div className="relative w-40 h-40 mb-8">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E8E0D5" strokeWidth="12" />
                {/* Sapi 50% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="12" strokeDasharray="125.6 125.6" strokeDashoffset="0" className="transition-all duration-1000" />
                {/* Ayam 30% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F59E0B" strokeWidth="12" strokeDasharray="75.4 175.9" strokeDashoffset="-125.6" className="transition-all duration-1000" />
                {/* Kambing 20% */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10B981" strokeWidth="12" strokeDasharray="50.2 201.1" strokeDashoffset="-201" className="transition-all duration-1000" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[#009A44] text-xs font-bold">100%</span>
                <span className="text-[9px] text-[#555555] font-bold uppercase tracking-wider">Terlacak</span>
              </div>
            </div>
            
            <div className="w-full space-y-3">
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
                  <span className="text-[#555555]">Sapi</span>
                </div>
                <span className="font-bold text-[#111111]">50%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></div>
                  <span className="text-[#555555]">Ayam</span>
                </div>
                <span className="font-bold text-[#111111]">30%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></div>
                  <span className="text-[#555555]">Kambing</span>
                </div>
                <span className="font-bold text-[#111111]">20%</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* SDG Contribution */}
          <div>
            <h3 className="text-sm font-bold text-[#111111] mb-4">Kontribusi SDG</h3>
            
            <div className="space-y-4">
              <div className="bg-white border border-[#E8E0D5] rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#BF8B2E] text-white flex items-center justify-center font-bold text-lg rounded-md shrink-0 shadow-sm">
                    12
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111111] text-xs">SDG 12: Konsumsi & Produksi</h4>
                    <p className="text-[10px] text-[#555555]">Bertanggung Jawab</p>
                  </div>
                </div>
                <div>
                  <div className="w-full h-2 bg-[#E8E0D5] rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-[#009A44] w-[78%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="text-[#555555]">Progres Tahunan</span>
                    <span className="text-[#009A44]">78% Tercapai</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-[#E8E0D5] rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#3F7E44] text-white flex items-center justify-center font-bold text-lg rounded-md shrink-0 shadow-sm">
                    13
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111111] text-xs">SDG 13: Penanganan Iklim</h4>
                    <p className="text-[10px] text-[#555555]">Aksi Perubahan Iklim</p>
                  </div>
                </div>
                <div>
                  <div className="w-full h-2 bg-[#E8E0D5] rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-[#009A44] w-[65%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="text-[#555555]">Progres Tahunan</span>
                    <span className="text-[#009A44]">65% Tercapai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Community Card */}
          <div className="bg-[#00662D] rounded-3xl p-8 md:p-12 text-center text-white shadow-lg relative overflow-hidden flex flex-col justify-center">
            {/* Background Trees Silhouette */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
              <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 3.8L16.2 10H14v8h-4v-8H7.8L12 5.8z"/></svg>
            </div>
            
            <div className="relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-80">Dampak Komunitas</div>
              <div className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 relative inline-block">
                15.000+
                <div className="absolute inset-0 flex justify-center items-center opacity-20 -z-10 text-8xl md:text-9xl -translate-y-4 font-black">🌲</div>
              </div>
              <p className="text-sm md:text-base opacity-90 max-w-sm mx-auto mb-8 leading-relaxed">
                Reduksi karbon yang kita lakukan setara dengan menanam lebih dari 15.000 pohon yang tumbuh selama 10 tahun.
              </p>
              
              <div className="flex flex-col items-center">
                <div className="flex -space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#00662D] overflow-hidden bg-gray-200"><img src="https://ui-avatars.com/api/?name=User+A&background=random" className="w-full h-full" alt="avatar" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#00662D] overflow-hidden bg-gray-200"><img src="https://ui-avatars.com/api/?name=User+B&background=random" className="w-full h-full" alt="avatar" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#00662D] overflow-hidden bg-gray-200"><img src="https://ui-avatars.com/api/?name=User+C&background=random" className="w-full h-full" alt="avatar" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#00662D] bg-[#009A44] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">+2k</div>
                </div>
                <div className="text-[10px] font-bold opacity-80">Bergabunglah dengan 2,400+ pahlawan lingkungan lainnya</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer CTA */}
      <div className="mt-20 pt-20 pb-12 bg-white text-center px-6">
        <h2 className="text-3xl font-bold text-[#111111] mb-4">Siap Untuk Menjadi Bagian dari Solusi?</h2>
        <p className="text-[#555555] text-sm mb-8">Ubah limbah menjadi nilai tambah. Bergabunglah dengan platform sirkular AgroWaste hari ini.</p>
        <Link href="/marketplace" className="inline-block px-8 py-4 bg-[#00662D] hover:bg-[#005224] text-white rounded-xl font-bold transition-colors shadow-lg shadow-[#00662D]/20">
          Mulai Kontribusi Sekarang
        </Link>
      </div>

    </div>
  );
}
