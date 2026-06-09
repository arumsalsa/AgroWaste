"use client";

import React, { useState } from "react";
import Link from "next/link";

const mockOrders = [
  {
    id: "AGW-2026-052401",
    date: "24 Mei 2026",
    time: "14:30 WIB",
    seller: "Pak Slamet, Bogor",
    buyer: "Pak Budiman, Jakarta",
    courier: "Pak Agus Subagio",
    truckId: "TRK-992-001",
    courierImg: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
    status: "Sedang Dikirim",
    statusBadge: "bg-blue-50 text-blue-600",
    statusDot: "bg-blue-500",
    actionType: "detail",
  },
  {
    id: "AGW-2026-052402",
    date: "24 Mei 2026",
    time: "15:10 WIB",
    seller: "Ibu Kartini, Sukabumi",
    buyer: "Resto Sehat, Bandung",
    courier: "Belum Ditugaskan",
    truckId: "",
    courierImg: null,
    status: "Menunggu",
    statusBadge: "bg-admin-semamber/10 text-admin-semamber",
    statusDot: "bg-admin-semamber",
    actionType: "assign",
  },
  {
    id: "AGW-2026-052399",
    date: "23 Mei 2026",
    time: "10:00 WIB",
    seller: "Pak Haji Rahmat, Cianjur",
    buyer: "AgroMart, Bekasi",
    courier: "Dedi Kurniawan",
    truckId: "TRK-992-085",
    courierImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    status: "Terkirim",
    statusBadge: "bg-admin-semgreen/10 text-admin-semgreen",
    statusDot: "bg-admin-semgreen",
    actionType: "detail",
  },
  {
    id: "AGW-2026-052388",
    date: "22 Mei 2026",
    time: "09:15 WIB",
    seller: "Pak Tani Mandiri",
    buyer: "Pakan Ternak Jaya",
    courier: "Eko Saputro",
    truckId: "TRK-992-044",
    courierImg: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&q=80",
    status: "Terlambat",
    statusBadge: "bg-admin-semred/10 text-admin-semred",
    statusDot: "bg-admin-semred",
    actionType: "resolve",
  }
];

