"use client";

import { Sora } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { AuthProvider } from "@/providers/auth";
import Footer from "./_components/Footer";
import { Toaster } from "@/_components/ui/sonner";

const sora = Sora({ subsets: ["latin"], weight: "300" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Tech Barber</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body className={`${sora.className} flex flex-col min-h-screen`}>
        <AuthProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
