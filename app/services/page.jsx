import Testimonials from "../../components/common-components/Testimonials";
import PremiumAboutCTALight from "../../components/common-components/PremiumAboutCTALight";
import ServiceHero from "../../components/service-components/ServiceHero";
import AllServices from "../../components/service-components/AllServices";

export default function ServicesUs() {
  return (
    <>
      <ServiceHero />
      <AllServices />
      <Testimonials />
      <PremiumAboutCTALight />
    </>
  );
}
