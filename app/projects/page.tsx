import { ProjectsSection } from "@/components/projects-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { projectsMetadata } from "./metadata";

export const metadata = projectsMetadata;

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="w-full md:w-2/3 mx-auto">
          <ProjectsSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
