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
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg
        className="absolute inset-0 transform -rotate-90"
        width="96"
        height="96"
      >
        {/* Background Circle */}
        <circle
          cx="48"
          cy="48"
          r={radius * 0.75}
          stroke="#F3F3F3"
          strokeWidth="6"
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx="48"
          cy="48"
          r={radius * 0.75}
          stroke={strokeColor}
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference * 0.75}
          strokeDashoffset={offset * 0.75}
          strokeLinecap="round"
          className="transition-all duration-[1500ms] ease-out"
        />
      </svg>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center z-10 scale-75">
        <span className="text-3xl font-bold text-[var(--primary-text-color)]">
          {displayValue}
        </span>
        <span className="text-sm text-[var(--text-muted)]">Health</span>
      </div>
    </div>
  );
}
