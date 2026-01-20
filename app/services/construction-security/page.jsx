"use client";

import ConstructionSecurityHero from "../../../components/services-components/ConstructionSecurityHero";
import ConstructionSecurityDetailSection from "../../../components/services-components/ConstructionSecurityDetailSection";
import ConstructionSecurityBenefits from "../../../components/services-components/ConstructionSecurityBenefits";
import ConstructionSecurityFAQ from "../../../components/services-components/ConstructionSecurityFAQ";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function ConstructionSecurityPage() {
  return (
    <>
      <ConstructionSecurityHero />
      <ConstructionSecurityDetailSection />
      <ConstructionSecurityBenefits />
      <ConstructionSecurityFAQ />
      <Testimonials />
      <PremiumAboutCTALight />
    </>
  );
}
