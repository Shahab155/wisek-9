"use client";

import MobilePatrolsHero from "../../../components/services-components/MobilePatrolsHero";
import MobilePatrolsDetailSection from "../../../components/services-components/MobilePatrolsDetailSection";
import MobilePatrolsBenefits from "../../../components/services-components/MobilePatrolsBenefits";
import MobilePatrolsFAQ from "../../../components/services-components/MobilePatrolsFAQ";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function MobilePatrolsPage() {
  return (
    <>
      <MobilePatrolsHero />
      <MobilePatrolsDetailSection />
      <MobilePatrolsBenefits />
      <MobilePatrolsFAQ />
      <Testimonials />
      <PremiumAboutCTALight />
    </>
  );
}
