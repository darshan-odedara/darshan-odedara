import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = createMDX({
  extension: /\.mdx?$/,
})({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
});

export default nextConfig;
