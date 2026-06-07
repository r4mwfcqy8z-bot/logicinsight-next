import type { NextConfig } from "next";

const isPages = process.env.PAGES === "1";
const basePath = isPages ? "/logicinsight-next" : "";

const nextConfig: NextConfig = {
  output: isPages ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath ? basePath + "/" : undefined,
  images: { unoptimized: true },
  trailingSlash: isPages,
  turbopack: { root: __dirname },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
