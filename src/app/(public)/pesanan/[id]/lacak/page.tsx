"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Phone, Truck, ShieldCheck, Clock } from "lucide-react";
import MapTracking from "@/components/public/MapTracking";

export default function LacakPesananPage() {
  const params = useParams<{ id: string }>();
  const orderId = params?.id || "AGW-882910";

  // Set page title client-side
  useEffect(() => {
    document.title = "Lacak Pengiriman | AgroWaste";
  }, []);

  return (
    <div className="flex-1 animate-fade-in bg-land-warm min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        
        {/* Header & Back Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Link href="/pesanan" className="w-12 h-12 rounded-full bg-white border border-[#E8E0D5] flex items-center justify-center text-land-ink hover:border-land-accent hover:text-land-accent transition-colors shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-land-heading font-bold text-land-ink">Lacak Pengiriman</h1>
              <p className="text-sm text-land-muted">ID: <span className="font-mono font-bold text-land-ink">{orderId}</span></p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
            <Truck className="w-4 h-4" /> Sedang Dalam Perjalanan
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kiri: Peta & Kurir (Lebih Lebar) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Map Container */}
            <div className="bg-white p-2 rounded-[40px] shadow-[0_8px_32px_rgba(44,57,48,0.05)] border border-[#E8E0D5] overflow-hidden">
              <div className="w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden relative bg-[#E8E0D5] shadow-inner">
                <MapTracking
                  startCoords={[112.65750, -7.88920]} // Store (Singosari)
                  endCoords={[112.60966, -7.94530]}   // Home (Dinoyo)
                  courierCoords={[112.63200, -7.92100]} // Courier (Pak Agus)
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Courier Profile */}
            <div className="bg-[#2C3930] rounded-[32px] p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_16px_40px_rgba(44,57,48,0.2)] relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-land-accent rounded-full filter blur-[100px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-20 h-20 rounded-full bg-[#E8E0D5] p-1 border border-white/20 shrink-0">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80" alt="Pak Agus" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-land-heading font-bold text-xl">Pak Agus</h3>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-white/70 text-sm mb-3">Mitra Logistik Terverifikasi</p>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-emerald-400 tracking-widest uppercase border border-white/10">B 1234 ABC</span>
                    <span className="text-white/50 text-xs flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5" /> Truk Box Besar
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Kanan: Timeline (Lebih Sempit) */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#E8E0D5] rounded-[32px] p-8 shadow-[0_8px_32px_rgba(44,57,48,0.04)] sticky top-24">
              <h2 className="font-land-heading text-xl font-bold text-land-ink mb-8">Riwayat Perjalanan</h2>
              
              <div className="relative pl-7 space-y-10">
                {/* Garis vertikal background */}
                <div className="absolute left-[13px] top-2 bottom-6 w-0.5 bg-[#E8E0D5]"></div>
                {/* Garis vertikal hijau progres */}
                <div className="absolute left-[13px] top-2 h-[75%] w-0.5 bg-land-accent"></div>

                {/* Step 1: Dibuat */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-0.5 w-4 h-4 rounded-full bg-land-accent ring-4 ring-white z-10"></div>
                  <h4 className="font-bold text-land-ink text-sm">Pesanan Dibuat</h4>
                  <p className="text-xs text-land-muted mt-1">24 Okt 2026, 09:00 WIB</p>
                </div>
                
                {/* Step 2: Pembayaran */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-0.5 w-4 h-4 rounded-full bg-land-accent ring-4 ring-white z-10"></div>
                  <h4 className="font-bold text-land-ink text-sm">Pembayaran Berhasil</h4>
                  <p className="text-xs text-land-muted mt-1">24 Okt 2026, 09:15 WIB</p>
                </div>
                
                {/* Step 3: Diproses */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-0.5 w-4 h-4 rounded-full bg-land-accent ring-4 ring-white z-10"></div>
                  <h4 className="font-bold text-land-ink text-sm">Pesanan Sedang Disiapkan</h4>
                  <p className="text-xs text-land-muted mt-1">24 Okt 2026, 11:30 WIB<br/>Peternak sedang mengemas pupuk organik Anda.</p>
                </div>
                
                {/* Step 4: Dikirim (Aktif) */}
                <div className="relative">
                  <div className="absolute -left-[45px] -top-2 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 ring-4 ring-white shadow-sm z-10">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-amber-600 text-base">Sedang Dikirim</h4>
                  <p className="text-xs text-land-muted mt-1 leading-relaxed">24 Okt 2026, 14:45 WIB<br/>Pak Agus telah menjemput pesanan Anda dan sedang dalam perjalanan menuju lokasi pengiriman.</p>
                </div>
                
                {/* Step 5: Selesai (Pending) */}
                <div className="relative opacity-40">
                  <div className="absolute -left-[35px] top-0.5 w-4 h-4 rounded-full bg-[#E8E0D5] ring-4 ring-white z-10"></div>
                  <h4 className="font-bold text-land-ink text-sm">Pesanan Diterima</h4>
                  <p className="text-xs text-land-muted mt-1">Estimasi tiba hari ini sebelum pukul 18:00 WIB</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
