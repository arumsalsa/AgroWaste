"use client";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-seller-textprimary mb-1">Analitik Penjualan & Dampak</h2>
          <p className="text-sm text-seller-textsecondary">Lacak performa bisnis limbah pertanian Anda secara real-time.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-seller-hairline rounded-xl bg-seller-warmbg text-sm font-semibold text-seller-textsecondary hover:bg-[#EAE6E1] transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          Filter: 30 Hari Terakhir
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Revenue */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-seller-primary-light text-seller-primary flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="text-xs font-bold text-seller-semgreen flex items-center">
              +12.5% <svg className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-seller-textsecondary block mb-1">Total Pendapatan</span>
            <h3 className="text-xl font-bold text-seller-textprimary font-tabular">Rp 45.280.000</h3>
          </div>
        </div>

        {/* Volume of Waste Sold */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </div>
            <span className="text-xs font-bold text-seller-semgreen flex items-center">
              +8.2% <svg className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-seller-textsecondary block mb-1">Volume Limbah Terjual</span>
            <h3 className="text-xl font-bold text-seller-textprimary font-tabular">124,5 Ton</h3>
          </div>
        </div>

        {/* CO2eq Offset */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-seller-primary-light text-seller-primary flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <span className="text-xs font-bold text-seller-semgreen flex items-center">
              +15.0% <svg className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-seller-textsecondary block mb-1">Pengurangan CO2eq</span>
            <h3 className="text-xl font-bold text-seller-textprimary font-tabular">3,820 kg</h3>
          </div>
        </div>

        {/* Active Buyers */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <span className="text-xs font-bold text-seller-semgreen flex items-center">
              +4 <svg className="w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-seller-textsecondary block mb-1">Pembeli Aktif</span>
            <h3 className="text-xl font-bold text-seller-textprimary font-tabular">56 Klien</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Trend Chart */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl lg:col-span-2">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-lg font-bold text-seller-textprimary">Tren Pendapatan</h3>
              <p className="text-sm text-seller-textsecondary">Penghasilan harian dalam 30 hari terakhir</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-seller-textprimary">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-seller-primary"></span>
                Saat Ini
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-seller-hairline"></span>
                Sebelumnya
              </div>
            </div>
          </div>
          
          {/* Mock Line Chart */}
          <div className="h-48 relative border-b border-l border-seller-hairline/50">
            {/* Grid Lines */}
            <div className="absolute top-0 left-0 w-full border-t border-seller-hairline/50"></div>
            <div className="absolute top-1/3 left-0 w-full border-t border-seller-hairline/50"></div>
            <div className="absolute top-2/3 left-0 w-full border-t border-seller-hairline/50"></div>
            
            {/* SVG Line Mock */}
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M 0 80 Q 10 70 20 60 T 40 80 T 60 20 T 70 80 T 85 20 T 95 80 T 100 30" fill="none" stroke="#3F4F44" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
            
            {/* X-Axis labels */}
            <div className="absolute -bottom-6 left-0 w-full flex justify-between text-[10px] font-bold text-seller-textsecondary">
              <span>Minggu 1</span>
              <span>Minggu 2</span>
              <span>Minggu 3</span>
              <span>Minggu 4</span>
            </div>
          </div>
        </div>

        {/* Waste Categories Sold */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-seller-textprimary mb-6">Kategori Limbah Terjual</h3>
          
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs font-bold text-seller-textprimary mb-1.5">
                <span>Sapi Manure</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-seller-warmbg h-2 rounded-full overflow-hidden">
                <div className="bg-seller-primary h-full rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-seller-textprimary mb-1.5">
                <span>Kambing Manure</span>
                <span>30%</span>
              </div>
              <div className="w-full bg-seller-warmbg h-2 rounded-full overflow-hidden">
                <div className="bg-orange-400 h-full rounded-full" style={{width: '30%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-seller-textprimary mb-1.5">
                <span>Kotoran Unggas</span>
                <span>15%</span>
              </div>
              <div className="w-full bg-seller-warmbg h-2 rounded-full overflow-hidden">
                <div className="bg-blue-400 h-full rounded-full" style={{width: '15%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-seller-textprimary mb-1.5">
                <span>Pupuk Cair</span>
                <span>10%</span>
              </div>
              <div className="w-full bg-seller-warmbg h-2 rounded-full overflow-hidden">
                <div className="bg-purple-400 h-full rounded-full" style={{width: '10%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Buyer Distribution */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-seller-textprimary mb-6">Distribusi Pembeli</h3>
          
          <div className="flex flex-col items-center justify-center pt-4">
            {/* Doughnut Chart Mock */}
            <div className="relative w-40 h-40 mb-6">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3B82F6" strokeWidth="6" strokeDasharray="35 65" strokeDashoffset="25"></circle>
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3F4F44" strokeWidth="6" strokeDasharray="65 35" strokeDashoffset="-10"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-seller-textprimary">100%</span>
                <span className="text-[10px] text-seller-textsecondary">Total</span>
              </div>
            </div>
            
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-seller-primary"></span>
                  <span className="text-xs font-bold text-seller-textprimary">Koperasi</span>
                </div>
                <span className="text-xs text-seller-textsecondary">65% dari total</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-blue-500"></span>
                  <span className="text-xs font-bold text-seller-textprimary">Petani Perorangan</span>
                </div>
                <span className="text-xs text-seller-textsecondary">35% dari total</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rekomendasi Cerdas */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-seller-textprimary">Rekomendasi Cerdas</h3>
            <svg className="w-5 h-5 text-seller-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" /></svg>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-seller-hairline bg-seller-primary-light/50 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-seller-primary/10 text-seller-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-seller-textprimary mb-1">Tren Pasar Lokal</h4>
                <p className="text-xs text-seller-textsecondary leading-relaxed">Permintaan untuk Liquid Manure (Pupuk Cair Organik) naik 15% di wilayah Anda minggu ini. Pertimbangkan untuk memprioritaskan stok kategori ini.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-seller-hairline bg-[#FDF9F0] flex gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-seller-textprimary mb-1">Optimasi Pengiriman</h4>
                <p className="text-xs text-seller-textsecondary leading-relaxed">Gabungkan pesanan untuk 3 pembeli di area 'Subang Tengah' besok untuk menghemat biaya logistik hingga 20%.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-seller-hairline bg-blue-50 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-seller-textprimary mb-1">Peluang Badge Baru</h4>
                <p className="text-xs text-seller-textsecondary leading-relaxed">Anda hanya butuh 50kg lagi untuk mendapatkan badge <span className="font-bold text-seller-textprimary">'Carbon Hero Silver'</span>. Tetap semangat!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
