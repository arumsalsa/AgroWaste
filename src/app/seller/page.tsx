"use client";

import Link from "next/link";

export default function OverviewPage() {
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-seller-textprimary mb-1">Selamat Pagi, Pak Sugeng!</h2>
          <p className="text-sm text-seller-textsecondary">Berikut ringkasan operasional AgroWaste hari ini.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border border-seller-hairline rounded-xl bg-seller-surfacewhite text-sm font-semibold text-seller-textsecondary">
          <svg className="w-4 h-4 text-seller-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          24 Oktober 2026
        </div>
      </div>

      {/* Top Metrik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-seller-primary-light text-seller-primary flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="text-xs font-bold text-seller-semgreen flex items-center">
              <svg className="w-3 h-3 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              +12.5%
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">TOTAL PENJUALAN (BULANAN)</span>
            <h3 className="text-2xl font-bold tracking-tight text-seller-textprimary">Rp 12.450.000</h3>
          </div>
        </div>

        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
            </div>
            <span className="text-xs font-bold text-amber-500">8 Prioritas</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">PESANAN PERLU DIPROSES</span>
            <h3 className="text-2xl font-bold tracking-tight text-seller-textprimary">24 Aktif</h3>
          </div>
        </div>

        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            </div>
            <span className="text-xs font-bold text-seller-textprimary">3 SKU</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">STOK SAAT INI (TON)</span>
            <h3 className="text-2xl font-bold tracking-tight text-seller-textprimary">4.2 MT</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Performance Chart (Mock) */}
        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl lg:col-span-2">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-lg font-bold text-seller-textprimary">Performa Penjualan</h3>
              <p className="text-sm text-seller-textsecondary">Distribusi pendapatan mingguan</p>
            </div>
            <select className="px-3 py-1.5 border border-seller-hairline rounded-lg text-xs font-semibold text-seller-textprimary bg-seller-surfacewhite outline-none cursor-pointer">
              <option>7 Hari Terakhir</option>
              <option>Bulan Ini</option>
            </select>
          </div>
          
          {/* Simple CSS Bar Chart Mock */}
          <div className="h-48 flex items-end justify-between gap-2 px-2">
            {[40, 60, 45, 85, 55, 75, 35].map((height, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2">
                <div 
                  className={`w-full rounded-t-sm transition-all duration-500 ${i === 5 ? 'bg-seller-primary' : 'bg-seller-primary-light'}`} 
                  style={{height: `${height}%`}}
                ></div>
                <span className="text-[10px] font-bold text-seller-textsecondary">{['SEN','SEL','RAB','KAM','JUM','SAB','MIN'][i]}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-px bg-seller-hairline mt-[-18px] relative z-0"></div>
        </div>

        {/* Impact Score Card */}
        <div className="bg-seller-primary rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-lg shadow-seller-primary/20">
          {/* Background decoration */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Skor Dampak</h3>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-5xl font-bold tracking-tight">850</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold tracking-wider uppercase">Peringkat Perunggu</span>
            </div>
            
            <p className="text-sm text-white/90 leading-relaxed mb-6">
              Bulan ini kamu sudah mengalihkan 1,2 ton limbah organik. Tinggal 150 poin lagi menuju Peringkat Perak!
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm text-white/95">
                <svg className="w-5 h-5 text-white/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Juara Limbah jadi Pakan
              </li>
              <li className="flex items-start gap-2 text-sm text-white/95">
                <svg className="w-5 h-5 text-white/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                Logistik Emisi Rendah
              </li>
            </ul>
          </div>
          
          <button className="w-full py-3 bg-white text-seller-primary rounded-xl font-bold text-sm shadow-sm hover:bg-gray-50 transition-colors">
            Lihat Laporan Dampak
          </button>
        </div>
      </div>

      {/* Recent Orders Table */}
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
                <th className="px-6 py-4">Pembeli</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Jumlah</th>
                <th className="px-6 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-seller-hairline bg-white">
              {/* Order 1 */}
              <tr className="hover:bg-seller-warmbg/30 transition-colors">
                <td className="px-6 py-4 font-bold text-seller-textprimary">#AW-9281</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#EAE6E1]"></div>
                    <span className="font-semibold text-seller-textprimary">Sapi Manure<br/><span className="text-seller-textsecondary font-normal">(Olahan)</span></span>
                  </div>
                </td>
                <td className="px-6 py-4 text-seller-textprimary">Koperasi<br/>Maju Jaya</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold tracking-wider">
                    Menunggu Penjemputan
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-seller-textprimary font-tabular">Rp 2.400.000</td>
                <td className="px-6 py-4">
                  <Link href="/seller/orders?id=AW-9281" className="text-seller-primary hover:text-seller-primary-hover">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </Link>
                </td>
              </tr>
              
              {/* Order 2 */}
              <tr className="hover:bg-seller-warmbg/30 transition-colors">
                <td className="px-6 py-4 font-bold text-seller-textprimary">#AW-9280</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#EAE6E1]"></div>
                    <span className="font-semibold text-seller-textprimary">Jerami Jagung<br/><span className="text-seller-textsecondary font-normal">Pelet</span></span>
                  </div>
                </td>
                <td className="px-6 py-4 text-seller-textprimary">CV Subur<br/>Makmur</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-seller-primary-light text-seller-primary text-[10px] font-bold tracking-wider">
                    Selesai
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-seller-textprimary font-tabular">Rp 1.150.000</td>
                <td className="px-6 py-4">
                  <Link href="/seller/orders?id=AW-9280" className="text-seller-primary hover:text-seller-primary-hover">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </Link>
                </td>
              </tr>

              {/* Order 3 */}
              <tr className="hover:bg-seller-warmbg/30 transition-colors">
                <td className="px-6 py-4 font-bold text-seller-textprimary">#AW-9278</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#EAE6E1]"></div>
                    <span className="font-semibold text-seller-textprimary">Sapi Manure<br/><span className="text-seller-textsecondary font-normal">(Mentah)</span></span>
                  </div>
                </td>
                <td className="px-6 py-4 text-seller-textprimary">Pak Budi<br/>(Ind.)</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold tracking-wider">
                    Dalam Pengiriman
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-seller-textprimary font-tabular">Rp 850.000</td>
                <td className="px-6 py-4">
                  <Link href="/seller/orders?id=AW-9278" className="text-seller-primary hover:text-seller-primary-hover">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
