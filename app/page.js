import MainServicesNew from "../components/common-components/Service";
import PremiumServicesSection from "../components/home-components/PremiumServicesSection";
import PremiumExcellence from "../components/home-components/PremiumExcellence";
import PremiumAgencyBenefits from "../components/home-components/PremiumAgencyBenefits";
import PremiumWhyChooseUsLight from "../components/common-components/PremiumWhyChooseUsLight";
import PremiumAccreditationSlider from "../components/home-components/PremiumInfiniteAccreditationSlider";
import PremiumCities from "../components/home-components/PremiumCities";
import PremiumClientSuccess from "../components/home-components/PremiumClientSuccess";
import PremiumBlogSection from "../components/home-components/PremiumBlogSection";
import PremiumHero from "../components/home-components/PremiumHero";
import PremiumAboutCTALight from "../components/common-components/PremiumAboutCTALight";

export default function Home() {
  return (
    <>
      <PremiumHero />
      <MainServicesNew />
      <PremiumAgencyBenefits />
      <PremiumServicesSection />
      <PremiumExcellence />
      <PremiumWhyChooseUsLight />
      <PremiumAccreditationSlider />
      <PremiumCities />
      <PremiumClientSuccess />
      <PremiumBlogSection />
      <PremiumAboutCTALight />
    </>
  );
}
