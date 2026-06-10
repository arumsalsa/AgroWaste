"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, getUser } from "@/lib/auth";

export default function SellerGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = getToken();
    const user  = getUser();
    if (!token) {
      router.push("/login?callbackUrl=/seller");
      return;
    }
    if (!user || user.role !== "peternak") {
      router.push("/");
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 rounded-full border-4 border-seller-primary/20 border-t-seller-primary animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}
