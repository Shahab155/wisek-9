


// import AboutHeroVideo from "./about/AboutHeroVideo";
// import AboutIntro from "./about/AboutIntro";

import AboutCTA from "./about/AboutCTA";
import AboutHeroVideo from "./about/AboutHeroVideo";
import AboutIntro from "./about/AboutIntro";
import CoverageSection from "./about/CoverageSection";
import ServicesIcons from "./about/ServicesIcons";
import WhyChooseUs from "./WhyChooseUs";

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

     
    </>
  );
}
