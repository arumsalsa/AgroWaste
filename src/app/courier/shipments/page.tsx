"use client";

import React, { useState } from "react";

const mockShipments = [
  {
    id: "#AW-90214",
    date: "24 Okt 2023 • 14:30 WIB",
    status: "In Transit",
    statusColor: "bg-orange-100 text-orange-700",
    pickup: "Peternak Berkah Jaya",
    pickupLoc: "Kab. Bogor, Jawa Barat",
    delivery: "Koperasi Tani Makmur",
    deliveryLoc: "Kec. Caringin, Bogor",
    product: "250kg Pupuk Organik Cair",
    productDesc: "Limbah Sapi Murni (Olahan)",
    btnPrimary: "Lihat Detail",
    btnSecondary: "Update Status"
  },
  {
    id: "#AW-90192",
    date: "24 Okt 2023 • 09:15 WIB",
    status: "Pending",
    statusColor: "bg-gray-200 text-gray-700",
    pickup: "Farm Hijau Lestari",
    pickupLoc: "Sukabumi, Jawa Barat",
    delivery: "Ibu Siti Rahma",
    deliveryLoc: "Nagrak, Sukabumi",
    product: "500kg Pupuk Kandang Ayam",
    productDesc: "Kompos Alami (Bulk)",
    btnPrimary: "Konfirmasi Penjemputan",
    btnSecondary: null
  },
  {
    id: "#AW-89943",
    date: "23 Okt 2023 • 16:45 WIB",
    status: "Delivered",
    statusColor: "bg-green-100 text-green-700",
    pickup: "Kandang Ayam Modern",
    pickupLoc: "Bandung, Jawa Barat",
    delivery: "Kebun Bunga Indah",
    deliveryLoc: "Lembang, Bandung",
    product: "100kg Bio-Fermenter",
    productDesc: "Pupuk Organik Padat",
    btnPrimary: "Unduh Bukti",
    btnPrimaryOutline: true,
    btnSecondary: null
  }
];

