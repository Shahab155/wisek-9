"use client";

import TemporaryStaffHero from "../../../components/services-components/TemporaryStaffHero";
import TemporaryStaffDetailSection from "../../../components/services-components/TemporaryStaffDetailSection";
import TemporaryStaffBenefits from "../../../components/services-components/TemporaryStaffBenefits";
import TemporaryStaffFAQ from "../../../components/services-components/TemporaryStaffFAQ";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function TemporaryStaffPage() {
  return (
    <>
      <TemporaryStaffHero />
      <TemporaryStaffDetailSection />
      <TemporaryStaffBenefits />
      <TemporaryStaffFAQ />
      <Testimonials />
      <PremiumAboutCTALight />
    </>
  );
}
