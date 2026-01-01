
import Hero from "../components/Hero";
import MainServices from "../components/MainServices";
import AgencyBenefits from "../components/AgencyBenefits";
import Excellence from "../components/Excellence";
import CommitmentSection from "../components/CommitmentSection";
import WhyChooseUs from "../components/WhyChooseUs";
import AccreditationSlider from "../components/AccreditationSlider";
import BlogSection from "../components/BlogSection";

import ClientSuccess from "../components/ClientSuccess";

// import RegionsUs from "../components/Regions";
import Cities from "../components/CitiesSlider";
import AboutCTA from "../components/about/AboutCTA";


export default function Home() {
  return (
    <>
      
      
      <Hero />
      <MainServices />
      <AgencyBenefits />
      <CommitmentSection />
      <Excellence />
      <WhyChooseUs />
      <AccreditationSlider />
      <Cities /> 
      <ClientSuccess />
       <BlogSection />
      <AboutCTA />
       
   
    </>
  );
}
