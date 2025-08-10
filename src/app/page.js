import data from "@/data/content.json";

import Navbar from '@/components/NavBar';
import HeroSection from '@/components/Hero';
import AboutSection from "@/components/About";
import FeatureSection from '@/components/Feature';
import FocusSection from "@/components/Focus";
import VisionMissionSection from "@/components/VisionMission";
import ServicesSection from "@/components/Service";
import ClientSection from '@/components/Client';
import ContactSection from "@/components/Contact";
import CTASection from '@/components/Work';

export default function Home() {
  return (
    <div>
      <Navbar menu={data.menu} />
      <HeroSection hero={data.hero} />
      <AboutSection about={data.about} />
      <FeatureSection feature={data.features} />
      <FocusSection focus={data.focus} />
      <VisionMissionSection vision={data.vision} mission={data.mission} />
      <ServicesSection service={data.service} />
      <ClientSection client={data.client} />
      <CTASection />
      <ContactSection contact={data.contact} />
    </div>
  );
}
