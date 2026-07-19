"use client";

import { useEffect, useState, useRef } from "react";
import { apiFetch } from "@/lib/api";

function CustomTimeframeDropdown({
  value,
  onChange,
  colorScheme = "seller",
}: {
  value: "7d" | "1m" | "1y";
  onChange: (val: "7d" | "1m" | "1y") => void;
  colorScheme?: "admin" | "seller";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { key: "7d", label: "7 Hari Terakhir" },
    { key: "1m", label: "1 Bulan Terakhir" },
    { key: "1y", label: "1 Tahun Terakhir" },
  ];

  const currentLabel = options.find((o) => o.key === value)?.label || "7 Hari Terakhir";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isSeller = colorScheme === "seller";
  const primaryColor = isSeller ? "text-seller-primary" : "text-admin-primary";
  const activeBg = isSeller ? "bg-seller-primary-light text-seller-primary" : "bg-admin-primary-light text-admin-primary";

  return (
    <div className="relative shrink-0 self-start sm:self-auto" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white hover:bg-[#F4F1EA] border border-black/10 text-gray-800 font-bold text-xs px-3.5 py-2 rounded-xl shadow-sm flex items-center gap-2 transition-all duration-200 active:scale-95"
      >
        <svg className={`w-3.5 h-3.5 ${primaryColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{currentLabel}</span>
        <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Floating Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-black/10 rounded-xl shadow-xl z-30 p-1.5 animate-in fade-in zoom-in-95 duration-150">
          {options.map((opt) => {
            const isSelected = value === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => {
                  onChange(opt.key as "7d" | "1m" | "1y");
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-xs font-bold rounded-lg flex items-center justify-between transition-colors ${
                  isSelected ? activeBg : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <svg className={`w-4 h-4 ${primaryColor}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

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

// build bars based on timeRange
function buildBars(chartData: DashboardStats["chart_data"], totalRevInDB: number, timeRange: "7d" | "1m" | "1y") {
  const rawData = chartData || [];

  if (timeRange === "1m") {
    const now = new Date();
    const weekBuckets = [
      { label: "Minggu 1", value: 0 },
      { label: "Minggu 2", value: 0 },
      { label: "Minggu 3", value: 0 },
      { label: "Minggu 4", value: 0 },
    ];

    rawData.forEach((item) => {
      const itemDate = new Date(item.date);
      const diffDays = Math.floor((now.getTime() - itemDate.getTime()) / (1000 * 3600 * 24));
      if (diffDays >= 0 && diffDays < 28) {
        const weekIdx = Math.floor(diffDays / 7);
        if (weekIdx >= 0 && weekIdx < 4) {
          weekBuckets[3 - weekIdx].value += Number(item.revenue || 0);
        }
      }
    });

    const hasDBData = weekBuckets.some((w) => w.value > 0);
    if (!hasDBData && totalRevInDB > 0) {
      weekBuckets[3].value = totalRevInDB;
    }

    const max = Math.max(...weekBuckets.map((w) => w.value), 1);
    return weekBuckets.map((w) => ({
      ...w,
      pct: w.value > 0 ? Math.max(Math.round((w.value / max) * 100), 8) : 0,
    }));
  }

  if (timeRange === "1y") {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
    const currentMonth = new Date().getMonth();
    const monthBuckets: { label: string; monthIdx: number; value: number }[] = [];

    for (let i = 11; i >= 0; i--) {
      const mIdx = (currentMonth - i + 12) % 12;
      monthBuckets.push({ label: monthNames[mIdx], monthIdx: mIdx, value: 0 });
    }

    rawData.forEach((item) => {
      const itemDate = new Date(item.date);
      const itemMonth = itemDate.getMonth();
      const found = monthBuckets.find((m) => m.monthIdx === itemMonth);
      if (found) {
        found.value += Number(item.revenue || 0);
      }
    });

    const hasDBData = monthBuckets.some((m) => m.value > 0);
    if (!hasDBData && totalRevInDB > 0) {
      monthBuckets[monthBuckets.length - 1].value = totalRevInDB;
    }

    const max = Math.max(...monthBuckets.map((m) => m.value), 1);
    return monthBuckets.map((m) => ({
      ...m,
      pct: m.value > 0 ? Math.max(Math.round((m.value / max) * 100), 8) : 0,
    }));
  }

  // 7 Days
  const days = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];
  const result: Array<{ label: string; value: number }> = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    const match = rawData.find((c) => c.date === key);
    result.push({ label: days[d.getDay()], value: Number(match?.revenue ?? 0) });
  }

  const hasData = result.some((r) => r.value > 0);
  if (!hasData && totalRevInDB > 0) {
    result[result.length - 1].value = totalRevInDB;
  }

  const max = Math.max(...result.map((r) => r.value), 1);
  return result.map((r) => ({
    ...r,
    pct: r.value > 0 ? Math.max(Math.round((r.value / max) * 100), 8) : 0,
  }));
}

export default function AnalyticsPage() {
  const [stats,     setStats]     = useState<DashboardStats | null>(null);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<"7d" | "1m" | "1y">("7d");

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

  const bars         = stats ? buildBars(stats.chart_data, Number(stats.total_pendapatan || 0), timeRange) : [];
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

      {/* KPI Cards */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skeletonCard}{skeletonCard}{skeletonCard}{skeletonCard}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

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

      {/* Revenue Trend */}
      <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-lg font-bold text-seller-textprimary">Tren Pendapatan</h3>
            <p className="text-xs text-seller-textsecondary mt-0.5">
              {timeRange === "7d" && "Pendapatan harian dalam 7 hari terakhir."}
              {timeRange === "1m" && "Pendapatan mingguan dalam 1 bulan terakhir."}
              {timeRange === "1y" && "Pendapatan bulanan dalam 1 tahun terakhir."}
            </p>
          </div>

          {/* Custom Timeframe Selector Dropdown */}
          <CustomTimeframeDropdown value={timeRange} onChange={setTimeRange} colorScheme="seller" />
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
            <div className="relative w-full flex flex-col justify-between h-[240px] mt-2">
              {/* Grid & Chart Overlay Area */}
              <div className="relative flex-1 w-full flex h-[200px]">
                {/* Dedicated Left Y-Axis Labels */}
                <div className="w-10 flex flex-col justify-between text-[10px] font-bold text-seller-textsecondary font-tabular pb-6 select-none border-r border-seller-hairline/40 pr-2">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>

                {/* Grid Lines + Bar Chart Canvas */}
                <div className="relative flex-1 h-full pl-3 pr-2">
                  {/* Horizontal Dashed Grid Lines */}
                  <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between pointer-events-none pb-6">
                    <div className="border-b border-dashed border-seller-hairline/60 w-full" />
                    <div className="border-b border-dashed border-seller-hairline/60 w-full" />
                    <div className="border-b border-dashed border-seller-hairline/60 w-full" />
                    <div className="border-b border-dashed border-seller-hairline/60 w-full" />
                    <div className="border-b border-seller-hairline/80 w-full" />
                  </div>

                  {/* Vertical Bar Pillars */}
                  <div className="relative h-full flex items-end justify-between pb-6 pt-2 z-10">
                    {bars.map((bar, i) => {
                      const isZero = bar.value === 0;
                      const itemWidth = `${100 / bars.length}%`;
                      return (
                        <div key={i} className="flex flex-col items-center h-full justify-end group/bar relative" style={{ width: itemWidth }}>
                          {/* Tooltip Badge */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#1E293B] text-white text-[10px] px-2.5 py-1 rounded-lg pointer-events-none whitespace-nowrap font-bold shadow-xl z-30 opacity-0 group-hover/bar:opacity-100 group-hover/bar:-translate-y-1 transition-all duration-200">
                            {formatRupiah(bar.value)}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1E293B]" />
                          </div>

                          {/* Bar Element */}
                          {isZero ? (
                            <div className="w-full max-w-[24px] h-2 bg-[#25392D] rounded-full mb-0.5 transition-all" />
                          ) : (
                            <div
                              className="w-full max-w-[24px] bg-[#009A44] rounded-t-lg transition-all duration-300 relative cursor-pointer shadow-md"
                              style={{ height: `${Math.max(bar.pct, 12)}%` }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* X-Axis Dates Row (Pixel Perfect Alignment) */}
              <div className="pl-12 pr-2 flex justify-between text-[11px] font-bold text-seller-textsecondary pt-2 uppercase tracking-wider border-t border-seller-hairline">
                {bars.map((bar, i) => (
                  <div key={i} className="flex justify-center text-center truncate" style={{ width: `${100 / bars.length}%` }}>
                    <span>{bar.label}</span>
                  </div>
                ))}
              </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
