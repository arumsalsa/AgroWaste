"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/lib/api";

interface Activity {
  id: string;
  type: "product" | "order";
  title: string;
  user: string;
  description: string;
  created_at: string;
}

interface Stats {
  total_users: number;
  total_peternak: number;
  total_pembeli: number;
  total_produk_aktif: number;
  total_transaksi: number;
  total_limbah_kg: number;
  total_co2_saved: number;
  total_pendapatan: number;
  chart_data: { date: string; total: number }[];
  recent_activities?: Activity[];
}

function formatRupiah(n: string | number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(n));
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/admin/dashboard")
      .then((res) => (res.ok ? res.json() : { data: null }))
      .then((json) => {
        if (json.success && json.data) {
          setStats(json.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-admin-textprimary mb-1">Ringkasan Platform</h2>
          <p className="text-sm text-admin-textsecondary">Metrik performa dan aktivitas ekosistem AgroWaste dalam 30 hari terakhir.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/users" className="px-4 py-2 bg-admin-primary text-white text-sm font-bold rounded-xl hover:bg-admin-primary-hover transition-colors shadow-md shadow-admin-primary/20 w-full sm:w-auto text-center">
            Kelola Pengguna
          </Link>
        </div>
      </div>

      {/* Row 1: 4 Column KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* KPI 1 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-2 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-admin-primary-light text-admin-primary flex items-center justify-center group-hover:bg-admin-primary/20 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-admin-semgreen bg-green-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg flex items-center gap-0.5 sm:gap-1">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              {loading ? "..." : "12%"}
            </span>
          </div>
          <div>
            <span className="text-[9px] sm:text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-0.5 sm:mb-1">Total Pengwarna</span>
            <h3 className="text-lg sm:text-2xl font-bold text-admin-textprimary font-tabular">
              {loading ? "..." : (stats?.total_users.toLocaleString("id-ID") ?? "0")}
            </h3>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-2 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-admin-primary-light text-admin-primary flex items-center justify-center group-hover:bg-admin-primary/20 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-admin-semgreen bg-green-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg flex items-center gap-0.5 sm:gap-1">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              {loading ? "..." : "5%"}
            </span>
          </div>
          <div>
            <span className="text-[9px] sm:text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-0.5 sm:mb-1">Listing Aktif</span>
            <h3 className="text-lg sm:text-2xl font-bold text-admin-textprimary font-tabular">
              {loading ? "..." : (stats?.total_produk_aktif.toLocaleString("id-ID") ?? "0")}
            </h3>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-2 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-admin-primary-light text-admin-primary flex items-center justify-center group-hover:bg-admin-primary/20 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-admin-semgreen bg-green-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg flex items-center gap-0.5 sm:gap-1">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              {loading ? "..." : "100%"}
            </span>
          </div>
          <div>
            <span className="text-[9px] sm:text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-0.5 sm:mb-1">Nilai Transaksi</span>
            <h3 className="text-lg sm:text-2xl font-bold text-admin-textprimary font-tabular">
              {loading ? "..." : formatRupiah(stats?.total_pendapatan ?? 0)}
            </h3>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-2 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-admin-primary-light text-admin-primary flex items-center justify-center group-hover:bg-admin-primary/20 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-admin-semgreen bg-green-50 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg flex items-center gap-0.5 sm:gap-1">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
              {loading ? "..." : "100%"}
            </span>
          </div>
          <div>
            <span className="text-[9px] sm:text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-0.5 sm:mb-1">Dampak Lingkungan</span>
            <h3 className="text-lg sm:text-2xl font-bold text-admin-textprimary font-tabular">
              {loading ? "..." : stats?.total_limbah_kg ? `${(Number(stats.total_limbah_kg) / 1000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} Ton` : "0 Ton"}
            </h3>
          </div>
        </div>
      </div>

      {/* Row 2: bento grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Bento: Platform Growth */}
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 lg:col-span-2 flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-bold text-admin-textprimary">Perkembangan Platform</h3>
              <p className="text-xs text-admin-textsecondary mt-1">Grafik jumlah transaksi harian AgroWaste dalam 7 hari terakhir.</p>
            </div>
          </div>

          {/* chart area */}
          <div className="h-64 flex flex-col justify-between text-[10px] font-bold text-admin-textsecondary font-tabular pt-4 relative">
            <div className="w-full border-b border-dashed border-admin-hairline flex justify-between pb-2"><span>100%</span></div>
            <div className="w-full border-b border-dashed border-admin-hairline flex justify-between pb-2"><span>75%</span></div>
            <div className="w-full border-b border-dashed border-admin-hairline flex justify-between pb-2"><span>50%</span></div>
            <div className="w-full border-b border-dashed border-admin-hairline flex justify-between pb-2"><span>25%</span></div>
            <div className="w-full border-b border-admin-hairline flex justify-between pb-2"><span>0%</span></div>
            
            {/* decorative chart curve */}
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
              {stats?.chart_data && stats.chart_data.length > 0 ? (
                stats.chart_data.map((c) => {
                  const d = new Date(c.date);
                  return <span key={c.date}>{d.toLocaleDateString("id-ID", { day: "numeric", month: "short" })}</span>;
                })
              ) : (
                <><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span></>
              )}
            </div>
          </div>
        </div>

        {/* Right Bento: Recent Activity */}
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 flex flex-col justify-between group transition-colors hover:border-admin-primary/20">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-admin-textprimary">Aktivitas Terbaru</h3>
              <Link href="/admin/listings" className="text-xs font-bold text-admin-primary hover:underline">Lihat Semua</Link>
            </div>

            {/* activity feed */}
            <div className="space-y-5">
              {stats?.recent_activities && stats.recent_activities.length > 0 ? (
                stats.recent_activities.map((act) => {
                  const date = new Date(act.created_at);
                  const timeStr = date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) + " WIB";
                  const dateStr = date.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
                  const dotColor = act.type === "product"
                    ? "bg-admin-semgreen shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                    : "bg-admin-semamber shadow-[0_0_8px_rgba(245,158,11,0.5)]";
                  return (
                    <div key={act.id} className="flex gap-4">
                      <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${dotColor}`}></div>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-admin-textprimary leading-snug">
                          {act.user}{" "}
                          <span className="font-normal text-admin-textsecondary">
                            {act.type === "product" ? `mengunggah listing: ${act.title}` : act.description}
                          </span>
                        </p>
                        <span className="text-xs text-admin-textsecondary font-tabular font-bold block">
                          {dateStr}, {timeStr}
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-xs text-admin-textsecondary italic py-2">Belum ada aktivitas terbaru.</div>
              )}
            </div>
          </div>

          {/* Insight Box */}
          <div className="mt-8 p-5 bg-admin-primary-light border border-admin-primary/20 rounded-xl flex gap-3 items-start">
            <svg className="w-5 h-5 text-admin-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div className="text-xs text-admin-textsecondary leading-relaxed">
              <span className="font-bold text-admin-primary block mb-1">Wawasan Sistem</span>
              &quot;Persetujuan listing 15% lebih lambat minggu ini. Disarankan menambah moderator pada antrean &apos;Peternak&apos;.&quot;
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Server Health Statuses */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-between group transition-colors hover:border-admin-primary/20">
          <div>
            <span className="text-[9px] sm:text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-0.5 sm:mb-1">Status Database</span>
            <div className="text-lg sm:text-xl font-bold text-admin-semgreen">Sehat</div>
          </div>
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-admin-semgreen opacity-20 animate-radar"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-admin-semgreen"></span>
          </div>
        </div>

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-between group transition-colors hover:border-admin-primary/20">
          <div>
            <span className="text-[9px] sm:text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-0.5 sm:mb-1">Beban Server</span>
            <div className="text-lg sm:text-xl font-bold text-admin-textprimary font-tabular">24%</div>
          </div>
          <div className="flex items-end gap-1 h-6 sm:h-8">
            <div className="w-1.5 sm:w-2 bg-admin-primary h-2 sm:h-3 rounded-sm opacity-60"></div>
            <div className="w-1.5 sm:w-2 bg-admin-primary h-4 sm:h-6 rounded-sm opacity-80"></div>
            <div className="w-1.5 sm:w-2 bg-admin-primary h-3 sm:h-4 rounded-sm opacity-50"></div>
            <div className="w-1.5 sm:w-2 bg-admin-primary h-5 sm:h-8 rounded-sm"></div>
          </div>
        </div>

        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-between group transition-colors hover:border-admin-primary/20">
          <div>
            <span className="text-[9px] sm:text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider block mb-0.5 sm:mb-1">Catatan Log Aktif</span>
            <div className="text-lg sm:text-xl font-bold text-admin-textprimary font-tabular">1.2k/hr</div>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-admin-warmbg text-admin-textsecondary flex items-center justify-center group-hover:bg-admin-primary-light group-hover:text-admin-primary transition-colors">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}
