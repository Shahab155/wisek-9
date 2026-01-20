'use client'
import CanineSecurityHero from "../../../components/services-components/CanineSecurityHero";
import CanineSecurityDetailSection from "../../../components/services-components/CanineSecurityDetailSection";
import CanineSecurityBenefits from "../../../components/services-components/CanineSecurityBenefits";
import CanineSecurityFAQ from "../../../components/services-components/CanineSecurityFAQ";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function CanineSecurityPage() {
  return (
    <>
      <CanineSecurityHero />
      <CanineSecurityDetailSection />
      <CanineSecurityBenefits />
      <CanineSecurityFAQ />
      <Testimonials />
      <PremiumAboutCTALight />
    </>
  );
}
