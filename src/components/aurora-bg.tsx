/**
 * Always-on ambient aurora layer.
 * Three blurred radial blobs in purple/pink that drift slowly.
 * Intended to sit behind hero / dark zones; non-interactive.
 */
export function AuroraBg({ variant = "default" }: { variant?: "default" | "cool" | "warm" }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -inset-[10%] blur-3xl">
        <span
          className="absolute w-[50vmax] aspect-square rounded-full opacity-45 mix-blend-screen"
          style={{
            top: "-10%", left: "-10%",
            background: "radial-gradient(circle, #8B5CF6, transparent 60%)",
            animation: "aurora-drift 22s ease-in-out infinite alternate",
          }}
        />
        <span
          className="absolute w-[60vmax] aspect-square rounded-full opacity-45 mix-blend-screen"
          style={{
            bottom: "-20%", right: "-10%",
            background: "radial-gradient(circle, #FF6B9C, transparent 60%)",
            animation: "aurora-drift 22s ease-in-out -8s infinite alternate",
          }}
        />
        <span
          className="absolute w-[40vmax] aspect-square rounded-full opacity-45 mix-blend-screen"
          style={{
            top: "40%", left: "30%",
            background: variant === "warm"
              ? "radial-gradient(circle, #BC9CFF, transparent 60%)"
              : "radial-gradient(circle, #6D28D9, transparent 60%)",
            animation: "aurora-drift 22s ease-in-out -14s infinite alternate",
          }}
        />
      </div>
      <style>{`
        @keyframes aurora-drift {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(6%, -4%) scale(1.15); }
        }
      `}</style>
    </div>
  );
}

/** Subtle dot-grid mask, fades to center. */
export function GridBg() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(167,139,250,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.08) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
      }}
    />
  );
}
