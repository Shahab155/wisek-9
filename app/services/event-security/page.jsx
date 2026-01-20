"use client";

import EventSecurityHero from "../../../components/services-components/EventSecurityHero";
import EventSecurityDetailSection from "../../../components/services-components/EventSecurityDetailSection";
import EventSecurityBenefits from "../../../components/services-components/EventSecurityBenefits";
import EventSecurityFAQ from "../../../components/services-components/EventSecurityFAQ";
import PremiumAboutCTALight from "../../../components/common-components/PremiumAboutCTALight";
import Testimonials from "../../../components/common-components/Testimonials";

export default function EventSecurityPage() {
  return (
    <>
      <EventSecurityHero />
      <EventSecurityDetailSection />
      <EventSecurityBenefits />
      <EventSecurityFAQ />
      <Testimonials />
      <PremiumAboutCTALight />
    </>
  );
}
