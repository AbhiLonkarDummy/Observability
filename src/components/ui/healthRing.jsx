import { useEffect, useState } from "react";

export default function HealthRing({ percentage }) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);
  const [displayValue, setDisplayValue] = useState(0); // For animated number

  // Determine ring color
  let strokeColor = "#22C55E"; // green
  if (percentage <= 33) {
    strokeColor = "#EF4444"; // red
  } else if (percentage <= 66) {
    strokeColor = "#FACC15"; // yellow
  }

  // Animate ring fill
  useEffect(() => {
    setTimeout(() => {
      setOffset(circumference - (percentage / 100) * circumference);
    }, 100);
  }, [percentage]);

  // Animate number increment
  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5s
    const increment = percentage / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= percentage) {
        start = percentage;
        clearInterval(timer);
      }
      setDisplayValue(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg
        className="absolute inset-0 transform -rotate-90"
        width="128"
        height="128"
      >
        {/* Background Circle */}
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="#F3F3F3"
          strokeWidth="8"
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke={strokeColor}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-[1500ms] ease-out"
        />
      </svg>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center z-10">
        <span className="text-3xl font-bold text-[var(--primary-text-color)]">
          {displayValue}
        </span>
        <span className="text-sm text-[var(--text-muted)]">Health</span>
      </div>

      {/* Pulse Glow Effect */}
      {/* <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "6px",
          left: "6px",
          right: "6px",
          bottom: "6px",
          "--glow-color": strokeColor,
          animation: "pulseGlow 3s infinite",
        }}
      ></div> */}
    </div>
  );
}
