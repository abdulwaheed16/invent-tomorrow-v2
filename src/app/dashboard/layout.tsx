import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InventTomorrow",
  description: "AI Agency",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
