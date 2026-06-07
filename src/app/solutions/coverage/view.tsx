"use client";

import { PageHead } from "@/components/sections/page-head";
import { CoverageExplorer } from "@/components/sections/coverage-explorer";
import { FinalCTA } from "@/components/sections/why-and-cta";

export default function CoverageView() {
  return (
    <>
      <PageHead
        eyebrow="Coverage explorer"
        title={
          <>
            What Overwatch{" "}
            <span className="italic font-bold text-[var(--color-p-200)]" style={{ letterSpacing: "-0.045em" }}>
              actually watches.
            </span>
          </>
        }
        sub="Five domains, one appliance boundary. Pick a layer to see the exact signals Overwatch collects and the engine behind it."
      />
      <CoverageExplorer />
      <FinalCTA />
    </>
  );
}
