"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, ShoppingCart, ArrowRight, Plus, Check, X, Leaf, MapPin } from "lucide-react";
import { apiFetch, getProductImageUrl } from "@/lib/api";
import { getToken } from "@/lib/auth";

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: string;
  unit: string;
  min_order_kg: string;
  kabupaten: string;
  rating_avg: string | number;
  review_count: number;
  image_url?: string | null;
  peternak_profile?: { nama_peternakan: string; badge: string };
  category?: { name: string };
}

function formatRupiah(n: string | number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", minimumFractionDigits: 0,
  }).format(Number(n));
}

export default function FeaturedProducts() {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading,  setLoading]  = useState(true);

  // Add-to-cart feedback per product id
  const [addingId, setAddingId] = useState<string | null>(null);
  const [addedId,  setAddedId]  = useState<string | null>(null);
  const [errorId,  setErrorId]  = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?sort=terbaru`)
      .then((r) => r.ok ? r.json() : { data: { data: [] } })
      .then((json) => {
        const list: Product[] = json.data?.data ?? [];
        setProducts(list.slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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

  const sectionHeader = (
    <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      <div className="max-w-xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-land-ink text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-[#E8E0D5]">
          <ShoppingCart className="w-4 h-4 text-[#009A44]" />
          Bursa Organik
        </div>
        <h2 className="font-land-heading font-bold text-land-ink text-3xl lg:text-4xl leading-tight mb-4" style={{ textWrap: "balance" }}>
          Pupuk pilihan langsung dari sumbernya.
        </h2>
        <p className="text-land-muted text-base md:text-lg leading-relaxed">
          Jelajahi produk organik berkualitas tinggi yang telah diverifikasi. Membantu menyuburkan tanaman Anda sekaligus menjaga keseimbangan alam.
        </p>
      </div>
      <Link href="/marketplace" className="inline-flex items-center gap-2 text-[#009A44] font-bold hover:gap-3 transition-all shrink-0">
        Lihat Semua Koleksi
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );

  const viewMoreCard = (
    <div className="w-[150px] md:w-[200px] shrink-0 bg-land-warm rounded-[32px] border border-[#E8E0D5] flex flex-col items-center justify-center group hover:bg-[#009A44] transition-colors cursor-pointer snap-center">
      <Link href="/marketplace" className="w-full h-full flex flex-col items-center justify-center p-6 gap-4">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#009A44] shadow-sm group-hover:scale-110 transition-transform">
          <ArrowRight className="w-6 h-6" />
        </div>
        <span className="font-bold text-land-ink text-sm group-hover:text-white text-center">Lihat Semua<br />Produk</span>
      </Link>
    </div>
  );

  /* ── Loading ──────────────────────────────────────────── */
  if (loading) {
    return (
      <section className="py-10 md:py-12 w-full overflow-hidden">
        {sectionHeader}
        <div
          className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory items-stretch max-w-7xl mx-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-[300px] md:w-[350px] shrink-0 bg-white rounded-[32px] p-3 border border-[#E8E0D5] animate-pulse snap-center"
            >
              <div className="w-full h-56 rounded-[24px] bg-[#E8E0D5] mb-5" />
              <div className="px-3 pb-3 space-y-3">
                <div className="h-5 bg-[#E8E0D5] rounded-full w-4/5" />
                <div className="h-4 bg-[#E8E0D5] rounded-full w-full" />
                <div className="h-4 bg-[#E8E0D5] rounded-full w-2/3" />
                <div className="flex justify-between items-center mt-4">
                  <div className="h-6 bg-[#E8E0D5] rounded-full w-1/3" />
                  <div className="w-12 h-12 bg-[#E8E0D5] rounded-full" />
                </div>
              </div>
            </div>
          ))}
          {viewMoreCard}
        </div>
      </section>
    );
  }

  /* ── Render ───────────────────────────────────────────── */
  return (
    <section className="py-10 md:py-12 w-full overflow-hidden">
      {sectionHeader}

      <div
        className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory items-stretch max-w-7xl mx-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

        {products.map((product) => (
          <Link
            key={product.id}
            href={`/marketplace/${product.id}`}
            className="w-[300px] md:w-[350px] shrink-0 bg-white rounded-[32px] p-3 shadow-[0_8px_24px_rgba(44,57,48,0.05)] border border-[#E8E0D5] flex flex-col group hover:-translate-y-1 transition-transform snap-center"
          >
            {/* Product image */}
            <div className="w-full h-56 rounded-[24px] overflow-hidden relative mb-5 bg-[#F0F5F1] flex items-center justify-center border border-[#E8E0D5]/40">
              {product.image_url && (
                <img
                  src={getProductImageUrl(product.image_url)}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              )}
              <Leaf className="w-16 h-16 text-[#009A44]/20" />

              {Number(product.rating_avg) > 0 && (
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-land-ink shadow-sm flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                  {Number(product.rating_avg).toFixed(1)}
                </div>
              )}

              {product.kabupaten && (
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-land-ink shadow-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#009A44]" />
                  {product.kabupaten}
                </div>
              )}
            </div>

            <div className="px-3 pb-3 flex flex-col flex-1">
              <h3 className="font-land-heading text-xl font-bold text-land-ink mb-2 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-land-muted text-sm mb-6 line-clamp-3">
                {product.description ?? product.peternak_profile?.nama_peternakan ?? "Produk organik berkualitas terverifikasi."}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="text-xl font-bold text-[#009A44]">
                    {formatRupiah(product.price)}
                  </div>
                  <div className="text-xs font-bold text-land-muted">/ {product.unit}</div>
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
        ))}

        {viewMoreCard}
      </div>
    </section>
  );
}
