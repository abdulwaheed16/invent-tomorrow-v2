"use client";

interface TiltedDividerProps {
  topColor?: string;
  bottomColor?: string;
  angle?: "left" | "right";
  height?: number;
}

export default function TiltedDivider({
  topColor = "#ffffff",
  bottomColor = "#f8fafc",
  angle = "right",
  height = 80,
}: TiltedDividerProps) {
  return (
    <div className="relative w-full" style={{ height: `${height}px` }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            angle === "right"
              ? "M0,0 L1200,0 L1200,80 L0,40 Z"
              : "M0,0 L1200,40 L1200,80 L0,80 Z"
          }
          fill={topColor}
        />
        <path
          d={
            angle === "right"
              ? "M0,40 L1200,80 L1200,80 L0,80 Z"
              : "M0,0 L1200,0 L1200,40 L0,80 Z"
          }
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
