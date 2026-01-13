"use client";

import Link from "next/link";
import FacilitiesManagementHero from "../../../components/service-components/FacilitiesManagementHero";
import FacilitiesManagementDetailSection from "../../../components/service-components/FacilitiesManagementDetailSection";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function FacilitiesManagementPage() {
  return (
    <>
      <FacilitiesManagementHero />

      <FacilitiesManagementDetailSection />
      <Testimonials />

      <PremiumAboutCTALight />
    </>
  );
}
