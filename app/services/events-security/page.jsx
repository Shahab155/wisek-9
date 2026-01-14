"use client";

import Link from "next/link";
import EventsSecurityHero from "../../../components/service-components/EventsSecurityHero";
import EventsSecurityDetailSection from "../../../components/service-components/EventsSecurityDetailSection";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function EventsSecurityPage() {
  return (
    <>
      <EventsSecurityHero />

      <EventsSecurityDetailSection />
      <Testimonials />

            <PremiumAboutCTALight />
      
    </>
  );
}
