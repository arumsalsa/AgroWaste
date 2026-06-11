"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Leaf, Recycle, ShieldCheck } from "lucide-react";
import ImpactCalculator from "@/components/public/ImpactCalculator";
import { Marquee } from "@/components/public/Marquee";
import ImageSlider from "@/components/public/ImageSlider";
import FeaturedProducts from "@/components/public/FeaturedProducts";
import MapCn, { SellerInfo } from "@/components/public/MapCn";

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function LandingPage() {
  const router = useRouter();
  const [userCoords, setUserCoords] = useState<[number, number] | null>(null);
  const [sellers, setSellers] = useState<SellerInfo[]>([]);
  const [activeSellerId, setActiveSellerId] = useState<string | null>(null);
  const [geoStatus, setGeoStatus] = useState<"idle" | "prompting" | "granted" | "denied">("idle");
  const [loadingSellers, setLoadingSellers] = useState(true);

  // Set page title client-side since this is a Client Component
  useEffect(() => {
    document.title = "Beranda Utama | AgroWaste";
  }, []);

  // Fetch unique sellers from active products
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?sort=terbaru`)
      .then((r) => (r.ok ? r.json() : { data: { data: [] } }))
      .then((json) => {
        const list = json.data?.data ?? [];
        const uniqueSellersMap = new Map<string, SellerInfo>();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        list.forEach((p: any) => {
          const profile = p.peternak_profile;
          if (profile) {
            const lat = parseFloat(profile.lat || p.lat || "0");
            const lng = parseFloat(profile.lng || p.lng || "0");
            if (lat !== 0 && lng !== 0) {
              uniqueSellersMap.set(profile.user_id, {
                userId: profile.user_id,
                name: profile.nama_peternakan || "Peternak Organik",
                lat,
                lng,
                kabupaten: p.kabupaten || "Jawa Timur",
                provinsi: p.provinsi || "Indonesia",
              });
            }
          }
        });

        setSellers(Array.from(uniqueSellersMap.values()));
        setLoadingSellers(false);
      })
      .catch(() => setLoadingSellers(false));
  }, []);

  // Request user geolocation coords
  const requestLocation = () => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setGeoStatus("denied");
      return;
    }
    setGeoStatus("prompting");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserCoords([pos.coords.longitude, pos.coords.latitude]);
        setGeoStatus("granted");
      },
      () => {
        setGeoStatus("denied");
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  useEffect(() => {
    requestLocation();
  }, []);

  // Calculate Haversine distance and sort sellers by proximity
  const sortedSellers = useMemo(() => {
    if (!userCoords) return sellers;

    const [uLng, uLat] = userCoords;
    const sellersWithDistance = sellers.map((s) => {
      const dist = getDistance(uLat, uLng, s.lat, s.lng);
      return { ...s, distance: dist };
    });

    return [...sellersWithDistance].sort((a, b) => (a.distance || 0) - (b.distance || 0));
  }, [userCoords, sellers]);

  return (
    <div className="flex-1 flex flex-col bg-land-bg">
      {/* Hero Section */}
      <section className="relative bg-land-bg overflow-hidden lg:min-h-[90dvh] flex items-center">
        {/* Decorative cow photo — desktop only, right side, fades left */}
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-[55%] pointer-events-none select-none"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              maskImage: "linear-gradient(to left, black 55%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to left, black 55%, transparent 100%)",
            } as React.CSSProperties}
          >
            <img
              src="/hero-sapi.jpeg"
              alt=""
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Earthy warm tint — harmonises photo with #FBFAF7 palette */}
            <div className="absolute inset-0 bg-[#F0EDE6] opacity-25 mix-blend-multiply pointer-events-none" />
          </div>
        </div>

        {/* Text content — left column, constrained so it doesn't reach the photo */}
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-28 md:pt-3 pb-8 md:pb-12 max-w-7xl mx-auto">
          <div className="lg:max-w-[52%]">
            {/* Brand label — contextual, not an eyebrow pill */}
            <p className="text-land-muted font-medium text-base md:text-lg mb-8 hero-fade-up">
              AgroWaste
            </p>

            {/* Headline — Baloo 2, oversized, left-anchored */}
            <h1
              className="font-land-heading font-bold text-land-ink leading-[1.0] tracking-[-0.025em] mb-5 hero-fade-up"
              style={{
                fontSize: "clamp(2rem, 8vw, 5rem)",
                textWrap: "balance",
                animationDelay: "60ms",
              } as React.CSSProperties}
            >
              Limbah ternak
              <br />
              punya nilai.
            </h1>

            {/* Solution — clay, Baloo 2 */}
            <p
              className="font-land-heading font-bold text-land-clay mb-8 hero-fade-up"
              style={{
                fontSize: "clamp(1.25rem, 3.5vw, 2.125rem)",
                animationDelay: "140ms",
              } as React.CSSProperties}
            >
              Kami bantu jualkan.
            </p>

            {/* Body copy */}
            <p
              className="text-land-muted text-lg leading-relaxed max-w-lg mb-12 hero-fade-up"
              style={{ animationDelay: "220ms" } as React.CSSProperties}
            >
              Hubungkan sisa pakan, kotoran ternak, dan produk kandangmu dengan petani yang butuh pupuk organik berkualitas.
            </p>

            {/* CTAs — clay-tactile style, left-aligned, stack on mobile */}
            <div
              className="flex flex-wrap gap-4 hero-fade-up"
              style={{ animationDelay: "300ms" } as React.CSSProperties}
            >
              <Link href="/register?role=penjual" className="btn-clay-primary">
                Mulai Jual Limbah
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="/marketplace" className="btn-clay-secondary">
                Cari Pupuk Organik
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Mission Section (Redesigned Editorial) */}
      <section className="py-10 md:py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-land-ink rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center shadow-[0_8px_32px_rgba(44,57,48,0.15)] relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-land-secondary opacity-30 rounded-full blur-3xl pointer-events-none" />

          {/* Text Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-land-bg text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md border border-white/5">
              <Leaf className="w-4 h-4 text-land-accent" />
              Misi Kami
            </div>

            <h2
              className="font-land-heading font-bold text-land-bg text-3xl md:text-5xl leading-tight mb-6"
              style={{ textWrap: "balance" }}
            >
              Merajut harmoni antara peternakan & alam.
            </h2>

            <p className="text-land-warm/80 text-base md:text-lg leading-relaxed mb-8">
              Kami tidak sekadar platform jual-beli. AgroWaste lahir dari kegelisahan akan menumpuknya limbah organik yang mencemari lingkungan. Kami percaya, dengan sentuhan sirkular, apa yang tadinya sisa bisa menjadi nyawa baru bagi tanah Nusantara.
            </p>

            {/* Stats - Editorial horizontal list */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-4xl font-bold text-land-accent font-land-heading mb-1">5.2k+</div>
                <div className="text-[11px] font-bold text-land-warm/60 uppercase tracking-widest">Peternak Aktif</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-land-clay font-land-heading mb-1">12.4k</div>
                <div className="text-[11px] font-bold text-land-warm/60 uppercase tracking-widest">Ton Diolah</div>
              </div>
            </div>
          </div>

          {/* Image & Cards Layout (Asymmetric) */}
          <div className="w-full lg:w-1/2 relative z-10 flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col gap-6 w-full sm:w-1/2 translate-y-0 sm:translate-y-8">
              <ImageSlider
                images={[
                  "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1589923188900-85dae440047b?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1500937386664-56d159f87b81?auto=format&fit=crop&w=600&q=80",
                ]}
                overlayClass="bg-land-ink/20"
              />
              <div className="bg-land-secondary/80 backdrop-blur-md rounded-[24px] p-6 border border-white/10">
                <Recycle className="w-8 h-8 text-land-accent mb-4" />
                <h3 className="text-land-bg font-bold text-lg mb-2">Konversi Efisien</h3>
                <p className="text-land-warm/70 text-sm leading-relaxed">
                  Sistem cerdas kami memastikan perpindahan pupuk dari kandang ke lahan dalam waktu 48 jam.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full sm:w-1/2">
              <div className="bg-land-clay/90 backdrop-blur-md rounded-[24px] p-6 border border-white/10">
                <ShieldCheck className="w-8 h-8 text-land-bg mb-4" />
                <h3 className="text-land-bg font-bold text-lg mb-2">Kualitas Terjamin</h3>
                <p className="text-land-warm/80 text-sm leading-relaxed">
                  Hanya pupuk organik terverifikasi yang sampai ke tangan petani, menekan risiko kegagalan panen.
                </p>
              </div>
              <ImageSlider
                images={[
                  "https://images.unsplash.com/photo-1592982537447-6f2b6cb1e194?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80",
                ]}
                overlayClass="bg-land-clay/20"
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* GIS Tracking Dark Section */}
      <section className="bg-[#1C231F] py-12 md:py-16 px-6 text-white mt-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Kecerdasan Logistik
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-land-heading font-bold max-w-2xl leading-tight">
              Temukan peternak organik terdekat dari <span className="text-emerald-400">lokasi Anda.</span>
            </h2>
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#E8E0D5]">
              SISTEM GIS: <span className="text-emerald-400 font-bold">AKTIF</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Map Container */}
            <div className="w-full lg:w-2/3 h-[450px] md:h-[520px] bg-[#000000] rounded-[32px] border border-white/10 relative overflow-hidden group shadow-clay">
              <MapCn
                userCoords={userCoords}
                sellers={sortedSellers}
                activeSellerId={activeSellerId}
                onSelectSeller={(s) => router.push('/sellers/' + s.userId)}
                className="w-full h-full"
              />
            </div>

            {/* Stats Sidebar */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              {/* Geolocation Status Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 flex flex-col justify-between relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Status Lokasi Anda</span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      geoStatus === "granted"
                        ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)] animate-pulse"
                        : geoStatus === "prompting"
                        ? "bg-amber-400 animate-pulse"
                        : "bg-red-400"
                    }`}
                  />
                </div>

                {geoStatus === "granted" && userCoords ? (
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Koordinat Anda:</div>
                    <div className="text-sm font-mono text-emerald-300 font-tabular">
                      {userCoords[1].toFixed(5)}° S, {userCoords[0].toFixed(5)}° E
                    </div>
                  </div>
                ) : geoStatus === "prompting" ? (
                  <p className="text-xs text-white/80">Meminta izin lokasi perangkat...</p>
                ) : (
                  <div className="space-y-2.5">
                    <p className="text-xs text-white/60">Akses lokasi tidak diaktifkan. Aktifkan GPS untuk melacak peternak terdekat.</p>
                    <button
                      onClick={requestLocation}
                      className="px-3.5 py-2 bg-land-accent hover:bg-land-accent-hover text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm"
                    >
                      Aktifkan Lokasi Saya
                    </button>
                  </div>
                )}
              </div>

              {/* Nearest Sellers List */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 flex-1 flex flex-col justify-start overflow-hidden min-h-[280px]">
                <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest mb-4 block">Peternak Terdekat</span>

                {loadingSellers ? (
                  <div className="flex flex-col items-center justify-center py-10 flex-1 animate-pulse">
                    <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mb-2"></div>
                    <span className="text-[10px] font-bold text-white/50">Mencari peternak...</span>
                  </div>
                ) : sortedSellers.length === 0 ? (
                  <p className="text-xs text-white/50 italic py-10 text-center">Tidak ada lokasi peternak terverifikasi.</p>
                ) : (
                  <div className="space-y-3 overflow-y-auto max-h-[280px] pr-1">
                    {sortedSellers.slice(0, 3).map((s) => (
                      <div
                        key={s.userId}
                        onClick={() => setActiveSellerId(s.userId)}
                        className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 ${
                          activeSellerId === s.userId
                            ? "bg-land-accent/20 border-land-accent text-white"
                            : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <h4 className="font-bold text-sm truncate leading-snug">{s.name}</h4>
                          <p className="text-[10px] text-white/50 truncate mt-0.5">
                            {s.kabupaten}, {s.provinsi}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          {s.distance !== undefined ? (
                            <span className="text-xs font-bold text-emerald-300 font-tabular block">
                              {s.distance.toFixed(1)} <span className="text-[10px] font-normal text-white/50">km</span>
                            </span>
                          ) : (
                            <span className="text-[10px] text-white/40">Lokasi</span>
                          )}
                          <Link
                            href={`/sellers/${s.userId}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider block mt-1 hover:underline"
                          >
                            Lihat Profil
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Calculator (Client Component) */}
      <ImpactCalculator />
    </div>
  );
}
