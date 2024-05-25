"use client";

import { Sora } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { SessionProvider } from "next-auth/react";

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
      </head>
      <body className={sora.className}>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
