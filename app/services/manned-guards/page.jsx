"use client";

import MannedGuardingHero from "../../../components/services-components/MannedGuardingHero";
import MannedGuardingDetailSection from "../../../components/services-components/MannedGuardingDetailSection";
import MannedGuardingBenefits from "../../../components/services-components/MannedGuardingBenefits";
import MannedGuardingFAQ from "../../../components/services-components/MannedGuardingFAQ";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function MannedGuardingPage() {
  return (
    <>
      <MannedGuardingHero />
      <MannedGuardingDetailSection />
      <MannedGuardingBenefits />
      <MannedGuardingFAQ />
      <Testimonials />
      <PremiumAboutCTALight />
    </>
  );
}
