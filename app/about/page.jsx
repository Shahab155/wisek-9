import NewAboutHero from "../../components/about-components/NewAboutHero";
import AboutDetailSection from "../../components/about-components/AboutDetailSection";
import MainServicesNew from "../../components/common-components/Service";
import WhyChooseUs from "../../components/common-components/PremiumWhyChooseUsLight";
import PremiumAboutCTALight from "../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../components/common-components/Testimonials";

export default function AboutPage() {
  return (
    <>
      <main className="overflow-hidden">
        <NewAboutHero />
        <AboutDetailSection />
        <MainServicesNew />
        <WhyChooseUs />
        <Testimonials />
        <PremiumAboutCTALight />
      </main>
    </>
  );
}
