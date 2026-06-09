"use client";

import React from "react";

const mockTransactions = [
  {
    id: "#AW-90214",
    desc: "Kompos Cair (500kg)",
    date: "18 Des 2023",
    type: "Biaya Pengiriman",
    amount: "Rp 125.000",
    isNegative: false,
    status: "Selesai",
    statusColor: "bg-green-100 text-green-700"
  },
  {
    id: "#AW-89942",
    desc: "Kotoran Mentah (2,5 Ton)",
    date: "17 Des 2023",
    type: "Pengiriman Besar",
    amount: "Rp 450.000",
    isNegative: false,
    status: "Selesai",
    statusColor: "bg-green-100 text-green-700"
  },
  {
    id: "#AW-88712",
    desc: "Limbah Unggas (100kg)",
    date: "16 Des 2023",
    type: "Biaya Pengiriman",
    amount: "Rp 85.000",
    isNegative: false,
    status: "Dalam Perjalanan",
    statusColor: "bg-orange-100 text-orange-700"
  },
  {
    id: "#AW-88540",
    desc: "Bio-slurry Organik",
    date: "15 Des 2023",
    type: "Standar",
    amount: "Rp 210.000",
    isNegative: false,
    status: "Selesai",
    statusColor: "bg-green-100 text-green-700"
  },
  {
    id: "#AW-88122",
    desc: "Penarikan ke BCA",
    date: "14 Des 2023",
    type: "Penarikan",
    amount: "- Rp 1.500.000",
    isNegative: true,
    status: "Berhasil",
    statusColor: "bg-green-100 text-green-700"
  }
];

export default function CourierPayments() {
  return (
    <div className="space-y-8 animate-fade-in pb-20">

      {/* Top Section: Wallet Balance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-8 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-courier-textsecondary uppercase tracking-wider block mb-2">Saldo Tersedia</span>
            <h2 className="text-5xl font-bold text-courier-primary font-tabular mb-8">Rp 4.250.000</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-courier-primary hover:bg-green-800 text-white rounded-xl text-sm font-bold shadow-md shadow-courier-primary/20 flex items-center gap-2 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              Tarik Saldo
            </button>
            <span className="text-xs font-semibold text-courier-textsecondary">Pencairan berikutnya: 24 Des 2023</span>
          </div>
        </div>

        <div className="bg-[#F3DCC4] border border-[#EACFA7] rounded-2xl p-8 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-courier-primary uppercase tracking-wider block mb-2 opacity-80">Pencairan Tertunda</span>
              <h2 className="text-3xl font-bold text-courier-textprimary font-tabular">Rp 845.200</h2>
            </div>
            <div className="w-10 h-10 rounded-xl bg-courier-primary/10 text-courier-primary flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>
          <p className="text-xs font-semibold text-courier-textprimary opacity-75 mt-6 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Dari 12 pengiriman yang sedang berjalan
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
          </div>
          <div>
            <span className="text-xs font-bold text-courier-textsecondary block mb-0.5">Pertumbuhan Bulanan</span>
            <div className="text-2xl font-bold font-tabular text-courier-textprimary">+12.5%</div>
          </div>
        </div>

        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-courier-warmbg text-courier-textsecondary flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
          </div>
          <div>
            <span className="text-xs font-bold text-courier-textsecondary block mb-0.5">Pesanan Selesai</span>
            <div className="text-2xl font-bold font-tabular text-courier-textprimary">142</div>
          </div>
        </div>

        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
          <div>
            <span className="text-xs font-bold text-courier-textsecondary block mb-0.5">Skor Kinerja</span>
            <div className="text-2xl font-bold font-tabular text-courier-textprimary">4.9/5.0</div>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="max-w-md relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-courier-textsecondary">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </span>
        <input type="text" placeholder="Cari pesanan..." className="w-full pl-9 pr-4 py-3 bg-courier-warmbg border border-courier-hairline rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-courier-primary text-courier-textprimary shadow-sm" />
      </div>

      {/* Transactions Table */}
      <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-courier-hairline flex justify-between items-center">
          <h3 className="text-lg font-bold text-courier-textprimary">Riwayat Transaksi</h3>
          <button className="text-xs font-bold text-courier-textsecondary hover:text-courier-textprimary flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-courier-hairline bg-courier-warmbg/50 text-[10px] font-bold text-courier-textsecondary uppercase tracking-wider">
                <th className="px-6 py-4">ID PESANAN</th>
                <th className="px-6 py-4">TANGGAL</th>
                <th className="px-6 py-4">JENIS</th>
                <th className="px-6 py-4">JUMLAH</th>
                <th className="px-6 py-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-courier-hairline">
              {mockTransactions.map((tx, idx) => (
                <tr key={idx} className="hover:bg-courier-warmbg/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-courier-textprimary text-sm">{tx.id}</div>
                    <div className="text-xs text-courier-textsecondary mt-0.5">{tx.desc}</div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-courier-textsecondary">{tx.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded bg-courier-warmbg text-courier-textsecondary text-[10px] font-bold border border-courier-hairline`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-sm font-bold font-tabular ${tx.isNegative ? 'text-red-600' : 'text-courier-primary'}`}>
                    {tx.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${tx.statusColor}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 bg-courier-warmbg/30 border-t border-courier-hairline flex justify-center items-center">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center bg-courier-surfacewhite border border-courier-hairline rounded-lg text-courier-textsecondary hover:text-courier-textprimary shadow-sm transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-courier-primary text-white font-bold text-xs rounded-lg shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center bg-courier-surfacewhite border border-transparent hover:border-courier-hairline text-courier-textsecondary font-bold text-xs rounded-lg transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center bg-courier-surfacewhite border border-transparent hover:border-courier-hairline text-courier-textsecondary font-bold text-xs rounded-lg transition-colors">3</button>
            <button className="w-8 h-8 flex items-center justify-center bg-courier-surfacewhite border border-courier-hairline rounded-lg text-courier-textsecondary hover:text-courier-textprimary shadow-sm transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
