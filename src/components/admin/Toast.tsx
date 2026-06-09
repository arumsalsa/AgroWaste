"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type ToastType = "success" | "error" | "info";

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

const ToastContext = createContext<{
  showToast: (message: string, type?: ToastType) => void;
}>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "success") => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-14 right-6 z-[100] flex flex-col gap-2 pointer-events-none"
      >
        {toasts.map((toast) => (
          <ToastCard key={toast.id} {...toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

const dotColors: Record<ToastType, string> = {
  success: "bg-green-400",
  error:   "bg-red-400",
  info:    "bg-blue-400",
};

function ToastCard({ message, type }: ToastItem) {
  return (
    <div
      role="status"
      className="flex items-center gap-3 px-4 py-3 bg-[#111] rounded-xl shadow-2xl text-white pointer-events-auto max-w-xs"
    >
      <span className={`w-2 h-2 rounded-full shrink-0 ${dotColors[type]}`} aria-hidden="true" />
      <span className="text-xs font-semibold leading-relaxed">{message}</span>
    </div>
  );
}
