"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle scroll and auth state
  React.useEffect(() => {
    setMounted(true);

    const checkAuth = () => {
      setIsLoggedIn(document.cookie.includes('auth=1'));
    };
    checkAuth();

    window.addEventListener('auth-change', checkAuth);

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('auth-change', checkAuth);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#FFF8F5]/90 backdrop-blur-md border-b border-[#E8E0D5] shadow-sm" : "bg-[#FFF8F5]"}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold text-[#009A44] tracking-tight group-hover:opacity-80 transition-opacity">AgroWaste</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#555555]">
          <Link href="/" className={`${pathname === '/' || pathname.startsWith('/home') ? 'text-[#009A44] border-b-2 border-[#009A44]' : 'hover:text-[#111111]'} transition-colors py-1`}>Beranda</Link>
          <Link href="/marketplace" className={`${pathname.startsWith('/marketplace') ? 'text-[#009A44] border-b-2 border-[#009A44]' : 'hover:text-[#111111]'} transition-colors py-1`}>Pasar</Link>
          <Link href="/pesanan" className={`${pathname.startsWith('/pesanan') ? 'text-[#009A44] border-b-2 border-[#009A44]' : 'hover:text-[#111111]'} transition-colors py-1`}>Pesanan</Link>
          <Link href="/impact" className={`${pathname.startsWith('/impact') ? 'text-[#009A44] border-b-2 border-[#009A44]' : 'hover:text-[#111111]'} transition-colors py-1`}>Dampak</Link>
          <Link href="/about" className={`${pathname.startsWith('/about') ? 'text-[#009A44] border-b-2 border-[#009A44]' : 'hover:text-[#111111]'} transition-colors py-1`}>Tentang</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-5">

          {mounted && isLoggedIn && (
            <Link href="/cart" className="relative p-2 text-[#555555] hover:text-[#009A44] transition-colors rounded-full hover:bg-[#E6F5EC]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#EF4444] text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-[#FFF8F5]">
                3
              </span>
            </Link>
          )}

          {!mounted ? (
            <div className="w-24 h-10 bg-gray-200 animate-pulse rounded-xl"></div>
          ) : !isLoggedIn ? (
            <div className="flex items-center gap-2 pl-2 md:pl-5 md:border-l border-[#E8E0D5]">
              <Link href="/login" className="hidden sm:block px-4 py-2 text-sm font-bold text-[#009A44] hover:bg-[#E6F5EC] rounded-xl transition-colors">
                Masuk
              </Link>
              <Link href="/login" className="px-5 py-2.5 text-sm font-bold text-white bg-[#00662D] hover:bg-[#005224] rounded-xl transition-colors shadow-sm">
                Daftar
              </Link>
            </div>
          ) : (
            <Link
              href="/profile"
              className="flex items-center gap-2 pl-2 md:pl-5 border-l border-[#E8E0D5] cursor-pointer group"
              title="Profil Pengguna"
            >
              <div className="w-9 h-9 rounded-full bg-gray-200 border border-[#E8E0D5] overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" alt="Pengguna" className="w-full h-full object-cover" />
              </div>
              <svg className="w-4 h-4 text-[#555555] group-hover:text-[#009A44] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}
