"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/lib/api";
import { getUser } from "@/lib/auth";

interface DashboardStats {
  total_produk: number;
  pesanan_baru: number;
  total_terjual_kg: number | string;
  total_pendapatan: number | string;
  chart_data: Array<{ date: string; revenue: string | number }>;
}

interface Order {
  id: string;
  order_number?: string;
  total_price: string | number;
  status: string;
  created_at: string;
  items?: Array<{ product?: { name: string } }>;
  product?: { name: string };
}

function formatRupiah(n: string | number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", minimumFractionDigits: 0,
  }).format(Number(n));
}

function formatDate(d: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  }).format(new Date(d));
}

function statusBadge(status: string) {
  switch (status) {
    case "menunggu_pembayaran": return { label: "Menunggu",   cls: "bg-amber-100 text-amber-700" };
    case "dikonfirmasi":        return { label: "Dikonfirmasi", cls: "bg-blue-100 text-blue-700" };
    case "dikirim":             return { label: "Dikirim",    cls: "bg-orange-100 text-orange-700" };
    case "selesai":             return { label: "Selesai",    cls: "bg-seller-primary-light text-seller-semgreen" };
    case "ditolak":             return { label: "Ditolak",    cls: "bg-red-100 text-red-700" };
    default:                    return { label: status,       cls: "bg-[#EAE6E1] text-seller-textsecondary" };
  }
}

// build 7-day bar chart from chart_data
function buildChartBars(chartData: DashboardStats["chart_data"]) {
  const days = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];
  const result: Array<{ label: string; value: number }> = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10); // "2026-06-01"
    const match = chartData.find((c) => c.date === key);
    result.push({ label: days[d.getDay()], value: Number(match?.revenue ?? 0) });
  }
  const max = Math.max(...result.map((r) => r.value), 1);
  return result.map((r) => ({ ...r, pct: Math.round((r.value / max) * 100) }));
}

