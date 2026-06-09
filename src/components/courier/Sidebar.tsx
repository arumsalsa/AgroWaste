"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/courier", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
    { name: "Shipments", path: "/courier/shipments", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
    { name: "Impact Tracker", path: "/courier/impact", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
    { name: "Payments", path: "/courier/payments", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
    { name: "Settings", path: "/courier/settings", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 border-r border-courier-hairline bg-courier-warmbg flex flex-col z-20">
      {/* Brand Header */}
      <div className="h-24 flex items-center px-6 pt-4 gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-courier-primary text-white flex items-center justify-center shadow-md shadow-courier-primary/30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M13 16h4l4 4V10h-8z"/></svg>
        </div>
        <div>
          <h1 className="font-bold text-lg text-courier-primary leading-tight">Mitra<br/>Logistik</h1>
          <p className="text-[10px] text-courier-textsecondary mt-0.5 tracking-wider">Courier Portal</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = item.path === '/courier' ? pathname === '/courier' : pathname?.startsWith(item.path);
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive 
                  ? "bg-courier-primary text-white shadow-md shadow-courier-primary/20" 
                  : "text-courier-textsecondary hover:bg-courier-primary/5 hover:text-courier-textprimary"
              }`}
            >
              <svg 
                className={`w-5 h-5 mr-3 flex-shrink-0 ${isActive ? "text-white" : "text-courier-textsecondary group-hover:text-courier-primary"}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={isActive ? 2.5 : 2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              <span className={`text-sm flex-1 ${isActive ? "font-bold" : "font-semibold"}`}>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Profile & Logout Button */}
      <div className="p-4 border-t border-courier-hairline bg-courier-warmbg">
        <div className="flex items-center gap-3 mb-4 px-2">
          <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80" alt="Arjun Sharma" className="w-10 h-10 rounded-full border border-courier-hairline object-cover" />
          <div>
            <h4 className="text-sm font-bold text-courier-textprimary">Arjun Sharma</h4>
            <span className="text-[10px] text-courier-textsecondary">ID: Mitra-4421</span>
          </div>
        </div>
        <button className="flex justify-center items-center gap-2 text-courier-textsecondary hover:text-courier-textprimary bg-courier-surfacewhite border border-courier-hairline hover:bg-courier-hairline font-semibold text-xs transition-colors w-full py-2.5 rounded-lg shadow-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
};
