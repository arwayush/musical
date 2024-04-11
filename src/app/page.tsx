import { SparklesPreview } from "@/components/Sparkles";
import { BentoGridDemo } from "@/components/Bento-Grid";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <SparklesPreview />
      <BentoGridDemo />
    </main>
  );
}
