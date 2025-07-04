import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";

const geistSans = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | DevStore",
    default: "DevStore",
  },
  description: "A store for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} antialiased`}>
      <body className="bg-zinc-950 text-zinc-50">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
