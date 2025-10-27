import LoadingScreen from "@/components/loading-screen";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";

// Segoe UI

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const segoeUi = localFont({
  src: "../../public/fonts/segoeuithis.ttf",
  variable: "--font-segoe-ui",
  display: "swap",
});

// const segoeUiAB = localFont({
//   src: "../../public/fonts/segoeuiabcolor.ttf",
//   variable: "--font-segoe-ui-ab",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "InventTomorrow",
  description: "AI Agency",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${segoeUi.className}  antialiased`}>
        <main className="relative scroll-smooth overflow-x-hidden">
          <Providers>
            <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
          </Providers>
        </main>
      </body>
    </html>
  );
}
