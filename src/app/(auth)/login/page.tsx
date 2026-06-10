"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/home';
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Set auth cookie
      document.cookie = "auth=1; path=/; max-age=86400"; // 1 day
      
      // Dispatch custom event to update Header immediately
      window.dispatchEvent(new Event("auth-change"));
      
      router.push(callbackUrl);
      router.refresh();
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-[#FFF8F5]">
      
      {/* Left Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 relative animate-fade-in">
        
        {/* Logo */}
        <div className="absolute top-8 md:top-12 left-8 md:left-16 lg:left-24 xl:left-32">
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img src="/LOGO.png" alt="AgroWaste Logo" className="h-7 w-auto object-contain" />
            <span className="text-xl font-bold text-[#00662D] tracking-tight">AgroWaste</span>
          </Link>
        </div>

        <div className="mt-16 mb-8">
          <h1 className="text-3xl font-bold text-[#111111] mb-2">Masuk ke Akun Anda</h1>
          <p className="text-[#555555] text-sm leading-relaxed max-w-sm">
            Selamat datang kembali di portal manajemen AgroWaste.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6 max-w-sm w-full mb-8">
          <div>
            <label className="block text-[10px] font-bold text-[#555555] uppercase tracking-wider mb-2">
              Alamat Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <input
                type="email"
                required
                defaultValue="nama@email.com"
                className="block w-full rounded-xl border border-[#E8E0D5] py-3.5 pl-12 pr-4 text-[#111111] placeholder:text-gray-400 focus:ring-2 focus:ring-[#009A44] focus:border-[#009A44] text-sm bg-white shadow-sm transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[10px] font-bold text-[#555555] uppercase tracking-wider">
                Kata Sandi
              </label>
              <a href="#" className="text-[10px] font-bold text-[#009A44] hover:text-[#008139]">Lupa Password?</a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <input
                type="password"
                required
                defaultValue="password123"
                className="block w-full rounded-xl border border-[#E8E0D5] py-3.5 pl-12 pr-12 text-[#111111] placeholder:text-gray-400 focus:ring-2 focus:ring-[#009A44] focus:border-[#009A44] text-sm bg-white shadow-sm transition-colors tracking-widest"
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <svg className="w-5 h-5 text-gray-400 hover:text-[#555555] cursor-pointer transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative w-4 h-4 shrink-0">
              <input
                id="remember"
                type="checkbox"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer peer z-10 m-0"
              />
              <div className="absolute inset-0 w-full h-full rounded border border-[#E8E0D5] bg-white text-transparent peer-checked:bg-[#009A44] peer-checked:border-[#009A44] peer-checked:text-white transition-all duration-200 flex items-center justify-center pointer-events-none">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
              </div>
            </div>
            <label htmlFor="remember" className="ml-2 text-sm text-[#555555] cursor-pointer">
              Ingat Saya
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-[#00662D] hover:bg-[#005224] text-white font-bold rounded-xl shadow-md shadow-[#00662D]/20 transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                Masuk Ke Dashboard
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </>
            )}
          </button>
        </form>

        <div className="max-w-sm w-full text-center mb-8 border-b border-[#E8E0D5] pb-8">
          <p className="text-sm text-[#555555]">
            Belum punya akun? <Link href="/role" className="font-bold text-[#009A44] hover:text-[#008139]">Daftar di sini</Link>
          </p>
        </div>

        {/* Mitra Selection */}
        <div className="max-w-sm w-full">
          <p className="text-[10px] font-bold text-[#555555] uppercase tracking-wider text-center mb-4">Masuk Sebagai Mitra</p>
          <div className="grid grid-cols-3 gap-3">
            <button className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-[#E8E0D5] bg-white hover:border-[#009A44] transition-colors group">
              <svg className="w-5 h-5 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              <span className="text-[9px] font-bold text-[#111111]">Peternak</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-[#E8E0D5] bg-white hover:border-[#3B82F6] transition-colors group">
              <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              <span className="text-[9px] font-bold text-[#111111]">Pembeli</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border border-[#E8E0D5] bg-white hover:border-[#F59E0B] transition-colors group">
              <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              <span className="text-[9px] font-bold text-[#111111]">Logistik</span>
            </button>
          </div>
        </div>

      </div>

      {/* Right Image Side */}
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

    </div>
  );
}
