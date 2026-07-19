import fs from "node:fs";
import path from "node:path";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
};

type Frontmatter = Omit<BlogPostMeta, "slug">;

function isValidFrontmatter(value: Partial<Frontmatter>): value is Frontmatter {
  return Boolean(
    value.title &&
      value.excerpt &&
      value.date &&
      value.author &&
      value.category &&
      Array.isArray(value.tags),
  );
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  if (!fs.existsSync(postsDirectory)) return [];

  const posts = await Promise.all(
    fs
      .readdirSync(postsDirectory)
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const { metadata } = await import(`@/content/blog/${fileName}`);

      if (!isValidFrontmatter(metadata)) {
        throw new Error(`Invalid metadata in content/blog/${fileName}`);
      }

      return { ...metadata, slug };
      }),
  );

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(slug: string): Promise<BlogPostMeta | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
