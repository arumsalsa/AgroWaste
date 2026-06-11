"use client";

import React, { useEffect, useState, useMemo } from "react";
import { apiFetch } from "@/lib/api";

interface Shipment {
  id: string;
  status: string;
  created_at: string;
  order?: {
    order_number: string | null;
    total_price: string | number;
    order_items?: Array<{
      quantity_kg: string | number;
      product?: {
        name: string;
      };
    }>;
  };
}

function formatRupiah(n: string | number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(n));
}

function formatDate(d: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(d));
}

export default function CourierPayments() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  useEffect(() => {
    apiFetch("/logistik/shipments")
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (json?.success && json?.data) {
          setShipments(json.data as Shipment[]);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const completedShipments = useMemo(() => shipments.filter((s) => s.status === "terkirim"), [shipments]);
  const activeShipments = useMemo(() => shipments.filter((s) => s.status === "dalam_perjalanan" || s.status === "dijadwalkan"), [shipments]);

  // Pricing formula: Rp 150.000 flat shipping rate per delivery
  const FEE_PER_DELIVERY = 150000;
  const availableBalance = completedShipments.length * FEE_PER_DELIVERY;
  const pendingBalance = activeShipments.length * FEE_PER_DELIVERY;

  // Convert shipments list into dynamic transaction history list
  const transactions = useMemo(() => {
    const list = shipments.map((s) => {
      const orderNo = s.order?.order_number || s.id.slice(0, 8).toUpperCase();
      const productTitle = s.order?.order_items?.[0]?.product?.name || "Limbah Organik";
      const totalWeight = s.order?.order_items?.reduce((sum, item) => sum + Number(item.quantity_kg || 0), 0) || 0;
      
      const isCompleted = s.status === "terkirim";
      const isTransit = s.status === "dalam_perjalanan";

      return {
        id: `#${orderNo}`,
        desc: `${productTitle} (${totalWeight.toLocaleString("id-ID")} kg)`,
        date: formatDate(s.created_at),
        type: totalWeight >= 1000 ? "Pengiriman Besar" : "Biaya Pengiriman",
        amount: FEE_PER_DELIVERY,
        isNegative: false,
        status: isCompleted ? "Selesai" : isTransit ? "Dalam Perjalanan" : "Dijadwalkan",
        statusColor: isCompleted
          ? "bg-green-100 text-green-700"
          : isTransit
          ? "bg-orange-100 text-orange-700"
          : "bg-gray-100 text-gray-700",
      };
    });

    // Add a mockup withdrawal if availableBalance was theoretically withdrawn (just for aesthetic)
    if (completedShipments.length > 5) {
      list.push({
        id: "#WD-TRX09",
        desc: "Penarikan ke Bank Mandiri",
        date: "14 Des 2025",
        type: "Penarikan",
        amount: 500000,
        isNegative: true,
        status: "Berhasil",
        statusColor: "bg-green-100 text-green-700",
      });
    }

    return list;
  }, [shipments, completedShipments.length]);

  const visibleTransactions = useMemo(() => {
    return transactions.filter((tx) => {
      const q = search.toLowerCase();
      return tx.id.toLowerCase().includes(q) || tx.desc.toLowerCase().includes(q);
    });
  }, [transactions, search]);

  const handleWithdrawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawAmount || Number(withdrawAmount) <= 0 || Number(withdrawAmount) > availableBalance) {
      alert("Masukkan nominal penarikan yang valid (tidak melebihi saldo tersedia).");
      return;
    }
    setWithdrawSuccess(true);
  };

  if (loading) {
    return (
      <div className="p-10 text-center animate-pulse text-courier-textsecondary">
        Memuat data pembayaran...
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in pb-20">

      {/* Top Section: Wallet Balance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-8 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-courier-textsecondary uppercase tracking-wider block mb-2">Saldo Tersedia</span>
            <h2 className="text-5xl font-bold text-courier-primary font-tabular mb-8">
              {formatRupiah(availableBalance)}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setWithdrawSuccess(false);
                setWithdrawAmount("");
                setShowWithdrawModal(true);
              }}
              disabled={availableBalance === 0}
              className="px-6 py-3 bg-courier-primary hover:bg-green-800 text-white rounded-xl text-sm font-bold shadow-md shadow-courier-primary/20 flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              Tarik Saldo
            </button>
            <span className="text-xs font-semibold text-courier-textsecondary">Pencairan langsung ke rekening Anda</span>
          </div>
        </div>

        <div className="bg-[#F3DCC4] border border-[#EACFA7] rounded-2xl p-8 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-bold text-courier-primary uppercase tracking-wider block mb-2 opacity-80">Pencairan Tertunda</span>
              <h2 className="text-3xl font-bold text-courier-textprimary font-tabular">
                {formatRupiah(pendingBalance)}
              </h2>
            </div>
            <div className="w-10 h-10 rounded-xl bg-courier-primary/10 text-courier-primary flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>
          <p className="text-xs font-semibold text-courier-textprimary opacity-75 mt-6 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Dari {activeShipments.length} pengiriman aktif yang tertunda
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
            <div className="text-2xl font-bold font-tabular text-courier-textprimary">+100%</div>
          </div>
        </div>

        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-courier-warmbg text-courier-textsecondary flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
          </div>
          <div>
            <span className="text-xs font-bold text-courier-textsecondary block mb-0.5">Pesanan Pengantaran Selesai</span>
            <div className="text-2xl font-bold font-tabular text-courier-textprimary">
              {completedShipments.length} Pesanan
            </div>
          </div>
        </div>

        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
          <div>
            <span className="text-xs font-bold text-courier-textsecondary block mb-0.5">Skor Kinerja Kurir</span>
            <div className="text-2xl font-bold font-tabular text-courier-textprimary">5.0 / 5.0</div>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="max-w-md relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-courier-textsecondary">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari transaksi..."
          className="w-full pl-9 pr-4 py-3 bg-courier-warmbg border border-courier-hairline rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-courier-primary text-courier-textprimary shadow-sm"
        />
      </div>

      {/* Transactions Table */}
      <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-courier-hairline flex justify-between items-center bg-white">
          <h3 className="text-lg font-bold text-courier-textprimary">Riwayat Transaksi Dompet</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-courier-hairline bg-courier-warmbg/50 text-[10px] font-bold text-courier-textsecondary uppercase tracking-wider">
                <th className="px-6 py-4">ID Pesanan / Rute</th>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4">Jenis</th>
                <th className="px-6 py-4">Uang Masuk / Keluar</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-courier-hairline bg-white">
              {visibleTransactions.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-xs text-courier-textsecondary">
                    Tidak ada riwayat transaksi dompet ditemukan.
                  </td>
                </tr>
              )}
              {visibleTransactions.map((tx, idx) => (
                <tr key={idx} className="hover:bg-courier-warmbg/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-courier-textprimary text-sm">{tx.id}</div>
                    <div className="text-xs text-courier-textsecondary mt-0.5">{tx.desc}</div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-courier-textsecondary">{tx.date}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded bg-courier-warmbg text-courier-textsecondary text-[10px] font-bold border border-courier-hairline">
                      {tx.type}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-sm font-bold font-tabular ${tx.isNegative ? "text-red-600" : "text-courier-primary"}`}>
                    {tx.isNegative ? "-" : "+"} {formatRupiah(tx.amount)}
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
      </div>

      {/* Modal Tarik Saldo */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-courier-surfacewhite w-full max-w-sm rounded-3xl border border-courier-hairline overflow-hidden p-8 text-center space-y-4 animate-fade-in shadow-xl">
            {withdrawSuccess ? (
              <>
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-courier-textprimary">Penarikan Berhasil</h3>
                  <p className="text-xs text-courier-textsecondary mt-2">
                    Uang sebesar {formatRupiah(withdrawAmount)} sedang dikirim ke rekening utama bank Anda.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowWithdrawModal(false)}
                  className="w-full mt-6 py-3 bg-courier-primary hover:bg-green-800 text-white rounded-xl text-sm font-bold transition-colors"
                >
                  Tutup
                </button>
              </>
            ) : (
              <form onSubmit={handleWithdrawSubmit} className="space-y-4 text-left">
                <h3 className="text-lg font-bold text-courier-textprimary text-center">Tarik Saldo Logistik</h3>
                <p className="text-xs text-courier-textsecondary text-center">
                  Maksimal saldo yang bisa ditarik: <span className="font-bold text-courier-primary">{formatRupiah(availableBalance)}</span>
                </p>
                <div>
                  <label className="block text-[10px] font-bold text-courier-textsecondary mb-1.5 uppercase">NOMINAL PENARIKAN (RP)</label>
                  <input
                    type="number"
                    required
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    max={availableBalance}
                    min={1}
                    placeholder="Masukkan jumlah..."
                    className="w-full px-4 py-2.5 bg-courier-warmbg border border-courier-hairline rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-courier-primary text-courier-textprimary"
                  />
                </div>
                <div className="flex gap-3 pt-4 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowWithdrawModal(false)}
                    className="px-4 py-2 text-xs font-bold text-courier-textsecondary hover:text-courier-textprimary transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-courier-primary hover:bg-green-800 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                  >
                    Tarik Sekarang
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