export default function AdminLogistics() {
  const [activeTab, setActiveTab] = useState("Semua");

  const tabs = ["Semua", "Sedang Kirim", "Terkirim", "Masalah"];

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-admin-textprimary mb-1">Manajemen Logistik</h2>
          <p className="text-sm text-admin-textsecondary">Pantau jadwal pengiriman dan penugasan kurir di lapangan.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-admin-surfacewhite text-admin-textsecondary font-bold text-sm border border-admin-hairline rounded-xl hover:bg-admin-warmbg flex items-center gap-2 transition-colors shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            Filter Wilayah
          </button>
          <button className="px-5 py-2.5 bg-admin-primary text-white text-sm font-bold rounded-xl hover:bg-admin-primary-hover transition-colors shadow-md shadow-admin-primary/20 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Ekspor Data
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* KPI 1 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 relative group overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-admin-primary/5 rounded-bl-full -mr-4 -mt-4"></div>
          <div className="absolute top-6 right-6 text-xs font-bold text-admin-semgreen flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            +12%
          </div>
          <div className="w-10 h-10 bg-admin-primary-light text-admin-primary rounded-xl flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">TOTAL PENGIRIMAN</span>
          <div className="text-3xl font-bold font-tabular text-admin-textprimary">4,520</div>
        </div>

        {/* KPI 2 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 relative group overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -mr-4 -mt-4"></div>
          <div className="absolute top-6 right-6 text-[10px] font-bold text-admin-textsecondary bg-admin-warmbg px-2 py-0.5 rounded uppercase tracking-wider">LANGSUNG</div>
          <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">SEDANG BERJALAN</span>
          <div className="text-3xl font-bold font-tabular text-admin-textprimary">89</div>
        </div>

        {/* KPI 3 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 relative group overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-admin-semamber/5 rounded-bl-full -mr-4 -mt-4"></div>
          <div className="absolute top-6 right-6 text-[10px] font-bold text-admin-semamber bg-amber-50 px-2 py-0.5 rounded uppercase tracking-wider">MENDESAK</div>
          <div className="w-10 h-10 bg-amber-50 text-admin-semamber rounded-xl flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">MENUNGGU PENUGASAN</span>
          <div className="text-3xl font-bold font-tabular text-admin-textprimary">12</div>
        </div>

        {/* KPI 4 */}
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 relative group overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-admin-semred/5 rounded-bl-full -mr-4 -mt-4"></div>
          <div className="absolute top-6 right-6 text-[10px] font-bold text-white bg-admin-semred px-2 py-0.5 rounded uppercase tracking-wider animate-pulse">PERINGATAN</div>
          <div className="w-10 h-10 bg-red-50 text-admin-semred rounded-xl flex items-center justify-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">TERLAMBAT</span>
          <div className="text-3xl font-bold font-tabular text-admin-textprimary">3</div>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl overflow-hidden">
        
        {/* Tab Filters */}
        <div className="p-6 border-b border-admin-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex bg-admin-warmbg p-1.5 rounded-xl gap-1 max-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-bold rounded-lg text-xs transition-all ${
                  activeTab === tab
                    ? "bg-admin-surfacewhite text-admin-primary shadow-sm"
                    : "text-admin-textsecondary hover:text-admin-textprimary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="text-sm font-medium text-admin-textsecondary font-tabular">
            Menampilkan <span className="font-bold text-admin-textprimary">50</span> dari 4,520
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-admin-hairline bg-[#F9F8F6] text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider">
                <th className="px-6 py-4">ORDER ID</th>
                <th className="px-6 py-4">TANGGAL & WAKTU</th>
                <th className="px-6 py-4">PIHAK TERKAIT</th>
                <th className="px-6 py-4">KURIR DITUGASKAN</th>
                <th className="px-6 py-4">STATUS</th>
                <th className="px-6 py-4 text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-admin-hairline">
              {mockOrders.map((order) => (
                <tr key={order.id} className="hover:bg-admin-warmbg/40 transition-colors group">
                  <td className="px-6 py-4">
                    <Link href={`/admin/logistics/${order.id}`} className="font-bold text-admin-primary hover:text-admin-primary-hover hover:underline">
                      {order.id}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-admin-textprimary">{order.date}</div>
                    <div className="text-xs font-bold text-admin-textsecondary font-tabular">{order.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1.5 text-xs font-semibold text-admin-textprimary">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-admin-semgreen/10 text-admin-semgreen flex items-center justify-center rounded text-[10px] font-bold">P</span>
                        <span className="group-hover:text-admin-primary transition-colors">{order.seller}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-blue-100 text-blue-600 flex items-center justify-center rounded text-[10px] font-bold">B</span>
                        <span className="group-hover:text-blue-600 transition-colors">{order.buyer}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {order.courier === "Belum Ditugaskan" ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border-2 border-dashed border-admin-hairline bg-admin-warmbg flex items-center justify-center">
                          <svg className="w-4 h-4 text-admin-textsecondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
                        </div>
                        <span className="text-sm font-bold text-admin-textsecondary italic">{order.courier}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <img src={order.courierImg!} alt="Kurir" className="w-10 h-10 rounded-full object-cover border border-admin-hairline group-hover:border-admin-primary transition-colors" />
                        <div>
                          <div className="text-sm font-bold text-admin-textprimary group-hover:text-admin-primary transition-colors">{order.courier}</div>
                          <div className="text-[10px] font-bold text-admin-textsecondary font-tabular">{order.truckId}</div>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${order.statusBadge}`}>
                      <span className={`w-2 h-2 rounded-full ${order.statusDot}`}></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {order.actionType === "detail" && (
                      <Link href={`/admin/logistics/${order.id}`}>
                        <button className="px-4 py-2 text-xs font-bold text-admin-textprimary bg-[#EBE7E0] hover:bg-admin-hairline rounded-xl transition-colors shadow-sm">
                          Detail
                        </button>
                      </Link>
                    )}
                    {order.actionType === "assign" && (
                      <button className="px-4 py-2 text-xs font-bold text-white bg-admin-primary hover:bg-admin-primary-hover rounded-xl transition-colors shadow-md shadow-admin-primary/20">
                        Tugaskan
                      </button>
                    )}
                    {order.actionType === "resolve" && (
                      <button className="px-4 py-2 text-xs font-bold text-white bg-admin-semred hover:bg-red-600 rounded-xl transition-colors shadow-md shadow-red-500/20">
                        Tindak Lanjut
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 border-t border-admin-hairline bg-admin-surfacewhite flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-admin-textsecondary font-medium font-tabular">Halaman <span className="text-admin-textprimary font-bold">1</span> dari <span className="text-admin-textprimary font-bold">90</span></span>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-admin-hairline rounded-lg text-admin-textsecondary opacity-50 cursor-not-allowed">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-admin-primary text-white font-bold text-xs rounded-lg shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center border border-transparent hover:bg-admin-warmbg text-admin-textsecondary font-bold text-xs rounded-lg transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center border border-transparent hover:bg-admin-warmbg text-admin-textsecondary font-bold text-xs rounded-lg transition-colors">3</button>
            <span className="px-1 text-admin-textsecondary font-bold">...</span>
            <button className="w-8 h-8 flex items-center justify-center border border-transparent hover:bg-admin-warmbg text-admin-textsecondary font-bold text-xs rounded-lg transition-colors">90</button>
            <button className="w-8 h-8 flex items-center justify-center border border-admin-hairline rounded-lg text-admin-textsecondary hover:text-admin-primary hover:border-admin-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
