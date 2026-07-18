declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { BlogPostMeta } from "@/lib/blog";

  const MDXContent: ComponentType;
  export const metadata: Omit<BlogPostMeta, "slug">;
  export default MDXContent;
}
