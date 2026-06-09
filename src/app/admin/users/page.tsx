"use client";

import React, { useState } from "react";

const mockUsers = [
  {
    id: "U-1001",
    name: "Budi Santoso",
    email: "budi.farm@gmail.com",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
    initials: null,
    role: "PETERNAK TERVERIFIKASI",
    roleColor: "bg-admin-semgreen/10 text-admin-semgreen",
    status: "Aktif",
    statusColor: "bg-admin-semgreen",
    statusBg: "bg-admin-semgreen/10 text-admin-semgreen",
    joinedAt: "12 Jan 2023",
  },
  {
    id: "U-1002",
    name: "PT. Pupuk Indoagro",
    email: "corp@indoagro.com",
    avatar: null,
    initials: "PI",
    role: "B2B PEMBELI",
    roleColor: "bg-blue-50 text-blue-600",
    status: "Aktif",
    statusColor: "bg-admin-semgreen",
    statusBg: "bg-admin-semgreen/10 text-admin-semgreen",
    joinedAt: "04 Mar 2023",
  },
  {
    id: "U-1003",
    name: "Agung Wijaya",
    email: "agung_kuy@yahoo.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    initials: null,
    role: "PETERNAK BARU",
    roleColor: "bg-admin-semamber/10 text-admin-semamber",
    status: "Ditangguhkan",
    statusColor: "bg-admin-semred",
    statusBg: "bg-admin-semred/10 text-admin-semred",
    joinedAt: "28 Okt 2023",
  }
];

