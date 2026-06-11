"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Globe2, 
  Recycle, 
  Sparkles, 
  TrendingUp, 
  TreePine, 
  Download, 
  ArrowUpRight, 
  Leaf, 
  Sprout, 
  Users
} from "lucide-react";
import { apiFetch } from "@/lib/api";

interface ImpactData {
  total_waste_managed_kg: number;
  total_co2eq_reduced_kg: number;
  equivalent_trees: number;
  active_sellers_count: number;
  total_transactions: number;
}

export default function ImpactPage() {
  const [data, setData] = useState<ImpactData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/dashboard/impact")
      .then((res) => (res.ok ? res.json() : { data: null }))
      .then((json) => {
        if (json.success && json.data) {
          setData(json.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const wasteMetric = data ? (data.total_waste_managed_kg >= 1000 ? {
    value: (data.total_waste_managed_kg / 1000).toLocaleString("id-ID", { maximumFractionDigits: 1 }),
    unit: "Ton"
  } : {
    value: data.total_waste_managed_kg.toLocaleString("id-ID"),
    unit: "kg"
  }) : { value: "12.4", unit: "Ton" };

  const co2Metric = data ? (data.total_co2eq_reduced_kg >= 1000 ? {
    value: (data.total_co2eq_reduced_kg / 1000).toLocaleString("id-ID", { maximumFractionDigits: 1 }),
    unit: "Ton CO₂e"
  } : {
    value: data.total_co2eq_reduced_kg.toLocaleString("id-ID"),
    unit: "kg CO₂e"
  }) : { value: "375", unit: "Ton CO₂e" };

  const treesCount = data ? data.equivalent_trees.toLocaleString("id-ID") : "15.000";
  const activeSellers = data ? data.active_sellers_count.toLocaleString("id-ID") : "2.4k";

  if (loading) {
    return (
      <div className="flex-1 bg-land-bg min-h-screen pb-20 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-land-accent border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="text-sm font-bold text-land-muted tracking-wider uppercase">Memuat Laporan Transparansi...</span>
      </div>
    );
  }

  return (
    <div className="flex-1 animate-fade-in bg-land-bg min-h-screen pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-land-accent text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-land-cream">
            <Globe2 className="w-4 h-4 text-land-accent" /> Laporan Transparansi 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-land-heading font-bold text-land-ink leading-tight mb-8" style={{ textWrap: "balance" }}>
            Merawat Bumi,<br />Satu <span className="text-land-accent">Limbah Organik</span> Sekali Waktu.
          </h1>
          <p className="text-land-muted md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Pantau kontribusi kolektif komunitas AgroWaste secara real-time. Bersama-sama kita mengubah limbah yang membusuk menjadi kehidupan baru bagi tanah pertanian Indonesia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Bento Grid Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Card 1: Total Terproses (Lebar) */}
          <div className="md:col-span-2 bg-land-ink rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group shadow-clay hover:-translate-y-1 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-land-accent rounded-full filter blur-[120px] opacity-10 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-emerald-300 mb-12 border border-white/10 shadow-inner">
                <Recycle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-white/70 text-sm font-bold uppercase tracking-widest mb-3">Limbah Organik Terolah</h3>
                <div className="flex items-baseline gap-4">
                  <span className="text-7xl md:text-9xl font-bold text-white tracking-tighter font-tabular">{wasteMetric.value}</span>
                  <span className="text-2xl md:text-3xl font-bold text-emerald-300 ml-2">{wasteMetric.unit}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <p className="text-white/60 text-sm font-medium">Berdasarkan data timbangan logistik terverifikasi sejak 2024</p>
              <div className="flex items-center gap-2 text-emerald-300 bg-white/5 px-4 py-2 rounded-full text-xs font-bold w-max border border-white/10">
                <TrendingUp className="w-4 h-4" /> Naik 24% dari Kuartal Lalu
              </div>
            </div>
          </div>

          {/* Card 2: CO2 */}
          <div className="bg-land-warm border border-land-cream rounded-2xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group shadow-clay hover:-translate-y-1 transition-transform duration-500">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-land-accent mb-12 shadow-sm border border-land-cream/40">
              <Sparkles className="w-8 h-8 text-land-accent" />
            </div>
            <div>
              <h3 className="text-land-accent text-sm font-bold uppercase tracking-widest mb-3">Reduksi Emisi Metana</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl md:text-7xl font-bold text-land-accent tracking-tighter font-tabular">{co2Metric.value}</span>
                <span className="font-bold text-land-accent/70 text-xl ml-1">{co2Metric.unit}</span>
              </div>
              <p className="text-sm text-land-muted leading-relaxed font-medium">
                Setara dengan meniadakan emisi gas buang dari 80 mobil berbahan bakar fosil selama setahun penuh.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Pohon (Full Width) */}
        <div className="bg-white border border-land-cream rounded-2xl p-8 md:p-12 shadow-clay flex flex-col lg:flex-row items-center justify-between gap-10 mb-6 hover:-translate-y-1 transition-transform duration-500">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-24 h-24 bg-land-warm rounded-xl border border-land-cream flex items-center justify-center text-land-accent shrink-0">
              <TreePine className="w-12 h-12 text-land-accent" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-land-accent uppercase tracking-widest mb-2">Dampak Ekologis</div>
              <h3 className="font-land-heading text-3xl md:text-4xl font-bold text-land-ink mb-4">Setara {treesCount}+ Pohon Tumbuh</h3>
              <p className="text-land-muted md:text-lg max-w-2xl leading-relaxed font-medium">
                Kontribusi seluruh anggota platform dalam mengembalikan karbon ke dalam tanah secara sirkular menghasilkan dampak penyerapan karbon yang luar biasa.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center lg:items-end w-full lg:w-auto bg-land-bg p-6 rounded-xl border border-land-cream/50">
            <div className="flex items-center gap-2 mb-2 text-land-accent">
              <Users className="w-6 h-6 text-land-accent" />
              <span className="text-2xl font-bold text-land-ink font-tabular">{activeSellers}</span>
            </div>
            <p className="text-xs font-bold text-land-muted uppercase tracking-wider text-center lg:text-right">Mitra Peternak Aktif</p>
          </div>
        </div>

        {/* Visual Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          
          {/* Distribusi Chart */}
          <div className="bg-white border border-land-cream rounded-2xl p-8 md:p-12 shadow-clay hover:-translate-y-1 transition-transform duration-500">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-land-warm rounded-xl flex items-center justify-center text-land-accent border border-land-cream/30">
                <Leaf className="w-6 h-6 text-land-accent" />
              </div>
              <h3 className="font-land-heading text-2xl font-bold text-land-ink">Distribusi Limbah</h3>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-end text-sm font-bold">
                  <span className="text-land-ink flex items-center gap-3 text-base">
                    <div className="w-4 h-4 rounded-[6px] bg-land-accent shadow-sm" /> Kotoran Sapi
                  </span>
                  <span className="text-land-accent text-xl font-tabular">50%</span>
                </div>
                <div className="w-full h-6 bg-land-warm rounded-full overflow-hidden p-1">
                  <div className="h-full bg-land-accent w-[50%] rounded-full shadow-sm" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-end text-sm font-bold">
                  <span className="text-land-ink flex items-center gap-3 text-base">
                    <div className="w-4 h-4 rounded-[6px] bg-land-clay shadow-sm" /> Kotoran Ayam
                  </span>
                  <span className="text-land-clay text-xl font-tabular">30%</span>
                </div>
                <div className="w-full h-6 bg-land-warm rounded-full overflow-hidden p-1">
                  <div className="h-full bg-land-clay w-[30%] rounded-full shadow-sm" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-end text-sm font-bold">
                  <span className="text-land-ink flex items-center gap-3 text-base">
                    <div className="w-4 h-4 rounded-[6px] bg-land-secondary shadow-sm" /> Kambing & Lainnya
                  </span>
                  <span className="text-land-secondary text-xl font-tabular">20%</span>
                </div>
                <div className="w-full h-6 bg-land-warm rounded-full overflow-hidden p-1">
                  <div className="h-full bg-land-secondary w-[20%] rounded-full shadow-sm" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Laporan CSR Card */}
          <div className="bg-land-ink rounded-2xl p-8 md:p-12 shadow-clay flex flex-col justify-center items-center text-center relative overflow-hidden hover:-translate-y-1 transition-transform duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-land-accent rounded-full filter blur-[100px] opacity-15 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-8 border border-white/10">
                <Sprout className="w-10 h-10 text-emerald-300" />
              </div>
              <h3 className="font-land-heading text-3xl font-bold text-white mb-4">Unduh Laporan CSR</h3>
              <p className="text-white/60 mb-10 max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                Dapatkan laporan lengkap mengenai metodologi perhitungan jejak karbon, dampak ESG, dan tata kelola AgroWaste.
              </p>
              
              <button className="w-full sm:w-auto bg-land-accent hover:bg-land-accent-hover text-white rounded-xl font-bold py-3.5 px-8 transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer">
                <Download className="w-5 h-5" /> Unduh PDF Laporan (4.2 MB)
              </button>
            </div>
          </div>
          
        </div>

        {/* Footer CTA */}
        <div className="py-20 text-center border-t border-land-cream/60">
          <h2 className="text-3xl md:text-4xl font-land-heading font-bold text-land-ink mb-6">Jadilah Bagian dari Solusi</h2>
          <p className="text-land-muted text-lg max-w-2xl mx-auto mb-10">Ubah limbah menjadi nutrisi tanah yang berharga. Bergabunglah dengan platform sirkular AgroWaste hari ini dan berikan dampak positif bagi alam.</p>
          <Link href="/marketplace" className="bg-land-accent hover:bg-land-accent-hover text-white rounded-xl font-bold py-4 px-10 transition-colors shadow-md inline-flex items-center justify-center gap-3 cursor-pointer">
            Mulai Kontribusi <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
