"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "../loading-screen";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep loader visible for 2.5s
    const timer = setTimeout(() => {
      const loader = document.getElementById("app-loader");
      if (loader) {
        loader.classList.add("opacity-0", "transition-opacity", "duration-700");
        setTimeout(() => setIsLoading(false), 700);
      } else {
        setIsLoading(false);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return <>{children}</>;
}
