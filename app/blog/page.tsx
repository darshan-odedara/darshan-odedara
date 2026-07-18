import { BlogSection } from "@/components/blog-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { blogMetadata } from "./metadata";
import { getAllPosts } from "@/lib/blog";

export const metadata = blogMetadata;

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="w-full md:w-2/3 mx-auto">
          <BlogSection posts={posts} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
