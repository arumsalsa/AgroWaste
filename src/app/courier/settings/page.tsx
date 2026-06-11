"use client";

import React, { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { saveAuth, getToken } from "@/lib/auth";

interface ProfileResponse {
  success: boolean;
  data: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    avatar_url: string | null;
    role: string;
    logistik_profile?: {
      company_name: string | null;
      vehicle_plate: string | null;
    };
  };
}

export default function CourierSettings() {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const fetchProfile = () => {
    apiFetch("/profile")
      .then((r) => (r.ok ? r.json() : null))
      .then((json: ProfileResponse | null) => {
        if (json?.success && json?.data) {
          const u = json.data;
          setFullName(u.name || "");
          setPhone(u.phone || "");
          setEmail(u.email || "");
          setAvatarUrl(u.avatar_url || "");
          if (u.logistik_profile) {
            setCompanyName(u.logistik_profile.company_name || "");
            setVehiclePlate(u.logistik_profile.vehicle_plate || "");
          }
        } else {
          setErrorMsg("Gagal memuat profil kurir.");
        }
      })
      .catch(() => {
        setErrorMsg("Tidak dapat terhubung ke server.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const body = {
        name: fullName,
        email: email,
        phone: phone,
        avatar_url: avatarUrl || null,
        company_name: companyName,
        vehicle_plate: vehiclePlate,
      };

      const res = await apiFetch("/profile", {
        method: "PUT",
        body: JSON.stringify(body),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        // update cached auth
        const token = getToken();
        if (token && json.data) {
          saveAuth(token, {
            id: json.data.id,
            name: json.data.name,
            email: json.data.email,
            role: json.data.role,
          });
        }
        setIsSuccessModalOpen(true);
      } else {
        setErrorMsg(json.message || "Gagal memperbarui profil.");
      }
    } catch {
      setErrorMsg("Terjadi kesalahan koneksi server.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-center animate-pulse text-courier-textsecondary">
        Memuat form pengaturan profil...
      </div>
    );
  }

  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    fullName
  )}&background=2F5A28&color=fff&rounded=true`;

  return (
    <div className="space-y-8 animate-fade-in pb-20">
      
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-courier-primary mb-2">Pengaturan Profil</h2>
        <p className="text-sm text-courier-textsecondary">Kelola informasi pribadi, detail kendaraan, dan keamanan akun kamu.</p>
      </div>

      {errorMsg && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-semibold">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-4 bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-2xl bg-courier-primary/10 mb-6 p-2 relative">
            <div className="absolute inset-0 bg-courier-primary rounded-2xl overflow-hidden">
              <div className="absolute top-2 left-2 w-8 h-8 rounded-full border border-white/20"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full border border-white/20"></div>
            </div>
            <img
              src={avatarUrl || fallbackAvatar}
              alt={fullName}
              className="w-full h-full rounded-xl object-cover relative z-10 border-2 border-white shadow-md"
            />
          </div>
          <h3 className="text-lg font-bold text-courier-textprimary">{fullName}</h3>
          <p className="text-sm text-courier-textsecondary mb-6">{companyName || "Mitra Logistik"}</p>
          
          <div className="w-full text-left">
            <label className="block text-[10px] font-bold text-courier-textsecondary mb-1">URL Foto Profil</label>
            <input
              type="text"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              placeholder="https://example.com/foto.png"
              className="w-full px-3 py-1.5 bg-courier-surfacewhite border border-courier-hairline rounded-lg text-xs focus:outline-none focus:border-courier-primary text-courier-textprimary"
            />
          </div>
        </div>

        {/* Right Column: Settings Forms */}
        <div className="lg:col-span-8 space-y-6">
          <form onSubmit={handleSave} className="space-y-6">
            
            {/* Personal Information */}
            <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-courier-warmbg/50 px-6 py-4 border-b border-courier-hairline">
                <h3 className="font-bold text-courier-primary text-sm">Informasi Pribadi</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-courier-textsecondary mb-2">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-courier-textsecondary mb-2">Nomor Telepon *</label>
                    <input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-courier-textsecondary mb-2">Alamat Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-courier-warmbg/50 px-6 py-4 border-b border-courier-hairline">
                <h3 className="font-bold text-courier-primary text-sm">Detail Kendaraan & Layanan</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-courier-textsecondary mb-2">Nama Perusahaan / Layanan *</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Mis: Mandiri Trans, Kargo Hijau"
                      className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-courier-textsecondary mb-2">Plat Nomor Kendaraan *</label>
                    <input
                      type="text"
                      required
                      value={vehiclePlate}
                      onChange={(e) => setVehiclePlate(e.target.value)}
                      placeholder="B 1234 CD"
                      className="w-full px-4 py-2.5 bg-courier-surfacewhite border border-courier-hairline rounded-xl text-sm focus:outline-none focus:border-courier-primary focus:ring-1 focus:ring-courier-primary text-courier-textprimary font-tabular uppercase"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end items-center gap-6 pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-courier-primary hover:bg-green-800 text-white rounded-xl text-sm font-bold transition-colors shadow-md shadow-courier-primary/20"
              >
                {submitting ? "Menyimpan..." : "Simpan Perubahan Profil"}
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Modal Sukses Simpan */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-courier-surfacewhite w-full max-w-sm rounded-3xl border border-courier-hairline overflow-hidden p-8 text-center space-y-4 animate-fade-in shadow-xl">
            <div className="w-16 h-16 bg-green-100 text-courier-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-courier-textprimary">Berhasil Disimpan</h3>
              <p className="text-sm text-courier-textsecondary mt-2">Data profil dan detail kendaraan logistik Anda telah berhasil diperbarui.</p>
            </div>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full mt-6 py-3 bg-courier-primary hover:bg-green-800 text-white rounded-xl text-sm font-bold transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
