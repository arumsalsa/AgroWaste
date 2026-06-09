import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8E0D5] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Intro */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-[#009A44] tracking-tight">AgroWaste</span>
            </Link>
            <p className="text-xs text-[#555555] leading-relaxed pr-4">
              Platform terdepan untuk perdagangan limbah pertanian dan pupuk organik di Indonesia.
            </p>
          </div>

          {/* Marketplace Links */}
          <div>
            <h4 className="font-bold text-[#111111] text-sm mb-4">Pasar</h4>
            <ul className="space-y-3">
              <li><Link href="/marketplace" className="text-xs text-[#555555] hover:text-[#009A44] transition-colors">Beli Pupuk</Link></li>
              <li><Link href="/seller" className="text-xs text-[#555555] hover:text-[#009A44] transition-colors">Jual Limbah</Link></li>
              <li><Link href="/courier" className="text-xs text-[#555555] hover:text-[#009A44] transition-colors">Logistik</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-[#111111] text-sm mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-xs text-[#555555] hover:text-[#009A44] transition-colors">Tentang Kami</Link></li>
              <li><Link href="/impact" className="text-xs text-[#555555] hover:text-[#009A44] transition-colors">Keselarasan SDG</Link></li>
              <li><Link href="/contact" className="text-xs text-[#555555] hover:text-[#009A44] transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-bold text-[#111111] text-sm mb-4">Bantuan</h4>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-xs text-[#555555] hover:text-[#009A44] transition-colors">Pusat Bantuan</Link></li>
              <li><Link href="/terms" className="text-xs text-[#555555] hover:text-[#009A44] transition-colors">Syarat Layanan</Link></li>
              <li><Link href="/privacy" className="text-xs text-[#555555] hover:text-[#009A44] transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E8E0D5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#555555] font-semibold">
            &copy; 2026 AgroWaste. Hak cipta dilindungi. Mendukung Pertanian Sirkular.
          </p>
          <div className="flex items-center gap-4 text-[#555555]">
            <a href="#" className="hover:text-[#009A44] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            </a>
            <a href="#" className="hover:text-[#009A44] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
