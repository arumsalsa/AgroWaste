"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/components/admin/Toast";
import { apiFetch } from "@/lib/api";
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

interface ProductApiItem {
  id: string;
  name: string;
  category?: { slug?: string };
  jenis_ternak?: string;
  peternak_profile?: { nama_peternakan?: string; badge?: string };
  created_at: string;
  price: string | number;
  unit?: string;
  status: string;
}

const REJECTION_REASONS = [
  "Foto produk kurang jelas",
  "Harga tidak wajar untuk pasaran",
  "Kategori tidak sesuai",
  "Deskripsi tidak lengkap",
  "Lainnya",
];

function mapProductToListing(p: ProductApiItem): Listing {
  return {
    id: p.id,
    title: p.name,
    icon:
      p.category?.slug === "limbah_cair"
        ? "liquid"
        : p.jenis_ternak === "ayam"
          ? "grain"
          : "organic",
    seller: p.peternak_profile?.nama_peternakan ?? "Peternakan",
    sellerBadge: p.peternak_profile?.badge?.toUpperCase() || "PETERNAK",
    category:
      p.category?.slug === "limbah_cair" ? "Limbah Cair" : "Limbah Padat",
    date: new Date(p.created_at).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    price: Number(p.price).toLocaleString("id-ID"),
    unit: p.unit ?? "kg",
  };
}

type PendingAction =
  | { type: "approve"; listing: Listing }
  | { type: "reject"; listing: Listing }
  | null;

export const AdminListing = () => {
  const { showToast } = useToast();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [approvedToday, setApprovedToday] = useState(0);
  const [rejectedWeekly, setRejectedWeekly] = useState(0);
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);
  const [rejectionReason, setRejectionReason] = useState(REJECTION_REASONS[0]);

  const fetchListings = () => {
    setLoading(true);
    apiFetch("/admin/products")
      .then((r) =>
        r.ok
          ? r.json()
          : { data: [], meta: { approved_today: 0, rejected_weekly: 0 } },
      )
      .then((json) => {
        const all: ProductApiItem[] = json.data ?? [];
        const pending = all.filter((p) => p.status === "menunggu_review");
        setListings(pending.map(mapProductToListing));
        if (json.meta) {
          setApprovedToday(json.meta.approved_today ?? 0);
          setRejectedWeekly(json.meta.rejected_weekly ?? 0);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const confirmApprove = async () => {
    if (!pendingAction || pendingAction.type !== "approve") return;
    const { listing } = pendingAction;
    try {
      const res = await apiFetch(`/admin/products/${listing.id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status: "aktif" }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setListings((prev) => prev.filter((l) => l.id !== listing.id));
        setApprovedToday((n) => n + 1);
        showToast(
          `"${listing.title}" disetujui dan dipublikasikan ke pasar.`,
          "success",
        );
      } else {
        showToast(json.message ?? "Gagal menyetujui listing.", "error");
      }
    } catch {
      showToast("Tidak dapat terhubung ke server.", "error");
    } finally {
      setPendingAction(null);
    }
  };

  const confirmReject = async () => {
    if (!pendingAction || pendingAction.type !== "reject") return;
    const { listing } = pendingAction;
    try {
      const res = await apiFetch(`/admin/products/${listing.id}/status`, {
        method: "PUT",
        body: JSON.stringify({
          status: "ditolak",
          rejection_reason: rejectionReason,
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setListings((prev) => prev.filter((l) => l.id !== listing.id));
        setRejectedWeekly((n) => n + 1);
        showToast(`"${listing.title}" ditolak: ${rejectionReason}.`, "error");
      } else {
        showToast(json.message ?? "Gagal menolak listing.", "error");
      }
    } catch {
      showToast("Tidak dapat terhubung ke server.", "error");
    } finally {
      setPendingAction(null);
      setRejectionReason(REJECTION_REASONS[0]);
    }
  };

  const cancelAction = () => {
    setPendingAction(null);
    setRejectionReason(REJECTION_REASONS[0]);
  };

  return (
    <>
      <div className="space-y-6 animate-fade-in pb-10">
        <ListingApprovalHeaderSection
          pendingCount={listings.length}
          approvedToday={approvedToday}
          rejectedWeekly={rejectedWeekly}
        />
        <ListingApprovalDashboardSection
          listings={listings}
          onApprove={(listing) =>
            setPendingAction({ type: "approve", listing })
          }
          onReject={(listing) => setPendingAction({ type: "reject", listing })}
        />
      </div>

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
                <div className="w-12 h-12 bg-admin-primary/10 text-admin-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="text-center space-y-2">
                  <h3
                    id="modal-title"
                    className="text-lg font-bold text-admin-textprimary"
                  >
                    Setujui Listing
                  </h3>
                  <p className="text-sm text-admin-textsecondary">
                    Listing{" "}
                    <span className="font-bold text-admin-textprimary">
                      &quot;{pendingAction.listing.title}&quot;
                    </span>{" "}
                    akan disetujui dan langsung tampil untuk pembeli. Lanjutkan?
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <button
                    onClick={cancelAction}
                    className="px-4 py-2.5 bg-admin-warmbg text-admin-textsecondary rounded-xl text-sm font-bold hover:bg-admin-hairline transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    onClick={confirmApprove}
                    className="px-4 py-2.5 bg-admin-primary text-white rounded-xl text-sm font-bold shadow-md shadow-admin-primary/20 hover:bg-admin-primary-hover transition-colors"
                  >
                    Setujui Sekarang
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 space-y-5">
                <div className="text-center space-y-2 mb-2">
                  <h3
                    id="modal-title"
                    className="text-lg font-bold text-admin-textprimary"
                  >
                    Tolak Listing
                  </h3>
                  <p className="text-sm text-admin-textsecondary">
                    Pilih alasan penolakan untuk{" "}
                    <span className="font-bold text-admin-textprimary">
                      &quot;{pendingAction.listing.title}&quot;
                    </span>
                    . Peternak akan menerima notifikasi ini.
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-admin-textsecondary mb-1.5">
                    Alasan Penolakan
                  </label>
                  <select
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    className="w-full px-4 py-2.5 bg-admin-warmbg border border-admin-hairline rounded-xl text-sm text-admin-textprimary focus:outline-none focus:ring-1 focus:ring-admin-primary"
                  >
                    {REJECTION_REASONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-admin-hairline mt-2">
                  <button
                    onClick={cancelAction}
                    className="px-4 py-2.5 bg-admin-warmbg text-admin-textsecondary rounded-xl text-sm font-bold hover:bg-admin-hairline transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    onClick={confirmReject}
                    className="px-4 py-2.5 bg-red-600 text-white rounded-xl text-sm font-bold shadow-md shadow-red-600/20 hover:bg-red-700 transition-colors"
                  >
                    Konfirmasi Tolak
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminListing;
