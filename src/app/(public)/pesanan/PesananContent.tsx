"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search, MapPin, CheckCircle2, SlidersHorizontal, Leaf, Receipt,
  Truck, Clock, XCircle,
} from "lucide-react";
import { apiFetch } from "@/lib/api";
import { getToken } from "@/lib/auth";

interface OrderProduct {
  id: string;
  name: string;
  price: string;
  unit: string;
}

interface Order {
  id: string;
  order_number?: string;
  total_price: string | number;
  quantity_kg?: string | number;
  status: string;
  metode_pengiriman?: string;
  created_at: string;
  product?: OrderProduct;
}

function formatRupiah(n: string | number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", minimumFractionDigits: 0,
  }).format(Number(n));
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric", month: "short", year: "numeric",
  }).format(new Date(dateStr));
}

interface StatusMeta {
  label: string;
  Icon: React.ElementType;
  color: string;
  bg: string;
}

function statusMeta(status: string): StatusMeta {
  switch (status) {
    case "menunggu_pembayaran":
      return { label: "Menunggu Pembayaran", Icon: Clock,         color: "text-amber-600",   bg: "bg-amber-100"       };
    case "dikonfirmasi":
      return { label: "Dikonfirmasi",         Icon: CheckCircle2, color: "text-blue-600",    bg: "bg-blue-100"        };
    case "dikirim":
      return { label: "Sedang Dikirim",       Icon: Truck,        color: "text-amber-600",   bg: "bg-amber-100"       };
    case "selesai":
      return { label: "Selesai",              Icon: CheckCircle2, color: "text-[#009A44]",   bg: "bg-[#009A44]/10"    };
    case "ditolak":
      return { label: "Ditolak",              Icon: XCircle,      color: "text-red-600",     bg: "bg-red-100"         };
    default:
      return { label: "Menunggu",             Icon: Clock,        color: "text-amber-600",   bg: "bg-amber-100"       };
  }
}

