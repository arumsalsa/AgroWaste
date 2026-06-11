"use client";

import React, { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

interface Shipment {
  id: string;
  status: string;
  created_at: string;
  order?: {
    order_items?: Array<{
      quantity_kg: string | number;
    }>;
  };
}

export default function CourierImpactTracker() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/logistik/shipments")
      .then((r) => (r.ok ? r.json() : null))
      .then((json) => {
        if (json?.success && json?.data) {
          setShipments(json.data as Shipment[]);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Compute metrics from real shipments
  const completedShipments = shipments.filter((s) => s.status === "terkirim");
  const completedCount = completedShipments.length;

  const totalWasteManagedKg = completedShipments.reduce((sum, s) => {
    const itemSum = s.order?.order_items?.reduce((itemAcc, item) => itemAcc + Number(item.quantity_kg || 0), 0) || 0;
    return sum + itemSum;
  }, 0);

  const co2ReducedKg = totalWasteManagedKg * 0.98;
  const totalDistanceKm = completedCount * 12.5; // average 12.5km per delivery

  // Badges logic
  const isWasteBadgeUnlocked = totalWasteManagedKg >= 500;
  const isCarbonBadgeUnlocked = co2ReducedKg >= 400;
  const isDistanceBadgeUnlocked = totalDistanceKm >= 100;

  const badgesCount = (isWasteBadgeUnlocked ? 1 : 0) + (isCarbonBadgeUnlocked ? 1 : 0) + (isDistanceBadgeUnlocked ? 1 : 0);

  // Dynamic monthly chart calculations (split by last 6 months)
  const getMonthlyWeightSum = () => {
    const monthlySum = [0, 0, 0, 0, 0, 0]; // last 6 months
    const now = new Date();
    completedShipments.forEach((s) => {
      const sDate = new Date(s.created_at);
      const diffMonths = (now.getFullYear() - sDate.getFullYear()) * 12 + now.getMonth() - sDate.getMonth();
      if (diffMonths >= 0 && diffMonths < 6) {
        const itemSum = s.order?.order_items?.reduce((itemAcc, item) => itemAcc + Number(item.quantity_kg || 0), 0) || 0;
        monthlySum[5 - diffMonths] += itemSum;
      }
    });
    return monthlySum;
  };

  const monthlyData = getMonthlyWeightSum();
  const maxMonthly = Math.max(...monthlyData, 100); // minimum scale of 100kg
  const chartHeights = monthlyData.map((w) => Math.min(100, Math.round((w / maxMonthly) * 100)));

  // Generate dynamic labels for last 6 months
  const getMonthLabels = () => {
    const months = ["JAN", "FEB", "MAR", "APR", "MEI", "JUN", "JUL", "AGU", "SEP", "OKT", "NOV", "DES"];
    const labels = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      labels.push(months[d.getMonth()]);
    }
    return labels;
  };
  const monthLabels = getMonthLabels();

  if (loading) {
    return (
      <div className="p-10 text-center animate-pulse text-courier-textsecondary">
        Memuat data wawasan dampak...
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in pb-20">
      
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-courier-primary mb-2">Dampak Lingkungan</h2>
        <p className="text-sm text-courier-textsecondary">Kontribusi kamu dalam mendukung pertanian berkelanjutan melalui logistik limbah.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* CO2 Reduced */}
        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-green-100/50 text-green-600 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
            </div>
            <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-md uppercase tracking-wider">
              Limbah Teralihkan
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-courier-textsecondary tracking-wider uppercase block mb-1">CO2 BERKURANG</span>
            <div className="text-4xl font-bold font-tabular text-courier-primary">
              {co2ReducedKg.toLocaleString("id-ID", { maximumFractionDigits: 1 })} <span className="text-xl">kg</span>
            </div>
          </div>
        </div>

        {/* Green Distance */}
        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-[#F3DCC4] text-[#A66C37] rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6M5 3v4M3 5h4M6 17v4m-2-2h4"/></svg>
            </div>
            <span className="px-2.5 py-1 bg-[#F3DCC4] text-[#A66C37] text-[10px] font-bold rounded-md uppercase tracking-wider">
              Jarak Tempuh Hijau
            </span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-courier-textsecondary tracking-wider uppercase block mb-1">JARAK HIJAU</span>
            <div className="text-4xl font-bold font-tabular text-courier-primary">
              {totalDistanceKm.toLocaleString("id-ID", { maximumFractionDigits: 1 })} <span className="text-xl">km</span>
            </div>
          </div>
        </div>

        {/* Badges Earned */}
        <div className="bg-courier-primary rounded-2xl p-6 shadow-md shadow-courier-primary/20 relative overflow-hidden flex flex-col justify-between text-white">
          <div className="absolute -right-10 -bottom-10 opacity-20">
            <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.1-13.8L6.4 12.7l1.4 1.4 3.1-3.1V18h2v-7.1l3.1 3.1 1.4-1.4-4.5-4.5z"/></svg>
          </div>
          <div className="relative z-10 mb-6">
            <span className="text-[10px] font-bold tracking-wider uppercase block mb-2 opacity-90">LENCANA DIRAIH</span>
            <div className="text-5xl font-bold font-tabular">{badgesCount} / 3</div>
          </div>
          <div className="relative z-10 flex gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm ${isWasteBadgeUnlocked ? "bg-white/30 text-white" : "bg-black/20 text-white/40"}`} title="Pahlawan Limbah">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm ${isCarbonBadgeUnlocked ? "bg-white/30 text-white" : "bg-black/20 text-white/40"}`} title="Penjaga Karbon">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm ${isDistanceBadgeUnlocked ? "bg-white/30 text-white" : "bg-black/20 text-white/40"}`} title="Pelindung Bumi">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Trend Chart */}
        <div className="lg:col-span-2 bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-bold text-courier-textprimary text-sm">Tren Dampak</h3>
              <p className="text-xs text-courier-textsecondary">Pengalihan Limbah Organik (kg)</p>
            </div>
          </div>
          
          {/* Chart Graphic */}
          <div className="flex-1 min-h-[250px] flex items-end justify-between relative px-4 pb-8">
            <div className="absolute inset-x-0 bottom-8 border-b border-courier-hairline"></div>
            
            {/* Bars */}
            {chartHeights.map((h, i) => (
              <div key={i} className="w-12 bg-courier-warmbg relative group rounded-t-lg transition-all duration-300 hover:bg-courier-primary/20" style={{ height: `${Math.max(h, 6)}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-courier-textprimary text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {monthlyData[i].toLocaleString("id-ID")} kg
                </div>
              </div>
            ))}
          </div>
          
          {/* X Axis */}
          <div className="flex justify-between px-4 text-[10px] font-bold text-courier-textsecondary mt-2">
            {monthLabels.map((lbl) => (
              <span key={lbl}>{lbl}</span>
            ))}
          </div>
        </div>

        {/* Green Badges Gallery */}
        <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="font-bold text-courier-primary text-sm mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            Lencana Hijau
          </h3>

          <div className="space-y-3 flex-1 mb-6">
            {/* Badge 1 */}
            <div className={`flex items-center gap-4 border rounded-xl p-3 ${isWasteBadgeUnlocked ? "bg-courier-warmbg/50 border-courier-hairline" : "bg-gray-50 border-gray-200 border-dashed opacity-60"}`}>
              <div className={`w-10 h-10 ${isWasteBadgeUnlocked ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-400"} rounded-lg flex items-center justify-center shrink-0`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h4 className={`text-xs font-bold ${isWasteBadgeUnlocked ? "text-courier-textprimary" : "text-gray-500"}`}>Pahlawan Limbah</h4>
                <p className="text-[10px] text-courier-textsecondary mt-0.5 leading-tight">
                  {isWasteBadgeUnlocked ? "Berhasil mengangkut lebih dari 500 kg limbah organik." : "Angkut 500 kg limbah organik untuk membuka."}
                </p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className={`flex items-center gap-4 border rounded-xl p-3 ${isCarbonBadgeUnlocked ? "bg-courier-warmbg/50 border-courier-hairline" : "bg-gray-50 border-gray-200 border-dashed opacity-60"}`}>
              <div className={`w-10 h-10 ${isCarbonBadgeUnlocked ? "bg-[#F3DCC4] text-[#A66C37]" : "bg-gray-200 text-gray-400"} rounded-lg flex items-center justify-center shrink-0`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </div>
              <div>
                <h4 className={`text-xs font-bold ${isCarbonBadgeUnlocked ? "text-courier-textprimary" : "text-gray-500"}`}>Penjaga Karbon</h4>
                <p className="text-[10px] text-courier-textsecondary mt-0.5 leading-tight">
                  {isCarbonBadgeUnlocked ? "Menghemat 400kg emisi CO2." : "Hemat 400kg emisi CO2 untuk membuka."}
                </p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className={`flex items-center gap-4 border rounded-xl p-3 ${isDistanceBadgeUnlocked ? "bg-courier-warmbg/50 border-courier-hairline" : "bg-gray-50 border-gray-200 border-dashed opacity-60"}`}>
              <div className={`w-10 h-10 ${isDistanceBadgeUnlocked ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-400"} rounded-lg flex items-center justify-center shrink-0`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </div>
              <div>
                <h4 className={`text-xs font-bold ${isDistanceBadgeUnlocked ? "text-courier-textprimary" : "text-gray-500"}`}>Pelindung Bumi</h4>
                <p className="text-[10px] text-courier-textsecondary mt-0.5 leading-tight">
                  {isDistanceBadgeUnlocked ? "Tempuh jarak hijau hingga 100 km." : "Capai 100 km pengiriman ramah lingkungan untuk membuka."}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Insights Row */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-courier-primary">Wawasan Dampak Terkini</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex gap-4">
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-courier-textprimary text-sm mb-1">
                Setara dengan {(co2ReducedKg / 21).toFixed(0)} Pohon Ditanam
              </h4>
              <p className="text-xs text-courier-textsecondary leading-relaxed">
                Pengurangan CO2 kamu tahun ini setara dengan manfaat menanam {(co2ReducedKg / 21).toFixed(0)} pohon dewasa selama setahun penuh.
              </p>
            </div>
          </div>

          <div className="bg-courier-surfacewhite border border-courier-hairline rounded-2xl p-6 shadow-sm flex gap-4">
            <div className="w-12 h-12 bg-[#F3DCC4] text-[#A66C37] rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-courier-textprimary text-sm mb-1">
                {(totalWasteManagedKg / 20).toFixed(0)} Hektar Disuburkan
              </h4>
              <p className="text-xs text-courier-textsecondary leading-relaxed">
                Limbah yang kamu kirimkan telah diolah menjadi pupuk organik yang cukup untuk menyuburkan {(totalWasteManagedKg / 20).toFixed(0)} hektar lahan pertanian sirkular.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
