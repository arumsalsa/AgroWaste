# PRODUCT.md — AgroWaste

> Dibaca oleh Impeccable sebelum setiap command. Berisi konteks produk, siapa
> penggunanya, suara brand, dan hal-hal yang harus DIHINDARI. Bukan dokumen teknis —
> ini "kompas selera". Detail teknis tetap ada di DESIGN_SYSTEM.md & MASTER_BRIEF.md.

---

## Register

product

## Produk

AgroWaste — platform e-commerce limbah organik peternakan. Menghubungkan peternak
(penjual kotoran ternak, urine, sisa pakan) dengan petani, UMKM, dan industri pupuk
(pembeli). Tiga fungsi inti: jual-beli limbah, edukasi pengolahan, dan pelacakan
dampak lingkungan (Green Dashboard / SDG 12 & 13).

Stack frontend: Next.js 15 (App Router) · TypeScript · Tailwind v4 · Recharts ·
Leaflet. Desain melayani tugas, bukan sebaliknya.

> Catatan: nama ditulis konsisten "AgroWaste" di seluruh UI (dokumen lama sempat
> menulis "AgrowWaste" — pilih satu, jangan campur).

## Pengguna

Inti audiens adalah **orang dewasa pedesaan dengan literasi digital beragam** —
peternak kecil, petani, pengepul. Banyak di antaranya **berusia lanjut, membaca
lambat, memakai HP murah dengan layar kecil, kadang di bawah sinar matahari**.
Sebagian kecil pengguna B2B/industri lebih melek teknologi.

Konsekuensi desain (mengikat, bukan saran):
- Teks body minimal 16px. Hindari berat font di bawah 400.
- Kontras teks wajib lolos WCAG AA.
- Area sentuh tombol/kontrol minimal 48×48px.
- Satu fokus utama per layar/section. Jangan padat. Sembunyikan detail sekunder
  di balik ketukan, jangan ditumpuk.
- Bahasa Indonesia yang membumi, bukan jargon teknis.

## Suara Brand

Empat pilar: **Empowering · Grounded · Optimistic · Trustworthy.**
Memberdayakan peternak kecil; membumi & autentik (tidak sok urban); penuh harap
tapi berbasis data nyata; transparan tanpa janji berlebihan.

- Ya: "Limbah ternakmu punya nilai. Kami bantu jualkan."
- Ya: "500.000 kg limbah dikelola bulan ini." (angka nyata, terukur)
- Tidak: klaim tanpa data, bahasa kaku-formal, hype kosong.

Kepribadian: "Petani Digital yang Melek Teknologi" — tahu nilai tanah & kotoran
ternak, sekaligus fasih bertransaksi lewat HP. Tidak elitis, tidak kampungan.

---

## Anti-references (slop yang HARUS dihindari)

Layout:
- Hero teks rata-tengah dengan dua tombol berdampingan di tengah.
- Grid fitur 3 kolom ikon-judul-deskripsi yang seragam.
- Urutan klise: hero → fitur → stats → CTA → footer tanpa variasi ritme.
- Semua section simetris & "rata aman".

Warna:
- DILARANG abu-abu netral (Tailwind gray/slate/zinc/neutral) di mana pun —
  membuat palet earthy ini kusam.
- Putih murni #FFFFFF sebagai latar utama (terlalu dingin di palet hangat).
- Gradient ungu / "AI purple". Hijau neon. Banyak gradien.

Tipografi:
- Inter, Roboto, Open Sans, Poppins, Montserrat, Lato, DM Sans, Plus Jakarta Sans,
  Arial, Helvetica. (Catatan: DM Sans & Plus Jakarta Sans dipakai di design system
  lama — keduanya diganti, lihat bawah.)
- Serif tipis high-contrast untuk teks kecil. Font weight < 400 untuk body.

Ikon & dekorasi:
- DILARANG emoji/emotikon (🌱🚚💰⭐ dll) sebagai ikon di UI mana pun.
- Ilustrasi vektor "plastik" yang generik. Foto stock terlalu sempurna.

Konten:
- Statistik palsu / placeholder ("99.99% uptime", lorem ipsum). Angka harus nyata
  dari data, atau jelas ditandai sebagai contoh.

---

## Arah Visual

Soft/clay yang **halus dan dewasa**, bukan norak. Elemen yang disentuh (tombol,
kartu, kontrol) terasa empuk: sudut sangat membulat, shadow lembut berlapis,
sedikit inset highlight. Tapi komposisi keseluruhan boleh berani & asimetris —
satu "momen" yang diingat orang per halaman.

Kesan ramah datang dari **bentuk membulat & ruang lega**, bukan warna mencolok.
Palet earthy ini tenang dan premium — jaga nuansa itu. Mood: earthy, organic,
empowering, transparent, grounded, hopeful, rural-digital.

---

## Warna (ganti palet lama)

Palet baru, pakai persis. Petakan ke CSS variable shadcn (globals.css) &
tailwind.config. **Ini menggantikan palet hijau-cerah/abu-abu yang lama.**

