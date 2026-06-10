"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleParam = searchParams.get('role') || 'pembeli';
  const [isLoading, setIsLoading] = useState(false);

  // Format display role name
  const displayRole = roleParam === 'penjual' ? 'Penjual' : roleParam === 'logistik' ? 'Mitra Logistik' : 'Pembeli';

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Set auth cookie
      document.cookie = "auth=1; path=/; max-age=86400"; // 1 day
      
      // Dispatch custom event to update Header immediately
      window.dispatchEvent(new Event("auth-change"));
      
      router.push('/home');
      router.refresh();
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-[#FFF8F5]">
      
      {/* Left Image Side (Register has image on left) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#00662D] overflow-hidden">
        {/* Background Image with Dark Green Overlay */}
        <div className="absolute inset-0 bg-[#00662D] mix-blend-multiply opacity-80 z-10"></div>
        <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=1200&q=80" alt="Pertanian" className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Content Overlay */}
        <div className="relative z-20 flex flex-col justify-center px-16 xl:px-24 w-full h-full text-white">
          <div className="inline-block px-3 py-1 bg-[#4ADE80] text-[#00662D] text-[10px] font-bold tracking-widest uppercase rounded-full w-max mb-6">
            Ekonomi Sirkular
          </div>
          
          <h2 className="text-5xl font-bold leading-tight mb-8">
            Mengubah Limbah<br/>Menjadi Berkah.
          </h2>

          <div className="pl-6 border-l-4 border-[#4ADE80] mb-16">
            <p className="text-lg italic text-[#E6F5EC] leading-relaxed mb-4">
              "Ekonomi sirkular bukan hanya tentang mendaur ulang; ini tentang merancang ulang sistem pangan kita agar selaras dengan alam."
            </p>
            <p className="font-bold text-[#4ADE80]">— AgroWaste Vision 2030</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-2xl font-bold text-[#4ADE80] tracking-tighter mb-1">500+</div>
              <div className="text-xs text-[#E6F5EC] uppercase tracking-wider">Mitra Peternak</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <div className="text-2xl font-bold text-[#4ADE80] tracking-tighter mb-1">12k Ton</div>
              <div className="text-xs text-[#E6F5EC] uppercase tracking-wider">Limbah Terolah</div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 relative animate-fade-in py-12 overflow-y-auto">
        
        {/* Logo */}
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity w-max">
            <img src="/LOGO.png" alt="AgroWaste Logo" className="h-7 w-auto object-contain" />
            <span className="text-xl font-bold text-[#00662D] tracking-tight">AgroWaste</span>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#111111] mb-4">Daftar Akun Baru</h1>
          <div className="inline-flex items-center gap-2 bg-[#E6F5EC] px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#009A44]"></div>
            <span className="text-[10px] font-bold text-[#00662D]">Mendaftar sebagai: <span className="uppercase">{displayRole}</span></span>
          </div>
        </div>

        <form onSubmit={handleRegister} className="space-y-5 max-w-sm w-full mb-8">
          
          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase tracking-wider mb-2">
              Nama Lengkap
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <input
                type="text"
                required
                placeholder="Contoh: Budi Santoso"
                className="block w-full rounded-xl border border-[#E8E0D5] py-3.5 pl-12 pr-4 text-[#111111] placeholder:text-gray-400 focus:ring-2 focus:ring-[#009A44] focus:border-[#009A44] text-sm bg-white shadow-sm transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase tracking-wider mb-2">
              Alamat Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <input
                type="email"
                required
                placeholder="nama@email.com"
                className="block w-full rounded-xl border border-[#E8E0D5] py-3.5 pl-12 pr-4 text-[#111111] placeholder:text-gray-400 focus:ring-2 focus:ring-[#009A44] focus:border-[#009A44] text-sm bg-white shadow-sm transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase tracking-wider mb-2">
              No. WhatsApp
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <input
                type="tel"
                required
                placeholder="0812xxxx"
                className="block w-full rounded-xl border border-[#E8E0D5] py-3.5 pl-12 pr-4 text-[#111111] placeholder:text-gray-400 focus:ring-2 focus:ring-[#009A44] focus:border-[#009A44] text-sm bg-white shadow-sm transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-[#555555] uppercase tracking-wider mb-2">
                Kata Sandi
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="block w-full rounded-xl border border-[#E8E0D5] py-3.5 pl-12 pr-4 text-[#111111] placeholder:text-gray-400 focus:ring-2 focus:ring-[#009A44] focus:border-[#009A44] text-sm bg-white shadow-sm transition-colors tracking-widest"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] font-bold text-[#555555] uppercase tracking-wider mb-2">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="block w-full rounded-xl border border-[#E8E0D5] py-3.5 pl-12 pr-4 text-[#111111] placeholder:text-gray-400 focus:ring-2 focus:ring-[#009A44] focus:border-[#009A44] text-sm bg-white shadow-sm transition-colors tracking-widest"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start pt-2">
            <div className="relative w-4 h-4 mt-0.5 shrink-0">
              <input
                id="terms"
                type="checkbox"
                required
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer peer z-10 m-0"
              />
              <div className="absolute inset-0 w-full h-full rounded border border-[#E8E0D5] bg-white text-transparent peer-checked:bg-[#009A44] peer-checked:border-[#009A44] peer-checked:text-white transition-all duration-200 flex items-center justify-center pointer-events-none">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
              </div>
            </div>
            <label htmlFor="terms" className="ml-2 text-xs text-[#555555] leading-relaxed cursor-pointer">
              Saya setuju dengan <a href="#" className="font-bold text-[#009A44] hover:text-[#008139]">Syarat & Ketentuan</a> serta <a href="#" className="font-bold text-[#009A44] hover:text-[#008139]">Kebijakan Privasi</a> AgroWaste.
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 mt-2 bg-[#00662D] hover:bg-[#005224] text-white font-bold rounded-xl shadow-md shadow-[#00662D]/20 transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                Daftar Sekarang
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </>
            )}
          </button>
        </form>

        <div className="max-w-sm w-full text-center pb-8">
          <p className="text-sm text-[#555555]">
            Sudah punya akun? <Link href="/login" className="font-bold text-[#009A44] hover:text-[#008139]">Masuk</Link>
          </p>
        </div>

      </div>

    </div>
  );
}
