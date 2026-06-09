"use client";

import React from "react";

export default function CourierDashboard() {
  return (
    <div className="space-y-8 animate-fade-in pb-20 relative">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-courier-primary mb-1">Halo, Pak Agus!</h2>
          <p className="text-sm text-courier-textsecondary">Siap untuk pengiriman pupuk hari ini?</p>
        </div>
        <div className="px-4 py-2 bg-courier-warmbg border border-courier-hairline rounded-lg text-sm font-bold text-courier-textprimary flex items-center gap-2 shadow-sm">
          <svg className="w-4 h-4 text-courier-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          Selasa, 24 Okt 2023
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-md relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-courier-textsecondary">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </span>
        <input type="text" placeholder="Cari ID pengiriman..." className="w-full pl-9 pr-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-courier-primary text-courier-textprimary" />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 relative flex flex-col justify-between hover:border-courier-primary/50 transition-colors shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-courier-warmbg text-courier-textsecondary flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
            </div>
            <span className="text-xs font-bold text-courier-textprimary flex items-center gap-1">+12% <svg className="w-3 h-3 text-courier-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></span>
          </div>
          <div>
            <span className="text-xs text-courier-textsecondary block mb-1">Total Pengiriman</span>
            <div className="text-4xl font-bold font-tabular text-courier-textprimary">142</div>
          </div>
        </div>

        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 relative flex flex-col justify-between hover:border-courier-primary/50 transition-colors shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-courier-primary/10 text-courier-primary flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <span className="text-xs font-bold text-courier-primary">98% Berhasil</span>
          </div>
          <div>
            <span className="text-xs text-courier-textsecondary block mb-1">Pengiriman Berhasil</span>
            <div className="text-4xl font-bold font-tabular text-courier-textprimary">138</div>
          </div>
        </div>

        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 relative flex flex-col justify-between hover:border-courier-primary/50 transition-colors shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-courier-warmbg text-courier-textsecondary flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
            </div>
            <span className="text-xs font-medium text-courier-textsecondary">4 Wilayah</span>
          </div>
          <div>
            <span className="text-xs text-courier-textsecondary block mb-1">Rute Aktif</span>
            <div className="text-4xl font-bold font-tabular text-courier-textprimary">05</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Tugas Hari Ini */}
        <div>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-xl font-bold text-courier-textprimary">Tugas Hari Ini</h3>
            <button className="text-xs font-bold text-courier-primary hover:underline">Lihat Semua</button>
          </div>
          <div className="space-y-4">
            {/* Task 1 */}
            <div className="bg-courier-surfacewhite border border-courier-hairline p-5 rounded-2xl flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-courier-textprimary">250kg Pupuk Organik Cair</h4>
                  <p className="text-xs font-medium text-courier-textsecondary mt-0.5">Lembang, Jawa Barat • <span className="text-courier-primary">Jemput: 14:00</span></p>
                </div>
              </div>
              <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">Dalam Perjalanan</span>
            </div>

            {/* Task 2 */}
            <div className="bg-courier-surfacewhite border border-courier-hairline p-5 rounded-2xl flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100/50 text-green-700 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-courier-textprimary">500kg Kompos Padat</h4>
                  <p className="text-xs font-medium text-courier-textsecondary mt-0.5">Sumedang, Jawa Barat • <span className="text-courier-semred font-bold">Penjemputan Mendesak</span></p>
                </div>
              </div>
              <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold">Menunggu</span>
            </div>

            {/* Task 3 */}
            <div className="bg-courier-surfacewhite border border-courier-hairline p-5 rounded-2xl flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-courier-textprimary">100kg Bio-Fermenter</h4>
                  <p className="text-xs font-medium text-courier-textsecondary mt-0.5">Cimahi Utara • <span className="text-courier-textsecondary">Jemput: 16:30</span></p>
                </div>
              </div>
              <span className="bg-courier-hairline text-courier-textsecondary px-3 py-1 rounded-full text-xs font-bold">Terjadwal</span>
            </div>
          </div>
        </div>

        {/* Visual Rute */}
        <div>
          <h3 className="text-xl font-bold text-courier-textprimary mb-4">Visual Rute</h3>
          <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div className="h-48 bg-gray-800 relative group cursor-pointer overflow-hidden flex-1">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Peta Rute" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
              {/* Overlay Green Tint & Route Mock */}
              <div className="absolute inset-0 bg-courier-primary/20 mix-blend-multiply"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <button className="px-4 py-2 bg-courier-primary text-white text-sm font-bold rounded-lg shadow-lg flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                  Buka Navigasi
                </button>
              </div>
            </div>
            <div className="p-5 flex justify-between items-center bg-courier-surfacewhite text-sm">
              <div>
                <span className="text-[10px] font-bold text-courier-textsecondary uppercase tracking-wider block mb-1">Estimasi Waktu</span>
                <span className="font-bold text-courier-textprimary font-tabular">4j 15m</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-courier-textsecondary uppercase tracking-wider block mb-1">Jarak Tempuh</span>
                <span className="font-bold text-courier-textprimary font-tabular">124.5 km</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-courier-primary text-white rounded-2xl shadow-xl shadow-courier-primary/30 flex items-center justify-center hover:-translate-y-1 transition-transform z-30">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
      </button>

    </div>
  );
}
