"use client";

import React, { useState, useEffect } from "react";
import { apiFetch } from "@/lib/api";
import { useToast } from "@/components/admin/Toast";

interface CategoryDist {
  category_name: string;
  total: string | number;
}

interface RegionalDist {
  provinsi: string;
  total: string | number;
}

interface AnalyticsData {
  total_waste_managed_kg: number;
  total_co2eq_reduced_kg: number;
  active_sellers_count: number;
  category_distribution: CategoryDist[];
  regional_distribution: RegionalDist[];
}

export default function AdminAnalytics() {
  const { showToast } = useToast();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const res = await apiFetch("/admin/analytics");
      if (res.ok) {
        const json = await res.json();
        setData(json.data);
      } else {
        showToast("Gagal mengambil data analitik.", "error");
      }
    } catch {
      showToast("Terjadi kesalahan koneksi saat memuat analitik.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const totalWasteTons = data ? data.total_waste_managed_kg / 1000 : 0;
  const totalCo2 = data ? data.total_co2eq_reduced_kg : 0;
  const activeSellers = data ? data.active_sellers_count : 0;

  const sdg12Target = 640; // 640 tons SDG 12 annual target
  const sdg12Pct = Math.min(Math.round((totalWasteTons / sdg12Target) * 100), 100);
  const sdg12DashOffset = 251.2 * (1 - sdg12Pct / 100);

  // methane reduction estimate: CO2 saved × 0.036 m³
  const methaneReduced = Math.round(totalCo2 * 0.036);
  const sdg13Target = 28000; // 28,000 m³ SDG 13 annual target
  const sdg13Pct = Math.min(Math.round((methaneReduced / sdg13Target) * 100), 100);
  const sdg13DashOffset = 251.2 * (1 - sdg13Pct / 100);

  const getCategoryLabel = (slug: string) => {
    switch (slug) {
      case "kotoran_padat":
        return "Limbah Padat";
      case "limbah_cair":
        return "Limbah Cair";
      case "sisa_pakan":
        return "Sisa Pakan";
      case "limbah_olahan":
        return "Limbah Olahan";
      default:
        return slug.replace("_", " ");
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-admin-textprimary mb-1">Analitik Dampak Lingkungan</h2>
          <p className="text-sm text-admin-textsecondary">Pemantauan pengurangan limbah tani dan mitigasi karbon secara real-time.</p>
        </div>
        <button onClick={fetchAnalytics} className="px-4 py-2 text-sm font-bold text-admin-primary bg-admin-surfacewhite border border-admin-hairline rounded-xl hover:bg-admin-warmbg flex items-center gap-2 transition-colors shadow-sm self-start">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18v3z"/></svg>
          Segarkan Data
        </button>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-admin-semgreen/10 text-admin-semgreen rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
            </div>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">TOTAL LIMBAH TERALIHKAN</span>
          <div className="text-2xl font-bold font-tabular text-admin-textprimary tracking-tight mb-1">
            {loading ? "..." : totalWasteTons.toLocaleString("id-ID", { maximumFractionDigits: 1 })} <span className="text-lg font-medium">Ton</span>
          </div>
          <p className="text-xs text-admin-textsecondary">Kumulatif Transaksi Selesai</p>
        </div>

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-admin-primary-light text-admin-primary rounded-xl flex items-center justify-center font-bold text-xs tracking-tighter">
              CO₂
            </div>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">MITIGASI SETARA CO₂</span>
          <div className="text-2xl font-bold font-tabular text-admin-textprimary tracking-tight mb-1">
            {loading ? "..." : totalCo2.toLocaleString("id-ID", { maximumFractionDigits: 1 })} <span className="text-lg font-medium">kgCO₂e</span>
          </div>
          <p className="text-xs text-admin-textsecondary">Pencegahan Emisi Gas Rumah Kaca</p>
        </div>

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-admin-semamber/10 text-admin-semamber rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">PRODUSEN AKTIF</span>
          <div className="text-2xl font-bold font-tabular text-admin-textprimary tracking-tight mb-1">
            {loading ? "..." : activeSellers} <span className="text-lg font-medium">Peternak</span>
          </div>
          <p className="text-xs text-admin-textsecondary">Jaringan Aktif Platform</p>
        </div>
      </div>

      {/* Chart + Regional */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Category Bar Chart */}
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 md:w-3/5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-admin-textprimary">Distribusi Limbah berdasarkan Kategori</h3>
            <p className="text-xs text-admin-textsecondary mt-1">Perbandingan volume total limbah tani yang terkelola berdasarkan kategorinya.</p>
          </div>

          <div className="mt-8 flex items-end justify-around border-l border-b border-admin-hairline pt-4 pb-0 px-2 min-h-[200px]">
            {loading ? (
              <div className="text-xs text-admin-textsecondary italic py-10">Memuat grafik...</div>
            ) : !data || data.category_distribution.length === 0 ? (
              <div className="text-xs text-admin-textsecondary italic py-10">Belum ada transaksi limbah selesai.</div>
            ) : (
              data.category_distribution.map((cat) => {
                const totalCatVal = Number(cat.total);
                const maxVal = Math.max(...data.category_distribution.map((c) => Number(c.total)), 1);
                const heightPercent = Math.max((totalCatVal / maxVal) * 100, 10);
                
                const color = cat.category_name === "limbah_cair" ? "bg-blue-400" : "bg-admin-primary";

                return (
                  <div key={cat.category_name} className="flex flex-col items-center w-[20%] group relative">
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 bg-admin-textprimary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold">
                      {totalCatVal.toLocaleString("id-ID")} kg
                    </div>
                    <div
                      className={`${color} rounded-t transition-all duration-500 w-12 hover:opacity-85`}
                      style={{ height: `${heightPercent}px` }}
                    />
                    <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider text-center mt-2 truncate w-full">
                      {getCategoryLabel(cat.category_name).toUpperCase()}
                    </span>
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-admin-primary" />
              <span className="text-admin-textsecondary">Limbah Padat & Lainnya</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <span className="text-admin-textsecondary">Limbah Cair</span>
            </div>
          </div>
        </div>

        {/* Regional Growth */}
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 md:w-2/5 flex flex-col justify-between">
          <h3 className="text-lg font-bold text-admin-textprimary mb-6">Pertumbuhan Regional</h3>

          <div className="space-y-5 flex-1">
            {loading ? (
              <div className="text-xs text-admin-textsecondary italic">Memuat data wilayah...</div>
            ) : !data || data.regional_distribution.length === 0 ? (
              <div className="text-xs text-admin-textsecondary italic">Belum ada penyebaran wilayah transaksi.</div>
            ) : (
              data.regional_distribution.map((reg) => {
                const regTotal = Number(reg.total);
                const totalAll = data.regional_distribution.reduce((acc, curr) => acc + Number(curr.total), 0);
                const pct = totalAll > 0 ? (regTotal / totalAll) * 100 : 0;
                
                return (
                  <div key={reg.provinsi}>
                    <div className="flex justify-between text-[10px] font-bold mb-1.5">
                      <span className="text-admin-textsecondary">{reg.provinsi}</span>
                      <span className="text-admin-textprimary font-tabular">
                        {regTotal.toLocaleString("id-ID")} kg ({pct.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-admin-warmbg h-2.5 rounded-full overflow-hidden">
                      <div className="bg-admin-semgreen h-full rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-6 p-5 bg-admin-primary-light border border-admin-primary/20 rounded-xl flex gap-3 items-start">
            <svg className="w-5 h-5 text-admin-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <p className="text-xs text-admin-textsecondary leading-relaxed">
              <span className="font-bold text-admin-primary block mb-1">Wawasan Wilayah</span>
              Pencegahan karbon dan kontribusi limbah terbanyak dikontribusikan dari wilayah Jawa Timur dan Jawa Barat.
            </p>
          </div>
        </div>
      </div>

      {/* SDG Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* SDG 12 */}
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
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F59E0B" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset={sdg12DashOffset} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-admin-textprimary font-tabular">
                {loading ? "..." : `${sdg12Pct}%`}
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider mb-0.5">TINGKAT DAUR ULANG</div>
                <div className="text-xl font-bold font-tabular text-admin-semamber">
                  {loading ? "..." : totalWasteTons.toLocaleString("id-ID", { maximumFractionDigits: 1 })} <span className="text-sm font-medium">Ton</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider mb-0.5">TARGET TAHUNAN</div>
                <div className="text-lg font-bold font-tabular text-admin-textprimary">
                  {sdg12Target.toLocaleString("id-ID")} <span className="text-sm font-medium">Ton</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SDG 13 */}
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
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10B981" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset={sdg13DashOffset} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-admin-textprimary font-tabular">
                {loading ? "..." : `${sdg13Pct}%`}
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider mb-0.5">PENGURANGAN EMISI METANA</div>
                <div className="text-xl font-bold font-tabular text-admin-semgreen">
                  {loading ? "..." : methaneReduced.toLocaleString("id-ID")} <span className="text-sm font-medium">m³</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider mb-0.5">TARGET TAHUNAN</div>
                <div className="text-lg font-bold font-tabular text-admin-textprimary">
                  {sdg13Target.toLocaleString("id-ID")} <span className="text-sm font-medium">m³</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-[10px] font-bold text-admin-textsecondary tracking-wider">
        AgroWaste Impact Analytics Engine v4.2.0 — Diperbarui secara dinamis dari basis data
      </div>
    </div>
  );
}
