"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import MarketplaceProducts from "./MarketplaceProducts";

const KATEGORI_OPTIONS = [
  { value: "kotoran_padat", label: "Kotoran Padat" },
  { value: "limbah_cair",   label: "Limbah Cair"   },
];

const PROVINSI_OPTIONS = [
  "Jawa Timur",
  "Jawa Tengah",
  "Jawa Barat",
  "Luar Pulau Jawa",
];

// Nilai dikirim lowercase persis ke ?jenis_ternak=
const JENIS_TERNAK_OPTIONS = [
  { label: "Sapi",    value: "sapi"    },
  { label: "Kambing", value: "kambing" },
  { label: "Ayam",    value: "ayam"    },
];

export default function MarketplaceContent() {
  // --- search ---
  const [searchInput,     setSearchInput]     = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce 400ms — tidak spam request saat setiap ketukan
  useEffect(() => {
    const id = setTimeout(() => setDebouncedSearch(searchInput.trim()), 400);
    return () => clearTimeout(id);
  }, [searchInput]);

  // --- sidebar filters ---
  const [jenisTernak, setJenisTernak] = useState("");
  const [kategori,    setKategori]    = useState("");
  const [provinsi,    setProvinsi]    = useState("");

  // filterParams dikirim ke MarketplaceProducts; berubah → langsung re-fetch
  const filterParams = useMemo(() => {
    const parts: string[] = [];
    // search harus urutan pertama agar mudah dibaca di Network tab
    if (debouncedSearch) parts.push(`search=${encodeURIComponent(debouncedSearch)}`);
    if (jenisTernak)     parts.push(`jenis_ternak=${encodeURIComponent(jenisTernak)}`);
    if (kategori)        parts.push(`kategori=${encodeURIComponent(kategori)}`);
    if (provinsi)        parts.push(`provinsi=${encodeURIComponent(provinsi)}`);
    return parts.join("&");
  }, [debouncedSearch, jenisTernak, kategori, provinsi]);

  const hasActiveFilter = !!(debouncedSearch || jenisTernak || kategori || provinsi);

  const handleReset = () => {
    setSearchInput("");
    setDebouncedSearch("");
    setJenisTernak("");
    setKategori("");
    setProvinsi("");
  };

  return (
    <div className="flex-1 animate-fade-in pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Hero Section & Searchbar ── */}
        <section className="bg-[#2C3930] rounded-[32px] px-6 py-10 md:py-12 mt-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-md">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#009A44] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F59E0B] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />

          <h1
            className="text-3xl md:text-4xl font-land-heading font-bold text-white mb-8 relative z-10"
            style={{ textWrap: "balance" }}
          >
            Bursa pupuk organik <span className="text-[#4ADE80]">terbesar.</span>
          </h1>

          <div className="w-full max-w-3xl relative z-20 group">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setDebouncedSearch(searchInput.trim())}
              placeholder="Cari kompos, pupuk kandang, atau alat pertanian..."
              className="w-full h-16 md:h-20 pl-14 md:pl-16 pr-32 md:pr-40 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 text-base md:text-xl focus:outline-none focus:bg-white/20 focus:border-[#4ADE80] transition-all shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            />
            <Search className="w-6 h-6 md:w-8 md:h-8 text-white/60 absolute left-5 md:left-6 top-1/2 -translate-y-1/2 group-focus-within:text-[#4ADE80] transition-colors pointer-events-none" />

            <button
              type="button"
              onClick={() => setDebouncedSearch(searchInput.trim())}
              className="absolute right-2 top-2 bottom-2 px-6 md:px-10 bg-[#009A44] hover:bg-[#008139] text-white rounded-full font-bold md:text-lg transition-transform hover:scale-105 shadow-md flex items-center justify-center"
            >
              Cari
            </button>
          </div>
        </section>

        {/* ── Sidebar + Grid ── */}
        <div className="flex flex-col lg:flex-row gap-8 mt-12">

          {/* Left Sidebar */}
          <div className="w-full lg:w-1/4 shrink-0 flex flex-col gap-6">
            <div className="bg-white border border-[#E8E0D5] rounded-[32px] p-6 md:p-8 shadow-[0_8px_24px_rgba(44,57,48,0.04)] sticky top-24">

              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#E8E0D5]">
                <div className="flex items-center gap-3">
                  <SlidersHorizontal className="w-5 h-5 text-land-ink" />
                  <h2 className="font-land-heading font-bold text-xl text-land-ink">Filter</h2>
                </div>
                {hasActiveFilter && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-[10px] font-bold text-land-clay hover:opacity-70 uppercase tracking-wider transition-opacity"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Jenis Ternak */}
              <div className="mb-8">
                <h3 className="font-bold text-sm text-land-ink mb-4 uppercase tracking-wider">
                  Jenis Ternak
                </h3>
                <div className="space-y-4">
                  {JENIS_TERNAK_OPTIONS.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={jenisTernak === opt.value}
                        onChange={() =>
                          setJenisTernak((prev) => (prev === opt.value ? "" : opt.value))
                        }
                        className="w-5 h-5 rounded-[6px] border-[#E8E0D5] text-[#009A44] focus:ring-[#009A44] transition-colors cursor-pointer"
                      />
                      <span
                        className={`font-medium transition-colors group-hover:text-land-ink ${
                          jenisTernak === opt.value
                            ? "text-[#009A44] font-semibold"
                            : "text-land-muted"
                        }`}
                      >
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Kategori */}
              <div className="mb-8">
                <h3 className="font-bold text-sm text-land-ink mb-4 uppercase tracking-wider">
                  Kategori
                </h3>
                <div className="space-y-4">
                  {KATEGORI_OPTIONS.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={kategori === opt.value}
                        onChange={() =>
                          setKategori((prev) => (prev === opt.value ? "" : opt.value))
                        }
                        className="w-5 h-5 rounded-[6px] border-[#E8E0D5] text-[#009A44] focus:ring-[#009A44] transition-colors cursor-pointer"
                      />
                      <span
                        className={`font-medium transition-colors group-hover:text-land-ink ${
                          kategori === opt.value
                            ? "text-[#009A44] font-semibold"
                            : "text-land-muted"
                        }`}
                      >
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Lokasi Asal */}
              <div className="mb-8">
                <h3 className="font-bold text-sm text-land-ink mb-4 uppercase tracking-wider">
                  Lokasi Asal
                </h3>
                <div className="space-y-4">
                  {PROVINSI_OPTIONS.map((loc) => (
                    <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={provinsi === loc}
                        onChange={() =>
                          setProvinsi((prev) => (prev === loc ? "" : loc))
                        }
                        className="w-5 h-5 rounded-[6px] border-[#E8E0D5] text-[#009A44] focus:ring-[#009A44] transition-colors cursor-pointer"
                      />
                      <span
                        className={`font-medium transition-colors group-hover:text-land-ink ${
                          provinsi === loc
                            ? "text-[#009A44] font-semibold"
                            : "text-land-muted"
                        }`}
                      >
                        {loc}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="btn-clay-secondary w-full py-3.5"
              >
                Reset Semua Filter
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <MarketplaceProducts filterParams={filterParams} />
          </div>

        </div>
      </div>
    </div>
  );
}
