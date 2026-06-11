"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, MapPin, ShieldCheck, Plus, Check, X, ChevronDown, Leaf, Sprout } from "lucide-react";
import { apiFetch, getProductImageUrl } from "@/lib/api";
import { getToken } from "@/lib/auth";
import EarthyCard from "@/components/public/EarthyCard";

interface Product {
  id: string;
  name: string;
  price: string;
  unit: string;
  min_order_kg: string;
  kabupaten: string;
  rating_avg: string | number;
  review_count: number;
  image_url?: string | null;
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

  /* count bar */
  const countBar = (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <span className="text-land-muted font-bold text-base">
        <span className="text-land-accent text-lg">
          {loading ? "—" : (paginated?.total ?? 0)}
        </span>{" "}
        Produk ditemukan
      </span>
      <button
        type="button"
        onClick={handleSortCycle}
        className="flex items-center gap-2 px-5 py-3 bg-white border border-[#E8E0D5] rounded-full text-sm font-bold text-land-ink hover:border-land-accent transition-colors shadow-sm cursor-pointer"
      >
        Urutkan: {sortLabel} <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );

  /* loading */
  if (loading) {
    return (
      <>
        {countBar}
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 mb-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white border border-[#E8E0D5] rounded-2xl p-2.5 sm:p-3 shadow-[0_8px_24px_rgba(44,57,48,0.04)] animate-pulse"
            >
              <div className="w-full h-28 sm:h-44 rounded-xl bg-[#E8E0D5] mb-3 sm:mb-5" />
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

  /* error */
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

  /* empty */
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

  /* product grid */
  return (
    <>
      {countBar}

      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6 mb-16">
        {products.map((product) => {
          const badge      = product.peternak_profile?.badge;
          const showBadge  = badge && badge !== "none";
          const isVerified = badge === "verified" || badge === "terverifikasi";
          const badgeLabel = isVerified ? "TERVERIFIKASI" : badge?.toUpperCase();

          return (
            <EarthyCard
              key={product.id}
              href={`/marketplace/${product.id}`}
              title={product.name}
              description={product.peternak_profile?.nama_peternakan ?? "—"}
              imageUrl={product.image_url ? getProductImageUrl(product.image_url) : null}
              imageFallbackIcon={Leaf}
              badgeText={showBadge ? badgeLabel : undefined}
              badgeDotColorClass={isVerified ? "bg-land-accent" : "bg-land-clay"}
              locationText={product.kabupaten || undefined}
              rating={Number(product.rating_avg) > 0 ? Number(product.rating_avg) : undefined}
              price={formatRupiah(product.price)}
              unit={`/ ${product.unit}`}
              ctaText="Lihat Detail"
              onCtaClick={(e) => handleAddToCart(product, e)}
              ctaLoading={addingId === product.id}
              ctaSuccess={addedId === product.id}
              ctaError={errorId === product.id}
              ctaIcon={Plus}
              ctaSuccessIcon={Check}
              ctaErrorIcon={X}
              decorativeIcon={Sprout}
              className="w-full shrink-0"
            />
          );
        })}
      </div>

      {/* Pagination */}
      {paginated && paginated.last_page > 1 && (
        <div className="flex justify-center pt-8 border-t border-land-cream">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-12 h-12 rounded-full bg-white border border-land-cream flex items-center justify-center text-land-muted hover:border-land-accent hover:text-land-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronDown className="w-5 h-5 rotate-90" />
            </button>

            {Array.from({ length: paginated.last_page }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                className={`w-12 h-12 rounded-full font-bold transition-colors cursor-pointer ${
                  p === page
                    ? "bg-land-accent text-white shadow-md"
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
              className="w-12 h-12 rounded-full bg-white border border-land-cream flex items-center justify-center text-land-muted hover:border-land-accent hover:text-land-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronDown className="w-5 h-5 -rotate-90" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