export default function PesananContent() {
  const router = useRouter();
  const [orders,  setOrders]  = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    if (!getToken()) {
      router.push("/login?callbackUrl=/pesanan");
      return;
    }
    apiFetch("/orders")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat riwayat pesanan.");
        return res.json();
      })
      .then((json) => {
        setOrders(json.data as Order[]);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [router]);

  return (
    <div className="flex-1 animate-fade-in pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section & Search Bar */}
        <section className="bg-[#1C231F] rounded-[32px] px-6 py-10 md:py-12 mt-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-md">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#009A44] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4ADE80] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />

          <h1 className="text-3xl md:text-4xl font-land-heading font-bold text-white mb-8 relative z-10" style={{ textWrap: "balance" }}>
            Pantau <span className="text-[#4ADE80]">Pesanan</span> Anda.
          </h1>

          <div className="w-full max-w-3xl relative z-20 group">
            <input
              type="text"
              placeholder="Cari ID Pesanan atau nama produk..."
              className="w-full h-16 md:h-20 pl-14 md:pl-16 pr-32 md:pr-40 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 text-base md:text-xl focus:outline-none focus:bg-white/20 focus:border-[#4ADE80] transition-all shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            />
            <Search className="w-6 h-6 md:w-8 md:h-8 text-white/60 absolute left-5 md:left-6 top-1/2 -translate-y-1/2 group-focus-within:text-[#4ADE80] transition-colors" />
            <button
              type="button"
              className="absolute right-2 top-2 bottom-2 px-6 md:px-10 bg-[#009A44] hover:bg-[#008139] text-white rounded-full font-bold md:text-lg transition-transform hover:scale-105 shadow-md flex items-center justify-center"
            >
              Cari
            </button>
          </div>
        </section>

        {/* Main Layout: Sidebar & List */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12">

          {/* Left Sidebar (Filter) */}
          <div className="w-full lg:w-1/4 shrink-0 flex flex-col gap-6">
            <div className="bg-white border border-[#E8E0D5] rounded-[32px] p-6 md:p-8 shadow-[0_8px_24px_rgba(44,57,48,0.04)] sticky top-24">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E8E0D5]">
                <SlidersHorizontal className="w-5 h-5 text-land-ink" />
                <h2 className="font-land-heading font-bold text-xl text-land-ink">Filter</h2>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-sm text-land-ink mb-4 uppercase tracking-wider">Status</h3>
                <div className="space-y-4">
                  {["Semua Status", "Menunggu Pembayaran", "Sedang Diproses", "Sedang Dikirim", "Selesai"].map((s, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="status" defaultChecked={i === 0} className="w-5 h-5 border-[#E8E0D5] text-[#009A44] focus:ring-[#009A44] transition-colors cursor-pointer" />
                      <span className="text-land-muted font-medium group-hover:text-land-ink transition-colors">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-sm text-land-ink mb-4 uppercase tracking-wider">Waktu Beli</h3>
                <div className="space-y-4">
                  {["Semua Waktu", "30 Hari Terakhir", "3 Bulan Terakhir", "Tahun Ini"].map((t, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" name="time" defaultChecked={i === 0} className="w-5 h-5 border-[#E8E0D5] text-[#009A44] focus:ring-[#009A44] transition-colors cursor-pointer" />
                      <span className="text-land-muted font-medium group-hover:text-land-ink transition-colors">{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="button" className="btn-clay-secondary w-full py-3.5">
                Terapkan Filter
              </button>
            </div>
          </div>

          {/* Right Content (Order List) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">

            {/* Loading skeletons */}
            {loading && [1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-[#E8E0D5] rounded-[32px] p-6 animate-pulse h-52" />
            ))}

            {/* Error */}
            {!loading && error && (
              <div className="bg-white border border-[#E8E0D5] rounded-[32px] p-12 text-center shadow-sm">
                <p className="text-land-muted font-bold mb-3">{error}</p>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="text-[#009A44] font-bold text-sm hover:underline"
                >
                  Coba lagi
                </button>
              </div>
            )}

            {/* Empty */}
            {!loading && !error && orders.length === 0 && (
              <div className="bg-white border border-[#E8E0D5] rounded-[32px] p-12 text-center shadow-sm">
                <Leaf className="w-12 h-12 text-[#E8E0D5] mx-auto mb-4" />
                <p className="font-bold text-land-ink text-xl mb-2">Belum ada pesanan</p>
                <p className="text-land-muted text-sm mb-6">
                  Mulai berbelanja di marketplace untuk melihat pesanan di sini.
                </p>
                <Link href="/marketplace" className="btn-clay-primary px-8 py-3 inline-flex">
                  Jelajahi Marketplace
                </Link>
              </div>
            )}

            {/* Order cards */}
            {!loading && !error && orders.map((order) => {
              const { label: statusLabel, Icon: StatusIcon, color: statusColor, bg: statusBg } = statusMeta(order.status);
              const productName = order.product?.name ?? "Pesanan AgroWaste";
              const orderId     = order.order_number ?? order.id.slice(0, 8).toUpperCase();
              const isShipping  = order.status === "dikirim";

              return (
                <div
                  key={order.id}
                  className="bg-white border border-[#E8E0D5] rounded-[32px] p-6 shadow-[0_8px_24px_rgba(44,57,48,0.04)] flex flex-col gap-6 group hover:-translate-y-1 transition-transform"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E0D5]/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-land-warm flex items-center justify-center shrink-0">
                        <Receipt className="w-5 h-5 text-[#009A44]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-land-muted uppercase tracking-widest block mb-0.5">ID Pesanan</span>
                        <span className="font-mono font-bold text-land-ink text-sm">{orderId}</span>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${statusBg} ${statusColor}`}>
                      <StatusIcon className="w-4 h-4" />
                      {statusLabel}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <div className="w-24 h-24 rounded-[20px] bg-[#F0F5F1] shrink-0 border border-[#E8E0D5]/40 flex items-center justify-center">
                      <Leaf className="w-10 h-10 text-[#009A44]/20" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-land-heading font-bold text-xl text-land-ink mb-1">{productName}</h3>
                      {order.quantity_kg && (
                        <p className="text-sm text-land-muted mb-3 font-medium">{order.quantity_kg} kg</p>
                      )}
                      {isShipping && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold shadow-sm">
                          <Truck className="w-4 h-4" /> Sedang dalam perjalanan
                        </div>
                      )}
                    </div>
                    <div className="text-left sm:text-right w-full sm:w-auto bg-land-warm sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none">
                      <span className="text-[10px] font-bold text-land-muted uppercase tracking-widest block mb-1">Total Pesanan</span>
                      <span className="text-2xl font-bold text-[#009A44]">{formatRupiah(order.total_price)}</span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-[#E8E0D5]/50 mt-2">
                    <span className="text-xs font-bold text-land-muted">
                      Dipesan pada: <span className="text-land-ink">{formatDate(order.created_at)}</span>
                    </span>
                    <div className="flex gap-3 w-full sm:w-auto">
                      {isShipping ? (
                        <Link
                          href={`/pesanan/${order.id}/lacak`}
                          className="btn-clay-primary px-6 py-3 text-sm w-full sm:w-auto flex justify-center items-center gap-2"
                        >
                          <MapPin className="w-4 h-4" /> Lacak Pengiriman
                        </Link>
                      ) : (
                        <>
                          <Link
                            href={`/pesanan/${order.id}`}
                            className="btn-clay-secondary px-6 py-3 text-sm flex-1 sm:flex-none flex justify-center items-center"
                          >
                            Detail
                          </Link>
                          <Link
                            href="/marketplace"
                            className="btn-clay-primary px-6 py-3 text-sm flex-1 sm:flex-none flex justify-center items-center"
                          >
                            Beli Lagi
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}
