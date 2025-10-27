import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InventTomorrow",
  description: "AI Agency",
};

export default async function PublicAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
