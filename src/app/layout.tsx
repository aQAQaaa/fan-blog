import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import Scanlines from "@/components/Scanlines";

export const metadata: Metadata = {
  title: "FanYiyang | 赛博朋克博客",
  description: "FanYiyang 的个人博客 - 赛博朋克风格",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <CursorGlow />
        <Scanlines />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
