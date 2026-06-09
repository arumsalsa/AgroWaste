"use client";

import React from "react";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="flex-1 animate-fade-in bg-[#FFF8F5] pb-20">
      
      {/* Profile Header */}
      <div className="bg-[#1C1A18] pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#009A44] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-6 relative z-10">
          
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#FFF8F5] bg-gray-200 overflow-hidden shrink-0 shadow-xl">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=300&q=80" alt="Foto Pengguna" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#009A44]/20 text-[#4ADE80] text-[10px] font-bold tracking-widest uppercase mb-3 border border-[#009A44]/30">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Pembeli Terverifikasi
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Budi Santoso</h1>
            <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Bandung, Jawa Barat
            </p>
          </div>
          
          <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-xl border border-white/20 transition-colors backdrop-blur-sm">
            Edit Profil
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Column: Sidebar Nav */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl border border-[#E8E0D5] p-2 shadow-sm overflow-hidden">
              <div className="space-y-1">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#E6F5EC] text-[#009A44] font-bold text-sm text-left transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  Informasi Akun
                </button>
                <Link href="/pesanan" className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[#555555] hover:bg-[#F9F9F9] hover:text-[#111111] font-bold text-sm text-left transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                  Riwayat Pesanan
                </Link>
                <Link href="/impact" className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[#555555] hover:bg-[#F9F9F9] hover:text-[#111111] font-bold text-sm text-left transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  Dampak Lingkungan
                </Link>
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 font-bold text-sm text-left transition-colors mt-4"
                  onClick={() => {
                    document.cookie = "auth=; path=/; max-age=0";
                    window.dispatchEvent(new Event("auth-change"));
                    window.location.href = "/";
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                  Keluar
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Impact Mini Dashboard */}
            <div className="bg-[#009A44] rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
              <div className="absolute -right-10 -top-10 opacity-10">
                <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9zm-9 7c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>
              </div>
              <h2 className="font-bold text-lg mb-4 relative z-10">Kontribusi Anda Sejauh Ini</h2>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#E6F5EC] mb-1">Pupuk Dibeli</div>
                  <div className="text-2xl font-bold font-tabular">250 <span className="text-sm font-normal">kg</span></div>
                </div>
                <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#E6F5EC] mb-1">Emisi Ditekan</div>
                  <div className="text-2xl font-bold font-tabular">18.5 <span className="text-sm font-normal">kg CO2</span></div>
                </div>
              </div>
            </div>

            {/* Personal Information Form */}
            <div className="bg-white border border-[#E8E0D5] rounded-3xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#111111]">Informasi Pribadi</h2>
              </div>
              
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#555555] tracking-wider uppercase mb-2">Nama Lengkap</label>
                    <input type="text" readOnly value="Budi Santoso" className="w-full bg-[#F9F9F9] border border-[#E8E0D5] rounded-xl px-4 py-3 text-sm font-bold text-[#111111] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#555555] tracking-wider uppercase mb-2">Nomor HP</label>
                    <input type="text" readOnly value="+62 812-3456-7890" className="w-full bg-[#F9F9F9] border border-[#E8E0D5] rounded-xl px-4 py-3 text-sm font-bold text-[#111111] focus:outline-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[#555555] tracking-wider uppercase mb-2">Alamat Email</label>
                  <input type="email" readOnly value="budi.santoso@pertanian.co.id" className="w-full bg-[#F9F9F9] border border-[#E8E0D5] rounded-xl px-4 py-3 text-sm font-bold text-[#111111] focus:outline-none" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[#555555] tracking-wider uppercase mb-2">Alamat Pengiriman Utama</label>
                  <textarea readOnly className="w-full bg-[#F9F9F9] border border-[#E8E0D5] rounded-xl px-4 py-3 text-sm font-semibold text-[#555555] focus:outline-none resize-none h-24" defaultValue="Jl. Raya Lembang No. 142, Desa Gudangkahuripan, Kec. Lembang, Kabupaten Bandung Barat, Jawa Barat 40391"></textarea>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
