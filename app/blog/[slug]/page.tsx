import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getAllPosts()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="mx-auto w-full max-w-3xl px-6 pb-20 pt-36 lg:px-8">
        <header className="mb-12 border-b border-border/60 pb-10">
          <p className="mb-4 text-sm font-medium text-primary">{post.category}</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <p className="mt-5 text-lg font-bold text-muted-foreground">
            By {post.author} · {new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(`${post.date}T00:00:00`))}
          </p>
        </header>
        <div className="prose prose-slate max-w-none dark:prose-invert">
          <Post />
        </div>
      </article>
      <Footer />
    </main>
  );
}
