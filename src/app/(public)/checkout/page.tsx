import React from "react";
import Link from "next/link";
import { Check, MapPin, Truck, CreditCard, Edit3, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Pembayaran | AgroWaste",
};

export default function CheckoutPage() {
  return (
    <div className="flex-1 animate-fade-in pb-24 bg-land-bg">
      
      {/* Progress Bar Header */}
      <div className="bg-[#F0EDE6]/30 border-b border-[#E8E0D5]/60 py-6">
        <div className="max-w-3xl mx-auto px-6 flex justify-between items-center relative">
          {/* Connecting Line */}
          <div className="absolute left-[15%] right-[15%] top-5 h-[2px] bg-[#E8E0D5]/70 -z-10"></div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#009A44] text-white flex items-center justify-center font-bold shadow-sm ring-4 ring-[#E6F5EC]">
              <Check className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-bold text-[#009A44]">Alamat</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#009A44] text-white flex items-center justify-center font-bold shadow-sm ring-4 ring-[#E6F5EC]">
              <Check className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-bold text-[#009A44]">Pengiriman</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white border-2 border-[#009A44] text-[#009A44] flex items-center justify-center font-bold shadow-sm ring-4 ring-white">
              3
            </div>
            <span className="text-xs font-bold text-land-ink">Pembayaran</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column (Forms) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Shipping Address */}
            <div className="bg-white border border-[#E8E0D5]/60 rounded-[32px] p-6 md:p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-[#009A44]" />
                  <h2 className="text-xl font-bold text-land-ink font-land-heading">Alamat Pengiriman</h2>
                </div>
                <button className="text-xs font-bold text-land-clay hover:text-land-clay-hover flex items-center gap-1 transition-colors">
                  <Edit3 className="w-3.5 h-3.5" />
                  Ubah Alamat
                </button>
              </div>
              
              <div className="bg-[#F0EDE6]/30 border border-[#E8E0D5]/40 rounded-2xl p-5">
                <h3 className="font-bold text-land-ink mb-1.5 text-sm">Rumah Utama (Budi Santoso)</h3>
                <p className="text-xs text-land-muted leading-relaxed mb-3">
                  Jl. Merdeka No. 123, Kel. Babakan, Kec. Bogor Tengah,<br/>
                  Kota Bogor, Jawa Barat, 16121
                </p>
                <p className="text-xs font-bold text-land-muted font-tabular">[+62 812-3456-7890]</p>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-white border border-[#E8E0D5]/60 rounded-[32px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2.5 mb-6">
                <Truck className="w-5 h-5 text-land-clay" />
                <h2 className="text-xl font-bold text-land-ink font-land-heading">Metode Pengiriman</h2>
              </div>
              
              <div className="space-y-4">
                {/* AgroWaste Logistics (Selected) */}
                <div className="relative bg-[#E6F5EC]/50 border-2 border-[#009A44] rounded-2xl p-5 cursor-pointer shadow-sm">
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-[#009A44] rounded-full text-white flex items-center justify-center shadow-sm">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="font-bold text-[#009A44] text-sm">AgroWaste Logistics</h3>
                        <span className="px-2.5 py-0.5 bg-[#009A44] text-white text-[8px] font-bold tracking-widest uppercase rounded-full">Rekomendasi</span>
                      </div>
                      <p className="text-xs text-land-muted">Estimasi tiba: 24 - 48 Jam (Besok/Lusa)</p>
                    </div>
                    <div className="text-lg font-bold text-[#009A44] font-tabular">Rp 45.000</div>
                  </div>
                </div>

                {/* Regular Cargo */}
                <div className="bg-white border border-[#E8E0D5]/60 rounded-2xl p-5 cursor-pointer hover:border-land-clay transition-all duration-200 shadow-sm">
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <h3 className="font-bold text-land-ink mb-1.5 text-sm">Kargo Reguler</h3>
                      <p className="text-xs text-land-muted">Estimasi tiba: 3 - 5 Hari Kerja</p>
                    </div>
                    <div className="text-lg font-bold text-land-ink font-tabular">Rp 32.500</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-[#E8E0D5]/60 rounded-[32px] p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2.5 mb-6">
                <CreditCard className="w-5 h-5 text-land-ink" />
                <h2 className="text-xl font-bold text-land-ink font-land-heading">Metode Pembayaran</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* QRIS */}
                <div className="relative bg-[#E6F5EC]/50 border-2 border-[#009A44] rounded-2xl p-5 cursor-pointer flex items-center gap-4 shadow-sm">
                  <div className="w-5 h-5 rounded-full border-4 border-[#009A44] flex-shrink-0 bg-white"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-land-ink text-sm">QRIS (E-Wallet)</h3>
                    <p className="text-[10px] text-land-muted leading-tight mt-0.5">OVO, Gopay, DANA, ShopeePay</p>
                  </div>
                  <div className="w-8 h-8 bg-black/80 rounded flex items-center justify-center shrink-0">
                    <span className="text-white text-[9px] font-bold tracking-tight">QRIS</span>
                  </div>
                </div>

                {/* VA */}
                <div className="bg-white border border-[#E8E0D5]/60 rounded-2xl p-5 cursor-pointer hover:border-[#009A44] transition-all duration-200 flex items-center gap-4 shadow-sm">
                  <div className="w-5 h-5 rounded-full border border-[#E8E0D5] flex-shrink-0 bg-white"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-land-ink text-sm">Transfer Bank (VA)</h3>
                    <p className="text-[10px] text-land-muted leading-tight mt-0.5">BCA, Mandiri, BNI, BRI</p>
                  </div>
                  <div className="w-8 h-8 rounded text-land-muted flex items-center justify-center shrink-0 border border-[#E8E0D5]/60 bg-land-bg">
                    <span className="text-xs font-bold font-mono">VA</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Billing Summary) */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#E8E0D5]/80 rounded-[32px] p-6 shadow-sm sticky top-28">
              <h2 className="text-xl font-bold text-land-ink font-land-heading mb-6">Ringkasan Pesanan</h2>
              
              {/* Product list preview */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-land-warm overflow-hidden shrink-0 border border-[#E8E0D5]/40">
                    <img src="https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=100&q=80" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-land-ink text-xs truncate">Pupuk Organik Premium (50kg)</h4>
                    <div className="flex justify-between mt-1 text-[10px]">
                      <span className="text-land-muted">Qty: 2</span>
                      <span className="font-bold text-land-ink font-tabular">Rp 450.000</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-land-warm overflow-hidden shrink-0 border border-[#E8E0D5]/40">
                    <img src="https://images.unsplash.com/photo-1628183141103-9bb670b89b88?auto=format&fit=crop&w=100&q=80" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-land-ink text-xs truncate">Pakan Ternak Olahan Hijauan</h4>
                    <div className="flex justify-between mt-1 text-[10px]">
                      <span className="text-land-muted">Qty: 1</span>
                      <span className="font-bold text-land-ink font-tabular">Rp 225.000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bill Breakdown */}
              <div className="space-y-3 text-sm border-t border-dashed border-[#E8E0D5] pt-6 mb-6">
                <div className="flex justify-between">
                  <span className="text-land-muted">Subtotal Produk</span>
                  <span className="font-bold text-land-ink font-tabular">Rp 675.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-land-muted">Biaya Pengiriman</span>
                  <span className="font-bold text-land-ink font-tabular">Rp 45.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-land-muted">Biaya Administrasi</span>
                  <span className="font-bold text-land-ink font-tabular">Rp 2.000</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-[#E8E0D5]/60 pt-6 mb-8">
                <span className="font-bold text-land-ink">Total Tagihan</span>
                <span className="text-2xl font-bold text-[#009A44] font-tabular">Rp 722.000</span>
              </div>

              {/* Payment CTA */}
              <Link href="/checkout/success" className="btn-clay-primary py-4 w-full flex items-center justify-center gap-2 mb-6">
                Bayar Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <div className="text-center text-[9px] text-land-muted font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 opacity-80">
                <ShieldCheck className="w-3.5 h-3.5 text-[#009A44]" />
                Layanan Keamanan AgroWaste Pay
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
