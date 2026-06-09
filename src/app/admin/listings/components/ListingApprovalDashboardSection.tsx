"use client";

import React, { useState, useMemo } from "react";
import type { Listing } from "./AdminListing";

type FilterKey = "All Pending" | "Limbah Padat" | "Limbah Cair";

interface ListingApprovalDashboardSectionProps {
  listings: Listing[];
  onApprove: (listing: Listing) => void;
  onReject: (listing: Listing) => void;
}

const PRODUCT_ICONS: Record<string, React.ReactElement> = {
  grain: (
    <svg className="w-5 h-5 text-admin-semamber" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
    </svg>
  ),
  liquid: (
    <svg className="w-5 h-5 text-admin-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
    </svg>
  ),
  organic: (
    <svg className="w-5 h-5 text-admin-semgreen" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/>
    </svg>
  ),
};

function sellerBadgeClass(badge: string) {
  if (badge.includes("VERIFIED")) return "text-green-600 bg-green-50";
  if (badge.includes("ELITE"))    return "text-purple-600 bg-purple-50";
  return "text-admin-textsecondary bg-admin-warmbg";
}

export const ListingApprovalDashboardSection = ({
  listings,
  onApprove,
  onReject,
}: ListingApprovalDashboardSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All Pending");

  const filtered = useMemo(
    () =>
      activeFilter === "All Pending"
        ? listings
        : listings.filter((l) => l.category === activeFilter),
    [listings, activeFilter]
  );

  return (
    <div className="bg-admin-surfacewhite border border-admin-hairline rounded-2xl overflow-hidden">
      {/* Controls */}
      <div className="p-6 border-b border-admin-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex bg-admin-warmbg p-1.5 rounded-xl gap-1 max-w-max" role="tablist" aria-label="Category filter">
          {(["All Pending", "Limbah Padat", "Limbah Cair"] as FilterKey[]).map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={activeFilter === f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 font-bold rounded-lg text-xs transition-all ${
                activeFilter === f
                  ? "bg-admin-surfacewhite text-admin-primary shadow-sm"
                  : "text-admin-textsecondary hover:text-admin-textprimary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="text-xs font-bold px-4 py-2 border border-admin-hairline rounded-xl hover:bg-admin-warmbg flex items-center gap-2 transition-colors"
          aria-label="Advanced filters"
        >
          <svg className="w-4 h-4 text-admin-textsecondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter Lanjutan
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-admin-hairline bg-[#F9F8F6] text-[11px] font-bold text-admin-textsecondary uppercase tracking-wider">
              <th className="px-6 py-4">Produk Komoditas</th>
              <th className="px-6 py-4">Nama Penjual</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Tanggal Pengajuan</th>
              <th className="px-6 py-4">Harga / Satuan</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Aksi Moderasi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-admin-hairline">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-16 text-center">
                  <p className="font-bold text-admin-textprimary mb-1">Semua pengajuan selesai</p>
                  <p className="text-sm text-admin-textsecondary">Tidak ada listing yang perlu ditinjau saat ini.</p>
                </td>
              </tr>
            ) : (
              filtered.map((listing) => (
                <tr key={listing.id} className="hover:bg-admin-warmbg/40 transition-colors group">
                  {/* Product */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-admin-warmbg flex items-center justify-center shrink-0 border border-admin-hairline group-hover:bg-admin-primary-light group-hover:border-admin-primary/30 transition-colors">
                        {PRODUCT_ICONS[listing.icon]}
                      </div>
                      <div>
                        <div className="font-semibold text-admin-textprimary group-hover:text-admin-primary transition-colors">{listing.title}</div>
                        <span className="text-xs text-admin-textsecondary font-tabular">ID: {listing.id}</span>
                      </div>
                    </div>
                  </td>

                  {/* Seller */}
                  <td className="px-6 py-4">
                    <div className="font-semibold text-admin-textprimary">{listing.seller}</div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${sellerBadgeClass(listing.sellerBadge)}`}>
                      {listing.sellerBadge}
                    </span>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 text-xs font-semibold bg-admin-warmbg text-admin-textsecondary rounded-full">
                      {listing.category}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-sm text-admin-textsecondary font-tabular">{listing.date}</td>

                  {/* Price */}
                  <td className="px-6 py-4">
                    <span className="font-semibold text-admin-primary font-tabular">
                      IDR {listing.price}{" "}
                      <span className="text-xs font-normal text-admin-textsecondary">/ {listing.unit}</span>
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
                      Pending
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        type="button"
                        aria-label={`Setujui listing ${listing.title}`}
                        onClick={() => onApprove(listing)}
                        className="p-2 bg-green-50 border border-green-200 text-admin-semgreen hover:bg-admin-semgreen hover:text-white hover:border-transparent rounded-lg transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label={`Tolak listing ${listing.title}`}
                        onClick={() => onReject(listing)}
                        className="p-2 bg-red-50 border border-red-200 text-admin-semred hover:bg-admin-semred hover:text-white hover:border-transparent rounded-lg transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-6 border-t border-admin-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-admin-textsecondary font-medium font-tabular">
          Menampilkan{" "}
          <span className="text-admin-textprimary font-bold">{filtered.length}</span> dari{" "}
          <span className="text-admin-textprimary font-bold">{listings.length + 45}</span> pengajuan
        </span>
        <nav className="flex items-center gap-1" aria-label="Pagination">
          <button
            type="button"
            disabled
            aria-label="Previous page"
            className="p-2 border border-admin-hairline rounded-lg text-admin-textsecondary opacity-50 cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              aria-current={page === 1 ? "page" : undefined}
              className={`px-3 py-1.5 font-semibold text-xs rounded-lg font-tabular transition-colors ${
                page === 1
                  ? "bg-admin-primary text-white shadow-sm"
                  : "hover:bg-admin-warmbg text-admin-textsecondary"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            aria-label="Next page"
            className="p-2 border border-admin-hairline rounded-lg text-admin-textsecondary hover:text-admin-primary hover:border-admin-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
};
