"use client";

export default function BadgesPage() {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-seller-textprimary mb-1">Galeri Lencana Dampak</h2>
        <p className="text-sm text-seller-textsecondary">Pantau kontribusimu untuk ekonomi sirkular. Dapatkan lencana dengan mengolah limbah, memperbaiki tanah, dan mengurangi emisi karbon.</p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-seller-primary/5 rounded-bl-full -mr-4 -mt-4"></div>
          <div>
            <div className="text-seller-primary mb-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">TOTAL LIMBAH TERSELAMATKAN</span>
            <h3 className="text-2xl font-bold text-seller-textprimary font-tabular">12,450 kg</h3>
          </div>
        </div>

        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -mr-4 -mt-4"></div>
          <div>
            <div className="text-blue-500 mb-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">SKOR KESEHATAN TANAH</span>
            <h3 className="text-2xl font-bold text-seller-textprimary font-tabular">94/100</h3>
          </div>
        </div>

        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-amber-500/5 rounded-bl-full -mr-4 -mt-4"></div>
          <div>
            <div className="text-amber-500 mb-3 font-bold text-xl flex items-center">
              CO<sub className="text-xs">2</sub>
            </div>
            <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">PENGURANGAN KARBON</span>
            <h3 className="text-2xl font-bold text-seller-textprimary font-tabular">4,2 Ton</h3>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Reforest Hero */}
        <div className="bg-seller-surfacewhite border border-seller-hairline rounded-2xl p-6 text-center flex flex-col items-center">
          <div className="relative w-32 h-32 mb-6">
            {/* Mock Badge Graphic */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-seller-primary-light to-seller-primary flex items-center justify-center border-4 border-white shadow-lg relative">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
            </div>
            {/* Tiny Badge Indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center border-2 border-white shadow-sm">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-seller-textprimary">Pahlawan Reboisasi</h3>
          <span className="text-sm text-seller-textsecondary block mb-6">Tingkat: Penjaga Perak</span>

          <div className="w-full text-left mb-6">
            <div className="flex justify-between text-[10px] font-bold text-seller-textprimary mb-2">
              <span>850 kg / 1,000 kg</span>
              <span className="text-seller-semgreen">85%</span>
            </div>
            <div className="w-full bg-seller-warmbg h-1.5 rounded-full overflow-hidden mb-2">
              <div className="bg-seller-semgreen h-full rounded-full" style={{width: '85%'}}></div>
            </div>
            <p className="text-[10px] text-seller-textsecondary text-center">150kg limbah lagi menuju Emas Elite</p>
          </div>

          <button className="flex items-center justify-center gap-2 text-seller-semgreen font-bold text-xs hover:text-seller-primary transition-colors w-full py-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            Bagikan Lencana
          </button>
        </div>

        {/* Soil Builder */}
        <div className="bg-seller-surfacewhite border border-seller-hairline rounded-2xl p-6 text-center flex flex-col items-center">
          <div className="relative w-32 h-32 mb-6">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-blue-600 flex items-center justify-center border-4 border-white shadow-lg relative">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center border-2 border-white shadow-sm">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-seller-textprimary">Pembangun Tanah</h3>
          <span className="text-sm text-seller-textsecondary block mb-6">Tingkat: Perajut Bumi</span>

          <div className="w-full text-left mb-6">
            <div className="flex justify-between text-[10px] font-bold text-seller-textprimary mb-2">
              <span>420 pts / 500 pts</span>
              <span className="text-blue-500">84%</span>
            </div>
            <div className="w-full bg-seller-warmbg h-1.5 rounded-full overflow-hidden mb-2">
              <div className="bg-blue-500 h-full rounded-full" style={{width: '84%'}}></div>
            </div>
            <p className="text-[10px] text-seller-textsecondary text-center">80 poin lagi menuju Master Pengolah</p>
          </div>

          <button className="flex items-center justify-center gap-2 text-blue-500 font-bold text-xs hover:text-blue-700 transition-colors w-full py-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            Bagikan Lencana
          </button>
        </div>

        {/* Carbon Warrior */}
        <div className="bg-seller-surfacewhite border border-seller-hairline rounded-2xl p-6 text-center flex flex-col items-center">
          <div className="relative w-32 h-32 mb-6">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border-4 border-white shadow-lg relative">
              <div className="text-amber-500 font-bold text-3xl">CO<sub className="text-lg">2</sub></div>
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center border-2 border-white shadow-sm">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-seller-textprimary">Pejuang Karbon</h3>
          <span className="text-sm text-seller-textsecondary block mb-6">Tingkat: Pengejar Angin</span>

          <div className="w-full text-left mb-6">
            <div className="flex justify-between text-[10px] font-bold text-seller-textprimary mb-2">
              <span>1.2 T / 2.0 T</span>
              <span className="text-amber-500">60%</span>
            </div>
            <div className="w-full bg-seller-warmbg h-1.5 rounded-full overflow-hidden mb-2">
              <div className="bg-amber-500 h-full rounded-full" style={{width: '60%'}}></div>
            </div>
            <p className="text-[10px] text-seller-textsecondary text-center">0,8 T lagi menuju Kapten Net Zero</p>
          </div>

          <button className="flex items-center justify-center gap-2 text-amber-500 font-bold text-xs hover:text-amber-700 transition-colors w-full py-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            Bagikan Lencana
          </button>
        </div>

        {/* Waste Alchemist (Locked) */}
        <div className="bg-[#F9F8F6] border border-dashed border-seller-hairline rounded-2xl p-6 text-center flex flex-col items-center justify-center opacity-80">
          <div className="w-24 h-24 rounded-full bg-[#EAE6E1] flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-seller-textsecondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-seller-textsecondary">Ahli Pengolah Limbah</h3>
          <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-4">Level Terkunci</span>
          <p className="text-xs text-seller-textsecondary max-w-[200px] leading-relaxed">
            Olah 5 ton limbah organik untuk membuka status ini.
          </p>
        </div>

      </div>
    </div>
  );
}
