"use client";

import { usePathname } from "next/navigation";

export const Topbar = () => {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (!pathname) return "Dashboard";
    if (pathname.includes("/shipments")) return "Shipments";
    if (pathname.includes("/impact")) return "Impact Tracker";
    if (pathname.includes("/payments")) return "Payments";
    if (pathname.includes("/settings")) return "Settings";
    return "Dashboard";
  };

  return (
    <header className="bg-courier-surfacewhite h-16 border-b border-courier-hairline px-8 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-courier-primary">{getPageTitle()}</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold text-courier-primary">AgroWaste Mitra</span>
      </div>
    </header>
  );
};
