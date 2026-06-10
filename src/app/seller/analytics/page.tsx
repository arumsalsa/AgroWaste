"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

interface DashboardStats {
  total_produk: number;
  pesanan_baru: number;
  total_terjual_kg: number | string;
  total_pendapatan: number | string;
  chart_data: Array<{ date: string; revenue: string | number }>;
}

function formatRupiah(n: string | number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", minimumFractionDigits: 0,
  }).format(Number(n));
}

// Bangun 7 bar dari chart_data, isi hari tanpa data dengan 0
function buildBars(chartData: DashboardStats["chart_data"]) {
  const DAY = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];
  const bars = Array.from({ length: 7 }, (_, i) => {
    const d   = new Date();
    d.setDate(d.getDate() - (6 - i));
    const key = d.toISOString().slice(0, 10);
    const hit = chartData.find((c) => c.date === key);
    return { label: DAY[d.getDay()], value: Number(hit?.revenue ?? 0), date: key };
  });
  const max = Math.max(...bars.map((b) => b.value), 1);
  return bars.map((b) => ({ ...b, pct: Math.round((b.value / max) * 100) }));
}

export default function AnalyticsPage() {
  const [stats,   setStats]   = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    apiFetch("/seller/dashboard")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json) => {
        if (json.success) setStats(json.data as DashboardStats);
        else setError("Gagal memuat data analitik.");
      })
      .catch(() => setError("Tidak dapat terhubung ke server."))
      .finally(() => setLoading(false));
  }, []);

  const bars         = stats ? buildBars(stats.chart_data) : [];
  const hasChartData = bars.some((b) => b.value > 0);

  const skeletonCard = (
    <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl animate-pulse">
      <div className="w-10 h-10 rounded-lg bg-[#EAE6E1] mb-4" />
      <div className="h-3 w-20 bg-[#EAE6E1] rounded mb-2" />
      <div className="h-6 w-28 bg-[#EAE6E1] rounded" />
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-seller-textprimary mb-1">Analitik Penjualan</h2>
          <p className="text-sm text-seller-textsecondary">Lacak performa bisnis limbah pertanian Anda.</p>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-semibold">
          {error}
        </div>
      )}

      {/* KPI Cards — hanya 4 metrik yang tersedia dari API */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skeletonCard}{skeletonCard}{skeletonCard}{skeletonCard}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Total Pendapatan */}
          <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl">
            <div className="w-10 h-10 rounded-lg bg-seller-primary-light text-seller-primary flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="text-[10px] font-bold text-seller-textsecondary block mb-1">Total Pendapatan</span>
            <h3 className="text-xl font-bold text-seller-textprimary font-tabular">
              {stats ? formatRupiah(stats.total_pendapatan) : "—"}
            </h3>
          </div>

          {/* Volume Limbah Terjual */}
          <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </div>
            <span className="text-[10px] font-bold text-seller-textsecondary block mb-1">Volume Limbah Terjual</span>
            <h3 className="text-xl font-bold text-seller-textprimary font-tabular">
              {stats ? `${Number(stats.total_terjual_kg).toLocaleString("id-ID")} kg` : "—"}
            </h3>
          </div>

          {/* Total Produk */}
          <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
            </div>
            <span className="text-[10px] font-bold text-seller-textsecondary block mb-1">Total Produk</span>
            <h3 className="text-xl font-bold text-seller-textprimary font-tabular">
              {stats ? `${stats.total_produk} Produk` : "—"}
            </h3>
          </div>

          {/* Pesanan Baru */}
          <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl">
            <div className="w-10 h-10 rounded-lg bg-seller-primary-light text-seller-primary flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
            </div>
            <span className="text-[10px] font-bold text-seller-textsecondary block mb-1">Pesanan Baru</span>
            <h3 className="text-xl font-bold text-seller-textprimary font-tabular">
              {stats ? `${stats.pesanan_baru} Pesanan` : "—"}
            </h3>
          </div>

        </div>
      )}

      {/* Grafik Tren Pendapatan — dari chart_data */}
      <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-seller-textprimary">Tren Pendapatan</h3>
          <p className="text-sm text-seller-textsecondary">Pendapatan per hari dalam 7 hari terakhir</p>
        </div>

        {loading && (
          <div className="h-48 flex items-end justify-between gap-2 px-2">
            {[40, 60, 45, 85, 55, 75, 35].map((h, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2">
                <div className="w-full rounded-t-sm bg-[#EAE6E1] animate-pulse" style={{ height: `${h}%` }} />
                <span className="text-[10px] font-bold text-seller-textsecondary">...</span>
              </div>
            ))}
          </div>
        )}

        {!loading && !hasChartData && (
          <div className="h-48 flex flex-col items-center justify-center text-center border border-dashed border-seller-hairline rounded-xl">
            <svg className="w-10 h-10 text-seller-hairline mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            <p className="text-sm font-bold text-seller-textsecondary">Belum ada data penjualan</p>
            <p className="text-xs text-seller-textsecondary/70 mt-1">Grafik akan muncul setelah ada transaksi selesai.</p>
          </div>
        )}

        {!loading && hasChartData && (
          <>
            <div className="h-48 relative border-b border-l border-seller-hairline/50">
              {/* Grid lines */}
              <div className="absolute top-0    left-0 w-full border-t border-seller-hairline/50" />
              <div className="absolute top-1/3  left-0 w-full border-t border-seller-hairline/50" />
              <div className="absolute top-2/3  left-0 w-full border-t border-seller-hairline/50" />

              {/* Bar chart */}
              <div className="absolute inset-0 flex items-end justify-between gap-1.5 px-2">
                {bars.map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0">
                    <div
                      className="w-full rounded-t-sm bg-seller-primary transition-all duration-500"
                      style={{ height: `${Math.max(bar.pct, bar.value > 0 ? 4 : 0)}%` }}
                      title={formatRupiah(bar.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between px-2 mt-3">
              {bars.map((bar, i) => (
                <div key={i} className="flex-1 text-center">
                  <span className="text-[10px] font-bold text-seller-textsecondary">{bar.label}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Rekomendasi Cerdas */}
      <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-seller-textprimary">Rekomendasi Cerdas</h3>
          <svg className="w-5 h-5 text-seller-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" /></svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-seller-hairline bg-seller-primary-light/50 flex gap-4">
            <div className="w-8 h-8 rounded-full bg-seller-primary/10 text-seller-primary flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-seller-textprimary mb-1">Lengkapi Profil Produk</h4>
              <p className="text-xs text-seller-textsecondary leading-relaxed">Produk dengan deskripsi lengkap dan lokasi yang jelas lebih mudah ditemukan pembeli di marketplace.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-seller-hairline bg-[#FDF9F0] flex gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-seller-textprimary mb-1">Proses Pesanan Cepat</h4>
              <p className="text-xs text-seller-textsecondary leading-relaxed">Terima atau tolak pesanan masuk sesegera mungkin untuk menjaga kepercayaan pembeli.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-seller-hairline bg-blue-50 flex gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
            </div>
            <div>
              <h4 className="text-xs font-bold text-seller-textprimary mb-1">Update Stok Rutin</h4>
              <p className="text-xs text-seller-textsecondary leading-relaxed">Perbarui ketersediaan stok secara berkala agar pembeli tidak memesan produk yang sudah habis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
