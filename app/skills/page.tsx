import { SkillsSection } from "@/components/skills-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { skillsMetadata } from "./metadata";

export const metadata = skillsMetadata;

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="w-full md:w-2/3 mx-auto">
          <SkillsSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
