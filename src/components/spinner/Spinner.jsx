import { motion } from "framer-motion";

const sizeMap = {
  sm: 6, // 1.5rem
  md: 10, // 2.5rem
  lg: 16, // 4rem
};

export default function Spinner({ size = "md", variant = "ring", className = "", ariaLabel = "loading" }) {
  const numeric = typeof size === "number";
  const dim = numeric ? size : sizeMap[size] || sizeMap.md;

  const inlineStyle = numeric ? { width: dim, height: dim } : undefined;

  // Dots variant
  if (variant === "dots") {
    const dotSize = Math.max(6, Math.round(dim / 4));

    return (
      <div role="status" aria-label={ariaLabel} className={`flex items-center justify-center gap-2 ${className}`}>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ scale: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 0.9, delay: i * 0.15 }}
            style={inlineStyle}
            className="inline-block rounded-full bg-current"
          >
            <span style={{ display: "block", width: dotSize, height: dotSize }} />
          </motion.span>
        ))}
      </div>
    );
  }

  // Square variant
  if (variant === "square") {
    return (
      <div role="status" aria-label={ariaLabel} className={`flex items-center justify-center ${className}`}>
        <motion.div
          style={inlineStyle}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
          className="rounded-2xl border-4 border-current/40 p-1"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
            className="w-full h-full rounded-xl bg-current/80"
          />
        </motion.div>
      </div>
    );
  }

  // Ring (default)
  return (
    <div role="status" aria-label={ariaLabel} className={`inline-flex items-center justify-center ${className}`}>
      <svg
        style={inlineStyle}
        className={`animate-spin ${numeric ? "" : "w-10 h-10"}`}
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="25" cy="25" r="20" strokeWidth="5" stroke="currentColor" strokeOpacity="0.2" fill="none" />
        <path
          fill="currentColor"
          d="M43.94 25c0-10.47-8.47-18.94-18.94-18.94-10.47 0-18.94 8.47-18.94 18.94h6.75c0-6.75 5.49-12.24 12.19-12.24 6.7 0 12.19 5.49 12.19 12.24 0 6.75-5.49 12.24-12.19 12.24-3.03 0-5.82-1.09-7.93-2.92l-4.5 4.5C21.58 45.6 23.91 46.5 26.5 46.5 36.47 46.5 43.94 38.03 43.94 28.06z"
        />
      </svg>
    </div>
  );
}
