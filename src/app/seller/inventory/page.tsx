"use client";

import { useState } from "react";

export default function InventoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-seller-textprimary mb-1">Manajemen Inventaris</h2>
        <p className="text-sm text-seller-textsecondary">Kelola ketersediaan limbah organik peternakan Anda.</p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Produk */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="text-seller-primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
            </div>
            <span className="text-xs font-bold text-seller-semgreen">+4%</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-seller-textsecondary block mb-1">Total Produk</span>
            <h3 className="text-xl font-bold text-seller-textprimary font-tabular">12 Produk</h3>
          </div>
        </div>

        {/* Stock Tersedia */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="text-amber-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            </div>
          </div>
          <div>
            <span className="text-[10px] font-bold text-seller-textsecondary block mb-1">Stock Tersedia</span>
            <h3 className="text-xl font-bold text-seller-textprimary font-tabular">14.5 Ton</h3>
          </div>
        </div>

        {/* Nilai Inventaris */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-5 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="text-blue-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
          </div>
          <div>
            <span className="text-[10px] font-bold text-seller-textsecondary block mb-1">Nilai Inventaris</span>
            <h3 className="text-xl font-bold text-seller-textprimary font-tabular">Rp 2.4M</h3>
          </div>
        </div>

        {/* Impact Score */}
        <div className="bg-seller-primary p-5 rounded-2xl text-white shadow-lg shadow-seller-primary/20">
          <div className="flex justify-between items-start mb-4">
            <div className="text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
          </div>
          <div>
            <span className="text-[10px] font-bold text-white/90 block mb-1">Skor Dampak</span>
            <h3 className="text-xl font-bold text-white font-tabular">842 CO2e</h3>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-seller-surfacewhite border border-seller-hairline rounded-2xl overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-seller-hairline flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-seller-textsecondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input type="text" placeholder="Cari nama produk..." className="w-full pl-9 pr-4 py-2 border border-seller-hairline rounded-xl bg-[#F9F8F6] text-xs focus:outline-none focus:ring-1 focus:ring-seller-primary" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-seller-hairline rounded-xl bg-seller-surfacewhite text-xs font-semibold text-seller-textsecondary hover:bg-seller-warmbg transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
              Filter
            </button>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-seller-primary hover:bg-seller-primary-hover text-white rounded-xl text-xs font-bold transition-colors w-full md:w-auto justify-center">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
            Tambah Produk
          </button>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F9F8F6] text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider border-b border-seller-hairline">
              <tr>
                <th className="px-6 py-4">Detail Produk</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Stok</th>
                <th className="px-6 py-4">Harga</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seller-hairline bg-white">
              {/* Row 1 */}
              <tr className="hover:bg-seller-warmbg/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#EAE6E1] overflow-hidden">
                      {/* Placeholder for Manure Image */}
                      <div className="w-full h-full bg-[#5C4033]/20 flex items-center justify-center text-[#5C4033] text-xs">IMG</div>
                    </div>
                    <div>
                      <div className="font-bold text-seller-textprimary text-sm">Pupuk Kandang Sapi Murni</div>
                      <div className="text-[10px] text-seller-textsecondary mt-0.5 uppercase tracking-wider">SKU: AGW-001-SAPI</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-[#EAE6E1] text-seller-textsecondary text-[10px] font-bold tracking-wider">Limbah Ternak</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-seller-semgreen tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-seller-semgreen"></span>
                    AKTIF
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-seller-textprimary">
                  2,500 <span className="text-[10px] text-seller-textsecondary font-normal">kg</span>
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-seller-semgreen">Rp 1.500</div>
                  <div className="text-[10px] text-seller-textsecondary">/ kg</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <button className="text-seller-textsecondary hover:text-seller-primary transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </button>
                    <button className="text-seller-textsecondary hover:text-seller-semred transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-seller-warmbg/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#EAE6E1] overflow-hidden">
                      <div className="w-full h-full bg-[#8B5A2B]/20 flex items-center justify-center text-[#8B5A2B] text-xs">IMG</div>
                    </div>
                    <div>
                      <div className="font-bold text-seller-textprimary text-sm">Limbah Kambing Halus</div>
                      <div className="text-[10px] text-seller-textsecondary mt-0.5 uppercase tracking-wider">SKU: AGW-042-KAMB</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-[#EAE6E1] text-seller-textsecondary text-[10px] font-bold tracking-wider">Limbah Ternak</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-seller-semgreen tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-seller-semgreen"></span>
                    ACTIVE
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-seller-textprimary">
                  850 <span className="text-[10px] text-seller-textsecondary font-normal">kg</span>
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-seller-semgreen">Rp 3.200</div>
                  <div className="text-[10px] text-seller-textsecondary">/ kg</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <button className="text-seller-textsecondary hover:text-seller-primary transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </button>
                    <button className="text-seller-textsecondary hover:text-seller-semred transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-seller-warmbg/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#EAE6E1] overflow-hidden">
                      <div className="w-full h-full bg-[#2F4F4F]/20 flex items-center justify-center text-[#2F4F4F] text-xs">IMG</div>
                    </div>
                    <div>
                      <div className="font-bold text-seller-textprimary text-sm">Bio-Kompos Premium</div>
                      <div className="text-[10px] text-seller-textsecondary mt-0.5 uppercase tracking-wider">SKU: AGW-088-COMP</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-[#EAE6E1] text-seller-textsecondary text-[10px] font-bold tracking-wider">Olahan</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-seller-textsecondary tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-seller-textsecondary"></span>
                    DRAF
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-seller-textprimary">
                  0 <span className="text-[10px] text-seller-textsecondary font-normal">kg</span>
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-seller-semgreen">Rp 5.500</div>
                  <div className="text-[10px] text-seller-textsecondary">/ kg</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <button className="text-seller-textsecondary hover:text-seller-primary transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </button>
                    <button className="text-seller-textsecondary hover:text-seller-semred transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-seller-hairline flex items-center justify-between text-xs text-seller-textsecondary">
          <span>Menampilkan 1-3 dari 12 produk</span>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-seller-hairline bg-seller-surfacewhite hover:bg-seller-warmbg disabled:opacity-50" disabled>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-seller-primary text-white font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-seller-hairline bg-seller-surfacewhite hover:bg-seller-warmbg">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-seller-hairline bg-seller-surfacewhite hover:bg-seller-warmbg">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-seller-hairline bg-seller-surfacewhite hover:bg-seller-warmbg">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Tambah Produk (Simplified) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-seller-surfacewhite w-full max-w-md rounded-2xl border border-seller-hairline overflow-hidden animate-fade-in flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-seller-hairline flex justify-between items-center">
              <h3 className="font-bold text-seller-textprimary">Tambah Produk Limbah Baru</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-seller-textsecondary hover:text-seller-textprimary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto space-y-4">
              <div>
                <label className="block text-xs font-semibold text-seller-textsecondary mb-1">Nama Produk</label>
                <input type="text" placeholder="Mis: Pupuk Kandang Sapi (Kering)" className="w-full px-3 py-2 bg-seller-warmbg border border-seller-hairline rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-seller-primary" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-seller-textsecondary mb-1">Harga (Rp/kg)</label>
                  <input type="number" placeholder="2000" className="w-full px-3 py-2 bg-seller-warmbg border border-seller-hairline rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-seller-primary" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-seller-textsecondary mb-1">Stok Awal (kg)</label>
                  <input type="number" placeholder="100" className="w-full px-3 py-2 bg-seller-warmbg border border-seller-hairline rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-seller-primary" />
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-seller-hairline flex justify-end gap-3 bg-[#F9F8F6]">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs font-bold text-seller-textsecondary hover:text-seller-textprimary transition-colors">Batal</button>
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-seller-primary hover:bg-seller-primary-hover text-white rounded-lg text-xs font-bold transition-colors">Simpan Produk</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
