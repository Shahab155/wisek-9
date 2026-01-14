"use client";

import Link from "next/link";
import KeyholdingMobileSecurityHero from "../../../components/service-components/KeyholdingMobileSecurityHero";
import KeyholdingMobileSecurityDetailSection from "../../../components/service-components/KeyholdingMobileSecurityDetailSection";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function MobileSecurityPage() {
  return (
    <>
      <KeyholdingMobileSecurityHero />

      <KeyholdingMobileSecurityDetailSection />
      <Testimonials />

      <PremiumAboutCTALight />
    </>
  );
}
