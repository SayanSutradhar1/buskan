import HeroSection from "@/components/Home/HeroSection";
import MainSection from "@/components/Home/MainSection";

export default function Home() {
  return (
    <main>
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-20 min-h-[70vh] flex items-center">
        <HeroSection />
      </section>
      <section className="px-4 sm:px-6 md:px-8 lg:px-20">
        <MainSection />
      </section>
    </main>
  );
}
