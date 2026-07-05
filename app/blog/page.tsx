import { BlogSection } from "@/components/blog-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { blogMetadata } from "./metadata";

export const metadata = blogMetadata;

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="w-full md:w-2/3 mx-auto">
          <BlogSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