export default function OverviewPage() {
  const [userName, setUserName] = useState("Peternak");
  const [stats, setStats]       = useState<DashboardStats | null>(null);
  const [orders, setOrders]     = useState<Order[]>([]);
  const [loading, setLoading]   = useState(true);
  const [today, setToday]       = useState("");

  useEffect(() => {
    setUserName(getUser()?.name ?? "Peternak");
    setToday(new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date()));

    Promise.all([
      apiFetch("/seller/dashboard").then((r) => (r.ok ? r.json() : null)).catch(() => null),
      apiFetch("/orders").then((r) => (r.ok ? r.json() : null)).catch(() => null),
    ]).then(([dashRes, ordersRes]) => {
      if (dashRes?.success) setStats(dashRes.data as DashboardStats);
      if (ordersRes?.success) setOrders((ordersRes.data as Order[]).slice(0, 3));
      setLoading(false);
    });
  }, []);

  const bars = stats ? buildChartBars(stats.chart_data) : [];

  const skeletonCard = (
    <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl animate-pulse">
      <div className="h-10 w-10 rounded-lg bg-[#EAE6E1] mb-4" />
      <div className="h-3 w-24 bg-[#EAE6E1] rounded mb-2" />
      <div className="h-7 w-32 bg-[#EAE6E1] rounded" />
    </div>
  );

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-seller-textprimary mb-1">
            Selamat Datang, {userName}!
          </h2>
          <p className="text-sm text-seller-textsecondary">Berikut ringkasan operasional AgroWaste hari ini.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border border-seller-hairline rounded-xl bg-seller-surfacewhite text-sm font-semibold text-seller-textsecondary">
          <svg className="w-4 h-4 text-seller-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {today}
        </div>
      </div>

      {/* Top Metrik */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skeletonCard}{skeletonCard}{skeletonCard}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Pendapatan */}
          <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-seller-primary-light text-seller-primary flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">TOTAL PENDAPATAN</span>
              <h3 className="text-2xl font-bold tracking-tight text-seller-textprimary">
                {stats ? formatRupiah(stats.total_pendapatan) : "—"}
              </h3>
            </div>
          </div>

          {/* Pesanan Baru */}
          <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              {stats && stats.pesanan_baru > 0 && (
                <span className="text-xs font-bold text-amber-500">{stats.pesanan_baru} Perlu Diproses</span>
              )}
            </div>
            <div>
              <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">PESANAN BARU</span>
              <h3 className="text-2xl font-bold tracking-tight text-seller-textprimary">
                {stats ? `${stats.pesanan_baru} Pesanan` : "—"}
              </h3>
            </div>
          </div>

          {/* Total Produk */}
          <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">TOTAL PRODUK</span>
              <h3 className="text-2xl font-bold tracking-tight text-seller-textprimary">
                {stats ? `${stats.total_produk} Produk` : "—"}
              </h3>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Performa Penjualan */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl lg:col-span-2">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-lg font-bold text-seller-textprimary">Performa Penjualan</h3>
              <p className="text-sm text-seller-textsecondary">Distribusi pendapatan 7 hari terakhir</p>
            </div>
          </div>

          {loading ? (
            <div className="h-48 flex items-end justify-between gap-2 px-2">
              {[40, 60, 45, 85, 55, 75, 35].map((h, i) => (
                <div key={i} className="w-full flex flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm bg-[#EAE6E1] animate-pulse" style={{ height: `${h}%` }} />
                  <span className="text-[10px] font-bold text-seller-textsecondary">...</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-48 flex items-end justify-between gap-2 px-2">
              {bars.map((bar, i) => (
                <div key={i} className="w-full flex flex-col items-center gap-2">
                  <div
                    className={`w-full rounded-t-sm transition-all duration-500 ${bar.pct > 0 ? "bg-seller-primary" : "bg-seller-primary-light"}`}
                    style={{ height: `${Math.max(bar.pct, 4)}%` }}
                    title={formatRupiah(bar.value)}
                  />
                  <span className="text-[10px] font-bold text-seller-textsecondary">{bar.label}</span>
                </div>
              ))}
            </div>
          )}
          <div className="w-full h-px bg-seller-hairline mt-[-18px] relative z-0" />
        </div>

        {/* Terjual & Dampak */}
        <div className="bg-seller-primary rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-lg shadow-seller-primary/20">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl pointer-events-none" />
          <div>
            <h3 className="text-lg font-semibold mb-6">Ringkasan Terjual</h3>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-5xl font-bold tracking-tight">
                {loading ? "..." : Number(stats?.total_terjual_kg ?? 0).toLocaleString("id-ID")}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold tracking-wider uppercase">kg terjual</span>
            </div>
            <p className="text-sm text-white/90 leading-relaxed mb-6">
              Total limbah organik yang berhasil dijual dan dialihkan dari pembuangan terbuka.
            </p>
          </div>
          <Link href="/seller/inventory" className="w-full py-3 bg-white text-seller-primary rounded-xl font-bold text-sm shadow-sm hover:bg-gray-50 transition-colors text-center block">
            Kelola Produk
          </Link>
        </div>
      </div>

      {/* Pesanan Terbaru */}
      <div className="bg-seller-surfacewhite border border-seller-hairline rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-seller-hairline flex justify-between items-center bg-white">
          <h3 className="text-lg font-bold text-seller-textprimary">Pesanan Terbaru</h3>
          <Link href="/seller/orders" className="text-xs font-bold text-seller-primary uppercase tracking-wider hover:underline">
            Lihat Semua Pesanan
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F9F8F6] text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider border-b border-seller-hairline">
              <tr>
                <th className="px-6 py-4">ID Pesanan</th>
                <th className="px-6 py-4">Produk</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seller-hairline bg-white">
              {loading && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-seller-textsecondary text-xs animate-pulse">
                    Memuat pesanan...
                  </td>
                </tr>
              )}
              {!loading && orders.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-seller-textsecondary text-xs">
                    Belum ada pesanan masuk.
                  </td>
                </tr>
              )}
              {!loading && orders.map((order) => {
                const { label, cls } = statusBadge(order.status);
                const orderId = order.order_number ?? order.id.slice(0, 8).toUpperCase();
                const productName = order.items?.[0]?.product?.name ?? order.product?.name ?? "Pesanan AgroWaste";
                return (
                  <tr key={order.id} className="hover:bg-seller-warmbg/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-seller-textprimary">#{orderId}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#EAE6E1]" />
                        <span className="font-semibold text-seller-textprimary">{productName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${cls}`}>{label}</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-seller-textprimary font-tabular">{formatRupiah(order.total_price)}</td>
                    <td className="px-6 py-4">
                      <Link href={`/seller/orders?id=${order.id}`} className="text-seller-primary hover:text-seller-primary-hover">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
