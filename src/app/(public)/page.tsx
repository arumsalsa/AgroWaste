import React from "react";
import Link from "next/link";
import { Leaf, Recycle, ShieldCheck, Star, ShoppingCart, ArrowRight, Plus, MapPin, Truck } from "lucide-react";
import ImpactCalculator from "@/components/public/ImpactCalculator";
import { Marquee } from "@/components/public/Marquee";
import ImageSlider from "@/components/public/ImageSlider";

export const metadata = {
  title: "Beranda Utama | AgroWaste",
};

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col bg-land-bg">

      {/* Hero Section */}
      <section className="relative bg-land-bg overflow-hidden lg:min-h-[90dvh] flex items-center">

        {/* Decorative cow photo — desktop only, right side, fades left */}
        <div
          className="hidden lg:block absolute inset-y-0 right-0 w-[55%] pointer-events-none select-none"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              maskImage: "linear-gradient(to left, black 55%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to left, black 55%, transparent 100%)",
            } as React.CSSProperties}
          >
            <img
              src="/hero-sapi.jpeg"
              alt=""
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Earthy warm tint — harmonises photo with #FBFAF7 palette */}
            <div className="absolute inset-0 bg-[#F0EDE6] opacity-25 mix-blend-multiply pointer-events-none" />
          </div>
        </div>

        {/* Text content — left column, constrained so it doesn't reach the photo */}
        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-28 md:pt-3 pb-8 md:pb-12 max-w-7xl mx-auto">
          <div className="lg:max-w-[52%]">

            {/* Brand label — contextual, not an eyebrow pill */}
            <p
              className="text-land-muted font-medium text-base md:text-lg mb-8 hero-fade-up"
            >
              AgroWaste
            </p>

            {/* Headline — Baloo 2, oversized, left-anchored */}
            <h1
              className="font-land-heading font-bold text-land-ink leading-[1.0] tracking-[-0.025em] mb-5 hero-fade-up"
              style={{
                fontSize: "clamp(2rem, 8vw, 5rem)",
                textWrap: "balance",
                animationDelay: "60ms",
              } as React.CSSProperties}
            >
              Limbah ternak<br />
              punya nilai.
            </h1>

            {/* Solution — clay, Baloo 2 */}
            <p
              className="font-land-heading font-bold text-land-clay mb-8 hero-fade-up"
              style={{
                fontSize: "clamp(1.25rem, 3.5vw, 2.125rem)",
                animationDelay: "140ms",
              } as React.CSSProperties}
            >
              Kami bantu jualkan.
            </p>

            {/* Body copy */}
            <p
              className="text-land-muted text-lg leading-relaxed max-w-lg mb-12 hero-fade-up"
              style={{ animationDelay: "220ms" } as React.CSSProperties}
            >
              Hubungkan sisa pakan, kotoran ternak, dan produk kandangmu dengan
              petani yang butuh pupuk organik berkualitas.
            </p>

            {/* CTAs — clay-tactile style, left-aligned, stack on mobile */}
            <div
              className="flex flex-wrap gap-4 hero-fade-up"
              style={{ animationDelay: "300ms" } as React.CSSProperties}
            >
              <Link href="/register?role=penjual" className="btn-clay-primary">
                Mulai Jual Limbah
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="/marketplace" className="btn-clay-secondary">
                Cari Pupuk Organik
              </Link>
            </div>

          </div>
        </div>

      </section>

      <Marquee />

      {/* Mission Section (Redesigned Editorial) */}
      <section className="py-10 md:py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-land-ink rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center shadow-[0_8px_32px_rgba(44,57,48,0.15)] relative overflow-hidden">
          
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-land-secondary opacity-30 rounded-full blur-3xl pointer-events-none" />

          {/* Text Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-land-bg text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md border border-white/5">
              <Leaf className="w-4 h-4 text-[#4ADE80]" />
              Misi Kami
            </div>
            
            <h2 className="font-land-heading font-bold text-land-bg text-3xl md:text-5xl leading-tight mb-6" style={{ textWrap: "balance" }}>
              Merajut harmoni antara peternakan & alam.
            </h2>
            
            <p className="text-land-warm/80 text-base md:text-lg leading-relaxed mb-8">
              Kami tidak sekadar platform jual-beli. AgroWaste lahir dari kegelisahan akan menumpuknya limbah organik yang mencemari lingkungan. Kami percaya, dengan sentuhan sirkular, apa yang tadinya sisa bisa menjadi nyawa baru bagi tanah Nusantara.
            </p>

            {/* Stats - Editorial horizontal list */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-4xl font-bold text-[#4ADE80] font-land-heading mb-1">5.2k+</div>
                <div className="text-[11px] font-bold text-land-warm/60 uppercase tracking-widest">Peternak Aktif</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-land-clay font-land-heading mb-1">12.4k</div>
                <div className="text-[11px] font-bold text-land-warm/60 uppercase tracking-widest">Ton Diolah</div>
              </div>
            </div>
          </div>

          {/* Image & Cards Layout (Asymmetric) */}
          <div className="w-full lg:w-1/2 relative z-10 flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col gap-6 w-full sm:w-1/2 translate-y-0 sm:translate-y-8">
              <ImageSlider 
                images={[
                  "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1589923188900-85dae440047b?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1500937386664-56d159f87b81?auto=format&fit=crop&w=600&q=80"
                ]} 
                overlayClass="bg-land-ink/20"
              />
              <div className="bg-land-secondary/80 backdrop-blur-md rounded-[24px] p-6 border border-white/10">
                <Recycle className="w-8 h-8 text-[#4ADE80] mb-4" />
                <h3 className="text-land-bg font-bold text-lg mb-2">Konversi Efisien</h3>
                <p className="text-land-warm/70 text-sm leading-relaxed">Sistem cerdas kami memastikan perpindahan pupuk dari kandang ke lahan dalam waktu 48 jam.</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 w-full sm:w-1/2">
              <div className="bg-land-clay/90 backdrop-blur-md rounded-[24px] p-6 border border-white/10">
                <ShieldCheck className="w-8 h-8 text-land-bg mb-4" />
                <h3 className="text-land-bg font-bold text-lg mb-2">Kualitas Terjamin</h3>
                <p className="text-land-warm/80 text-sm leading-relaxed">Hanya pupuk organik terverifikasi yang sampai ke tangan petani, menekan risiko kegagalan panen.</p>
              </div>
              <ImageSlider 
                images={[
                  "https://images.unsplash.com/photo-1592982537447-6f2b6cb1e194?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=600&q=80",
                  "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80"
                ]} 
                overlayClass="bg-land-clay/20"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Marketplace Preview (Horizontal Scroll with Original Cards) */}
      <section className="py-10 md:py-12 w-full overflow-hidden">
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

        {/* Horizontal Scrolling Container */}
        {/* We use inline styles for cross-browser hiding of the scrollbar. */}
        <div 
          className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory items-stretch max-w-7xl mx-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
           <style dangerouslySetInnerHTML={{__html: `
             ::-webkit-scrollbar { display: none; }
           `}} />

           {/* Product 1: Card */}
           <div className="w-[300px] md:w-[350px] shrink-0 bg-white rounded-[32px] p-3 shadow-[0_8px_24px_rgba(44,57,48,0.05)] border border-[#E8E0D5] flex flex-col group hover:-translate-y-1 transition-transform snap-center">
              <div className="w-full h-56 rounded-[24px] overflow-hidden relative mb-5">
                <img src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80" alt="Pupuk Kandang Sapi Premium" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-land-ink shadow-sm flex items-center gap-1.5">
                   <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                   4.9 Terlaris
                </div>
              </div>
              <div className="px-3 pb-3 flex flex-col flex-1">
                 <h3 className="font-land-heading text-xl font-bold text-land-ink mb-2">Pupuk Kandang Sapi Premium</h3>
                 <p className="text-land-muted text-sm mb-6 line-clamp-3">Diolah melalui fermentasi alami selama 30 hari. Sangat cocok untuk meningkatkan porositas dan unsur hara makro pada tanah pertanian sawah maupun kebun sayur.</p>
                 <div className="flex items-center justify-between mt-auto">
                    <div>
                       <div className="text-xl font-bold text-[#009A44]">Rp 35.000</div>
                       <div className="text-xs font-bold text-land-muted">/ Karung 50kg</div>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-land-warm text-land-ink flex items-center justify-center hover:bg-[#009A44] hover:text-white transition-colors shadow-sm" aria-label="Tambah">
                      <Plus className="w-5 h-5" />
                    </button>
                 </div>
              </div>
           </div>

           {/* Product 2: Card */}
           <div className="w-[300px] md:w-[350px] shrink-0 bg-white rounded-[32px] p-3 shadow-[0_8px_24px_rgba(44,57,48,0.05)] border border-[#E8E0D5] flex flex-col group hover:-translate-y-1 transition-transform snap-center">
              <div className="w-full h-56 rounded-[24px] overflow-hidden mb-5">
                <img src="https://images.unsplash.com/photo-1574686008687-fae122709298?auto=format&fit=crop&w=600&q=80" alt="Sekam Padi Bakar" className="w-full h-full object-cover" />
              </div>
              <div className="px-3 pb-3 flex flex-col flex-1">
                <h4 className="font-land-heading font-bold text-land-ink text-xl mb-1">Sekam Padi Bakar (Arang)</h4>
                <p className="text-sm text-land-muted line-clamp-3 mb-6">Meningkatkan aerasi akar tanaman. Tinggi kandungan silika untuk perlindungan perlindungan dari penyakit.</p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="font-bold text-[#009A44] text-xl">Rp 15.000</span>
                    <span className="text-xs font-bold text-land-muted"> / 10kg</span>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-land-warm text-land-ink flex items-center justify-center hover:bg-[#009A44] hover:text-white transition-colors shadow-sm" aria-label="Tambah">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
           </div>

           {/* Product 3: Card */}
           <div className="w-[300px] md:w-[350px] shrink-0 bg-white rounded-[32px] p-3 shadow-[0_8px_24px_rgba(44,57,48,0.05)] border border-[#E8E0D5] flex flex-col group hover:-translate-y-1 transition-transform snap-center">
              <div className="w-full h-56 rounded-[24px] overflow-hidden mb-5">
                <img src="https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&w=600&q=80" alt="Kompos Daun Kering" className="w-full h-full object-cover" />
              </div>
              <div className="px-3 pb-3 flex flex-col flex-1">
                <h4 className="font-land-heading font-bold text-land-ink text-xl mb-1">Kompos Daun Kering Premium</h4>
                <p className="text-sm text-land-muted line-clamp-3 mb-6">Kaya akan karbon organik untuk memperbaiki kelonggaran dan daya serap air struktur tanah Anda.</p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="font-bold text-[#009A44] text-xl">Rp 20.000</span>
                    <span className="text-xs font-bold text-land-muted"> / 20kg</span>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-land-warm text-land-ink flex items-center justify-center hover:bg-[#009A44] hover:text-white transition-colors shadow-sm" aria-label="Tambah">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
           </div>

           {/* View More Card */}
           <div className="w-[150px] md:w-[200px] shrink-0 bg-land-warm rounded-[32px] border border-[#E8E0D5] flex flex-col items-center justify-center group hover:bg-[#009A44] transition-colors cursor-pointer snap-center">
              <Link href="/marketplace" className="w-full h-full flex flex-col items-center justify-center p-6 gap-4">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#009A44] shadow-sm group-hover:scale-110 transition-transform">
                   <ArrowRight className="w-6 h-6" />
                 </div>
                 <span className="font-bold text-land-ink text-sm group-hover:text-white text-center">Lihat Semua<br/>Produk</span>
              </Link>
           </div>
           
        </div>
      </section>

      {/* GIS Tracking Dark Section */}
      <section className="bg-[#1C231F] py-12 md:py-16 px-6 text-white mt-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-[10px] font-bold text-[#4ADE80] tracking-widest uppercase mb-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            Kecerdasan Logistik
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-land-heading font-bold max-w-2xl leading-tight">
              Lacak pergerakan pupuk organik secara <span className="text-[#009A44]">real-time.</span>
            </h2>
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#E8E0D5]">
              SISTEM AKTIF: <span className="text-[#4ADE80] font-bold">100%</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Map Container */}
            <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] bg-[#000000] rounded-[32px] border border-white/10 relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="Peta Persebaran" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C231F] via-transparent to-transparent opacity-80" />
              
              {/* Floating Status Badge */}
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-full bg-[#009A44]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#4ADE80]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-white/70">Titik Tersedia</div>
                  <div className="text-xl font-bold text-white">124 Lokasi</div>
                </div>
              </div>

              {/* Dynamic Map Pins Overlay */}
              <div className="absolute top-[30%] left-[40%] animate-bounce z-10" style={{ animationDuration: '3s' }}>
                <MapPin className="w-10 h-10 text-[#009A44] drop-shadow-[0_0_15px_rgba(0,154,68,1)] fill-white" />
                <div className="w-4 h-4 bg-[#009A44]/50 rounded-full blur-md absolute -bottom-1 left-3" />
              </div>
              <div className="absolute top-[45%] left-[60%] animate-bounce z-10" style={{ animationDuration: '4s' }}>
                <MapPin className="w-8 h-8 text-[#4ADE80] drop-shadow-[0_0_15px_rgba(74,222,128,1)] fill-white" />
              </div>
              <div className="absolute top-[60%] left-[25%] animate-bounce z-10" style={{ animationDuration: '2.5s' }}>
                <MapPin className="w-9 h-9 text-[#009A44] drop-shadow-[0_0_15px_rgba(0,154,68,1)] fill-[#E8E0D5]" />
              </div>
              <div className="absolute top-[20%] left-[70%] animate-bounce z-10" style={{ animationDuration: '3.5s' }}>
                <MapPin className="w-7 h-7 text-[#009A44] drop-shadow-[0_0_10px_rgba(0,154,68,0.8)] fill-white" />
              </div>

            </div>

            {/* Stats Sidebar */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex-1 flex flex-col justify-center relative overflow-hidden group hover:bg-white/10 transition-colors">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#009A44]/10 rounded-full blur-2xl group-hover:bg-[#009A44]/20 transition-colors" />
                <div className="w-14 h-14 rounded-full bg-[#009A44]/20 flex items-center justify-center mb-6">
                  <Truck className="w-7 h-7 text-[#4ADE80]" />
                </div>
                <div className="text-[11px] font-bold text-white/60 uppercase tracking-widest mb-2">Total Tonase Terkirim</div>
                <div className="text-5xl font-land-heading font-bold text-white mb-3">4.5k<span className="text-2xl text-white/50"> Ton</span></div>
                <div className="text-xs text-[#4ADE80] font-bold flex items-center gap-1">
                  <ArrowRight className="w-4 h-4 -rotate-45" /> 
                  Naik 12% bulan ini
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex-1 flex flex-col justify-center relative overflow-hidden group hover:bg-white/10 transition-colors">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-blue-400" />
                </div>
                <div className="text-[11px] font-bold text-white/60 uppercase tracking-widest mb-2">Mitra Terverifikasi</div>
                <div className="text-5xl font-land-heading font-bold text-white mb-3">89<span className="text-2xl text-white/50"> Desa</span></div>
                <div className="text-xs text-white/50">Tersebar di 12 Provinsi</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Impact Calculator (Client Component) */}
      <ImpactCalculator />



    </div>
  );
}
