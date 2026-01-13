"use client";

import Link from "next/link";
import MannedSecurityHero from "../../../components/service-components/MannedSecurityHero";
import MannedSecurityDetailSection from "../../../components/service-components/MannedSecurityDetailSection";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function MannedSecurityPage() {
  return (
    <>
      <MannedSecurityHero />

      <MannedSecurityDetailSection />
      <Testimonials />

      <PremiumAboutCTALight />
    </>
  );
}
