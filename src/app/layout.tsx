import { Footer, Navbar } from "@/components/layout";
import type { Metadata } from "next";
// import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EMORYA",
  description: "Emorya Web built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <GoogleAnalytics gaId="" /> */}
      {/* <GoogleTagManager gtmId="" /> */}
      <body
        className={`${plusJakarta.variable} bg-purple-primary font-plusJakarta scroll-smooth antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