export default function ShipmentsPage() {
  const [activeTab, setActiveTab] = useState("Semua (24)");

  const tabs = ["Semua (24)", "Sedang Berjalan (8)", "Selesai (14)", "Dibatalkan (2)"];

  return (
    <div className="space-y-8 animate-fade-in pb-20">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-courier-textprimary mb-1">Daftar Pengiriman</h2>
        <p className="text-sm text-courier-textsecondary">Kelola dan pantau status pengiriman pupuk Anda.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Shipment List */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-courier-textsecondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </span>
              <input type="text" placeholder="Cari ID Pesanan atau nama pembeli..." className="w-full pl-9 pr-4 py-2 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-courier-primary text-courier-textprimary shadow-sm" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-courier-hairline overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold text-sm whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab
                    ? "border-courier-primary text-courier-primary"
                    : "border-transparent text-courier-textsecondary hover:text-courier-textprimary hover:border-courier-hairline"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Shipment Cards */}
          <div className="space-y-4">
            {mockShipments.map((shipment) => (
              <div key={shipment.id} className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-courier-warmbg text-courier-primary rounded-xl flex items-center justify-center border border-courier-hairline shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-courier-textprimary text-lg">{shipment.id}</h3>
                      <p className="text-xs text-courier-textsecondary mt-0.5">{shipment.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 ${shipment.statusColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    {shipment.status}
                  </span>
                </div>

                {/* Tracking Path & Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative pl-6">
                    {/* Vertical dotted line */}
                    <div className="absolute left-1.5 top-2 bottom-2 w-0.5 border-l-2 border-dotted border-courier-hairline"></div>
                    
                    {/* Pickup Node */}
                    <div className="relative mb-6">
                      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-courier-primary border-2 border-white shadow-sm"></div>
                      <span className="text-[9px] font-bold text-courier-textsecondary tracking-wider uppercase block mb-1">PICKUP</span>
                      <h4 className="text-sm font-bold text-courier-textprimary">{shipment.pickup}</h4>
                      <p className="text-xs text-courier-textsecondary">{shipment.pickupLoc}</p>
                    </div>

                    {/* Delivery Node */}
                    <div className="relative">
                      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-courier-primary border-2 border-white shadow-sm"></div>
                      <span className="text-[9px] font-bold text-courier-textsecondary tracking-wider uppercase block mb-1">DELIVERY</span>
                      <h4 className="text-sm font-bold text-courier-textprimary">{shipment.delivery}</h4>
                      <p className="text-xs text-courier-textsecondary">{shipment.deliveryLoc}</p>
                    </div>
                  </div>

                  <div className="bg-courier-warmbg/50 p-4 rounded-xl border border-courier-hairline/50">
                    <span className="text-[10px] font-bold text-courier-textsecondary tracking-wider uppercase block mb-2">Detail Produk</span>
                    <h5 className="text-sm font-bold text-courier-primary mb-1">{shipment.product}</h5>
                    <p className="text-xs text-courier-textsecondary">{shipment.productDesc}</p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-5 border-t border-courier-hairline flex justify-end items-center gap-4">
                  {shipment.btnSecondary && (
                    <button className="text-sm font-bold text-courier-primary hover:text-courier-primary-hover transition-colors">
                      {shipment.btnSecondary}
                    </button>
                  )}
                  {shipment.btnPrimaryOutline ? (
                    <button className="px-6 py-2.5 bg-transparent border border-courier-hairline hover:bg-courier-warmbg text-courier-textprimary rounded-xl text-sm font-bold transition-colors">
                      {shipment.btnPrimary}
                    </button>
                  ) : (
                    <button className="px-6 py-2.5 bg-courier-primary hover:bg-green-800 text-white rounded-xl text-sm font-bold transition-colors shadow-md shadow-courier-primary/20">
                      {shipment.btnPrimary}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Map & Analytics */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-6">
          
          {/* Active Tracking Map Card */}
          <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 flex justify-between items-center border-b border-courier-hairline">
              <h3 className="font-bold text-courier-textprimary text-sm">GIS Active Tracking</h3>
              <span className="bg-green-100 text-green-700 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider animate-pulse">LIVE</span>
            </div>
            
            <div className="h-64 bg-gray-900 relative">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Map View" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-courier-primary/20 mix-blend-multiply"></div>
              
              {/* Mock Route Lines */}
              <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(47,90,40,0.8)]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M10 80 Q 30 60, 50 70 T 80 30" fill="none" stroke="#2F5A28" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 80 Q 30 60, 50 70 T 80 30" fill="none" stroke="#4ade80" strokeWidth="0.5" strokeLinecap="round" />
              </svg>

              {/* Mock Delivery Truck Pin */}
              <div className="absolute top-[60%] left-[45%] w-8 h-8 bg-courier-primary border-2 border-white rounded-full shadow-lg flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-courier-textsecondary">Kendaraan Aktif</span>
                <span className="font-bold text-courier-textprimary font-tabular">03 Unit</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-courier-textsecondary">Estimasi Tiba (Terdekat)</span>
                <span className="font-bold text-courier-primary font-tabular">14 Menit</span>
              </div>
              <div className="h-1.5 bg-courier-warmbg rounded-full overflow-hidden">
                <div className="h-full bg-courier-primary rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          {/* Additional Bento Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-courier-primary p-5 rounded-2xl text-white shadow-md shadow-courier-primary/20">
              <span className="text-[9px] font-bold opacity-80 tracking-wider uppercase block mb-1">Efisiensi</span>
              <div className="text-3xl font-bold font-tabular mb-1">98%</div>
              <span className="text-[10px] font-bold opacity-90">+2% bln lalu</span>
            </div>
            
            <div className="bg-[#EBC7A5] p-5 rounded-2xl text-courier-textprimary shadow-sm border border-[#E2B78E]">
              <span className="text-[9px] font-bold text-courier-primary tracking-wider uppercase block mb-1">Jarak Total</span>
              <div className="text-3xl font-bold font-tabular mb-1">1.2k km</div>
              <span className="text-[10px] font-bold text-courier-textsecondary">Bulan ini</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