| Hex | Peran |
|-----|-------|
| `#2C3930` | Teks utama & judul; background section gelap (mis. Green Dashboard hero, peta logistik) |
| `#3F4F44` | Tombol/surface sekunder; elemen pendukung |
| `#A27B5C` | AKSEN — CTA penting, ikon aktif, angka kunci, garis/indikator aktif, harga |
| `#DCD7C9` | Surface sekunder & pemisah section (aksen tenang) |
| `#FBFAF7` | Background halaman utama — off-white hangat (BUKAN #FFFFFF, BUKAN abu-abu) |
| putih hangat / `#DCD7C9` lebih terang | Surface kartu |

Aturan ketat:
- Dua hijaunya mirip → JANGAN andalkan keduanya untuk membedakan elemen. Pakai
  krem & cokelat sebagai pembeda.
- Teks sekunder ("abu-abu"): JANGAN grey. Pakai `#2C3930` opacity 60–70% →
  "abu kehijauan" yang selaras.
- Border & shadow: `#2C3930` pada opacity 8–12% atau krem lebih gelap. JANGAN
  shadow abu-abu netral.
- Turunkan tint/shade tiap warna untuk variasi & shadow tombol clay (efek timbul).
- Status semantik (success/error/warning) boleh dipertahankan tapi diselaraskan
  ke nada earthy; jauhkan dari merah/kuning neon kalau memungkinkan.
- Role colors lama (admin ungu, pengepul abu-abu, dsb) diselaraskan ulang ke
  turunan palet ini — terutama buang abu-abu pada role Pengepul/Logistik.

## Tipografi (ganti font lama)

- Judul/display: **Baloo 2** (membulat, ramah, gemuk tapi jelas).
- Body: **Nunito Sans**.
- Mengganti Plus Jakarta Sans + DM Sans dari design system lama.
- Import via Google Fonts. Body ≥16px, weight ≥400 (lebih aman 500).
- Pertahankan type scale `clamp()` fluid yang sudah ada — hanya keluarga font
  yang berubah.

## Ikon

- Satu set saja: **Lucide** (`lucide-react`). Stroke konsisten di seluruh app.
- Monoline, bukan multiwarna. Warnai dengan palet: aksen `#A27B5C`, netral `#2C3930`.
- Ganti SEMUA emoji yang dipakai sebagai ikon (badge, kartu impact, dll) dengan
  Lucide. Selaras dengan arahan design system lama (Lucide/Phosphor, stroke 1.5–2px).

## Motion

Pertahankan token motion dari DESIGN_SYSTEM.md — sudah baik:
- Easing berkarakter: `--ease-spring`, `--ease-emphasize`, `--ease-standard`
  (BUKAN ease/linear default).
- Prinsip: natural, purposeful, grounded ("berat ke bawah"), accessible.

Anti-slop motion:
- HINDARI semua elemen fade-in-up serentak saat load; durasi/easing seragam.
- LAKUKAN reveal bertahap (staggered) dipicu scroll; micro-interaction dengan
  umpan balik nyata: tombol clay benar-benar tertekan saat :active; kartu sedikit
  terangkat saat hover; counter angka dampak count-up saat masuk viewport.
- Hemat: sedikit gerakan bermakna > banyak gerakan ramai.
- WAJIB hormati `prefers-reduced-motion` (sudah ada di design system — jangan
  dihapus). Audiens termasuk lansia: gerakan halus, jangan bikin pusing.

## Komponen (shadcn/ui)

- Proyek memakai shadcn/ui. HORMATI itu: override styling lewat className/variant
  (dan CSS variable shadcn), JANGAN ganti library, JANGAN bongkar fondasi komponen.
- Setiap elemen yang tampak bisa disentuh wajib punya state: hover, active/press,
  dan focus-visible (navigasi keyboard).
- Interaktivitas yang BERMAKNA (kalkulator, kartu produk, filter, slider), bukan
  gerak demi ramai.

---

## Aturan Keras (jangan dilanggar)

1. JANGAN sentuh logika: state, hooks, handler, data fetching, props, routing,
   validasi (React Hook Form + Zod), dan perhitungan apa pun. Hanya markup (JSX)
   & styling yang berubah.
2. Kalkulator Nilai Limbah & Kalkulator Dampak harus tetap berfungsi persis —
   angka bergerak sesuai input. Jangan ubah rumus/faktor CO₂eq.
3. Faktor CO₂eq (Sapi 0,98 · Ayam 0,616 · Kambing 0,784 · dst) bersifat mengikat —
   jangan diutak-atik saat redesign.
4. Pertahankan struktur multi-role (Peternak/Pembeli/Logistik/Admin/Guest) &
   alur yang ada. Redesign tampilan, bukan ulang arsitektur.
5. Kerjakan bertahap per komponen/section; tunjukkan perubahan sebelum lanjut.
6. Mobile-first. Uji di viewport kecil (≈375px) karena banyak pengguna HP murah.
