"use client";

import { useEffect, useState } from "react";
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
    peternak_profile?: {
      nama_peternakan: string;
      deskripsi: string | null;
      provinsi: string;
      kabupaten: string;
      kecamatan: string;
      lat: string | number | null;
      lng: string | number | null;
    };
  };
}

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const [ownerName, setOwnerName] = useState("");
  const [farmName, setFarmName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [lat, setLat] = useState<number | string>("");
  const [lng, setLng] = useState<number | string>("");

  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState<LeafletMap | null>(null);
  const [markerInstance, setMarkerInstance] = useState<LeafletMarker | null>(null);

  useEffect(() => {
    apiFetch("/profile")
      .then((r) => (r.ok ? r.json() : null))
      .then((json: ProfileResponse | null) => {
        if (json?.success && json?.data) {
          const u = json.data;
          setOwnerName(u.name || "");
          setEmail(u.email || "");
          setPhone(u.phone || "");
          setAvatarUrl(u.avatar_url || "");
          
          if (u.peternak_profile) {
            setFarmName(u.peternak_profile.nama_peternakan || "");
            setDescription(u.peternak_profile.deskripsi || "");
            setProvinsi(u.peternak_profile.provinsi || "");
            setKabupaten(u.peternak_profile.kabupaten || "");
            setKecamatan(u.peternak_profile.kecamatan || "");
            setLat(u.peternak_profile.lat !== null && u.peternak_profile.lat !== undefined ? u.peternak_profile.lat : "");
            setLng(u.peternak_profile.lng !== null && u.peternak_profile.lng !== undefined ? u.peternak_profile.lng : "");
          }
        } else {
          setErrorMsg("Gagal memuat profil.");
        }
      })
      .catch(() => {
        setErrorMsg("Tidak dapat terhubung ke server.");
      })
      .finally(() => setLoading(false));
  }, []);

  // lazy-load Leaflet from CDN
  useEffect(() => {
    const cssId = "leaflet-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    const jsId = "leaflet-js";
    if (!document.getElementById(jsId)) {
      const script = document.createElement("script");
      script.id = jsId;
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = () => setLeafletLoaded(true);
      document.body.appendChild(script);
    } else {
      if (window.L) {
        setLeafletLoaded(true);
      }
    }
  }, []);

  // init map once Leaflet is ready
  useEffect(() => {
    if (!leafletLoaded || loading) return;
    const L = window.L;
    if (!L) return;

    let initialLat = -7.8924;
    let initialLng = 112.6563;
    if (lat && lng) {
      initialLat = Number(lat);
      initialLng = Number(lng);
    }

    const map = L.map("seller-gis-map").setView([initialLat, initialLng], 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    const marker = L.marker([initialLat, initialLng], {
      draggable: true,
    }).addTo(map);

    // sync coords on drag
    marker.on("dragend", () => {
      const position = marker.getLatLng();
      setLat(position.lat.toFixed(6));
      setLng(position.lng.toFixed(6));
    });

    // sync coords on click
    map.on("click", (e: LeafletMouseEvent) => {
      const coords = e.latlng;
      marker.setLatLng(coords);
      setLat(coords.lat.toFixed(6));
      setLng(coords.lng.toFixed(6));
    });

    setMapInstance(map);
    setMarkerInstance(marker);

    return () => {
      map.remove();
    };
  }, [leafletLoaded, loading]);

  const handleLatChange = (val: string) => {
    setLat(val);
    const num = Number(val);
    if (!isNaN(num) && num >= -90 && num <= 90 && mapInstance && markerInstance) {
      markerInstance.setLatLng([num, markerInstance.getLatLng().lng]);
      mapInstance.panTo([num, markerInstance.getLatLng().lng]);
    }
  };

  const handleLngChange = (val: string) => {
    setLng(val);
    const num = Number(val);
    if (!isNaN(num) && num >= -180 && num <= 180 && mapInstance && markerInstance) {
      markerInstance.setLatLng([markerInstance.getLatLng().lat, num]);
      mapInstance.panTo([markerInstance.getLatLng().lat, num]);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const body = {
        name: ownerName,
        email: email,
        phone: phone,
        avatar_url: avatarUrl || null,
        nama_peternakan: farmName,
        deskripsi: description || null,
        provinsi: provinsi,
        kabupaten: kabupaten,
        kecamatan: kecamatan,
        lat: lat !== "" ? Number(lat) : null,
        lng: lng !== "" ? Number(lng) : null,
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
      <div className="space-y-8 animate-pulse pb-10">
        <div className="h-8 w-48 bg-[#EAE6E1] rounded mb-6"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="h-10 bg-[#EAE6E1] rounded-xl"></div>
            <div className="h-10 bg-[#EAE6E1] rounded-xl"></div>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <div className="h-64 bg-[#EAE6E1] rounded-2xl"></div>
            <div className="h-64 bg-[#EAE6E1] rounded-2xl"></div>
          </div>
        </div>
      </div>
    );
  }

  const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    farmName || ownerName
  )}&background=3F4F44&color=fff&rounded=true`;

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-seller-textprimary mb-1">Pengaturan Akun Saya</h2>
        <p className="text-sm text-seller-textsecondary">Perbarui informasi profil peternakan dan kontak Anda.</p>
      </div>

      {errorMsg && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-700 font-semibold">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Settings Menu */}
        <div className="lg:col-span-1 space-y-2">
          <button className="w-full text-left px-4 py-3 bg-seller-primary text-white rounded-xl text-sm font-bold shadow-md shadow-seller-primary/20 transition-colors">
            Profil Peternakan
          </button>
          <button className="w-full text-left px-4 py-3 text-seller-textsecondary hover:bg-seller-warmbg hover:text-seller-textprimary rounded-xl text-sm font-semibold transition-colors opacity-60 cursor-not-allowed">
            Notifikasi (Segera Hadir)
          </button>
          <button className="w-full text-left px-4 py-3 text-seller-textsecondary hover:bg-seller-warmbg hover:text-seller-textprimary rounded-xl text-sm font-semibold transition-colors opacity-60 cursor-not-allowed">
            Keamanan (Segera Hadir)
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
                  <img
                    src={avatarUrl || fallbackAvatar}
                    alt="Logo"
                    className="w-20 h-20 rounded-full object-cover shadow-sm border border-seller-hairline"
                  />
                </div>
                <div className="flex-1 max-w-sm">
                  <label className="block text-xs font-bold text-seller-textsecondary mb-1">URL Avatar / Logo</label>
                  <input
                    type="text"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    placeholder="https://example.com/logo.png"
                    className="w-full px-3 py-1.5 bg-seller-warmbg border border-seller-hairline rounded-lg text-xs font-semibold text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary"
                  />
                  <p className="text-[9px] text-seller-textsecondary mt-1">Masukkan URL gambar logo atau biarkan kosong untuk inisial default.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-seller-textsecondary mb-1">Nama Pemilik *</label>
                    <input
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm font-semibold text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-seller-textsecondary mb-1">Nama Peternakan *</label>
                    <input
                      type="text"
                      required
                      value={farmName}
                      onChange={(e) => setFarmName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm font-semibold text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-seller-textsecondary mb-1">Deskripsi Peternakan</label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Jelaskan jenis ternak dan komitmen pengolahan limbah organik peternakan Anda..."
                    className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Lokasi & Kontak */}
            <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-seller-textprimary mb-6">Lokasi & Kontak</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-seller-textsecondary mb-1">Provinsi *</label>
                    <input
                      type="text"
                      required
                      value={provinsi}
                      onChange={(e) => setProvinsi(e.target.value)}
                      className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-seller-textsecondary mb-1">Kabupaten/Kota *</label>
                    <input
                      type="text"
                      required
                      value={kabupaten}
                      onChange={(e) => setKabupaten(e.target.value)}
                      className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-seller-textsecondary mb-1">Kecamatan *</label>
                    <input
                      type="text"
                      required
                      value={kecamatan}
                      onChange={(e) => setKecamatan(e.target.value)}
                      className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-seller-textsecondary mb-1">Email Kontak *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-seller-textsecondary mb-1">No. Handphone *</label>
                    <input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary font-tabular focus:outline-none focus:ring-1 focus:ring-seller-primary"
                    />
                  </div>
                </div>

                {/* Peta GIS */}
                <div className="pt-6 border-t border-seller-hairline mt-6">
                  <h4 className="text-sm font-bold text-seller-textprimary mb-1">Koordinat Titik Lokasi GIS Peternakan</h4>
                  <p className="text-xs text-seller-textsecondary mb-4">
                    Tentukan titik presisi lokasi peternakan Anda di peta bawah. Anda dapat menyeret (drag) pin pada peta atau mengeklik lokasi mana pun untuk mengubah koordinat secara instan.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-seller-textsecondary mb-1">Latitude (Lintang)</label>
                      <input
                        type="text"
                        placeholder="Contoh: -7.892400"
                        value={lat}
                        onChange={(e) => handleLatChange(e.target.value)}
                        className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-seller-textsecondary mb-1">Longitude (Bujur)</label>
                      <input
                        type="text"
                        placeholder="Contoh: 112.656300"
                        value={lng}
                        onChange={(e) => handleLngChange(e.target.value)}
                        className="w-full px-4 py-2.5 bg-seller-warmbg border border-seller-hairline rounded-xl text-sm text-seller-textprimary focus:outline-none focus:ring-1 focus:ring-seller-primary font-mono"
                      />
                    </div>
                  </div>

                  <div 
                    id="seller-gis-map" 
                    className="w-full h-80 rounded-2xl border border-seller-hairline overflow-hidden relative z-10"
                    style={{ minHeight: "320px" }}
                  />
                  <p className="text-[10px] text-seller-textsecondary mt-2">
                    * Koordinat ini akan dibaca secara real-time oleh mitra kurir untuk merencanakan rute pengiriman dan penjemputan limbah.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-seller-primary hover:bg-seller-primary-hover text-white text-sm font-bold rounded-xl shadow-md shadow-seller-primary/20 transition-colors disabled:opacity-50"
              >
                {submitting ? "Menyimpan..." : "Simpan Perubahan"}
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
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-seller-textprimary">Berhasil Disimpan</h3>
              <p className="text-sm text-seller-textsecondary mt-2">Perubahan profil peternakan Anda telah berhasil diperbarui di server dan lokal.</p>
            </div>
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full mt-6 py-3 bg-seller-primary hover:bg-seller-primary-hover text-white rounded-xl text-sm font-bold transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
