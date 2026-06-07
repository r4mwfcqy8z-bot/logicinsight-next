"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Mounts children only when they enter the viewport.
 * Pauses children when they leave by unmounting via the `keepMounted` switch.
 *
 * Used to keep R3F canvases off the GPU when off-screen.
 */
export function VisibilityMount({
  children,
  rootMargin = "200px 0px 200px 0px",
  className,
  fallback,
}: {
  children: ReactNode;
  rootMargin?: string;
  className?: string;
  fallback?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  // Pause when tab is hidden as well
  const [pageHidden, setPageHidden] = useState(false);
  useEffect(() => {
    const onVis = () => setPageHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const active = visible && !pageHidden;

  // Truly UNMOUNT children when off-screen (or tab hidden) so R3F canvases stop
  // their render loop entirely instead of running invisibly. `everSeen` is no
  // longer used to keep them mounted — we mount on enter, unmount on leave.
  return (
    <div ref={ref} className={className}>
      {active ? children : (fallback ?? null)}
    </div>
  );
}
