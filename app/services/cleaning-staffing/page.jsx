"use client";

import CleaningStaffingHero from "../../../components/services-components/CleaningStaffingHero";
import CleaningStaffingDetailSection from "../../../components/services-components/CleaningStaffingDetailSection";
import CleaningStaffingBenefits from "../../../components/services-components/CleaningStaffingBenefits";
import CleaningStaffingFAQ from "../../../components/services-components/CleaningStaffingFAQ";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function CleaningStaffingPage() {
  return (
    <>
      <CleaningStaffingHero />
      <CleaningStaffingDetailSection />
      <CleaningStaffingBenefits />
      <CleaningStaffingFAQ />
      <Testimonials />
      <PremiumAboutCTALight />
    </>
  );
}
