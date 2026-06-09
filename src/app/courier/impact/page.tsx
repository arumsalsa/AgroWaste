"use client";

import React from "react";

export default function CourierImpactTracker() {
  return (
    <div className="space-y-8 animate-fade-in pb-20">
      
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-courier-primary mb-2">Dampak Lingkungan</h2>
        <p className="text-sm text-courier-textsecondary">Kontribusi kamu dalam mendukung pertanian berkelanjutan melalui logistik limbah.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CO2 Reduced */}
        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-green-100/50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
            </div>
            <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-md uppercase tracking-wider">
              +12% dari bulan lalu
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-courier-textsecondary tracking-wider uppercase block mb-1">CO2 BERKURANG</span>
            <div className="text-4xl font-bold font-tabular text-courier-primary">1,420 <span className="text-xl">kg</span></div>
          </div>
        </div>

        {/* Green Distance */}
        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-[#F3DCC4] text-[#A66C37] rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6M5 3v4M3 5h4M6 17v4m-2-2h4"/></svg>
            </div>
            <span className="px-2.5 py-1 bg-[#F3DCC4] text-[#A66C37] text-[10px] font-bold rounded-md uppercase tracking-wider">
              Ramah Lingkungan
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-courier-textsecondary tracking-wider uppercase block mb-1">JARAK HIJAU</span>
            <div className="text-4xl font-bold font-tabular text-courier-primary">4,850 <span className="text-xl">km</span></div>
          </div>
        </div>

        {/* Badges Earned */}
        <div className="bg-courier-primary rounded-2xl p-6 shadow-md shadow-courier-primary/20 relative overflow-hidden flex flex-col justify-between text-white">
          <div className="absolute -right-10 -bottom-10 opacity-20">
            <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.1-13.8L6.4 12.7l1.4 1.4 3.1-3.1V18h2v-7.1l3.1 3.1 1.4-1.4-4.5-4.5z"/></svg>
          </div>
          <div className="relative z-10 mb-6">
            <span className="text-[10px] font-bold tracking-wider uppercase block mb-2 opacity-90">LENCANA DIRAIH</span>
            <div className="text-5xl font-bold font-tabular">12</div>
          </div>
          <div className="relative z-10 flex gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-4 h-4 text-[#F3DCC4]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Trend Chart Mockup */}
        <div className="lg:col-span-2 bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-bold text-courier-textprimary text-sm">Tren Dampak</h3>
              <p className="text-xs text-courier-textsecondary">Pengalihan Limbah Bulanan (Ton)</p>
            </div>
            <div className="relative">
              <select className="appearance-none bg-courier-warmbg border border-courier-hairline text-courier-textprimary text-xs font-bold rounded-lg pl-4 pr-8 py-2 outline-none focus:ring-1 focus:ring-courier-primary shadow-sm">
                <option>6 Bulan Terakhir</option>
                <option>Tahun Lalu</option>
              </select>
              <svg className="w-4 h-4 absolute right-2.5 top-2 text-courier-textsecondary pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
          
          {/* Chart Graphic Mock */}
          <div className="flex-1 min-h-[250px] flex items-end justify-between relative px-4 pb-8">
            <div className="absolute inset-0 border-b border-courier-hairline mb-8"></div>
            {/* Bars */}
            {[40, 60, 45, 80, 95, 110].map((h, i) => (
              <div key={i} className="w-12 bg-courier-warmbg relative group rounded-t-lg transition-all duration-300 hover:bg-courier-primary/20" style={{ height: `${h}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-courier-textprimary text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {h}T
                </div>
              </div>
            ))}
            
            {/* Line Plot Overlay */}
            <svg className="absolute inset-0 w-full h-full pb-8" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M 8 60 L 25 40 L 42 55 L 59 20 L 76 5 L 92 0" fill="none" stroke="#2F5A28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="8" cy="60" r="1.5" fill="#2F5A28" />
              <circle cx="25" cy="40" r="1.5" fill="#2F5A28" />
              <circle cx="42" cy="55" r="1.5" fill="#2F5A28" />
              <circle cx="59" cy="20" r="1.5" fill="#2F5A28" />
              <circle cx="76" cy="5" r="1.5" fill="#2F5A28" />
              <circle cx="92" cy="0" r="1.5" fill="#2F5A28" />
            </svg>
          </div>
          
          {/* X Axis */}
          <div className="flex justify-between px-4 text-[10px] font-bold text-courier-textsecondary mt-2">
            <span>JAN</span>
            <span>FEB</span>
            <span>MAR</span>
            <span>APR</span>
            <span>MEI</span>
            <span>JUN</span>
          </div>
        </div>

        {/* Green Badges */}
        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="font-bold text-courier-primary text-sm mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            Lencana Hijau
          </h3>

          <div className="space-y-3 flex-1 mb-6">
            {/* Badge 1 */}
            <div className="flex items-center gap-4 bg-courier-warmbg/50 border border-courier-hairline rounded-xl p-3">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-courier-textprimary">Pahlawan Limbah</h4>
                <p className="text-[10px] text-courier-textsecondary mt-0.5 leading-tight">Berhasil mengangkut lebih dari 10 ton limbah organik.</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-4 bg-courier-warmbg/50 border border-courier-hairline rounded-xl p-3">
              <div className="w-10 h-10 bg-[#F3DCC4] text-[#A66C37] rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-courier-textprimary">Penjaga Karbon</h4>
                <p className="text-[10px] text-courier-textsecondary mt-0.5 leading-tight">Menghemat 500kg CO2 dalam satu bulan.</p>
              </div>
            </div>

            {/* Badge 3 (Locked) */}
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-3 border-dashed opacity-70">
              <div className="w-10 h-10 bg-gray-200 text-gray-400 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500">Pelindung Bumi</h4>
                <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">Capai 10.000 km pengiriman ramah lingkungan untuk membuka.</p>
              </div>
            </div>
          </div>

          <button className="w-full py-2.5 bg-transparent border border-courier-primary/30 text-courier-primary hover:bg-courier-warmbg text-xs font-bold rounded-xl transition-colors">
            Lihat Galeri Pencapaian
          </button>
        </div>

      </div>

      {/* Insights Row */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-courier-primary">Wawasan Dampak Terkini</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex gap-4">
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-courier-textprimary text-sm mb-1">Setara dengan 45 Pohon Ditanam</h4>
              <p className="text-xs text-courier-textsecondary leading-relaxed">Pengurangan CO2 kamu tahun ini setara dengan manfaat menanam 45 pohon pinus dewasa selama 10 tahun.</p>
            </div>
          </div>

          <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex gap-4">
            <div className="w-12 h-12 bg-[#F3DCC4] text-[#A66C37] rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-courier-textprimary text-sm mb-1">12 Hektar Disuburkan</h4>
              <p className="text-xs text-courier-textsecondary leading-relaxed">Limbah yang kamu kirimkan telah diolah menjadi pupuk organik yang cukup untuk menyuburkan 12 hektar lahan pertanian berkelanjutan.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
