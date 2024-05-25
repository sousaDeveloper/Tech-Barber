import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const sora = Sora({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Tech Barber",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
