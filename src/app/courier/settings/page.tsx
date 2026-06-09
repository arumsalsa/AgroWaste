"use client";

import React from "react";

export default function CourierSettings() {
  return (
    <div className="space-y-8 animate-fade-in pb-20">
      
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-courier-primary mb-2">Pengaturan Profil</h2>
        <p className="text-sm text-courier-textsecondary">Kelola informasi pribadi, detail kendaraan, dan keamanan akun kamu.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-4 bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-2xl bg-courier-primary/10 mb-6 p-2 relative">
            {/* Decorative background shapes mimicking the image */}
            <div className="absolute inset-0 bg-courier-primary rounded-2xl overflow-hidden">
              <div className="absolute top-2 left-2 w-8 h-8 rounded-full border border-white/20"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full border border-white/20"></div>
            </div>
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80" alt="Arjun Sharma" className="w-full h-full rounded-xl object-cover relative z-10 border-2 border-white shadow-md" />
          </div>
          <h3 className="text-lg font-bold text-courier-textprimary">Arjun Sharma</h3>
          <p className="text-sm text-courier-textsecondary mb-6">Mitra Logistik Utama</p>
          
          <button className="w-full py-2.5 bg-transparent border border-courier-primary/30 text-courier-primary hover:bg-courier-warmbg text-sm font-bold rounded-xl transition-colors mb-4">
            Ubah Foto
          </button>
          <p className="text-[10px] text-courier-textsecondary">JPG atau PNG. Maksimal 2MB.</p>
        </div>

        {/* Right Column: Settings Forms */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Personal Information */}
          <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-courier-warmbg/50 px-6 py-4 border-b border-courier-hairline">
              <h3 className="font-bold text-courier-primary text-sm">Informasi Pribadi</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-courier-textsecondary mb-2">Nama Lengkap</label>
                  <input type="text" defaultValue="Arjun Sharma" className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-courier-textsecondary mb-2">Nomor Telepon</label>
                  <input type="text" defaultValue="+91 98765-43210" className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-courier-textsecondary mb-2">Alamat Email</label>
                <input type="email" defaultValue="arjun.logistics@agrowaste.com" className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary" />
              </div>
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-courier-warmbg/50 px-6 py-4 border-b border-courier-hairline">
              <h3 className="font-bold text-courier-primary text-sm">Detail Kendaraan</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-courier-textsecondary mb-2">Jenis Kendaraan</label>
                  <div className="relative">
                    <select className="w-full appearance-none px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary pr-10">
                      <option>Pickup Sedang (4 Roda)</option>
                      <option>Truk Besar (6 Roda)</option>
                      <option>Van Kecil</option>
                    </select>
                    <svg className="w-4 h-4 absolute right-3 top-3 text-courier-textsecondary pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-courier-textsecondary mb-2">Plat Nomor</label>
                  <input type="text" defaultValue="KA-01-MJ-5582" className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary font-tabular uppercase" />
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-courier-warmbg/50 px-6 py-4 border-b border-courier-hairline flex justify-between items-center">
              <h3 className="font-bold text-courier-primary text-sm">Keamanan</h3>
              <span className="bg-[#F3DCC4] text-[#A66C37] px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider">Disarankan Ganti</span>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-xs font-bold text-courier-textsecondary mb-2">Kata Sandi Saat Ini</label>
                <div className="relative">
                  <input type="password" defaultValue="••••••••••" className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary tracking-widest" />
                  <button className="absolute right-3 top-2.5 text-courier-textsecondary hover:text-courier-textprimary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-courier-textsecondary mb-2">Kata Sandi Baru</label>
                  <input type="password" placeholder="Masukkan kata sandi baru" className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-courier-textsecondary mb-2">Konfirmasi Kata Sandi</label>
                  <input type="password" placeholder="Konfirmasi kata sandi baru" className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary" />
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end items-center gap-6 pt-4">
            <button className="text-sm font-bold text-courier-textsecondary hover:text-courier-textprimary transition-colors">
              Batalkan Perubahan
            </button>
            <button className="px-6 py-3 bg-courier-primary hover:bg-green-800 text-white rounded-xl text-sm font-bold transition-colors shadow-md shadow-courier-primary/20">
              Simpan Perubahan Profil
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
