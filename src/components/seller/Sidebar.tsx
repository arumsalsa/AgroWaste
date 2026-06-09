"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Ringkasan", path: "/seller", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
    { name: "Inventaris", path: "/seller/inventory", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
    { name: "Pesanan", path: "/seller/orders", badge: 3, icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
    { name: "Analitik", path: "/seller/analytics", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { name: "Lencana Dampak", path: "/seller/badges", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
    { name: "Pengaturan", path: "/seller/settings", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 border-r border-seller-hairline bg-[#EBE7E0] flex flex-col z-20">
      {/* Brand Header */}
      <div className="h-20 flex items-center px-6 pt-4">
        <Link href="/seller" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-seller-primary tracking-tight">AgroWaste</span>
        </Link>
      </div>

      {/* Profile */}
      <div className="px-6 py-6 border-b border-seller-hairline/50 mb-4">
        <div className="flex items-center gap-3">
          <img src="https://ui-avatars.com/api/?name=Pak+Sugeng&background=3F4F44&color=fff&rounded=true" alt="Avatar" className="w-10 h-10 object-cover rounded-full shadow-sm" />
          <div>
            <span className="text-[10px] text-seller-primary font-bold uppercase tracking-wider block leading-tight">Peternak Panel</span>
            <h2 className="text-xs font-bold text-seller-textprimary leading-tight mt-0.5">AgroWaste Merchant</h2>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? "bg-seller-primary text-white shadow-md shadow-seller-primary/20" 
                  : "text-seller-textsecondary hover:bg-seller-warmbg hover:text-seller-textprimary"
              }`}
            >
              <svg 
                className={`w-5 h-5 mr-3 flex-shrink-0 ${isActive ? "text-white" : "text-seller-textsecondary group-hover:text-seller-primary"}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={isActive ? 2.5 : 2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              <span className={`text-sm flex-1 ${isActive ? "font-bold" : "font-semibold"}`}>{item.name}</span>
              
              {item.badge && (
                <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${isActive ? "bg-white text-seller-primary" : "bg-amber-500 text-white"}`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-6 border-t border-seller-hairline/50">
        <button className="flex items-center gap-3 text-seller-semred hover:text-red-700 font-semibold text-sm transition-colors w-full px-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Keluar
        </button>
      </div>
    </aside>
  );
}
