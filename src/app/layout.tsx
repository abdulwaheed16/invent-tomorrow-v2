import LoadingScreen from "@/components/loading-screen";
import Providers from "@/components/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";

// Inter font (similar to Open Sauce)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Segoe UI
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
      <head>
        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MR5983B5');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${segoeUi.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MR5983B5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <main className="relative scroll-smooth overflow-x-hidden">
          <Providers>
            <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
          </Providers>
        </main>
      </body>
    </html>
  );
}
