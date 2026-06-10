"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, MapPin, ShieldCheck, Plus, Check, X, ChevronDown, Leaf } from "lucide-react";
import { apiFetch } from "@/lib/api";
import { getToken } from "@/lib/auth";

interface Product {
  id: string;
  name: string;
  price: string;
  unit: string;
  min_order_kg: string;
  kabupaten: string;
  rating_avg: string | number;
  review_count: number;
  peternak_profile?: {
    nama_peternakan: string;
    badge: string;
  };
  category?: {
    name: string;
  };
}

interface PaginatedData {
  data: Product[];
  total: number;
  current_page: number;
  last_page: number;
}

function formatRupiah(price: string | number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(price));
}

const SORT_OPTIONS = [
  { value: "terbaru",         label: "Terbaru" },
  { value: "harga_terendah",  label: "Harga Terendah" },
  { value: "harga_tertinggi", label: "Harga Tertinggi" },
];

export default function MarketplaceProducts({
  filterParams = "",
}: {
  filterParams?: string;
}) {
  const router = useRouter();

  const [paginated, setPaginated] = useState<PaginatedData | null>(null);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState<string | null>(null);
  const [sort,      setSort]      = useState("terbaru");
  const [page,      setPage]      = useState(1);

  // Add-to-cart feedback per product id
  const [addingId, setAddingId] = useState<string | null>(null);
  const [addedId,  setAddedId]  = useState<string | null>(null);
  const [errorId,  setErrorId]  = useState<string | null>(null);

  const handleAddToCart = async (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!getToken()) {
      router.push("/login?callbackUrl=/marketplace");
      return;
    }

    setAddingId(product.id);
    setErrorId(null);

    try {
      const res  = await apiFetch("/cart-items", {
        method: "POST",
        body: JSON.stringify({
          product_id:  product.id,
          quantity_kg: Math.max(1, parseFloat(product.min_order_kg || "1")),
        }),
      });
      const json = await res.json();

      if (!res.ok || !json.success) {
        setErrorId(product.id);
        setTimeout(() => setErrorId(null), 2500);
      } else {
        window.dispatchEvent(new Event("cart-change"));
        setAddedId(product.id);
        setTimeout(() => setAddedId(null), 2000);
      }
    } catch {
      setErrorId(product.id);
      setTimeout(() => setErrorId(null), 2500);
    } finally {
      setAddingId(null);
    }
  };

  // Reset ke halaman 1 setiap kali filter atau sort berubah
  useEffect(() => {
    setPage(1);
  }, [filterParams, sort]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const parts = [
      filterParams,
      `sort=${sort}`,
      page > 1 ? `page=${page}` : "",
    ].filter(Boolean);
    const qs = parts.join("&");

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products${qs ? `?${qs}` : ""}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Gagal memuat produk (${res.status})`);
        return res.json();
      })
      .then((json) => {
        setPaginated(json.data as PaginatedData);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [filterParams, sort, page]);

  const sortLabel = SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "Terbaru";

  const handleSortCycle = () => {
    const idx = SORT_OPTIONS.findIndex((o) => o.value === sort);
    setSort(SORT_OPTIONS[(idx + 1) % SORT_OPTIONS.length].value);
  };

  /* ── Count bar (sort button) ───────────────────────── */
  const countBar = (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <span className="text-land-muted font-bold text-base">
        <span className="text-[#009A44] text-lg">
          {loading ? "—" : (paginated?.total ?? 0)}
        </span>{" "}
        Produk ditemukan
      </span>
      <button
        type="button"
        onClick={handleSortCycle}
        className="flex items-center gap-2 px-5 py-3 bg-white border border-[#E8E0D5] rounded-full text-sm font-bold text-land-ink hover:border-[#009A44] transition-colors shadow-sm"
      >
        Urutkan: {sortLabel} <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );

  /* ── Loading skeleton ──────────────────────────────── */
  if (loading) {
    return (
      <>
        {countBar}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white border border-[#E8E0D5] rounded-[28px] p-3 shadow-[0_8px_24px_rgba(44,57,48,0.04)] animate-pulse"
            >
              <div className="w-full aspect-[4/3] rounded-[20px] bg-[#E8E0D5] mb-5" />
              <div className="px-2 pb-2 flex flex-col gap-3">
                <div className="h-3 bg-[#E8E0D5] rounded-full w-1/3" />
                <div className="h-5 bg-[#E8E0D5] rounded-full w-4/5" />
                <div className="h-4 bg-[#E8E0D5] rounded-full w-2/3" />
                <div className="h-8 bg-[#E8E0D5] rounded-full w-1/2 mt-2" />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  /* ── Error ─────────────────────────────────────────── */
  if (error) {
    return (
      <>
        {countBar}
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-land-muted font-bold text-lg mb-2">Gagal memuat produk</p>
          <p className="text-sm text-land-muted">{error}</p>
        </div>
      </>
    );
  }

  const products = paginated?.data ?? [];

  /* ── Empty ─────────────────────────────────────────── */
  if (products.length === 0) {
    return (
      <>
        {countBar}
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <Leaf className="w-12 h-12 text-[#E8E0D5] mb-4" />
          <p className="text-land-muted font-bold text-lg mb-1">
            Tidak ada produk yang cocok
          </p>
          <p className="text-sm text-land-muted">Coba ubah atau reset filter yang dipilih.</p>
        </div>
      </>
    );
  }

  /* ── Product grid ──────────────────────────────────── */
  return (
    <>
      {countBar}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
        {products.map((product) => {
          const badge      = product.peternak_profile?.badge;
          const showBadge  = badge && badge !== "none";
          const isVerified = badge === "verified" || badge === "terverifikasi";
          const badgeLabel = isVerified ? "TERVERIFIKASI" : badge?.toUpperCase();

          return (
            <Link
              href={`/marketplace/${product.id}`}
              key={product.id}
              className="bg-white border border-[#E8E0D5] rounded-[28px] p-3 shadow-[0_8px_24px_rgba(44,57,48,0.04)] flex flex-col group hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(44,57,48,0.08)] transition-all"
            >
              <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-5 relative bg-[#F0F5F1] flex items-center justify-center">
                <Leaf className="w-16 h-16 text-[#009A44]/20" />
                {showBadge && (
                  <div
                    className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-[10px] font-bold text-white flex items-center gap-1.5 shadow-md backdrop-blur-md ${
                      isVerified ? "bg-[#009A44]/90" : "bg-[#10B981]/90"
                    }`}
                  >
                    {isVerified ? (
                      <ShieldCheck className="w-3.5 h-3.5" />
                    ) : (
                      <Star className="w-3.5 h-3.5" />
                    )}
                    {badgeLabel}
                  </div>
                )}
              </div>

              <div className="px-2 pb-2 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-land-muted mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#009A44]" />
                  {product.kabupaten}
                </div>

                <h3 className="font-land-heading text-lg font-bold text-land-ink mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-land-muted mb-4">
                  {product.peternak_profile?.nama_peternakan ?? "—"}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E8E0D5]/50">
                  <div>
                    <span className="font-bold text-[#009A44] text-xl block">
                      {formatRupiah(product.price)}
                      <span className="text-sm font-medium text-land-muted">
                        /{product.unit}
                      </span>
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                      <span className="text-xs font-bold text-land-ink">
                        {Number(product.rating_avg).toFixed(1)}
                      </span>
                      <span className="text-xs text-land-muted">
                        ({product.review_count})
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    disabled={addingId === product.id}
                    aria-label="Tambah ke keranjang"
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed ${
                      addedId === product.id
                        ? "bg-[#009A44] text-white"
                        : errorId === product.id
                        ? "bg-red-100 text-red-500"
                        : "bg-land-warm text-land-ink hover:bg-[#009A44] hover:text-white"
                    }`}
                  >
                    {addedId === product.id ? (
                      <Check className="w-5 h-5" />
                    ) : errorId === product.id ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Plus className={`w-5 h-5 ${addingId === product.id ? "animate-pulse" : ""}`} />
                    )}
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Pagination */}
      {paginated && paginated.last_page > 1 && (
        <div className="flex justify-center pt-8 border-t border-[#E8E0D5]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-12 h-12 rounded-full bg-white border border-[#E8E0D5] flex items-center justify-center text-land-muted hover:border-[#009A44] hover:text-[#009A44] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronDown className="w-5 h-5 rotate-90" />
            </button>

            {Array.from({ length: paginated.last_page }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                className={`w-12 h-12 rounded-full font-bold transition-colors ${
                  p === page
                    ? "bg-[#009A44] text-white shadow-md"
                    : "bg-white border border-transparent text-land-muted hover:bg-land-warm"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(paginated.last_page, p + 1))}
              disabled={page === paginated.last_page}
              className="w-12 h-12 rounded-full bg-white border border-[#E8E0D5] flex items-center justify-center text-land-muted hover:border-[#009A44] hover:text-[#009A44] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronDown className="w-5 h-5 -rotate-90" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
