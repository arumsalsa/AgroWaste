import React from "react";
import Link from "next/link";

export default function ProductDetail() {
  const similarProducts = [
    { id: "P03", name: "Kompos Organik Super (25kg)", price: "Rp 45.000", location: "Batu, Jatim", badge: "Populer", image: "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=400&q=80" },
    { id: "P04", name: "Pupuk Kambing Fermentasi", price: "Rp 38.500", location: "Malang, Jatim", badge: "", image: "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=400&q=80" },
    { id: "P02", name: "Urine Sapi Fermentasi 5L", price: "Rp 65.000", location: "Pasuruan, Jatim", badge: "", image: "https://images.unsplash.com/photo-1628183141103-9bb670b89b88?auto=format&fit=crop&w=400&q=80" },
    { id: "P06", name: "Media Tanam Mix Organik", price: "Rp 25.000", location: "Surabaya, Jatim", badge: "", image: "https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="flex-1 animate-fade-in pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-[10px] text-[#555555] font-bold tracking-wider uppercase mb-8">
          <Link href="/marketplace" className="hover:text-[#009A44] transition-colors">Marketplace</Link>
          <span className="mx-2">›</span>
          <span className="text-[#111111]">Pupuk Kandang Sapi</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column (Images & Details) */}
          <div className="lg:col-span-2">
            
            {/* Gallery */}
            <div className="mb-8">
              <div className="aspect-[4/3] bg-[#E8E0D5] rounded-3xl overflow-hidden mb-4 border border-[#E8E0D5]">
                <img src="https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=1200&q=80" alt="Pupuk Kandang Sapi" className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-2xl border-2 border-[#009A44] overflow-hidden cursor-pointer">
                  <img src="https://images.unsplash.com/photo-1598444648750-25c2705e4682?auto=format&fit=crop&w=200&q=80" alt="Gambar kecil 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-24 h-24 rounded-2xl border border-[#E8E0D5] bg-[#F5F1E8] flex items-center justify-center cursor-pointer hover:border-[#009A44] transition-colors text-[#555555]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#E8E0D5] mb-8">
              <button className="px-6 py-3 font-bold text-sm text-[#009A44] border-b-2 border-[#009A44]">Deskripsi</button>
              <button className="px-6 py-3 font-semibold text-sm text-[#555555] hover:text-[#111111] transition-colors">Ulasan (48)</button>
            </div>

            {/* Description Content */}
            <div className="space-y-8">
              <p className="text-[#555555] text-sm leading-relaxed">
                Pupuk kandang sapi murni hasil dari peternakan sapi potong berkelanjutan di Malang. Melalui proses fermentasi alami selama 3 minggu untuk memastikan hilangnya patogen dan biji gulma, serta memaksimalkan ketersediaan unsur hara bagi tanaman.
              </p>

              {/* Lab Test */}
              <div className="bg-[#FFF8F5] border border-[#E8E0D5] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h3 className="font-bold text-[#111111] text-sm">Kandungan Nutrisi (Uji Lab)</h3>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white border border-[#E8E0D5] p-4 rounded-xl text-center">
                    <div className="font-bold text-lg text-[#009A44] mb-1">1.5%</div>
                    <div className="text-[10px] font-bold text-[#555555] uppercase">Nitrogen (N)</div>
                  </div>
                  <div className="bg-white border border-[#E8E0D5] p-4 rounded-xl text-center">
                    <div className="font-bold text-lg text-[#009A44] mb-1">0.8%</div>
                    <div className="text-[10px] font-bold text-[#555555] uppercase">Fosfor (P)</div>
                  </div>
                  <div className="bg-white border border-[#E8E0D5] p-4 rounded-xl text-center">
                    <div className="font-bold text-lg text-[#009A44] mb-1">1.2%</div>
                    <div className="text-[10px] font-bold text-[#555555] uppercase">Kalium (K)</div>
                  </div>
                  <div className="bg-white border border-[#E8E0D5] p-4 rounded-xl text-center">
                    <div className="font-bold text-lg text-[#009A44] mb-1">25%</div>
                    <div className="text-[10px] font-bold text-[#555555] uppercase">C-Organik</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (Sticky Checkout Card) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
              {/* Main Card */}
              <div className="bg-white border border-[#E8E0D5] rounded-3xl p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-[#111111] mb-3">Pupuk Kandang Sapi (25kg)</h1>
                
                <div className="flex items-center gap-4 text-xs mb-6">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="font-bold text-[#111111]">4.9</span>
                  </div>
                  <div className="text-[#555555]">Terjual 1.2rb+</div>
                  <div className="text-[#009A44] font-bold flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                    Stok: 45 Karung
                  </div>
                </div>

                <div className="bg-[#E6F5EC] border border-[#009A44]/20 rounded-xl p-4 mb-6">
                  <div className="text-[10px] font-bold text-[#009A44] uppercase tracking-wider mb-1">Harga Satuan</div>
                  <div className="flex items-end gap-1">
                    <div className="text-3xl font-bold text-[#009A44] font-tabular">Rp 35.000</div>
                    <div className="text-xs text-[#009A44]/80 mb-1">/karung</div>
                  </div>
                </div>

                {/* Farmer Info */}
                <div className="flex items-center justify-between border border-[#E8E0D5] rounded-xl p-3 mb-6 hover:border-[#009A44] transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                      <img src="https://ui-avatars.com/api/?name=Pak+Slamet&background=111&color=fff" alt="Peternak" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-[#111111]">Peternak Pak Slamet</span>
                        <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      </div>
                      <div className="text-[10px] text-[#555555] flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                        Malang, Jawa Timur
                      </div>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-[#E8E0D5] group-hover:text-[#009A44]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                </div>

                {/* Actions */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-[#111111]">Atur Jumlah</span>
                    <div className="flex items-center border border-[#E8E0D5] rounded-lg overflow-hidden">
                      <button className="w-8 h-8 flex items-center justify-center text-[#555555] hover:bg-[#F5F1E8] transition-colors">-</button>
                      <input type="text" value="1" readOnly className="w-10 h-8 text-center text-sm font-bold text-[#111111] border-x border-[#E8E0D5]" />
                      <button className="w-8 h-8 flex items-center justify-center text-[#555555] hover:bg-[#F5F1E8] transition-colors">+</button>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="btn-clay-secondary py-3 px-4 flex-1 text-sm flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      Keranjang
                    </button>
                    <button className="btn-clay-primary py-3 px-4 flex-1 text-sm">
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-[#FFF4E5] border border-[#FFD8A8] rounded-2xl p-5 flex gap-4">
                <svg className="w-6 h-6 text-[#E67700] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                <div>
                  <h4 className="font-bold text-[#111111] text-xs mb-1">Estimasi Pengiriman</h4>
                  <p className="text-[#555555] text-xs leading-relaxed">Layanan Logistik AgroWaste tersedia untuk wilayah Jawa Timur.</p>
                </div>
              </div>

              {/* Specs Table */}
              <div className="bg-[#F5F1E8] rounded-2xl p-5">
                <h4 className="font-bold text-[#111111] text-xs mb-4">Spesifikasi Produk</h4>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between border-b border-[#E8E0D5] pb-2">
                    <span className="text-[#555555]">Berat</span>
                    <span className="font-bold text-[#111111]">25 kg</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E0D5] pb-2">
                    <span className="text-[#555555]">Kemasan</span>
                    <span className="font-bold text-[#111111]">Karung Karpet</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E0D5] pb-2">
                    <span className="text-[#555555]">Tekstur</span>
                    <span className="font-bold text-[#111111]">Remah (Halus)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#555555]">Tingkat Odor</span>
                    <span className="font-bold text-[#111111]">Rendah (Fermentasi)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Produk Serupa */}
        <div className="mt-20 border-t border-[#E8E0D5] pt-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-1">Produk Serupa</h2>
              <p className="text-[#555555] text-sm">Lengkapi kebutuhan pertanian organik Anda</p>
            </div>
            <Link href="/marketplace" className="text-[#009A44] hover:text-[#008139] text-sm font-bold flex items-center gap-1 transition-colors">
              Lihat Semua
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <Link href={`/marketplace/${product.id}`} key={product.id} className="group bg-white border border-[#E8E0D5] rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block flex flex-col h-full">
                <div className="aspect-square bg-[#E8E0D5] relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {product.badge && (
                    <div className="absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold text-white bg-[#10B981]">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-[#111111] font-semibold text-sm mb-2">{product.name}</h3>
                  <div className="text-sm font-bold text-[#009A44] mb-3">{product.price}</div>
                  <div className="mt-auto flex items-center gap-1 text-[10px] text-[#555555]">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {product.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
