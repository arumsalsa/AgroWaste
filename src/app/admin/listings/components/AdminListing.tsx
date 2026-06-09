"use client";

import { useState } from "react";
import { useToast } from "@/components/admin/Toast";
import { ListingApprovalHeaderSection } from "./ListingApprovalHeaderSection";
import { ListingApprovalDashboardSection } from "./ListingApprovalDashboardSection";

export interface Listing {
  id: string;
  title: string;
  icon: string;
  seller: string;
  sellerBadge: string;
  category: "Limbah Padat" | "Limbah Cair";
  date: string;
  price: string;
  unit: string;
}

const REJECTION_REASONS = [
  "Foto produk kurang jelas",
  "Harga tidak wajar untuk pasaran",
  "Kategori tidak sesuai",
  "Deskripsi tidak lengkap",
  "Lainnya",
];

const INITIAL_LISTINGS: Listing[] = [
  {
    id: "WST-2045-A",
    title: "Kulit Sekam Padi Premium",
    icon: "grain",
    seller: "Budi Santoso",
    sellerBadge: "VERIFIED PETERNAK",
    category: "Limbah Padat",
    date: "24 Okt 2023",
    price: "2.500",
    unit: "Kg",
  },
  {
    id: "WST-2088-L",
    title: "Pupuk Cair Kompos Fermentasi",
    icon: "liquid",
    seller: "Siti Aminah",
    sellerBadge: "ELITE PRODUCER",
    category: "Limbah Cair",
    date: "25 Okt 2023",
    price: "15.000",
    unit: "Liter",
  },
  {
    id: "WST-3011-S",
    title: "Pupuk Kandang Sapi Kering",
    icon: "organic",
    seller: "Agung Wijaya",
    sellerBadge: "NEW PETERNAK",
    category: "Limbah Padat",
    date: "25 Okt 2023",
    price: "1.800",
    unit: "Kg",
  },
];

type PendingAction =
  | { type: "approve"; listing: Listing }
  | { type: "reject"; listing: Listing }
  | null;

export const AdminListing = () => {
  const { showToast } = useToast();
  const [listings, setListings] = useState<Listing[]>(INITIAL_LISTINGS);
  const [approvedToday, setApprovedToday] = useState(12);
  const [rejectedWeekly, setRejectedWeekly] = useState(3);
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);
  const [rejectionReason, setRejectionReason] = useState(REJECTION_REASONS[0]);

  const confirmApprove = () => {
    if (!pendingAction || pendingAction.type !== "approve") return;
    const { listing } = pendingAction;
    setListings((prev) => prev.filter((l) => l.id !== listing.id));
    setApprovedToday((n) => n + 1);
    showToast(`"${listing.title}" disetujui dan dipublikasikan ke pasar.`, "success");
    setPendingAction(null);
  };

  const confirmReject = () => {
    if (!pendingAction || pendingAction.type !== "reject") return;
    const { listing } = pendingAction;
    setListings((prev) => prev.filter((l) => l.id !== listing.id));
    setRejectedWeekly((n) => n + 1);
    showToast(`"${listing.title}" ditolak: ${rejectionReason}.`, "error");
    setPendingAction(null);
    setRejectionReason(REJECTION_REASONS[0]);
  };

  const cancelAction = () => {
    setPendingAction(null);
    setRejectionReason(REJECTION_REASONS[0]);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <ListingApprovalHeaderSection
        pendingCount={listings.length + 45}
        approvedToday={approvedToday}
        rejectedWeekly={rejectedWeekly}
      />
      <ListingApprovalDashboardSection
        listings={listings}
        onApprove={(listing) => setPendingAction({ type: "approve", listing })}
        onReject={(listing) => setPendingAction({ type: "reject", listing })}
      />

      {/* Confirmation modal */}
      {pendingAction && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-40 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-admin-surfacewhite w-full max-w-sm rounded-2xl border border-admin-hairline overflow-hidden shadow-xl animate-fade-in">
            {pendingAction.type === "approve" ? (
              <div className="p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-admin-semgreen/10 text-admin-semgreen flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 id="modal-title" className="font-bold text-admin-textprimary">Setujui Listing ini?</h3>
                    <p className="text-sm text-admin-textsecondary mt-1">
                      <span className="font-semibold text-admin-textprimary">{pendingAction.listing.title}</span> akan dipublikasikan ke pasar dan tersedia untuk pembeli.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end pt-2">
                  <button
                    type="button"
                    onClick={cancelAction}
                    className="px-4 py-2 text-sm font-bold text-admin-textsecondary bg-admin-surfacewhite border border-admin-hairline rounded-xl hover:bg-admin-warmbg transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={confirmApprove}
                    className="px-4 py-2 text-sm font-bold text-white bg-admin-semgreen hover:bg-green-600 rounded-xl transition-colors shadow-sm"
                  >
                    Ya, Setujui
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-admin-semred/10 text-admin-semred flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 id="modal-title" className="font-bold text-admin-textprimary">Tolak Listing ini?</h3>
                    <p className="text-sm text-admin-textsecondary mt-1">
                      <span className="font-semibold text-admin-textprimary">{pendingAction.listing.title}</span> akan dikembalikan ke draf seller beserta alasan penolakan.
                    </p>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-admin-textsecondary mb-1.5">Alasan Penolakan</label>
                  <select
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    className="w-full px-4 py-2.5 bg-admin-warmbg border border-admin-hairline rounded-xl text-sm text-admin-textprimary focus:outline-none focus:ring-1 focus:ring-admin-primary"
                  >
                    {REJECTION_REASONS.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-3 justify-end pt-2">
                  <button
                    type="button"
                    onClick={cancelAction}
                    className="px-4 py-2 text-sm font-bold text-admin-textsecondary bg-admin-surfacewhite border border-admin-hairline rounded-xl hover:bg-admin-warmbg transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={confirmReject}
                    className="px-4 py-2 text-sm font-bold text-white bg-admin-semred hover:bg-red-600 rounded-xl transition-colors shadow-sm"
                  >
                    Konfirmasi Tolak
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminListing;
