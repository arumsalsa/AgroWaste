
import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/admin/Toast";

export const metadata: Metadata = {
  title: "AgroWaste | Panel Pengelolaan",
  description: "Panel Pengelolaan AgroWaste untuk mengelola platform pertanian sirkular.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,500;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
