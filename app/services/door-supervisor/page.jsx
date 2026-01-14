"use client";

import Link from "next/link";
import DoorSupervisorHero from "../../../components/service-components/DoorSupervisorHero";
import DoorSupervisorDetailSection from "../../../components/service-components/DoorSupervisorDetailSection";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function DoorSupervisorPage() {
  return (
    <>
      <DoorSupervisorHero />

      <DoorSupervisorDetailSection />
      <Testimonials />

      <PremiumAboutCTALight />
    </>
  );
}
