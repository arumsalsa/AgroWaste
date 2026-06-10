import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Package, Receipt, Truck, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Detail Pesanan | AgroWaste",
};

export default function DetailPesananPage({ params }: { params: { id: string } }) {
  const orderId = params.id || "AGW-882910";
  
  // Mock data detail pesanan
  const orderData = {
    date: "24 Okt 2026, 09:00 WIB",
    status: "Selesai",
    statusIcon: CheckCircle2,
    statusColor: "text-[#009A44]",
    statusBg: "bg-[#009A44]/10",
    items: [
      { name: "Pupuk Kandang Sapi Premium (50kg)", price: "Rp 35.000", qty: 2, total: "Rp 70.000", img: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=200&q=80" },
      { name: "Pupuk Cair POC Organik (1L)", price: "Rp 15.000", qty: 1, total: "Rp 15.000", img: "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=200&q=80" }
    ],
    address: {
      name: "Budi Santoso",
      phone: "+62 812-3456-7890",
      street: "Jl. Pertanian Raya No. 12, RT 03 / RW 04",
      city: "Kec. Singosari, Kab. Malang",
      province: "Jawa Timur, 65153",
      label: "Rumah"
    },
    payment: {
      method: "Transfer Bank (BCA)",
      subtotal: "Rp 85.000",
      shipping: "Rp 25.000",
      discount: "-Rp 10.000",
      total: "Rp 100.000"
    }
  };

  return (
    <div className="flex-1 animate-fade-in bg-[#F8FAF9] min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-6 pt-10">
        
        {/* Header & Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Link href="/pesanan" className="w-12 h-12 rounded-full bg-white border border-[#E8E0D5] flex items-center justify-center text-land-ink hover:border-[#009A44] hover:text-[#009A44] transition-colors shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-land-heading font-bold text-land-ink">Rincian Pesanan</h1>
              <p className="text-sm text-land-muted">ID: <span className="font-mono font-bold text-land-ink">{orderId}</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-bold text-land-muted uppercase tracking-wider mb-0.5">Tanggal Beli</span>
              <span className="text-sm font-bold text-land-ink">{orderData.date}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* Status Banner */}
          <div className={`rounded-[32px] p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border border-[#009A44]/20 ${orderData.statusBg}`}>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-sm ${orderData.statusColor}`}>
                <orderData.statusIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${orderData.statusColor}`}>Pesanan {orderData.status}</h3>
                <p className="text-sm text-land-ink/70">Terima kasih telah berbelanja pupuk sirkular di AgroWaste.</p>
              </div>
            </div>
            <button className="btn-clay-secondary px-6 py-3.5 w-full sm:w-auto flex justify-center items-center gap-2">
              <Receipt className="w-4 h-4" /> Unduh Invoice
            </button>
          </div>

          {/* Daftar Produk */}
          <div className="bg-white border border-[#E8E0D5] rounded-[32px] p-6 md:p-8 shadow-[0_8px_32px_rgba(44,57,48,0.03)]">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E8E0D5]">
              <Package className="w-5 h-5 text-land-ink" />
              <h2 className="font-land-heading font-bold text-xl text-land-ink">Daftar Produk</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              {orderData.items.map((item, index) => (
                <div key={index} className="flex gap-6 items-center">
                  <div className="w-20 h-20 rounded-[16px] bg-[#E8E0D5] shrink-0 overflow-hidden border border-[#E8E0D5]">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-land-ink text-base mb-1">{item.name}</h3>
                    <p className="text-sm text-land-muted mb-2">{item.qty} barang x {item.price}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-land-muted uppercase tracking-wider block mb-1">Total Harga</span>
                    <span className="font-bold text-land-ink text-lg">{item.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Informasi Tambahan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Info Pengiriman */}
            <div className="bg-white border border-[#E8E0D5] rounded-[32px] p-6 md:p-8 shadow-[0_8px_32px_rgba(44,57,48,0.03)] flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E0D5]">
                <MapPin className="w-5 h-5 text-land-ink" />
                <h2 className="font-land-heading font-bold text-xl text-land-ink">Info Pengiriman</h2>
              </div>
              <div className="mb-2">
                <span className="px-2 py-1 bg-land-warm text-land-muted text-[10px] font-bold rounded uppercase tracking-widest">{orderData.address.label}</span>
              </div>
              <h4 className="font-bold text-land-ink mb-1">{orderData.address.name} <span className="text-land-muted font-normal">({orderData.address.phone})</span></h4>
              <p className="text-sm text-land-muted leading-relaxed mb-4">
                {orderData.address.street},<br />
                {orderData.address.city},<br />
                {orderData.address.province}
              </p>
              
              <div className="mt-auto pt-4 border-t border-[#E8E0D5]/50 flex items-center gap-3">
                <Truck className="w-4 h-4 text-land-muted" />
                <span className="text-sm font-bold text-land-ink">Mitra Logistik AgroWaste Reguler</span>
              </div>
            </div>

            {/* Rincian Pembayaran */}
            <div className="bg-white border border-[#E8E0D5] rounded-[32px] p-6 md:p-8 shadow-[0_8px_32px_rgba(44,57,48,0.03)] flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E0D5]">
                <FileText className="w-5 h-5 text-land-ink" />
                <h2 className="font-land-heading font-bold text-xl text-land-ink">Rincian Pembayaran</h2>
              </div>
              
              <div className="flex flex-col gap-3 text-sm text-land-muted mb-6 flex-1">
                <div className="flex justify-between items-center">
                  <span>Metode Pembayaran</span>
                  <span className="font-bold text-land-ink">{orderData.payment.method}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Harga Produk</span>
                  <span className="text-land-ink">{orderData.payment.subtotal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Ongkos Kirim</span>
                  <span className="text-land-ink">{orderData.payment.shipping}</span>
                </div>
                <div className="flex justify-between items-center text-[#009A44]">
                  <span>Voucher Diskon (Sirkular)</span>
                  <span>{orderData.payment.discount}</span>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-[#E8E0D5] flex justify-between items-center">
                <span className="font-bold text-land-ink">Total Belanja</span>
                <span className="text-2xl font-bold text-[#009A44]">{orderData.payment.total}</span>
              </div>
            </div>

          </div>

          {/* Beli Lagi Button */}
          <div className="flex justify-end mt-4">
            <button className="btn-clay-primary px-8 py-4">
              Beli Lagi Pesanan Ini
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
