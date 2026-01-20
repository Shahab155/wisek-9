import ContactHero from "../../components/contact-components/ContactHero";
import ContactFormSection from "../../components/contact-components/ContactFormSection";
import ContactMapDetails from "../../components/contact-components/ContactMapDetails";
import MainServicesNew from "../../components/common-components/Service";
import PremiumAboutCTALight from "../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../components/common-components/Testimonials";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactMapDetails />
      <MainServicesNew/>
      <Testimonials/>
      <PremiumAboutCTALight/>
    </>
  );
}
