"use client";

import CCTVMonitoringHero from "../../../components/service-components/CCTVMonitoringHero";
import CCTVMonitoringDetailSection from "../../../components/service-components/CCTVMonitoringDetailSection";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function CCTVMonitoringPage() {
  return (
    <>
      <CCTVMonitoringHero />
      <CCTVMonitoringDetailSection />
      <Testimonials />
      <PremiumAboutCTALight />
    </>
  );
}
