"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

interface UserProfile {
  name: string;
  peternak_profile?: {
    total_sold_kg: string | number;
    badge: string;
  };
}

export default function BadgesPage() {
  const [totalSold, setTotalSold] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/profile")
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (json?.success && json?.data) {
          const user = json.data as UserProfile;
          const sold = Number(user.peternak_profile?.total_sold_kg || 0);
          setTotalSold(sold);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const carbonKg = totalSold * 0.98;
  const carbonText = carbonKg >= 1000 ? `${(carbonKg / 1000).toFixed(1)} Ton` : `${carbonKg.toFixed(0)} kg`;
  const soilScore = Math.min(98, Math.round(60 + totalSold * 0.05));

  const badges = [
    {
      id: "peternak_hijau",
      name: "Peternak Hijau",
      target: 100,
      description: "Kelola 100 kg limbah organik untuk mendukung ekonomi sirkular.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
      gradient: "from-emerald-400 to-emerald-600",
      tier: "Pioneer Hijau",
    },
    {
      id: "agen_iklim",
      name: "Agen Iklim",
      target: 500,
      description: "Olah 500 kg limbah organik untuk meminimalkan dampak pemanasan global.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      gradient: "from-blue-400 to-blue-600",
      tier: "Pembela Atmosfer",
    },
    {
      id: "pahlawan_bumi",
      name: "Pahlawan Bumi",
      target: 1000,
      description: "Selamatkan 1.000 kg limbah untuk memulihkan kesuburan tanah daerah setempat.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: "from-amber-400 to-amber-600",
      tier: "Pelindung Ekosistem",
    },
    {
      id: "alkemis_limbah",
      name: "Master Alkemis",
      target: 5000,
      description: "Daur ulang 5.000 kg limbah organik menjadi berkah pertanian berkelanjutan.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      gradient: "from-violet-500 to-fuchsia-600",
      tier: "Dewa Sirkular",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-seller-textprimary mb-1">Galeri Lencana Dampak</h2>
        <p className="text-sm text-seller-textsecondary">Pantau kontribusimu untuk ekonomi sirkular. Dapatkan lencana dengan mengolah limbah, memperbaiki tanah, dan mengurangi emisi karbon.</p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-seller-primary/5 rounded-bl-full -mr-4 -mt-4"></div>
          <div>
            <div className="text-seller-primary mb-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">TOTAL LIMBAH TERSELAMATKAN</span>
            <h3 className="text-2xl font-bold text-seller-textprimary font-tabular">
              {loading ? "..." : `${totalSold.toLocaleString("id-ID")} kg`}
            </h3>
          </div>
        </div>

        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -mr-4 -mt-4"></div>
          <div>
            <div className="text-blue-500 mb-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">SKOR KESEHATAN TANAH</span>
            <h3 className="text-2xl font-bold text-seller-textprimary font-tabular">
              {loading ? "..." : `${soilScore}/100`}
            </h3>
          </div>
        </div>

        <div className="bg-seller-surfacewhite border border-seller-hairline p-6 rounded-2xl flex items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 top-0 w-24 h-24 bg-amber-500/5 rounded-bl-full -mr-4 -mt-4"></div>
          <div>
            <div className="text-amber-500 mb-3 font-bold text-xl flex items-center">
              CO<sub className="text-xs">2</sub>
            </div>
            <span className="text-[10px] font-bold text-seller-textsecondary uppercase tracking-wider block mb-1">PENGURANGAN KARBON</span>
            <h3 className="text-2xl font-bold text-seller-textprimary font-tabular">
              {loading ? "..." : carbonText}
            </h3>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((badge) => {
          const isUnlocked = totalSold >= badge.target;
          const percentage = Math.min(100, Math.round((totalSold / badge.target) * 100));
          const remaining = Math.max(0, badge.target - totalSold);

          return (
            <div
              key={badge.id}
              className={`bg-seller-surfacewhite border border-seller-hairline rounded-2xl p-6 text-center flex flex-col items-center justify-between relative ${
                !isUnlocked ? "opacity-75" : ""
              }`}
            >
              <div className="flex flex-col items-center w-full">
                <div className="relative w-32 h-32 mb-6">
                  {/* Badge Graphic */}
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-br ${
                      isUnlocked ? badge.gradient : "from-[#EAE6E1] to-[#D5CFC6]"
                    } flex items-center justify-center border-4 border-white shadow-lg relative`}
                  >
                    {isUnlocked ? (
                      badge.icon
                    ) : (
                      <svg className="w-10 h-10 text-seller-textsecondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                  </div>
                  {/* Status Indicator */}
                  <div
                    className={`absolute bottom-2 right-2 w-6 h-6 rounded-full ${
                      isUnlocked ? "bg-seller-primary text-white" : "bg-[#B5ADA3] text-white"
                    } flex items-center justify-center border-2 border-white shadow-sm`}
                  >
                    {isUnlocked ? (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-[10px] font-bold">🔒</span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-seller-textprimary">{badge.name}</h3>
                <span className="text-xs text-seller-textsecondary block mt-1 mb-4">
                  {isUnlocked ? `Tingkat: ${badge.tier}` : "Belum Tercapai"}
                </span>

                <p className="text-xs text-seller-textsecondary px-2 mb-6 leading-relaxed">
                  {badge.description}
                </p>
              </div>

              <div className="w-full text-left mt-auto">
                <div className="flex justify-between text-[10px] font-bold text-seller-textprimary mb-1.5">
                  <span>
                    {totalSold.toLocaleString("id-ID")} kg / {badge.target.toLocaleString("id-ID")} kg
                  </span>
                  <span className={isUnlocked ? "text-seller-primary" : "text-seller-textsecondary"}>
                    {percentage}%
                  </span>
                </div>
                <div className="w-full bg-seller-warmbg h-1.5 rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isUnlocked ? "bg-seller-primary" : "bg-[#B5ADA3]"
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-seller-textsecondary text-center">
                  {isUnlocked
                    ? "Lencana ini telah aktif!"
                    : `${remaining.toLocaleString("id-ID")} kg lagi menuju lencana ini`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
