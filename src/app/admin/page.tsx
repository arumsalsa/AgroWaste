"use client";

import React from "react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-admin-textprimary mb-1">Ringkasan Platform</h2>
          <p className="text-sm text-admin-textsecondary">Metrik performa dan aktivitas ekosistem AgroWaste dalam 30 hari terakhir.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-admin-surfacewhite border border-admin-hairline text-admin-textsecondary text-sm font-bold rounded-xl hover:bg-admin-warmbg transition-colors shadow-sm">
            Unduh Laporan
          </button>
          <button className="px-4 py-2 bg-admin-primary text-white text-sm font-bold rounded-xl hover:bg-admin-primary-hover transition-colors shadow-md shadow-admin-primary/20">
            Kelola Pengguna
          </button>
        </div>
      </div>

      {/* Row 1: 4 Column KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* KPI 1 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline p-6 rounded-2xl flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-admin-primary-light text-admin-primary flex items-center justify-center group-hover:bg-admin-primary/20 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <span className="text-xs font-bold text-admin-semgreen bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              12%
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-1">Total Pengguna</span>
            <h3 className="text-2xl font-bold text-admin-textprimary font-tabular">24,892</h3>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline p-6 rounded-2xl flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-admin-primary-light text-admin-primary flex items-center justify-center group-hover:bg-admin-primary/20 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            </div>
            <span className="text-xs font-bold text-admin-semgreen bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              5%
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-1">Listing Aktif</span>
            <h3 className="text-2xl font-bold text-admin-textprimary font-tabular">1,402</h3>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline p-6 rounded-2xl flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-admin-primary-light text-admin-primary flex items-center justify-center group-hover:bg-admin-primary/20 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
            </div>
            <span className="text-xs font-bold text-admin-semred bg-red-50 px-2 py-1 rounded-lg flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              2%
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-1">Nilai Transaksi</span>
            <h3 className="text-2xl font-bold text-admin-textprimary font-tabular">IDR 4.2B</h3>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline p-6 rounded-2xl flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-admin-primary-light text-admin-primary flex items-center justify-center group-hover:bg-admin-primary/20 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </div>
            <span className="text-xs font-bold text-admin-semgreen bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              18%
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-1">Dampak Lingkungan</span>
            <h3 className="text-2xl font-bold text-admin-textprimary font-tabular">842.5 T</h3>
          </div>
        </div>
      </div>

      {/* Row 2: Bento Grid Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Bento: Platform Growth */}
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 lg:col-span-2 flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-bold text-admin-textprimary">Perkembangan Platform</h3>
              <p className="text-xs text-admin-textsecondary mt-1">Grafik pendaftaran seller baru vs pertumbuhan komoditas limbah.</p>
            </div>
            <button className="text-xs font-bold px-4 py-2 bg-admin-warmbg text-admin-textprimary rounded-xl flex items-center gap-2 hover:bg-admin-hairline transition-colors">
              6 Bulan Terakhir
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
          </div>

          {/* Mock Chart Graphics */}
          <div className="h-64 flex flex-col justify-between text-[10px] font-bold text-admin-textsecondary font-tabular pt-4 relative">
            <div className="w-full border-b border-dashed border-admin-hairline flex justify-between pb-2"><span>100%</span></div>
            <div className="w-full border-b border-dashed border-admin-hairline flex justify-between pb-2"><span>75%</span></div>
            <div className="w-full border-b border-dashed border-admin-hairline flex justify-between pb-2"><span>50%</span></div>
            <div className="w-full border-b border-dashed border-admin-hairline flex justify-between pb-2"><span>25%</span></div>
            <div className="w-full border-b border-admin-hairline flex justify-between pb-2"><span>0%</span></div>
            
            {/* Decorative Vector Chart Curve */}
            <div className="absolute inset-x-8 bottom-8 top-12 flex items-end">
              <svg className="w-full h-full text-admin-primary" viewBox="0 0 400 150" fill="none" preserveAspectRatio="none">
                <path d="M0,120 Q50,60 100,90 T200,40 T300,70 T400,20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
                <path d="M0,120 Q50,60 100,90 T200,40 T300,70 T400,20 L400,150 L0,150 Z" fill="url(#purple-grad)" opacity="0.1"/>
                <defs>
                  <linearGradient id="purple-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* X Axis Labels */}
            <div className="flex justify-between text-xs text-admin-textsecondary mt-3 px-6 uppercase tracking-wider">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span>
            </div>
          </div>
        </div>

        {/* Right Bento: Recent Activity */}
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-admin-textprimary">Aktivitas Terbaru</h3>
              <button className="text-xs font-bold text-admin-primary hover:underline">Lihat Semua</button>
            </div>

            {/* Vertical Activity Log Feed */}
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-admin-semgreen mt-1 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-admin-textprimary leading-snug">Budi Santoso <span className="font-normal text-admin-textsecondary">mengunggah listing: 500kg Sekam Padi</span></p>
                  <span className="text-xs text-admin-textsecondary font-tabular font-bold block">2 menit lalu</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-admin-semgreen mt-1 shrink-0"></div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-admin-textprimary leading-snug">Order #AW-8821 <span className="font-normal text-admin-textsecondary">telah diselesaikan.</span></p>
                  <span className="text-xs text-admin-textsecondary font-tabular font-bold block">1 jam lalu</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-admin-semamber mt-1 shrink-0"></div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-admin-textprimary leading-snug">Logistik Express <span className="font-normal text-admin-textsecondary">ditugaskan menjemput #AW-8825</span></p>
                  <span className="text-xs text-admin-textsecondary font-tabular font-bold block">3 jam lalu</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-admin-semred mt-1 shrink-0"></div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-admin-textprimary leading-snug">Sistem <span className="font-normal text-admin-textsecondary">mendeteksi latensi pada Payment Gateway API</span></p>
                  <span className="text-xs text-admin-textsecondary font-tabular font-bold block">5 jam lalu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Insight Box */}
          <div className="mt-8 p-5 bg-admin-primary-light border border-admin-primary/20 rounded-xl flex gap-3 items-start">
            <svg className="w-5 h-5 text-admin-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div className="text-xs text-admin-textsecondary leading-relaxed">
              <span className="font-bold text-admin-primary block mb-1">Wawasan Sistem</span>
              "Persetujuan listing 15% lebih lambat minggu ini. Disarankan menambah moderator pada antrean 'Peternak'."
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Server Health Statuses */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 flex items-center justify-between group transition-colors hover:border-admin-primary/20">
          <div>
            <span className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-1">Status Database</span>
            <div className="text-xl font-bold text-admin-semgreen">Sehat</div>
          </div>
          <div className="relative w-10 h-10 flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-admin-semgreen opacity-20 animate-radar"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-admin-semgreen"></span>
          </div>
        </div>

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 flex items-center justify-between group transition-colors hover:border-admin-primary/20">
          <div>
            <span className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-1">Beban Server</span>
            <div className="text-xl font-bold text-admin-textprimary font-tabular">24%</div>
          </div>
          <div className="flex items-end gap-1 h-8">
            <div className="w-2 bg-admin-primary h-3 rounded-sm opacity-60"></div>
            <div className="w-2 bg-admin-primary h-6 rounded-sm opacity-80"></div>
            <div className="w-2 bg-admin-primary h-4 rounded-sm opacity-50"></div>
            <div className="w-2 bg-admin-primary h-8 rounded-sm"></div>
          </div>
        </div>

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 flex items-center justify-between group transition-colors hover:border-admin-primary/20">
          <div>
            <span className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-1">Catatan Log Aktif</span>
            <div className="text-xl font-bold text-admin-textprimary font-tabular">1.2k/hr</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-admin-warmbg text-admin-textsecondary flex items-center justify-center group-hover:bg-admin-primary-light group-hover:text-admin-primary transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
