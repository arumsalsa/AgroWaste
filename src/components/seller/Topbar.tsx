"use client";

export const Topbar = () => {
  return (
    <header className="bg-seller-surfacewhite h-16 border-b border-seller-hairline px-8 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-4 w-96">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-seller-textsecondary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </span>
          <input type="text" placeholder="Cari pesanan, limbah, atau mitra..." className="w-full pl-9 pr-4 py-2 bg-seller-warmbg border border-seller-hairline rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-seller-primary focus:bg-seller-surfacewhite transition-colors" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        {/* Selektor Bank/Kategori Cepat */}
        <div className="relative inline-block text-left">
          <select className="block w-full py-1.5 pl-3 pr-10 text-xs bg-seller-warmbg border border-seller-hairline rounded-full focus:outline-none focus:ring-1 focus:ring-seller-primary appearance-none cursor-pointer text-seller-textsecondary font-medium">
            <option>Semua Wilayah</option>
            <option>Jawa Timur</option>
            <option>Jawa Tengah</option>
            <option>Jawa Barat</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-seller-textsecondary">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        <button className="relative p-2 text-seller-textsecondary hover:text-seller-textprimary hover:bg-seller-warmbg rounded-full transition-colors">
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-seller-semred"></span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </button>
      </div>
    </header>
  );
};
