import Footer from "@/components/Footer";

import AboutHeroVideo from "@/components/about/AboutHeroVideo";
import AboutIntro from "@/components/about/AboutIntro";
import ServicesIcons from "@/components/about/ServicesIcons";
import CoverageSection from "@/components/about/CoverageSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <main className="overflow-hidden">
        <AboutHeroVideo />
        <AboutIntro />
        <ServicesIcons />
        <CoverageSection />
        <WhyChooseUs />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}
