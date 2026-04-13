import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Save a Life Physiotherapy",
  description:
    "Restore your health regain your strenght at save a life physiotherapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-poppins">
        <NavBar />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
