"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-seller-textprimary mb-1">Pengaturan Akun Saya</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Settings Menu */}
        <div className="lg:col-span-1 space-y-2">
          <button className="w-full text-left px-4 py-3 bg-seller-primary text-white rounded-xl text-sm font-bold shadow-md shadow-seller-primary/20 transition-colors">
            Profil Peternakan
          </button>
          <button className="w-full text-left px-4 py-3 text-seller-textsecondary hover:bg-seller-warmbg hover:text-seller-textprimary rounded-xl text-sm font-semibold transition-colors">
            Notifikasi
          </button>
          <button className="w-full text-left px-4 py-3 text-seller-textsecondary hover:bg-seller-warmbg hover:text-seller-textprimary rounded-xl text-sm font-semibold transition-colors">
            Keamanan
          </button>
          <button className="w-full text-left px-4 py-3 text-seller-textsecondary hover:bg-seller-warmbg hover:text-seller-textprimary rounded-xl text-sm font-semibold transition-colors">
            Integrasi Logistik
          </button>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-6">
          <form onSubmit={handleSave} className="space-y-6">
            
            {/* Informasi Dasar */}
            <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-seller-textprimary mb-6">Informasi Dasar</h3>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <img src="https://ui-avatars.com/api/?name=Pak+Sugeng&background=3F4F44&color=fff&rounded=true" alt="Logo" className="w-20 h-20 rounded-full object-cover shadow-sm border border-seller-hairline" />
                </div>
                <div>
                  <button type="button" className="px-4 py-2 bg-[#EBE7E0] hover:bg-seller-hairline text-seller-textprimary text-xs font-bold rounded-xl transition-colors">
                    Ubah Logo
                  </button>
                  <p className="text-[10px] text-seller-textsecondary mt-2">JPG, GIF, atau PNG. Maksimal 2MB.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-seller-textsecondary mb-1">Nama Peternakan</label>
                  <input type="text" defaultValue="AgroWaste Merchant" className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm font-semibold text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-seller-textsecondary mb-1">Deskripsi Peternakan</label>
                  <textarea rows={4} defaultValue="Peternakan sapi terpadu yang berfokus pada pengolahan limbah organik menjadi pupuk kandang berkualitas tinggi dan berkelanjutan." className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary"></textarea>
                </div>
              </div>
            </div>

            {/* Lokasi & Kontak */}
            <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-seller-textprimary mb-6">Lokasi & Kontak</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-seller-textsecondary mb-1">Alamat Lengkap</label>
                  <textarea rows={3} defaultValue="Jl. Agrowisata No. 45, Desa Sukamaju, Kec. Ciawi, Bogor, Jawa Barat 16720" className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary"></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-seller-textsecondary mb-1">Email Kontak</label>
                    <input type="email" defaultValue="kontak@agrowastemerchant.com" className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-seller-textsecondary mb-1">No. Handphone</label>
                    <input type="text" defaultValue="+62 812-3456-7890" className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary font-tabular focus:outline-none focus:ring-1 focus:ring-seller-primary" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="px-6 py-3 bg-seller-primary hover:bg-seller-primary-hover text-white text-sm font-bold rounded-xl shadow-md shadow-seller-primary/20 transition-colors">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal Sukses Simpan */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-seller-surfacewhite w-full max-w-sm rounded-3xl border border-seller-hairline overflow-hidden p-8 text-center space-y-4 animate-fade-in shadow-xl">
            <div className="w-16 h-16 bg-seller-primary-light text-seller-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-seller-textprimary">Berhasil Disimpan</h3>
              <p className="text-sm text-seller-textsecondary mt-2">Perubahan profil peternakan Anda telah berhasil diperbarui.</p>
            </div>
            <button onClick={() => setIsSuccessModalOpen(false)} className="w-full mt-6 py-3 bg-seller-primary hover:bg-seller-primary-hover text-white rounded-xl text-sm font-bold transition-colors">
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
