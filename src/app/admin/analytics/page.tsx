"use client";

import React from "react";

export default function AdminAnalytics() {
  return (
    <div className="space-y-6 animate-fade-in pb-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-admin-textprimary mb-1">Analitik Dampak Lingkungan</h2>
          <p className="text-sm text-admin-textsecondary">Pemantauan pengurangan limbah tani dan mitigasi karbon secara real-time.</p>
        </div>
        <button className="px-4 py-2 text-sm font-bold text-admin-primary bg-admin-surfacewhite border border-admin-hairline rounded-xl hover:bg-admin-warmbg flex items-center gap-2 transition-colors shadow-sm self-start">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          Unduh Laporan
        </button>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-admin-semgreen/10 text-admin-semgreen rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
            </div>
            <span className="text-[10px] font-bold text-admin-semgreen flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              +12%
            </span>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">TOTAL LIMBAH TERALIHKAN</span>
          <div className="text-2xl font-bold font-tabular text-admin-textprimary tracking-tight mb-1">1.248,5 <span className="text-lg font-medium">Ton</span></div>
          <p className="text-xs text-admin-textsecondary">Kumulatif TH2024</p>
        </div>

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-admin-primary-light text-admin-primary rounded-xl flex items-center justify-center font-bold text-xs tracking-tighter">
              CO₂
            </div>
            <span className="text-[10px] font-bold text-admin-semgreen flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              +8,4%
            </span>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">MITIGASI SETARA CO₂</span>
          <div className="text-2xl font-bold font-tabular text-admin-textprimary tracking-tight mb-1">342,1 <span className="text-lg font-medium">kgCO₂e</span></div>
          <p className="text-xs text-admin-textsecondary">30 Hari Terakhir</p>
        </div>

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-admin-semamber/10 text-admin-semamber rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <span className="text-[10px] font-bold text-admin-semgreen flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              +21
            </span>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">PRODUSEN AKTIF</span>
          <div className="text-2xl font-bold font-tabular text-admin-textprimary tracking-tight mb-1">412 <span className="text-lg font-medium">Peternak</span></div>
          <p className="text-xs text-admin-textsecondary">Jaringan Aktif</p>
        </div>

      </div>

      {/* Middle: Chart + Regional */}
      <div className="flex flex-col md:flex-row gap-6">

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 md:w-3/5 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-admin-textprimary">Distribusi Limbah berdasarkan Jenis</h3>
              <p className="text-sm text-admin-textsecondary">Limbah Padat vs. Limbah Cair</p>
            </div>
            <div className="shrink-0 px-3 py-1.5 text-xs font-bold text-admin-textsecondary bg-admin-warmbg border border-admin-hairline rounded-xl cursor-pointer hover:bg-admin-hairline whitespace-nowrap transition-colors">
              Kuartal Ini
            </div>
          </div>

          <div className="mt-8 w-full flex flex-col">
            <div className="w-full border-l border-b border-admin-hairline flex items-end justify-around pt-4 pb-0 px-2" style={{ height: "220px" }}>
              <div className="transition-opacity hover:opacity-70 bg-admin-primary rounded-t" style={{ width: "14%", maxWidth: "40px", height: "45%" }} />
              <div className="transition-opacity hover:opacity-70 bg-admin-primary rounded-t" style={{ width: "14%", maxWidth: "40px", height: "60%" }} />
              <div className="transition-opacity hover:opacity-70 bg-admin-primary rounded-t" style={{ width: "14%", maxWidth: "40px", height: "28%" }} />
              <div className="transition-opacity hover:opacity-70 bg-blue-400 rounded-t" style={{ width: "14%", maxWidth: "40px", height: "70%" }} />
              <div className="transition-opacity hover:opacity-70 bg-blue-400 rounded-t" style={{ width: "14%", maxWidth: "40px", height: "50%" }} />
              <div className="transition-opacity hover:opacity-70 bg-blue-400 rounded-t" style={{ width: "14%", maxWidth: "40px", height: "80%" }} />
            </div>
            <div className="flex justify-around w-full px-2 mt-3">
              {["JAN", "FEB", "MAR", "APR", "MEI", "JUN"].map((m) => (
                <div key={m} className="text-center text-[10px] font-bold text-admin-textsecondary tracking-wider" style={{ width: "14%" }}>{m}</div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-admin-primary" />
              <div>
                <div className="text-[10px] font-bold text-admin-textprimary">Limbah Cair</div>
                <div className="text-[10px] text-admin-textsecondary font-tabular">62,5% (780,3 T)</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <div>
                <div className="text-[10px] font-bold text-admin-textprimary">Limbah Padat</div>
                <div className="text-[10px] text-admin-textsecondary font-tabular">37,5% (468,2 T)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 md:w-2/5 flex flex-col">
          <h3 className="text-lg font-bold text-admin-textprimary mb-6">Pertumbuhan Regional</h3>

          <div className="space-y-5 flex-1">
            {[
              { name: "Jawa Barat",     pct: "+24,5%", w: "85%" },
              { name: "Jawa Tengah",    pct: "+18,2%", w: "60%" },
              { name: "Jawa Timur",     pct: "+12,1%", w: "45%" },
              { name: "Sumatera Utara", pct: "+5,4%",  w: "25%" },
            ].map(({ name, pct, w }) => (
              <div key={name}>
                <div className="flex justify-between text-[10px] font-bold mb-1.5">
                  <span className="text-admin-textsecondary">{name}</span>
                  <span className="text-admin-textprimary font-tabular">{pct}</span>
                </div>
                <div className="w-full bg-admin-warmbg h-2.5 rounded-full overflow-hidden">
                  <div className="bg-admin-semgreen h-full rounded-full" style={{ width: w }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-admin-primary-light border border-admin-primary/20 rounded-xl flex gap-3 items-start">
            <svg className="w-5 h-5 text-admin-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <p className="text-xs text-admin-textsecondary leading-relaxed">
              <span className="font-bold text-admin-primary block mb-1">Wawasan Regional</span>
              Jawa Barat tetap menjadi pusat logistik limbah cair, mewakili 42% total volume pengumpulan bulan ini.
            </p>
          </div>
        </div>

      </div>

      {/* SDG Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6">
          <div className="flex gap-3 items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-admin-semamber text-white flex items-center justify-center font-bold text-lg shrink-0">
              12
            </div>
            <div>
              <div className="text-xs font-bold text-admin-textsecondary mb-0.5">SDG Target 12.5</div>
              <div className="text-sm font-semibold text-admin-textprimary leading-snug">Mengurangi timbulan limbah secara substansial</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FEF3C7" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F59E0B" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.70)} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-admin-textprimary font-tabular">70%</div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider mb-0.5">TINGKAT DAUR ULANG</div>
                <div className="text-xl font-bold font-tabular text-admin-semamber">448,2 <span className="text-sm font-medium">Ton</span></div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider mb-0.5">TARGET 2025</div>
                <div className="text-lg font-bold font-tabular text-admin-textprimary">640,0 <span className="text-sm font-medium">Ton</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6">
          <div className="flex gap-3 items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-admin-textprimary text-white flex items-center justify-center font-bold text-lg shrink-0">
              13
            </div>
            <div>
              <div className="text-xs font-bold text-admin-textsecondary mb-0.5">SDG Target 13.1</div>
              <div className="text-sm font-semibold text-admin-textprimary leading-snug">Memperkuat ketahanan terhadap dampak iklim</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#D1FAE5" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10B981" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.45)} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-admin-textprimary font-tabular">45%</div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider mb-0.5">PENGURANGAN METANA</div>
                <div className="text-xl font-bold font-tabular text-admin-semgreen">12.402 <span className="text-sm font-medium">m³</span></div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider mb-0.5">TARGET TAHUNAN</div>
                <div className="text-lg font-bold font-tabular text-admin-textprimary">28.000 <span className="text-sm font-medium">m³</span></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="text-center text-[10px] font-bold text-admin-textsecondary tracking-wider">
        AgroWaste Impact Analytics Engine v4.2.0 — Diperbarui hari ini, 08:42 WIB
      </div>
    </div>
  );
}