export default function AdminUserManagement() {
  const [activeFilter, setActiveFilter] = useState("Semua Pengguna");

  const filterMap: Record<string, string> = {
    "Semua Pengguna": "ALL",
    "Peternak": "PETERNAK",
    "Pembeli": "PEMBELI",
    "Kurir": "KURIR"
  };

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-admin-textprimary mb-1">Manajemen Pengguna</h2>
          <p className="text-sm text-admin-textsecondary">Kelola data seluruh pelaku ekosistem AgroWaste.</p>
        </div>
        <button className="px-5 py-2.5 bg-admin-primary text-white text-sm font-bold rounded-xl hover:bg-admin-primary-hover transition-colors shadow-md shadow-admin-primary/20 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
          Tambah Pengguna Baru
        </button>
      </div>

      {/* Row 1: KPI Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-admin-primary-light text-admin-primary flex items-center justify-center group-hover:bg-admin-primary/20 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <span className="text-xs font-bold text-admin-semgreen flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
              +12%
            </span>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">TOTAL PENGGUNA AKTIF</span>
          <div className="text-3xl font-bold font-tabular text-admin-textprimary">24,592</div>
          <span className="text-xs text-admin-textsecondary font-medium block mt-1">Bulan Ini</span>
        </div>
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-admin-semgreen/10 text-admin-semgreen flex items-center justify-center group-hover:bg-admin-semgreen/20 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"/></svg>
            </div>
            <span className="text-xs font-bold text-admin-semgreen flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
              +5.2%
            </span>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">TOTAL PENJUAL (PETERNAK)</span>
          <div className="text-3xl font-bold font-tabular text-admin-textprimary">1,840</div>
          <span className="text-xs text-admin-textsecondary font-medium block mt-1">Bulan Ini</span>
        </div>
        <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl p-6 group transition-colors hover:border-admin-primary/20">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-xl bg-admin-semamber/10 text-admin-semamber flex items-center justify-center group-hover:bg-admin-semamber/20 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg>
            </div>
            <span className="text-xs font-bold text-admin-semred flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
              -2.1%
            </span>
          </div>
          <span className="text-[10px] font-bold text-admin-textsecondary tracking-wider uppercase block mb-1">MITRA LOGISTIK / KURIR</span>
          <div className="text-3xl font-bold font-tabular text-admin-textprimary">426</div>
          <span className="text-xs text-admin-textsecondary font-medium block mt-1">Bulan Ini</span>
        </div>
      </div>

      {/* User Table Surface */}
      <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl overflow-hidden">
        
        {/* Table Filter Controls */}
        <div className="p-6 border-b border-admin-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex bg-admin-warmbg p-1.5 rounded-xl gap-1 max-w-max">
            {Object.keys(filterMap).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 font-bold rounded-lg text-xs transition-all ${
                  activeFilter === filter
                    ? "bg-admin-surfacewhite text-admin-primary shadow-sm"
                    : "text-admin-textsecondary hover:text-admin-textprimary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-admin-textsecondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </span>
              <input type="text" placeholder="Cari nama atau email..." className="w-64 pl-9 pr-4 py-2 bg-admin-warmbg border border-admin-hairline rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-admin-primary" />
            </div>
            <button className="text-xs font-bold px-4 py-2 bg-[#EBE7E0] hover:bg-admin-hairline text-admin-textprimary rounded-xl flex items-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Ekspor CSV
            </button>
          </div>
        </div>

        {/* Data Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-admin-hairline bg-[#F9F8F6] text-[10px] font-bold text-admin-textsecondary uppercase tracking-wider">
                <th className="px-6 py-4">Nama Lengkap / Akun</th>
                <th className="px-6 py-4">Peran</th>
                <th className="px-6 py-4">Status Akun</th>
                <th className="px-6 py-4">Bergabung Pada</th>
                <th className="px-6 py-4 text-right">Opsi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-admin-hairline">
              {mockUsers
                .filter(u => activeFilter === "Semua Pengguna" || u.role.includes(filterMap[activeFilter]))
                .map((user) => (
                <tr key={user.id} className="hover:bg-admin-warmbg/40 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      {user.avatar ? (
                        <img className="w-10 h-10 rounded-full border border-admin-hairline object-cover group-hover:border-admin-primary transition-colors" src={user.avatar} alt={user.name}/>
                      ) : (
                        <div className="w-10 h-10 rounded-full border border-admin-hairline bg-admin-primary-light text-admin-primary flex items-center justify-center font-bold group-hover:border-admin-primary transition-colors">
                          {user.initials}
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-admin-textprimary group-hover:text-admin-primary transition-colors">{user.name}</div>
                        <span className="text-xs text-admin-textsecondary font-tabular">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-[10px] font-bold rounded-lg uppercase tracking-wider ${user.roleColor}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${user.statusBg}`}>
                      <span className={`w-2 h-2 rounded-full ${user.statusColor}`}></span> {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-admin-textsecondary font-tabular font-medium">{user.joinedAt}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-admin-primary hover:text-admin-primary-hover hover:underline text-sm font-bold transition-all">Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-admin-hairline bg-admin-surfacewhite flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-admin-textsecondary font-medium font-tabular">Menampilkan <span className="text-admin-textprimary font-bold">{mockUsers.filter(u => activeFilter === "Semua Pengguna" || u.role.includes(filterMap[activeFilter])).length}</span> dari <span className="text-admin-textprimary font-bold">24,592</span> pengguna</span>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-admin-hairline rounded-lg text-admin-textsecondary opacity-50 cursor-not-allowed">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-admin-primary text-white font-bold text-xs rounded-lg shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center border border-transparent hover:bg-admin-warmbg text-admin-textsecondary font-bold text-xs rounded-lg transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center border border-transparent hover:bg-admin-warmbg text-admin-textsecondary font-bold text-xs rounded-lg transition-colors">3</button>
            <span className="px-1 text-admin-textsecondary font-bold">...</span>
            <button className="w-8 h-8 flex items-center justify-center border border-transparent hover:bg-admin-warmbg text-admin-textsecondary font-bold text-xs rounded-lg transition-colors">820</button>
            <button className="w-8 h-8 flex items-center justify-center border border-admin-hairline rounded-lg text-admin-textsecondary hover:text-admin-primary hover:border-admin-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
