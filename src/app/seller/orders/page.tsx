"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense, useState } from "react";

function OrdersContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");
  const [activeTab, setActiveTab] = useState("Semua");

  // Jika ada ID di URL, tampilkan halaman Detail Pesanan
  if (orderId) {
    return (
      <div className="space-y-6 animate-fade-in pb-10">
        <div className="flex items-center text-xs font-bold text-seller-textsecondary mb-2">
          <Link href="/seller/orders" className="hover:text-seller-primary">Pesanan</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-seller-textprimary">INV/20231027/AGR/9921</span>
        </div>

        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold tracking-tight text-seller-textprimary">Detail Pesanan</h2>
          <div className="flex gap-3">
            <button className="px-4 py-2 border-2 border-seller-primary text-seller-primary rounded-xl text-sm font-bold hover:bg-seller-primary-light transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              Hubungi Pembeli
            </button>
            <button className="px-4 py-2 bg-seller-primary text-white rounded-xl text-sm font-bold hover:bg-seller-primary-hover transition-colors flex items-center gap-2 shadow-md shadow-seller-primary/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
              Cetak Label Pengiriman
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Ringkasan Status */}
            <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-6 pb-6 border-b border-seller-hairline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-seller-primary-light text-seller-primary flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-seller-textsecondary tracking-wider block mb-0.5">ID PESANAN</span>
                    <h3 className="text-lg font-bold text-seller-textprimary">#AGR-9921-X3</h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-seller-textsecondary tracking-wider block mb-0.5">TANGGAL PESANAN</span>
                  <h3 className="text-sm font-bold text-seller-textprimary">27 Oktober 2023, 14:20 WIB</h3>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="text-[10px] font-bold text-seller-textsecondary tracking-wider block mb-2">STATUS PEMBAYARAN</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-seller-primary-light text-seller-primary text-[10px] font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-seller-primary"></span>
                    Selesai
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-seller-textsecondary tracking-wider block mb-2">METODE BAYAR</span>
                  <span className="text-sm font-bold text-seller-textprimary">Bank Transfer (BCA)</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-seller-textsecondary tracking-wider block mb-2">TOTAL PENDAPATAN</span>
                  <span className="text-lg font-bold text-seller-semgreen font-tabular">Rp 2.450.000</span>
                </div>
              </div>
            </div>

            {/* Rincian Produk */}
            <div className="bg-seller-surfacewhite border border-seller-hairline rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-seller-hairline">
                <h3 className="text-lg font-bold text-seller-textprimary">Rincian Produk</h3>
              </div>
              <div className="p-6">
                <div className="flex gap-6 items-center">
                  <div className="w-24 h-24 rounded-xl bg-[#5C4033] flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-[#5C4033]/20 flex items-center justify-center text-white/50 text-xs font-bold">IMG</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-seller-textprimary">Pupuk Kandang Sapi (Fermentasi)</h4>
                    <p className="text-sm text-seller-textsecondary mt-1">Kemasan 25kg &bull; Grade A Kaya Nitrogen</p>
                    
                    <div className="flex gap-8 mt-4">
                      <div>
                        <span className="text-[10px] font-bold text-seller-textsecondary tracking-wider block">HARGA SATUAN</span>
                        <span className="text-sm font-bold text-seller-textprimary font-tabular">Rp 49.000</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-seller-textsecondary tracking-wider block">KUANTITAS</span>
                        <span className="text-sm font-bold text-seller-textprimary font-tabular">50 Karung</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right self-end">
                    <span className="text-[10px] font-bold text-seller-textsecondary tracking-wider block mb-1">SUBTOTAL</span>
                    <span className="text-lg font-bold text-seller-semgreen font-tabular">Rp 2.450.000</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-[#F9F8F6] border-t border-seller-hairline flex justify-between items-center">
                <span className="font-bold text-seller-textprimary">Total Pesanan</span>
                <span className="text-xl font-bold text-seller-textprimary font-tabular">Rp 2.450.000</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Informasi Pembeli */}
            <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <h3 className="font-bold text-seller-textprimary">Informasi Pembeli</h3>
              </div>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-seller-hairline">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                  PB
                </div>
                <div>
                  <h4 className="font-bold text-seller-textprimary">Pak Budiman</h4>
                  <span className="text-xs text-seller-textsecondary">budiman_tani@email.com</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-seller-textsecondary tracking-wider block mb-1">ALAMAT PENGIRIMAN</span>
                  <p className="text-sm text-seller-textprimary leading-relaxed">
                    Jl. Agrowisata No. 45, Desa Sukamaju, Kec. Ciawi, Bogor, Jawa Barat 16720
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-seller-textsecondary tracking-wider block mb-1">NO. TELEPON</span>
                  <p className="text-sm font-bold text-seller-textprimary font-tabular">+62 812-3456-7890</p>
                </div>
              </div>
            </div>

            {/* Status Pengiriman */}
            <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                <h3 className="font-bold text-seller-textprimary">Status Pengiriman</h3>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-seller-hairline before:to-transparent mb-8">
                
                <div className="relative flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white flex-shrink-0 relative z-10 shadow-sm"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-orange-500">Pesanan Sedang Dikirim</h4>
                      <span className="text-[10px] text-seller-textsecondary text-right font-tabular">Hari ini,<br/>10:15</span>
                    </div>
                    <p className="text-[10px] text-seller-textsecondary mt-1">Kurir (Agus - Logistik AgroWaste) sedang dalam perjalanan menuju lokasi pembeli.</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#EAE6E1] border-4 border-white flex-shrink-0 relative z-10"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-seller-textsecondary">Paket Diserahkan ke Kurir</h4>
                      <span className="text-[10px] text-seller-textsecondary text-right font-tabular">28 Okt,<br/>08:30</span>
                    </div>
                    <p className="text-[10px] text-seller-textsecondary mt-1">Serah terima paket di Warehouse Peternak berhasil.</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#EAE6E1] border-4 border-white flex-shrink-0 relative z-10"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-bold text-seller-textsecondary">Pesanan Diproses</h4>
                      <span className="text-[10px] text-seller-textsecondary text-right font-tabular">27 Okt,<br/>16:00</span>
                    </div>
                    <p className="text-[10px] text-seller-textsecondary mt-1">Penjual sedang menyiapkan barang dan pengemasan.</p>
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-xl border border-dashed border-seller-hairline bg-[#F9F8F6] flex justify-between items-center">
                <span className="text-xs font-bold text-seller-textsecondary">No. Resi:</span>
                <span className="text-xs font-bold text-seller-textprimary font-tabular tracking-wider">AW-LOG-7728192</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tampilan Utama (Daftar Pesanan)
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <h2 className="text-3xl font-bold tracking-tight text-seller-textprimary mb-6">Daftar Pesanan</h2>

      {/* Table Section */}
      <div className="bg-seller-surfacewhite border border-seller-hairline rounded-2xl overflow-hidden">
        {/* Table Header */}
        <div className="p-6 border-b border-seller-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex bg-seller-warmbg p-1.5 rounded-xl gap-1 max-w-max">
            {["Semua", "Menunggu Konfirmasi", "Diproses", "Dikirim", "Selesai", "Dibatalkan"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-bold rounded-lg text-xs transition-all ${
                  activeTab === tab
                    ? "bg-seller-surfacewhite text-seller-primary shadow-sm"
                    : "text-seller-textsecondary hover:text-seller-textprimary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="text-xs font-bold px-4 py-2 bg-[#EBE7E0] hover:bg-seller-hairline text-seller-textprimary rounded-xl flex items-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              Rentang Tanggal
            </button>
            <button className="text-xs font-bold px-4 py-2 bg-[#EBE7E0] hover:bg-seller-hairline text-seller-textprimary rounded-xl flex items-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
              Filter
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F9F8F6] text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider border-b border-seller-hairline">
              <tr>
                <th className="px-6 py-4">Detail Pesanan</th>
                <th className="px-6 py-4">Pembeli</th>
                <th className="px-6 py-4">Total Pembayaran</th>
                <th className="px-6 py-4">Status Pembayaran</th>
                <th className="px-6 py-4">Status Pengiriman</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seller-hairline bg-white">
              {/* Order 1 */}
              <tr className="hover:bg-seller-warmbg/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-bold text-seller-semgreen text-xs mb-1">#AGR-9921-X3</div>
                  <div className="text-[10px] text-seller-textsecondary mb-2">12 Oct 2023, 14:20</div>
                  <div className="font-semibold text-seller-textprimary text-sm">Pupuk Kandang<br/>Sapi (25kg) x 50</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[10px]">PB</div>
                    <span className="font-bold text-seller-textprimary">Pak<br/>Budiman</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-seller-textprimary font-tabular text-base">
                    <span className="text-xs mr-1">Rp</span>2.450.000
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-seller-primary-light text-seller-semgreen text-[10px] font-bold tracking-wider uppercase">Selesai</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col items-center">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold tracking-wider mb-1">Dalam Pengiriman</span>
                    <span className="text-[8px] text-seller-textsecondary text-center">Pengemudi: Ahmad (B<br/>1234 XY)</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="/seller/orders?id=AGR-9921-X3" className="inline-block px-4 py-2 border border-seller-primary text-seller-primary rounded-lg text-xs font-bold hover:bg-seller-primary hover:text-white transition-colors">
                    Lihat Detail
                  </Link>
                </td>
              </tr>

              {/* Order 2 */}
              <tr className="hover:bg-seller-warmbg/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-bold text-seller-semgreen text-xs mb-1">#AGR-9877-K2</div>
                  <div className="text-[10px] text-seller-textsecondary mb-2">12 Oct 2023, 10:45</div>
                  <div className="font-semibold text-seller-textprimary text-sm">Limbah Jerami<br/>Premium (100kg) x 10</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-seller-primary-light text-seller-primary flex items-center justify-center font-bold text-[10px]">SR</div>
                    <span className="font-bold text-seller-textprimary">Siti<br/>Rahma</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-seller-textprimary font-tabular text-base">
                    <span className="text-xs mr-1">Rp</span>1.200.000
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold tracking-wider uppercase">Menunggu</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col items-center">
                    <span className="px-3 py-1 rounded-full bg-[#EAE6E1] text-seller-textsecondary text-[10px] font-bold tracking-wider mb-1">Menunggu</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="/seller/orders?id=AGR-9877-K2" className="inline-block px-4 py-2 border border-seller-primary text-seller-primary rounded-lg text-xs font-bold hover:bg-seller-primary hover:text-white transition-colors">
                    Lihat Detail
                  </Link>
                </td>
              </tr>

              {/* Order 3 */}
              <tr className="hover:bg-seller-warmbg/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-bold text-seller-semgreen text-xs mb-1">#AGR-9554-Z1</div>
                  <div className="text-[10px] text-seller-textsecondary mb-2">11 Oct 2023, 16:12</div>
                  <div className="font-semibold text-seller-textprimary text-sm">Pakan Ternak<br/>Fermentasi x 20</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-[10px]">HR</div>
                    <span className="font-bold text-seller-textprimary">Herry<br/>Rosadi</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-seller-textprimary font-tabular text-base">
                    <span className="text-xs mr-1">Rp</span>3.800.000
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-seller-primary-light text-seller-semgreen text-[10px] font-bold tracking-wider uppercase">Selesai</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col items-center">
                    <span className="px-3 py-1 rounded-full bg-seller-primary-light text-seller-primary text-[10px] font-bold tracking-wider mb-1">Terkirim</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="/seller/orders?id=AGR-9554-Z1" className="inline-block px-4 py-2 border border-seller-primary text-seller-primary rounded-lg text-xs font-bold hover:bg-seller-primary hover:text-white transition-colors">
                    Lihat Detail
                  </Link>
                </td>
              </tr>

              {/* Order 4 */}
              <tr className="hover:bg-seller-warmbg/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-bold text-seller-semgreen text-xs mb-1">#AGR-9210-L4</div>
                  <div className="text-[10px] text-seller-textsecondary mb-2">10 Oct 2023, 09:05</div>
                  <div className="font-semibold text-seller-textprimary text-sm">Pupuk Cair<br/>Organik (5L) x 15</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#5C4033] text-white flex items-center justify-center font-bold text-[10px]">DA</div>
                    <span className="font-bold text-seller-textprimary">Dedi<br/>Anwar</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-seller-textprimary font-tabular text-base">
                    <span className="text-xs mr-1">Rp</span>1.125.000
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-bold tracking-wider uppercase">Batal</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col items-center">
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-bold tracking-wider mb-1">Dibatalkan</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link href="/seller/orders?id=AGR-9210-L4" className="inline-block px-4 py-2 border border-seller-primary text-seller-primary rounded-lg text-xs font-bold hover:bg-seller-primary hover:text-white transition-colors">
                    Lihat Detail
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-seller-hairline flex items-center justify-between text-xs text-seller-textsecondary bg-[#F9F8F6]">
          <span>Menampilkan 1-4 dari 28 pesanan</span>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-seller-hairline bg-white hover:bg-seller-warmbg disabled:opacity-50" disabled>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-seller-primary text-white font-bold shadow-md">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-seller-hairline bg-white hover:bg-seller-warmbg">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-seller-hairline bg-white hover:bg-seller-warmbg">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-seller-textsecondary">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-seller-hairline bg-white hover:bg-seller-warmbg">7</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-seller-hairline bg-white hover:bg-seller-warmbg">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrdersPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center animate-pulse text-seller-textsecondary">Memuat data pesanan...</div>}>
      <OrdersContent />
    </Suspense>
  );
}
