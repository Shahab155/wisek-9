"use client";

import Link from "next/link";
import SecurityDogServicesHero from "../../../components/service-components/SecurityDogServicesHero";
import SecurityDogServicesDetailSection from "../../../components/service-components/SecurityDogServicesDetailSection";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function SecurityDogServicesPage() {
  return (
    <>
      <SecurityDogServicesHero />

      <SecurityDogServicesDetailSection />
      <Testimonials />

      <PremiumAboutCTALight />
    </>
  );
}
